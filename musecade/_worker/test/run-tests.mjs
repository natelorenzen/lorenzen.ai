// Local tests for the Musecade worker. No dependencies: Node 22+ (node:sqlite).
//   node musecade/_worker/test/run-tests.mjs
// A tiny D1 shim runs the real worker code against an in-memory SQLite database.

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import worker, { GAMES, maxScore, cleanPlayerName } from "../src/index.js";

// ------------------------------------------------------------ D1 shim
function makeD1() {
  const db = new DatabaseSync(":memory:");
  db.exec(readFileSync(new URL("../schema.sql", import.meta.url), "utf8"));
  class Stmt {
    constructor(sql, args = []) { this.sql = sql; this.args = args; }
    bind(...args) { return new Stmt(this.sql, args); }
    first() { return Promise.resolve(db.prepare(this.sql).get(...this.args) ?? null); }
    all() { return Promise.resolve({ results: db.prepare(this.sql).all(...this.args) }); }
    run() { const r = db.prepare(this.sql).run(...this.args); return Promise.resolve({ meta: { changes: Number(r.changes) } }); }
    _exec() {
      const st = db.prepare(this.sql);
      if (/returning/i.test(this.sql) || /^\s*select/i.test(this.sql)) return { results: st.all(...this.args), meta: { changes: 0 } };
      const r = st.run(...this.args);
      return { results: [], meta: { changes: Number(r.changes) } };
    }
  }
  return {
    raw: db,
    prepare: (sql) => new Stmt(sql),
    batch: async (stmts) => {
      db.exec("BEGIN");
      try { const out = stmts.map((s) => s._exec()); db.exec("COMMIT"); return out; }
      catch (e) { db.exec("ROLLBACK"); throw e; }
    },
  };
}

// ------------------------------------------------------------ harness
const env = { DB: makeD1(), IP_SALT: "test", PUBLIC_SITE: "https://lorenzen.ai/musecade" };
let ip = 1;
async function call(method, path, body, ipAddr = "10.0.0.1") {
  const init = { method, headers: { "cf-connecting-ip": ipAddr, "content-type": "application/json" } };
  if (body !== undefined && method === "POST") init.body = typeof body === "string" ? body : JSON.stringify(body);
  const res = await worker.fetch(new Request("https://api.test" + path, init), env);
  return { status: res.status, body: await res.json() };
}
const post = (p, b, a) => call("POST", p, b, a);
const get = (p, a) => call("GET", p, undefined, a);
function ageRun(runId, seconds) {
  env.DB.raw.prepare("UPDATE runs SET created_at = created_at - ? WHERE id = ?").run(seconds, runId);
}
async function start(player = "Nathan", path = "WAYFARER", ipAddr) {
  const r = await post("/run/start", { game: "theblackroad", player, path, agent: "Muse" }, ipAddr || `10.1.0.${ip++}`);
  assert.equal(r.status, 200, JSON.stringify(r.body));
  return r.body;
}

let passed = 0;
async function test(name, fn) {
  try { await fn(); passed++; console.log("  ✓", name); }
  catch (e) { console.error("  ✗", name, "\n   ", e.message); process.exitCode = 1; }
}

const G = GAMES.theblackroad;
console.log(`Musecade worker tests (max score ceiling: ${maxScore(G)})`);

await test("names are sanitized", () => {
  assert.equal(cleanPlayerName("  Nãthan  the <b>Bold</b>!! "), "NATHAN THE B");
  assert.equal(cleanPlayerName(""), "COURIER");
  assert.equal(cleanPlayerName("sh!t head"), "SHT HEAD"); // punctuation stripped, not blocked
  assert.equal(cleanPlayerName("fuckface"), "COURIER");
});

await test("start validates game and path", async () => {
  assert.equal((await post("/run/start", { game: "nope", player: "A", path: "WARDEN" })).status, 400);
  assert.equal((await post("/run/start", { game: "theblackroad", player: "A", path: "WIZARD" })).status, 400);
  const r = await start("Nathan", "scholar");
  assert.match(r.run_id, /^r_[a-z0-9]{20}$/);
  assert.match(r.run_token, /^[a-f0-9]{64}$/);
  assert.equal(r.player, "NATHAN");
});

