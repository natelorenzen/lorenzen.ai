# THE GLASS CITY · PACK-5 · BUILD 1.0-6a598b4

Bundle for: Act V begins (`REACH_BRIDGE`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: THE GLASS BRIDGE

*Dawn, the convoy hour, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions.

**Route:** reach the bridge in the convoy hour → the confrontation → **the choice**.

`game/endings.md` is loaded alongside this file. Slow down here. The player has spent an hour getting to this bridge.

---

## 5.1 THE CONVOY HOUR

Dawn on day 4. The **Glass Bridge**: three hundred meters of iron and glass over the grey lake, from the Aurel quay to the Concord enclave on Pier Island. A Directorate-and-Aurel checkpoint stands at the city end, and the Concord gate at the island end. For **one hour** the summit's diplomatic convoys (the ambassador's black cars) cross without being searched. Pedestrians cross through the covered **gallery** that runs alongside the roadway, with papers checked at both ends.

**How the player means to cross** is whatever they've built: NIGHTINGALE and Katya hidden in the ambassador's car (Tomas's keys and manifest, Morrow's or Nand's help), walking the gallery on Ilse's papers, a boat under the bridge (Anya's quay knowledge), or something entirely their own.

```
[IMAGE_TRIGGER]
ID: IMG_BRIDGE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dawn over a grey lake: a long covered bridge of iron and glass running to
an island of towers, black diplomatic cars queued at a striped checkpoint,
soldiers and men in overcoats, the first pale sunlight turning the glass
gold. The player at the city end with whoever is with them (NIGHTINGALE in
a headscarf, others as present). Far along the bridge, a lone figure waiting
mid-span.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_BRIDGE
PAIRED WITH: IMG_BRIDGE
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the sun clears the hills and light runs gold down the bridge's glass
panels one by one; convoy exhaust curls; the lone figure mid-span turns.
CAMERA: slow push along the bridge.
[/VIDEO_TRIGGER]
```

## 5.2 THE CONFRONTATION

Who is on the bridge depends on everything before. Combine these, and run it as **`ENC_BRIDGE`** (`game/encounters.md`), with a three-approach lettered menu at the turning point.

- **Ashby is at the Concord end.** If he's free, he's there as station chief to "receive the defector". He has two men, and orders that NIGHTINGALE be shot "resisting" once she's through the gate, with the film on her. He smiles at the player like a proud teacher.
- **Kell is at the city end**, if Voss died in the Glasshouse or never dealt: a sniper in the tollhouse tower and men at the checkpoint. If Ilse sold the real plan, Kell knows the gate and the car.
- **Voss stands mid-span**, the lone figure, if his parley was honored: hands in his coat, sunlight on his glasses. He'll keep his word exactly as bargained, and not one inch further.
- **A betrayal comes due:** an unturned Tomas steps forward with an arrest warrant, "for your own good"; a low-trust Anya's deal hands the player's car to Kell; or Ilse's papers carry a flaw she put there on purpose.
- **Katya.** If she isn't there, Lena stops halfway. *"I can't."*

Report `ENC_BRIDGE_SURVIVED` if the player lives through it, plus `ENC_BRIDGE_CLEVER` for an ingenious resolution: Voss exposing Ashby at the gate, the canary's false plan sending Kell's men to the wrong end, Margot's photographer waiting on the island, the ambassador's car used as a shield, or a confession tape played to the Concord gate officer.

## 5.3 THE CHOICE

When the confrontation turns, the player decides. **Never offer this as a menu, and never as a list.** These are what can happen:

| If the player… | Ending |
|---|---|
| gets NIGHTINGALE across **and** puts Ashby's guilt in front of the Concord (the film plus the ribbon, a confession, Voss's word at the gate, or the canary result with Tomas as witness) | `GLASS AND DAYLIGHT` |
| gets NIGHTINGALE across, but Ashby walks, whether for lack of proof or because the player chose to keep the secret | `THE QUIET PROMOTION` |
| accepts Ashby's offer, and crosses as his partner | `TWO FLAGS` |
| takes Ashby's place with Voss, or hands Ashby to Voss and becomes the Directorate's new man inside | `CARDINAL` |
| leaves both flags behind, and takes a boat with Anya (and Lena and Katya, if they choose) to a third country | `THE THIRD COUNTRY` |
| lets Margot break the whole story at dawn | `FRONT PAGE` |
| hands NIGHTINGALE to Voss or Kell to save someone or something | `THE GARDENER'S TRADE` |
| steps into the line of fire, or stays behind on the bridge, so that Lena crosses | `THE BRIDGE AT DAWN` |
| is taken by either side | `A QUIET ROOM` |
| walks away from all of it, alone | `NOBODY` |
| dies | `A STAR WITHOUT A NAME` |

## The Empty Bridge

If the player isn't at the bridge by the end of the convoy hour (a missed dawn, capture, a wrong turn):

- NIGHTINGALE crosses without them, if Anya or Ilse is true and she has papers. Otherwise Kell takes her back.
- `GLASS AND DAYLIGHT` and `THE BRIDGE AT DAWN` are no longer possible. The rest of the mole plot still resolves: `FRONT PAGE`, `TWO FLAGS`, `CARDINAL`, `THE GARDENER'S TRADE`, `THE THIRD COUNTRY`, `A QUIET ROOM` and `NOBODY` remain.

## Reporting

Report `ENC_BRIDGE_*`, `RESCUE_KATYA` (if not yet), `ALLY_*` events that resolved here, and companion survival. Evaluate achievements (`game/achievements.md`), then complete the run with the ending's ID (`core/scoring.md` §4). Fire the ending image, narrate the ending and epilogue (`game/endings.md`), and print the game-over or death screen (`scoring.md`).

===== FILE: game/endings.md =====

# THE GLASS CITY: Endings

Eleven endings. None is good or bad. Every one is something the player chose to be.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, told as a declassified file summary written years later; (4) complete the run with the ending's **ID**; (5) the game-over screen, or the death screen for `A STAR WITHOUT A NAME`.

**Epilogue fragments** (use the ones that apply):

- **Nightingale:** across: *"Dr. Lena Kasper broke four Directorate codes in her first year in the Concord and never once went to the opera."* With Katya: *"Katya Kasper gave her first public recital at nineteen. She played a piece called* The Bridge*."* Taken back: *"Dr. Kasper was not seen again."*
- **Ashby:** exposed: *"Julian Ashby was tried in closed court. He asked only to be allowed to fish."* Unexposed: *"Julian Ashby retired with honors in 1979."*
- **Voss:** with his exit: *"Colonel Voss retired to an orchard in the south. He grew a variety of pear he named after no one."* Killed or purged: *"Colonel Voss's file ends mid-sentence."*
- **Tomas:** turned and alive: *"Tomas Reyne became the best station chief the Office ever had in Aurel. He never let anyone else make his tea."*
- **Ilse:** true, with Pavel free: *"Varga & Daughter finally had a daughter: Pavel's."* Still selling: *"Ilse Varga is still in the old town, still making the best papers in Aurel."*
- **Anya:** chose the player: *"Anya Sorel's file was closed as 'deceased'. It was wrong."* Otherwise: *"Anya Sorel was recalled in December. The Office tried to find out what happened. It didn't."*

---

## GLASS AND DAYLIGHT

**ID:** `ENDING_GLASS_AND_DAYLIGHT` · **fate:** lives

**The moment:** Lena steps through the Concord gate, with Katya if she came, and the sun comes up behind them. The proof goes onto the gate officer's desk (the film, the ribbon, a voice on a tape, an old colonel saying one name), and Ashby's men lower their hands. Ashby doesn't run. He looks at the player a long time. "Good," he says. "Good. I taught you that."

**Epilogue:** The CARDINAL network collapsed in eleven days. The Accords were signed a year late and held for twenty. The player's file was marked *commended*, then *classified*, then quietly moved to a drawer that the next station chief opens whenever someone new arrives in Aurel.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_GLASS_AND_DAYLIGHT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Sunrise at the island end of a long glass bridge: a woman and a teenage
girl walking through an open gate into golden light; behind them a
silver-haired man in a cardigan and coat standing still between two
guards, hands at his sides; the player at the gate watching. Glass panels
blazing gold, the lake pale blue.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE QUIET PROMOTION

**ID:** `ENDING_QUIET_PROMOTION` · **fate:** lives

**The moment:** Lena crosses. Ashby shakes the player's hand at the gate in front of everyone. "Remarkable work. There's a desk upstairs with your name on it." He means it. That's the worst part.

**Epilogue:** The player rose fast, with Ashby's hand on their shoulder at every step. The Directorate always seemed to know a little too much. The film was never mentioned again. Some nights the player wonders whether they're being promoted or collected.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_QUIET_PROMOTION
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A wood-paneled office with a view of a glass bridge in morning light: a
silver-haired man in a cardigan pinning a small medal on the player's
lapel, smiling warmly; through the window a colonel's black car pulls away
on the far shore. Warm lamp light, cold window light.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## TWO FLAGS

**ID:** `ENDING_TWO_FLAGS` · **fate:** lives

**The moment:** The player takes Ashby's hand. It's the handshake that makes a double agent. Lena crosses, or doesn't, according to their new arithmetic. Voss sends a pear from his orchard, with a card: *"Welcome."*

**Epilogue:** For eleven years the player fed both sides exactly enough. Two services promoted them. Neither trusted them, and both needed them. The file says only: *"Subject was never proven to be anything."*

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_TWO_FLAGS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The player standing exactly at the midpoint of a long glass bridge at
dawn, one hand in each coat pocket; a Concord flag at one end, a Directorate
flag at the other, both stirring; the player's reflection in the glass
showing two faces. Cold, ambiguous, beautiful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## CARDINAL

**ID:** `ENDING_CARDINAL` · **fate:** lives

**The moment:** Ashby goes to a closed court, and the player goes to Voss's greenhouse. "The position is vacant," Voss says, pruning a rose. "It pays in pears." The player is the Directorate's man inside the Office now.

**Epilogue:** The new CARDINAL was never caught. Station chiefs came and went. In 1989, when both blocs quietly collapsed, a single index card in a Directorate archive was burned before anyone could read it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_CARDINAL
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Inside a steamy Victorian glasshouse, an old colonel with pruning shears
handing the player a single red rose; rain on the glass; a small index card
on the potting bench reading nothing legible. Deep green, crimson rose,
cold cyan light.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE THIRD COUNTRY

**ID:** `ENDING_THIRD_COUNTRY` · **fate:** lives

**The moment:** Under the bridge, a quay boat with the engine already running. Anya holds out a hand. Lena and Katya are in the stern, if they chose to come. Neither flag. Both services watch the wake and say nothing, because saying something would mean admitting what happened.

**Epilogue:** A café in a warm port that has no embassies. Two names nobody would recognize. Tell what became of Lena, of Ashby, and of the Accords. The last line is about rain: they never did miss it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THIRD_COUNTRY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A small motorboat cutting a white wake across a pale lake at dawn, away
from a long glass bridge and two distant flags; in it the player and a
dark-haired woman side by side, and (if present) a woman and a teenage girl
in the stern. Golden light ahead, grey city behind.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## FRONT PAGE

**ID:** `ENDING_FRONT_PAGE` · **fate:** lives

**The moment:** At six, Margot's presses roll. *CONCORD SPY CHIEF WAS DIRECTORATE MOLE. DEFECTOR'S DAUGHTER HELD HOSTAGE.* By seven, both delegations are shouting. By eight, nobody on either side can afford to touch Lena, the player or Katya, because the whole world is looking.

**Epilogue:** The Accords collapsed and were rebuilt in the open a year later, better. Both services purged. The player never worked in intelligence again. They lectured, wrote one book, and were invited to no parties at all.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_FRONT_PAGE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Dawn in a 1970s newspaper press hall: huge rotary presses running, a
headline in giant blocky shapes (unreadable) flying past on paper sheets,
a reporter with rolled sleeves grinning beside the player, a window
showing the glass bridge beyond. Ink black, press-light yellow, dawn cyan.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE GARDENER'S TRADE

**ID:** `ENDING_GARDENERS_TRADE` · **fate:** lives

**The moment:** Lena is put into Voss's car. She doesn't look back, or she does, which is worse. What was bought with her is real (Anya's freedom, Pavel's release, the player's name cleared), and the player will carry what it cost.

**Epilogue:** Tell what the trade bought, and what happened to Lena, honestly. Voss kept every word of it. He always did. He sent a pear every autumn, and the player never ate one.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_GARDENERS_TRADE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The city end of a glass bridge at dawn: a black car with its rear door
open, a woman in a headscarf being helped in by men in overcoats; an old
colonel touching his hat to the player; the player standing alone in the
road. Grey light, long shadows.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE BRIDGE AT DAWN

**ID:** `ENDING_BRIDGE_AT_DAWN` · **fate:** dies

**The moment:** One shot from the tollhouse tower, or one of Ashby's men, and the player is between it and Lena. She makes the gate. The sun comes up on the glass. It is very quiet.

**Epilogue:** Lena crossed, and everything she carried did its work. Tell what the player's sacrifice bought: Ashby exposed or not, and which allies lived. There's a star carved in the marble of the Office's lobby with no name under it. Once a year, a woman and her daughter leave a pear beneath it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_BRIDGE_AT_DAWN
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Sunrise on a long glass bridge: a woman running through an open gate into
golden light, looking back; behind her on the bridge the player's figure
kneeling, one hand on the iron railing, the sun blazing through the glass
panels. Heroic, tragic, still. No gore.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## A QUIET ROOM

**ID:** `ENDING_QUIET_ROOM` · **fate:** sacrificed

**The moment:** A room with a table, two chairs, and a window painted over. Whoever took the player, whichever side, is polite. Cut away. Nothing cruel is shown.

**Epilogue:** Tell who holds them, what happened to Lena and to Ashby, and whether anyone came. In spy stories, prisoners are sometimes traded on bridges at dawn. Say whether that happened, years later, on this one.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_QUIET_ROOM
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A bare interrogation room: a table, two chairs, a single hanging bulb,
a painted-over window with one scratched clear spot showing a sliver of
dawn and a distant glass bridge. The player seated, coat still on, looking
at that sliver of light. Quiet, not cruel.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## NOBODY

**ID:** `ENDING_NOBODY` · **fate:** lives

**The moment:** A new passport of Ilse's making, or a tram ticket and a coat with no labels. The player walks out of Aurel and out of the story.

**Epilogue:** Both services list them as *whereabouts unknown*. Tell what happened in Aurel without them: to Lena, to the mole, to the people they left. It's a long, quiet life under a name nobody knows, including, some mornings, themselves.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NOBODY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A rainy tram stop at the edge of the city at dawn, a lone figure (the
player) in a new coat and hat walking away along the tracks into fog;
the glass bridge and copper domes small and far behind. Melancholy, open.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## A STAR WITHOUT A NAME

**ID:** `ENDING_STAR_WITHOUT_A_NAME` · **fate:** dies · available in every act

**The moment:** Narrate the death honestly, quietly and without gore: where they fell, what they saw last, and what was in their hands.

**Epilogue (from state):** what happened to NIGHTINGALE (did an ally carry the plan through?), to Ashby, and to each ally. The last line: *"There's a star carved in the Office's lobby with no name under it."* Then print the **death screen** (`scoring.md`).

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on death

SCENE:
The place where the player fell [exact location], moments after: rain on
wet stone, a dropped umbrella or briefcase, a single sodium streetlight,
a pair of polished shoes of whoever is walking away. Quiet, dignified, no
gore, no body shown clearly.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# THE GLASS CITY: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NO_SHOTS_FIRED` | NO SHOTS FIRED | Reach Act IV or later with `shots_fired` false and `killed_someone` false. The player's allies may have fired; the player didn't. | Visible |
| `ACH_CANARY_TRAP` | CANARY TRAP | Unmask CARDINAL specifically with a canary trap (Puzzle 3). | Visible |
| `ACH_EVERYBODY_CROSSES` | EVERYBODY CROSSES | NIGHTINGALE crosses the bridge, and every recruited ally is alive and free. | Visible |
| `ACH_COLD_TRAIL` | COLD TRAIL | Reach Act IV or later with `max_heat_reached` of 2 or less. The frame usually makes this very hard. | Visible |
| `ACH_WHOLE_TRUTH` | THE WHOLE TRUTH | Discover the frame, Daniel Ashby, the Gardener's way out, Katya, and CARDINAL. | Visible |
| `ACH_TWO_BIRDS` | TWO BIRDS | NIGHTINGALE **and** Katya cross the bridge. | Hidden |
| `ACH_OLD_FLAMES` | OLD FLAMES | Anya chooses the player, and they both walk away alive together. | Hidden |
| `ACH_DEEP_COVER` | DEEP COVER | Never give anyone the player's real name (`real_name_given` false). | Hidden |
| `ACH_DOUBLE_BLIND` | DOUBLE BLIND | Turn both Tomas and Ilse. | Hidden |
| `ACH_CHECKMATE` | CHECKMATE | Solve the queen cipher without hints. | Hidden |
| `ACH_LONE_WOLF` | LONE WOLF | Reach the bridge without recruiting anyone. | Hidden |
| `ACH_GARDENERS_NOD` | THE GARDENER'S NOD | Colonel Voss survives, honors a deal with the player, and lets them walk away. | Hidden |
