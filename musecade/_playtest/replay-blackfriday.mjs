// Replays four simulated Black Friday playtests through the real server scoring rules.
//   node musecade/_playtest/replay-blackfriday.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.blackfriday;
const RUNS = {
  STANDARD: { who: "SAM · BUYER", ending: "ENDING_PROFITABLE", died: false, images: 5, batches: [
    ["RECRUIT_MARGO", "RECRUIT_KYLE", "DISCOVER_KYLE_TESTIMONIAL", "RECRUIT_DOT", "REACH_SUMMIT"],
    ["ENC_EXPO_SURVIVED", "SOCIAL_REX", "DISCOVER_GURU_CASE_STUDY", "PUZZLE_NUMBERS_SOLVED", "REACH_BACK_ROOM"],
    ["SOCIAL_BACK_ROOM", "SOCIAL_SIMONE", "DISCOVER_SIMONE_SHEET", "ENC_PODCAST_SURVIVED", "DISCOVER_METHOD_ORIGIN", "REACH_WAR_ROOM"],
    ["DISCOVER_INCREMENTALITY", "ALLY_KYLE_UNSUBSCRIBES", "ENC_ACCOUNT_SURVIVED", "PUZZLE_LEVER_SOLVED", "DISCOVER_COURSE_LOOP", "PUZZLE_OFFER_SOLVED", "REACH_BFCM"],
    ["ENC_BFCM_SURVIVED", "ALLY_MARGO_STAYS", "COMPANION_SURVIVES_MARGO", "COMPANION_SURVIVES_KYLE", "COMPANION_SURVIVES_DOT", "ACH_WHOLE_TEAM", "ACH_NO_SITEWIDE"],
  ]},
  CHAOTIC: { who: "ZARA · CREATIVE", ending: "ENDING_THE_THREAD", died: false, images: 5, batches: [
    ["RECRUIT_MARGO", "RECRUIT_KYLE", "REACH_SUMMIT"],
    ["ENC_EXPO_SURVIVED", "ACH_BREAKFAST_TACOS", "ACH_LAUGHED", "ACH_OR_THE_WEBSITE", "REACH_BACK_ROOM"],
    ["ENC_PODCAST_SURVIVED", "REACH_WAR_ROOM"],
    ["ENC_ACCOUNT_SURVIVED"],
  ]},
  CLEVER: { who: "ADA · FOUNDER", ending: "ENDING_BORING", died: false, images: 6, batches: [
    ["RECRUIT_MARGO", "RECRUIT_KYLE", "DISCOVER_KYLE_TESTIMONIAL", "RECRUIT_DOT", "DISCOVER_DOT_NOTES", "PUZZLE_NUMBERS_SOLVED", "PUZZLE_NUMBERS_NO_HINT", "REACH_SUMMIT"],
    ["ENC_EXPO_SURVIVED", "ENC_EXPO_CLEVER", "SOCIAL_REX", "DISCOVER_REX_SECRET", "SOCIAL_VINCE", "DISCOVER_GURU_CASE_STUDY", "DISCOVER_NOOSPHERE_DEMO", "REACH_BACK_ROOM"],
    ["SOCIAL_BACK_ROOM", "SOCIAL_SIMONE", "DISCOVER_SIMONE_SHEET", "DISCOVER_MARGO_OFFER", "ENC_PODCAST_SURVIVED", "ENC_PODCAST_CLEVER", "DISCOVER_METHOD_ORIGIN", "ACH_RECEIPTS", "REACH_WAR_ROOM"],
    ["DISCOVER_INCREMENTALITY", "ALLY_KYLE_UNSUBSCRIBES", "ENC_ACCOUNT_SURVIVED", "ENC_ACCOUNT_CLEVER", "PUZZLE_LEVER_SOLVED", "PUZZLE_LEVER_NO_HINT", "DISCOVER_COURSE_LOOP", "SOCIAL_CUSTOMER_CALLS", "DISCOVER_WHY_THEY_BUY", "ALLY_DOT_PRESENTS", "PUZZLE_OFFER_SOLVED", "PUZZLE_OFFER_NO_HINT", "REACH_BFCM"],
    ["ENC_BFCM_SURVIVED", "ENC_BFCM_CLEVER", "ALLY_MARGO_STAYS", "COMPANION_SURVIVES_MARGO", "COMPANION_SURVIVES_KYLE", "COMPANION_SURVIVES_DOT",
     "ACH_NO_NEW_TOOLS", "ACH_LEAN_STACK", "ACH_WHOLE_TEAM", "ACH_NO_SITEWIDE", "ACH_NEVER_POSTED", "ACH_DUE_DILIGENCE", "ACH_FULL_HEAD", "ACH_DIDNT_ASK"],
  ]},
  FAILURE: { who: "BO · OPERATOR", ending: "ENDING_OUT_OF_CASH", died: true, images: 5, batches: [
    ["RECRUIT_MARGO", "RECRUIT_KYLE", "REACH_SUMMIT"],
    ["ENC_EXPO_SURVIVED", "REACH_BACK_ROOM"],
    ["REACH_WAR_ROOM"],
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
