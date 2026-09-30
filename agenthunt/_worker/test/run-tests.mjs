// Local tests for the AgentHunt worker. No dependencies: Node 22+ (node:sqlite).
//   node agenthunt/_worker/test/run-tests.mjs
// A tiny D1 shim runs the real worker code against an in-memory SQLite database.

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import worker, { HUNTS, RULES, maxScore, cleanPlayerName, parseFinds } from "../src/index.js";

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
const env = { DB: makeD1(), IP_SALT: "test", PUBLIC_SITE: "https://lorenzen.ai/agenthunt" };
let ip = 1;
async function call(method, path, body, ipAddr = "10.0.0.1") {
  const init = { method, headers: { "cf-connecting-ip": ipAddr, "content-type": "application/json" } };
  if (body !== undefined && method === "POST") init.body = typeof body === "string" ? body : JSON.stringify(body);
  const res = await worker.fetch(new Request("https://api.test" + path, init), env);
  return { status: res.status, body: await res.json() };
}
const post = (p, b, a) => call("POST", p, b, a);
const get = (p, a) => call("GET", p, undefined, a);
const age = (runId, seconds) => env.DB.raw.prepare("UPDATE runs SET created_at = created_at - ? WHERE id = ?").run(seconds, runId);
async function start(hunt = "sanfrancisco", player = "Nate") {
  const r = await post("/run/start", { hunt, player, agent: "Muse" }, `10.1.0.${ip++}`);
  assert.equal(r.status, 200, JSON.stringify(r.body));
  return r.body;
}

let passed = 0;
async function test(name, fn) {
  try { await fn(); passed++; console.log("  ✓", name); }
  catch (e) { console.error("  ✗", name, "\n   ", e.message); process.exitCode = 1; }
}

const SF = HUNTS.sanfrancisco;
console.log(`AgentHunt worker tests (${Object.keys(HUNTS).length} hunts, SF max ${maxScore(SF)})`);

await test("every hunt has 10 finds with unique IDs and points in 50s", () => {
  for (const h of Object.values(HUNTS)) {
    assert.equal(h.finds.length, 10, h.slug);
    assert.equal(new Set(h.finds.map((f) => f.id)).size, 10, h.slug);
    for (const f of h.finds) assert.equal(f.points % 50, 0, `${h.slug}.${f.id}`);
  }
});

await test("names are sanitized", () => {
  assert.equal(cleanPlayerName("  Nãte the <b>Great</b>!! "), "NATE THE BGR"); // symbols stripped, letters kept
  assert.equal(cleanPlayerName(""), "HUNTER");
  assert.equal(cleanPlayerName("fuckface"), "HUNTER");
});

await test("finds parse: grades, proof, best-of duplicates, junk rejected", () => {
  const { finds, rejected } = parseFinds(SF, [
    "golden_gate:good", "GOLDEN_GATE:GREAT:PROOF", "CABLE_CAR:GOOD", "SEA_LIONS:NO",
    "EIFFEL_TOWER:GREAT", "FOG_ROLL:AMAZING", "bad id!:GREAT", { id: "SOURDOUGH", grade: "GREAT", proof: true },
  ]);
  const by = Object.fromEntries(finds.map((f) => [f.id, f]));
  assert.equal(by.GOLDEN_GATE.points, 150 + RULES.proof_bonus);
  assert.equal(by.CABLE_CAR.points, 75);
  assert.equal(by.SOURDOUGH.points, 150);
  assert.ok(!by.SEA_LIONS);
  assert.deepEqual(rejected.map((r) => r.reason).sort(), ["malformed", "unknown_find", "unknown_grade"]);
});

await test("start validates the hunt and returns a proof detail and window", async () => {
  assert.equal((await post("/run/start", { hunt: "atlantis", player: "A" })).status, 400);
  const r = await start("#losangeles");
  assert.match(r.run_id, /^r_[a-z0-9]{20}$/);
  assert.equal(r.window_hours, 72);
  assert.ok(r.proof && typeof r.proof === "string");
  assert.ok(!Number.isNaN(Date.parse(r.started_at)));
});

await test("ranked complete: server computes the score, sweep bonus applies", async () => {
  const r = await start("sanfrancisco", "Sweeper");
  age(r.run_id, 3600);
  const finds = SF.finds.map((f) => `${f.id}:GREAT:PROOF`);
  const c = await post("/run/complete", { run_id: r.run_id, run_token: r.run_token, metadata: 1, finds, score: 999999 });
  assert.equal(c.status, 200, JSON.stringify(c.body));
  assert.equal(c.body.score, maxScore(SF));
  assert.equal(c.body.found, 10);
  assert.equal(c.body.ranked, true);
  assert.equal(c.body.rank, 1);
  assert.equal(c.body.sweep, true);
});

