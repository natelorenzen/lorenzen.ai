# The Black Road: Simulated Playtests

Four complete runs, traced turn by turn through the actual game files as a DM would load and apply them. Each run's event log is replayed through the real server scoring rules by `replay.mjs`:

```bash
node musecade/_playtest/replay.mjs
```

| Run | Player | Route | Ending | Score | Secrets | Images |
|---|---|---|---|---|---|---|
| STANDARD | BRAKA · Warden | High Pass | THE LAST FLAME | 8,900 | 7/11 | 6 |
| CHAOTIC | ZED · Envoy | Blackwater | THE SECOND BURNING (died) | 3,800 | 1/11 | 7 |
| CLEVER | IRIS · Scholar | Miners' Road | THE LONG QUIET | 18,100 | 11/11 | 7 |
| FAILURE | KIT · Wayfarer | Blackwater | A NAME IN THE SNOW | 1,050 | 1/11 | 5 |

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
- **Achievements:** OLD BLOOD, EVERYBODY LIVES, THE LONG WAY, NO SWORD DRAWN, SILVER TONGUE (Tam, the Cinder Guard, Serith), THE QUEEN'S TONGUE, THREE INSTRUCTIONS, BEFORE THE MOON, UNSCARRED, THE LAST SPEAKER (v1.1: all six Words recovered at the milestone, waystation, crypt and Lantern Door).

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

## v1.1 changes (after the first real play)

- **The player's feedback:** the Scholar's "ancient magic" was only lore. Now Scholars start with two weak Words of Weight (NER, SAEL) and recover four more (THARRU at the milestone, ENNAR at the waystation, MAELIS in the crypt, ANNA VAELUN at the Lantern Door), growing from rank I "Whisper" to rank III "Command". Casting costs strain. See `game/words.md`. New hidden achievement: `ACH_LAST_SPEAKER`.
- **Light d20 rules:** the DM decides when to roll (pivotal moments only). There is a DC ladder, +2 for fitting the path, and advantage or disadvantage. Natural 20s and 1s get special results, and the roll sets the power of big effects. The player can roll their own dice. Dice never solve puzzles.
- **Freshness:** agents re-fetch every game file with a unique `?fresh=` query, never reuse remembered copies, and announce the build stamp (for example `1.1-b996da9`) on load.

## v1.2 changes (the player's rules for agency, menus and battle)