await test("token is required and checked; token is not stored in plain text", async () => {
  const r = await start();
  const bad = await post("/run/event", { run_id: r.run_id, run_token: "0".repeat(64), events: ["REACH_WILDERNESS"] });
  assert.equal(bad.status, 403);
  const row = env.DB.raw.prepare("SELECT token_hash FROM runs WHERE id = ?").get(r.run_id);
  assert.notEqual(row.token_hash, r.run_token);
});

await test("unknown events, endings-as-events and order violations are rejected", async () => {
  const r = await start();
  const res = await post("/run/event", { ...r, events: ["SCORE_9999", "ENDING_LAST_FLAME", "REACH_VEYR", "DISCOVER_CRYPT", "PUZZLE_GATE_NO_HINT"] });
  assert.equal(res.status, 200);
  const reasons = Object.fromEntries(res.body.rejected.map((x) => [x.id, x.reason]));
  assert.equal(reasons.SCORE_9999, "unknown_event");
  assert.equal(reasons.ENDING_LAST_FLAME, "endings_are_sent_with_run_complete");
  assert.equal(reasons.REACH_VEYR, "not_before_act_2");
  assert.equal(reasons.DISCOVER_CRYPT, "not_before_act_3");
  assert.equal(reasons.PUZZLE_GATE_NO_HINT, "not_before_act_3");
  assert.deepEqual(res.body.accepted, []);
});

await test("events in a batch are applied in order and advance the act", async () => {
  const r = await start();
  const res = await post("/run/event", { ...r, events: ["DISCOVER_MILESTONE_VERSE", "ENC_ROAD_SURVIVED", "RECRUIT_CALEN", "REACH_WILDERNESS", "RECRUIT_WREN", "REACH_VEYR", "DISCOVER_CRYPT"] });
  assert.equal(res.body.rejected.length, 0, JSON.stringify(res.body.rejected));
  assert.equal(res.body.act, 3);
});

await test("duplicates are reported, not double counted", async () => {
  const r = await start();
  await post("/run/event", { ...r, events: ["ENC_ROAD_SURVIVED"] });
  const res = await post("/run/event", { ...r, events: ["ENC_ROAD_SURVIVED", "ENC_ROAD_SURVIVED"] });
  assert.deepEqual(res.body.duplicates, ["ENC_ROAD_SURVIVED", "ENC_ROAD_SURVIVED"]);
  const n = env.DB.raw.prepare("SELECT COUNT(*) AS n FROM run_events WHERE run_id = ?").get(r.run_id).n;
  assert.equal(n, 1);
});

await test("exclusive route encounters and max_act are enforced", async () => {
  const r = await start();
  await post("/run/event", { ...r, events: ["REACH_WILDERNESS", "ENC_BRIDGE_SURVIVED"] });
  const res = await post("/run/event", { ...r, events: ["ENC_DROWNED_SURVIVED", "REACH_VEYR", "ACH_WHATS_IN_THE_BOX"] });
  const reasons = Object.fromEntries(res.body.rejected.map((x) => [x.id, x.reason]));
  assert.equal(reasons.ENC_DROWNED_SURVIVED, "excluded_by_ENC_BRIDGE_SURVIVED");
  assert.equal(reasons.ACH_WHATS_IN_THE_BOX, "not_after_act_2");
});

await test("GET mode works for agents that can only fetch URLs", async () => {
  const s = await get("/run/start?game=theblackroad&player=Fetchy&path=ENVOY&agent=Muse", "10.9.9.9");
  assert.equal(s.status, 200);
  const e = await get(`/run/event?run_id=${s.body.run_id}&run_token=${s.body.run_token}&events=DISCOVER_MILESTONE_VERSE,REACH_WILDERNESS`);
  assert.deepEqual(e.body.accepted, ["DISCOVER_MILESTONE_VERSE", "REACH_WILDERNESS"]);
});

