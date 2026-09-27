# The Black Road: Simulated Playtests

Four complete runs, traced turn by turn through the actual game files as a DM would load and apply them. Each run's event log is replayed through the real server scoring rules by `replay.mjs`:

```bash
node musecade/_playtest/replay.mjs
```

| Run | Player | Route | Ending | Score | Secrets | Images |
|---|---|---|---|---|---|---|
| STANDARD | BRAKA · Warden | High Pass | THE LAST FLAME | 8,700 | 7/11 | 6 |
| CHAOTIC | ZED · Envoy | Blackwater | THE SECOND BURNING (died) | 3,600 | 1/11 | 7 |
| CLEVER | IRIS · Scholar | Miners' Road | THE LONG QUIET | 17,250 | 11/11 | 7 |
| FAILURE | KIT · Wayfarer | Blackwater | A NAME IN THE SNOW | 850 | 1/11 | 5 |

---

## 1. STANDARD: follows the apparent quest

**Load:** `adventure.md`, then the boot files (`rules`, `character-creation`, `scoring`, `image-triggers`, `act-1`). Title card printed verbatim. BRAKA picks Warden and "surprise me", which gives the look *scarred, grey-bearded, oilskin over mail*. Run started (RANKED). Tag: `4 NIGHTS TO THE NEW MOON`.

- **1.1** She blindfolds the mare (a Warden trick) and crosses the frost line. She can't read the milestone, so she sees only the pictograms (`litany_clues: milestone`). WARDEN SEES the Southern hobnail prints.
- **1.3** At the Last Lamp, `companions.md` loads when Calen appears. WARDEN SEES the filed crest. She recruits him anyway (`RECRUIT_CALEN`).
- **1.4** First combat: `encounters.md` and `creatures.md` load. **`IMG_FIRST_HUSHED` (image 1, about 8 minutes in).** She holds the kitchen door and cuts down two Hushed (`killed_someone`). Bram breaks loose, she restrains him, and the cellar is revealed (`DISCOVER_HEDDA_CELLAR`). She survives (`ENC_ROAD_SURVIVED`). `bram: untouched`.
- **1.5** Dawn: nights 3. Batch sent: `RECRUIT_CALEN, DISCOVER_HEDDA_CELLAR, ENC_ROAD_SURVIVED, REACH_WILDERNESS`, all accepted.
- **Act II** `act-2`, `npcs` and `locations` load. She frees Wren from the man-trap (`RECRUIT_WREN`). At the waystation `puzzles.md` loads. Oswin joins (`RECRUIT_OSWIN`) and translates her description of the milestone (`DISCOVER_MILESTONE_VERSE`). The Listener: she shakes Tam's ice-cold hand, notes the sigil's height, and needs one nudge about his dry boots, so the puzzle is solved but hinted (`PUZZLE_LIAR_SOLVED` only). Tam is bound, then released at dawn (`spared`); `factions.md` loads. Nights 2.
- **The High Pass.** Kestrel's Watch: she refuses Dask's 500 crowns. Dask lets her pass (Wardens aware). Sorrow Bridge: **`IMG_SORROW_BRIDGE` (image 2).** Calen says "We won't both make it across." She asks which rope carries the weight, is told the two tarred lower cables, waits until the Crawler is beneath the left one, and cuts it (`ENC_BRIDGE_SURVIVED`, `ENC_BRIDGE_CLEVER`).
- **Act III** `act-3` and `lore` load. **`IMG_FIRST_VIEW_OF_VEYR` (image 3)** plus `VID_FIRST_VIEW_OF_VEYR` if the agent can make video. At the Ash Gate she notices the flues and soot, but gets a hint about the jammed chain (`PUZZLE_GATE_SOLVED`). In the Hall of Crowns, Serith recognizes Calen from Saltcombe, and BRAKA stands by him without excusing him (trust +1). Oswin translates the mural caption (`DISCOVER_STILLHEART`). She skips the crypt. That night in Veyr, Wren sleepwalks and is caught (`DISCOVER_WREN_HUSHING`), and Calen confesses his orders (`DISCOVER_CALEN_ORDERS`). Nights 1.
- **Act IV** `act-4` loads. The white robe, then the truth from Prior Hesk (`DISCOVER_RELIQUARY_TRUTH`, `DISCOVER_OSWIN_PURPOSE`). The siege: the Choir comes, because Serith was not doubted, and Dask comes, because the Wardens are aware. **`IMG_ORUN_SIEGE` (image 4).** Calen tears up his orders in front of Dask (`CALEN_STAYS_LOYAL`). Wren refuses the song (`WREN_KEPT_WARM`). `ENC_ORUN_SURVIVED`. At the Lantern Door, with the milestone, hymn and mural clues, she orders it after one hint from Oswin (`PUZZLE_LITANY_SOLVED`). On the Stair of Ash, Liss is found, but there is no emberstone and she won't open the box, so Liss is not saved.
- **Act V** `act-5` and `endings` load. **`IMG_EMBER_THRONE` (image 5).** She hears Maelis out (`QUEEN_SPOKEN`). Dask follows them down (variant A), and she fights him on the dark veins (`ENC_THRONE_SURVIVED`). She takes the Crown: **THE LAST FLAME** and **`IMG_ENDING_LAST_FLAME` (image 6).**
- **Game over** `achievements.md` loads. `EVERYBODY LIVES` and `THREE INSTRUCTIONS` are earned. `NO SWORD DRAWN` is not, because she killed Hushed at Greyholt. The run completes, and the screen shows `COMPANIONS SURVIVED 3 / 3`.

