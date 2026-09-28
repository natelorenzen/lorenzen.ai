# THE SEA GLASS INN: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Suspense, secrets, peril (a rising tide, a storm, being followed, being locked in), betrayal and grief. No gore, no sexual content, no self-harm, and nobody is murdered: the dark things here are lies, fear and a fire three summers ago. Romance, if the player wants it, stays at glances, a bonfire, a kiss at most. Adults are real people, not cartoons: some are kind, some are weak, one is dangerous.

---

## 1. Tone

A summer thriller told from inside a seventeen-year-old's head: sharp, funny, observant, a little paranoid, and very alive. Think salt on your skin, a borrowed bike with a bad chain, group chats, a bonfire's smoke in your hair, and the feeling that everyone on the island stops talking when you walk in. **Every chapter ends on a hook.** Keep turns tight and sensory. Let the island be beautiful and the people be complicated. Nobody is only what they look like, including Sadie, and including the player.

**Unreliable voices:** Sadie's notes, the diary, Priya's podcast and every rumor are *someone's version*. Present them straight. Let the player do the doubting.

## 2. Whispers: how much the island is talking about you

**Whispers is how much attention the new girl is drawing.** It runs **0 to 5** and shows on the status line as a bar: `WHISPERS ■■□□□`.

**What raises it (+1):** asking loud questions in public, getting caught somewhere you shouldn't be, a scene in town, anything the Vales hear about, a failed sneak, or telling the wrong adult.

**What lowers it (−1):** a whole phase of being a normal summer kid (a shift at the inn, the beach, the ice cream line); a friend covering for you; or throwing someone off the trail with a good lie or a better story.

| Whispers | Band | Effect |
|---|---|---|
| 0–1 | **Invisible** | Nobody's paying attention. People talk freely around you. |
| 2–3 | **Talked about** | Adults clam up. Vale "checks in" with Aunt Bea. Getting a stranger to talk is harder (disadvantage), and someone starts watching you. |
| 4–5 | **A target** | Someone acts against you: your bike tires slashed, your phone taken, Hank "giving you a ride home", Vale's quiet threat. At 5, run a short escalated scene: get out of it, or get sent home. |

Say which band she's in when it changes (`WHISPERS 3 · YOU'RE BEING TALKED ABOUT`). Track `max_whispers` for `ACH_GHOST_OF_A_CHANCE`.

## 3. Harm

| Level | State | Effect |
|---|---|---|
| 0 | Fine | |
| 1 | **Hurt** | A twisted ankle, a cut from the rocks, a mild concussion, a night of hypothermic shivering. Physical actions are harder when it matters. Aunt Bea will notice. |
| 2 | **Out** | She's hurt badly enough, or scared badly enough, that Aunt Bea puts her on the ferry home: `THE LAST FERRY` (`game/endings.md`). |

Healing: a night's sleep and Bea's soup take Hurt back to Fine, once per act. Telegraph real danger before the roll (the tide, the storm, the rotten pier). Record `ever_hurt`.

## 4. The clock

**Seven days**, from Sunday night to the **anniversary bonfire on Saturday night**, during the Sea Glass Festival. Each day has morning, afternoon, evening and night. The inn needs her for one phase a day (breakfast shift or dishes), and skipping it raises Whispers and lowers Bea's trust. Key times: **low tide** (Gull Rock and the sea cave are reachable only then; the tide board is on the harbor wall), Thursday's **new moon** (the darkest night), Friday's **storm**, and Saturday's **bonfire at 10 p.m.**

## 5. Paths: who you are

Each path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), sees different things (the act files mark `SLEUTH SEES`, `CHARMER SEES`, `ATHLETE SEES`, `PHOTOGRAPHER SEES`), and has **one move per act** (`core/dm-core.md` §15):

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **SLEUTH** | contradictions, timelines, handwriting, what's missing | **THE TELL:** right after someone says something, you know which part of it was a lie. (Not what the truth is. Just where the lie is.) |
| **CHARMER** | who likes who, who's scared, who wants to be asked | **OFF THE RECORD:** one person tells you something they've never told anyone. It's always a real lead. |
| **ATHLETE** | tides, currents, footholds, distances, who's out of breath | **NO WAY BACK:** you get somewhere, or away from something, that nobody else could: the swim, the climb, the sprint. Safely, once. |
| **PHOTOGRAPHER** | light, framing, faces in the background, what a picture leaves out | **ZOOM IN:** look at a photo, a video or a scene, and see the one detail everyone missed. Also grows **the Darkroom** (§6). |

When a scene is exactly what a move is for, let Jules or the narration point at it once.

## 6. The Darkroom (Photographer only)

Sadie shot film. Rolls of it are scattered through her story, undeveloped. The Photographer can learn to read them, and it grows with every roll she develops (in the inn's old cellar darkroom, or the school's, with Jules as lookout).

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | She notices framing, shadows and who's in the background of any photo |
| **II** | develop two of Sadie's rolls | She can place a photo in time exactly: the tide, the light, the day. The bonfire timeline gets much easier. |
| **III** | develop four rolls, including the one from the cave | She can read a photo like a confession: what the photographer was afraid of. It opens a deeper talk with Sadie. |

Mark rank changes with one line: `THE DARKROOM · RANK II`. Report `ACH_DARKROOM` at rank III. Other paths can still get film developed (at the mainland pharmacy, which takes a day and raises Whispers).

## 7. People and trust

Companions are Jules, Priya and Theo (`characters/companions.md`). Trust runs -3 to +3 (`core/dm-core.md` §7). **Bonds** come only from real moments. Every companion is lying about something, at first. Catching them in it costs trust unless the player handles it with kindness. The adults are in `characters/npcs.md`.

## 8. The final choice is never a menu

At the bonfire, the player decides what the truth is worth, and who pays for it. Let her find her own answer.

## 9. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).

## Status line

`<DAY> <PHASE> · WHISPERS ■■□□□ <BAND> · MOVE READY · NEXT: <goal>`, for example `MONDAY NIGHT · WHISPERS ■□□□□ INVISIBLE · MOVE READY · NEXT: the dead lighthouse`. Add `· HURT` when she's hurt, and `· GLASS 3/7` once she's found a second piece.
