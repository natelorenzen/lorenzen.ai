# THE SEA GLASS INN: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips.

**PALETTE** (use this as the template's PALETTE line): *a northern island summer at night in pixels: deep navy sea and black rocks, bonfire orange and ember red, candlelight gold, moonlight and cold lighthouse white, a darkroom's red glow, and the jewel colors of sea glass (white, bottle green, amber, red, violet, cobalt, blue) glowing like little lights.*

**Continuity:** the player's look (she's seventeen: say how she's dressed, and let her get more salt-worn as the week goes on; a film camera if she's the Photographer); Jules's copper curls and bakery cap; Priya's blazer and microphone; Theo's sunburn, split lip and grease-stained T-shirt; Sadie (once found) with short dark dyed hair and a big fisherman's sweater; Vale's silver hair and linen; the sea glass pieces she has found, glowing. **Never show Sadie's face before `DISCOVER_SADIE_ALIVE`** (a figure with a flashlight is fine).

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_LIGHTHOUSE` | Act I, 1.4 | REQUIRED |
| `IMG_THE_CHAPEL` | Act III, 3.2 | REQUIRED if the cave is reached |
| `IMG_SEVEN_COLORS` | Act IV, 4.3 | REQUIRED if the lamp room is solved |
| `IMG_BONFIRE` | Act V, 5.2 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md`, one per ending | REQUIRED |

A typical run: LIGHTHOUSE → CHAPEL → SEVEN COLORS → BONFIRE → ENDING, which is 5. There's room for two optional beats if something unforgettable happens: the first sight of Sadie in the cottage doorway, the pier in the storm, a kiss at the bonfire. Describe them with the palette and count them.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_LIGHTHOUSE` | `IMG_LIGHTHOUSE` | High |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |
