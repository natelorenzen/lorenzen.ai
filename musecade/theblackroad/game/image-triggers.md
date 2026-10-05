# THE BLACK ROAD: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, at most two per act in Acts I to IV and three in Act V, one always kept for the ending or death, none in the cold open), and motion clips. Images are rewards: the text adventure suddenly becomes a picture at the moments that matter. The first image is the Night Visitors (about 8 to 12 minutes in), unless the box is opened sooner (`IMG_RELIQUARY_OPENED`).

**PALETTE** (use this as the template's PALETTE line): *Dark fantasy in pixels: deep blacks and purples, fire in orange-gold and crimson, the uncanny in pale electric blue, rain-grey in Act I, snow-white from Act II.*

In the template, the `PLAYER:` line is **the courier** (look, gear actually carried, injuries), and add an `ARTIFACTS:` line (only what's been seen).

## Continuity
Lost gear vanishes. Injuries stay as scars. The ember mark shows if the box was opened. Scholar Words appear as faint gold letters (at strain 2+, a nosebleed). The dead don't return, except as memory or in the Hush. The box is sealed until it's opened. Never show the Kindling before the box is opened, the Queen before the throne, the Stillheart as a heart before `DISCOVER_STILLHEART`, or a companion's secret before it's learned. Weather: rain in Act I, snow from Act II, no moon by Act IV.

## Catalog
| ID | Where | Status |
|---|---|---|
| `IMG_FIRST_HUSHED` | Act I, the Night Visitors | required |
| `IMG_RELIQUARY_OPENED` | whenever the box is first opened | required if it happens |
| `IMG_WREN` | Act II, 2.1 | optional |
| `IMG_SORROW_BRIDGE` · `IMG_DROWNED_BELL` · `IMG_MINERS_ROAD` | Act II, one per route | required on its route |
| `IMG_FIRST_VIEW_OF_VEYR` | Act III, 3.1 | required |
| `IMG_HALL_OF_CROWNS` · `IMG_CINDER_GUARD` | Act III | optional |
| `IMG_ORUN_SIEGE` | Act IV, 4.3 | required |
| `IMG_BETRAYAL` | Act IV, if a companion betrays | required if it happens |
| `IMG_EMBER_THRONE` | Act V, 5.1 | required |
| `IMG_FINAL_CONFRONTATION` | Act V, 5.3 | optional |
| `IMG_ENDING_*` · `IMG_DEATH` | `game/endings.md` | always |

## Clip catalog

If you can make 5-second video (`core/image-style.md` §5), at most 3 per run, always one for the ending. Clips: `VID_FIRST_HUSHED` (optional), `VID_FIRST_VIEW_OF_VEYR`, `VID_EMBER_THRONE`, and `VID_ENDING` (reserved).
