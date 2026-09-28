// Replays four simulated Sea Glass Inn playtests through the real server scoring rules.
//   node musecade/_playtest/replay-seaglassinn.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.theseaglassinn;
const RUNS = {
  STANDARD: { who: "NORA · CARETAKER", ending: "ENDING_THE_KEEPER", images: 6, batches: [
    ["RECRUIT_BEA", "DISCOVER_BEA_SAVINGS", "REACH_ISLAND"],
    ["SOCIAL_MARGUERITE_TRUST", "RECRUIT_JONAH", "DISCOVER_JONAH_LETTERS", "DISCOVER_ELI", "DISCOVER_LYDIA_TROUBLE", "RECRUIT_MAYA", "DISCOVER_MAYA_SECRET", "REACH_LETTERS"],
    ["PUZZLE_TIDE_SOLVED", "DISCOVER_MARLOWE", "ENC_RESCUE_SURVIVED", "SOCIAL_MAYA_HEART", "BOND_MAYA", "REACH_STORM"],
    ["DISCOVER_VALE_KNOWS", "ENC_STORM_SURVIVED", "DISCOVER_HIDDEN_ROOM", "DISCOVER_KEEPERS_DAUGHTER", "SOCIAL_LYDIA_PEACE", "BOND_BEA", "REACH_FESTIVAL"],
    ["SOCIAL_COUNCIL_SPEECH", "ACH_NEVER_SIGNED"],
  ]},
  CHAOTIC: { who: "ROX · ADVENTURER", ending: "ENDING_WIDE_WORLD", images: 5, batches: [
    ["SOCIAL_VALE_TERMS", "REACH_ISLAND"],
    ["RECRUIT_JONAH", "DISCOVER_VALE_KNOWS"],
  ]},
  CLEVER: { who: "IVY · ARTIST", ending: "ENDING_MARLOWE_HOUSE", images: 7, batches: [
    ["RECRUIT_BEA", "DISCOVER_BEA_SAVINGS", "SOCIAL_VALE_TERMS", "REACH_ISLAND"],
    ["SOCIAL_MARGUERITE_TRUST", "RECRUIT_JONAH", "DISCOVER_JONAH_LETTERS", "DISCOVER_ELI", "DISCOVER_LYDIA_TROUBLE", "DISCOVER_HANK_OPTION", "RECRUIT_MAYA", "DISCOVER_MAYA_SECRET", "DISCOVER_MARGUERITE_PROMISE", "REACH_LETTERS"],
    ["PUZZLE_TIDE_SOLVED", "PUZZLE_TIDE_NO_HINT", "DISCOVER_MARLOWE", "DISCOVER_VALE_KNOWS", "PUZZLE_COUNCIL_SOLVED", "PUZZLE_COUNCIL_NO_HINT", "ENC_RESCUE_SURVIVED", "ENC_RESCUE_CLEVER", "SOCIAL_MAYA_HEART", "BOND_MAYA", "REACH_STORM"],
    ["PUZZLE_SEAGLASS_SOLVED", "PUZZLE_SEAGLASS_NO_HINT", "DISCOVER_HIDDEN_ROOM", "DISCOVER_KEEPERS_DAUGHTER", "ENC_STORM_SURVIVED", "ENC_STORM_CLEVER", "SOCIAL_LYDIA_PEACE", "BOND_BEA", "BOND_JONAH", "REACH_FESTIVAL"],
    ["SOCIAL_COUNCIL_SPEECH", "ACH_EVERY_PIECE", "ACH_NEVER_SIGNED", "ACH_WHOLE_HARBOR", "ACH_OPEN_HEART", "ACH_FULL_STORY", "ACH_WINNIES_EYE", "ACH_LIGHTKEEPER", "ACH_NO_HARD_WORDS", "ACH_FIRST_LIGHT"],
  ]},
  RETREAT: { who: "JO · STRATEGIST", ending: "ENDING_LAST_FERRY", images: 5, batches: [
    ["RECRUIT_BEA", "REACH_ISLAND"],
    ["DISCOVER_LYDIA_TROUBLE"],
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
