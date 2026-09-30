// AgentHunt API: Cloudflare Worker + D1.
//
// POST /run/start     {hunt, player, agent?}                     -> {run_id, run_token, started_at, window_hours, proof}
// POST /run/complete  {run_id, run_token, metadata, finds:[...]}  -> {score, found, total, rank, ranked, ...}
// POST /run/submit    {hunt, player, nonce, metadata, finds}      (one-shot, for agents without HTTP)
// GET  /leaderboard   ?hunt=all|<slug>&period=all|week&limit=10    -> rows of {rank, player, score}
// GET  /stats         ?hunt=all|<slug>
//
// Every write endpoint also accepts GET with the same fields as query
// parameters (finds comma-separated), for agents that can only fetch URLs.
//
// The agent judges photos and reports finds as "ID:GRADE" or "ID:GRADE:PROOF".
// Point values live only in hunts.json, imported here at build time. The
// server never accepts a score, and never receives photos or locations.

import DATA from "../../hunts.json" with { type: "json" };

export const RULES = DATA.rules;
export const PROOFS = DATA.proofs;
export const HUNTS = Object.fromEntries(
  DATA.hunts.map((h) => [h.slug, { ...h, byId: Object.fromEntries(h.finds.map((f) => [f.id, f])) }])
);

const MAX_BODY_BYTES = 8192;
const RUN_ID = /^r_[a-z0-9]{20}$/;
const TOKEN = /^[a-f0-9]{64}$/;
const FIND_ID = /^[A-Z0-9_]{3,48}$/;
const WEEK_SECONDS = 7 * 24 * 3600;

// Per-IP limits: [requests, window seconds]
const LIMITS = {
  start: [12, 3600],
  complete: [30, 3600],
  submit: [10, 3600],
};

// Deliberately small; names are also forced to A-Z 0-9 space.
const BLOCKED_NAME_PARTS = ["FUCK", "SHIT", "CUNT", "NIGGER", "NIGGA", "FAGGOT", "RAPE", "NAZI", "HITLER", "WHORE", "SLUT", "KIKE", "SPIC", "CHINK", "RETARD"];

// ---------------------------------------------------------------- helpers

const now = () => Math.floor(Date.now() / 1000);

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type",
};

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...CORS,
      "cache-control": "no-store",
      ...extra,
    },
  });
}

// CORS preflight. A 204 must have no body.
const preflight = () => new Response(null, { status: 204, headers: { ...CORS, "access-control-max-age": "86400" } });

const fail = (status, error, detail) => json(detail ? { error, detail } : { error }, status);

class HttpError extends Error {
  constructor(status, code, detail) {
    super(code);
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

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

const randomHex = (bytes) => [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, "0")).join("");

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
  if (!name || BLOCKED_NAME_PARTS.some((w) => squashed.includes(w))) name = "HUNTER";
  return name;
}

const cleanAgent = (raw) => String(raw ?? "").replace(/[^A-Za-z0-9 ._-]+/g, "").trim().slice(0, 24) || null;

const truthy = (v) => v === true || v === 1 || v === "1" || v === "true";

async function readInput(request, url) {
  if (request.method === "GET") {
    const q = Object.fromEntries(url.searchParams.entries());
    if (typeof q.finds === "string") q.finds = q.finds.split(",").map((s) => s.trim()).filter(Boolean);
    return q;
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) throw new HttpError(413, "body_too_large");
  if (!text) return {};
  try {
    const body = JSON.parse(text);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    if (typeof body.finds === "string") body.finds = body.finds.split(",").map((s) => s.trim()).filter(Boolean);
    return body;
  } catch {
    throw new HttpError(400, "invalid_json");
  }
}

async function clientKey(request, env) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  return sha256Hex(`${env.IP_SALT || "agenthunt-dev-salt"}:${ip}`);
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

export function findPoints(find, grade, proof) {
  return Math.round(find.points * RULES.grades[grade]) + (proof ? RULES.proof_bonus : 0);
}

export function maxScore(hunt) {
  return hunt.finds.reduce((s, f) => s + findPoints(f, "GREAT", true), 0) + RULES.sweep_bonus;
}

