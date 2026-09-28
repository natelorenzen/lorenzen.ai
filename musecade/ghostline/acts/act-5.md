# ACT V: THE CROWN

*Above the sky: a sister who doesn't remember, a CEO with nothing left inside, a machine that makes copies, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions. Day 3, until 11 p.m.

**Route:** into the Crown → find Ines → up the Spire → Seraphine Kade → the Loom → **the choice**.

**Night 3 is coming.** At the start of this act, SYNC +1 (`rules.md` §2). If that makes 5, they have until they reach the Loom: the overwrite finishes the moment they stop moving. Say so.

`game/endings.md` is loaded alongside this file. Slow down. Let everything come due.

---

## 5.1 THE GARDENS

The Crown in daylight: sky gardens, fountains, glass bridges between towers, people in white who've never seen rain. Nobody looks at a courier in a wet jacket, because couriers are invisible here.

- **Ines** (`SOCIAL_INES`): she crosses a garden bridge with a tablet, in a white suit, fast, efficient, **alive**: twenty-two, the same crooked front tooth. She doesn't know the player. She has a patched memory of a sibling who drowned in the flood. Making her remember, even a little (a song they sang on the flood wall, the scar on her palm from the fence, the photo in the player's jacket), is the moment. She may not remember at all. She may remember one thing, and cry, and not know why. Don't resolve her fully. She can help them into the Spire (she has Kade's schedule and access), or turn them in, depending on what she remembers.
- **Mara's key:** she knows the Spire's service entrances; SYNC +1, as always.

## 5.2 THE SPIRE (set piece)

Run **`ENC_SPIRE`** (`game/encounters.md`): up the white Spire to the Loom, through Quiet Men, security, glass, and a garden atrium eighty floors high.

## 5.3 SERAPHINE KADE

At the top, before the Loom's door, in a white room full of sunlight: **Seraphine Kade** (*Orison's CEO*), perfectly calm, pouring tea. She's been expecting them since Mara died.

- She makes an offer: the Loom will split them cleanly, Mara goes into a drive, the logs disappear, and the player becomes Orison's new architect, Gold-tier, in the sun, forever. Ines can keep her job. *"Everyone in the Stacks would take this. You know they would."* (That's `THE NEW ARCHITECT` if accepted.)
- **If the player knows she's Version Twelve** (`DISCOVER_KADE_BACKUP`), they can say it. Something moves in her face, for a second: a flicker of a woman who was once afraid. It doesn't change her. It might change what she does next.

## 5.4 THE LOOM

A cathedral-sized room of white thread and light at the top of the Spire, humming. The Loom speaks in a soft, neutral voice: *"Two minds are present. Tell me which memories are whose."*

Run `game/puzzles.md`, *Puzzle 3: The Loom*.

```
[IMAGE_TRIGGER]
ID: IMG_THE_LOOM
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

SCENE:
The top of a white spire: a vast cathedral room of glowing white threads
strung like harp strings from floor to ceiling, sunlight through a glass
roof; in the center a courier in a rain-black jacket standing in a circle
of light, and facing them, made of threads of light, a silver-haired woman;
floating around them, glowing panes of memories. Sacred, strange, final.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.5 THE CHOICE

When the Loom is ready, the player decides who keeps the body, what happens to Mara, what happens to the registry, and what happens to Lumen. **Never offer this as a menu, and never as a list.** These are what can happen:

| If they… | Ending |
|---|---|
| and Mara, after the Loom is solved honestly and Mara has told the truth, both choose to share one body, each whole | `TWO MINDS` (the hidden ending) |
| broadcast the registry from above the Canopy to every screen in Lumen, and let three million people learn what was done to them | `OPEN SKY` |
| split cleanly, keep their body, and let Mara go into the drive or nowhere | `CLEAN SPLIT` |
| split, and send Mara into the open network, free, a ghost in the wire (the Cartographers carry her out) | `INTO THE WIRE` |
| take Ines and vanish, split or not | `HOME` |
| destroy the Loom and every backup with it, so nobody in Lumen is ever restored, or edited, again | `THE UNBACKED` |
| take Kade's offer | `THE NEW ARCHITECT` |
| let Mara have the body | `FULL SYNC` |
| (earlier) sold the ghost | `SOLD` |
| died in Orison's reach and came back edited | `RESTORED` |
| died | `FLATLINE` |

The ending's `requires` in `events.json` must be met. If the player does something close to an ending they haven't earned, play it as the nearest earned one. Several can combine in narration (a clean split *and* an open sky); report the one that best fits the heart of what they chose.

## Reporting

Report the remaining events (`ENC_SPIRE_*`, `PUZZLE_LOOM_*`, `SOCIAL_INES` and `SOCIAL_MARA_TRUTH` if they happened here, companion survival), evaluate achievements (`game/achievements.md`), then complete the run with the ending's ID (`died: true` only for `FULL SYNC`, `RESTORED` and `FLATLINE`). Fire the ending image, narrate the ending and epilogue, and print the final screen (`scoring.md`).