await test("completing twice is idempotent", async () => {
  const r = await start();
  age(r.run_id, 3600);
  const body = { run_id: r.run_id, run_token: r.run_token, metadata: 1, finds: ["CABLE_CAR:GOOD"] };
  const a = await post("/run/complete", body);
  const b = await post("/run/complete", { ...body, finds: SF.finds.map((f) => `${f.id}:GREAT`) });
  assert.equal(a.body.score, 75);
  assert.equal(b.body.score, 75);
  assert.equal(b.body.already_complete, true);
});

await test("bad token is refused", async () => {
  const r = await start();
  const c = await post("/run/complete", { run_id: r.run_id, run_token: "0".repeat(64), metadata: 1, finds: [] });
  assert.equal(c.status, 403);
});

await test("unranked: too fast, no metadata, no finds", async () => {
  const fast = await start();
  const a = await post("/run/complete", { run_id: fast.run_id, run_token: fast.run_token, metadata: 1, finds: ["CABLE_CAR:GREAT"] });
  assert.equal(a.body.ranked, false);
  assert.match(a.body.note, /too quickly/);

  const blind = await start();
  age(blind.run_id, 3600);
  const b = await post("/run/complete", { run_id: blind.run_id, run_token: blind.run_token, metadata: 0, finds: ["CABLE_CAR:GREAT"] });
  assert.equal(b.body.ranked, false);
  assert.match(b.body.note, /metadata/);
  assert.equal(b.body.score, 150);
});

await test("GET works for fetch-only agents", async () => {
  const s = await get(`/run/start?hunt=paris&player=Zoe`, "10.9.0.1");
  assert.equal(s.status, 200);
  age(s.body.run_id, 3600);
  const c = await get(`/run/complete?run_id=${s.body.run_id}&run_token=${s.body.run_token}&metadata=1&finds=EIFFEL_TOWER:GREAT,CROISSANT:GOOD:PROOF`, "10.9.0.1");
  assert.equal(c.status, 200, JSON.stringify(c.body));
  assert.equal(c.body.score, 100 + 50 + 50);
});

await test("LINK submit is idempotent by nonce and never trusts a score", async () => {
  const body = { hunt: "chicago", player: "Link Kid", nonce: "abc123def456", metadata: "1", finds: ["THE_BEAN:GREAT", "DEEP_DISH:GOOD"], score: 5000 };
  const a = await post("/run/submit", body, "10.7.0.1");
  assert.equal(a.status, 200, JSON.stringify(a.body));
  assert.equal(a.body.score, 150 + 50);
  assert.equal(a.body.ranked, true);
  const b = await post("/run/submit", { ...body, finds: ["THE_BEAN:GREAT", "WILLIS_TOWER:GREAT"] }, "10.7.0.1");
  assert.equal(b.body.already_complete, true);
  assert.equal(b.body.score, 200);
  assert.equal((await post("/run/submit", { ...body, nonce: "x" })).status, 400);
});

await test("leaderboard returns only rank, name and score", async () => {
  const all = await get("/leaderboard?hunt=all&period=all");
  assert.equal(all.status, 200);
  assert.ok(all.body.rows.length >= 2);
  assert.deepEqual(Object.keys(all.body.rows[0]).sort(), ["player", "rank", "score"]);
  assert.equal(all.body.rows[0].player, "SWEEPER");
  const sf = await get("/leaderboard?hunt=chicago&period=week");
  assert.ok(sf.body.rows.every((r) => r.player === "LINK KID"));
  assert.equal((await get("/leaderboard?hunt=mars")).status, 400);
});

await test("stats", async () => {
  const s = await get("/stats?hunt=all");
  assert.equal(s.status, 200);
  assert.ok(s.body.hunts_played >= 5);
  assert.equal(s.body.sweeps, 1);
  assert.equal(s.body.high_score_player, "SWEEPER");
});

await test("CORS preflight answers 204 with no body", async () => {
  const res = await worker.fetch(new Request("https://api.test/run/submit", { method: "OPTIONS" }), env);
  assert.equal(res.status, 204);
  assert.equal(res.headers.get("access-control-allow-origin"), "*");
  assert.equal(await res.text(), "");
});

await test("rate limit on start", async () => {
  let last;
  for (let i = 0; i < 13; i++) last = await post("/run/start", { hunt: "paris", player: "Spam" }, "10.66.0.1");
  assert.equal(last.status, 429);
});

console.log(`\n${passed} passed${process.exitCode ? ", some FAILED" : ""}`);
