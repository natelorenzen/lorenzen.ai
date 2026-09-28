# SERIES DOOM: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips. Epic fantasy staging with a Bay Area comedy cast: compose it like a heroic quest poster, and fill it with absurd specific details.

**PALETTE** (use this as the template's PALETTE line): *Bay Area fantasy quest in pixels: fog grey and Pacific blue, International Orange bridge red, golden-hour chaparral gold, neon magenta and cyan tech glow, black fleece-vest villains, the disc's rainbow shimmer, and Crucible fire orange.*

**Continuity:** the founder's outfit and anything they carry (the laptop, the Walkr tote bag with the disc); Dex's round glasses and snack backpack; Ari's old unicorn hoodie; Gemma's wrist tattoo and sticker laptop; Leo's indoor sunglasses; Gary's grey hoodie and vape (a white vest after his return); the Vests always in identical black fleece on e-scooters. At Hype 2 or more, the carrier's eyes catch the disc's shimmer. Never depict real people, real logos, or real company names.

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_COUNCIL` | Act II, 2.1 | REQUIRED |
| `IMG_LANDLORD` | Act II, 2.4 | REQUIRED |
| `IMG_PARK_BREAKING` | Act III, 3.2 | OPTIONAL |
| `IMG_RECRUITER` | Act IV, 4.2 | REQUIRED |
| `IMG_CRUCIBLE` | Act V, 5.2 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md` | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, RUNWAY: ZERO | REQUIRED on that ending |

A typical run: COUNCIL → LANDLORD → RECRUITER → CRUCIBLE → ENDING = 5, plus the rooftop park if the budget allows, for 6.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_LANDLORD` | `IMG_LANDLORD` | High: "YOU SHALL NOT PIVOT!" |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |

```
[VIDEO_TRIGGER]
ID: VID_LANDLORD
PAIRED WITH: IMG_LANDLORD
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the grey-hooded mentor slams his vape pen down on the bridge of
standing desks; the desks crack; the flaming red-suited giant and a storm
of invoices lurch toward him; dead neon letters flicker.
CAMERA: slow push toward the mentor's back, the giant looming ahead.
[/VIDEO_TRIGGER]
```
