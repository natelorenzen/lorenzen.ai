# DON'T SPLIT UP · PACK-4 · BUILD 1.0-3d0c3c8

Bundle for: Act IV begins (`REACH_TOWN`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-4.md =====

# ACT IV: HOLLOW PINES

*An all-night festival where everyone is dressed as the monster, a sheriff who doesn't believe teenagers, a committee in session, a corn maze built to split you up, and a real conversation with the thing in it.* Target: 12 to 16 minutes, 8 to 11 decisions. About 2:30 a.m. to 4:30 a.m.

**Route:** through the Hollow Fest → *the Sheriff* (optional) → Town Hall, where the Committee is meeting → the corn maze, the only way up the hill → *talk to Jack Hollow* (optional, but it's the hidden ending) → **the Pumpkin Patch**.

Load `world/jack-hollow.md` now.

---

## 4.1 THE HOLLOW FEST

Main Street at 2:30 a.m., and the party hasn't stopped. Orange lights strung between the lampposts, a cider stand, a haunted hayride, a bobbing-for-apples barrel, a cover band playing to forty people in folding chairs, and a banner across the street: ***HOLLOW FEST · 10 YEARS OF FRIGHTS!*** **Half the town is dressed as Jack Hollow:** cheap rubber pumpkin masks, farm coats, plastic sickles, gift-shop lanterns.

- **The real one is here too.** At some point the player sees a seven-foot Jack Hollow walking slowly down the middle of Main Street, through the crowd, with a real candle burning in his head. People cheer. Someone asks for a photo. He's the best costume they've ever seen. **A crowd counts as a group**, so the friends are safe here, as long as they stay in it. The moment someone steps into an alley alone...

```
[IMAGE_TRIGGER]
ID: IMG_HOLLOW_FEST
TYPE: MAJOR_REVEAL
STATUS: OPTIONAL (fire if the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A small-town main street at 3 a.m. strung with orange festival lights, a
cider stand and a hay wagon, a crowd of townspeople all wearing cheap
rubber pumpkin masks and farm coats; walking slowly down the middle of the
street through them, a real seven-foot scarecrow with a glowing carved
pumpkin head and a railroad lantern, a man in a cheap pumpkin mask
giving it a thumbs up; at the edge of the crowd the teenagers in costume,
frozen. Funny and deeply unsettling.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```
- **Full-size bars** (`ACH_FULL_SIZE_BARS`, `trick_or_treat`): the Fest runs an all-night "Trick-or-Treat Trail", and one house on Elm Street, everybody knows, gives out **full-size candy bars**. Going costs half an hour. Wendell: *"We are in a massacre."* Dale: *"A massacre with full-size bars."*
- **Earl** is here, if the player won him over in Act I (`SOCIAL_EARL`), running the cider stand and looking haunted. He'll tell them where the Committee meets: *"Town Hall. Back room. Every year at three. They have donuts."* If they didn't win him in Act I, they can win him now.

## 4.2 THE SHERIFF (optional)

**Sheriff Buck Dunlap** (`characters/npcs.md`) is directing parking with a light-stick, aviators on, at 2:45 in the morning. *"Lemme guess. Monster in the woods. Friend went missing. You saw a guy with a pumpkin head. Kid, there are four hundred guys with pumpkin heads in this town tonight."*

- **Making him believe** (`SOCIAL_SHERIFF`) takes real evidence and the right approach: Courtney's tape (Lyle in the crawlspace, Jack at the cabin window), the flyers with the Committee's fine print, Darlene on his radio (he went to high school with her, and he's always felt bad about not believing her), or Jack himself walking past at exactly the wrong moment. Shouting, panicking or lying makes it harder. A Skeptic speaks his language.
- **If he believes:** he takes the aviators off. *"Twenty-two years, I've never once believed a teenager. Don't tell anybody."* He gives them the squad car's radio, the keys to the **fire bell** on the town square (it can call the whole town out, and a whole town is a very big group), and he goes to Town Hall with them. He's not on the Committee. He's going to be furious.

## 4.3 THE COMMITTEE

**Town Hall**, the back room, 3:00 a.m. A folding table, a pumpkin-shaped binder, a box of donuts, a coffee urn, and a banner: *HALLOWEEN COMMITTEE · ANNUAL HARVEST REVIEW.* Around the table: **Mayor Peggy Pumphrey** in her pumpkin cardigan, **Agnes Croft** the librarian taking minutes, **Harlan Beck** of the hayride and corn maze, and (if he got away from the cabin) **Lyle**, shaking.

The friends can listen at the door, sneak in through the archive, or walk right in. The meeting is incredibly mundane, and that's the horror. Item 1: parking. Item 2: the hayride's insurance. **Item 3: "This year's visitors."** Agnes reads out the names from the flyers. Harlan asks if "the harvest is on schedule". The Mayor checks her watch. *"Sunrise at six fifty. Then it's done for another year, and we've got the best October numbers in the state. Again."*

- **The Committee** (`DISCOVER_THE_COMMITTEE`): heard or seen, the truth is out. They feed Jack Hollow one group of out-of-towners every Halloween. Every "incident" brings more tourists the next year. *"Nobody dies,"* says the Mayor, sincerely. *"They sleep. They wake up next year, perfectly healthy, a little confused. That's a nap, Agnes. Nobody ever went to prison for a nap."*
- **Courtney's moment** (`ALLY_COURTNEY_TAPE`): if Courtney's here and the camcorder's rolling, she gets all of it. *"And... we're rolling."* It's the only proof that will ever exist, and it opens `FOUND FOOTAGE`.
- **The archive** (through a door behind the coffee urn, or with the librarian's keys): the town's history in filing cabinets.
  - **The origin** (`DISCOVER_THE_ORIGIN`): the **1969 Tourism Board brochure**. On its cover, a friendly cartoon scarecrow with a jack-o'-lantern head, holding a bundle of autumn leaves, waving: ***"JACK SAYS: COME FOR THE LEAVES!"*** Beside it, **the 1979 minutes**: *"Motion to make Jack scary. Ticket sales. Carried 4–1 (Pruitt opposed)."* A box of *Hollow Night* VHS tapes, all five films, and a 1985 note in the Mayor's handwriting: *"Every time they show the movie on TV, he gets stronger. Good."* The story made him. Twenty years of a whole town (and a whole country with a VCR) believing it made him real, and made him **follow the story's rules.**
  - **The first lantern** (a clue for Act V, `game/puzzles.md`, *Puzzle 3*): the 1969 brochure shows the mascot's first jack-o'-lantern up close. A **white** pumpkin, a **crescent-moon** left eye, a **star** right eye, and a smile with exactly **three teeth**.
  - **The stinger** (`DISCOVER_THE_STINGER`): the official text of the legend, framed on the wall, revised in 1980. Its last line was added in a different typeface: ***"...and he'll be back next Halloween!"*** A sticky note: *"Repeat business! — P.P."* That line is why he always comes back. Anyone who thinks about it can see it: **if the story always ends that way, he can't end.** Changing the last line of the story is the only way to stop the sequel.
- **The Mayor's offer** (when they're caught, or confront her): she's not even angry. She's delighted. *"Do you know what Hollow Pines was before Jack? A bypass. A gas station and a bait shop."* She offers the player a **Season Pass**: a seat on the Committee, a house on the lake, and **one** of their taken friends woken, "as a courtesy", if they'll help bring next year's visitors. (Accepting is `SEASON PASS`; see `game/endings.md`.)
- **Outplaying her** (`SOCIAL_MAYOR`): exposing her to the Sheriff, turning Agnes or Harlan against her, ringing the fire bell so the whole town hears it, or bluffing that Courtney's tape is already on its way to *Unexplained Tonight!* Lyle will crack instantly under any pressure. If she's outplayed, the Committee can't stop the friends getting to the Patch (and someone opens the corn maze's service gate for them, which makes `ENC_MAZE` easier).

## 4.4 THE CORN MAZE (set piece)

**Harlan Beck's Haunted Corn Maze**, three acres of corn ten feet tall on the hill between town and the Patch, *"THE MAZE THAT SPLITS YOU UP!"* (it's on the sign, it's their slogan). The road up the hill is blocked by the hayride tractors, and the maze is the only way. At 3:45 a.m. it's empty, lit with paper lanterns, and **Jack Hollow is in it.**

Run **`ENC_MAZE`** (`game/encounters.md`). The maze is literally designed to split groups: forks every twenty feet, paths that narrow to single file, hidden doors that swing shut between people, scarecrows everywhere (most of them just scarecrows). Holding hands helps. Rope helps more.

```
[IMAGE_TRIGGER]
ID: IMG_CORN_MAZE
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A towering corn maze at night seen from above at an angle, paper lanterns
glowing along narrow paths, dozens of identical harmless scarecrows on
poles; in one corridor a group of teenagers in Halloween costumes holding a
rope between them in a tight line; two corridors over, unseen by them, the
real seven-foot scarecrow with a glowing carved pumpkin head and a
railroad lantern walking slowly, its light spilling through the stalks;
on the hill above, a field of a thousand tiny jack-o'-lantern lights.
Eerie, suspenseful, a little absurd.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **Dale's moment** can happen here (`ALLY_DALE_COMES_BACK`): if the group is cornered, Dale (if he's here) pulls his werewolf mask down, grabs his cassette of prank sound effects, and says it: *"I'll be right back."* Everyone screams *no*. If his trust is 1 or more and the player gives him something to hold onto, he leads Jack away into the corn with a werewolf howl on a boom box, and a minute later he walks back out of the corn on the far side. *"Told you."* (Otherwise, he's taken. He meant it. The story didn't.)

## 4.5 A REAL CONVERSATION WITH JACK HOLLOW

At the center of the maze, in a clearing, stands the **original 1969 mascot statue**: a fiberglass cartoon scarecrow, peeling, smiling, holding a bundle of painted leaves, one hand raised in a wave. Jack Hollow, when he reaches it, **stops**. He stands in front of it for a long time.

**Always offer it:** after the maze (or here, if they reach the center together), make it option A of the next menu (*"Talk to him. All of you, together, from right here."*), since players rarely think to talk to the monster. A group of three or more is safe, so this is the one safe moment to try.

- If they speak to him as a person, not a monster (asking what he wants, what he's looking at, if he's tired), Jack Hollow speaks for the first time: a dry rustle, like leaves in a gutter. See `world/jack-hollow.md` for what he says. A sincere conversation is `SOCIAL_HOLLOW_TALK`. The truth of it is `DISCOVER_HOLLOW_WISH`. That opens the hidden ending, `COME FOR THE LEAVES`.
- A Weirdo can feel the sadness in the candle. A Skeptic can see the sickle has never been sharpened. A Nerd knows the scene: *"This is the part where the monster turns out to be sad, and everyone ignores it."* Anyone patient can simply ask.
- Threatened or attacked, he just walks away, back toward the Patch.

## The top of the hill

About 4:30 a.m. The corn ends at a split-rail fence, and beyond it, the **Pumpkin Patch** spreads up the hillside under the stars: a thousand jack-o'-lanterns, every one lit, and the vines moving very slightly, like breathing. **Record `REACH_PATCH`** (it's sent with everything else at the end) and fetch the Act V pack.

---

## Exceptions

- **They take the Season Pass:** `SEASON PASS` (fetch `pack-end.md`).
- **They skip the Patch and get Courtney's tape out of town** (on the Sheriff's radio, or driving it to the TV station two towns over before sunrise): `FOUND FOOTAGE`.
- **Someone offers themselves to Jack** so the others can get up the hill (walking out alone into the corn on purpose, to draw him): if it's the player, it's `SOMEBODY HAS TO GO BACK`. If it's a friend, they're taken, and it counts.
- **The player is taken:** `I'LL BE RIGHT BACK`.

===== FILE: world/jack-hollow.md =====

# DON'T SPLIT UP: Jack Hollow

Loaded at Act IV. This is the truth about the monster.

## What he is
- **A story that came true.** In 1969 the Hollow Pines Tourism Board drew a friendly cartoon scarecrow with a jack-o'-lantern head to sell autumn leaf-peeping weekends: *"Jack says: Come for the leaves!"* In 1979 the brand-new Halloween Committee made him scary to sell hayride tickets. In 1981, a low-budget film, *Hollow Night*, was made from the legend, and four sequels followed. Twenty years of a whole town telling the story, and a whole country renting the tapes, made him real (`DISCOVER_THE_ORIGIN`).
- **Because he's made of a story, he obeys the story.** He walks and never runs. He can only take people who are alone. He takes whoever is playing their trope hardest. He can't cross a line of salt or pass a lit pumpkin carved with a smile (that was in the 1969 brochure: "a smiling Jack keeps the harvest safe"). He stops at sunrise. And every year, he comes back (`DISCOVER_THE_STINGER`).
- **His heart is a candle**, burning in the first jack-o'-lantern ever carved for him, which sits somewhere in the Patch among a thousand others (`game/puzzles.md`, *Puzzle 3*). The candle in his head is only its reflection. Snuff the first lantern before sunrise, and he falls.
- **He doesn't hurt anyone.** He takes people into the dark and lays them down asleep in the Patch, under a lantern each, because the story says "and they were never seen again", and that's the closest he can get. The sickle has never been sharpened.

## What he actually wants (`DISCOVER_HOLLOW_WISH`)
- He remembers the brochure. He was drawn holding leaves, waving at children. He doesn't want the sickle, the dark, or the harvest. He's been doing what the story says for ten years because it's the only story anyone tells about him.
- **He wants the story to change.** He wants to be the scarecrow on the brochure again: to stand in a field, wave at the hayride, and hand out leaves.
- He will only say this to a group that talks to him like a person, and doesn't threaten him.

## How he talks
He doesn't, until Act IV. Then: short, dry sentences, a voice like leaves in a gutter. *"They gave me this."* (the sickle) *"I was holding leaves."* *"Every year they tell it the same way. I have to do what it says."* *"Is it the part where you run now?"* Asked what he wants: a long silence, and then, *"Wave."*

## The hidden ending
If the friends **change the story** (telling it a new way, out loud, to enough people: over WHOL 1350 from the Sheriff's radio, to the whole town with the fire bell, or on Courtney's tape played on the Fest's big screen), with a new last line that gives Jack his leaves back, it's `COME FOR THE LEAVES`. That needs `DISCOVER_HOLLOW_WISH` and `SOCIAL_HOLLOW_TALK`. It's the only ending in which the monster gets a happy ending too.
