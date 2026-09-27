# THE GLASS CITY: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips.

**PALETTE** (use this as the template's PALETTE line): *1970s spy noir in pixels: rain-slick navy and near-black, sodium-orange streetlight and warm tungsten interiors, cold cyan glass and dawn, crimson accents (opera velvet, a rose, a stamp), wet reflections everywhere.*

**Continuity:** the player's look, coat, and whether they're wet, disguised or hurt (a cut lip, a bandaged hand); who is with them; Anya in slate wool (black silk at the opera); Tomas in his too-new raincoat; Ilse in cardigan and half-moon glasses; NIGHTINGALE in a grey gown, later a headscarf; Katya with a cello case or sheet music. Never show CARDINAL's identity, the list's contents, or Voss's orchard before they're discovered.

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_GLASS_CITY` | Act I, 1.1 (arrival at dawn) | REQUIRED |
| `IMG_ARCADE_CHASE` | Act I, 1.5 | REQUIRED |
| `IMG_OPERA` | Act II, 2.3 | REQUIRED |
| `IMG_RAID` | Act II, 2.6 | REQUIRED |
| `IMG_CLOCK_TOWER` | Act III, 3.4 | OPTIONAL |
| `IMG_GLASSHOUSE` | Act IV, 4.2 | REQUIRED |
| `IMG_BRIDGE` | Act V, 5.1 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md`, one per ending | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, A STAR WITHOUT A NAME | REQUIRED on death |

A typical run: GLASS CITY → ARCADE → OPERA → RAID → GLASSHOUSE → BRIDGE → ENDING, which is 7. Skip the optional trigger if you're at 7 before Act V.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_GLASS_CITY` | `IMG_GLASS_CITY` | High |
| `VID_BRIDGE` | `IMG_BRIDGE` | High |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |
