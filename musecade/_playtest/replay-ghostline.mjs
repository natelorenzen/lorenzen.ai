// Replays four simulated Ghostline playtests through the real server scoring rules.
//   node musecade/_playtest/replay-ghostline.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";
const G = GAMES.ghostline;
const RUNS = {
  STANDARD: { who: "VEGA · CHROME", ending: "ENDING_OPEN_SKY", images: 6, batches: [
    ["RECRUIT_KES", "DISCOVER_MARA_MURDER", "SOCIAL_LOTUS_DEAL", "REACH_STACKS"],
    ["RECRUIT_NULL", "RECRUIT_JUNO", "ENC_CHURCH_SURVIVED", "DISCOVER_KES_DEAL", "DISCOVER_NULL_PAST", "SOCIAL_CARTOGRAPHERS", "DISCOVER_LOOM_PRICE", "PUZZLE_PALACE_SOLVED", "REACH_VAULT"],
    ["PUZZLE_VAULT_SOLVED", "DISCOVER_EDITS", "DISCOVER_MARA_BUILT_IT", "DISCOVER_YOUR_DEATH", "DISCOVER_SISTER_ALIVE", "REACH_CANOPY"],
    ["ENC_CANOPY_SURVIVED", "KES_STAYS", "REACH_CROWN"],
    ["ENC_SPIRE_SURVIVED", "COMPANION_SURVIVES_KES", "COMPANION_SURVIVES_JUNO"],
  ]},
  CHAOTIC: { who: "RAZ · FIXER", ending: "ENDING_NEW_ARCHITECT", images: 5, batches: [
    ["RECRUIT_KES", "REACH_STACKS"],
    ["RECRUIT_JUNO", "DISCOVER_JUNO_PLAN", "ENC_CHURCH_SURVIVED", "REACH_VAULT"],
    ["DISCOVER_EDITS", "REACH_CANOPY"],
  ]},
  CLEVER: { who: "NYX · NETRUNNER", ending: "ENDING_TWO_MINDS", images: 7, batches: [
    ["RECRUIT_KES", "DISCOVER_MARA_MURDER", "SOCIAL_LOTUS_DEAL", "DISCOVER_LOTUS_BUYER", "REACH_STACKS"],
    ["RECRUIT_NULL", "RECRUIT_JUNO", "DISCOVER_JUNO_PLAN", "ENC_CHURCH_SURVIVED", "ENC_CHURCH_CLEVER", "DISCOVER_KES_DEAL", "DISCOVER_NULL_PAST", "SOCIAL_NULL_CONFESSION", "SOCIAL_CARTOGRAPHERS", "DISCOVER_LOOM_PRICE", "PUZZLE_PALACE_SOLVED", "PUZZLE_PALACE_NO_HINT", "REACH_VAULT"],
    ["PUZZLE_VAULT_SOLVED", "PUZZLE_VAULT_NO_HINT", "DISCOVER_EDITS", "DISCOVER_MARA_BUILT_IT", "DISCOVER_YOUR_DEATH", "DISCOVER_SISTER_ALIVE", "NULL_REDEEMED", "REACH_CANOPY"],
    ["SOCIAL_MARA_TRUTH", "ENC_CANOPY_SURVIVED", "ENC_CANOPY_CLEVER", "KES_STAYS", "JUNO_LETS_GO", "DISCOVER_KADE_BACKUP", "REACH_CROWN"],
    ["SOCIAL_INES", "ENC_SPIRE_SURVIVED", "ENC_SPIRE_CLEVER", "PUZZLE_LOOM_SOLVED", "PUZZLE_LOOM_NO_HINT", "COMPANION_SURVIVES_KES", "COMPANION_SURVIVES_NULL", "COMPANION_SURVIVES_JUNO", "ACH_NO_KEYS", "ACH_FULL_STORY", "ACH_CREW", "ACH_NO_BODY_COUNT", "ACH_STILL_ME", "ACH_THE_DEEP", "ACH_ANCHORED"],
  ]},
  FAILURE: { who: "KIT · MEDTECH", ending: "ENDING_FLATLINE", died: true, images: 5, batches: [
    ["RECRUIT_KES", "REACH_STACKS"],
    ["RECRUIT_NULL"],
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
