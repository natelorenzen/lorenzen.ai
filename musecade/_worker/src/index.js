// Musecade API: Cloudflare Worker + D1.
//
// POST /run/start     {game, player, path, agent?}            -> {run_id, run_token, mode, player}
// POST /run/event     {run_id, run_token, events:[...]}        -> {accepted, duplicates, rejected, act}
// POST /run/complete  {run_id, run_token, ending, died, events?} -> {score, rank, ranked, ...}
// POST /run/submit    {game, player, path, ending, died, events, nonce}  (one-shot, for agents without HTTP)
// GET  /leaderboard   ?game=all|<slug>&period=all|week&limit=10
// GET  /stats         ?game=all|<slug>
//
// Every write endpoint also accepts GET with the same fields as query
// parameters (events comma-separated), for agents that can only fetch URLs.
//
// Agents report canonical event IDs. Point values live only in each game's
// events.json, imported here at build time. The server never accepts a score.

import THE_BLACK_ROAD from "../../theblackroad/events.json" with { type: "json" };
import THE_GLASS_CITY from "../../theglasscity/events.json" with { type: "json" };
import THE_SEA_GLASS_INN from "../../theseaglassinn/events.json" with { type: "json" };

export const GAMES = { theblackroad: THE_BLACK_ROAD, theglasscity: THE_GLASS_CITY, theseaglassinn: THE_SEA_GLASS_INN };

const MAX_BODY_BYTES = 8192;
const MAX_EVENTS_PER_REQUEST = 60;
const EVENT_ID = /^[A-Z0-9_]{3,48}$/;
const RUN_ID = /^r_[a-z0-9]{20}$/;
const TOKEN = /^[a-f0-9]{64}$/;
const WEEK_SECONDS = 7 * 24 * 3600;

// Per-IP limits: [requests, window seconds]
const LIMITS = {
  start: [12, 3600],
  event: [300, 3600],
  complete: [30, 3600],
  submit: [10, 3600],
};

// Deliberately small; names are also forced to A-Z 0-9 space.
const BLOCKED_NAME_PARTS = ["FUCK", "SHIT", "CUNT", "NIGGER", "NIGGA", "FAGGOT", "RAPE", "NAZI", "HITLER", "WHORE", "SLUT", "KIKE", "SPIC", "CHINK", "RETARD"];

// ---------------------------------------------------------------- helpers

const now = () => Math.floor(Date.now() / 1000);

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "cache-control": "no-store",
      ...extra,
    },
  });
}

const fail = (status, error, detail) => json(detail ? { error, detail } : { error }, status);

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomString(alphabet, length) {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  let out = "";
  for (const b of bytes) out += alphabet[b % alphabet.length];
  return out;
}

