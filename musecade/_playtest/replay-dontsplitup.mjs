// Replays four simulated Don't Split Up playtests through the real server scoring rules.
//   node musecade/_playtest/replay-dontsplitup.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.dontsplitup;
const RUNS = {
  STANDARD: { who: "SAM · JOCK", ending: "ENDING_ROLL_CREDITS", died: false, images: 6, batches: [
    ["RECRUIT_DALE", "RECRUIT_WENDELL", "DISCOVER_EARL_CARDS", "RECRUIT_COURTNEY", "DISCOVER_FLYER", "REACH_CABIN"],
    ["DISCOVER_DALE_GRANDPA", "PUZZLE_CABIN_SOLVED", "DISCOVER_FOG_MACHINES", "ENC_CABIN_SURVIVED", "REACH_CAMP"],
    ["SOCIAL_DARLENE", "DISCOVER_DARLENE_STORY", "PUZZLE_RULES_SOLVED", "ENC_CAMP_SURVIVED", "DISCOVER_THE_TAKEN", "REACH_TOWN"],
    ["DISCOVER_THE_COMMITTEE", "DISCOVER_THE_ORIGIN", "ALLY_COURTNEY_TAPE", "ENC_MAZE_SURVIVED", "REACH_PATCH"],
    ["ENC_PATCH_SURVIVED", "PUZZLE_LANTERN_SOLVED", "ALLY_DALE_COMES_BACK", "COMPANION_SURVIVES_DALE", "COMPANION_SURVIVES_WENDELL", "COMPANION_SURVIVES_COURTNEY", "ACH_EVERYBODY_LIVES", "ACH_IM_RIGHT_BACK"],
  ]},
  CHAOTIC: { who: "ZARA · WEIRDO", ending: "ENDING_SEASON_PASS", died: false, images: 5, batches: [
    ["RECRUIT_DALE", "RECRUIT_WENDELL", "REACH_CABIN"],
    ["ENC_CABIN_SURVIVED", "REACH_CAMP"],
    ["ENC_CAMP_SURVIVED", "REACH_TOWN"],
    ["DISCOVER_THE_COMMITTEE", "ACH_FULL_SIZE_BARS"],
  ]},
  CLEVER: { who: "ADA · NERD", ending: "ENDING_COME_FOR_THE_LEAVES", died: false, images: 7, batches: [
    ["RECRUIT_DALE", "RECRUIT_WENDELL", "DISCOVER_EARL_CARDS", "SOCIAL_EARL", "RECRUIT_COURTNEY", "DISCOVER_FLYER", "DISCOVER_WENDELL_SECRET", "REACH_CABIN"],
    ["DISCOVER_DALE_GRANDPA", "PUZZLE_CABIN_SOLVED", "PUZZLE_CABIN_NO_HINT", "DISCOVER_FOG_MACHINES", "ENC_CABIN_SURVIVED", "ENC_CABIN_CLEVER", "PUZZLE_RULES_SOLVED", "PUZZLE_RULES_NO_HINT", "REACH_CAMP"],
    ["SOCIAL_DARLENE", "DISCOVER_DARLENE_STORY", "ENC_CAMP_SURVIVED", "ENC_CAMP_CLEVER", "DISCOVER_THE_TAKEN", "ACH_GENRE_SAVVY", "REACH_TOWN"],
    ["SOCIAL_SHERIFF", "DISCOVER_THE_COMMITTEE", "ALLY_COURTNEY_TAPE", "DISCOVER_THE_ORIGIN", "DISCOVER_THE_STINGER", "SOCIAL_MAYOR", "ENC_MAZE_SURVIVED", "ENC_MAZE_CLEVER", "ALLY_DALE_COMES_BACK", "SOCIAL_HOLLOW_TALK", "DISCOVER_HOLLOW_WISH", "REACH_PATCH"],
    ["ENC_PATCH_SURVIVED", "ENC_PATCH_CLEVER", "ALLY_WENDELL_WATCHES", "COMPANION_SURVIVES_DALE", "COMPANION_SURVIVES_WENDELL", "COMPANION_SURVIVES_COURTNEY",
     "ACH_DIDNT_SPLIT_UP", "ACH_LOW_TROPE", "ACH_EVERYBODY_LIVES", "ACH_NEVER_SAID_IT", "ACH_DIDNT_READ_IT", "ACH_BEFORE_CREDITS", "ACH_READ_THE_SCRIPT", "ACH_IM_RIGHT_BACK"],
  ]},
  FAILURE: { who: "BO · SKEPTIC", ending: "ENDING_RIGHT_BACK", died: true, images: 5, batches: [
    ["RECRUIT_DALE", "RECRUIT_WENDELL", "REACH_CABIN"],
    ["ENC_CABIN_SURVIVED", "REACH_CAMP"],
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
  console.log(`${name.padEnd(9)} ${r.who.padEnd(18)} act ${run.act}  ${e.title.padEnd(22)} score ${String(score).padStart(6)}  secrets ${secrets}/11`);
  if (problems.length) { failed = true; console.log("          PROBLEMS: " + problems.join("; ")); }
}
process.exit(failed ? 1 : 0);
