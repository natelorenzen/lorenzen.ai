# ACT I: ARRIVAL

*The city, the mission, the first sign that someone knew you were coming.* Target: 12 to 16 minutes, 8 to 11 decisions. Covers day 1, from 2 a.m. on the train to the night.

**Route** (each scene's goal is the status line's `NEXT`): survive the night train → through the border → check in at the Hotel Meridian → report to the station → collect NIGHTINGALE's dead drop at Café Oriel → **get out of the Glass Galleries alive**.

---

## 1.0 COLD OPEN: THE NIGHT TRAIN (the tutorial fight)

**Open with action, straight after the path tag.** It's easy to win and can't kill or wound. It teaches the game in 3 or 4 decisions.

**The scene:** 2:09 a.m. A sleeper car rocking through black forest toward the border. Rain streaks the window. The corridor lamps are dim. A man in a **camel coat** is working his way down the car, opening compartment doors without knocking and glancing at faces. He opens yours. He looks at you, and then at your **briefcase**. He smiles as though he recognizes you, which he shouldn't. He steps in and slides the door shut behind him.

- **Path spotlight**, one line for this path only:
  - OPERATIVE: *right-handed, a sap in his left pocket, no gun: he wants you conscious. The compartment is too small for him, not for you.*
  - ANALYST: *his shoes are Directorate issue, resoled twice. His watch is set an hour ahead, to Directorate time. He's been sent, not hired.*
  - GHOST: *the window drops six inches. The luggage rack is bolted to the partition, and beyond it is the next compartment.*
  - DIPLOMAT: *he's nervous. He's rehearsed his first line and is waiting for you to speak first.*

**Beat 1: the first menu.** He reaches for the briefcase: *"Customs, sir. Routine."* End the turn with the first lettered menu, adapted to the path. For example:
- **A.** Grab his wrist and put him against the window. *(stand)*
- **B.** Hand him the briefcase and slip out while he's looking inside. *(evade)*
- **C.** Kill the compartment light and pull the emergency cord. *(turn the ground)*
- **D.** Other: type your own

```
[ TIP · Type A, B or C to choose, or type anything you can imagine. The options are a shortcut, never a limit. ]
```

**Beat 2: the first roll.** Resolve the decisive moment with an **easy d20 (DC 8)**, shown openly, then:

```
[ TIP · Easy things just happen. At moments that matter, the d20 decides how well. +2 when it fits your path. ]
```

**Beat 3: the turn.** One more exchange. The man wants the briefcase and you, quietly. He does not want a scene. Noise makes him back off, because *he's afraid of attention too*. Teach the game's second danger:

```
[ TIP · The Glass City watches. Noise, violence and blown cover raise your Heat. Too much, and both sides come for you. ]
```

If the emergency cord was pulled, or there was a fight in the corridor, **heat becomes 1** (the conductor takes notes).

**Beat 4: the aftermath.** He escapes into the next car, jumps from the train at the border slow-down, or ends up unconscious on the floor. Whatever happens, something falls from his coat: **a photograph of the player**, taken recently, trimmed to passport size. It's the photograph from their own cover file. Report `DISCOVER_SWEEPER_PHOTO` when the player picks it up and studies it (most will).

```
[ TIP · Your path has a MOVE that works once per act, no roll. Type MOVE when the moment's right. ]
```

Then print the first status line.

```
[ TIP · The status line shows the day, your HEAT and where you're headed. Type STATUS, WHO or RECAP anytime. Ask questions, try the strange idea. SAVE GAME works anytime. ]
```

**Rules:** no wounds and no death here. A miss costs something small: a torn sleeve, dropped francs, a conductor who remembers your face (heat 1). If the player kills him, that's a choice: set `killed_someone` and `shots_fired` if a gun was used, raise heat by 2, and play the border as dangerous. Tips appear only here, and can be skipped.

---

## 1.1 THE BORDER AND THE GLASS CITY

2:14 a.m. The train stops at the Aurel frontier post. Two guards come down the car with flashlights, and an officer with a clipboard behind them: **Lieutenant Brun**, bored, underpaid, sharp.

- If heat is 0 and nothing happened on the train, the papers pass with a yawn.
- If heat is 1 or more, or the camel-coat man is lying in a compartment, Brun wants answers. A good lie, a bribe, a diplomatic protest or a shared joke about the rain gets them through. Report `SOCIAL_BORDER` if it takes real persuasion (a roll). Failure means a two-hour detention, a phase lost, and heat +1. Brun files everything.
- DIPLOMAT SEES: Brun hates the Directorate men who ride this train and keep him awake.

**Dawn.** The train crosses the long causeway into Aurel. The city rises from the lake: domes of green copper, and the **glass arcades** glittering along the waterfront. At the far end, a covered bridge of iron and glass, **the Glass Bridge**, runs to the lit towers of the Concord enclave on Pier Island.

```
[IMAGE_TRIGGER]
ID: IMG_GLASS_CITY
TYPE: LANDSCAPE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dawn over a 1970s lake city seen from a train on a long causeway: green
copper domes, rain-wet rooftops, long glittering glass arcades on the
waterfront, and far off a covered iron-and-glass bridge running to an
island of lit towers. The player at the train window in the foreground,
seen from behind, coat collar up. Sodium-orange lamps still burning
against a cold cyan dawn.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_GLASS_CITY
PAIRED WITH: IMG_GLASS_CITY
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the causeway lights slide past the window; the glass arcades catch
the first light and flash one by one; rain streaks the pane.
CAMERA: slow push toward the window.
[/VIDEO_TRIGGER]
```

---

## 1.2 HOTEL MERIDIAN

