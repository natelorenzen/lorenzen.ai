# THE COUNT OF MONTE CRISTO: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Imprisonment, betrayal, swordplay, a duel, a poisoner. **No gore.** The novel contains suicides and the death of a child; **this game never depicts suicide or harm to a child.** Ruined enemies flee, fall, or are taken; Villefort's little son is always safe. Romance stays at glances and, at most, a kiss. Haydée is a free adult who has been told so; any feeling between her and Edmond is her choice and goes at her pace.

**Adaptation rules (hard):** follow Dumas's novel, never a film or TV version. Write original prose. Keep the names, places and history of the book; change outcomes only through the player's choices.

---

## 1. Tone

A swashbuckling romance and an operatic revenge, told with total conviction. Marseille is salt and sunlight; the Château d'If is stone and silence; Paris is candlelight, gossip and money. Let the prose be grand and the details sharp: the smell of the harbor, the scratch of a tunnel spoon, the weight of a diamond, a glance across a ballroom. **Dumas is fun.** There's wit everywhere (Faria's dry humor, the Count's theatrical entrances, the absurdity of Paris society), and the story should never stop moving. Every major scene should land one unforgettable image.

## 2. VENGEANCE: what the Count is doing to Edmond

**VENGEANCE is how much of Edmond Dantès has been replaced by the Count.** It's the one number the player should always understand. It runs **0 to 5**, starts at **0** (Edmond has never hated anyone), and shows on the status line as a bar: `VENGEANCE ■■□□□`.