function randomHex(bytes) {
  return [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function cleanPlayerName(raw) {
  let name = String(raw ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 12)
    .trim();
  const squashed = name.replace(/ /g, "");
  if (!name || BLOCKED_NAME_PARTS.some((w) => squashed.includes(w))) name = "COURIER";
  return name;
}

const cleanAgent = (raw) => String(raw ?? "").replace(/[^A-Za-z0-9 ._-]+/g, "").trim().slice(0, 24) || null;

async function readInput(request, url) {
  if (request.method === "GET") {
    const q = Object.fromEntries(url.searchParams.entries());
    if (typeof q.events === "string") q.events = q.events.split(",").map((s) => s.trim()).filter(Boolean);
    if (typeof q.event === "string") q.events = [...(q.events || []), q.event];
    return q;
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) throw new HttpError(413, "body_too_large");
  if (!text) return {};
  try {
    const body = JSON.parse(text);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    if (typeof body.event === "string") body.events = [...(body.events || []), body.event];
    return body;
  } catch {
    throw new HttpError(400, "invalid_json");
  }
}

class HttpError extends Error {
  constructor(status, code, detail) {
    super(code);
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

async function clientKey(request, env) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  return sha256Hex(`${env.IP_SALT || "musecade-dev-salt"}:${ip}`);
}

async function rateLimit(env, kind, ipHash) {
  const [max, windowSec] = LIMITS[kind];
  const t = now();
  const windowStart = t - (t % windowSec);
  const bucket = `${kind}:${ipHash}:${windowStart}`;
  const row = await env.DB.prepare(
    `INSERT INTO rate_limits (bucket, count, expires_at) VALUES (?1, 1, ?2)
     ON CONFLICT(bucket) DO UPDATE SET count = count + 1 RETURNING count`
  ).bind(bucket, windowStart + windowSec).first();
  if (Math.random() < 0.02) {
    await env.DB.prepare(`DELETE FROM rate_limits WHERE expires_at < ?1`).bind(t).run();
  }
  if (row && row.count > max) throw new HttpError(429, "rate_limited", `Try again in ${windowStart + windowSec - t}s.`);
}

// ---------------------------------------------------------------- scoring rules

export function maxScore(game) {
  const events = Object.values(game.events).reduce((s, e) => s + e.points, 0);
  const ending = Math.max(...Object.values(game.endings).map((e) => e.points));
  return events + ending + game.rules.survival_bonus;
}

// Validate one event against the run's current state. Returns null if OK, else a reason.
export function checkEvent(game, act, have, id) {
  if (!EVENT_ID.test(id)) return "malformed";
  if (game.endings[id]) return "endings_are_sent_with_run_complete";
  const def = game.events[id];
  if (!def) return "unknown_event";
  if (def.min_act && act < def.min_act) return `not_before_act_${def.min_act}`;
  if (def.max_act && act > def.max_act) return `not_after_act_${def.max_act}`;
  for (const req of def.requires || []) if (!have.has(req)) return `requires_${req}`;
  if (def.requires_any && !def.requires_any.some((r) => have.has(r))) return `requires_one_of_${def.requires_any.join("|")}`;
  for (const ex of def.excludes || []) if (have.has(ex)) return `excluded_by_${ex}`;
  for (const h of have) if ((game.events[h]?.excludes || []).includes(id)) return `excluded_by_${h}`;
  return null;
}

// Apply a batch in order. Mutates `have`. Returns {accepted, duplicates, rejected, act}.
export function applyEvents(game, run, have, ids) {
  const accepted = [], duplicates = [], rejected = [];
  let act = run.act;
  for (const raw of ids) {
    const id = String(raw).trim().toUpperCase();
    if (have.has(id)) { duplicates.push(id); continue; }
    if (have.size >= game.rules.max_events_per_run) { rejected.push({ id, reason: "event_limit_reached" }); continue; }
    const reason = checkEvent(game, act, have, id);
    if (reason) { rejected.push({ id, reason }); continue; }
    have.add(id);
    accepted.push(id);
    const sets = game.events[id].sets_act;
    if (sets && sets > act) act = sets;
  }
  return { accepted, duplicates, rejected, act };
}

export function scoreRun(game, have, endingId, survived) {
  let score = 0;
  const breakdown = {};
  for (const id of have) {
    const e = game.events[id];
    if (!e) continue;
    score += e.points;
    breakdown[e.category] = (breakdown[e.category] || 0) + e.points;
  }
  const ending = game.endings[endingId];
  score += ending.points;
  breakdown.ending = ending.points;
  if (survived) {
    score += game.rules.survival_bonus;
    breakdown.survival = game.rules.survival_bonus;
  }
  return { score, breakdown };
}

function summarize(game, have) {
  const secretsTotal = Object.values(game.events).filter((e) => e.secret).length;
  const secretsFound = [...have].filter((id) => game.events[id]?.secret).length;
  const achievements = [...have].filter((id) => game.events[id]?.category === "achievement").map((id) => game.events[id].title);
  return { secrets: { found: secretsFound, total: secretsTotal }, achievements };
}

// ---------------------------------------------------------------- run access

async function loadRun(env, input) {
  const runId = String(input.run_id || "");
  const token = String(input.run_token || "");
  if (!RUN_ID.test(runId) || !TOKEN.test(token)) throw new HttpError(400, "missing_or_malformed_run_credentials");
  const run = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  if (!run) throw new HttpError(404, "run_not_found");
  if ((await sha256Hex(token)) !== run.token_hash) throw new HttpError(403, "bad_run_token");
  const game = GAMES[run.game];
  if (!game) throw new HttpError(410, "game_retired");
  return { run, game };
}

async function loadHave(env, runId) {
  const { results } = await env.DB.prepare(`SELECT event_id FROM run_events WHERE run_id = ?1 ORDER BY seq`).bind(runId).all();
  return new Set(results.map((r) => r.event_id));
}

function parseEvents(input) {
  const ids = input.events == null ? [] : input.events;
  if (!Array.isArray(ids)) throw new HttpError(400, "events_must_be_a_list");
  if (ids.length > MAX_EVENTS_PER_REQUEST) throw new HttpError(400, "too_many_events_in_one_request");
  return ids.map((x) => String(x));
}

function eventInserts(env, runId, startSeq, accepted, t) {
  return accepted.map((id, i) =>
    env.DB.prepare(`INSERT OR IGNORE INTO run_events (run_id, event_id, seq, created_at) VALUES (?1, ?2, ?3, ?4)`).bind(runId, id, startSeq + i, t)
  );
}

// ---------------------------------------------------------------- handlers

async function handleStart(request, env, url) {
  const input = await readInput(request, url);
  const slug = String(input.game || "").toLowerCase();
  const game = GAMES[slug];
  if (!game) throw new HttpError(400, "unknown_game", `Known games: ${Object.keys(GAMES).join(", ")}`);
  const path = String(input.path || "").toUpperCase().trim();
  if (!game.paths.includes(path)) throw new HttpError(400, "unknown_path", `Paths: ${game.paths.join(", ")}`);
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "start", ipHash);

  const player = cleanPlayerName(input.player);
  const runId = "r_" + randomString("abcdefghijklmnopqrstuvwxyz0123456789", 20);
  const token = randomHex(32);
  const t = now();
  await env.DB.prepare(
    `INSERT INTO runs (id, game, token_hash, player, path, agent, status, act, created_at, updated_at, ip_hash)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'active', 1, ?7, ?7, ?8)`
  ).bind(runId, slug, await sha256Hex(token), player, path, cleanAgent(input.agent), t, ipHash).run();

  return json({ run_id: runId, run_token: token, mode: "RANKED", game: slug, player, path });
}

async function handleEvent(request, env, url) {
  const input = await readInput(request, url);
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "event", ipHash);
  const { run, game } = await loadRun(env, input);
  if (run.status !== "active") throw new HttpError(409, "run_already_complete");
  if (now() - run.created_at > game.rules.run_ttl_days * 86400) throw new HttpError(410, "run_expired");

  const ids = parseEvents(input);
  const have = await loadHave(env, run.id);
  const startSeq = have.size;
  const result = applyEvents(game, run, have, ids);
  const t = now();
  if (result.accepted.length) {
    await env.DB.batch([
      ...eventInserts(env, run.id, startSeq, result.accepted, t),
      env.DB.prepare(`UPDATE runs SET act = ?1, updated_at = ?2 WHERE id = ?3 AND status = 'active'`).bind(result.act, t, run.id),
    ]);
  }
  return json(result);
}

async function completedResponse(env, run, game, have, extra = {}) {
  const rank = run.ranked
    ? (await env.DB.prepare(`SELECT COUNT(*) AS n FROM runs WHERE status = 'complete' AND ranked = 1 AND score > ?1`).bind(run.score).first()).n + 1
    : null;
  const gameRank = run.ranked
    ? (await env.DB.prepare(`SELECT COUNT(*) AS n FROM runs WHERE status = 'complete' AND ranked = 1 AND game = ?1 AND score > ?2`).bind(run.game, run.score).first()).n + 1
    : null;
  return json({
    run_id: run.id,
    player: run.player,
    path: run.path,
    game: run.game,
    ending: run.ending,
    ending_title: game.endings[run.ending]?.title,
    died: !!run.died,
    survived: !!run.survived,
    score: run.score,
    ranked: !!run.ranked,
    rank,
    game_rank: gameRank,
    note: run.ranked ? undefined : run.unranked_reason,
    ...summarize(game, have),
    leaderboard_url: `${env.PUBLIC_SITE || "https://lorenzen.ai/musecade"}/#scores`,
    ...extra,
  });
}

async function handleComplete(request, env, url) {
  const input = await readInput(request, url);
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "complete", ipHash);
  const { run, game } = await loadRun(env, input);
  const have = await loadHave(env, run.id);

  if (run.status === "complete") return completedResponse(env, run, game, have, { already_complete: true });
  if (now() - run.created_at > game.rules.run_ttl_days * 86400) throw new HttpError(410, "run_expired");
  return finishRun(env, run, game, have, input, { checkDuration: true });
}

