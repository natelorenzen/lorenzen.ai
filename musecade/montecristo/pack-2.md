# THE COUNT OF MONTE CRISTO · PACK-2 · BUILD 1.0-2b4789e

Bundle for: Act II begins (`REACH_CHATEAU`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

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

===== FILE: world/the-treasure.md =====

# THE COUNT OF MONTE CRISTO: The Spada Treasure

Loaded at Act II.

## The story Faria tells
In 1498 the pope and his son, needing money, made two rich cardinals pay for their appointments and then invited them to dinner, where they were poisoned. One of them, **Cardinal Spada**, suspected the invitation and, before going, hid his whole fortune: gold, jewels, coins, everything. He left a letter telling his nephew where. The nephew died too. The family searched for three hundred years and never found it. Faria, secretary to the last Spada, found the cardinal's breviary, and in it, by accident, a sheet of paper that had been used to light a candle and was half burned. When he held the other half to the fire, writing appeared: the ink was invisible until heated.

## Where it is
On the barren island of **Monte Cristo**, in the Tuscan sea, uninhabited except by wild goats and smugglers. Following the letter (`game/puzzles.md`, *Puzzle 2*): from the **small creek on the east side**, count to the **twentieth rock**; beneath it, a flagstone with an iron ring; under that, a stair down into a cave; at the far end of the cave, a wall that sounds hollow, and behind it, **a second opening**. In the farthest corner of the second opening: the chests.

## What's in it
Three iron-bound chests. Gold ingots. Gold coins of a hundred kingdoms. Diamonds, pearls, rubies, emeralds "pouring like water". Enough to buy a principality. The game never gives a number: say "more than anyone in Europe", and let it be true. It's enough for anything except what money can't buy.

## What it does to a man
Faria's last warning is the heart of it: *"Do not let what I give you make you a god."* The treasure makes the Count possible. It makes VENGEANCE easy. Every time the player uses money to hurt someone, ask, through a companion or the narration, who else it lands on.

===== FILE: game/puzzles.md =====

# THE COUNT OF MONTE CRISTO: Puzzles

Three puzzles: deductive (who betrayed you), textual (the burned letter) and practical (the false signal). Never give the answer. Answer questions truthfully, from what Edmond could know or notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8; in prison, every hint comes from Faria, in his voice.

---

## PUZZLE 1: WHO BENEFITS (deductive · Act II)

**The question:** who put Edmond in the Château d'If, and why?

**Faria's method:** *"Ask who benefits from your disappearance."*

**What Edmond remembers** (draw these out of the player's memory of Act I; if they missed something, Faria asks the question that brings it back):

| Clue | From Act I | Points to |
|---|---|---|
| Morrel made him captain; Danglars expected to be made captain | 1.0 | Danglars benefits |
| Danglars saw him take Leclère's letter at Elba | 1.0 | Danglars knew what to accuse him of |
| At La Réserve, someone called for pen and paper; Danglars was the one who could write a clean letter | 1.3 | Danglars wrote it |
| The denunciation's handwriting (Villefort showed it) was clumsy, slanted backward: written with the left hand | 1.5 | a disguised hand: Danglars, a clerk, who writes well with his right |
| Fernand loved Mercédès, and she refused him for Edmond | 1.2 | Fernand benefits; Fernand, a fisherman, couldn't write it, but could carry it |
| Caderousse was at the table, drunk, and didn't come to the feast's defense | 1.3, 1.4 | Caderousse knew, and said nothing |
| Villefort was kind until he read the name **Noirtier**, then burned the letter and sent him to the Château without trial | 1.5 | Villefort buried him to protect someone named Noirtier |
| (Faria knows this) **Noirtier** is a famous Bonapartist, and he is **Villefort's father** | Faria | why Villefort did it |

- **Solved:** the player names **Danglars** as the writer and **Fernand** as the one who sent it, and explains **Villefort**'s reason (his father), with at least three of the clues: `PUZZLE_BETRAYAL_SOLVED`, plus `PUZZLE_BETRAYAL_NO_HINT` if unaided. Naming Caderousse's silence too earns a nod from Faria. If they get Noirtier's connection and haven't reported it, report `DISCOVER_NOIRTIER`. A Scholar's deduction counts toward Faria's Learning.
- **Fallback** (after the third hint): Faria lays it out himself, gently, in full. No puzzle events.

---

## PUZZLE 2: THE BURNED LETTER (textual · Act II)

**The question:** where is the Spada treasure?

**The letter.** Faria has the half that survived the candle, and he has rewritten what the heat revealed of the rest, line by line. Show the player only the surviving left halves (below, in a code block), and let them reason out the missing right halves. Faria knows the history (`world/the-treasure.md`), and can answer questions about it.

```
...25 April 1498, having been invited to dine
...fearing that, not content with my money,
...I bequeath to my nephew Guido Spada, my sole heir,
...that I have buried in a place he knows, having visited it with me,
...namely in the caves of the small island of Monte
...all the ingots, gold, money, jewels, diamonds and gems
...of which I alone know the existence, which may amount
...he will find it on raising the twentieth rock from the small
...creek to the east, in a straight line. Two openings
...have been made in these caves; the treasure is in the farthest
...corner of the second opening, which treasure I bequeath
```

**What the player must work out:** the island is **Monte Cristo** (*"Monte..."*: Faria knows the Spadas visited it, an island near Elba); count from **the small creek on the east side**, to **the twentieth rock**, in a straight line; and the treasure is in **the farthest corner of the second opening**, not the first cave they'll find. A Sailor knows Monte Cristo from the smugglers' routes. A Scholar sees that "two openings" means the first cave is a decoy.

- **Solved:** the player names the island, the creek-and-rock bearing, and that it's the second opening: `PUZZLE_SPADA_SOLVED`, plus `PUZZLE_SPADA_NO_HINT` if unaided.
- **Fallback:** Faria works it out aloud. No puzzle events. In Act III, without the "second opening", Edmond spends two extra days digging in the wrong cave first (Hurt, and Jacopo's boat nearly leaves without him).

---

## PUZZLE 3: THE FALSE SIGNAL (practical · Act IV)

**The question:** how do you make Danglars lose a fortune on news that isn't true, without anyone tracing it to you?

**The pieces** (all discoverable in Act IV):

| Piece | How it's found | Means |
|---|---|---|
| Danglars has bet heavily on **Spanish government bonds** | his ledger (`DISCOVER_DANGLARS_LEDGER`), or Debray's gossip | bad news from Spain will make him sell in a panic |
| **Lucien Debray**, the minister's secretary, reads the telegraph dispatches first and tips **Madame Danglars**, who tips her husband | the Opera, a dinner, Madame Danglars's indiscretion | a false dispatch will reach Danglars within hours, through people he trusts |
| The telegraph is a chain of **semaphore towers**; each keeper only copies the signal from the tower before and passes it on, without understanding the code | a visit to a tower, or a Scholar's question | a keeper in the middle of the chain can send any signal, and the next keeper will relay it |
| The keeper at **Montlhéry**, near Paris, is an old man paid 1,000 francs a year who loves only his garden, and dreams of a pond and strawberries | visiting the tower (the Count goes himself, as a curious gentleman) | he can be persuaded, if you give him what he actually wants |
| The news that would crash Spanish bonds: **"Don Carlos has escaped and returned to Spain; Barcelona has risen for him"** | the papers, Debray, a Scholar's knowledge of Spain | a believable lie, disproved within a day |

- **Solved:** the player puts together a plan with the right **bait** (Spanish news), the right **route** (Debray to Madame Danglars to Danglars), and the right **keeper** (bought with what he wants), and carries it out: `PUZZLE_TELEGRAPH_SOLVED`, plus `_NO_HINT` if unaided. Danglars sells everything Spanish at a loss; the next day the news is denied; he loses a fortune, and his credit cracks. The keeper gets his garden (`ACH_STRAWBERRIES`, if it's generous and honest).
- **Fallback:** the Count simply bankrupts Danglars by withdrawing his unlimited credit all at once. It works, but it's traceable, and it takes the hospitals' money down with him (an innocent harmed, VENGEANCE +1). No puzzle events.

===== FILE: game/encounters.md =====

# THE COUNT OF MONTE CRISTO: Set Pieces

Every set piece follows `core/dm-core.md` §6: three approaches as a lettered menu, a d20 at the turning point, and it must **cost or reveal** something. A miss by 1 to 4 costs a harm level, time, trust, or an innocent caught in the plan.

## Rules
1. Open with the scene at full Dumas grandeur, plus one usable detail (a knife, a book, a lantern, a pistol).
2. **Three approaches (A, B, C, plus D. Other):** **press** (confront, strike, reveal), **withdraw** (endure, wait, spare), **turn the ground** (use the setting, the people, the theatre of it).
3. **Paths pay off:** the Count's money opens it, the Abbé's confession breaks it, the Sailor's daring escapes it, the Scholar's method sees through it.
4. In Paris, ask every time: who else is in the room? Innocents are always nearby.

---

## Cold open: the Pharaon (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_SACK: The Sack · SET PIECE (Act II)
- **Threat:** two guards, a lantern, a cliff, a cannonball on a rope, and the sea at night. They must not notice the body is warm.
- **Terrain:** Faria's cell, the tunnel, the burial sack, Faria's knife and needle, the stairs, the cliff, the storm, the islands of Tiboulen and Lemaire.
- **Menu example:** "Lie perfectly still, knife ready, and wait for the fall." / "Cut a breathing slit now and risk being seen." / "Wait for the storm's loudest gust before moving at all."
- **Reveals:** that the Château's dead go into the sea. **Costs:** usually Hurt (the cold, the rocks), and a lot of the night. A miss by 5+ with the knife lost: drowning (telegraphed).

## ENC_CATACOMBS: The Catacombs of Saint Sebastian · SET PIECE (Act III)
- **Threat:** Luigi Vampa's band in the catacombs, a ransom deadline at six in the morning, and Albert's life.
- **Terrain:** miles of tunnels and bones, a guard singing at the entrance, the bandits' fire, Vampa reading Caesar's *Commentaries*, Albert asleep on a cloak.
- **Menu example:** "Walk in alone, unarmed, and say your name." / "Pay the ransom in full through Franz, and watch who collects it." / "Bring Jacopo and the smugglers through the back tunnels."
- **Reveals:** Vampa's debt to the Count, and Albert, whose mother is Mercédès. **Costs:** a favor owed, or a fight in the dark.

## ENC_AUTEUIL: Dinner at Auteuil · SET PIECE (Act IV)
- **Threat:** a dinner party at the house where Villefort buried his son. A social battlefield: one wrong word reveals the Count's hand.
- **Terrain:** the dining room, the red damask bedroom upstairs, the garden, the tree, the guests (Villefort, the Danglars, Debray, Maximilien, Andrea Cavalcanti), and Bertuccio, shaking, serving the wine.
- **Menu example:** "Tell the ghost story in the garden, and watch who breaks." / "Show the house and say nothing at all; let the place do it." / "Seat Andrea next to Villefort, and wait."
- **Reveals:** Villefort and Madame Danglars's secret (and, if Bertuccio is watching, who Andrea is). **Costs:** suspicion: Villefort starts asking who the Count really is.

## ENC_DUEL: Dawn at Vincennes (Act V)
- **Threat:** a duel at twenty paces with Mercédès's son, after a promise made to her.
- **Terrain:** the misty clearing, the seconds (Maximilien, Emmanuel; Franz, Beauchamp), the pistols, a carriage, the light coming up.
- **Menu example:** "Stand and let him fire first, as promised." / "Speak first: tell Albert the truth, here, in front of everyone." / "Fire into the air before he can raise his pistol."
- **Reveals:** whether Edmond can keep a promise that costs him everything.