// A full standard run: follows the apparent quest, ends in THE LAST FLAME.
const STANDARD = [
  "DISCOVER_HEDDA_CELLAR", "ENC_ROAD_SURVIVED", "RECRUIT_CALEN", "REACH_WILDERNESS",
  "RECRUIT_WREN", "RECRUIT_OSWIN", "PUZZLE_LIAR_SOLVED", "DISCOVER_MILESTONE_VERSE", "SOCIAL_DASK_PARLEY", "ENC_BRIDGE_SURVIVED",
  "REACH_VEYR", "PUZZLE_GATE_SOLVED", "DISCOVER_STILLHEART", "DISCOVER_WREN_HUSHING",
  "REACH_ORUN", "DISCOVER_RELIQUARY_TRUTH", "DISCOVER_OSWIN_PURPOSE", "ENC_ORUN_SURVIVED", "PUZZLE_LITANY_SOLVED",
  "REACH_THRONE", "QUEEN_SPOKEN", "ENC_THRONE_SURVIVED",
  "COMPANION_SURVIVES_CALEN", "COMPANION_SURVIVES_OSWIN", "ACH_THREE_INSTRUCTIONS",
];

await test("ending prerequisites and fate are enforced", async () => {
  const r = await start();
  ageRun(r.run_id, 3600);
  let c = await post("/run/complete", { ...r, ending: "ENDING_LAST_FLAME", died: false });
  assert.equal(c.status, 422);
  assert.equal(c.body.error, "ending_not_reachable_yet");
  c = await post("/run/complete", { ...r, ending: "ENDING_ROAD_SOUTH", died: true });
  assert.equal(c.body.error, "fate_mismatch");
  c = await post("/run/complete", { ...r, ending: "ENDING_MADE_UP", died: false });
  assert.equal(c.body.error, "unknown_ending");
});

let standard;
await test("standard run completes with a server-computed score in the typical band", async () => {
  standard = await start("Nathan", "WAYFARER");
  ageRun(standard.run_id, 55 * 60);
  const c = await post("/run/complete", { ...standard, ending: "ENDING_LAST_FLAME", died: false, events: STANDARD, score: 999999 });
  assert.equal(c.status, 200, JSON.stringify(c.body));
  assert.equal(c.body.events.rejected.length, 0, JSON.stringify(c.body.events.rejected));
  assert.ok(c.body.score >= 2000 && c.body.score <= 10000, `score ${c.body.score}`);
  assert.equal(c.body.ranked, true);
  assert.equal(c.body.rank, 1);
  assert.equal(c.body.survived, false); // sacrificed
  assert.deepEqual(c.body.secrets, { found: 6, total: 11 });
  assert.deepEqual(c.body.achievements, ["THREE INSTRUCTIONS"]);
  console.log(`      standard run score: ${c.body.score}`);
});

await test("completion is idempotent and locks the run", async () => {
  const again = await post("/run/complete", { ...standard, ending: "ENDING_LONG_QUIET", died: false });
  assert.equal(again.body.already_complete, true);
  assert.equal(again.body.ending, "ENDING_LAST_FLAME");
  const ev = await post("/run/event", { ...standard, events: ["ACH_UNSEEN"] });
  assert.equal(ev.status, 409);
});

await test("an exceptional run scores 10,000+ and ranks above the standard run", async () => {
  const r = await start("Ada", "SCHOLAR");
  ageRun(r.run_id, 70 * 60);
  const events = [
    "DISCOVER_MILESTONE_VERSE", "DISCOVER_HEDDA_CELLAR", "SOCIAL_HEDDA_MERCY", "ENC_ROAD_SURVIVED", "ENC_ROAD_CLEVER", "RECRUIT_CALEN", "DISCOVER_CALEN_ORDERS", "REACH_WILDERNESS",
    "RECRUIT_WREN", "DISCOVER_LONG_WAY", "RECRUIT_OSWIN", "PUZZLE_LIAR_SOLVED", "PUZZLE_LIAR_NO_HINT", "SOCIAL_TAM_TURNED", "SOCIAL_FENN_BARGAIN", "DISCOVER_WREN_HUSHING", "DISCOVER_MINERS_TALLY",
    "REACH_VEYR", "DISCOVER_STILLHEART", "SOCIAL_SERITH_DOUBT", "DISCOVER_CRYPT", "DISCOVER_BURNING_TRUTH", "ENC_CINDER_SURVIVED", "ENC_CINDER_CLEVER",
    "REACH_ORUN", "DISCOVER_RELIQUARY_TRUTH", "DISCOVER_OSWIN_PURPOSE", "CALEN_STAYS_LOYAL", "WREN_KEPT_WARM", "OSWIN_CHOOSES_YOU", "ENC_ORUN_SURVIVED", "ENC_ORUN_CLEVER", "PUZZLE_LITANY_SOLVED", "PUZZLE_LITANY_NO_HINT", "LISS_SAVED",
    "REACH_THRONE", "QUEEN_SPOKEN", "ENC_THRONE_SURVIVED", "ENC_THRONE_CLEVER",
    "COMPANION_SURVIVES_CALEN", "COMPANION_SURVIVES_WREN", "COMPANION_SURVIVES_OSWIN",
    "ACH_OLD_BLOOD", "ACH_EVERYBODY_LIVES", "ACH_THE_LONG_WAY", "ACH_NO_SWORD_DRAWN", "ACH_SILVER_TONGUE", "ACH_QUEENS_TONGUE", "ACH_THREE_INSTRUCTIONS", "ACH_BEFORE_THE_MOON",
  ];
  const c = await post("/run/complete", { ...r, ending: "ENDING_LONG_QUIET", died: false, events });
  assert.equal(c.status, 200, JSON.stringify(c.body));
  assert.equal(c.body.events.rejected.length, 0, JSON.stringify(c.body.events.rejected));
  assert.ok(c.body.score >= 10000, `score ${c.body.score}`);
  assert.ok(c.body.score <= maxScore(G));
  assert.equal(c.body.rank, 1);
  console.log(`      exceptional run score: ${c.body.score}`);
});