The cover booking: a grand, fading hotel with a **glass-roofed lobby**, palms, a pianist who plays too softly, and a concierge (**Emil**) who notices everything and sells a little of it.

- **The chess room** off the lobby: eight tables, old men, smoke. On the wall is a **framed tournament scoresheet**: *"LINDQVIST – ORAN, AUREL 1938. The game of the century."* Its last move is circled in faded red ink: **"42. Qg7#"**. Beside it is a wall of numbered **wooden pigeonholes**, lettered **a–h** across and numbered **1–8** down like a chessboard, where members keep their own sets. (This is the queen clue. Record `queen_clues: scoresheet` if the player looks. It pays off in Act II and III; see `game/puzzles.md`.)
- ANALYST SEES: the pigeonholes are laid out exactly like a board, with a1 bottom left. GHOST SEES: several pigeonholes have little brass locks, most of them unlocked. DIPLOMAT SEES: Emil keeps glancing at the chess room when strangers ask about it.
- Emil will sell the fact that "a lady with an accent" spent an hour in the chess room last week, for 100 francs or real charm.

---

## 1.3 THE STATION

The Office in Aurel hides on the fourth floor of the **Concord Trade Mission** on Linden Square, behind a door marked *Statistics*. Across the square rises the clock tower of **St. Aurel's**.

Load `characters/npcs.md` and `characters/companions.md` now.

**Station Chief Julian Ashby** meets the player with real warmth: fifties, silver hair, cardigan, a fly-fishing rod in the corner, tea he brews himself. He trained the player years ago, and he's proud of them. "Nightingale asked for you by reputation. That's never happened to anyone I've trained." He briefs them: NIGHTINGALE is a Directorate cryptographer with a list naming CARDINAL, a mole *in this station*. The bridge opens at dawn on day 4. "Trust no one here. Including me, if it makes you feel better." He laughs.

- **The team**, met briefly in the station's bullpen:
  - **Priya Nand**, deputy, forties, brisk, ambitious. She's cool toward the player.
  - **Otto Brandt**, communications, fifties, rumpled, charming, with nicotine fingers. He asks the player if they "fancy a flutter" on the summit.
  - **Celeste Morrow**, the ambassador's aide, thirties, polished, always on the phone.
- **Tomas Reyne**, twenty-six, eager, assigned by Ashby as the player's "legs and eyes". Recruit him now or later (`RECRUIT_TOMAS`). He mentions, innocently, that the Chief asked him to "keep him informed, so we can protect you". A careful player catches it (`DISCOVER_TOMAS_REPORTS` if they press and he admits it).
- **Tells about Ashby** (unexplained for now; see `game/puzzles.md`, *the canary trap*):
  - ANALYST SEES: the carriage clock on Ashby's desk is set an hour ahead, to Directorate time. The camel-coat man's watch was set the same way.
  - OPERATIVE SEES: Ashby sits with his back to the door, which a man with nothing to fear does.
  - DIPLOMAT SEES: he asks which hotel they're in, and he already knows the answer.
- If the player shows Ashby the train photograph, he goes grave: "Our cover photos go through three desks. I'll find out whose." He never does.

---

## 1.4 THE DEAD DROP

NIGHTINGALE's first signal comes the way the briefing said it would: a **chalk mark** on the third pillar of the **Glass Galleries**, the long glass arcade along the waterfront. It means the drop is loaded. The drop is a café, **Café Oriel**. The rolled newspaper under the umbrella stand at table six holds a message in pencil on the crossword:

> *Opera. Box seven. Tomorrow, the second act of* The Lantern Maid. *Come alone.*

- GHOST SEES: a man reading the same newspaper at the counter has been on the same page for ten minutes. The drop is being watched. Picking it up clean, with a brush pass, a switch or a distraction, keeps heat down. A clumsy pickup is +1 heat.
- ANALYST SEES: the crossword's filled answers spell nothing, but the clue numbers she circled (7, 2) match the box and the act.
- Tomas wants to come to the opera. The message says *alone*.

---

## 1.5 THE GLASS GALLERIES (set piece)

Load `game/encounters.md` now. Run **`ENC_ARCADE`**. Night falls, and the arcade empties as the player leaves the café. **Three men** step out of the shop doorways ahead and behind: a Directorate snatch team. They want the player *alive*, and they want to know who they're meeting. (Someone told them the player made contact today.)

```
[IMAGE_TRIGGER]
ID: IMG_ARCADE_CHASE
TYPE: ENCOUNTER
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Night inside a long 1970s glass-roofed shopping arcade, rain drumming on
the glass above, shuttered shopfronts, cast-iron columns, sodium light
pooling on wet tiles. The player running or braced mid-arcade; three men in
dark overcoats closing in from both ends, one lifting a hand to signal.
Reflections everywhere. Dramatic arcade chase composition.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Afterward: heat is at least 1. If the player caught one of the men, he knows nothing but his orders: *"Take the courier from the train. Find out who they meet. Don't mark the face."* **Whoever gave those orders knew the player's face before they arrived.**

**Night 1 ends.** The player can sleep at the Meridian, stay somewhere else, or walk the city. Tomorrow evening is the opera. **Record `REACH_CONTACT`** (it's sent with everything else at the end) and fetch the Act II pack.

---

## Exceptions

- **The player skips the station** and goes straight for the opera: allowed. Ashby notices, and asks Tomas to find them (Tomas appears at the opera).
- **The player tells Ashby everything:** that's natural, and exactly what Ashby wants. Every detail reaches Voss by morning (see Act II).
- **The player leaves Aurel:** `NOBODY` (`game/endings.md`).
