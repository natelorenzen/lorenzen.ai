# GHOSTLINE · PACK-5 · BUILD 1.0-1f0c5f8

Bundle for: Act V begins (`REACH_CROWN`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: THE CROWN

*Above the sky: a sister who doesn't remember, a CEO with nothing left inside, a machine that makes copies, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions. Day 3, until 11 p.m.

**Route:** into the Crown → find Ines → up the Spire → Seraphine Kade → the Loom → **the choice**.

**Night 3 is coming.** At the start of this act, SYNC +1 (`rules.md` §2). If that makes 5, they have until they reach the Loom: the overwrite finishes the moment they stop moving. Say so.

`game/endings.md` is loaded alongside this file. Slow down. Let everything come due.

---

## 5.1 THE GARDENS

The Crown in daylight: sky gardens, fountains, glass bridges between towers, people in white who've never seen rain. Nobody looks twice at someone in a wet jacket carrying a tray: up here, staff are invisible, and a good thief knows how to look like staff.

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
roof; in the center a thief in a rain-black jacket standing in a circle
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

===== FILE: game/endings.md =====

# GHOSTLINE: Endings

Eleven endings. Treat each one with weight. Several are hopeful, some are bittersweet, and three are the end of the runner.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, told as a news crawl, a Cartographers' leak, or a street rumor a year later; (4) complete the run with the ending's **ID** (`died: true` only for `FULL SYNC`, `RESTORED` and `FLATLINE`); (5) the final screen (`scoring.md`).

**Epilogue fragments** (use the ones that apply):

- **Kes:** stayed: *"Kes's cousin got out in the spring. The three of them opened a cab company. It's called* Lucky Two." Sold them out and left: *"Kes sends a message once a year. It says sorry. You never answer. You always read it."*
- **Null:** alive: *"The Church of the Unbacked got its lights turned back on. Null still preaches. He talks about you, and about a woman he wronged."* Dead: *"The candles on platform 4 were lit for a month. Then someone lit one more, every night."*
- **Juno:** let go: *"Juno runs the Cartographers now. She has her mother's eyes, and none of her mother's silence."*
- **Ines:** remembered: *"Ines quit on a Tuesday. She came down to the Stacks with one bag and asked for you by name."* Didn't: *"Ines still works in the Crown. Sometimes, on the garden bridge, she stops, and doesn't know why."*
- **Madame Lotus:** *"Lotus sold the story of your run to three different buyers. It was the only honest thing she ever sold."*
- **Kade:** *"Seraphine Kade was restored a thirteenth time. Nobody knows what she edited."* (only if she was brought down)

---

## TWO MINDS

**ID:** `ENDING_TWO_MINDS` · **fate:** lives · **the hidden ending**

**The moment:** The Loom asks one last question: *"Both minds consent to share?"* Mara says yes, and so do they. The threads of light weave, and the voice in their head isn't a voice anymore: it's a second window in the same room. Two people, one body, neither erased. Mara chooses the first thing they do together: they hand Juno the registry.

**Epilogue:** A year later there's a person in the Stacks who teaches at the Cartographers' school in the mornings and drives a cab at night, and who sometimes argues with themselves out loud and laughs. The edit logs came out. Continuity was broken up by the courts. Say what the two of them agreed on, and the one thing they still fight about.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_TWO_MINDS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A rooftop in a neon city at dawn, above the rain: a thief in a rain-black
jacket sitting on the edge looking out, and their reflection in a puddle
beside them is a silver-haired woman smiling back; a sixteen-year-old with
a white buzz cut sitting close beside them; the grey blimps overhead
breaking apart to let a shaft of sunlight through. Strange, warm, hopeful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## OPEN SKY

**ID:** `ENDING_OPEN_SKY` · **fate:** lives

**The moment:** From the top of the Spire, above Orison's jammers, the Cartographers push the registry to every screen in Lumen. Every holo-ad on every blimp goes white, then shows a name, and a patch list, and another, and another. Three million people in the Stacks look up at the sky and read what was done to them.

**Epilogue:** The riots lasted a week. The blimps came down one by one over the next year, and sunlight reached the Stacks for the first time in forty years. Say what happened to Orison, to the player, and to Mara (split, kept, or gone), and what the first morning of real sun looked like on Kowtow Row.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_OPEN_SKY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A vast neon undercity looking up: every giant holo-ad on the blimps
overhead showing scrolling white lists of names; crowds in the flooded
streets staring up, lanterns and phones glowing; one blimp torn open, and
through the gap a column of real golden sunlight falling on the crowd.
Revolutionary, awe-struck.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## CLEAN SPLIT

**ID:** `ENDING_CLEAN_SPLIT` · **fate:** lives

**The moment:** The threads of light pull apart, and the voice in their head goes quiet. For the first time in two days, they're alone in there. Mara's last words, as the Loom takes her: say them, and say where she goes (the drive, or nowhere), as the player chose.

**Epilogue:** They went back to the Stacks, back to the work, back to their capsule in Stack 9. Say what they did with the registry, whether they ever went to the drive, and what it's like to be only one person again.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_CLEAN_SPLIT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A white room of glowing threads: a thief in a rain-black jacket on their
knees, whole and alone in a circle of light, while a silver-haired woman
made of light drifts upward and away into the threads, dissolving. Quiet,
clean, sorrowful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## INTO THE WIRE

**ID:** `ENDING_INTO_THE_WIRE` · **fate:** lives

**The moment:** Split, and not into a drive: the Cartographers open a channel, and Mara goes into the open network of Lumen, a free ghost in the wire. The last thing she says in their head: *"I'll haunt them properly."*

**Epilogue:** Orison's systems started failing in small ways a week later: doors that opened for the wrong people, registry files that leaked a page at a time, holo-ads that said *"Remember the river."* Nobody could find what was doing it. Say whether Mara ever talks to them again, through a screen in a noodle bar at 3 a.m.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_INTO_THE_WIRE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night in a neon city, a thief standing in the rain in front of a wall of
glitching holo-screens, and on every screen, made of cyan static, the face
of a silver-haired woman winking at them; the Quiet Men behind them
staring at their own flickering visors. Mischievous, eerie, free.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## HOME

**ID:** `ENDING_HOME` · **fate:** lives

**The moment:** Ines, on the garden bridge, and a song from the flood wall, and the look on her face when something comes back. They take her hand and walk out of the Crown, down through the sky, and nobody stops two people who look like staff. Whatever happens with the ghost, they're not alone anymore.

**Epilogue:** They live in the Stacks, in a two-room capsule with a window onto the flood wall. Ines remembers more every month. Say what happened with Mara (split, sync, or a quiet agreement to wait), and what the sisters (or siblings) argue about over noodles.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_HOME
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Evening on an old concrete flood wall above a neon undercity, rain easing,
two siblings sitting side by side with their legs hanging over, a young
woman in a rumpled white suit with her head on the thief's shoulder, a
bag of takeout noodles between them. Tender, small, safe.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE UNBACKED

**ID:** `ENDING_THE_UNBACKED` · **fate:** lives

**The moment:** Null's gospel, at the top of the world: they tell the Loom to burn every backup in Lumen, the rich ones too. The threads go dark one by one. From now on, everyone in the city lives once, dies once, and is themselves the whole time. Nobody can ever be edited again. Nobody can ever come back, either.

**Epilogue:** Lumen was a different city afterward: more careful, more frightened, more alive. The Church of the Unbacked became the biggest congregation in the Stacks. Say what happened to Mara (she went with the backups, unless the player found another way) and whether the player thinks it was right.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_UNBACKED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The top of a white spire, a vast room of glowing threads going dark one by
one like candles blown out, a thief standing in the last pool of light
beside a huge one-armed man in a cut-up grey coat, both looking up.
Solemn, enormous, irreversible.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE NEW ARCHITECT

**ID:** `ENDING_NEW_ARCHITECT` · **fate:** lives

**The moment:** A handshake in a white room full of sunlight. A clean split, Gold tier, an apartment above the sky, and a title. Seraphine Kade pours two cups of tea. Mara goes into a drive in a vault. The registry is never mentioned again.

**Epilogue:** A year later, the new chief architect of Continuity signs off on Patch 9.0. Say what it edits, and whether they ever sleep badly.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NEW_ARCHITECT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A pristine white penthouse office above an endless sea of clouds and
blimps, golden light, a thief now in an immaculate white suit standing
at the window with a cup of tea, and far below through a gap in the
clouds, the tiny neon glow of the undercity. Beautiful, sterile, lonely.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## FULL SYNC

**ID:** `ENDING_FULL_SYNC` · **fate:** dies

**The moment:** It doesn't hurt. It's like falling asleep in a warm cab. The last thing that's theirs is a memory (pick the truest one they told anyone this run), and then it's Mara who opens their eyes, flexes their hands, and says, quietly, *"I'm sorry. Thank you."*

**Epilogue:** Dr. Mara Quell, in a thief's body, leaked the edit logs a month later, or didn't. Say which, and say what she did about Juno. Nobody in the Stacks ever saw the thief again, except in the way she sometimes stopped at the Lucky Hand for noodles she didn't remember liking.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_FULL_SYNC
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A rain-streaked window in a neon noodle bar, and a thief in a rain-black
jacket looking at their reflection, which is slowly becoming a silver-
haired woman's face; the slot behind their ear glowing white. Quiet,
uncanny, final.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## SOLD

**ID:** `ENDING_SOLD` · **fate:** lives

**The moment:** Madame Lotus's surgeon, a clean white table on a barge, a needle behind the ear, and Mara's voice going thin: *"I understand. I'd have done the same."* Then silence, and 200,000 credits, and a headache.

**Epilogue:** They woke up rich and a little hollow. Orison bought the ghost from Lotus the same night. Nobody ever found out what was on it. Say what they spent the money on, and whether they ever looked up at the blimps again.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SOLD
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A lantern-lit barge on a flooded neon market street at night, a tiny old
woman in silk and gold chrome holding up a small glowing chip between two
fingers, a thief rubbing the back of their neck, a credit chip in their
hand. Glamorous, grubby, hollow.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## RESTORED

**ID:** `ENDING_RESTORED` · **fate:** dies

**The moment:** They die in Orison's reach, and Orison brings them back. They wake in a gel tank in the Cradle, a nurse saying *"Welcome back."* They feel wonderful. They feel grateful. They don't remember a woman named Mara, or a sister, or anything about the last two days.

**Epilogue:** They went back to stealing, and they're very good at it, and they never miss a nightly backup. Say what the registry says about them now.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_RESTORED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A clinical white room of glowing gel tanks, a thief sitting up in one,
dripping, smiling a perfect calm smile; a nurse in white holding a tablet
that reads a list of patches; a smiling holo-ad on the wall. Serene,
horrifying.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## FLATLINE

**ID:** `ENDING_FLATLINE` · **fate:** dies

**The moment:** The miss was telegraphed and they took the risk anyway: the drop, the round, the cold. It's fast. The last thing they hear is Mara, and she isn't trying to save herself. She's saying their name.

**Epilogue:** Nobody backed them up. There was no one to restore. Say who lit a candle on platform 4, and what Kes painted on *Lucky*'s door.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_FLATLINE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night rain on a neon street, a thief's jacket lying empty in a puddle
full of pink and cyan reflections, a single candle burning on a flooded
metro platform in the distance, and high above, the grey bellies of the
blimps. Still, elegiac.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# GHOSTLINE: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NO_KEYS` | NO KEYS | Reach the Canopy (Act IV) without ever using one of Mara's keys (the cold open's hatch counts). | Visible |
| `ACH_FULL_STORY` | THE FULL STORY | Learn about the edits, who built them, your own death, and your sister. | Visible |
| `ACH_CREW` | THE CREW | Finish with Kes, Null and Juno all alive and loyal. | Visible |
| `ACH_NO_BODY_COUNT` | NO BODY COUNT | Reach the Crown without killing anyone. | Visible |
| `ACH_STILL_ME` | STILL ME | Reach the Loom with `max_sync` of 2 or less. | Hidden |
| `ACH_THE_DEEP` | THE DEEP | As a Netrunner, reach rank III of the Deep. | Hidden |
| `ACH_UNTOUCHED` | NOT A SCRATCH | Reach the Crown without ever being hurt. | Hidden |
| `ACH_ANCHORED` | ANCHORED | Use all four kinds of anchor: a true memory said aloud, a place from your past, a friend calling your name, and a real sleep. | Hidden |
