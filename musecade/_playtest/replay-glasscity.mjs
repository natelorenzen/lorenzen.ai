// Replays four simulated Glass City playtests through the real server scoring rules.
//   node musecade/_playtest/replay-glasscity.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.theglasscity;
const RUNS = {
  STANDARD: { who: "HARLOW · OPERATIVE", ending: "ENDING_GLASS_AND_DAYLIGHT", died: false, images: 7, batches: [
    ["DISCOVER_SWEEPER_PHOTO", "RECRUIT_TOMAS", "ENC_ARCADE_SURVIVED", "REACH_CONTACT"],
    ["SOCIAL_ILSE_DEAL", "RECRUIT_ILSE", "SOCIAL_NIGHTINGALE_TRUST", "DISCOVER_KATYA", "DISCOVER_THE_FRAME", "ENC_RAID_SURVIVED", "REACH_BURNED"],
    ["RECRUIT_ANYA", "DISCOVER_ANYA_HANDLER", "DISCOVER_TOMAS_REPORTS", "PUZZLE_QUEEN_SOLVED", "PUZZLE_ARCHIVE_SOLVED", "DISCOVER_ASHBY_SON", "DISCOVER_CARDINAL", "ALLY_TOMAS_TURNED", "REACH_MOLE"],
    ["SOCIAL_ASHBY_CONFRONT", "ENC_GLASSHOUSE_SURVIVED", "RESCUE_KATYA", "ALLY_ANYA_CHOOSES", "REACH_BRIDGE"],
    ["ENC_BRIDGE_SURVIVED", "COMPANION_SURVIVES_ILSE", "COMPANION_SURVIVES_ANYA", "ACH_TWO_BIRDS"],
  ]},
  CHAOTIC: { who: "VEX · DIPLOMAT", ending: "ENDING_GARDENERS_TRADE", died: false, images: 6, batches: [
    ["DISCOVER_SWEEPER_PHOTO", "SOCIAL_BORDER", "ENC_ARCADE_SURVIVED", "REACH_CONTACT"],
    ["SOCIAL_NIGHTINGALE_TRUST", "DISCOVER_KATYA", "DISCOVER_THE_FRAME", "ENC_RAID_SURVIVED", "REACH_BURNED"],
    ["DISCOVER_VOSS_GARDEN"],
  ]},
  CLEVER: { who: "ISOLDE · ANALYST", ending: "ENDING_GLASS_AND_DAYLIGHT", died: false, images: 8, batches: [
    ["DISCOVER_SWEEPER_PHOTO", "RECRUIT_TOMAS", "DISCOVER_TOMAS_REPORTS", "ENC_ARCADE_SURVIVED", "ENC_ARCADE_CLEVER", "REACH_CONTACT"],
    ["RECRUIT_ILSE", "SOCIAL_ILSE_DEAL", "DISCOVER_ILSE_REPORTS", "DISCOVER_PAVEL", "DISCOVER_MORROW_LEAK", "SOCIAL_NIGHTINGALE_TRUST", "DISCOVER_KATYA", "PUZZLE_QUEEN_SOLVED", "PUZZLE_QUEEN_NO_HINT", "DISCOVER_THE_FRAME", "ENC_RAID_SURVIVED", "ENC_RAID_CLEVER", "REACH_BURNED"],
    ["RECRUIT_ANYA", "DISCOVER_ANYA_HANDLER", "SOCIAL_MARGOT", "DISCOVER_CARDINAL", "ALLY_TOMAS_TURNED", "PUZZLE_CANARY_SOLVED", "PUZZLE_CANARY_NO_HINT", "PUZZLE_ARCHIVE_SOLVED", "PUZZLE_ARCHIVE_NO_HINT", "DISCOVER_ASHBY_SON", "REACH_MOLE"],
    ["SOCIAL_ASHBY_CONFRONT", "SOCIAL_VOSS_PARLEY", "DISCOVER_VOSS_GARDEN", "ALLY_ILSE_TRUE", "ENC_GLASSHOUSE_SURVIVED", "ENC_GLASSHOUSE_CLEVER", "RESCUE_KATYA", "ALLY_ANYA_CHOOSES", "REACH_BRIDGE"],
    ["ENC_BRIDGE_SURVIVED", "ENC_BRIDGE_CLEVER", "COMPANION_SURVIVES_TOMAS", "COMPANION_SURVIVES_ILSE", "COMPANION_SURVIVES_ANYA",
     "ACH_NO_SHOTS_FIRED", "ACH_CANARY_TRAP", "ACH_EVERYBODY_CROSSES", "ACH_WHOLE_TRUTH", "ACH_TWO_BIRDS", "ACH_DEEP_COVER", "ACH_DOUBLE_BLIND", "ACH_CHECKMATE", "ACH_GARDENERS_NOD"],
  ]},
  FAILURE: { who: "KIT · GHOST", ending: "ENDING_STAR_WITHOUT_A_NAME", died: true, images: 5, batches: [
    ["DISCOVER_SWEEPER_PHOTO", "ENC_ARCADE_SURVIVED", "REACH_CONTACT"],
    ["SOCIAL_NIGHTINGALE_TRUST", "DISCOVER_THE_FRAME"],
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
