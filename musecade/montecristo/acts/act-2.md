# ACT II: THE CHÂTEAU D'IF

*Fourteen years in four scenes: despair, a tunnel, a teacher, and a sack.* Target: 13 to 17 minutes, 9 to 12 decisions. 1815 to 1829.

**Route:** the dark (survive it) → the scratching in the wall → Faria → who betrayed you (puzzle) → the treasure and the burned letter (puzzle) → Faria's death → **the sack, and the sea**.

Load `world/the-treasure.md`, `game/puzzles.md` and `game/encounters.md` now.

---

## 2.1 THE DARK

A dungeon cell, below the sea line. Stone, straw, a slit of light, a bowl of soup and a jug of water a day. The governor doesn't believe him. The inspector who visits once a year doesn't believe him. Time passes in a sentence or two: one year, then two, then four.

- **Despair.** Give the player the dark honestly but briefly (PG-13: hunger and hopelessness, never self-harm). Edmond refuses food for a while; the player decides when he stops. Each week starving is Hurt, then Grievous (`rules.md` §3).
- **The first VENGEANCE.** Somewhere in the dark, Edmond almost certainly swears it: revenge on whoever did this. If the player does, VENGEANCE goes to 1. If they don't, note it. It's rare and good.
- **The cell wall.** Let the player carve their name (the leaderboard name) into the stone. It's still there in Act V.

## 2.2 THE SCRATCHING

Year five. One night, through the wall, a sound: scratching. Patient, regular, coming closer. Edmond can scratch back, or wait, or call out.

It's the **Abbé Faria** (`characters/npcs.md`), who has spent four years digging a tunnel **with a spoon**, a chisel made of a bed-frame and a lot of mathematics, aiming for the sea, and has come out in Edmond's cell instead. *"Fifteen feet off,"* he says, dusting himself. *"I had the wrong plan of the castle. Well. At least I have company."*

- Faria is sixty, Italian, brilliant, funny and kind. **He becomes Edmond's teacher, and his father.** Montage the years: history, mathematics, chemistry, four languages, the art of reading people. Each lesson in the montage can be the player's choice: what Edmond learns most from Faria is what he'll become (lean the montage toward the player's path).
- A SCHOLAR grows **Faria's Learning** here easily (`rules.md` §6).

## 2.3 WHO BENEFITS (puzzle)

One evening Edmond tells Faria everything about the day he was arrested. Faria listens, and says: *"Then let us find who did it. The method is simple. Ask who benefits."* Run `game/puzzles.md`, *Puzzle 1: Who Benefits*.

- When Edmond understands (the left-handed letter, Fernand, Caderousse's silence, Villefort's father), it's the most devastating thing that's happened to him, including prison. Faria watches him, worried. *"I'm sorry I taught you that. I've put something in your heart that wasn't there: vengeance."* VENGEANCE +1, unless the player explicitly refuses it, here, with Faria. (If they do, that refusal is worth remembering in the endings.)

## 2.4 THE TREASURE (puzzle)

Faria has a secret he's offered the governor every year in exchange for his freedom, which is why everyone thinks he's mad (`DISCOVER_FARIA_TREASURE`). He was secretary to the last Count Spada, and found, by accident, a half-burned letter in an old breviary: **the location of the Spada treasure**, hidden in 1498 to keep it from a poisoner pope (`world/the-treasure.md`). Run `game/puzzles.md`, *Puzzle 2: The Burned Letter*.

```
[IMAGE_TRIGGER]
ID: IMG_FARIA
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A stone prison cell below the sea at night, a single tallow lamp; an old
bearded priest in a ragged soutane kneeling by a hole in the floor, holding
up a scorched half-burned letter to the light; a gaunt young man with long
hair and a beard leaning in, eyes bright; scratched calculations and a map
on the wall; a spoon and a makeshift chisel on the straw. Secret, hopeful,
candlelit.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 2.5 FARIA

Faria has a disease that comes in fits. The second fit took the use of his arm. **The third fit kills him,** always, in every run, and he knows it's coming. He gives Edmond the treasure, his blessing, and one last lesson, which is the line the whole game turns on: *"Do not let what I give you make you a god. Wealth is a weapon. Be careful who it falls on."*

- **The second move** (`rules.md` §5): in his last lucid hour, Faria gives Edmond one more of his gifts. Offer the moves Edmond doesn't know yet as a lettered menu; the player picks which lesson took. Faria, approving or amused, says why it suits him.
- The player can't save him. They can be with him. They can promise him something. Whatever they promise is remembered in the endings.
- That night, the guards sew Faria's body into a burial sack and leave it in his cell until they come to bury it. Edmond is in the tunnel, looking at it.

## 2.6 THE SACK (set piece)

The idea arrives all at once: **take Faria's place.** Drag the body through the tunnel to Edmond's own bed. Climb into the sack. Sew it closed from the inside with Faria's needle. Hold Faria's knife.

Run **`ENC_SACK`** (`game/encounters.md`). The guards come at night with a lantern. They carry the sack up the stairs, out onto the rock, and he waits for a grave. *"One, two, three."* There is no grave. **The sea is the cemetery of the Château d'If.** He is thrown from the cliff with a cannonball tied to his feet.

```
[IMAGE_TRIGGER]
ID: IMG_THE_SACK
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A stormy night: a grim island fortress on a black rock above a raging sea,
two guards with a lantern on the cliff edge, and a canvas burial sack in
mid-air falling toward the black waves, a cannonball on a rope trailing
from it, lightning in the clouds. Terrifying, iconic, dramatic.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_SACK
PAIRED WITH: IMG_THE_SACK
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the burial sack drops from the cliff and plunges into the black
waves in a burst of white spray; a knife blade rips the canvas open
underwater; lightning flashes over the fortress.
CAMERA: following the sack down from the cliff edge into the water.
[/VIDEO_TRIGGER]
```

## 2.7 THE SEA

He swims for hours in the storm toward a barren island (Tiboulen), clings to the rocks till dawn, and sees a small fishing boat: the smuggling tartane ***Jeune Amélie***. A young Genoese sailor, **Jacopo**, pulls him out of the water (`RECRUIT_JACOPO`). Edmond tells them he's a shipwrecked sailor, and asks what year it is. It's 1829. He was nineteen when he went in. He's thirty-three.

He sails with the smugglers for weeks, and becomes the best of them. When the *Jeune Amélie* puts in at a lonely rocky island to trade contraband, he looks at it and knows the name before anyone says it. **Stepping onto Monte Cristo ends Act II.** Record `REACH_ISLAND` (it's sent with everything else at the end) and fetch the Act III pack.

---

## Exceptions

- **Edmond dies** (starvation in the dark, drowning in the sack): `THE CEMETERY OF THE CHÂTEAU D'IF`.