// Parse the agent's find list. Each item is "ID:GRADE[:PROOF]" or {id, grade, proof}.
// A find reported twice keeps its best result. Returns {finds, rejected}.
export function parseFinds(hunt, raw) {
  const list = raw == null ? [] : raw;
  if (!Array.isArray(list)) throw new HttpError(400, "finds_must_be_a_list");
  if (list.length > hunt.finds.length * 3) throw new HttpError(400, "too_many_finds");
  const best = new Map();
  const rejected = [];
  for (const item of list) {
    let id, grade, proof;
    if (item && typeof item === "object") {
      id = item.id; grade = item.grade; proof = truthy(item.proof);
    } else {
      const parts = String(item).trim().toUpperCase().split(":");
      [id, grade] = parts;
      proof = parts[2] === "PROOF";
    }
    id = String(id || "").trim().toUpperCase();
    grade = String(grade || "").trim().toUpperCase();
    if (!FIND_ID.test(id)) { rejected.push({ id, reason: "malformed" }); continue; }
    const find = hunt.byId[id];
    if (!find) { rejected.push({ id, reason: "unknown_find" }); continue; }
    if (grade === "NO" || grade === "MISS") continue;
    if (!(grade in RULES.grades)) { rejected.push({ id, reason: "unknown_grade" }); continue; }
    const points = findPoints(find, grade, proof);
    const prev = best.get(id);
    if (!prev || points > prev.points) best.set(id, { id, grade, proof, points });
  }
  return { finds: [...best.values()], rejected };
}

export function scoreRun(hunt, finds) {
  let score = finds.reduce((s, f) => s + f.points, 0);
  const sweep = finds.length === hunt.finds.length;
  if (sweep) score += RULES.sweep_bonus;
  return { score, sweep };
}

// ---------------------------------------------------------------- run access

async function loadRun(env, input) {
  const runId = String(input.run_id || "");
  const token = String(input.run_token || "");
  if (!RUN_ID.test(runId) || !TOKEN.test(token)) throw new HttpError(400, "missing_or_malformed_run_credentials");
  const run = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  if (!run) throw new HttpError(404, "run_not_found");
  if ((await sha256Hex(token)) !== run.token_hash) throw new HttpError(403, "bad_run_token");
  const hunt = HUNTS[run.hunt];
  if (!hunt) throw new HttpError(410, "hunt_retired");
  return { run, hunt };
}

async function loadFinds(env, runId) {
  const { results } = await env.DB.prepare(`SELECT find_id AS id, grade, proof, points FROM run_finds WHERE run_id = ?1`).bind(runId).all();
  return results;
}

function proofFor(run) {
  return PROOFS.find((p) => p.id === run.proof) || null;
}

async function completedResponse(env, run, hunt, extra = {}) {
  const rank = run.ranked
    ? (await env.DB.prepare(`SELECT COUNT(*) AS n FROM runs WHERE status = 'complete' AND ranked = 1 AND score > ?1`).bind(run.score).first()).n + 1
    : null;
  const huntRank = run.ranked
    ? (await env.DB.prepare(`SELECT COUNT(*) AS n FROM runs WHERE status = 'complete' AND ranked = 1 AND hunt = ?1 AND score > ?2`).bind(run.hunt, run.score).first()).n + 1
    : null;
  return json({
    run_id: run.id,
    player: run.player,
    hunt: run.hunt,
    hunt_title: hunt.title,
    found: run.found,
    total: hunt.finds.length,
    score: run.score,
    ranked: !!run.ranked,
    rank,
    hunt_rank: huntRank,
    note: run.ranked ? undefined : run.unranked_reason,
    leaderboard_url: `${env.PUBLIC_SITE || "https://lorenzen.ai/agenthunt"}/#scores`,
    ...extra,
  });
}

// ---------------------------------------------------------------- handlers

