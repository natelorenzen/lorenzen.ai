# DON'T SPLIT UP · PACK-5 · BUILD 1.0-3d0d253

Bundle for: Act V begins (`REACH_PATCH`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: THE PUMPKIN PATCH

*A thousand jack-o'-lanterns, the harvest asleep in the vines, the first lantern, the stinger, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions. About 4:30 a.m. to sunrise at 6:50 a.m.

**Route:** into the Patch → wake the taken → find the first lantern while Jack Hollow walks the rows → snuff it, or change the story → **the stinger** → the choice.

`game/endings.md` is loaded alongside this file. Slow down here. It's the last reel. Play the dread straight, and let the jokes land in between.

---

## 5.1 THE HARVEST

The **Pumpkin Patch**: a whole hillside of vines, and on it a thousand carved jack-o'-lanterns, every one lit, every face different. No wind, but the candles all lean slightly uphill. The vines move, slowly, like something breathing in its sleep. Mist pools in the rows. Down the hill, the lights of the town; across the valley, the black lake.

**The taken** lie among the pumpkins, sleeping peacefully in the vines, leaves in their hair, each under a lit jack-o'-lantern carved with their own face (badly). Tonight's taken, if any; and, further up the hill, older shapes, wrapped deeper. (Not last year's: last year's woke up and went home. These are only tonight's.)

- **Waking someone:** lift the lantern from over their head and blow it out. They gasp awake, cold, confused, furious (*"Did I miss the party?"*). Each one takes about fifteen minutes to reach and wake, in a group, through vines that tug at ankles. A woken friend counts toward the group of three immediately.
- **Dale**, if he was taken and is woken here: *"...I'm back."* That's `ALLY_DALE_COMES_BACK`, if it hasn't happened yet. Let the moment land.

## 5.2 THE PATCH (set piece)

Run **`ENC_PATCH`** (`game/encounters.md`). **Jack Hollow** walks the rows. The Patch is his, and it fights for the story: vines that wrap an ankle and pull one person sideways, away from the others; a pumpkin that rolls into someone's path; the mist thickening between friends until they can't see each other. **Splitting up here is the most dangerous thing in the game.**

If the Committee wasn't outplayed (`SOCIAL_MAYOR`), Harlan Beck arrives on a hayride tractor with Lyle and two flashlights, to "protect the harvest". They're not much use. Lyle may switch sides the moment he's asked nicely.

```
[IMAGE_TRIGGER]
ID: IMG_THE_PATCH
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A vast hillside pumpkin patch before dawn, a thousand carved jack-o'-lanterns
glowing orange in the vines, mist in the rows, a small town's lights far
below and a black lake beyond; sleeping figures in Halloween costumes
lying in the vines under glowing pumpkins; a tight group of teenagers moving
up the hill holding hands, flashlights in their fists; at the top of the
hill, the tall scarecrow with a glowing carved pumpkin head standing still,
a railroad lantern raised. Epic, eerie, orange and violet.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.3 THE FIRST LANTERN

Somewhere among the thousand is **the first jack-o'-lantern ever carved for Jack Hollow**, in 1969. His heart's candle burns in it. Run `game/puzzles.md`, *Puzzle 3: The First Lantern*.

- **Wendell's moment** (`ALLY_WENDELL_WATCHES`): if Wendell's here, at the worst moment, with Jack close and everyone else looking away, Wendell keeps his eyes open for the first time in his life. *"I'm watching the whole thing this time."* He sees what nobody else does: which lantern's flame doesn't move when the others lean, or which one Jack keeps turning to look at.
- **Snuffing it:** Jack Hollow stops walking. The candle in his head gutters. He looks at the player (if they talked in Act IV, he looks almost relieved), and then he comes apart, gently, into straw and dry leaves that blow away down the hill. Every lantern in the Patch goes out at once. **Everyone still asleep wakes up.** Silence. Somebody says, *"Is it... over?"*

**The TROPE roll** (`rules.md` §2): the moment the first lantern is snuffed, the story looks for its next monster. At TROPE 0–3, it finds nothing. At **TROPE 4** the player must make a **Hard roll (DC 15)**; at **5**, a **Very Hard roll (DC 18)**, to drop the lantern and walk away. A friend's hand on their shoulder, or a true word, grants advantage. Failing it isn't failure of the story: it's `THE NEW HOLLOW`.

## 5.4 THE STINGER

**There is always a stinger.** In the silence after the candle goes out, everyone breathes, someone laughs, and then, at the very top of the hill, **one last pumpkin lights itself.** A slow, crooked grin. The legend's last line: *"...and he'll be back next Halloween."*

- If the player knows the stinger (`DISCOVER_THE_STINGER`) and **does something about it**, it's `NO SEQUEL`. The fix is to change the story's last line, out loud, where the story can hear: over WHOL 1350 on the Sheriff's radio, by ringing the fire bell so the whole town comes up the hill and hears it, on Courtney's tape, or by Darlene reading it on her ham radio to every station in the county. Something like: *"...and he never came back, and the Hollow Fest was just a festival."* Or smashing that last pumpkin while a group of three says the new line together. Accept any version that genuinely ends the story.
- If they don't know, or they say *"It's over"* and turn their backs: the pumpkin keeps grinning as the sun comes up. That's `ROLL CREDITS`.

## 5.5 THE CHOICE

The Patch is quiet, or it isn't. Jack Hollow is gone, or standing in the rows, waiting to hear what they'll say. **Never offer this as a menu, and never as a list.** Let the player find their own answer.

| If they… | Ending |
|---|---|
| snuff the first lantern, and let the stinger stand | `ROLL CREDITS` |
| snuff the first lantern **and** change the story's last line so there's no sequel | `NO SEQUEL` |
| learned what Jack wants, talked with him, and **change the story to give it to him** instead of snuffing him: he puts down the sickle, the sleepers wake, and he's the brochure scarecrow again | `COME FOR THE LEAVES` |
| trade themselves for the others: walk into the dark alone so the rest can wake the taken and get away | `SOMEBODY HAS TO GO BACK` |
| snuff it at TROPE 4 or 5 and fail to let go | `THE NEW HOLLOW` |
| survive until sunrise, but every friend is still asleep | `LAST ONE STANDING` |
| survive until sunrise without snuffing it (Jack freezes mid-step; he'll be back) | `MADE IT TO MORNING` |
| (earlier) take the Mayor's deal | `SEASON PASS` |
| (earlier) get Courtney's tape out to the world instead | `FOUND FOOTAGE` |
| (earlier) leave Hollow Pines | `NOPE` |
| are taken | `I'LL BE RIGHT BACK` |

Sunrise at **6:50 a.m.** is a hard stop: whatever hasn't been done by then doesn't happen.

## Reporting

Report the remaining events (`ENC_PATCH_*`, `PUZZLE_LANTERN_*`, `ALLY_WENDELL_WATCHES`, `ALLY_DALE_COMES_BACK` if it happened here, friends' survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen (`scoring.md`).

===== FILE: game/endings.md =====

# DON'T SPLIT UP: Endings

Eleven endings. Play every one like the last reel of a movie: earnest, a little scary, and generous to the kids. The joke is on the genre and on the Committee, never on the friends.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, told as the text crawl before the credits ("One year later..."); (4) complete the run with the ending's **ID**; (5) the final screen and a fake VHS box blurb for the sequel (`scoring.md`).

**Epilogue fragments:**

- **Dale:** *"Dale Pruitt put his grandfather's shoebox of flyers on the mayor's desk. He still says 'I'll be right back' all the time. He always is."* If he slept through sunrise: *"Dale woke up the next Halloween in a pumpkin patch with leaves in his mullet, and asked if he'd missed the party."*
- **Wendell:** *"Wendell Fish watched his first horror movie all the way through on November 1st. He said it was 'derivative'."*
- **Courtney:** *"Courtney After Dark's Halloween special has been rerun on public access every October since. It now has eleven viewers."*
- **Darlene:** *"Darlene Mutch moved out of the mess hall and into an apartment with central heating. She still sleeps with a flare gun."*
- **Earl:** *"Earl Grubbs retired. He framed the cue cards."*
- **The Sheriff:** *"Sheriff Dunlap believes teenagers now. It has made his job much harder."*
- **Mayor Pumphrey:** exposed: *"The Halloween Committee was dissolved by a unanimous vote of the town council, which was also the Halloween Committee."* Otherwise: *"Mayor Pumphrey was re-elected unopposed."*
- **Lyle:** *"Lyle Pettibone does fog for community theater now. Only the good fog."*

---

## ROLL CREDITS

**ID:** `ENDING_ROLL_CREDITS` · **fate:** lives

**The moment:** The first lantern goes out. Jack Hollow comes apart into straw and leaves, and every pumpkin on the hill goes dark at once. The sleepers wake, coughing, confused, alive. Somebody says *"It's over,"* and they all walk down the hill together as the sun comes up over the lake. Behind them, at the very top of the Patch, one last pumpkin flickers, and grins.

**Epilogue:** They made it. Say who made it and where they ended up. The town tells the story differently every year now. Next October, a new flyer goes up on a telephone pole two states away: *FREE HALLOWEEN WEEKEND · CABIN 13.*

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ROLL_CREDITS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Sunrise over a misty lake and a hillside pumpkin patch, every jack-o'-lantern
dark and smoking; a tired group of teenagers in torn Halloween costumes
walking down the hill arm in arm, silhouetted against the dawn; a pile of
straw and dry leaves where a scarecrow fell; at the very top of the hill,
one single pumpkin glowing orange with a crooked grin. Triumphant, with a
sting.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## NO SEQUEL

**ID:** `ENDING_NO_SEQUEL` · **fate:** lives

**The moment:** The first lantern goes out, and the last pumpkin on the hilltop lights, grinning, right on cue. And this time somebody's ready for it. The new last line goes out (over the radio, to the whole town with the fire bell, on tape, or said by a group of friends standing together). The grin on the last pumpkin wavers. The candle sputters, confused, as if it's forgotten its line. Then it goes out by itself, and doesn't come back.

**Epilogue:** There was no Hollow Fest the next year. The town held a perfectly normal harvest festival with a pie contest, and lost money, and nobody was taken. The *Hollow Night* tapes went out of print. Say who made it and where they ended up.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NO_SEQUEL
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Dawn on a hilltop pumpkin patch: a single jack-o'-lantern at the summit with
a thin curl of smoke rising from its dark grin; the teenagers in Halloween
costumes standing together around it, one holding a crackling police radio
handset, one a camcorder; far below, a whole small town walking up the hill
in pajamas carrying flashlights. Final, peaceful, quietly funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## COME FOR THE LEAVES

**ID:** `ENDING_COME_FOR_THE_LEAVES` · **fate:** lives · **the hidden ending**

**The moment:** They don't snuff it. They tell the story again, out loud, to everyone who'll listen: Jack Hollow is a harvest scarecrow who stands in a field and waves at the hayride, and he hands out leaves, and he never took anybody, and everybody who fell asleep in the Patch woke up at dawn and went home. Jack listens. He looks down at the sickle for a long time. Then he lays it down in the vines, and picks up a handful of red and gold leaves instead. Every lantern on the hill turns, very slightly, to smile. The sleepers wake. Jack raises one straw hand, stiffly, and **waves.**

**Epilogue:** The Hollow Fest still runs every year. There's a seven-foot scarecrow in the field above the hayride with a candle in his head, and he waves at the children, and hands them leaves, and nobody can work out how they do the animatronics. The Committee was dissolved. The flyer was reprinted, with the original 1969 cover: *JACK SAYS: COME FOR THE LEAVES!* Say who made it and where they ended up.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_COME_FOR_THE_LEAVES
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A bright autumn afternoon at a small-town harvest festival: a hayride wagon
full of laughing children passing a field where a tall friendly scarecrow
with a gently smiling glowing jack-o'-lantern head stands waving, a big
handful of red and gold leaves in its other hand, an old sickle lying in
the grass overgrown with vines; the teenagers on the hay wagon waving back.
Warm, sweet, joyful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## SOMEBODY HAS TO GO BACK

**ID:** `ENDING_SOMEBODY_GOES_BACK` · **fate:** sacrificed · available from Act IV

**The moment:** There's no other way, so the player does the one thing the movies always get wrong: they choose it. They walk out alone, on purpose, and say the line, so the others have time to wake the taken and get down the hill. *"I'll be right back."* Jack Hollow turns from the group toward them. The last thing they see is their friends, together, running. The candle-light fills everything. It's warm.

**Epilogue:** The friends got everyone out before sunrise. The player slept in the Patch for a year. **Next Halloween**, at dawn, they woke up in the vines with leaves in their hair, and every one of their friends was sitting in a circle around them with a thermos of cocoa, having waited all night. They'd come back every Halloween until they did. Say who was there.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SOMEBODY_GOES_BACK
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Dawn in a hillside pumpkin patch one year later: a teenager in a faded
Halloween costume sitting up in the vines, leaves in their hair, blinking;
around them in a circle on folding chairs, their friends in winter coats,
holding thermoses and a handmade banner, grinning; a single jack-o'-lantern
smoking out beside them. Tender, funny, bittersweet.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## LAST ONE STANDING

**ID:** `ENDING_LAST_ONE_STANDING` · **fate:** lives

**The moment:** Sunrise. The player is alive, alone, filthy, still holding whatever they were holding. Every friend is still asleep in the Patch, under a lantern each. Jack Hollow freezes mid-step in the rows as the light touches him. It's very quiet. Somewhere a rooster goes off, which feels personal.

**Epilogue:** They did survive. They spent the next year telling people what happened, and the next Halloween they went back up the hill and sat in the Patch all night, alone, and at dawn their friends woke up, a year late, and asked if they'd missed the party. Say how the player spent that year, honestly.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LAST_ONE_STANDING
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Sunrise over a pumpkin patch on a hill, mist burning off; a lone exhausted
teenager in a torn Halloween costume standing in the rows holding a
flashlight, staring; around them, friends asleep in the vines under dark
pumpkins; a tall scarecrow with a pumpkin head frozen mid-step a few rows
away. The classic final shot, lonely and a little absurd.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## FOUND FOOTAGE

**ID:** `ENDING_FOUND_FOOTAGE` · **fate:** either

**The moment:** The tape gets out. Courtney's camcorder footage of the Committee (*"That's a nap, Agnes"*) goes out over the Sheriff's radio, or reaches the TV station two towns over before sunrise. By noon, every news van in the state is parked on Main Street.

**Epilogue:** *Unexplained Tonight!* ran the tape three nights in a row. The Committee resigned. Jack Hollow wasn't ended, only exposed, and the town has no idea what to do with a real monster and no festival. Every Halloween now, the whole town locks its doors and sits up together in the high school gym, in groups of three. Say who made it, who was still asleep in the Patch, and where they ended up.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_FOUND_FOOTAGE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A small-town main street the morning after Halloween crowded with news
vans and satellite dishes, reporters with microphones; a big old TV set in
a shop window playing grainy camcorder footage of a pumpkin-headed
silhouette and a woman in a pumpkin cardigan; the teenagers in torn
costumes on the curb, one proudly holding up a camcorder. Satirical,
triumphant, messy.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## MADE IT TO MORNING

**ID:** `ENDING_MORNING` · **fate:** lives

**The moment:** The sun comes up. Wherever Jack Hollow is, he stops: one foot raised, lantern out, the candle in his head shrinking to an ember. The friends are still together, still hiding, and alive. Somebody laughs, too loud. They made it to morning. That's all they did, and it's not nothing.

**Epilogue:** They drove home in the Mothership with the windows down and nobody talking. Anyone still asleep in the Patch woke up next Halloween. Jack Hollow will walk again next October. Say who made it, who didn't wake, and whether any of them ever went back.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_MORNING
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Early morning sun over a pine forest road, a battered 1970s conversion van
with a wizard airbrushed on the side driving away with its windows down,
teenagers in torn costumes slumped inside; in the rear-view distance on a
misty hill, a tall pumpkin-headed scarecrow frozen mid-stride. Relieved,
exhausted, uneasy.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## SEASON PASS

**ID:** `ENDING_SEASON_PASS` · **fate:** lives · available from Act IV

**The moment:** The player shakes Mayor Pumphrey's hand. She gives them a pumpkin pin and a clipboard. As promised, **one** friend is woken (say who; and say what the others think of the deal). *"Welcome to the Committee, hon. Donuts are at three."*

**Epilogue:** They have a house on the lake now, and a vote. Every October they help pick the flyers' telephone poles. Hollow Pines had its best tourism year ever. Tell it cheerfully, in the Mayor's voice, and let it be chilling.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SEASON_PASS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A cozy town hall back room with a folding table, a pumpkin-shaped binder,
donuts and a coffee urn; a smiling older woman in a pumpkin cardigan pinning
a little pumpkin badge on a teenager in a Halloween costume; through the
window behind them, a hillside of glowing jack-o'-lanterns; on the wall, a
framed tourism chart with a line going steeply up. Cheerful, sinister.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE NEW HOLLOW

**ID:** `ENDING_NEW_HOLLOW` · **fate:** lives · available from Act IV

**The moment:** The first lantern goes out. Jack Hollow falls. And the story, looking for its next monster, finds the person in the Patch who played their part the hardest. The player's hand is still on the lantern. It's warm. It fits. Somewhere a candle lights itself. The friends call their name, and it sounds very far away.

**Epilogue:** Next Halloween, the Hollow Fest unveiled a brand-new costume, and everyone agreed it was the best yet. Somebody new walks the corn on Halloween night, slowly, and never runs. Their friends come back every year with a thermos and a smiling pumpkin, and sit in a group of three, and wait to get them back. Keep it eerie, not cruel: nobody is hurt, and there's hope.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NEW_HOLLOW
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A moonlit corn field at the edge of a festival: a new tall figure in a
farm coat with a freshly carved glowing jack-o'-lantern head standing
still between the stalks, a lantern in hand, wearing a scrap of a familiar
Halloween costume at the cuffs; in the foreground, three teenagers sitting
close together on a hay bale with a thermos and a smiling carved pumpkin,
waiting. Eerie, sad, hopeful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## NOPE

**ID:** `ENDING_NOPE` · **fate:** lives · available from Act I

**The moment:** The player does the thing nobody in a horror movie ever does: they say *"Nope,"* turn the van around, and leave. The road out of Hollow Pines is dark, and the radio is static, and something taps once on the back window. Then the town line. Then a highway. Then a diner with very bright lights.

**Epilogue:** They spent Halloween in a diner eating pancakes and arguing about what was in the road. They never went back. Tell honestly what happened to anyone they left behind, and to whoever got Cabin 13 instead. Wendell maintains it was the correct play, statistically.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NOPE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A brightly lit roadside diner at night on an empty highway, a battered
1970s conversion van with a wizard on the side parked out front; through the
big window, teenagers in Halloween costumes in a booth with stacks of
pancakes, laughing nervously; far behind on the dark horizon, a single
tiny orange light on a hill. Cozy, relieved, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## I'LL BE RIGHT BACK

**ID:** `ENDING_RIGHT_BACK` · **fate:** dies · available in every act

**The moment:** Alone, at the wrong moment, playing the part. The candle-light is suddenly very close and very warm. **Cut away.** A flashlight rolls across the floorboards and stops. Keep it non-graphic: the player is taken, and the story says they were never seen again.

**Epilogue:** Tell what the friends did next (kept together and got out, went up the hill for them, or were taken too), in the crawl's voice. The player woke up the next Halloween in the Patch with leaves in their hair, a year late, and nobody believed a word of it. The last line: *"They said they'd be right back."*

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on I'LL BE RIGHT BACK

SCENE:
A classic arcade game-over tableau: a dropped flashlight lying on old
floorboards (or in the leaves, or on the dock, as fits) still shining, its
beam lighting a fallen Halloween mask and a scattering of straw and dry
leaves; a faint orange candle glow fading at the edge of the frame. Spooky,
no injury shown.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# DON'T SPLIT UP: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_DIDNT_SPLIT_UP` | WE DIDN'T SPLIT UP | The player never chose to leave anyone alone or break the group into twos or ones, all night (`split_up` false). | Visible |
| `ACH_LOW_TROPE` | NOT LIKE THE MOVIES | Finish with `max_trope` of 1 or less. | Visible |
| `ACH_EVERYBODY_LIVES` | EVERYBODY LIVES | Every recruited friend is awake and free at the end (never taken, or woken before sunrise). | Visible |
| `ACH_NEVER_SAID_IT` | NEVER SAID IT | The player never said a forbidden line (`rules.md` §2) all night. | Visible |
| `ACH_DIDNT_READ_IT` | DIDN'T READ THE LATIN | Nobody in the player's group read the book aloud (`read_the_latin` false). | Visible |
| `ACH_GENRE_SAVVY` | GENRE SAVVY | As the Nerd, reach rank III. | Hidden |
| `ACH_FULL_SIZE_BARS` | FULL-SIZE BARS | Go trick-or-treating during the massacre (`trick_or_treat`). | Hidden |
| `ACH_BEFORE_CREDITS` | BEFORE THE CREDITS | Reach the Patch with two or more hours left before sunrise (by 4:50 a.m.). | Hidden |
| `ACH_READ_THE_SCRIPT` | READ THE SCRIPT | Uncover the Committee, the origin, and what Jack Hollow wants. | Hidden |
| `ACH_IM_RIGHT_BACK` | I'M RIGHT BACK | Be there when Dale says the line, and comes back. | Hidden |
