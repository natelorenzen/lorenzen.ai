# THE SEA GLASS INN · PACK-END · BUILD 2.0-343a6ae

Bundle for: any ending triggers before Act V (being sent home, a deal, walking away). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: game/endings.md =====

# THE SEA GLASS INN: Endings

Eleven endings. None is "the right answer": each is a way a seventeen-year-old can decide what the truth is worth. Treat every one with respect, including the ones where she walks away.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, told as "the next summer", when she comes back to Halcyon, or doesn't; (4) complete the run with the ending's **ID** and `died: false`; (5) the final screen (`scoring.md`).

**Epilogue fragments** (use the ones that apply):

- **Theo:** believed and bonded: *"Tomás Reyes came home in March. Theo drove the truck he'd bought back to the ferry to get him."* Otherwise: *"Theo left the island in September. The paint on the boatyard shed finally covered the word."*
- **Priya:** bonded: *"Season two of the podcast was called* What I Deleted. *It was the best thing she ever made."* Otherwise: *"Priya's podcast got a TV deal. She didn't answer your texts."*
- **Jules:** bonded: *"Jules visited you in the city at Thanksgiving, and hated it, and loved it, and talked the whole time."*
- **Aunt Bea:** *"Bea saved you the room under the eaves. She always will."*
- **Marguerite:** *"Marguerite testified in a hat. The judge called her ma'am twice."*
- **Lydia:** *"Lydia turned the porch light off. She said she didn't need it anymore."* (only if Sadie came home)
- **Vale:** *"Preston Vale's lawyers were very expensive. It didn't help."* (only if the proof came out)

---

## THE SEVENTH PIECE

**ID:** `ENDING_SEVENTH_PIECE` · **fate:** lives · **the hidden ending**

**The moment:** Sadie walks out of the dark into the firelight with the player beside her, and Theo a step behind. She takes Priya's microphone, and she tells all of it in her own voice: the fire, her father, the year on Gull Rock, and the diary. *"I wrote it. Every word. Theo never hurt me. I hurt him, because I needed a monster, and he was the closest thing to hand."* Then she turns to him, in front of everyone, and says she's sorry. It's not enough. It's a start.

**Epilogue:** Vale was arrested on the ferry landing on Monday morning. Tomás Reyes's conviction was overturned by winter. Sadie did community service, and a year of hard conversations, and went to college a year late. Say what the player did with the rest of her summer, and what she took home: the seven pieces of glass, in a jar on her windowsill.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SEVENTH_PIECE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A beach bonfire at night, hundreds of candles on the sand, a thin girl with
short dark hair at a microphone with tears on her face, turning toward a
tall boy; beside her a seventeen-year-old girl holding a jar of seven
glowing pieces of sea glass; the crowd silent; the lighthouse on the point
lit again for the first time, its beam sweeping the sky. Bittersweet,
triumphant.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE WHOLE TRUTH

**ID:** `ENDING_WHOLE_TRUTH` · **fate:** lives

**The moment:** She does it herself. The video from the card on Priya's stream; the "SPRING" photos; the diary's impossibilities, one by one; and then the girl walking out of the dark. The fire *and* the hoax, both, because the island deserves both, and so does Theo. Sadie never forgives her for it. Sadie never has to lie again, either.

**Epilogue:** Vale's trial was on the news for a month. Theo's name was cleared in the same week. Sadie gave one interview, and never mentioned the player. Say how the island treats the new girl the next summer: she's not new anymore.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WHOLE_TRUTH
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night on a beach, a seventeen-year-old girl standing alone at a microphone
in the firelight, a phone held high showing a video of a burning building;
hundreds of candles and phone screens glowing in the crowd; at the edge of
the light, a silver-haired man being led away by a deputy. Righteous,
lonely, powerful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## GIRL, FOUND

**ID:** `ENDING_GIRL_FOUND` · **fate:** lives

**The moment:** No microphone. The player walks Sadie up the cliff path to the glass house at midnight, while the island is still at the bonfire. The porch light is on. Lydia opens the door before they knock. Nobody says anything for a long time.