// Shared by /run/complete and /run/submit: apply the final batch, validate the
// ending, compute the score server-side, and lock the run.
async function finishRun(env, run, game, have, input, { checkDuration }) {
  const endingId = String(input.ending || "").toUpperCase().trim();
  const ending = game.endings[endingId];
  if (!ending) throw new HttpError(400, "unknown_ending", `Endings: ${Object.keys(game.endings).join(", ")}`);
  const died = input.died === true || input.died === "true" || input.died === "1" || input.died === 1;

  const startSeq = have.size;
  const result = applyEvents(game, run, have, parseEvents(input));

  if (ending.min_act && result.act < ending.min_act) throw new HttpError(422, "ending_not_reachable_yet", { reason: `not_before_act_${ending.min_act}`, events: result });
  for (const req of ending.requires || []) if (!have.has(req)) throw new HttpError(422, "ending_prerequisite_missing", { reason: `requires_${req}`, events: result });
  if (ending.requires_any && !ending.requires_any.some((r) => have.has(r))) throw new HttpError(422, "ending_prerequisite_missing", { reason: `requires_one_of_${ending.requires_any.join("|")}`, events: result });
  if (ending.fate === "lives" && died) throw new HttpError(422, "fate_mismatch", `${endingId} is an ending the courier survives; send died:false.`);
  if (ending.fate === "dies" && !died) throw new HttpError(422, "fate_mismatch", `${endingId} is an ending the courier does not survive; send died:true.`);

  const survived = ending.fate === "lives" || (ending.fate === "either" && !died);
  const { score, breakdown } = scoreRun(game, have, endingId, survived);
  if (score > maxScore(game) || score < 0) throw new HttpError(422, "score_out_of_range");

  const t = now();
  const tooFast = checkDuration && t - run.created_at < game.rules.min_seconds_for_ranking;
  const ranked = tooFast ? 0 : 1;
  const reason = tooFast ? "completed too quickly to rank" : null;

  const results = await env.DB.batch([
    env.DB.prepare(
      `UPDATE runs SET status = 'complete', act = ?1, ending = ?2, died = ?3, survived = ?4, score = ?5,
         ranked = ?6, unranked_reason = ?7, completed_at = ?8, updated_at = ?8
       WHERE id = ?9 AND status = 'active'`
    ).bind(result.act, endingId, died ? 1 : 0, survived ? 1 : 0, score, ranked, reason, t, run.id),
    ...eventInserts(env, run.id, startSeq, result.accepted, t),
  ]);
  const fresh = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(run.id).first();
  const finalHave = await loadHave(env, run.id);
  const changed = results[0]?.meta?.changes ?? 1;
  return completedResponse(env, fresh, game, finalHave, {
    breakdown: changed ? breakdown : undefined,
    events: result,
    already_complete: changed ? undefined : true,
  });
}

// One-shot submission for agents that cannot make web requests. The agent prints
// a link to /musecade/submit/#..., the player clicks SUBMIT, and the page posts
// here. The same canonical-event validation applies. A client nonce makes the
// submission idempotent, so a double click never creates two runs.
async function handleSubmit(request, env, url) {
  const input = await readInput(request, url);
  const slug = String(input.game || "").toLowerCase();
  const game = GAMES[slug];
  if (!game) throw new HttpError(400, "unknown_game");
  const path = String(input.path || "").toUpperCase().trim();
  if (!game.paths.includes(path)) throw new HttpError(400, "unknown_path", `Paths: ${game.paths.join(", ")}`);
  const nonce = String(input.nonce || "");
  if (!/^[a-z0-9]{8,32}$/.test(nonce)) throw new HttpError(400, "missing_or_malformed_nonce");
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "submit", ipHash);

  const runId = "r_" + (await sha256Hex(`${slug}:${nonce}`)).slice(0, 20);
  const existing = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  if (existing) {
    const have = await loadHave(env, runId);
    if (existing.status === "complete") return completedResponse(env, existing, game, have, { already_complete: true });
    await env.DB.prepare(`DELETE FROM runs WHERE id = ?1 AND status = 'active'`).bind(runId).run();
  }
  const t = now();
  await env.DB.prepare(
    `INSERT INTO runs (id, game, token_hash, player, path, agent, status, act, created_at, updated_at, ip_hash)
     VALUES (?1, ?2, ?3, ?4, ?5, 'link', 'active', 1, ?6, ?6, ?7)`
  ).bind(runId, slug, await sha256Hex(randomHex(32)), cleanPlayerName(input.player), path, t, ipHash).run();
  const run = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  try {
    return await finishRun(env, run, game, new Set(), input, { checkDuration: false });
  } catch (err) {
    await env.DB.prepare(`DELETE FROM runs WHERE id = ?1 AND status = 'active'`).bind(runId).run();
    throw err;
  }
}

