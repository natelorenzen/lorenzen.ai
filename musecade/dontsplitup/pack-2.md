# DON'T SPLIT UP · PACK-2 · BUILD 1.0-3d0d253

Bundle for: Act II begins (`REACH_CABIN`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: CABIN 13

*The cabin, the cellar, the book you shouldn't read, the first person to say the line, the set behind the set, and midnight.* Target: 13 to 17 minutes, 9 to 12 decisions. Halloween, 9:30 p.m. to about 12:30 a.m.

**Route:** settle into the cabin → the first taking (somebody wanders off) → find out the cabin is a set → midnight: Jack Hollow at the cabin → out through the set's back door, across the lake to **Camp Crescent**, where a light is burning.

Load `world/hollow-pines.md`, `game/puzzles.md` and `game/encounters.md` now.

---

## 2.1 THE CABIN

Inside, Cabin 13 is a horror movie set dressed by someone who has seen a lot of horror movies, because it was. A stone fireplace. A moose head with one eye. Cobwebs in every corner, very even. A dusty rocking horse. A trapdoor in the floor with a padlock, and the key hanging right next to it on a nail. On the table: a **reel-to-reel tape recorder** and, under a sheet, **a book**: leather-bound, a face on the cover, the title in gold, ***LIBER HOLLOWUS***, and a handwritten note tucked into it: *DO NOT READ ALOUD.*

**The goal, said plainly by Courtney (or Wendell, if she isn't here):** *"Okay, so we either have the best Halloween party in history, or we figure out what's going on with this place before something figures us out first."*

- **The party.** It's still Halloween. Dale has a boom box, Courtney films a "tour", Wendell refuses to sit with his back to a window. Let the friends be funny, and let the cabin keep offering clichés: a creak upstairs (there is no upstairs), the tape recorder clicking on by itself, the lights dimming, the phone (there's a phone? there's a phone) ringing once and going dead.
- **The book.** Anyone who reads it out loud (`read_the_latin`, +2 TROPE, and `ACH_DIDNT_READ_IT` is lost) hears the wind outside stop. Every candle in the room leans toward the door. It's nonsense Latin from a craft store (`DISCOVER_FOG_MACHINES` clue: there's a price sticker inside the back cover, *$4.99, Hollow Pines Gift Shop*), and it still works, because the story says it works. Far off in the woods, something answers with a sound like a pumpkin being split.
- **The tape.** Played, it's a man's voice, very calm: *"If you are hearing this, you have been chosen. Stay in the cabin. Do not try to leave. Do not split up."* Then, as if he's forgotten the tape is running, the same voice says something else, muffled, to someone off-mic: *"Is that the good fog or the cheap fog?"* (a clue: it's Lyle).

## 2.2 THE FIRST TO GO

Around 10:30 p.m. the story finds its first victim. **Somebody wanders off.** Whoever is alone with the highest TROPE: usually **Dale**, who goes to get firewood from the shed (*"I'll be right back"*), or **Courtney**, who goes out on the dock to film the mist, or the player, if they've been playing their part. Let the player see it building, with chances to stop it.

- **If the player stops it** (calls it, goes along, keeps the group at three or more): Jack Hollow appears anyway, for the first time, at the edge of the light. Seven feet tall, a lit jack-o'-lantern head, a lantern, a sickle. He stands. He tilts his head. He watches the group of them. **He doesn't come closer.** After a long moment he walks back into the trees. (First proof of the Group rule.)
- **If someone goes alone:** a short, terrifying sequence the player hears and doesn't see: the shed door, a dropped flashlight, a werewolf mask lying in the leaves. **Cut away.** They're taken. The friends left behind should feel it. Track it (`taken`), and don't say where they went (`DISCOVER_THE_TAKEN` isn't until Act III).
- **Dale's story** (`DISCOVER_DALE_GRANDPA`): with Dale still here and trust 1 or more, or after the glovebox, Dale tells them: his grandpa ran the summer camp across the lake in 1979, and came home "with half of him missing". The flyers were in Grandpa's shoebox. *"I wanted to know what happened. I didn't think it'd... happen."*

## 2.3 THE SET BEHIND THE SET (puzzle)

Something's off about Cabin 13, and once the player notices, they can't stop noticing. The cabin is a **set**, and it has a crew. Run `game/puzzles.md`, *Puzzle 1: Behind the Set*. The short version: there's a man in the crawlspace running the effects, a stagehand tunnel behind the cellar shelves, and a way out the cabin's makers never meant visitors to use.