await test("an early death is a legitimate, low-scoring ranked run", async () => {
  const r = await start("Mort", "WARDEN");
  ageRun(r.run_id, 12 * 60);
  const c = await post("/run/complete", { ...r, ending: "ENDING_NAME_IN_THE_SNOW", died: true, events: ["DISCOVER_MILESTONE_VERSE"] });
  assert.equal(c.status, 200);
  assert.equal(c.body.died, true);
  assert.equal(c.body.score, 150);
  assert.equal(c.body.ranked, true);
});

await test("a run completed in under five minutes is recorded but unranked", async () => {
  const r = await start("Speedy", "ENVOY");
  const c = await post("/run/complete", { ...r, ending: "ENDING_ROAD_SOUTH", died: false });
  assert.equal(c.body.ranked, false);
  assert.equal(c.body.rank, null);
  assert.match(c.body.note, /too quickly/);
});

await test("leaderboard shows only ranked, completed runs, highest first", async () => {
  const lb = await get("/leaderboard?game=all&period=all&limit=10");
  assert.equal(lb.status, 200);
  const names = lb.body.rows.map((r) => r.player);
  assert.deepEqual(names, ["ADA", "NATHAN", "MORT"]);
  assert.equal(lb.body.rows[0].game_title, "The Black Road");
  assert.equal(lb.body.rows[0].ending_title, "THE LONG QUIET");
  const week = await get("/leaderboard?game=theblackroad&period=week");
  assert.equal(week.body.rows.length, 3);
  assert.equal((await get("/leaderboard?period=year")).status, 400);
});

await test("stats reflect actual data", async () => {
  const s = await get("/stats");
  assert.equal(s.body.adventures_played, 4);
  assert.equal(s.body.players_survived, 2); // ADA (long quiet) + SPEEDY (road south); NATHAN sacrificed, MORT died
  assert.equal(s.body.high_score_player, "ADA");
  assert.ok(s.body.rarest_ending && s.body.rarest_ending.count === 1);
});

await test("one-shot link submission validates, scores, and is idempotent", async () => {
  const body = { game: "theblackroad", player: "Linky", path: "ENVOY", ending: "ENDING_CROWN_OF_CHAINS", died: false, nonce: "abc12345xyz",
    events: ["DISCOVER_MILESTONE_VERSE", "REACH_WILDERNESS", "SOCIAL_DASK_PARLEY"] };
  const a = await post("/run/submit", body, "10.5.5.5");
  assert.equal(a.status, 200, JSON.stringify(a.body));
  assert.equal(a.body.score, 150 + 100 + 300 + 700 + 400);
  assert.equal(a.body.ranked, true);
  const b = await post("/run/submit", body, "10.5.5.5");
  assert.equal(b.body.already_complete, true);
  assert.equal(b.body.run_id, a.body.run_id);
  const bad = await post("/run/submit", { ...body, nonce: "zzz99999zzz", ending: "ENDING_LONG_QUIET" }, "10.5.5.5");
  assert.equal(bad.status, 422);
  const gone = env.DB.raw.prepare("SELECT COUNT(*) AS n FROM runs WHERE player = 'LINKY'").get().n;
  assert.equal(gone, 1); // the rejected submission left nothing behind
  const viaGet = await get(`/run/submit?game=theblackroad&player=Getty&path=WARDEN&ending=ENDING_ROAD_SOUTH&died=false&nonce=getnonce01&events=ENC_ROAD_SURVIVED`, "10.5.5.6");
  assert.equal(viaGet.status, 200);
  assert.equal(viaGet.body.score, 100 + 300 + 400);
});

