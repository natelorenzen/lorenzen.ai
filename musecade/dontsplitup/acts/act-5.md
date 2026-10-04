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
