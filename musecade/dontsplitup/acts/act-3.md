# ACT III: CAMP CRESCENT

*An abandoned summer camp, the only survivor of 1979, a cork board full of string, the Rules, the canoe dock, and where the taken go.* Target: 11 to 15 minutes, 8 to 11 decisions. Halloween night, about 12:30 a.m. to 2:30 a.m.

**Route:** follow the bell to the mess hall → win over Darlene → work out the Rules → survive the canoe dock → learn where the taken are → **into Hollow Pines**, the only road up to the Patch.

---

## 3.1 THE LAST SURVIVOR

**Camp Crescent**, closed since 1979: cabins with their screen doors hanging, a flagpole with no flag, an archery range with rotted targets, a canoe dock, a swimming raft out in the fog, and a hand-painted sign: *CAMP CRESCENT · FRIENDSHIP · FIRESIDE · FUN.* Somebody has scratched out *FUN*.

The bell is ringing from the **mess hall**. Tripwires with tin cans. A trapdoor with a mattress under it. A voice from the dark: *"Stop right there. How many of you are there? Say it out loud. Count."* It's **Darlene Mutch** (`characters/npcs.md`): twenty-seven, an army jacket, a flare gun, a bowl haircut she cut herself, ten years of not sleeping.

**The goal, said plainly by Darlene, once she lets them in:** *"You want to live till morning? Then sit down and listen, because I've been waiting ten years to give this speech, and I'm going to give all of it."*

- **Her trust** (`SOCIAL_DARLENE`): she's been called crazy for ten years. What wins her: believing her, out loud, before she's proven anything; being honest about who's been taken; and Dale, if Dale is here and tells her who his grandfather was. (She knew Hank Pruitt. Her face does something complicated.) Doubting her, or laughing, makes her fire a flare into the ceiling, and then it takes a lot to get back.
- **Her story** (`DISCOVER_DARLENE_STORY`), once she trusts them: Halloween 1979. The town's brand-new Halloween Committee staged a "haunted hayride" for the counselors, a man in a pumpkin mask and a farm coat, a whole legend made up for the tourists. And that night, *something else* walked out of the corn wearing the same costume. Six counselors split up to search for the hayride man. *"I stayed. In the bell tower. With Mr. Pruitt and the cook. Three of us, all night. It stood at the bottom of the tower until sunrise and it never came up."* The other five were gone in the morning. **They came back the next Halloween**, asleep in a pumpkin field above town, a year older, remembering nothing. The town said they'd run away. *"And Mr. Pruitt walked into town at sunrise to tell the mayor. And when he came back he wouldn't look at me. Not ever again."*
- **Dale**, if he's here, takes that badly, or bravely. Let the player be there for it.

## 3.2 THE RULES (puzzle)

**Darlene's cork board:** ten years of clippings, photos of each year's visitors (always out-of-towners, always on the Committee's flyer), tide tables, moon phases, and red string to a single word in the middle: **WHY?** She's never worked out *all* of it. Combined with what the friends have seen tonight, the player can. Run `game/puzzles.md`, *Puzzle 2: The Rules*. Wendell is very excited and about 70 percent right.

- **Wendell's secret** (`DISCOVER_WENDELL_SECRET`) tends to come out here, when he confidently explains a scene from *Hollow Night Part III* and Darlene, who has seen all five films "to know the enemy", tells him that isn't what happens at all. Or when he squeezes his eyes shut at a scare. With trust, he admits it: *"I read the boxes. I've read ALL the boxes."*

## 3.3 THE CANOE DOCK (set piece)

Around 1:30 a.m., Jack Hollow comes to the camp. Run **`ENC_CAMP`** (`game/encounters.md`). The story tries harder than ever to split them: the ham radio's battery is in the boathouse (*someone* should go), a taken friend's voice calls from the swimming raft out in the fog, the mess hall's lights die, and Darlene says what the story wants her to say: *"We'd cover more ground if we split up."* Then she hears herself, and goes white. *"I didn't say that. Something said that."*

```
[IMAGE_TRIGGER]
ID: IMG_CANOE_DOCK
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Night at an abandoned summer camp on a foggy lake: a long wooden canoe
dock, upturned canoes, a swimming raft out in the mist; a red signal
flare arcing over the water lighting everything crimson; on the dock a
tight knot of teenagers in Halloween costumes back to back, a young woman
in an army jacket aiming a flare gun; at the shore end of the dock, the
tall scarecrow with a glowing carved pumpkin head walking slowly toward
them. Tense, eerie, a little funny.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- If they hold together, Jack walks all the way down the dock, stops an arm's length from the group, and **can't**. He stands there, close enough that they can feel the heat of the candle inside his head, and smell burnt sugar. Then he looks, very deliberately, at whoever is standing furthest from the others. Then he leaves. (The Group rule, proven beyond doubt.)
- If they split up, he takes whoever is alone with the highest TROPE.

## 3.4 WHERE THE TAKEN GO

After the dock, Darlene shows them what she's never shown anyone. From the camp's old fire tower (or through her army binoculars from the mess hall roof), across the lake and above the town: **the Pumpkin Patch**, a hillside field of a thousand lit jack-o'-lanterns. And, among them, shapes lying in the vines. Under the nearest jack-o'-lanterns, she's counted them every year. If anyone's been taken tonight, the player recognizes them (a werewolf mask, a homecoming sash, a cardigan).

- **The truth** (`DISCOVER_THE_TAKEN`): *"They're asleep. They're alive. The Committee calls them the harvest. If you get to them before sunrise, you can wake them. If you don't, they sleep till next Halloween, and wake up a year late with leaves in their hair."*
- **Why it matters, said plainly:** this is the goal now. Get to the Patch, wake whoever was taken, and end Jack Hollow if they can, all before **6:50 a.m.** The only road up to the Patch runs straight through **Hollow Pines**, where the all-night **Hollow Fest** is in full swing, and where the Committee is meeting.
- Darlene won't go into town (*"They know my face"*). She'll stay on the ham radio. Before they go she gives them one thing each: a flare, a box of matches, a road map with the Patch circled, and a piece of advice about Hank Pruitt, for Dale: *"He kept the flyers. That means he wanted somebody to find them."*

## Into town

The camp's old maintenance road runs down the hill into Hollow Pines. It's 2:30 a.m., and the town is still partying: music, orange lights, a hayride tractor going past full of people in pumpkin masks. **Record `REACH_TOWN`** (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **The player is the only one left** (every friend taken, none woken) and they reach sunrise hiding somewhere: `LAST ONE STANDING` (fetch `pack-end.md`).
- **They hide in the bell tower until sunrise** with everyone they have left, and never go to the Patch: `MADE IT TO MORNING`. Darlene makes it clear what that costs the taken.
- **The player is taken:** `I'LL BE RIGHT BACK`.
