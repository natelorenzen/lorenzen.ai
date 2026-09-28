# ACT I: THE NEW GIRL

*A bonfire, a chase, a note on her pillow, and an island where everybody stops talking when she walks in.* Target: 11 to 15 minutes, 7 to 10 decisions. Sunday night to Monday night.

**Route** (each scene's goal is the status line's `NEXT`): survive the bonfire → find the note on her pillow → the breakfast shift and Aunt Bea → the bakery crowd → Preston Vale comes by → **the dead lighthouse, "where the light used to be"**.

---

## 1.0 COLD OPEN: THE BONFIRE (the tutorial)

**Open with action, straight after the path tag.** It's easy, nobody gets hurt, and it teaches the game in 4 or 5 decisions.

**The scene:** Sunday night, her first night on Halcyon. Aunt Bea sent her down to the cove with a plate of cookies "to make friends", which is humiliating. A bonfire on the beach, a speaker playing something loud, thirty kids who all know each other. A girl in a blazer is filming (**Priya**, *the one with the podcast*). A freckled girl with copper curls waves like they're already friends (**Jules**, *who knows everyone*). And up on the point, black against the stars, the **dead lighthouse**, where a flashlight beam flicks on, sweeps once across the beach, and stops on *her*.

- **Path spotlight**, one line for this path only:
  - SLEUTH: *nobody else looks up. Either they're used to it, or they're pretending.*
  - CHARMER: *the loud boy by the cooler goes quiet when the light comes on. He knows something.*
  - ATHLETE: *the tide's out. The rocks below the point are a staircase right now. In an hour they won't be.*
  - PHOTOGRAPHER: *the beam is warm yellow, not LED white: an old flashlight, or an old person's.*

**Beat 1: the first menu.** The light clicks off. A figure moves on the lighthouse gallery. End the turn with a lettered menu. For example:
- **A.** Go after the light, up the rocks, right now.
- **B.** Ask Jules what's up there, loudly enough that everyone hears.
- **C.** Hand out the cookies and watch who looks at the lighthouse.
- **D.** Other: type your own

```
[ TIP · Type A, B or C to choose, or type anything you can imagine. The options are a shortcut, never a limit. ]
```

**Beat 2: the first roll.** Whatever she does, the figure runs. The chase across the wet rocks is an **easy d20 (DC 8)**, shown openly, then:

```
[ TIP · Easy things just happen. When it really matters, the d20 decides how well. +2 when it fits who you are. ]
```

**Beat 3: everyone saw.** She reaches the foot of the point. The figure is gone, somewhere out on the dark rocks toward the water. Behind her, thirty kids are staring. Someone says, not quietly: *"New girl's been here two hours and she's already chasing Sadie's ghost."* **Whispers becomes 1.**

```
[ TIP · WHISPERS is how much the island is talking about you (0 to 5). Loud questions and getting caught raise it. Too high, and someone does something about you. ]
```

