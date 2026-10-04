# DON'T SPLIT UP: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips. Stage it like a late-80s slasher VHS cover: big dramatic silhouettes, one light source, fog, and a monster standing somewhere he shouldn't be. Keep one absurd, specific detail in every frame.

**PALETTE** (use this as the template's PALETTE line): *Halloween night in pixels: pumpkin and candle orange, deep midnight violet and black, cold moonlight blue-white, sickly green fog, autumn leaf red and gold, a single red camcorder light, and VHS-cover purple.*

**Continuity:** the player's costume and whatever they carry; Dale's denim patch jacket and rubber werewolf mask (pushed up, or pulled down when he's brave); Wendell's huge glasses, cardigan and spiral notebook; Courtney's permed hair, homecoming sash, leather jacket and shoulder camcorder with its red REC light; Darlene's army jacket and flare gun; Jack Hollow always seven feet tall, a rotted farm coat, straw at the cuffs, a carved jack-o'-lantern head with a real flame inside, a railroad lantern, an old sickle held low. **No blood, no gore, no injuries beyond a limp.** The taken are shown asleep and peaceful. Never depict real people, real films' characters, or real logos.

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_CABIN_MIDNIGHT` | Act II, 2.4 | REQUIRED |
| `IMG_CANOE_DOCK` | Act III, 3.3 | REQUIRED |
| `IMG_HOLLOW_FEST` | Act IV, 4.1 | OPTIONAL |
| `IMG_CORN_MAZE` | Act IV, 4.4 | REQUIRED |
| `IMG_THE_PATCH` | Act V, 5.2 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md` | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, I'LL BE RIGHT BACK | REQUIRED on that ending |

A typical run: CABIN → CANOE DOCK → MAZE → PATCH → ENDING = 5, plus the Hollow Fest if the budget allows, for 6.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_CABIN` | `IMG_CABIN_MIDNIGHT` | High: the pumpkin head passing the window |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |

```
[VIDEO_TRIGGER]
ID: VID_CABIN
PAIRED WITH: IMG_CABIN_MIDNIGHT
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the tall scarecrow with the glowing pumpkin head walks slowly past
the lit cabin window from left to right, its candle-light sliding across
the terrified teenagers' faces inside; the porch pumpkins flicker; fog
rolls across the lake behind.
CAMERA: locked off, looking at the window from outside, slow creep in.
[/VIDEO_TRIGGER]
```