- **What they find** (`DISCOVER_FOG_MACHINES`): two fog machines, a speaker in the chimney, a reel of *Spooky Sounds Vol. 2*, a gallon jug of corn-syrup blood, a box of plastic bones, and **Lyle Pettibone** (`characters/npcs.md`) in a utility vest, with a headset, hiding very badly. He's terrified, and not of them. *"I just do the fog. I just do the FOG."* He knows the cabin is dressed by the **Hollow Pines Halloween Committee**. He won't say more (he's more scared of the Committee than of the player), but he'll babble one true thing to someone kind: *"He's real. The fog's fake and he's real. That's the joke. The fog was never for you. It's so we don't have to see him work."*
- Lyle runs off down the tunnel, or is taken by Jack if he runs off **alone** with the player watching. The story doesn't care whose side you're on.
- A NERD's *I've Seen This One*: *"This is the scene where we find out it's all fake, and it isn't."*

## 2.4 MIDNIGHT (set piece)

At midnight, every clock in the cabin stops. The fog machines turn themselves on. Every pumpkin on the porch lights at once, by itself. And **Jack Hollow** comes to Cabin 13. He knocks, three slow knocks, with the lantern. Then he walks around the cabin, window by window, and the friends inside watch his pumpkin head pass each one.

Run **`ENC_CABIN`** (`game/encounters.md`). He's trying to make them split up: lights going out room by room, a voice from the cellar that sounds exactly like a taken friend (*"Guys? I'm down here. I'm okay. Come down. Just one of you."*), the back door swinging open onto the dark, a second set of footsteps on the roof.

```
[IMAGE_TRIGGER]
ID: IMG_CABIN_MIDNIGHT
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Night, a log cabin by a black misty lake, its windows lit amber, every
pumpkin on the sagging porch glowing at once; outside a window, a
seven-foot scarecrow figure in a rotted farm coat with a huge carved
glowing jack-o'-lantern head, a railroad lantern in one hand; inside the
window, the teenagers in Halloween costumes pressed together in a tight
group staring out, one holding a huge shoulder camcorder with a red light.
Classic slasher poster composition, scary and a little funny.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **The voice in the cellar** is the trap. Going down alone is TROPE +1 and very dangerous. Going down as a group of three or more is safe, and it's how they find the stagehand tunnel if they haven't already.
- When the night is survived, a bell rings across the lake: someone at the old **Camp Crescent** is ringing the camp bell, and a single light is burning in the mess hall. Courtney: *"Either that's help, or that's the next scene."* Wendell: *"It's always both."*

**Getting out:** through the stagehand tunnel to the boathouse, then a rowboat (or the canoe Lyle left) across the black water to the old camp. Rowing across is a short, eerie crossing (a pumpkin floating past them, lit; Jack Hollow standing on the cabin's dock behind them, watching, not following; he doesn't need to). A roll only if they do something reckless.

**12:30 a.m., the far shore.** **Record `REACH_CAMP`** (it's sent with everything else at the end) and fetch the Act III pack.

---

## Exceptions

- **They drive away** (the van starts this time, for exactly one try, if the Jock pushes or the Skeptic fixes the choke): `NOPE`, from Act I's exception. Tell what happened to anyone left behind.
- **The player is taken** (alone at TROPE 4 or more, or a miss by 5+ on a telegraphed roll): `I'LL BE RIGHT BACK`.

===== FILE: world/hollow-pines.md =====

# DON'T SPLIT UP: The Map

Hollow Pines and Crescent Lake, a small invented town in the pine woods. Every place, business, film and person is fictional.

## Travel times (sunset to sunrise: 7:40 p.m. to 6:50 a.m.)
| Leg | Time |
|---|---|
| County Road 9 to the Last Chance Gas & Bait | 20 minutes |
| The gas station to Cabin 13, up the lake road | 40 minutes |
| Rowing across the lake to Camp Crescent | 30 minutes |
| Around the lake on foot, the long way | 1.5 hours |
| Camp Crescent down the maintenance road into town | 45 minutes |
| Through the Hollow Fest to Town Hall | 30 minutes |
| Trick-or-treating on Elm Street | 30 minutes |
| Through the corn maze to the Patch | 45 minutes to 1.5 hours |
| Waking one sleeper in the Patch | 15 minutes |

A reasonable run reaches the Patch around 4:30 to 5:00 a.m. **Sunrise is at 6:50.**

## Places
- **County Road 9:** two-lane blacktop through the pines, fog in the low spots. The thing in the road.
- **The Last Chance Gas & Bait:** one pump, live bait, pumpkins everywhere, **Earl** and his cue cards.
- **Cabin 13, Crescent Lake:** a log cabin dressed as a horror set by the Committee: spray-can cobwebs, corn-syrup blood, a gift-shop book, a reel-to-reel, two fog machines, a speaker in the chimney, a cellar with a stagehand tunnel to the **boathouse**, and Lyle in the crawlspace.
- **Crescent Lake:** black water, mist, a floating lit pumpkin or two.
- **Camp Crescent:** closed since 1979. Cabins, a flagpole, an archery range, the **canoe dock**, a swimming raft, the **bell tower**, and the **mess hall**, where **Darlene** lives behind tripwires.
- **Hollow Pines:** Main Street strung with orange lights for the all-night **Hollow Fest**: a cider stand, a cover band, the haunted hayride, bobbing for apples, and half the town dressed as Jack Hollow. **Elm Street** (full-size bars). **The town square** with its old **fire bell**. **Town Hall**, with the Committee's back room and the archive. **WHOL 1350**, the AM station, broadcasting the Fest all night from a booth on the square.
- **Harlan Beck's Haunted Corn Maze:** three acres on the hill between town and the Patch. *"THE MAZE THAT SPLITS YOU UP!"* Paper lanterns, a lookout tower, and at the center, the **1969 mascot statue**.
- **The Pumpkin Patch:** the hillside above the maze. A thousand lit jack-o'-lanterns, vines that move, the taken asleep in the rows, and somewhere halfway up, by the split-rail fence, **the first lantern**.

## The movies (all invented)
*Hollow Night* (1981), made on a shoestring from the town's legend, and its sequels: *Hollow Night II: The Harvest* (1983), *Hollow Night III: Back to Camp* (1985), *Hollow Night IV: The Hollowing* (1987) and *Hollow Night V: Jack's Back* (1989, in theaters now). The friends know them from **Video Vault**, the video store on Route 6. Other invented films the friends can mention: *Slumber Party Scream*, *Don't Go in the Boathouse*, *The Prom That Bled* (it's just punch), and *Night of the Long Cardigans*. Never name a real film.

===== FILE: game/puzzles.md =====

# DON'T SPLIT UP: Puzzles

Three puzzles: environmental (the cabin), deductive (the Rules) and observational (the first lantern). Never give the answer. Answer questions truthfully, from what the character could notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8. Every puzzle has a fallback that moves the story on, at a cost.

---

## PUZZLE 1: BEHIND THE SET (environmental · Act II)

**The question:** what's really going on in Cabin 13, and how do you get out of it with the doors and windows stuck and something walking around outside?

**The mechanism** (observed, not told):

| Observation | What it means |
|---|---|
| The cobwebs are perfectly even, and smell like hairspray | spray-can cobwebs: someone dressed this room |
| The "blood" on the wall is sticky and smells like pancakes | corn syrup and red food coloring |
| The howling wind comes from **inside the chimney**, and loops every 40 seconds | a speaker, with a cord |
| An **orange extension cord** runs from the chimney, under the rug, to the cellar trapdoor | the effects are run from below |
| A price sticker inside the back cover of the book: *$4.99, Hollow Pines Gift Shop* | the "ancient" book is a souvenir |
| The cellar shelf of preserves has **a draft** coming through it, and the jars are glued down | a hidden door |
| Footsteps under the floor when nobody's in the cellar, and a sneeze | someone is in the crawlspace |