**Epilogue:** The truth came out the slow way: a lawyer, a detective from the mainland, a kitchen table, a lot of crying. Sadie told the police about the diary herself. Say what happened to Vale, and to Theo, and whether Sadie ever wrote to the player (she did: one postcard, one line).

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_GIRL_FOUND
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Midnight on a cliff, a glass-and-cedar house with a single warm porch light
on; a woman in a cream sweater in the open doorway with her hands over her
mouth; a thin girl with short dark hair in a fisherman's sweater on the
steps; a seventeen-year-old girl waiting at the bottom of the path, far
below a distant bonfire glowing on the beach. Quiet, tender, overwhelming.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## ON AIR

**ID:** `ENDING_ON_AIR` · **fate:** lives

**The moment:** Priya's stream, live, 400,000 people: the video, the photos, the timeline, and the new girl's voice explaining it all. Vale's face when he realizes the whole country is watching. It's the biggest episode of anything, ever. Say how Priya handles it: with the truth, including her own deleted text, or without it.

**Epilogue:** The story belonged to the internet by morning, which meant it belonged to nobody. Vale fell. Sadie became a hashtag, then a documentary, then a meme. Theo got a thousand apologies from strangers. Say whether Priya's season two was honest.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ON_AIR
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night, a girl in a blazer at a microphone on a beach with a ring light and a
phone on a tripod, a live-stream counter climbing on the screen; beside her
a seventeen-year-old girl talking into the mic; behind them a bonfire and
a stunned crowd holding up hundreds of phones like candles. Electric,
dizzying.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## GONE GIRL

**ID:** `ENDING_GONE_GIRL` · **fate:** lives

**The moment:** 4 a.m., the harbor, a borrowed skiff, Sadie with a new name and Marguerite's cash. The player mails the card to a mainland newspaper and a state prosecutor, no return address. Sadie hugs her, hard, and doesn't look back. The dead girl stays dead.

**Epilogue:** Vale was indicted in October on "an anonymous source". Nobody ever learned how. Say what happened to Theo (the diary still stands, unless the player did something about it) and whether the player ever told anyone. Once a year, on her birthday, a piece of sea glass arrives in the mail with no note.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_GONE_GIRL
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Pre-dawn blue on a misty harbor, a small skiff pulling away with a thin
girl in a hooded sweater looking back once; on the dock, a seventeen-year-
old girl holding a stamped envelope; lobster boats and a lighthouse in the
fog. Hushed, secret, bittersweet.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## CLEARED

**ID:** `ENDING_CLEARED` · **fate:** lives

**The moment:** She takes what she can prove (Theo's alibi, the timeline, the diary's lies) to the mainland detective, to Priya, to anyone who'll listen, and Theo's name is cleared. It's not everything. Sadie stays gone, and Vale stays smiling. But a boy who's been a murderer for a year gets to be a boy again.

**Epilogue:** The *MURDERER* on the shed was painted over for the last time. Say what Theo said to her on the ferry ramp when she left, and whether she ever stopped wondering about the light on Gull Rock.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_CLEARED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Morning at a small boatyard: a tall boy painting over graffiti on a shed
wall with a roller of white paint, a seventeen-year-old girl handing him a
second roller, an old man watching from a lawn chair with a coffee; boats,
sun, gulls. Quiet, earned, hopeful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE PERFECT VICTIM

**ID:** `ENDING_PERFECT_VICTIM` · **fate:** lives

**The moment:** Sadie tells her version at the bonfire: her father, the fire, and a boy who frightened her. The player stands in the dark and says nothing. Vale falls. Theo, in the crowd, hears it all over again. Sadie is a hero by midnight.

**Epilogue:** Sadie's memoir came out two years later. It was a bestseller. Theo is in chapter four. Say what the player does when she sees it in a bookstore window.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_PERFECT_VICTIM
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A bonfire at night, a thin girl in a fisherman's sweater at a microphone,
bathed in golden firelight, the crowd reaching toward her; at the far edge
of the crowd in shadow, a tall boy turning away; in the darkness at the
very edge of the light, a seventeen-year-old girl watching, silent. Golden,
hollow, unsettling.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE DEAL

**ID:** `ENDING_THE_DEAL` · **fate:** lives

**The moment:** A handshake on the yacht club deck, a scholarship "in Sadie's name", a letter of recommendation that could open any door. The player doesn't have to do anything. She just has to not do anything, forever. Preston Vale smiles with all his teeth.

