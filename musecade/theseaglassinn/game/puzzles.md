# THE SEA GLASS INN: Puzzles

Three puzzles: textual (the diary), social (the bonfire night) and environmental (the lamp room). Never give the answer. Answer questions truthfully, from what she could notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8, and every puzzle has a fallback (§14).

---

## PUZZLE 1: THE DIARY (Act II)

**The question:** is the diary real?

**The answer:** no. It was written all at once, recently, by someone who knew the island well but not every detail: **Sadie herself**.

**The impossibilities** (each one is found, never told):

| Clue | Where | What it shows |
|---|---|---|
| *"June 12: Theo drove me home in his truck and wouldn't let me out"* | the diary | Theo **sold the truck in April** (Rafa's receipt on the boatyard wall, 2.2) |
| *"May 30: the ferry was cancelled for the storm, so I was stuck with him all day"* | the diary | the **harbor log** shows the *Halcyon Belle* ran both trips on May 30, in calm weather (2.4) |
| One pen, one pressure, no crossings-out, no coffee rings, twenty-two entries | the scans | Sadie's **real school notebooks** have five pens, doodles and mess (2.3). A diary kept over six weeks doesn't look like this |
| *"The Brooding One was in a mood again"* | the diary | that's **Priya's** nickname for Theo, from the podcast. Sadie never called him that (Priya, if asked) |
| The looping `g` with a flick at the end | the diary scans | it's the **same hand as the sea glass notes**. Sadie wrote it. (SLEUTH or PHOTOGRAPHER SEES it once she has two notes and the scans side by side) |

- **Solved:** name **two** impossibilities and conclude the diary is fake: `PUZZLE_DIARY_SOLVED`, plus `_NO_HINT` if unaided, plus `DISCOVER_DIARY_FAKE`. Realizing Sadie wrote it herself isn't required, but it's the best version.
- **Fallback** (after the third hint): Priya finds the ferry log clue herself, too late for her show, and says it out loud. No puzzle events; `DISCOVER_DIARY_FAKE` still counts.

---

## PUZZLE 2: THE BONFIRE NIGHT (Acts II–III)

**The question:** what happened to Sadie between 11:10 and midnight?

**The answer:** nobody took her. She walked to the causeway on her own and crossed to Gull Rock at low tide (11:40). The sandal was planted the next morning. (Full timeline in `world/sadie.md`.)

**The pieces:**
1. **Mason's three stories** (Jules gets them): 10:41 Sadie at the fire; 11:12 Sadie in the background, alone, walking toward the point; 11:50 no Sadie.
2. **Priya's recording:** the church bell ringing eleven under the music, which syncs the clips. And, if she confesses, the **11:32 text**: *"don't look for me."*
3. **Theo's alibi:** he was at the lighthouse from 11:15 to 12:05 and never saw her. So she didn't go to the lighthouse.
4. **Sadie's last roll:** the causeway rocks, still wet, in the dark.
5. **The harbor log:** low tide **11:40 p.m.**; high tide **5:50 a.m.**
6. **Hank's report:** the sandal was found at 7:10 a.m. **on a dry rock**, below the lighthouse, above the high-tide line. If she'd gone into the sea at 11:30, it would have been underwater at 5:50 and washed away.
7. **The red herring:** *Second Wind* out at 12:20 without lights. (Vale searching the water. It looks like guilt. It isn't this kind.)

- **Solved:** the player works out that Sadie **left on her own and crossed to Gull Rock**, backed by at least **three** pieces (the dry sandal and the low tide are the heart of it): `PUZZLE_TIMELINE_SOLVED`, plus `_NO_HINT` if unaided.
- **Wrong answers:** blaming Vale for taking her (he didn't), or Theo (he didn't), costs nothing but time, unless she says it out loud in town (Whispers +1) or to Theo (trust −2).
- **Fallback:** the "SPRING" roll (3.3) proves Sadie is alive anyway. No puzzle events.

---

## PUZZLE 3: SEVEN COLORS (Act IV)

**The question:** how do the seven pieces go in the lamp room's seven slots, and what does the light show?

**The mechanism** (observed, not told):
- The brass lamp housing has **seven slots** in a ring. One slot has a tiny engraved **1** under it (the keeper's first position, facing the harbor).
- Each note gives Sadie's **age** when it happened: 6, 9, 12, 14, 15, 17, 18. The blue note says *"Start where the light used to be"*, and the white note says *"I was six the first time I climbed up here"*: the lamp room is where her story starts.
- With a lamp inside, each piece throws a colored beam onto the **harbor chart** painted on the wall. In the wrong order, the beams scatter. In the right one, they converge.

- **Solution:** set the pieces **in order of her age**, starting at slot 1 and going round: **white (6) · green (9) · amber (12) · red (14) · violet (15) · cobalt (17) · blue (18)**. The beams cross in a point of white light on the chart: **CANNERY PIER · PILING 7**.
- **Solved:** `PUZZLE_SEAGLASS_SOLVED`, plus `_NO_HINT` if unaided. Report `ACH_EVERY_PIECE` at game over if all seven were found by her (the cobalt counts: Sadie gives it).
- **Missing pieces:** with five or six, the point of light is a smear across the south shore: "the cannery pier", but not which piling. She can search the pier (a Hard roll, DC 15, and an hour in the storm), or go back for the missing pieces.
- **Fallback** (after the third hint): Sadie tells her (`acts/act-4.md`, *Exceptions*). No puzzle events.