await test("volume: 600 concurrent agents submit; the board shows the true top 10", async () => {
  const pool = ["DISCOVER_MILESTONE_VERSE", "DISCOVER_HEDDA_CELLAR", "ENC_ROAD_SURVIVED", "ENC_ROAD_CLEVER", "RECRUIT_CALEN", "DISCOVER_CALEN_ORDERS", "DISCOVER_LONG_WAY"];
  const t0 = Date.now();
  const results = await Promise.all(Array.from({ length: 600 }, async (_, i) => {
    const events = pool.filter((_, k) => (i >> k) & 1).concat(["REACH_WILDERNESS"]);
    const r = await post("/run/submit", { game: "theblackroad", player: `AGENT${i}`, path: "WAYFARER", ending: "ENDING_ROAD_SOUTH", died: false, nonce: `vol${String(i).padStart(6, "0")}`, events }, `10.200.${i >> 8}.${i & 255}`);
    assert.equal(r.status, 200, JSON.stringify(r.body));
    return r.body;
  }));
  const expected = results.map((r) => r.score).sort((a, b) => b - a).slice(0, 10);
  const lb = await get("/leaderboard?game=theblackroad&limit=10");
  const top = lb.body.rows.map((r) => r.score);
  const allScores = [...expected, ...lb.body.rows.filter((r) => !r.player.startsWith("AGENT")).map((r) => r.score)].sort((a, b) => b - a).slice(0, 10);
  assert.deepEqual(top, allScores);
  assert.deepEqual(lb.body.rows.map((r) => r.rank), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(`      600 submissions in ${Date.now() - t0} ms; top score ${top[0]}`);
});

await test("a second game has its own paths, events and leaderboard filter", async () => {
  const bad = await post("/run/start", { game: "theglasscity", player: "Mr Grey", path: "WARDEN" }, "10.7.0.1");
  assert.equal(bad.status, 400);
  const r = (await post("/run/start", { game: "theglasscity", player: "Mr Grey", path: "GHOST" }, "10.7.0.2")).body;
  ageRun(r.run_id, 60 * 60);
  const wrongGame = await post("/run/event", { ...r, events: ["REACH_WILDERNESS"] });
  assert.equal(wrongGame.body.rejected[0].reason, "unknown_event");
  const c = await post("/run/complete", { ...r, ending: "ENDING_NOBODY", died: false, events: ["DISCOVER_SWEEPER_PHOTO", "ENC_ARCADE_SURVIVED", "REACH_CONTACT"] });
  assert.equal(c.status, 200, JSON.stringify(c.body));
  assert.equal(c.body.score, 150 + 100 + 100 + 400 + 400);
  const lb = await get("/leaderboard?game=theglasscity");
  assert.deepEqual(lb.body.rows.map((x) => x.player), ["MR GREY"]);
  assert.equal(lb.body.rows[0].game_title, "The Glass City");
});

await test("rate limiting stops floods of new runs from one address", async () => {
  let last;
  for (let i = 0; i < 14; i++) last = await post("/run/start", { game: "theblackroad", player: "Spam", path: "WARDEN" }, "10.66.6.6");
  assert.equal(last.status, 429);
});

await test("oversized and malformed bodies are refused", async () => {
  assert.equal((await post("/run/event", "{not json")).status, 400);
  assert.equal((await post("/run/event", JSON.stringify({ x: "a".repeat(9000) }))).status, 413);
  const r = await start();
  const many = Array.from({ length: 61 }, (_, i) => `X_${i}_EVENT`);
  assert.equal((await post("/run/event", { ...r, events: many })).status, 400);
});

console.log(`\n${passed} passed${process.exitCode ? ", some FAILED" : ""}`);
