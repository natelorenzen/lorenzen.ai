# THE BLACK ROAD: Images

Images are rewards. The game should feel like a text adventure that suddenly becomes a painting at the moments that matter.

---

## 1. Budget and pacing

- **5 to 8 images per run.** Never more than 8.
- The **first image** comes at the first creature reveal in Act I, roughly 5 to 10 minutes in. Before that, build tension with words only. The one exception: if the player opens the box earlier, `IMG_RELIQUARY_OPENED` fires anyway. They earned it by breaking the rule.
- At most **2 images per act** in Acts I to IV. Act V allows up to 3 (the throne, the confrontation, the ending).
- **Always reserve one image for the ending** (or death). If the count reaches 7 before Act V, skip every optional trigger until the end.
- Triggers are marked **REQUIRED** or **OPTIONAL**. Optional triggers fire only while the budget allows and the moment feels earned.
- Increment `IMAGES.count` and add the trigger ID to `IMAGES.used` when you generate. Never fire the same trigger twice.

## 2. How to fire a trigger

When the narration reaches an `[IMAGE_TRIGGER]` block in an act file:

1. Write the turn's narration up to the moment of the reveal (one or two sentences is ideal).
2. Generate the image using the **prompt template** in §4, filling it from the trigger's SCENE and the current **visual state**.
3. Continue the narration after the image and end with "What do you do?" as usual.

If you cannot generate images, write one extra line of vivid description instead, note `[IMAGE: <ID>]` in state, and count it against the budget anyway so that pacing stays the same.

## 3. The Musecade style

**DARK FANTASY × 1989 ARCADE CABINET ART.**

Hand-painted fantasy arcade cabinet side art. Dramatic airbrush illustration. Powerful silhouettes, deep blacks, fiery orange, electric blue, crimson, glowing magic, atmospheric fog, analog film grain, dramatic rim lighting, enormous landscapes, heroic low-angle composition.

- Painterly, never pixel art. The pixel and CRT look belongs to the Musecade website, not the game images.
- Palette discipline: the Kindling, the Crown and all fire are **orange-gold and crimson**. The Hush, the Hushed and the Stillheart are **pale electric blue**. Everything else sinks toward black.
- No text, logos, lettering, UI, borders or watermarks inside the image.
- **Never imitate** any existing game, artist, franchise, film, character or logo. Do not name artists in prompts.
- Landscape 4:3 or 16:9.

## 4. Prompt template

```
Original dark-fantasy illustration inspired by late-1980s fantasy arcade
cabinet artwork: hand-painted airbrush style, dramatic lighting, deep blacks,
fiery orange and crimson against pale electric blue, atmospheric fog,
analog grain, heroic composition. No text, no logos, no borders.

SCENE: <the trigger's SCENE, filled with current specifics>

THE COURIER: <look> · <path gear actually carried now> · <visible injuries>
PRESENT: <companions present, with their visual descriptions from companions.md,
          and their injuries; omit anyone dead, absent or unmet>
ARTIFACTS: <only artifacts the player has seen: e.g. "the black iron box,
            sealed" or "the open box, a coal of living fire inside">
MOOD: <two or three words>
```

## 5. Visual continuity

Keep `VISUAL` state current and obey it:

- **The courier:** the `look` from character creation, path gear actually carried (lost items vanish; a snapped bow is gone), wet or frosted clothing, every recorded injury (a cut stays a scar), and the ember mark on the hand if the box was opened.
- **Scholar magic:** a Word spoken with power shows as faint gold Veyric letters in the air or on the skin. At strain 2+, a bloody nose and trembling hands. At rank III, a faint gold glow in the Scholar's eyes while they speak.
- **Companions:** exactly as described in `characters/companions.md`, including acquired injuries. The dead never reappear except in a trigger that explicitly depicts memory or the Hush wearing their shape.
- **The reliquary:** sealed and bound in black iron until opened. Once opened, its lid is warped and its inside glows. If it has been surrendered or lost, the courier doesn't carry it.
- **Never reveal the undiscovered.** Do not show the Kindling before the box is opened, the Queen before the throne, the Stillheart as a *heart* before `DISCOVER_STILLHEART` (before that it is "a blue jewel in the Crown"), or a companion's secret (Wren's frost, Calen's orders) before the player learns it.
- Weather and time carry over: rain in Act I, snow from Act II upward, no moon by Act IV.

---

## 6. Trigger catalog

The full triggers live inside the act and ending files where they fire. This index lets you plan the budget.

