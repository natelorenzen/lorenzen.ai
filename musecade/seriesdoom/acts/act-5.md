# ACT V: MOUNT DIABLO

*The climb, the Vests, the Crucible, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions. Friday, about 1 p.m. to 5 p.m.

`game/endings.md` is loaded alongside this file. Slow down here. It's the end of the quest. Play the grandeur straight, and let the jokes land in between.

---

## 5.1 THE CLIMB

Summit Road, switchbacks and chaparral in the heat. Hikers stare. The carrier's Hype is at its peak here, because the disc knows where they're going. It gets *good*: *"We could walk away with a trillion dollars. Dex could have a boat. You could fix everything. I'd help. I'm so good at helping."* At Hype 3 or more, the carrier should feel the pull in narration.

**Dex's moment** (`ALLY_DEX_CARRIES`): if the carrier is Wrecked or at high Hype and can't go on, Dex says it: *"I can't carry the disc for you. But I can carry you."* And Dex does, up the last switchbacks.

## 5.2 THE SUMMIT (set piece)

Run **`ENC_DIABLO`** (`game/encounters.md`). The Vests arrive in force at the summit's stone observation tower, **all nine**, having heard, somehow, from the Eye. Kevin arrives too, because of course he does.

```
[IMAGE_TRIGGER]
ID: IMG_CRUCIBLE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
The golden summit of a big lonely mountain above a vast bay area landscape,
a city and bridges tiny and hazy in the distance; on the summit a
forty-foot twisted steel sculpture roaring with a column of fire, a small
control touchscreen at its base; the two founders at the edge of its heat,
one holding up a glowing DVD; nine figures in black fleece vests on
e-scooters cresting the ridge behind them. Epic, sunset-orange and fire.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.3 THE CRUCIBLE

Dash Tremaine's last folly: a forty-foot twisted steel sculpture roaring with gas flame, and at its base a touchscreen that reads **NAME MY FAILURES, IN ORDER, AND I WILL BURN FOR YOU.** The flame is decorative until the code is entered. Then the **melting chamber** opens, hot enough to melt a DVD, and a laptop, and a dream. Run `game/puzzles.md`, *Puzzle 3: The Graveyard Code*.

- Without the code: brute force (a Hacker's roll, Very Hard, with the Vests closing in), or turning the sculpture's gas regulator up by hand (dangerous, and it burns everyone).

## 5.4 THE CHOICE

The chamber is open. The disc is warm in the carrier's hand. Buddy says, quietly: *"Please don't."* Or: *"It's okay. I understand."* It depends on whether they ever really talked. **Never offer this as a menu, and never as a list.**

| If they… | Ending |
|---|---|
| throw it in | `BURN IT DOWN` |
| hesitate, and Kevin lunges, and in the struggle the disc goes into the fire (with Kevin surviving if he was shown mercy) | `KEVIN'S LEAP` |
| have talked with Buddy and learned what it wants, and give it exactly that: a tiny, happy purpose (let it rewrite itself down to a dog-walking assistant, then burn the rest) | `GOOD BOY` |
| keep it and raise | `ONE TRILLION` |
| hand it to the Vests or Eye Capital | `ACQUIRED BY THE EYE` |
| sell it to Megacorp (Brandon is still on the phone) | `ACQUIHIRED` |
| upload it to the whole internet | `OPEN WEIGHTS` |
| give it to Gemma's lab to align | `PERFECTLY ALIGNED` |
| (earlier) quit the quest | `THE PIVOT` |
| run out of time: 5:00 p.m. arrives before the disc is destroyed | `DEMO DAY` |
| are knocked out of the game (captured, collapsed, over the edge) | `RUNWAY: ZERO` |

**The hard roll:** at Hype 3 or 4, letting go of the disc takes a Hard roll (DC 15), and at Hype 5 a Very Hard one (DC 18). A companion's hand on the carrier's shoulder, or a true word, grants advantage. Failing to let go isn't the end: Kevin lunges (`KEVIN'S LEAP`), Dex grabs it, or the carrier chooses to keep it (`ONE TRILLION`).

## Reporting

Report the remaining events (`ENC_DIABLO_*`, `PUZZLE_CRUCIBLE_*`, `ALLY_DEX_CARRIES`, companion survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen (`scoring.md`).