**Epilogue:** She got into the college she wanted. The letter helped. Say what she tells people when they ask about her summer on the island, and what she doesn't tell them.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_DEAL
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Sunset on a yacht club deck, a silver-haired man in linen shaking hands
with a seventeen-year-old girl who holds a cream envelope; sailboats in the
golden harbor; far off on the point, a dark lighthouse. Glossy, beautiful,
wrong.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## SUMMER'S END

**ID:** `ENDING_SUMMERS_END` · **fate:** lives

**The moment:** She puts the sea glass in the jar by the front desk, with everyone else's. She works her shifts, swims at the cove, goes to one bonfire where nobody's crying, and has a summer. It was never her job to fix this island. Maybe that's true.

**Epilogue:** Say what the summer gave her instead (a friend, a first kiss, a tan, a reason to come back) and whether she ever looked at Gull Rock again.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SUMMERS_END
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Late summer afternoon at a cove, teenagers on the rocks and in the water, a
seventeen-year-old girl laughing on a towel with a friend, a glass jar of
sea glass beside her; far out beyond the point, a tiny islet with a
roofless cottage, and one faint light in its window. Warm, easy, haunted.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## FRAMED

**ID:** `ENDING_FRAMED` · **fate:** lives

**The moment:** Flashing lights on a fenced cannery at 1 a.m. Hank's hand on her arm. Vale, in a raincoat, very sorry, very worried about "the poor girl". A trespassing charge, a call to her mother, the first ferry home. The island believes the story it's told. It always does.

**Epilogue:** In November a letter arrives with no return address and a piece of blue sea glass inside: *"I'm sorry. I'll finish it."* Say whether she ever finds out if Sadie did.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_FRAMED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night and rain at a fenced burned-out cannery, the red and blue lights of a
single island police car, a sunburned deputy holding a seventeen-year-old
girl's arm; a silver-haired man in a raincoat watching with a sad smile;
the black pilings of a broken pier in the storm. Bleak, unfair.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE LAST FERRY

**ID:** `ENDING_LAST_FERRY` · **fate:** lives · available from Act I

**The moment:** The ferry ramp, the horn, Aunt Bea waving too hard. Maybe she was hurt, maybe she was scared, maybe she just wanted to go home. The island shrinks behind the ferry until it's a dark line and a dead lighthouse.

**Epilogue:** Say what she heard about Halcyon later, secondhand, and how it felt to hear it from someone else.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LAST_FERRY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The stern of a small ferry pulling away from an island harbor at dusk, a
seventeen-year-old girl with a duffel bag at the rail looking back; on the
dock a tall woman in an apron waving; beyond, a dark lighthouse on a point
and a tiny islet with one light. Wistful, unfinished.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# THE SEA GLASS INN: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_EVERY_PIECE` | EVERY PIECE | Find all seven pieces of Sadie's sea glass. | Visible |
| `ACH_NOT_FOR_SALE` | NOT FOR SALE | Reach Act IV or later without ever taking anything Preston Vale offered (`took_vale_deal` false). | Visible |
| `ACH_FULL_STORY` | THE FULL STORY | Learn that Sadie is alive, who burned the cannery, that the diary is fake, and who's been hiding her. | Visible |
| `ACH_ALL_THREE` | ALL THREE | Bond with Jules, Priya and Theo. | Visible |
| `ACH_EVERYONE_LIES` | EVERYONE LIES | Uncover Theo's, Priya's and Jules's secrets. | Visible |
| `ACH_DARKROOM` | THE DARKROOM | As a Photographer, reach rank III of the Darkroom. | Hidden |
| `ACH_GHOST_OF_A_CHANCE` | GHOST OF A CHANCE | Reach the bonfire with `max_whispers` of 2 or less. | Hidden |
| `ACH_UNTOUCHED` | NOT A SCRATCH | Reach the bonfire without ever being Hurt (`ever_hurt` false). | Hidden |
| `ACH_NIGHT_SWIM` | NIGHT SWIM | Swim to Gull Rock (not walk the causeway), and make it. | Hidden |
| `ACH_FIRST_LIGHT` | FIRST LIGHT | Find Sadie on Gull Rock before the storm (Act III), instead of waiting for her to come to you. | Hidden |