- **Solution:** follow the cord. In the cellar, behind the glued-down shelf of preserves, is a **stagehand tunnel** (Lyle's way in and out, lined with fog-machine fluid and spare plastic bones) that runs a hundred feet to the boathouse. A Skeptic's *That's Fake* finds the shelf at once; a Jock can rip it off the wall; Courtney's camcorder playback shows the cord; a Weirdo notices the candles lean toward the shelf.
- **Solved** (they work out the cabin is a set and use the crew's own way out): `PUZZLE_CABIN_SOLVED`, plus `PUZZLE_CABIN_NO_HINT` if unaided, plus `DISCOVER_FOG_MACHINES`. Jack Hollow still comes at midnight (`ENC_CABIN`), but now they know where the back door is.
- **Fallback** (after the third hint): at midnight Jack breaks the front window and they have to go out the back into the woods and around the lake the long way. It costs an hour, someone twists an ankle, and there are no puzzle events.
- **Going down alone** to check the cellar is a trope (+1 TROPE). Going down as three is safe.

---

## PUZZLE 2: THE RULES (deductive · Acts II–III)

**The question:** what can Jack Hollow do, and what can't he? The players have to work it out from what they've seen, not from Wendell's notebook (which is about 70 percent right).

**The answer:** three rules.

1. **The Group rule:** he can only take someone who is **alone** (or one of only two). Three or more together, and he can't touch any of them.
2. **The Casting rule:** of the people alone, he takes whoever is **playing their part hardest**: the highest TROPE.
3. **The Smile rule:** he can't pass a **lit jack-o'-lantern carved with a smiling face**, or a line of salt. (A scary face doesn't work. The 1969 brochure said "a smiling Jack keeps the harvest safe.")

**The evidence:**

| Clue | Where | Points to |
|---|---|---|
| Earl, off script: *"Three's the number."* | Act I, gas station | the Group rule |
| Jack watches the group at the cabin's edge and doesn't come closer; he takes the one who wandered off | Act II, 2.2 | the Group rule |
| Whoever was taken had been saying the lines, going toward noises, filming alone | Acts II–III | the Casting rule |
| Jack walks all the way down the canoe dock to the group, and **can't**; then he looks at whoever is standing furthest away | Act III, 3.3 | Group and Casting |
| Darlene's 1979 story: three of them in the bell tower all night, untouched | Act III, 3.1 | the Group rule |
| Darlene's cork board: every visitor taken in ten years was alone when it happened | Act III, 3.2 | the Group rule |
| Cabin 13's porch has carved pumpkins: the scary ones stayed lit when he passed; one smiling one, carved by a little kid years ago, **he walked around** | Act II | the Smile rule |
| Darlene's mess hall door has a faded smiling pumpkin painted on it. *"Mr. Pruitt painted that. He never told me why."* | Act III | the Smile rule |

- **Solved:** state the Group rule and at least one of the other two, with reasons: `PUZZLE_RULES_SOLVED`, plus `PUZZLE_RULES_NO_HINT` if unaided. Once it's solved, say it plainly back (`rules.md` §3), and make every later set piece about the story trying to split them up.
- **Fallback:** Darlene says the Group rule outright at the end of Act III (*"Three. Always three. That much I know."*). No puzzle events.
- **Wendell's wrong rule:** he is sure that *"the monster can't cross running water"*. It can. Let him be wrong about it once, harmlessly, in a funny way.

---

## PUZZLE 3: THE FIRST LANTERN (observational · Act V)

**The question:** of a thousand lit jack-o'-lanterns in the Patch, which one holds Jack Hollow's heart?

**The answer:** the first one ever carved for him, for the 1969 brochure photo: a **white** pumpkin, a **crescent-moon** left eye, a **star** right eye, and a smile with exactly **three teeth**. It sits halfway up the hill, near the old split-rail fence. Its flame **doesn't lean** uphill like all the others.

**The clues, gathered across the game:**

| Clue | Where | Gives |
|---|---|---|
| **The 1969 brochure** in the town archive, with a close-up of the mascot's jack-o'-lantern | Act IV, the archive | moon, star, three teeth, and that it's pale |
| **Earl**, if won over: *"I carved the first one. For the photo. I was nineteen. White pumpkin, 'cause they photographed better. Gave it three teeth, 'cause that's how many I had left after the rodeo."* | Act I or Act IV | white, three teeth |
| **Darlene**: *"Every year, the first light to come on up there is halfway up the hill. And it never flickers. Not once in ten years."* | Act III | where, and that it's steady |
| **Wendell**, from the *Hollow Night* box: *"The first lantern has four teeth."* (He's wrong: the movie changed it.) | any time | a decoy |
| In the Patch, **Jack Hollow** keeps turning his head toward one spot on the hill | Act V | where |

**Decoys in the Patch:** dozens of white pumpkins; several with a moon and a star, but four teeth (the movie version, carved by fans); one with three teeth and two stars.

- **Solved:** the player finds it by reasoning (at least two features, or the steadiness plus one feature) and snuffs it: `PUZZLE_LANTERN_SOLVED`, plus `PUZZLE_LANTERN_NO_HINT` if unaided.
- **Fallback:** snuff them one by one. Each wrong lantern takes time (ten minutes per handful) and makes Jack take a step closer to whoever is furthest from the group. A Weirdo can feel the right one, warm in the cold, at a cost (Shaken). No puzzle events, but snuffing it this way still works.
- **The hidden ending doesn't need it.** `COME FOR THE LEAVES` changes the story instead of snuffing the candle.

===== FILE: game/encounters.md =====

# DON'T SPLIT UP: Set Pieces

Slasher set pieces with no gore. Every set piece follows `core/dm-core.md` §6: three approaches as a lettered menu, a d20 at the turning point, and it must **cost or reveal** something. A miss by 1 to 4 costs a harm level, time, or a friend's TROPE rising. **In every one, the story is trying to split them up.** Make the reason to split good, and honor it if they take it.

## Rules
1. Open with dread, played straight, plus one usable detail (a bell, a flare, a coil of rope, a smiling pumpkin).
2. **Three approaches (A, B, C, plus D. Other):** **hold** (barricade, stand together, face him), **run or hide** (out the back, under the dock, into the corn), **turn the ground** (use the setting: fog machines, flares, the fire bell, the corn).
3. **Paths pay off:** the Jock holds the door, the Nerd calls the scene before it happens, the Skeptic sees which scare is fake, the Weirdo lays down the Old Ways.
4. **Jack Hollow is never fought and beaten.** He can be held off, outwitted, walled out, or walked away from. Hitting him does nothing much (straw, leaves); a Jock's bat sticks in him like a pitchfork in a hay bale.
5. **Nobody is hurt on screen.** The worst is a twisted ankle, or being taken: cut away.

---

## Cold open: the thing in the road (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_CABIN: Midnight at Cabin 13 · SET PIECE (Act II)
- **Threat:** Jack Hollow circling the cabin window by window; lights dying room by room; a taken friend's voice from the cellar; the back door swinging open by itself.
- **Terrain:** the cabin, the cellar and the stagehand tunnel, the fog machines, the porch pumpkins, the reel-to-reel, the van out front (which won't start).
- **Menu example:** "Pull everyone into the main room, back to back, and keep every light on." / "Out through the stagehand tunnel to the boathouse, now." / "Crank both fog machines and slip out the back under cover of Lyle's fog."
- **Reveals:** the Group rule (he can't come in to a group), the Smile rule (the one smiling pumpkin). **Costs:** whoever answers the voice alone, or an ankle on the way out.

## ENC_CAMP: The Canoe Dock · SET PIECE (Act III)
- **Threat:** Jack Hollow walking down the long dock; a voice from the swimming raft; the radio battery that someone "has to" fetch from the boathouse; Darlene saying *"we'd cover more ground if we split up"* without meaning to.
- **Terrain:** the canoe dock, upturned canoes, the swimming raft in the fog, the boathouse, the bell tower, Darlene's flare gun and tripwires.
- **Menu example:** "Stand together at the end of the dock and let him come." / "Into the canoes, all of you in one, and out onto the lake." / "Fire the flare into the boathouse's old gas cans and wall him off with light."
- **Reveals:** the Group rule beyond doubt; where the taken go (afterward). **Costs:** time, a canoe, or a friend who goes for the raft.

## ENC_MAZE: The Corn Maze · SET PIECE (Act IV)
- **Threat:** Jack Hollow in three acres of corn; forks every twenty feet; paths that narrow to single file; hidden doors that swing shut between people; dozens of harmless scarecrows.
- **Terrain:** the corn, paper lanterns, the maze's lookout tower, Harlan's service gate, a hay wagon, and at the center the 1969 mascot statue.
- **Menu example:** "Tie yourselves together with rope and walk the left wall, slowly." / "Climb the lookout tower and call the route down to the others." / "Set the hay wagon rolling down the main path and follow the gap it smashes."
- **Reveals:** Jack at the statue (the talk); Dale's moment, maybe. **Costs:** time, rope burns, or whoever lets go of the rope.

## ENC_PATCH: The Patch (Act V)
- **Threat:** Jack Hollow walking the rows; vines that pull one person sideways; mist between friends; the Committee's tractor, if the Mayor wasn't outplayed.
- **Terrain:** a thousand jack-o'-lanterns, the sleepers in the vines, the split-rail fence, the hilltop, the sunrise coming up behind the lake.
- **Menu example:** "Link arms, all of you, and wake the sleepers one row at a time." / "Split the job: one group wakes friends, one hunts the first lantern." (the story's favorite) / "Ring the town's fire bell and bring all of Hollow Pines up the hill."
- **Reveals:** whether they can let go (the TROPE roll), and whether they know about the stinger.
