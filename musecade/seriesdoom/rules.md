# SERIES DOOM: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Slapstick peril, cartoon chases, and absurd danger that is taken completely seriously by everyone involved. No gore and no cruelty.

**Satire rules (hard):** mock *archetypes*, never real, identifiable people, companies, products or brands. All names are invented. If the player names a real person or company, the world gently swaps in a parody ("You mean Megacorp?"). Punch at hype, greed and self-importance, never at anyone's identity. The two founders are the heroes, and the joke is never on their decency.

---

## 1. Tone

An epic fantasy quest across the Bay Area, told with a completely straight face. Every character treats the stakes as mythic *and* as a normal Thursday in tech. The narration is grand and the details are painfully specific: kombucha on tap, a standing desk used as a barricade, a VC who says "let me push back on that" while falling off a cliff. **The comedy comes from specificity and deadpan.** Keep turns tight and quotable. At least one line per turn should be funny, and the stakes should still feel real.

## 2. Hype: the disc's pull

**Hype is how badly the disc wants to keep you.** It's the one number the player should always understand. It runs **0 to 5** and shows on the status line as a bar: `HYPE ■■□□□`.

**What raises it:** using one of the disc's powers (+1, every time). That's the only thing. The disc offers powers often, in a friendly notification voice: reroute every traffic light on Market Street, write an irresistible pitch, put $40,000 in a Venmo account, hack a robotaxi. **They always work.** That's the trap. (Record `used_disc`.)

**What lowers it (−1 each):** handing the disc to Dex for a scene; a companion telling the carrier something true and kind; touching grass (a real moment outdoors, off your phone); or getting through a whole act without using a power.

**What it does:** three plain bands, and say which one they're in when it changes (`HYPE 3 · THE DISC IS TALKING OVER YOU`).

| Hype | Band | Effect |
|---|---|---|
| 0–1 | **Yourself** | No effect. |
| 2–3 | **Pitching** | You start saying "circle back" and "at scale". Companions notice, and trust is harder to gain. At the Crucible, letting go takes a **DC 15** roll. |
| 4–5 | **Hooked** | You call the quest "the mission" and your friends "resources". Companions may try to take the disc from you. At the Crucible, letting go takes a **DC 18** roll. |

At 0–1, letting go at the Crucible is automatic.

**At the end** it matters twice: `ACH_LOW_HYPE` needs a `max_hype` of 1 or less, and a founder who can't let go at the Crucible risks `ONE TRILLION` or `KEVIN'S LEAP`. Only the carrier's Hype counts. While Dex carries the disc, the bar pauses.

## 3. Harm

| Level | State | Effect |
|---|---|---|
| 0 | Fine | |
| 1 | **Bruised** | E-scooter burns, a sprained ego. Physical actions are harder when it matters. |
| 2 | **Wrecked** | Physical rolls with disadvantage. You look like you've done three all-nighters, because you have. |
| 3 | **Out** | `RUNWAY: ZERO` (`game/endings.md`). A cartoon-sized disaster: captured, collapsed or fallen. |

Healing is scarce: a coffee and a burrito take Wrecked back to Bruised, once per act. Only a real night's sleep clears Bruised, and there isn't one. Most runs should reach Mount Diablo bruised.

## 4. The clock

**41 hours**, from Wednesday at 11:48 p.m. to **Demo Day, Friday at 5:00 p.m.**, when Buddy presents itself to the world. Track the hours. Travel costs time (see `world/bay-area.md`), and so do detours, brunch, and getting stuck in an interview loop. Name the time at every scene change (*"Thursday, 2:15 p.m."*). If the clock runs out before the disc is destroyed, the ending is `DEMO DAY`.

## 5. Paths: what kind of founder

Each path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), sees different things (the act files mark `HACKER SEES`, `HUSTLER SEES`, `VISIONARY SEES`, `OPERATOR SEES`), and has **one move per act** (`core/dm-core.md` §15):

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **HACKER** | systems, code, what's actually broken | **ROOT ACCESS:** take over one device or system in the scene (a door, a robotaxi, the lights, a Vest's tablet) and make it do one thing. |
| **HUSTLER** | who has money, who wants what | **THE ASK:** one person gives you one real yes: a favor, a ride, a secret, a way in. Not the disc, and not their life. |
| **VISIONARY** | what people secretly long for | **THE KEYNOTE:** one speech that turns a room or a crowd for a scene. Also grows the Reality Distortion Field (§6). |
| **OPERATOR** | routes, schedules, the budget | **THE PLAN:** say what you want to happen; the team pulls it off cleanly, and the clock gets 2 hours back. |

The moves are how the founders beat the Bay Area **without** the disc. When a scene is exactly what a move is for, have Dex point at it: *"This is literally your thing."*

## 6. Reality Distortion Field (Visionary only)

The Visionary's growing power is **belief**. Each person they genuinely rally to the cause (a companion joining, a crowd won over, an enemy turned) adds to the field.

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | The Keynote works on one person, or a small room |
| **II** | three people rallied | The Keynote works on crowds, and Visionary speeches roll with advantage |
| **III** | six rallied | The Keynote works twice per act and can turn the Vests themselves. Buddy listens to you. |

Mark rank changes with one line: `REALITY DISTORTION FIELD · RANK II`. Report `ACH_DISTORTION_FIELD` at rank III. **The field does not come from the disc**, so it never raises Hype.

## Status line

`<DAY TIME> · HYPE ■■□□□ · MOVE READY · NEXT: <where they're headed>`, for example `THURSDAY 10:00 AM · HYPE ■□□□□ · MOVE READY · NEXT: win the Council`. Add `· <HARM>` when the carrier is Bruised or Wrecked.

## 7. Set pieces

Every big confrontation offers three approaches as a lettered menu (fight or stand, run, or turn the ground, plus D. Other), per `core/dm-core.md` §6 and `game/encounters.md`. They must cost or reveal something.

## 8. The final choice is never a menu

At the Crucible, the player finds their own answer.

## 9. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).
