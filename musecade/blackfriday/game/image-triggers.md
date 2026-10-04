# BLACK FRIDAY: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips. Stage the business world like an arcade boss-rush: convention halls as dungeons, dashboards as monsters, a podcast stage as an arena. Keep one absurd, specific detail in every frame (a sponge, a lanyard, a fog machine at a software booth).

**PALETTE** (use this as the template's PALETTE line): *Retail apocalypse in pixels: cash green and receipt white, ad-dashboard blue, warning red, Black Friday black and gold, conference-lanyard orange, Austin sunset pink, and a single sunny sponge yellow.*

**Continuity:** the player's look, and their **HAIR** state (full, thinning, receding, or a hat), always visible; the Wrung tote bag and a yellow sponge somewhere; Margo's glasses chain and cardigan; Kyle's quarter-zip and one AirPod; Dot's grey braids, headset and spiral notebook; Rex's plain grey hoodie and black coffee; the Professor's headset mic; Brayden's firm handshake and Halcyon's fog. **Never show readable text, real logos, real platforms' interfaces, or real people.** Charts are shapes and colors only.

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_EXPO_HALL` | Act II, 2.1 | REQUIRED |
| `IMG_LIVE_TAPING` | Act III, 3.3 | REQUIRED |
| `IMG_WEEKEND_SPIKE` | Act IV, 4.3 | REQUIRED |
| `IMG_BLACKOUT` | Act IV, Thanksgiving | REQUIRED |
| `IMG_BLACK_FRIDAY` | Act V, 5.2 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md` | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, OUT OF CASH | REQUIRED on that ending |

A typical run: EXPO → TAPING → SPIKE → BLACKOUT → BLACK FRIDAY → ENDING = 6.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_SPIKE` | `IMG_WEEKEND_SPIKE` | High: the chart rising like a monster |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |

```
[VIDEO_TRIGGER]
ID: VID_SPIKE
PAIRED WITH: IMG_WEEKEND_SPIKE
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the red line on the monitor surges upward and out of the screen
like a rising serpent, coins spilling across the desk; the business owner
in pajamas recoils; the coffee mug tips and spills; dawn light flickers
through the blinds.
CAMERA: slow push toward the glowing monitor over the owner's shoulder.
[/VIDEO_TRIGGER]
```
