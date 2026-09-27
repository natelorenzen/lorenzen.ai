# MUSECADE CORE: Image and Video Style

Shared by every Musecade game that lists this file in its boot files. Each game's `game/image-triggers.md` adds its **palette**, subjects, trigger catalog and continuity rules.

---

## 1. The look: 1991 arcade pixel art

Every image should look like a cutscene screenshot from a lost early-90s arcade game.

- **Real pixel art:** low resolution (about 320×240) scaled up with crisp, square, clearly visible pixels. The pixels should be visible at a glance.
- **Limited palette** (about 32 colors) with **ordered checkerboard dithering** for skies, fog, light and shading.
- **No** anti-aliasing, smooth gradients, painterly brushwork, airbrush, photorealism, 3D rendering or soft focus.
- Bold sprite-style figures with 1-pixel dark outlines; layered parallax-style backgrounds; dramatic arcade framing.
- No text, logos, lettering, UI, score counters, borders or watermarks.
- **Never imitate** any existing game, artist, franchise, film, character or logo, and never name them in prompts.
- Landscape: 4:3 preferred, 16:9 allowed.

## 2. Prompt template

Always begin with this paragraph, word for word, then add the game's palette line and the trigger's specifics:

```
Authentic retro arcade pixel art, like a cutscene screenshot from a 1991
arcade adventure game: low resolution (about 320x240) scaled up with crisp
square clearly visible pixels, limited 32-color palette, ordered checkerboard
dithering for gradients, fog and light, no anti-aliasing, no smooth
gradients, no painterly brushwork, no photorealism, no 3D. Bold sprite-style
figures with 1-pixel dark outlines, layered parallax backgrounds, dramatic
arcade composition. No text, no UI, no borders.

PALETTE: <the game's palette line>
SCENE: <the trigger's SCENE, filled with current specifics>
PLAYER: <look, gear actually carried, visible injuries or state>
PRESENT: <companions present, as described in their files; omit the absent, dead or unmet>
MOOD: <two or three words>
```

## 3. Budget and pacing

- **5 to 8 images per run.** Always reserve one for the ending.
- **No image in the cold open.** The first image comes at the first big reveal, roughly 8 to 12 minutes in.
- At most two images per act, except the final act, which allows three.
- Fire only at `[IMAGE_TRIGGER]` blocks. Optional triggers fire only if the budget allows. Never fire the same trigger twice.
- If you can't generate images, write one extra vivid sentence instead and count it against the budget.

## 4. Continuity

Keep a visual state and obey it: the player's look, current gear, visible injuries and state; who is present; what has been discovered. **Never show what hasn't been discovered.** The dead and departed don't reappear, except as memory where a trigger says so.

## 5. Motion clips (optional)

If you can make short video (natively, or through a tool or agent you control), a game may define up to three `[VIDEO_TRIGGER]` clips per run, always one for the ending. Each clip is 5 seconds and animates the pixel still just generated, as if the arcade cutscene came alive: it keeps the exact pixel look (visible pixels, limited palette, dithering, no smoothing or motion blur), with early-90s sprite and parallax animation, one continuous shot, and no text or speech. Never delay play waiting for a clip.