async function handleStart(request, env, url) {
  const input = await readInput(request, url);
  const slug = String(input.hunt || "").toLowerCase().replace(/^#/, "");
  const hunt = HUNTS[slug];
  if (!hunt) throw new HttpError(400, "unknown_hunt", `Known hunts: ${Object.keys(HUNTS).join(", ")}`);
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "start", ipHash);

  const player = cleanPlayerName(input.player);
  const runId = "r_" + randomString("abcdefghijklmnopqrstuvwxyz0123456789", 20);
  const token = randomHex(32);
  const proof = PROOFS[crypto.getRandomValues(new Uint32Array(1))[0] % PROOFS.length];
  const t = now();
  await env.DB.prepare(
    `INSERT INTO runs (id, hunt, token_hash, player, agent, proof, status, created_at, updated_at, ip_hash)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'active', ?7, ?7, ?8)`
  ).bind(runId, slug, await sha256Hex(token), player, cleanAgent(input.agent), proof.id, t, ipHash).run();

  return json({
    run_id: runId,
    run_token: token,
    mode: "RANKED",
    hunt: slug,
    player,
    started_at: new Date(t * 1000).toISOString(),
    window_hours: hunt.window_hours,
    proof: proof.text,
  });
}

// Shared by /run/complete and /run/submit: score the finds server-side and lock the run.
async function finishRun(env, run, hunt, input, { checkDuration }) {
  const { finds, rejected } = parseFinds(hunt, input.finds);
  const { score, sweep } = scoreRun(hunt, finds);
  if (score < 0 || score > maxScore(hunt)) throw new HttpError(422, "score_out_of_range");

  const t = now();
  let reason = null;
  if (!truthy(input.metadata)) reason = "photo metadata could not be checked";
  else if (!finds.length) reason = "no finds";
  else if (checkDuration && t - run.created_at < RULES.min_minutes_for_ranking * 60) reason = "finished too quickly to rank";
  const ranked = reason ? 0 : 1;

  const results = await env.DB.batch([
    env.DB.prepare(
      `UPDATE runs SET status = 'complete', found = ?1, score = ?2, ranked = ?3, unranked_reason = ?4,
         completed_at = ?5, updated_at = ?5
       WHERE id = ?6 AND status = 'active'`
    ).bind(finds.length, score, ranked, reason, t, run.id),
    ...finds.map((f) =>
      env.DB.prepare(`INSERT OR IGNORE INTO run_finds (run_id, find_id, grade, proof, points) VALUES (?1, ?2, ?3, ?4, ?5)`)
        .bind(run.id, f.id, f.grade, f.proof ? 1 : 0, f.points)
    ),
  ]);
  const fresh = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(run.id).first();
  const changed = results[0]?.meta?.changes ?? 1;
  return completedResponse(env, fresh, hunt, {
    sweep: changed ? sweep : undefined,
    rejected: rejected.length ? rejected : undefined,
    already_complete: changed ? undefined : true,
  });
}

async function handleComplete(request, env, url) {
  const input = await readInput(request, url);
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "complete", ipHash);
  const { run, hunt } = await loadRun(env, input);
  if (run.status === "complete") return completedResponse(env, run, hunt, { already_complete: true });
  if (now() - run.created_at > RULES.run_ttl_days * 86400) throw new HttpError(410, "run_expired");
  return finishRun(env, run, hunt, input, { checkDuration: true });
}