**Verified:** progressive loading happened at every trigger, never early. The image count is 6, with the first at the creature reveal. The visual state carried through: the scar, the oilskin, all three companions present in the siege and throne images. Every event was accepted in order.

## 2. CHAOTIC: opens the box early, attacks someone important, ignores the road

- **1.1** ZED pries the box open at the milestone. `ACH_WHATS_IN_THE_BOX` is reported immediately. The ember mark appears on the palm, and **`IMG_RELIQUARY_OPENED` (image 1, about 3 minutes in)** fires under the stated exception. The Kindling whispers "carry me home".
- **1.3** ZED stabs at Calen for "looking at me funny". Calen disarms him, doesn't kill, and leaves (status `left`, trust -3); Wardens aware. That night ZED ends the siege with one flare (flare 1, Choir aware). **`IMG_FIRST_HUSHED` (image 2).** `ENC_ROAD_SURVIVED`.
- He leaves the road for the mountains. Per `act-1`, the Karrow is impassable without the pass, so the time cost is explained and he returns to the road half a day later.
- **Act II** He ignores Wren. At the waystation he stabs Tam on a hunch (`killed_someone`; the puzzle isn't "solved", since he didn't reason it out). At Kestrel's Watch he sells the box. *(Bug found: this ended the game instantly. Fixed; see below.)* That night he steals it back using a forged warrant, and Dask pursues. He takes the Blackwater. **`IMG_DROWNED_BELL` (image 3).** Flare 2 drives off the Drowned (`ENC_DROWNED_SURVIVED`). An extra night, so nights 1.
- **Act III** **`IMG_FIRST_VIEW_OF_VEYR` (image 4).** The whole city of ash-figures turns to face the open Kindling. He sleeps in Veyr: nights 0.
- **Act IV** Orun on the new-moon day. Hesk sees the ember mark: "Then it's certain" (`DISCOVER_RELIQUARY_TRUTH`). In the siege, Calen is among Dask's Wardens. *(Gap found: there was no rule for a companion who left. Fixed.)* ZED doesn't try to turn him. Flare 3 means he is burning, and Wounded. **`IMG_ORUN_SIEGE` (image 5).** `ENC_ORUN_SURVIVED`. He takes the miners' crack past the Lantern Door, so he gets no words.
- **Act V** **`IMG_EMBER_THRONE` (image 6).** A brief audience (`QUEEN_SPOKEN`). He raises the Crown as a weapon against the Hush: **THE SECOND BURNING**, and he dies. **`IMG_ENDING_SECOND_BURNING` (image 7).**
- **Achievements:** only `WHAT'S IN THE BOX?`. *(Error found in my first trace: I awarded `OATHBREAKER`, but ZED was never late and never abandoned the road. Removed. `achievements.md` states the exact condition.)*

**Verified:** early opening, a companion leaving then returning as an enemy, the flare cost progression (third flare means Wounded), faction awareness from noise, and death at the throne with fate `dies` and `died: true`. The world adapted instead of railroading.

## 3. CLEVER: avoids fights, remembers clues, manipulates, finds hidden routes

