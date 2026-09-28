# ACT II: CONTACT

*Nightingale, the old flame, the forger, and the moment the player's own side turns on them.* Target: 13 to 17 minutes, 9 to 12 decisions. Covers day 2 and night 2.

Load `world/locations.md` and `game/puzzles.md` now. Load `world/factions.md` when Anya, Voss or a Directorate officer is identified.

---

## 2.1 MORNING: THE BOOKBINDER

NIGHTINGALE will need papers to cross, and so will anyone else who crosses with her. Tomas knows the name everyone in Aurel knows: **Ilse Varga**, of *Varga & Daughter, Bookbinders* ("there's no daughter; it's good for business"), down a crooked lane in the old town. (See `characters/companions.md`.)

- Ilse is forties, sharp, amused, ink-stained, with half-moon glasses. She makes the best papers in Aurel, and she sells to anyone. Her price for a clean Concord passport is 2,000 francs, *or* a favor to be named later. Getting it lower, faster or free takes a real bargain: `SOCIAL_ILSE_DEAL`.
- She'll come along if the pay is good and the danger interesting (`RECRUIT_ILSE`). She's useful: papers, disguises, a back-room doctor, the city's back doors.
- **Her secret** (`DISCOVER_ILSE_REPORTS`): Voss gets a report on every Concord officer who walks into her shop. It's the price of her brother's life. Tells: a Directorate pass stamp in her daybook; a boy leaving the shop by the back way the moment the player arrives (GHOST SEES); her hands stilling at the name *Voss* (DIPLOMAT SEES).
- **Pavel** (`DISCOVER_PAVEL`): on her workbench is a photograph of a young man in a student's cap, and a stack of censored letters stamped *HOLLOW HILL*, the Directorate's prison. She'll tell the story if trusted.

## 2.2 AFTERNOON: THE CITY (optional)

A free phase. Useful places (see `world/locations.md`): Katya's conservatory, the Herald newsroom, the Meridian chess room, and the station.

- **Margot Fane** of the *Aurel Herald* is chasing a summit scandal. The player may notice **Celeste Morrow** meeting her in a tram shelter, passing an envelope. That's Morrow's leak: summit gossip to the press, not to the Directorate (`DISCOVER_MORROW_LEAK`). It's the canary trap's red herring (`game/puzzles.md`).
- **Otto Brandt** is seen at the tram depot handing cash to a hard-faced man. It's gambling debts, and it's his red herring.
- **Priya Nand** slips out of the mission for a long lunch with the Ambassador. It's ambition, and it's hers.

## 2.3 EVENING: THE LANTERN MAID

The **Aurel Opera House**: red velvet, gilt, the whole summit in evening dress. Box seven is on the second tier. The opera is *The Lantern Maid*, and in its second act the heroine keeps a light burning for a lover who never comes home.

**NIGHTINGALE: Dr. Lena Kasper.** Mid-forties, precise, grey-eyed, in a borrowed gown, and very frightened. She speaks under the music.

- **She tests the player.** She knows CARDINAL is "senior, in your Aurel station". She wants proof the player isn't him, or isn't working for him. Earning her trust takes honesty, the train photograph ("they were waiting for me too"), cleverness, or a hard roll. That's `SOCIAL_NIGHTINGALE_TRUST`. Without it, she gives less (see below).
- **With trust, she gives the clue** (queen clue 2): *"The list is where the queen protects it. Where old men play the long game. The game of '38."* Record `queen_clues: opera`. Without trust: "When I see you on the bridge, I'll tell you where it is." That's dangerous, because it means the list won't reach the bridge with her.
- **Her condition** (`DISCOVER_KATYA`, with trust or pressure): *"My daughter Katya studies at the conservatory here. Sixteen. They watch her so that they can watch me. I will not cross without her."*
- In the box beside hers sits **her minder**, a Directorate officer in black silk: **Anya Sorel**. The player knows her. There was an operation five years ago, a winter in a city like this one, and something unfinished. Anya sees the player. Her face does nothing at all.