// One-shot submission for agents that cannot make web requests. The agent prints
// a link to /agenthunt/submit/#..., the player clicks SUBMIT, and the page posts
// here. A client nonce makes it idempotent, so a double click never creates two runs.
async function handleSubmit(request, env, url) {
  const input = await readInput(request, url);
  const slug = String(input.hunt || "").toLowerCase().replace(/^#/, "");
  const hunt = HUNTS[slug];
  if (!hunt) throw new HttpError(400, "unknown_hunt");
  const nonce = String(input.nonce || "");
  if (!/^[a-z0-9]{8,32}$/.test(nonce)) throw new HttpError(400, "missing_or_malformed_nonce");
  const ipHash = await clientKey(request, env);
  await rateLimit(env, "submit", ipHash);

  const runId = "r_" + (await sha256Hex(`${slug}:${nonce}`)).slice(0, 20);
  const existing = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  if (existing) {
    if (existing.status === "complete") return completedResponse(env, existing, hunt, { already_complete: true });
    await env.DB.prepare(`DELETE FROM runs WHERE id = ?1 AND status = 'active'`).bind(runId).run();
  }
  const t = now();
  await env.DB.prepare(
    `INSERT INTO runs (id, hunt, token_hash, player, agent, status, created_at, updated_at, ip_hash)
     VALUES (?1, ?2, ?3, ?4, 'link', 'active', ?5, ?5, ?6)`
  ).bind(runId, slug, await sha256Hex(randomHex(32)), cleanPlayerName(input.player), t, ipHash).run();
  const run = await env.DB.prepare(`SELECT * FROM runs WHERE id = ?1`).bind(runId).first();
  try {
    return await finishRun(env, run, hunt, input, { checkDuration: false });
  } catch (err) {
    await env.DB.prepare(`DELETE FROM runs WHERE id = ?1 AND status = 'active'`).bind(runId).run();
    throw err;
  }
}

async function handleLeaderboard(env, url) {
  const hunt = (url.searchParams.get("hunt") || "all").toLowerCase();
  const period = (url.searchParams.get("period") || "all").toLowerCase();
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "10", 10) || 10, 1), 50);
  if (hunt !== "all" && !HUNTS[hunt]) throw new HttpError(400, "unknown_hunt");
  if (!["all", "week"].includes(period)) throw new HttpError(400, "unknown_period");

  const where = ["status = 'complete'", "ranked = 1"];
  const args = [];
  if (hunt !== "all") { args.push(hunt); where.push(`hunt = ?${args.length}`); }
  if (period === "week") { args.push(now() - WEEK_SECONDS); where.push(`completed_at >= ?${args.length}`); }
  args.push(limit);
  const { results } = await env.DB.prepare(
    `SELECT player, score FROM runs
     WHERE ${where.join(" AND ")} ORDER BY score DESC, completed_at ASC LIMIT ?${args.length}`
  ).bind(...args).all();

  return json(
    { hunt, period, rows: results.map((r, i) => ({ rank: i + 1, player: r.player, score: r.score })) },
    200,
    { "cache-control": "public, max-age=30" }
  );
}

async function handleStats(env, url) {
  const hunt = (url.searchParams.get("hunt") || "all").toLowerCase();
  if (hunt !== "all" && !HUNTS[hunt]) throw new HttpError(400, "unknown_hunt");
  const filter = hunt === "all" ? "" : "AND hunt = ?1";
  const bind = (stmt) => (hunt === "all" ? stmt : stmt.bind(hunt));

  const totals = await bind(env.DB.prepare(
    `SELECT COUNT(*) AS played, COALESCE(SUM(found), 0) AS finds,
            MAX(CASE WHEN ranked = 1 THEN score END) AS high
     FROM runs WHERE status = 'complete' ${filter}`
  )).first();
  const highRow = totals.high == null ? null : await bind(env.DB.prepare(
    `SELECT player FROM runs WHERE status = 'complete' AND ranked = 1 ${filter}
     ORDER BY score DESC, completed_at ASC LIMIT 1`
  )).first();
  const sweeps = await bind(env.DB.prepare(
    `SELECT COUNT(*) AS n FROM runs r WHERE status = 'complete' ${filter}
       AND (SELECT COUNT(*) FROM run_finds f WHERE f.run_id = r.id) >= 10`
  )).first();

  return json(
    {
      hunt,
      hunts_played: totals.played,
      finds_judged: totals.finds,
      sweeps: sweeps.n,
      high_score: totals.high,
      high_score_player: highRow?.player || null,
    },
    200,
    { "cache-control": "public, max-age=30" }
  );
}

// Public reads are served from Cloudflare's edge cache for 30 seconds.
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
    if (request.method === "OPTIONS") return preflight();
    if (!["GET", "POST"].includes(request.method)) return fail(405, "method_not_allowed");
    try {
      switch (path) {
        case "/":
          return json({
            name: "AgentHunt API",
            version: "1.0",
            hunts: Object.keys(HUNTS),
            endpoints: ["POST /run/start", "POST /run/complete", "POST /run/submit", "GET /leaderboard", "GET /stats", "GET /health"],
            docs: "https://lorenzen.ai/agenthunt/agenthunt.md",
          });
        case "/health":
          await env.DB.prepare("SELECT 1").first();
          return json({ ok: true });
        case "/run/start":
          return await handleStart(request, env, url);
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
