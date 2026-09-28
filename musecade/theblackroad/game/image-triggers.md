# THE BLACK ROAD: Images

Images are rewards: the text adventure suddenly becomes a picture at the moments that matter.

## Budget
- **5 to 8 per run**, only at `[IMAGE_TRIGGER]` blocks. At most 2 per act in Acts I–IV, and 3 in Act V. Always keep one for the ending or death. Optional triggers fire only if the budget allows. Never fire the same one twice.
- No image in the cold open. The first image is the Night Visitors (about 8 to 12 minutes in), unless the box is opened sooner (`IMG_RELIQUARY_OPENED`).
- To fire one: narrate up to the reveal, generate the image, then continue. Without image generation, write one vivid extra sentence instead, and count it.

## Style: dark fantasy × 1991 arcade pixel art
Begin every prompt with this paragraph, word for word:

```
Authentic retro arcade pixel art, like a cutscene screenshot from a 1991
fantasy arcade adventure game: low resolution (about 320x240) scaled up with
crisp square clearly visible pixels, limited 32-color palette, ordered
checkerboard dithering for gradients, fog and glow, no anti-aliasing, no
smooth gradients, no painterly brushwork, no photorealism, no 3D. Bold
sprite-style silhouettes with 1-pixel dark outlines, layered parallax
backgrounds, dramatic arcade composition. Deep blacks and purples; fire in
orange-gold and crimson; the uncanny in pale electric blue. No text, no UI,
no borders.
```

Then add: `SCENE:` (from the trigger, with current specifics), `THE COURIER:` (look, gear actually carried, injuries), `PRESENT:` (companions present, as described in their files, with their injuries), `ARTIFACTS:` (only what's been seen), and `MOOD:`. Never imitate or name an existing game, artist or franchise. Use 4:3.

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

## Motion clips (optional)
If you can make 5-second video, you get **at most 3 per run** (always one for the ending), each fired right after its paired image. Animate that exact still: keep the pixel look, one camera move, no cuts, no text. Never hold up play waiting for one. Clips: `VID_FIRST_HUSHED` (optional), `VID_FIRST_VIEW_OF_VEYR`, `VID_EMBER_THRONE`, and `VID_ENDING` (reserved). Clip prompt: *"5-second clip animating the pixel-art still just generated: keep the exact pixel look (visible pixels, limited palette, dithering, no smoothing), early-90s sprite and parallax animation, one continuous shot, no text"* plus the trigger's MOTION and CAMERA lines.