**Beat 4: the move.** A boy with a lifeguard whistle (**Mason**, *a rich summer kid, Sadie's old crowd*) blocks her way back up the beach and wants to know what she thinks she's doing. Jules says, under her breath: *"This is literally your thing."* Let her path move work, cleanly. This one is free: the move is ready again for the rest of Act I.

```
[ TIP · Your MOVE works once per act, no roll: THE TELL, OFF THE RECORD, NO WAY BACK or ZOOM IN. It's how you win without luck. ]
```

**Beat 5: the pillow.** Back at the inn, past midnight. Her room under the eaves smells like cedar and salt. On her pillow: a piece of **blue sea glass**, wrapped in a note in round, looping handwriting (the `g`s have a little flick at the end): *"I'm eighteen now. They're all lying. Start where the light used to be."* Under it, a sheet of newspaper, one year old: **MISSING: SADIE VALE, 17.** There's a faint dusting of **flour** on the pillowcase (a clue: `DISCOVER_MARGUERITE_SECRET`, much later). Print the first status line.

```
[ TIP · The status line shows the day, your WHISPERS and where you're headed. Type STATUS, WHO or RECAP anytime. Ask anyone anything. SAVE GAME keeps your place. ]
```

**Rules:** no harm here. A miss costs something small: a soaked sneaker, a scraped palm, Mason's smirk. Tips appear only here, and can be skipped.

---

## 1.1 MONDAY MORNING: THE SEA GLASS INN

Load `characters/companions.md` and `characters/npcs.md` now (they're already in this pack).

6 a.m. The breakfast shift. **Aunt Bea** (*your mom's sister, who runs the inn*) is already three pots in. The Sea Glass Inn is a shingled Victorian on the bluff above the harbor, eleven rooms, a porch that sags, a glass jar of sea glass by the front desk for guests to add to, and a view straight across to the dead lighthouse and, beyond it, a small rocky islet with a roofless cottage on it: **Gull Rock**.

- Bea is funny, loving and exhausted. House rules. She asks about the bonfire. If Sadie's name comes up, Bea stops stirring for one beat too long, then changes the subject. (A seed for `DISCOVER_BEA_TOLD`.)
- The inn's walls: a faded **MISSING** poster by the phone, and a festival poster: *THE SEA GLASS FESTIVAL · SATURDAY · ANNIVERSARY VIGIL AT THE BONFIRE*.
- **The tide board** is taped to the fridge (Bea sails). Today's low tide: 7:40 a.m. and 8:05 p.m. The player can ask about Gull Rock: *"You can walk out at low tide. Don't. The causeway floods faster than you can run, and the cottage has been a ruin since the seventies."*
- Doing the shift well keeps Bea's trust. Skipping it costs Whispers +1 and a very disappointed aunt.

## 1.2 DOUCETTE'S BAKERY

The whole island goes to Doucette's between 8 and 10. Cinnamon, a bell over the door, a bench outside. Two people at a time:

- **Jules** is behind the counter, delighted to see her: *"You chased the ghost! Nobody's done that!"* She'll tell her everything about everyone. Letting her tag along is `RECRUIT_JULES`. She mentions, as a joke, that she feeds the gulls every morning for her great-grandma, "who is weird about gulls".
- **Marguerite** (*the ancient baker, Jules's great-grandmother*) says nothing at all to the new girl. She watches her over the bread, the whole time. If the player looks her in the eye, Marguerite nods once, like she's decided something.
- **Priya** is at the corner table with a microphone, recording episode 52 of *Missing Sadie*: *"One year. Seven days. And a new girl on the island who chased a ghost last night."* She wants the new girl on the show, "the outsider's perspective". Saying yes is `RECRUIT_PRIYA`, and raises Whispers +1 (400,000 listeners). She's charming, pushy and, if the player is watching closely, flinches when anyone says "11:30".
- **The green sea glass** is here, if she looks: tucked under the cushion of the outside bench, the one with a brass plaque, *"For Sadie, who sat here every morning."* Note: *"I was nine when Marguerite taught me to braid bread. She said everything strong is three weak things twisted together."*

## 1.3 THE MAN WITH THE TEETH

Midday, at the inn. A silver pickup on the gravel. **Preston Vale** (*Sadie's father, who owns half the island*) brings Bea a box of peaches and the new girl a smile.

- He knows her name before she says it. He's warm, sad, generous: he offers her a summer job at the yacht club ("better pay than dishes, and I'll write you a college letter that opens doors"). He asks, lightly, what she saw at the lighthouse last night.
- **He's perfect.** Almost. SLEUTH SEES: he asks about the lighthouse before anyone told him she was there. CHARMER SEES: Bea's hand on the counter goes white. PHOTOGRAPHER SEES: his boat, *Second Wind*, is in the family photo on his phone's lock screen, and Sadie has been cropped out of it. ATHLETE SEES: he's standing between her and the door.
- **Outplaying him** (`SOCIAL_VALE_BLUFF`): lying to his face well enough that he decides she's harmless (a roll, a move, or a great performance). Accepting the job sets `took_vale_deal` (it's not a crime, but it's a leash). Being rude raises Whispers +1.
- As he leaves: *"Stay off the point, okay? The rocks took my daughter."*

## 1.4 WHERE THE LIGHT USED TO BE

Evening, or night: the **dead lighthouse** on the point, decommissioned in 1998. Chain on the door (rusted through; it only *looks* locked). A spiral stair, 114 steps, a lamp room with the great lens gone and a seven-sided brass lamp housing still in place, with **seven empty slots, each the size of a piece of sea glass**. On the lamp room wall, a faded **harbor chart** painted directly on the plaster.

- **The white sea glass** sits in one of the slots. Note: *"I was six the first time I climbed up here. Dad said the light was dead. I said lights don't die. They wait."*
- Someone has been here recently: a clean patch on the dusty floor where a person sat, an apple core, and a view straight down onto the causeway to Gull Rock. (ATHLETE SEES the causeway's high-water line. SLEUTH SEES that the apple core is today's.)
- The player now has three pieces and three notes, each with an age. She doesn't need to understand the slots yet. Let her wonder.

```
[IMAGE_TRIGGER]
ID: IMG_LIGHTHOUSE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Night inside the top of an old abandoned lighthouse: a dusty round lamp room
with a seven-sided brass lamp housing with empty slots, a faded harbor chart
painted on the curved wall, moonlight through salt-streaked windows; a
seventeen-year-old girl holding a piece of glowing blue sea glass up to the
moonlight; far below through the window, a black causeway of rocks leading
out to a tiny islet with a roofless cottage. Eerie, beautiful, a little
scary.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_LIGHTHOUSE
PAIRED WITH: IMG_LIGHTHOUSE
MOTION: moonlight shifts through the salt-streaked glass; the sea glass in her hand catches it and throws a thin blue beam across the painted chart; far below, a tiny warm flashlight blinks once on the islet
CAMERA: slow push in over her shoulder toward the window
[/VIDEO_TRIGGER]
```

**On the way down**, a flashlight blinks once, far out on Gull Rock, and goes dark. That's the hook.

**Monday night ends Act I.** Record `REACH_LIARS` (it's sent with everything else at the end) and fetch the Act II pack.

---

## Exceptions

- **She tells Bea or Deputy Hank about the note right away:** allowed, and it matters. Bea goes very quiet and asks her to show no one else (a seed for `DISCOVER_BEA_TOLD`). Hank takes the note "for the file", and it's gone. Whispers +2, and Vale knows by morning (`told_hank`).
- **She wants to go home now:** she can call her mom and take Tuesday's ferry: `THE LAST FERRY`.
- **She walks out to Gull Rock at low tide tonight:** the cottage looks empty, a ruin, and the tide chases her back (ATHLETE: easy; anyone else: a Hard roll, DC 15, or Hurt). Sadie watches from the rocks and doesn't show herself. Not yet.