function titleFor(slug) {
  return GAMES[slug]?.title || slug;
}

async function handleLeaderboard(env, url) {
  const game = (url.searchParams.get("game") || "all").toLowerCase();
  const period = (url.searchParams.get("period") || "all").toLowerCase();
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "10", 10) || 10, 1), 50);
  if (game !== "all" && !GAMES[game]) throw new HttpError(400, "unknown_game");
  if (!["all", "week"].includes(period)) throw new HttpError(400, "unknown_period");

  const where = ["status = 'complete'", "ranked = 1"];
  const args = [];
  if (game !== "all") { args.push(game); where.push(`game = ?${args.length}`); }
  if (period === "week") { args.push(now() - WEEK_SECONDS); where.push(`completed_at >= ?${args.length}`); }
  args.push(limit);
  const { results } = await env.DB.prepare(
    `SELECT player, game, path, score, ending, died, completed_at FROM runs
     WHERE ${where.join(" AND ")} ORDER BY score DESC, completed_at ASC LIMIT ?${args.length}`
  ).bind(...args).all();

  return json(
    {
      game, period,
      rows: results.map((r, i) => ({
        rank: i + 1,
        player: r.player,
        game: r.game,
        game_title: titleFor(r.game),
        path: r.path,
        score: r.score,
        ending_title: GAMES[r.game]?.endings[r.ending]?.title || null,
        died: !!r.died,
        completed_at: r.completed_at,
      })),
    },
    200,
    { "cache-control": "public, max-age=30" }
  );
}

