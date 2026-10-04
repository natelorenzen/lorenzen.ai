// Replays four simulated The Count of Monte Cristo playtests through the real server scoring rules.
//   node musecade/_playtest/replay-montecristo.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.montecristo;
const RUNS = {
  STANDARD: { who: "SAM · COUNT", ending: "ENDING_WAIT_AND_HOPE", died: false, images: 7, batches: [
    ["DISCOVER_THE_LETTER", "REACH_CHATEAU"],
    ["PUZZLE_BETRAYAL_SOLVED", "DISCOVER_NOIRTIER", "DISCOVER_FARIA_TREASURE", "PUZZLE_SPADA_SOLVED", "ENC_SACK_SURVIVED", "RECRUIT_JACOPO", "REACH_ISLAND"],
    ["ALLY_JACOPO_REFUSES", "DISCOVER_FATHER", "SOCIAL_CADEROUSSE", "DISCOVER_CADEROUSSE", "SOCIAL_MORREL", "RECRUIT_BERTUCCIO", "RECRUIT_HAYDEE", "ENC_CATACOMBS_SURVIVED", "REACH_PARIS"],
    ["DISCOVER_JANINA", "ALLY_BERTUCCIO_TELLS", "DISCOVER_AUTEUIL", "ENC_AUTEUIL_SURVIVED", "DISCOVER_DANGLARS_LEDGER", "PUZZLE_TELEGRAPH_SOLVED", "DISCOVER_POISONER", "REACH_RECKONING"],
    ["ALLY_HAYDEE_STANDS", "SOCIAL_CHAMBER", "ENC_DUEL_SURVIVED", "SOCIAL_ALBERT", "COMPANION_SURVIVES_JACOPO", "COMPANION_SURVIVES_BERTUCCIO", "COMPANION_SURVIVES_HAYDEE", "ACH_WHOLE_CREW"],
  ]},
  CHAOTIC: { who: "ZARA · SAILOR", ending: "ENDING_VAMPA", died: false, images: 5, batches: [
    ["REACH_CHATEAU"],
    ["ENC_SACK_SURVIVED", "RECRUIT_JACOPO", "REACH_ISLAND"],
    ["ENC_CATACOMBS_SURVIVED", "ACH_SINBAD"],
  ]},
  CLEVER: { who: "ADA · SCHOLAR", ending: "ENDING_EDMOND", died: false, images: 7, batches: [
    ["DISCOVER_THE_LETTER", "DISCOVER_NOIRTIER", "REACH_CHATEAU"],
    ["PUZZLE_BETRAYAL_SOLVED", "PUZZLE_BETRAYAL_NO_HINT", "DISCOVER_FARIA_TREASURE", "PUZZLE_SPADA_SOLVED", "PUZZLE_SPADA_NO_HINT", "ACH_FARIAS_PUPIL", "ENC_SACK_SURVIVED", "ENC_SACK_CLEVER", "RECRUIT_JACOPO", "REACH_ISLAND"],
    ["ALLY_JACOPO_REFUSES", "DISCOVER_FATHER", "SOCIAL_CADEROUSSE", "DISCOVER_CADEROUSSE", "SOCIAL_MORREL", "ACH_RED_PURSE", "RECRUIT_BERTUCCIO", "RECRUIT_HAYDEE", "ENC_CATACOMBS_SURVIVED", "ENC_CATACOMBS_CLEVER", "ACH_ABBES_EQUAL", "REACH_PARIS"],
    ["DISCOVER_JANINA", "ALLY_BERTUCCIO_TELLS", "DISCOVER_AUTEUIL", "DISCOVER_BENEDETTO", "ENC_AUTEUIL_SURVIVED", "ENC_AUTEUIL_CLEVER", "DISCOVER_DANGLARS_LEDGER", "PUZZLE_TELEGRAPH_SOLVED", "PUZZLE_TELEGRAPH_NO_HINT", "ACH_STRAWBERRIES", "DISCOVER_POISONER", "DISCOVER_MERCEDES_TRUTH", "SOCIAL_MERCEDES", "REACH_RECKONING"],
    ["ALLY_HAYDEE_STANDS", "SOCIAL_CHAMBER", "ENC_DUEL_SURVIVED", "ENC_DUEL_CLEVER", "SOCIAL_ALBERT", "COMPANION_SURVIVES_JACOPO", "COMPANION_SURVIVES_BERTUCCIO", "COMPANION_SURVIVES_HAYDEE",
     "ACH_MERCY", "ACH_STILL_EDMOND", "ACH_WHOLE_CREW", "ACH_NEVER_UNMASKED", "ACH_WHOLE_TRUTH"],
  ]},
  FAILURE: { who: "BO · ABBE", ending: "ENDING_CEMETERY", died: true, images: 5, batches: [
    ["REACH_CHATEAU"],
    ["PUZZLE_BETRAYAL_SOLVED"],
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