| ID | Where | Type | Status |
|---|---|---|---|
| `IMG_FIRST_HUSHED` | Act I, 1.4 The Night Visitors | CREATURE_REVEAL | REQUIRED |
| `IMG_RELIQUARY_OPENED` | Any act, when the box is first opened | MAJOR_REVEAL | REQUIRED if it happens |
| `IMG_WREN` | Act II, 2.1 The Girl in the Snare | COMPANION | OPTIONAL |
| `IMG_SORROW_BRIDGE` | Act II, route: the High Pass | ENCOUNTER | REQUIRED on this route |
| `IMG_DROWNED_BELL` | Act II, route: the Blackwater | ENCOUNTER | REQUIRED on this route |
| `IMG_MINERS_ROAD` | Act II, route: the Miners' Road | DISCOVERY | REQUIRED on this route |
| `IMG_FIRST_VIEW_OF_VEYR` | Act III, 3.1 | LANDSCAPE | REQUIRED |
| `IMG_HALL_OF_CROWNS` | Act III, 3.3 | MAJOR_DISCOVERY | OPTIONAL |
| `IMG_CINDER_GUARD` | Act III, 3.4 | ENCOUNTER | OPTIONAL |
| `IMG_ORUN_SIEGE` | Act IV, 4.3 | BATTLE | REQUIRED |
| `IMG_BETRAYAL` | Act IV, when a companion betrays | BETRAYAL | REQUIRED if it happens |
| `IMG_EMBER_THRONE` | Act V, 5.1 | MAJOR_REVEAL | REQUIRED |
| `IMG_FINAL_CONFRONTATION` | Act V, 5.3 | CLIMAX | OPTIONAL |
| `IMG_ENDING_*` | `game/endings.md`, one per ending | ENDING | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, A NAME IN THE SNOW | DEATH | REQUIRED on death |

A typical run: `IMG_FIRST_HUSHED` → route image → `IMG_FIRST_VIEW_OF_VEYR` → `IMG_ORUN_SIEGE` → `IMG_EMBER_THRONE` → `IMG_ENDING_*` = 6. Opening the box, a betrayal, or an optional trigger raises it to 7 or 8.

---

## 7. Motion clips (optional video)

Some agents can generate short video, either natively or by handing the job to a video-capable tool or agent they control. **If you can, the game gets a few motion clips: 5-second animated moments, like an arcade machine's attract loop coming alive.** If you can't, ignore this section entirely. Nothing else changes.

**Rules:**

- **At most 3 clips per run.** Always reserve one for the ending. A typical run gets two or three.
- **Clips animate the still.** Fire a `[VIDEO_TRIGGER]` only right after its paired image. Use that image as the first frame (image-to-video) whenever the tool allows it, so continuity is exact. Otherwise reuse the image prompt word for word, plus the MOTION line.
- **5 seconds, one camera move, no cuts, no text, no speech.** Ambient motion only: fire breathing, snow falling, a slow push-in, a head turning. Subtle beats spectacular.
- **The same visual rules as images:** the Musecade style, visual continuity, and never revealing undiscovered information.
- If a clip takes a long time, let the story continue and present the clip when it's ready, with a single line: `▶ <the moment's name>`.
- Record clips in `IMAGES.used` as `VID_*`. They do not count against the 5 to 8 image budget.

**Prompt template:**

```
5-second cinematic clip, animating the still image just generated.
Hand-painted 1980s fantasy arcade cabinet art brought to life:
painterly, airbrushed, analog grain. One continuous shot. No text,
no dialogue, no cuts.

MOTION: <the trigger's MOTION line>
CAMERA: <the trigger's CAMERA line>
```

**Clip catalog:**

| ID | Paired with | Priority |
|---|---|---|
| `VID_FIRST_HUSHED` | `IMG_FIRST_HUSHED` (Act I) | Optional. It's the game's first "the machine comes alive" moment. |
| `VID_FIRST_VIEW_OF_VEYR` | `IMG_FIRST_VIEW_OF_VEYR` (Act III) | High |
| `VID_EMBER_THRONE` | `IMG_EMBER_THRONE` (Act V) | High |
| `VID_ENDING` | The ending's image (`game/endings.md`) | Reserved. Always, if clips are possible. |

A run that gets clips usually gets `VID_FIRST_VIEW_OF_VEYR` or `VID_FIRST_HUSHED`, then `VID_EMBER_THRONE`, then `VID_ENDING`.