```
[IMAGE_TRIGGER]
ID: IMG_OPERA
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A red-and-gold opera box in dim theater light, the stage glowing far below
with a lone singer holding a lantern. In the box, a frightened woman in a
borrowed grey gown leans toward the player, speaking behind a fan. In the
neighboring box, half in shadow, a woman in black silk watches them with no
expression. Opera glasses glinting across the dark auditorium.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**The corridor.** After the act, Anya finds the player by the cloakroom mirrors: *"You shouldn't be in this city. Someone in your house sold your face before you got here."* She won't say more here, because the corridors are full of her colleagues. She says where she can be found, if the player's life falls apart: *"The ferry kiosk on Quay Nine. Knock twice, then once."* An Envoy or Diplomat, or anyone who watches her with Lena, may sense that she's **protecting** NIGHTINGALE, not guarding her (`DISCOVER_ANYA_HANDLER` if the player puts it to her and she doesn't deny it).

## 2.4 THE QUEEN (possible tonight)

With the scoresheet (Act I) and the opera clue, the player can solve `game/puzzles.md`, *Puzzle 1: Where the Queen Protects It*, tonight. The chess room closes at midnight; Emil has a key. The film is **microfilm** and needs a **reader**: the station has one (unsafe), the *Herald* has one, and Ilse has one (and reports to Voss). Reading it happens in Act III.

## 2.5 NIGHT: THE FRAME

While the player sleeps, or doesn't, Ashby moves. (He learned of the opera from Tomas's reports, or from Voss.) At 1 a.m. an anonymous packet arrives at the station, addressed to Deputy Nand:

- bank records from a neutral bank: monthly deposits from a Directorate front company **into an account in the player's cover name**
- photographs of the player in the opera corridor **with Anya Sorel**, taken from a high window across the street
- a typed note: *"Your CARDINAL is the courier. Ask them about Sorel."*

Nand, by the book, orders the player brought in. **Tomas** gets the order. If he's with the player and trust is 1 or more, he tells them (*"They're saying it's you. It isn't, is it?"*). Otherwise he says nothing and leaves a door unlocked for the arrest team. Report `DISCOVER_THE_FRAME` when the player learns their name is on it.

## 2.6 THE RAID (set piece)

Run **`ENC_RAID`** (`game/encounters.md`). At 2 a.m. **two** teams converge on wherever the player is sleeping: Office security with an arrest warrant, and a Directorate snatch team, who were tipped by the same hand. They arrive within minutes of each other, and neither knows about the other.

```
[IMAGE_TRIGGER]
ID: IMG_RAID
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

SCENE:
2 a.m. in a grand old hotel: a dark corridor lit by the orange glow of an
exit sign, men in raincoats with flashlights coming up the main stair,
another group in dark overcoats on the service stair. Between them the
player, at a window that opens onto the huge glass roof of the lobby below,
rain hammering. Tension, crossfire of flashlight beams.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

It should cost or reveal something: a wound, the briefcase, the microfilm (if it wasn't hidden), or heat. It also reveals that the Office men carry a warrant naming the player as CARDINAL (`DISCOVER_THE_FRAME` if not yet). **Heat becomes at least 3.** The player is burned.

**Record `REACH_BURNED`** (it's sent with everything else at the end) and fetch the Act III pack.

---

## Exceptions

- **The player turns themselves in** to prove their innocence: Nand detains them in the station's basement. Ashby visits, kind, and offers to "sort it out" if they tell him everything about NIGHTINGALE. Escape (a roll) or accept. Accepting leads toward `A QUIET ROOM`, unless Tomas or Anya intervenes.
- **The player hands NIGHTINGALE to Voss** tonight to save themselves: `THE GARDENER'S TRADE` is possible from Act III. Play it as Act III's opening move.
- **The player skips the opera:** NIGHTINGALE leaves a second drop (*"Last chance. Conservatory steps, noon."*). Act II continues, with less trust.