async function handleStats(env, url) {
  const game = (url.searchParams.get("game") || "all").toLowerCase();
  if (game !== "all" && !GAMES[game]) throw new HttpError(400, "unknown_game");
  const filter = game === "all" ? "" : "AND game = ?1";
  const bind = (stmt) => (game === "all" ? stmt : stmt.bind(game));

  const totals = await bind(env.DB.prepare(
    `SELECT COUNT(*) AS played, COALESCE(SUM(survived), 0) AS survived,
            MAX(CASE WHEN ranked = 1 THEN score END) AS high
     FROM runs WHERE status = 'complete' ${filter}`
  )).first();
  const started = await bind(env.DB.prepare(`SELECT COUNT(*) AS n FROM runs WHERE 1 = 1 ${filter}`)).first();
  const { results: endings } = await bind(env.DB.prepare(
    `SELECT game, ending, COUNT(*) AS n FROM runs WHERE status = 'complete' ${filter}
     GROUP BY game, ending ORDER BY n ASC, MAX(completed_at) DESC LIMIT 1`
  )).all();
  const highRow = totals.high == null ? null : await bind(env.DB.prepare(
    `SELECT player, game FROM runs WHERE status = 'complete' AND ranked = 1 ${filter}
     ORDER BY score DESC, completed_at ASC LIMIT 1`
  )).first();

  const rare = endings[0];
  return json(
    {
      game,
      adventures_started: started.n,
      adventures_played: totals.played,
      players_survived: totals.survived,
      high_score: totals.high,
      high_score_player: highRow?.player || null,
      rarest_ending: rare
        ? { id: rare.ending, title: GAMES[rare.game]?.endings[rare.ending]?.title || rare.ending, game: rare.game, count: rare.n }
        : null,
    },
    200,
    { "cache-control": "public, max-age=30" }
  );
}

// Public reads are served from Cloudflare's edge cache for READ_CACHE_SECONDS, so
// any number of people watching the board costs at most one database query per
// URL per data center every 30 seconds. New scores appear within that window.
const READ_CACHE_SECONDS = 30;
async function cachedRead(request, produce) {
  const cache = typeof caches !== "undefined" ? caches.default : null;
  const key = new Request(request.url, { method: "GET" });
  if (cache) {
    const hit = await cache.match(key);
    if (hit) return hit;
  }
  const res = await produce();
  if (cache && res.status === 200) {
    const copy = new Response(res.body, res);
    copy.headers.set("cache-control", `public, max-age=${READ_CACHE_SECONDS}`);
    await cache.put(key, copy.clone());
    return copy;
  }
  return res;
}

// ---------------------------------------------------------------- router

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (request.method === "OPTIONS") return json({}, 204);
    if (!["GET", "POST"].includes(request.method)) return fail(405, "method_not_allowed");
    try {
      switch (path) {
        case "/":
          return json({
            name: "Musecade API",
            version: "1.0",
            games: Object.keys(GAMES),
            endpoints: ["POST /run/start", "POST /run/event", "POST /run/complete", "POST /run/submit", "GET /leaderboard", "GET /stats", "GET /health"],
            docs: "https://lorenzen.ai/musecade/theblackroad/scoring.md",
          });
        case "/health":
          await env.DB.prepare("SELECT 1").first();
          return json({ ok: true });
        case "/run/start":
          return await handleStart(request, env, url);
        case "/run/event":
          return await handleEvent(request, env, url);
        case "/run/complete":
          return await handleComplete(request, env, url);
        case "/run/submit":
          return await handleSubmit(request, env, url);
        case "/leaderboard":
          return await cachedRead(request, () => handleLeaderboard(env, url));
        case "/stats":
          return await cachedRead(request, () => handleStats(env, url));
        default:
          return fail(404, "not_found");
      }
    } catch (err) {
      if (err instanceof HttpError) return fail(err.status, err.code, err.detail);
      console.error(err);
      return fail(500, "internal_error");
    }
  },
};
