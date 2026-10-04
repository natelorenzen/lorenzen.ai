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