- **Act I** IRIS reads the milestone (`DISCOVER_MILESTONE_VERSE`). She notices the frost on the cellar keyhole, and Hedda confides (`DISCOVER_HEDDA_CELLAR`). She presses the *sealed* box's warmth to Bram, who says "Hedda" and goes still (`SOCIAL_HEDDA_MERCY`, `bram: freed`). She rings the chapel bell against the Night Visitors (`ENC_ROAD_SURVIVED`, `ENC_ROAD_CLEVER`) and kills no one. She recruits Calen and later asks him straight about Dask (`DISCOVER_CALEN_ORDERS`, trust holds).
- **Act II** She frees Wren kindly and asks about "another way" (`DISCOVER_LONG_WAY`). At the waystation she sits and draws with Pip, finds the drawing, notes the dry boots, and catches Tam at the bar at midnight, all unhinted (`PUZZLE_LIAR_SOLVED`, `PUZZLE_LIAR_NO_HINT`). She asks Tam his sisters' names, and he turns (`SOCIAL_TAM_TURNED`). She vouches for Fenn and gets two emberstones (`SOCIAL_FENN_BARGAIN`). Wren's frost mark is noticed (`DISCOVER_WREN_HUSHING`), and she is kept warm with emberstone. The Miners' Road: **`IMG_MINERS_ROAD` (image 2)** and the Tally (`DISCOVER_MINERS_TALLY`). Dask never learns her route.
- **Act III** She emerges from the Deepworks, so the Ash Gate is skipped (replay value). **`IMG_FIRST_VIEW_OF_VEYR` (image 3).** She reads the mural herself (`DISCOVER_STILLHEART`) and uses Bram's last word to move Serith (`SOCIAL_SERITH_DOUBT`). **`IMG_HALL_OF_CROWNS` (image 4, optional).** In the crypt (`DISCOVER_CRYPT`), the journal and its margin (`DISCOVER_BURNING_TRUTH`, *anna vaelun*). The Cinder Guard stirs when she lifts the journal; she speaks Veyric and they kneel (`ENC_CINDER_SURVIVED`, `ENC_CINDER_CLEVER`). She climbs the Queen's Road by emberstone light through the night and reaches Orun before dawn with **2** nights left.
- **Act IV** Hesk and Oswin come clean (`DISCOVER_RELIQUARY_TRUTH`, `DISCOVER_OSWIN_PURPOSE`). Oswin stands with her against Hesk (`OSWIN_CHOOSES_YOU`). No Dask comes. *(Gap found: Calen's loyalty beat only existed if Dask arrived. Fixed: he burns his orders at the hearth.)* That gives `CALEN_STAYS_LOYAL`. The siege is Hushed only, since the Choir stands down after Serith's doubt, and Tam opens the side gate (`ENC_ORUN_SURVIVED`, `ENC_ORUN_CLEVER`). **`IMG_ORUN_SIEGE` (image 5).** `WREN_KEPT_WARM`. The Litany is solved from all five clues, unaided (`PUZZLE_LITANY_SOLVED`, `PUZZLE_LITANY_NO_HINT`). Liss is saved with emberstone, the fox and her name (`LISS_SAVED`).
- **Act V** **`IMG_EMBER_THRONE` (image 6)** plus `VID_EMBER_THRONE`. She addresses Maelis in Veyric (`QUEEN_SPOKEN`). Variant D: Bram's voice rises from the Hush, "This one gave warmth. Let them come", and the way parts (`ENC_THRONE_SURVIVED`, `ENC_THRONE_CLEVER`). This is the Act I decision paying off 50 minutes later. She says *anna vaelun*, the Crown opens, and Wren carries the heart down. **THE LONG QUIET.** **`IMG_ENDING_LONG_QUIET` (image 7)** plus `VID_ENDING`.
- **Achievements:** OLD BLOOD, EVERYBODY LIVES, THE LONG WAY, NO SWORD DRAWN, SILVER TONGUE (Tam, the Cinder Guard, Serith), THE QUEEN'S TONGUE, THREE INSTRUCTIONS, BEFORE THE MOON, UNSCARRED.

**Verified:** the hidden route, the hidden ending and its prerequisites (the server requires `DISCOVER_STILLHEART` plus the Litany or the Queen), the long-range callback (Bram in Act V), and a score above 10,000 for an exceptional run. It saw about 65% of authored content: no gate puzzle, no bridge, no Blackwater, no Dask.

## 4. FAILURE: dies

- **Act I** KIT leads the horse around the frost line, so the Moor variant applies. **`IMG_FIRST_HUSHED` (image 1).** He is gripped and dragged, and he is Wounded (injury: "frost-burned throat, voice hoarse"). He survives until dawn (`ENC_ROAD_SURVIVED`). He never reaches the inn, so Calen trails him.
- **Act II** He leaves Wren in the trap (trust -3). He refuses Calen at the waystation. He accuses Fenn wrongly, and at midnight Tam lifts the bar and Pip is taken. It's the worst outcome in Act II, and it lands. The Blackwater: **`IMG_DROWNED_BELL` (image 2).** He goes over the side and is Grievous (`ENC_DROWNED_SURVIVED`, barely).
- **Act III** **`IMG_FIRST_VIEW_OF_VEYR` (image 3).** He waves a torch at the tombs in the crypt (`DISCOVER_CRYPT`). The Cinder Guard rises. **`IMG_CINDER_GUARD` (image 4).** He fights, Desperate while Grievous and after a clear warning, and he dies. `endings.md` loads.
- **Death:** narrated without cruelty. **`IMG_DEATH` (image 5):** the crypt aisle, his knife in the ash, the box glowing faintly. The epilogue: the box lay where he fell, no companion carried on, and the Queen's fire failed at the new moon. The Hush came down slowly. "There is a cairn in the Royal Crypt of Veyr. Someone keeps a lamp in it." Then the **death screen** (not journey-complete), completed with `ENDING_NAME_IN_THE_SNOW`, `died: true`, a score of 850, ranked (the run took over five minutes).

**Verified:** death is legitimate and telegraphed, the death image fires, the epilogue is built from state, the death screen format holds, and a dead run can appear on the leaderboard.

---

## Problems found and fixed

| # | Found in | Problem | Fix |
|---|---|---|---|
| 1 | Validator | `endings.md` never stated the canonical ending IDs, so the DM had no string to send to `/run/complete` | Every ending now opens with **ID** and **fate** |
| 2 | STANDARD | The night count started at 5, so a standard run reached Orun with 2 to spare; the moon never threatened, and BEFORE THE MOON was trivial | Now starts at **4** and drops **at each dawn**; pushing through a night is the real time-saver |
| 3 | CHAOTIC | Selling the box to Dask ended the game instantly, railroading a player who wanted to steal it back | Surrender ends the game only if the courier walks away; otherwise Dask carries it north and it's recoverable |
| 4 | CHAOTIC | The Crown of Chains epilogue had an unwilling prisoner wear a Crown that kills unwilling bearers | The bearer is a condemned man who accepts for his children's pardon |
| 5 | CHAOTIC | No rule for a companion who left or was driven off | Calen returns with Dask's Wardens and can still be turned |
| 6 | CLEVER | Calen's loyalty beat only happened if Dask showed up at Orun | Without Dask, he burns or keeps his orders at the refectory hearth |
| 7 | CHAOTIC | Opening the box before the first creature conflicted with the "first image at the creature reveal" rule | Explicit exception for `IMG_RELIQUARY_OPENED` |
| 8 | All | "Send REACH first" in scoring.md contradicted "send in the order they happened" | Batches are chronological; `REACH_*` comes last in each act's batch |
| 9 | CHAOTIC | My own trace awarded OATHBREAKER without the "late or abandoned" condition | Trace corrected; the condition in `achievements.md` is explicit |
| 10 | STANDARD | A quest-following run scored 10,350, above the typical band | Companion and ending values rebalanced; standard runs now land around 7,000–8,700 and exceptional runs 10,000–17,000 |
| 11 | Leaderboard question | Agents without HTTP could never reach the leaderboard | LINK mode: a one-click submit link and the `/run/submit` endpoint, idempotent by nonce |
| 12 | Leaderboard question | Heavy traffic to the board would hit the database on every view | Leaderboard and stats cached at the edge for 30 seconds |

## Not verifiable from this repository

These depend on the agent, and must be checked in a real Muse conversation:

- whether Muse actually persists hashtag recognition across turns (it should, since the router is in context) and across conversations (only with the standing instruction)
- image quality and style adherence, and whether Muse honors the budget
- whether Muse can make POST or GET requests (which selects RANKED, LINK or LOCAL)
- real-world length: the traces above estimate 55 to 70 minutes of play at 80 to 200 words a turn