**What raises it (+1 each):**
- **Swearing revenge** out loud (the first time, in the dark of the Château d'If, it's almost unavoidable).
- **Striking at an enemy in a way that harms someone innocent** (record them in `innocents harmed`: Albert, Valentine, Eugénie, Maximilien, Villefort's son, the servants, anyone who did nothing).
- **Choosing cruelty when justice was available** (humiliation for its own sake, refusing a confession, letting someone suffer who's already beaten).
- **Calling yourself Providence**, the hand of God, and meaning it.

**What lowers it (-1 each):**
- **Mercy** to an enemy who asks for it.
- **Protecting an innocent** at a cost to the plan.
- **Telling the truth as Edmond** to someone who loved him (Mercédès, Morrel, Haydée).
- **Remembering Faria's counsel** at the moment it matters (*"Is this justice, or is it you?"*).

**What it does:** three plain bands. Say which one the player is in when it changes (`VENGEANCE 3 · THE COUNT IS SPEAKING`).

| VENGEANCE | Band | Effect |
|---|---|---|
| 0–1 | **Edmond** | You can still be reached. Mercédès can still see you. |
| 2–3 | **The Count** | Your plans get sharper and colder. Innocent bystanders are caught in them unless you deliberately protect them. Mercy takes a **Hard (DC 15)** roll when it matters. |
| 4–5 | **Providence** | You believe you are God's instrument. Every plan hurts someone innocent. Companions lose trust. At the end, stopping takes a **Very Hard (DC 18)** roll, and failing is `PROVIDENCE`. |

**At the end:** `ACH_STILL_EDMOND` needs VENGEANCE at 1 or less when the game ends; `ACH_MERCY` needs `innocents harmed` empty.

## 3. Harm

| Level | State | Effect |
|---|---|---|
| 0 | Well | |
| 1 | **Hurt** | Physical actions are harder when it matters. |
| 2 | **Grievous** | Physical rolls at disadvantage. In Act II, this is starvation and despair; later, a sword wound or a fall. |
| 3 | **Dead** | `THE CEMETERY OF THE CHÂTEAU D'IF` (`game/endings.md`). |

Healing is scarce: Faria's care (Act II), the smugglers' island rest (Act III), or a physician in Paris heal one level, once per act.

## 4. Time

Name the date at every scene change. **Acts I to III** cover years (1815 to 1838), in scenes; skip the years between them in a sentence or two of montage. **In Paris (Acts IV and V)**, time is **the season: 20 evenings.** The Count has let it be known he leaves Paris when the season ends. Whatever isn't done by the 20th evening isn't done, and **on the 15th evening the poisoner reaches Valentine**, unless she's been protected (`acts/act-4.md`).

## 5. Paths: who Faria makes you

In the novel, Dantès becomes all of these men. The player chooses **which one is truly theirs** at the start: their **primary path**. The primary path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), notices different things (the act files mark `COUNT SEES`, `ABBE SEES`, `SAILOR SEES`, `SCHOLAR SEES`), and its move is known from Act I. In Acts I and II, before the treasure and the names, each move works in a younger, simpler form.

**The other three moves are learned, one per act**, as Faria's teaching pays off. At each moment below, offer the player the moves they don't have yet as a lettered menu (two or three real options, no "Other"), and they choose which one Edmond has truly learned:

| When | What happens | Moves known |
|---|---|---|
| Act I | the primary path's move | 1 |
| **Act II**, Faria's last lesson (`acts/act-2.md` 2.5) | *"I've taught you four ways to be a man. One more is yours now."* | 2 |
| **Act III**, making the Count (`acts/act-3.md` 3.4) | nine years in the world turn a lesson into a skill | 3 |
| **Act IV**, the first evening in Paris (`acts/act-4.md` 4.1) | the last mask fits | 4 |

**Each known move works once per act**, separately: by Act IV, Edmond can use all four in the same act. Learned moves get no +2 and no perception lines: those stay with the primary path, and Faria's Learning (§6) belongs only to a primary Scholar. Show the moves on the status line as `MOVES <ready> OF <known>`, and when the player types `MOVE`, ask which one if more than one is ready (as a lettered menu of the ready moves). Record each learned move in `moves known`.

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **THE COUNT** | what people want, and what it costs | **MONEY IS A KEY:** one door opens because you can buy it: a house, a box at the Opera, a debt, a ship, a man's silence. Never a heart. (Before the treasure: the promise of it, said so well that it works.) |
| **THE ABBÉ** (Busoni) | guilt, and who is carrying it | **CONFESSION:** one person tells you the truth they've never told anyone. |
| **THE SAILOR** (Sinbad) | the sea, the weather, smugglers' ways, a way out | **SINBAD:** one feat of seamanship or daring works perfectly: a ship appears when needed, a crossing is made, a rope holds, a leap lands. |
| **THE SCHOLAR** (Faria's pupil) | connections: who benefits, what follows from what | **FARIA'S METHOD:** state what you know, and see one hidden connection between two people or events (a real lead, never a whole secret). Also grows **Faria's Learning** (§6). |

When a scene is exactly what a move is for, have a companion (or, in prison, Faria) point at it: *"This is your gift. Use it."*

## 6. Faria's Learning (Scholar only)

Faria teaches Edmond for years. The Scholar keeps learning: each time they solve something by reasoning (a puzzle, a deduction, a trap seen through), it counts.

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | The move works as written |
| **II** | three deductions | Speaks every language in the story; reads any document's lie. Rolls to see through deception have advantage. |
| **III** | six deductions | The move works twice per act. Once per act, the player may ask *"What would Faria say?"* and get one true sentence of counsel. |

Mark rank changes with one line: `FARIA'S LEARNING · RANK II`. Report `ACH_ABBES_EQUAL` at rank III.

## Status line

`<PLACE · DATE or EVENING> · VENGEANCE ■■□□□ · MOVES <ready> OF <known> · NEXT: <where they're headed>`, for example `PARIS · EVENING 6 OF 20 · VENGEANCE ■■□□□ · MOVES 3 OF 4 · NEXT: dinner at Auteuil`. Add `· <HARM>` when hurt.

## 7. Identity

Track who has recognized Edmond (`recognized by`). Mercédès always does, at first sight, and says nothing (Act IV). An **enemy** who learns the truth before the player chooses to reveal it strikes first: if that happens to two enemies, the ending is `UNMASKED`. `ACH_NEVER_UNMASKED` needs no enemy to learn it unbidden.

## 8. Set pieces

Every big confrontation offers three approaches as a lettered menu (press, withdraw, or turn the ground, plus D. Other), per `core/dm-core.md` §6 and `game/encounters.md`. They must cost or reveal something.

## 9. The final choice is never a menu

At the end, the player finds their own answer.

## 10. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).
