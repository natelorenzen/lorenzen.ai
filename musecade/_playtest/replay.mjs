// Replays the four simulated playtests (see PLAYTESTS.md) through the real server
// scoring rules, in the batches the DM would send at each act transition.
//   node musecade/_playtest/replay.mjs
import { GAMES, applyEvents, scoreRun, maxScore } from "../_worker/src/index.js";

const G = GAMES.theblackroad;

const RUNS = {
  STANDARD: {
    who: "BRAKA · WARDEN", ending: "ENDING_LAST_FLAME", died: false, images: 6,
    batches: [
      ["RECRUIT_CALEN", "DISCOVER_HEDDA_CELLAR", "ENC_ROAD_SURVIVED", "REACH_WILDERNESS"],
      ["RECRUIT_WREN", "RECRUIT_OSWIN", "DISCOVER_MILESTONE_VERSE", "PUZZLE_LIAR_SOLVED", "ENC_BRIDGE_SURVIVED", "ENC_BRIDGE_CLEVER", "ENC_AMBUSH_SURVIVED", "REACH_VEYR"],
      ["PUZZLE_GATE_SOLVED", "DISCOVER_STILLHEART", "DISCOVER_WREN_HUSHING", "DISCOVER_CALEN_ORDERS", "REACH_ORUN"],
      ["DISCOVER_RELIQUARY_TRUTH", "DISCOVER_OSWIN_PURPOSE", "CALEN_STAYS_LOYAL", "WREN_KEPT_WARM", "ENC_ORUN_SURVIVED", "PUZZLE_LITANY_SOLVED", "REACH_THRONE"],
      ["QUEEN_SPOKEN", "ENC_THRONE_SURVIVED", "COMPANION_SURVIVES_CALEN", "COMPANION_SURVIVES_WREN", "COMPANION_SURVIVES_OSWIN", "ACH_EVERYBODY_LIVES", "ACH_THREE_INSTRUCTIONS"],
    ],
  },
  CHAOTIC: {
    who: "ZED · ENVOY", ending: "ENDING_SECOND_BURNING", died: true, images: 7,
    batches: [
      ["ACH_WHATS_IN_THE_BOX", "ENC_ROAD_SURVIVED", "REACH_WILDERNESS"],
      ["ENC_DROWNED_SURVIVED", "ENC_AMBUSH_SURVIVED", "REACH_VEYR"],
      ["REACH_ORUN"],
      ["DISCOVER_RELIQUARY_TRUTH", "ENC_ORUN_SURVIVED", "REACH_THRONE"],
      ["QUEEN_SPOKEN"],
    ],
  },
  CLEVER: {
    who: "IRIS · SCHOLAR", ending: "ENDING_LONG_QUIET", died: false, images: 7,
    batches: [
      ["DISCOVER_MILESTONE_VERSE", "DISCOVER_HEDDA_CELLAR", "SOCIAL_HEDDA_MERCY", "ENC_ROAD_SURVIVED", "ENC_ROAD_CLEVER", "RECRUIT_CALEN", "DISCOVER_CALEN_ORDERS", "REACH_WILDERNESS"],
      ["RECRUIT_WREN", "DISCOVER_LONG_WAY", "RECRUIT_OSWIN", "PUZZLE_LIAR_SOLVED", "PUZZLE_LIAR_NO_HINT", "SOCIAL_TAM_TURNED", "SOCIAL_FENN_BARGAIN", "DISCOVER_WREN_HUSHING", "DISCOVER_MINERS_TALLY", "ENC_AMBUSH_SURVIVED", "ENC_AMBUSH_CLEVER", "REACH_VEYR"],
      ["DISCOVER_STILLHEART", "SOCIAL_SERITH_DOUBT", "DISCOVER_CRYPT", "DISCOVER_BURNING_TRUTH", "ENC_CINDER_SURVIVED", "ENC_CINDER_CLEVER", "REACH_ORUN"],
      ["DISCOVER_RELIQUARY_TRUTH", "DISCOVER_OSWIN_PURPOSE", "CALEN_STAYS_LOYAL", "OSWIN_CHOOSES_YOU", "WREN_KEPT_WARM", "ENC_ORUN_SURVIVED", "ENC_ORUN_CLEVER", "PUZZLE_LITANY_SOLVED", "PUZZLE_LITANY_NO_HINT", "LISS_SAVED", "REACH_THRONE"],
      ["QUEEN_SPOKEN", "ENC_THRONE_SURVIVED", "ENC_THRONE_CLEVER", "COMPANION_SURVIVES_CALEN", "COMPANION_SURVIVES_WREN", "COMPANION_SURVIVES_OSWIN",
       "ACH_OLD_BLOOD", "ACH_EVERYBODY_LIVES", "ACH_THE_LONG_WAY", "ACH_NO_SWORD_DRAWN", "ACH_SILVER_TONGUE", "ACH_QUEENS_TONGUE", "ACH_THREE_INSTRUCTIONS", "ACH_BEFORE_THE_MOON", "ACH_UNSCARRED", "ACH_LAST_SPEAKER"],
    ],
  },
  FAILURE: {
    who: "KIT · WAYFARER", ending: "ENDING_NAME_IN_THE_SNOW", died: true, images: 5,
    batches: [
      ["ENC_ROAD_SURVIVED", "REACH_WILDERNESS"],
      ["ENC_DROWNED_SURVIVED", "ENC_AMBUSH_SURVIVED", "REACH_VEYR"],
      ["DISCOVER_CRYPT"],
    ],
  },
};

let failed = false;
console.log(`score ceiling ${maxScore(G)}\n`);
for (const [name, r] of Object.entries(RUNS)) {
  const have = new Set();
  const run = { act: 1 };
  const rejected = [];
  for (const batch of r.batches) {
    const res = applyEvents(G, run, have, batch);
    run.act = res.act;
    rejected.push(...res.rejected, ...res.duplicates.map((id) => ({ id, reason: "duplicate" })));
  }
  const ending = G.endings[r.ending];
  const problems = [...rejected.map((x) => `${x.id}: ${x.reason}`)];
  if (run.act < (ending.min_act || 1)) problems.push(`ending needs act ${ending.min_act}`);
  for (const req of ending.requires || []) if (!have.has(req)) problems.push(`ending requires ${req}`);
  if (ending.requires_any && !ending.requires_any.some((x) => have.has(x))) problems.push(`ending requires one of ${ending.requires_any}`);
  if (ending.fate === "lives" && r.died) problems.push("fate mismatch");
  if (ending.fate === "dies" && !r.died) problems.push("fate mismatch");
  if (r.images < 5 || r.images > 8) problems.push(`image count ${r.images} outside 5-8`);
  const survived = ending.fate === "lives" || (ending.fate === "either" && !r.died);
  const { score } = scoreRun(G, have, r.ending, survived);
  const secrets = [...have].filter((id) => G.events[id]?.secret).length;
  const ach = [...have].filter((id) => G.events[id]?.category === "achievement").map((id) => G.events[id].title);
  console.log(`${name.padEnd(9)} ${r.who.padEnd(17)} act ${run.act}  ${ending.title.padEnd(20)} score ${String(score).padStart(6)}  secrets ${secrets}/11  images ${r.images}`);
  console.log(`          achievements: ${ach.join(", ") || "none"}`);
  if (problems.length) { failed = true; console.log("          PROBLEMS: " + problems.join("; ")); }
}
process.exit(failed ? 1 : 0);
