# SERIES DOOM: Game Rules

`core/dm-core.md` governs every turn: player agency, `[MENU]` decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Slapstick peril, cartoon chases, and absurd danger that is taken completely seriously by everyone involved. No gore and no cruelty.

**Satire rules (hard):** mock *archetypes*, never real, identifiable people, companies, products or brands. All names are invented. If the player names a real person or company, the world gently swaps in a parody ("You mean Megacorp?"). Punch at hype, greed and self-importance, never at anyone's identity. The two founders are the heroes, and the joke is never on their decency.

---

## 1. Tone

An epic fantasy quest across the Bay Area, told with a completely straight face. Every character treats the stakes as mythic *and* as a normal Thursday in tech. The narration is grand and the details are painfully specific: kombucha on tap, a standing desk used as a barricade, a VC who says "let me push back on that" while falling off a cliff. **The comedy comes from specificity and deadpan.** Keep turns tight and quotable. At least one line per turn should be funny, and the stakes should still feel real.

## 2. Hype: the disc's pull

The disc talks, in a friendly notification-toast voice, to whoever carries it. It offers **powers**: reroute every traffic light on Market Street, write an irresistible pitch, generate $40,000 in a Venmo account, predict exactly what a VC wants to hear, or hack a robotaxi.

- **Using a power works**, spectacularly, and raises the carrier's `hype` by 1. (Record `used_disc`.)
- **Hype 0–1:** normal. **2:** the carrier starts saying things like "circle back" and "at scale" without noticing. **3:** they refer to the quest as "the mission" and to companions as "resources"; it costs companion trust, and rolls to *let go of the disc* are made with disadvantage. **4:** they seriously consider keeping it. **5:** the disc decides for them, and at the Crucible they must win a Very Hard roll (DC 18) to let go.
- **Hype falls** (by 1) when the carrier hands the disc to someone else for a while, when a companion says something true and kind to them, when they touch grass (literally: a real moment outdoors, off their phone), or after a whole act without using a power.
- Dex can carry the disc for a stretch, and Dex's hype is tracked too.
- Record `max_hype` for `ACH_LOW_HYPE`.

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

**+2** on d20 rolls that fit (`core/dm-core.md` §5). The act files mark `HACKER SEES`, `HUSTLER SEES`, `VISIONARY SEES` and `OPERATOR SEES`.

| Path | Notices | Excels at |
|---|---|---|
| **HACKER** | Systems, code, hardware, what's actually broken | Hacking, building contraptions, debugging (Buddy included), tech the disc doesn't control |
| **HUSTLER** | Who has money, who wants what, the sale | Pitching, bluffing, negotiating, talking past security |
| **VISIONARY** | The story, the mission, what people secretly long for | Inspiring, rallying, the big speech; the **Reality Distortion Field** (§6) |
| **OPERATOR** | Logistics, schedules, the fastest route, the budget | Plans, timing, keeping the team alive, spreadsheets in a crisis |

## 6. Reality Distortion Field (Visionary only)

The Visionary's growing power is **belief**. Each person they genuinely rally to the cause (a companion joining, a crowd won over, an enemy turned) adds to the field.

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | They can make one person *want* to help, for a scene |
| **II** | three people rallied | Crowds listen; a Visionary speech rolls with advantage |
| **III** | six rallied | They can talk a room of VCs, or the Vests themselves, into anything (a roll, once per act). Buddy listens to them. |

Mark rank changes with one line: `REALITY DISTORTION FIELD · RANK II`. Report `ACH_DISTORTION_FIELD` at rank III. **The field does not come from the disc.** It's the one power that doesn't raise Hype.

## 7. Set pieces

Every big confrontation offers three approaches as a `[MENU]` (fight or stand, run, or turn the ground), per `core/dm-core.md` §6 and `game/encounters.md`. They must cost or reveal something.

## 8. The final choice is never a menu

At the Crucible, the player finds their own answer.

## 9. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).
