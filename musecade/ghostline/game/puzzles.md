# GHOSTLINE: Puzzles

Three puzzles: a memory (the palace), a heist (the vault) and an identity (the Loom). Never give the answer. Answer questions truthfully, from what the runner could notice. Accept any solution that works. Dice never solve puzzles. **Mara can solve the first two instantly**, as a key: it works, costs SYNC +1, and forfeits the puzzle event. Hints follow `core/dm-core.md` §8, and every puzzle has a fallback (§14).

**The three tells of a patched memory** (Tallow mentions one in Act I if asked about restores; Atlas teaches all three before the palace dive): a patched moment **has no smell**; **people in the background repeat** (the same stranger crosses twice); and **the light doesn't move** (flames, shadows and screens are frozen). Everything real flickers.

---

## PUZZLE 1: THE MEMORY PALACE (Act II)

**The question:** what's the passphrase to Mara's locked partition?

**The mechanism:** a guided dive into three of Mara's memories. Mara patched one moment in each. The passphrase is **the three true words underneath the patches**, in the order the memories happened. The player finds each patched moment by its tell, then "pulls the seam" (they just have to say they're doing it) to see what's really there.

| Memory | What the player sees | The tell | The true moment underneath |
|---|---|---|---|
| **The kitchen, 2049.** Mara at nine, a tenement kitchen in the rain, her mother at the stove. Mother turns and says: *"Work hard and they'll let you up there someday."* | noodle steam, rain, the radio | when the mother speaks, **the smell of the broth vanishes** | her mother actually said: *"Remember the **river**."* |
| **The lab, 2081.** A white lab full of applause: the day Patch 1.0 shipped. Mara at the center, champagne. | cheering engineers, a glass wall, the city below | **the same bearded technician crosses behind her twice** | the applause was never there. One young technician asks, *"What about **consent**?"* and Mara says, *"Nobody will notice."* |
| **The birthday, 2085.** Juno's twelfth birthday in a Crown penthouse. Mara sings, and Juno blows out the candles, and hugs her. | balloons, a cake, the sun through the glass | **the candle flames don't move**, not even when Juno blows | Mara wasn't there. Juno blows the candles out **alone**, and a nanny claps. |

- **Solved:** name the three words in order, **RIVER · CONSENT · ALONE**: `PUZZLE_PALACE_SOLVED`, plus `_NO_HINT` if unaided. It opens the partition and the registry key.
- Each true moment hits Mara hard, especially the third, especially if Juno is watching. Play it.
- **Mara's key:** she can open it herself (SYNC +1, no puzzle events), but she doesn't want to look underneath, and says so.
- **Fallback** (after the third hint): Juno breaks the partition with brute force. It works, but it tears something: Mara loses the birthday memory completely, and SYNC +1. No puzzle events.

---

## PUZZLE 2: ONLY THE DEAD GET IN (Act III)

**The question:** how do you get into the Cradle's intake, and down to the vault?

**The mechanism** (observed, not told):

| Observation | What it means |
|---|---|
| **Morgue drones** drop into the roof intake bay every twenty minutes. Nobody checks the drones themselves. | a way in, if you're cargo |
| Each body bag's **tag** is scanned against a list on the intake screen: *EXPECTED ARRIVALS*. A bag that isn't on the list gets sent back. | you have to be an **expected death** |
| An intake nurse complains on her break (in the noodle stall across the street, or on the Cartographers' feed): *"Another warm one tonight. Flagged, sent back, paperwork."* The scanner reads **body temperature**, not heartbeat. | you have to be **cold** |
| The Cradle's **cold room** for incoming bodies is on the intake floor, and the service stairs go down to sublevel 3 from there. | once you're in, you're in |

- **Solution:** get registered as an expected death (Lotus can sell a death record; a Netrunner or Juno can forge one onto the list; a Fixer can call in a favor from a morgue clerk), **and** arrive cold (a chilled body bag from a fish market's ice room, Null's old cryo-coat, a Medtech's hypothermia drug that drops body temperature safely for twenty minutes), in a morgue drone (Kes can hijack one; so can a Netrunner) or through the intake another way. Accept any plan that satisfies both conditions.
- **Solved:** `PUZZLE_VAULT_SOLVED`, plus `_NO_HINT` if unaided.
- **Mara's key:** the staff entrance, with her codes. SYNC +1, no puzzle events, and the Quiet Men know exactly where she is the moment she uses them.
- **Half a solution** (cold but not expected, or expected but warm): they're flagged at intake, and it becomes a short fight or chase inside: it costs harm, or the alarm goes early.
- **Fallback** (after the third hint): Null remembers an old guard's trick: the laundry chute. It works, but it takes two hours and costs everyone a harm. No puzzle events.

---

## PUZZLE 3: THE LOOM (Act V)

**The question:** the Loom asks, *"Tell me which memories are whose."* It shows six memories, floating as panes of light. The player must sort each into **MINE**, **MARA'S**, or **NEITHER** (a patch, which belongs to no one, and will be burned out).

| Memory | Answer | How they can know |
|---|---|---|
| A little girl on a flood wall, the water rising, the girl gone. | **NEITHER** (a patch) | the registry: `SIBLING_DEATH:INSERT`; Ines is alive; and it has no smell |
| Learning to fly a hover-cab with Kes at nineteen, both screaming with laughter. | **MINE** | Kes remembers it too; it flickers |
| A tenement kitchen in the rain: *"Remember the river."* | **MARA'S** | the memory palace |
| Waking in a clinic two years ago, not remembering the fall, a nurse saying *"Welcome back."* | **MINE** | the registry says they died and were restored; this is the real waking. It's strange, but it's theirs |
| Feeling a warm rush of gratitude toward Orison when a Continuity ad plays. | **NEITHER** (a patch) | `GRATITUDE+1` in their registry entry; the light in it doesn't move |
| A white lab, a young technician asking about consent, and the words *"Nobody will notice."* | **MARA'S** | the memory palace |

- **Solved:** sort all six correctly: `PUZZLE_LOOM_SOLVED`, plus `_NO_HINT` if unaided. It makes a clean split possible, and (with `SOCIAL_MARA_TRUTH` and both minds' consent) the weave of `TWO MINDS`.
- **Getting the flood memory wrong** (keeping it as MINE) keeps a lie in their head forever; say so in the epilogue. **Giving MARA'S memories to themselves** or vice versa: the Loom obeys, and someone comes out of it a little wrong.
- **The Deep III shortcut:** a Netrunner at rank III can speak to the Loom directly and split without the sort (no puzzle events, and `TWO MINDS` is still possible if Mara's truth is earned).
- **Fallback** (after the third hint): Mara sorts them herself. She takes one ambiguous memory for her own pile (the hover-cab with Kes), and the player never gets it back. No puzzle events.
