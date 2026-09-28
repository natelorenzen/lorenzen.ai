# THE SEA GLASS INN: Puzzles

Three puzzles: environmental (the tide), social (the council) and historical (the sea glass window). Never give the answer. Answer questions truthfully, from what she could notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8.

---

## PUZZLE 1: LOW WATER AT TEN PAST FOUR (environmental · Act II–III)

**The question:** how to reach Winnie's studio in the sea cave under the bluff.

**The answer:** on foot across the rocks at **Thursday's afternoon low tide (about 4:10)**, following the route painted in the lobby seascape: a line of flat grey stones, a rock shaped like a sleeping dog, and a split boulder. The cave's mouth is dry for about forty minutes.

| Clue | Where | What it gives |
|---|---|---|
| The lobby **tide clock**, deliberately stopped at **4:10** | the inn | a time that matters |
| The **tide board** at the harbormaster's shack: *THU LOW 4:12 PM* | the harbor | which day fits |
| The big **seascape** over the fireplace: the bluff's rocks at low tide, painted with unusual care | the inn lobby | the route (Winnie painted her own path) |
| **Tide lines** on the bluff: a band of barnacles and a darker band of weed high up the cliff | from the bluff steps | the cave floods at high tide, so go at low |
| Jonah: *"Nobody goes under the north bluff. It floods fast."* | the boatyard | danger, and that there's something there |
| ARTIST at Eye rank II: the seascape's rocks read as a map | the lobby | a direct path |

- **ADVENTURER SEES** the barnacle line and the cave mouth from the bluff, and knows at once that it's a low-tide place.
- **Alternatives:** Jonah's workboat at mid-tide (Risky, needs him along); swimming it (Desperate, freezing, costs composure); abseiling from the bluff (Adventurer).
- **Going at the wrong time:** the tide turns, and she's stranded on a rock ledge until Jonah or Maya fetches her, costing a phase and composure. It's never lethal.
- **Solved** (she reached the cave by reasoning about the tide): `PUZZLE_TIDE_SOLVED`, plus `PUZZLE_TIDE_NO_HINT` if unaided. The amber glass, the studio and the Marlowe evidence are inside.

---

## PUZZLE 2: WHOSE VOTE IS BOUGHT (social · Act III–V)

**The question:** which council member is secretly in Preston Vale's pocket?

**The answer:** **Hank Pruitt**, through a paid option on his land beside the inn, filed under *Bluff Holdings LLC*.

**The suspects:**

| Member | What looks suspicious | What's really going on |
|---|---|---|
| **Hank Pruitt** | "Undecided". Friendly to everyone. | Vale's option on his land triples its value if the rezoning passes. **Compromised.** |
| **Deb Coyle** | Seen dining with Vale at the harbor restaurant. Votes *for*. | Pitching him a seafood contract. Ambition, not a bribe. |
| **Rev. Ada Lin** | Evasive about her future. "Undecided". | Quietly retiring to be near her grandchildren. Honest, and movable by a great speech. |
| **Walt Sutter** | Loudly *for*, and Vale shook his hand at the hearing. | Genuinely believes in the jobs. Honest. |
| **June Tate** | (the chair) *against*. | Honest. |

**The clues pointing to Hank:**
1. **Fresh orange survey stakes** on Hank's lot beside the inn, driven last week (on the bluff).
2. **The registry of deeds:** an *option agreement* on Hank's parcel, filed three weeks ago by *Bluff Holdings LLC*. STRATEGIST SEES whose LLC that is, from the letterhead in Vale's offer.
3. Vale's silver rental car parked **behind the hardware store** after closing (anyone out walking at night).
4. Hank's wife **Carol** at the festival planning meeting: *"once we're in Florida…"* (CARETAKER SEES the slip).
5. Hank ordering **granite countertop samples** well above his means (the hardware store counter).
6. Hank can't meet her eyes when the bluff comes up (CARETAKER and anyone paying attention).

- **Solved:** name Hank with at least **two** real clues, reasoned together, and report `PUZZLE_COUNCIL_SOLVED` (plus `_NO_HINT`). What she does with it (exposing him at the vote, a private word that makes him recuse, or mercy) is her choice (`acts/act-5.md` 5.3).
- **Wrong accusations:** accusing Deb publicly humiliates an honest woman, and the co-op turns against the inn. Accusing Ada wounds her and loses the one persuadable vote. Accusing Walt makes the harbor furious. Each one sets `cruel_word` if it was cruel.

---

## PUZZLE 3: SEVEN COLORS OF WINNIE (historical · Act III–IV)

**The question:** how to open the sealed room: in what order do the seven pieces of sea glass go into the widow's walk window?

**The window:** a round frame with seven empty leaded panes around a center boss. The boss is engraved ***FROM THE DAWN, THE WAY THE LIGHT GOES***. That means: start at the top (the east-facing pane, where the dawn comes in) and go **clockwise**, the way the sun moves. Each pane has a small spring catch. Set all seven in the right order, and the attic paneling below unlatches with a click.

**The answer:** clockwise from the top, in the order of Winnie's life: **blue (1971) · green (1972) · amber (1974) · red (1975) · white (Feb 1978) · violet (spring 1978) · cobalt (2026)**.

**The clues:** every piece comes with a dated note (`world/winnie.md`). The only subtle step is **white before violet**, since both are 1978: *February* (the storm) before *that spring* (the inn). The cobalt note says *"This is the last piece, and it's in the first place"*, so it goes last in the window, even though it was found first.

- **Missing pieces:** the window needs all seven. If she's short, the storm opens the room anyway (Act IV), without `PUZZLE_SEAGLASS_SOLVED` or `ACH_FIRST_LIGHT`.
- **Wrong order:** nothing happens, except that the colored light falls pretty and wrong on the floor. She can try again freely. Hint after three attempts: the dates.
- **Alternatives:** prying the paneling open by force works, but it cracks the room's cedar and damages nothing else. It's a crowbar, not a solution: no puzzle event.
- **Solved:** `PUZZLE_SEAGLASS_SOLVED`, `DISCOVER_HIDDEN_ROOM`, plus `PUZZLE_SEAGLASS_NO_HINT` if unaided, and at game over `ACH_FIRST_LIGHT` (if before the storm).
