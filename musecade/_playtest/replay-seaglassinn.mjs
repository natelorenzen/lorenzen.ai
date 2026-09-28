// Replays four simulated Sea Glass Inn playtests through the real server scoring rules.
//   node musecade/_playtest/replay-seaglassinn.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.theseaglassinn;
const RUNS = {
  STANDARD: { who: "NORA · SLEUTH", ending: "ENDING_WHOLE_TRUTH", images: 5, batches: [
    ["RECRUIT_JULES", "RECRUIT_PRIYA", "REACH_LIARS"],
    ["RECRUIT_THEO", "DISCOVER_THEO_ALIBI", "SOCIAL_THEO_TRUST", "SOCIAL_LYDIA", "DISCOVER_LYDIA_KNEW", "PUZZLE_DIARY_SOLVED", "DISCOVER_DIARY_FAKE", "REACH_DARKROOM"],
    ["ENC_CAVE_SURVIVED", "DISCOVER_SADIE_ALIVE", "DISCOVER_CANNERY_FIRE", "PUZZLE_TIMELINE_SOLVED", "REACH_STORM"],
    ["DISCOVER_MARGUERITE_SECRET", "PUZZLE_SEAGLASS_SOLVED", "ENC_STORM_SURVIVED", "DISCOVER_VALE_CRIME", "REACH_BONFIRE"],
    ["ENC_BONFIRE_SURVIVED", "ACH_NOT_FOR_SALE"],
  ]},
  CHAOTIC: { who: "ROX · ATHLETE", ending: "ENDING_THE_DEAL", images: 5, batches: [
    ["SOCIAL_VALE_BLUFF", "RECRUIT_JULES", "REACH_LIARS"],
    ["RECRUIT_THEO", "DISCOVER_HANK_PAID", "REACH_DARKROOM"],
    ["ENC_CAVE_SURVIVED", "ACH_NIGHT_SWIM"],
  ]},
  CLEVER: { who: "IVY · PHOTOGRAPHER", ending: "ENDING_SEVENTH_PIECE", images: 7, batches: [
    ["RECRUIT_JULES", "RECRUIT_PRIYA", "SOCIAL_VALE_BLUFF", "DISCOVER_JULES_BASKET", "REACH_LIARS"],
    ["DISCOVER_PRIYA_TEXT", "RECRUIT_THEO", "DISCOVER_THEO_ALIBI", "SOCIAL_THEO_TRUST", "SOCIAL_LYDIA", "DISCOVER_LYDIA_KNEW", "DISCOVER_HANK_PAID", "SOCIAL_BEA_TRUTH", "DISCOVER_BEA_TOLD", "PUZZLE_DIARY_SOLVED", "PUZZLE_DIARY_NO_HINT", "DISCOVER_DIARY_FAKE", "REACH_DARKROOM"],
    ["ENC_CAVE_SURVIVED", "ENC_CAVE_CLEVER", "DISCOVER_SADIE_ALIVE", "DISCOVER_CANNERY_FIRE", "PUZZLE_TIMELINE_SOLVED", "PUZZLE_TIMELINE_NO_HINT", "REACH_STORM"],
    ["DISCOVER_MARGUERITE_SECRET", "SOCIAL_SADIE_TRUTH", "PUZZLE_SEAGLASS_SOLVED", "PUZZLE_SEAGLASS_NO_HINT", "ENC_STORM_SURVIVED", "ENC_STORM_CLEVER", "DISCOVER_VALE_CRIME", "BOND_THEO", "BOND_PRIYA", "BOND_JULES", "REACH_BONFIRE"],
    ["ENC_BONFIRE_SURVIVED", "ENC_BONFIRE_CLEVER", "ACH_EVERY_PIECE", "ACH_NOT_FOR_SALE", "ACH_FULL_STORY", "ACH_ALL_THREE", "ACH_EVERYONE_LIES", "ACH_DARKROOM", "ACH_FIRST_LIGHT", "ACH_UNTOUCHED"],
  ]},
  RETREAT: { who: "JO · CHARMER", ending: "ENDING_LAST_FERRY", images: 5, batches: [
    ["RECRUIT_PRIYA", "REACH_LIARS"],
    ["DISCOVER_PRIYA_TEXT"],
  ]},
};
let failed = false;
console.log(`score ceiling ${maxScore(G)}\n`);
for (const [name, r] of Object.entries(RUNS)) {
  const have = new Set(); const run = { act: 1 }; const problems = [];
  for (const b of r.batches) { const res = applyEvents(G, run, have, b); run.act = res.act; problems.push(...res.rejected.map((x) => `${x.id}: ${x.reason}`), ...res.duplicates.map((x) => `${x}: duplicate`)); }
  const e = G.endings[r.ending];
  if (run.act < (e.min_act || 1)) problems.push(`ending needs act ${e.min_act}`);
  for (const q of e.requires || []) if (!have.has(q)) problems.push(`ending requires ${q}`);
  if (r.images < 5 || r.images > 8) problems.push("image count");
  const { score } = scoreRun(G, have, r.ending, true);
  const secrets = [...have].filter((id) => G.events[id]?.secret).length;
  console.log(`${name.padEnd(9)} ${r.who.padEnd(18)} act ${run.act}  ${e.title.padEnd(18)} score ${String(score).padStart(6)}  secrets ${secrets}/11`);
  if (problems.length) { failed = true; console.log("          PROBLEMS: " + problems.join("; ")); }
}
process.exit(failed ? 1 : 0);
