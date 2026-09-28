// Replays four simulated Series Doom playtests through the real server scoring rules.
//   node musecade/_playtest/replay-seriesdoom.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.seriesdoom;
const RUNS = {
  STANDARD: { who: "SAM · HUSTLER", ending: "ENDING_BURN_IT_DOWN", died: false, images: 6, batches: [
    ["RECRUIT_DEX", "DISCOVER_DEX_SECRET", "REACH_COUNCIL"],
    ["SOCIAL_COUNCIL", "RECRUIT_ARI", "RECRUIT_GEMMA", "DISCOVER_BRANDON_ORDERS", "DISCOVER_MANN_ARMY", "PUZZLE_HIVE_SOLVED", "ENC_HIVE_SURVIVED", "REACH_BREAKING"],
    ["SOCIAL_GABRIELLE", "ENC_PARK_SURVIVED", "PUZZLE_LEAK_SOLVED", "DISCOVER_BUDDY_EMAILS", "DISCOVER_KEVIN_PAST", "REACH_EAST_BAY"],
    ["ENC_RECRUITER_SURVIVED", "DISCOVER_GARY_RETURNS", "DISCOVER_THE_EYE", "ALLY_ARI_RETURNS", "REACH_DIABLO"],
    ["ENC_DIABLO_SURVIVED", "PUZZLE_CRUCIBLE_SOLVED", "ALLY_DEX_CARRIES", "COMPANION_SURVIVES_DEX", "COMPANION_SURVIVES_ARI", "ACH_YOU_SHALL_NOT_PIVOT"],
  ]},
  CHAOTIC: { who: "ZARA · VISIONARY", ending: "ENDING_TRILLION", died: false, images: 6, batches: [
    ["RECRUIT_DEX", "REACH_COUNCIL"],
    ["DISCOVER_MANN_ARMY", "SOCIAL_MANN", "ENC_HIVE_SURVIVED", "REACH_BREAKING"],
    ["ENC_PARK_SURVIVED", "REACH_EAST_BAY"],
    ["ENC_RECRUITER_SURVIVED", "ACH_SECOND_BREAKFAST"],
  ]},
  CLEVER: { who: "ADA · HACKER", ending: "ENDING_GOOD_BOY", died: false, images: 7, batches: [
    ["RECRUIT_DEX", "DISCOVER_DEX_SECRET", "REACH_COUNCIL"],
    ["SOCIAL_COUNCIL", "RECRUIT_ARI", "RECRUIT_GEMMA", "DISCOVER_BRANDON_ORDERS", "DISCOVER_GEMMA_PAPER", "DISCOVER_LEO_WALLET", "DISCOVER_ARI_OUSTER", "DISCOVER_MANN_ARMY", "SOCIAL_MANN", "PUZZLE_LEAK_SOLVED", "PUZZLE_LEAK_NO_HINT", "DISCOVER_BUDDY_EMAILS", "PUZZLE_HIVE_SOLVED", "PUZZLE_HIVE_NO_HINT", "ENC_HIVE_SURVIVED", "ENC_HIVE_CLEVER", "REACH_BREAKING"],
    ["SOCIAL_GABRIELLE", "ENC_PARK_SURVIVED", "ENC_PARK_CLEVER", "ALLY_GEMMA_TRUSTS", "SOCIAL_KEVIN_MERCY", "DISCOVER_KEVIN_PAST", "REACH_EAST_BAY"],
    ["ENC_RECRUITER_SURVIVED", "ENC_RECRUITER_CLEVER", "SOCIAL_BUDDY_TALK", "DISCOVER_BUDDY_WISH", "DISCOVER_GARY_RETURNS", "DISCOVER_THE_EYE", "ALLY_ARI_RETURNS", "REACH_DIABLO"],
    ["ENC_DIABLO_SURVIVED", "ENC_DIABLO_CLEVER", "PUZZLE_CRUCIBLE_SOLVED", "PUZZLE_CRUCIBLE_NO_HINT", "COMPANION_SURVIVES_DEX", "COMPANION_SURVIVES_ARI", "COMPANION_SURVIVES_GEMMA",
     "ACH_NEVER_USED_IT", "ACH_LOW_HYPE", "ACH_WHOLE_FELLOWSHIP", "ACH_NO_EQUITY", "ACH_KIND_TO_KEVIN", "ACH_WHOLE_TRUTH", "ACH_YOU_SHALL_NOT_PIVOT"],
  ]},
  FAILURE: { who: "BO · OPERATOR", ending: "ENDING_RUNWAY_ZERO", died: true, images: 5, batches: [
    ["RECRUIT_DEX", "REACH_COUNCIL"],
    ["RECRUIT_GEMMA", "ENC_HIVE_SURVIVED", "REACH_BREAKING"],
    ["ENC_PARK_SURVIVED"],
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
  if (e.fate === "lives" && r.died) problems.push("fate mismatch"); if (e.fate === "dies" && !r.died) problems.push("fate mismatch");
  if (r.images < 5 || r.images > 8) problems.push("image count");
  const survived = e.fate === "lives" || (e.fate === "either" && !r.died);
  const { score } = scoreRun(G, have, r.ending, survived);
  const secrets = [...have].filter((id) => G.events[id]?.secret).length;
  console.log(`${name.padEnd(9)} ${r.who.padEnd(18)} act ${run.act}  ${e.title.padEnd(20)} score ${String(score).padStart(6)}  secrets ${secrets}/11`);
  if (problems.length) { failed = true; console.log("          PROBLEMS: " + problems.join("; ")); }
}
process.exit(failed ? 1 : 0);
