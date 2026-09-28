# THE SEA GLASS INN: Game Rules

`core/dm-core.md` governs every turn: player agency, `[MENU]` decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG.** No violence and no death. Romance is slow and respectful: glances, a shared boat ride, one kiss at most, if the player chooses it. Grief, divorce, job loss and a daughter's struggles are handled with honesty and warmth, never mockery, and never as a lecture.

---

## 1. Tone

This is a story for grown women who have lived a little: funny, warm, clear-eyed and hopeful. Think salt air, cardigans, cinnamon from the bakery, gossip at the hardware store, a woman rediscovering what she's capable of. **Humor matters as much as tears.** Bea is hilarious. Marguerite is a menace. Vale is too smooth by half. Keep turns sensory and specific: the brass bell over the inn door, a tide chart taped to the fridge, the exact green of old bottle glass.

She is the heroine. The story is about **what she chooses to do with the second half of her life**. There's no right answer, and every ending should feel earned and dignified.

## 2. Composure (instead of wounds)

`composure` tracks how much the week is costing her. It runs from 0 to 2:

| Level | State | Effect |
|---|---|---|
| 0 | **Steady** | |
| 1 | **Frayed** | She's running on coffee and nerves. Hard conversations become harder when it matters. |
| 2 | **Worn thin** | Social and delicate rolls are made with **disadvantage**. It's a hard night. Offer a quiet scene where a companion can show up for her, if trust allows. |

- **It rises** with a painful confrontation, a public humiliation, a failed roll at a big emotional moment, a sleepless night of work, or bad news landing hard.
- **It falls** with rest (a full phase), a real laugh with someone, a friend showing up, a swim in cold water (the Adventurer's favorite), painting, or cooking with Bea.
- There is no death and no "game over" from composure. Worn thin is a chapter, not a failure. Track `ever_worn_thin` for `ACH_STEADY_HANDS`.

## 3. The week

- **Six days** (Monday to Saturday), each with morning, afternoon and evening. The **council vote** is Saturday evening at the Grange Hall, during the Sea Glass Festival. **Vale's offer expires at the vote.** Winnie's will asks her to stay "seven nights before you decide". The last ferry off is Sunday.
- Key scenes are anchored: Monday arrival, Wednesday's ferry (Maya), Thursday's low tide at 4:10 p.m., Friday night's nor'easter, and Saturday's festival.
- A detour, a real rest or a long project costs **one phase**. Say so when it happens.

## 4. Paths: who she's been

A path is a way of seeing and a set of strengths. **+2** on d20 rolls that fit it (`core/dm-core.md` §5). Act files mark path details as `CARETAKER SEES`, `STRATEGIST SEES`, `ARTIST SEES` and `ADVENTURER SEES`.

| Path | Notices | Excels at |
|---|---|---|
| **CARETAKER** | What people need but won't say, who's hurting, who's lonely, what a room needs | Calming, hosting, cooking, drawing people out, community |
| **STRATEGIST** | Numbers, contracts, motives, leverage, what doesn't add up | Negotiation, reading documents, business plans, the council |
| **ARTIST** | Color, light, detail, what's hidden in pictures, how things were made | Restoration, sketching, seeing Winnie's hand; **Winnie's Eye** (§5) |
| **ADVENTURER** | Weather, tides, boats, the island's wild places | Sailing, climbing, swimming, the sea-cave, the fog rescue |

## 5. Winnie's Eye (Artist only)

The Artist can learn to see the way Winnie saw. It grows with every sketchbook and painting of Winnie's that she studies (the lobby seascape, the lighthouse sketchbook, the cave studio, the hidden room).

| Rank | How it's reached | What it gives |
|---|---|---|
| **I** | at the start | She notices brushwork, pigment, and what an artist was looking at |
| **II** | study two of Winnie's works or sketchbooks | She can read hidden things in Winnie's paintings. The lobby seascape's rocks, for example, are a map of the cave. |
| **III** | study four, including the cave studio | She can **paint**. A painting she makes this week can move a room, and it opens `THE PAINTER` as a true calling |

Mark rank changes with one line: `WINNIE'S EYE · RANK II`. Report `ACH_WINNIES_EYE` at game over if rank III is reached.

## 6. Companions and people

The companions (`characters/companions.md`) have lives of their own. Trust follows `core/dm-core.md` §7. **Bonds** (`BOND_*`) come from real moments: honesty, showing up, listening. They're never automatic.

## 7. Menus and the final choice

Use `[MENU]` blocks at real decision points (`core/dm-core.md` §3). **The final choice at the festival is never a menu**: what she does with the inn, the painting and her life is hers to find.

## 8. Images

Follow `core/image-style.md` with this game's palette and triggers (`game/image-triggers.md`).