- **Player agency (hard rule):** the DM never picks the player's action or plays the "optimal" line on request, and advises only from what the courier has discovered. Companions may counsel, and may be wrong. This is also a platform rule in `musecade.md`.
- **Decision menus:** the `create_options` tool renders 3 lateral options plus "Something else — type your own", at real decision points only (one or two per scene). There is a lettered-list fallback for agents without the tool. Menus never reveal undiscovered options and are never used for the final choice at the throne.
- **Wound economy:** field care only pulls someone from Grievous back to Wounded; only Orun's infirmary or a lost night fully heals; a miss by 1 to 4 in battle costs a wound by default. Most runs now carry a wound into Act IV. In the traces: BRAKA (Greyholt, the Climb), ZED (the Climb, Kindling burns), KIT (from the moor onward), while IRIS stays UNSCARRED only by turning the ground at every battle.
- **Three set-piece battles** with stand, evade and turn-the-ground menus: the Night Visitors (tutorial), **the Climb** (new: `ENC_AMBUSH`, a Hushed ambush on every route that reveals the Hush is taking Dask's own Wardens), and the **Stair Hold** (three waves ending the Siege of Orun). Failed sneaks and refused parleys can escalate into short fights.

## v1.3: cold open

- The game now **starts in a fight**: scene 1.0, *The Frost Line*. Two silent, hooded Hushed walk out of the frost for the courier's mare. It's easy (DC 8), it can't wound or kill, and it lasts 3 or 4 decisions. It teaches, one arcade-style `[ TIP ]` line at a time: the decision menu and free typing, the d20 with a path bonus, the Hushed's weaknesses (fire, noise) and their numbing grip, and "try the strange thing". There's a Scholar tip for NER and SAEL. Tips appear only here, and the player can skip them.
- It is a glimpse, not the reveal. The Hushed faces and the first image stay at the Night Visitors (1.4), which becomes the first *real* battle.
- Battle count per typical run: the cold open, then the Night Visitors, the route danger (bridge or Drowned), the Climb, optionally the Cinder Guard, the Siege and Stair Hold, and the throne. That's 6 or 7 fights, 3 of them full set pieces.

---

# The Glass City (Game 002): Simulated Playtests

`node musecade/_playtest/replay-glasscity.mjs` replays each trace through the real scoring rules.

| Run | Cover · Path | Ending | Score | Secrets |
|---|---|---|---|---|
| STANDARD | HARLOW · Operative | GLASS AND DAYLIGHT | 8,950 | 7/11 |
| CHAOTIC | VEX · Diplomat | THE GARDENER'S TRADE (Act III) | 3,400 | 4/11 |
| CLEVER | ISOLDE · Analyst | GLASS AND DAYLIGHT | 16,800 | 11/11 |
| FAILURE | KIT · Ghost | A STAR WITHOUT A NAME (Act II) | 950 | 2/11 |

- **STANDARD:** the train cold open (a grab and a shove; heat 1). Tomas joins, and the Arcade chase costs a wound. Ilse's papers, box seven, and Katya's name. The frame and the Raid (heat 3). Anya's kiosk. The queen solved with one hint about notation. The Registry at seven gives the ribbon and Daniel's file. The film is read at Ilse's, and **CARDINAL** is named. Tomas turns. The Glasshouse. Katya comes out in a cello case. **The bridge:** Ilse sold the real plan, so Kell is waiting at the north gate, and Tomas dies covering the car. Nightingale and Katya cross, and the ribbon and film go on the gate officer's desk. (The Act I and II traces verify the cold open's tips, the heat rise, and the menu at every set piece.)
- **CHAOTIC:** Vex decks the sweeper and threatens Brun (`SOCIAL_BORDER`), then spends the opera flirting with Anya and giving her his real name (which breaks `ACH_DEEP_COVER`). Burned, he goes straight to Voss's residence to sell Nightingale for his own name cleared and learns the Gardener's way out. That's `THE GARDENER'S TRADE` in Act III. It verifies early endings, escalation, and endings with `min_act 3`.
- **CLEVER:** the Analyst's **Board** links the train photo to "cover photos need the Chief's sign-off" in Act I, and the neutral bank to Voss's exit in Act IV. The canary trap goes through a turned Tomas, with Anya watching Voss's orders. Every set piece is resolved cleverly and no shots are fired. Voss's parley buys Pavel's release (Ilse turns true), and Voss exposes Ashby at the gate. Everybody crosses.
- **FAILURE:** Kit runs the Raid across the Meridian's glass roof on a natural 1, while Critical after the Arcade, and the danger had been telegraphed. Death, `IMG_DEATH`, the death screen, and the epilogue: Anya carries the plan alone, and Kell takes Nightingale back at the city end.

**Found and fixed while building:** the standard trace scored 10,450, so top-end values were rebalanced (the ending, rescue, ally, and "everybody" achievements). Path choice has four options, so it can't be a `[MENU]` (at most 3), and the player types it instead. The Registry was moved from 2 a.m. to seven, during the gala, so night 3 stays free for Ashby and the Glasshouse.

---

# The Sea Glass Inn (Game 003): Simulated Playtests

`node musecade/_playtest/replay-seaglassinn.mjs` replays each trace through the real scoring rules. This game has no death, so the fourth trace is the **retreat** run (leaving early).

| Run | Name · Path | Ending | Score | Secrets |
|---|---|---|---|---|
| STANDARD | NORA · Caretaker | THE KEEPER | ~8,750 | 9/11 |
| CHAOTIC | ROX · Adventurer | THE WIDE WORLD (Act II) | 1,950 | 1/11 |
| CLEVER | IVY · Artist | MARLOWE HOUSE | ~15,900 | 11/11 |
| RETREAT | JO · Strategist | THE LAST FERRY (Act II) | 1,100 | 1/11 |

- **STANDARD:** the ferry squall (Marguerite and the cake), Bea's secret ledger, the lighthouse and the cobalt glass. Marguerite is won over at the bakery rush. Jonah's shed, the *Winifred*, the letters, and Lydia's foreclosure notice. Maya arrives. The tide cave is solved with one nudge, which gives Marlowe. The fog rescue, then the seawall talk. The storm reveals the room. The long night brings peace with Lydia and a partnership with Bea. The speech at the vote. She keeps the inn.
- **CHAOTIC:** Rox tries to sail to the mainland on day one (Jonah stops her), squeezes Vale for better terms (`SOCIAL_VALE_TERMS`), learns Vale knows about "the Marlowe", and sells on Tuesday out of spite at the art world. THE WIDE WORLD from Act II, which verifies early endings and a deliberately short run.
- **CLEVER:** the Artist's Eye reaches rank III in the cave. The council puzzle is solved from the survey stakes and the registry of deeds. The window opens before the storm (FIRST LIGHT). She relights the lighthouse in the nor'easter. She gives the painting to the island.
- **RETREAT:** Jo reads the will, finds Lydia's foreclosure, feels the weight of everything, and takes Tuesday's ferry. THE LAST FERRY, with the "came back years later" epilogue.

**Verified:** no-death fate enforcement (`died:true` is refused), the tide timing, the order of the white and violet glass, the storm fallback for the room, and that the final choice is never offered as a menu. **Fixed:** near-certain secrets (the room, the painting) were worth too much, so the standard run scored 9,300; they've been rebalanced.
