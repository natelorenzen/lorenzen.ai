# THE GLASS CITY · PACK-2 · BUILD 1.0-6a598b4

Bundle for: Act II begins (`REACH_CONTACT`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: CONTACT

*Nightingale, the old flame, the forger, and the moment the player's own side turns on them.* Target: 13 to 17 minutes, 9 to 12 decisions. Covers day 2 and night 2.

**Route:** papers from Ilse the bookbinder → *a free afternoon* (optional) → meet NIGHTINGALE at the opera, box seven → *find where the Queen protects the film* (possible tonight) → the frame lands → **survive the 2 a.m. raid**.

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

===== FILE: world/locations.md =====

# THE GLASS CITY: Aurel

Use this when the player goes off the authored path. Walking is quick. Trams run until midnight.

- **Aurel Central Station:** glass and iron, pigeons, a departures board that clacks. The night train arrives at dawn after the frontier post.
- **The frontier post:** where Lieutenant Brun checks papers at 2:14 a.m.
- **Hotel Meridian:** a grand, fading hotel with a glass-roofed lobby, palms, and a soft pianist. **The chess room** has eight tables, the framed *Lindqvist–Oran 1938* scoresheet (last move: **42. Qg7#**), and a wall of 64 wooden pigeonholes, a–h across and 1–8 upward, with a1 bottom left. Concierge Emil sits at the desk. There's a service stair, a laundry chute, and the lobby's glass roof outside the fourth-floor windows.
- **Linden Square:** the **Concord Trade Mission**, with the Office on its fourth floor behind the *Statistics* door, the Registry, and Ashby's corner office. Across the square stands **St. Aurel's** clock tower (a verger with keys, a louvred belfry, a clear view of the mission's courtyard). The Office **safe flat** is at 14 Linden Street, overlooking the Opera's side entrance, and only Ashby holds its key.
- **The Glass Galleries:** the long glass-roofed arcade on the waterfront. **Café Oriel** (table six, the umbrella stand drop) and the chalk-marked third pillar. At night the shutters are down and the lamps pool on the wet tiles.
- **The Aurel Opera House:** red and gilt. **Box seven** is on the second tier, and box six sits beside it. There are cloakroom mirrors, backstage passages, and a side door onto Linden Street.
- **The old town:** crooked lanes. **Varga & Daughter, Bookbinders** has a back room with a cot, a microfilm reader, and a doctor who comes when called.
- **Quay Nine:** a ferry kiosk with a back room. Anya's hideout. Knock twice, then once. Quay boats are tied below.
- **The *Aurel Herald*:** a newsroom and press hall by the river. Margot Fane's desk, and a microfilm reader.
- **The conservatory:** practice rooms, a dormitory, and a porter's lodge where the Directorate chaperone plays cards until three. There's a fire escape, and there are cello cases.
- **The tram depot:** where Brandt pays his bookie. It looks like a handler's meet.
- **The Botanical Glasshouse:** on the hill. A Victorian palace of iron and glass, with palms, a fern pool, steam boilers below, sprinkler valves, and thousands of panes. It's Voss's meeting place.
- **Ember Row:** Ashby's flat. Books, fishing flies, a photograph of Daniel.
- **The Directorate residence:** a walled villa and hothouse on the east shore. Kell's men.
- **The Glass Bridge:** three hundred meters of iron and glass. The **city end** has the checkpoint and a tollhouse tower (a sniper's nest). There's a covered pedestrian **gallery** beside the roadway. The **island end** is the Concord gate on Pier Island. Quay boats can pass beneath it.
- **Hollow Hill** (offscreen): the Directorate prison where Pavel Varga is held.

===== FILE: world/factions.md =====

# THE GLASS CITY: Factions

Track each faction's **awareness** of the player (unaware, aware or hunting) and its **standing** toward them (-2 to +2). Factions act offscreen, and they move when the player makes noise.

## The Office (the Concord station)
- **Wants:** NIGHTINGALE, the list, and no scandal during the summit.
- **Behaves:** by the book. After the frame (night 2), the Office is **hunting** the player with arrest warrants, hotel alerts, and Tomas.
- **Turns** with proof. Nand can arrest Ashby if she's handed hard evidence, and the gate officer on Pier Island will act on it at the bridge.

## The Directorate (Voss's station)
- **Wants:** NIGHTINGALE back quietly, CARDINAL protected, no scandal.
- **Behaves:** patiently, and then all at once. They're **aware** of the player from the train (Ashby's tip), and **hunting** after the Arcade.
- **Splits** on night 3: Voss (tired, bargaining) and Kell (ambitious, violent). Whichever of them holds the city end of the bridge shapes Act V.

## The Aurel police
- **Wants:** no mess in public.
- **Behaves:** they look away from quiet things and arrest loud ones. Heat 4 or 5 brings them in, and nobody gets out of their cells quickly.

## The press (the *Aurel Herald*)
- **Wants:** the story.
- **Margot Fane** is the one wildcard neither service controls. Publication is a nuclear option that protects everyone it names and ends everyone's careers.

===== FILE: game/puzzles.md =====

# THE GLASS CITY: Puzzles

Three puzzles: analytical (the queen), environmental (the Registry) and social (the mole). Never give the answer. Answer questions truthfully, from what the character could perceive. Accept any solution that works. Dice never solve puzzles, only execute plans. Hints follow `core/dm-core.md` §8 and forfeit the `_NO_HINT` event.

---

## PUZZLE 1: WHERE THE QUEEN PROTECTS IT (analytical · Act II or III)

**The question:** where did NIGHTINGALE hide the microfilm list?

**The answer:** inside the **white queen** of the chess set kept in pigeonhole **g7** of the Hotel Meridian's chess room. The felt base twists off.

**The clues:**

| Clue | Where | What it gives |
|---|---|---|
| The framed scoresheet *"LINDQVIST – ORAN, AUREL 1938. The game of the century."* Last move circled in red: **42. Qg7#** | Meridian chess room (Act I, 1.2) | the queen and the square g7 |
| The wall of 64 pigeonholes, lettered a–h across and numbered 1–8 upward | Meridian chess room | the place is laid out like a board |
| *"Where the queen protects it. Where old men play the long game. The game of '38."* | NIGHTINGALE at the opera (Act II, 2.3), with trust | it points to the chess room and the '38 game |
| Emil: "a lady with an accent spent an hour in the chess room last week" | the concierge (bought) | NIGHTINGALE was there |

- **ANALYST** reads the notation instantly: Qg7# means queen to g7, checkmate. Anyone else can ask a player in the chess room, or Emil, or work it out from the board's lettering. Asking an NPC to explain chess notation is investigation, not a hint.
- **Alternatives:** search all 64 pigeonholes. It takes a phase, Emil calls the police around the fortieth, and heat rises by 1. A Ghost can do it after midnight with Emil's key.
- **Solved:** report `PUZZLE_QUEEN_SOLVED`, plus `PUZZLE_QUEEN_NO_HINT` if unaided. The film still needs a **reader** (`acts/act-3.md` 3.2).

---

## PUZZLE 2: THE REGISTRY AT SEVEN (environmental · Act III)

**The question:** how to get into the Concord Trade Mission's Registry, and Ashby's office, during the summit gala, unseen.

**The mechanism** is observed from the **St. Aurel clock tower** across Linden Square, or by watching patiently from the square itself, which is riskier.

| Observation | What it means |
|---|---|
| The courtyard guard changes on the **quarter chime**. For about a minute, both guards chat by the gate, facing the street. | a window at :15, :30, :45 |
| A **dog handler** walks the courtyard counter-clockwise; one loop takes about eleven minutes (count it). | you know when the back of the building is clear |
| At **seven**, the cleaners arrive by the service lift and **prop the courtyard door** with a bucket while they fetch their carts. | the way in |
| The Registry clerk's lamp goes out when the tower **strikes seven**, as he leaves for supper. | the Registry is empty from 7:00 to about 7:40 |
| Ashby's office light is off. The gala has started. | the corner office is free |

- **Solution:** in through the propped door just after seven, on the quarter chime, with the dog on the far side of its loop. Up the service stair. The Registry first, then Ashby's office. Out before the clerk returns at about 7:40.
- **Inside:** the **typewriter ribbon** from Ashby's machine holds the frame note's text, reversed. Ashby's desk safe: its combination is **1405**, from the photograph signed *"Daniel, 14 May"* (see `acts/act-3.md` 3.4). The **cable log** in the Registry shows the anonymous packet was logged in by Ashby's own secretary before it "arrived".
- **Alternatives:** a Ghost can climb the drainpipe (Risky; a failure is heat plus a scramble); a turned Tomas can sign the player in as "a contractor" (that's a Diplomat's bluff); or bribe a cleaner. A forced entry trips the alarm and turns it into an escalated fight.
- **Solved** (they got in and out with the evidence using the observed pattern or an equally clever plan): `PUZZLE_ARCHIVE_SOLVED`, plus `PUZZLE_ARCHIVE_NO_HINT` if unaided. Daniel's file gives `DISCOVER_ASHBY_SON`.

---

## PUZZLE 3: THE CANARY TRAP (social · Act III)

**The question:** which of four station officers is CARDINAL?

**The answer:** Station Chief **Julian Ashby**.

**The suspects, and what each is really lying about:**

| Suspect | What looks guilty | What it really is |
|---|---|---|
| **Julian Ashby** | nothing, on the surface | the mole |
| **Priya Nand** | secret absences, lies about the dentist, cold to the player | lunches with the Ambassador, who is recruiting her to replace Ashby. Ambition. |
| **Otto Brandt** | cash handed to a hard man at the tram depot | gambling debts to a bookmaker |
| **Celeste Morrow** | envelopes to a woman in a tram shelter | leaks to Margot Fane at the *Herald*: gossip for the press (`DISCOVER_MORROW_LEAK`) |

**The canary trap**, the elegant solution: feed each suspect a **different** false detail about the bridge plan (the gate, the time, the car), then watch which version reaches Voss.

- **Carriers:** a turned Tomas (best, since the station still trusts him), a phone call in a disguised voice, a note on a desk, or a message through Morrow's reporter.
- **Watchers:** Anya reads Voss's deployment orders; a true Ilse hears what Voss is buying; or the player watches where Directorate men deploy at dusk (north gate or tram depot).
- Only **Ashby's** version appears. Report `PUZZLE_CANARY_SOLVED`, and at game over `ACH_CANARY_TRAP`.

**The evidence route** (also valid, and also `PUZZLE_CANARY_SOLVED`): name Ashby with at least **three** of these tells, reasoned together.
1. The train sweeper carried the player's **cover photo**, and cover photos need the Station Chief's sign-off.
2. Ashby knew about **box seven** before the player reported it.
3. The frame's photographs were taken from the **Linden Street safe flat**, and only Ashby holds its key.
4. His **desk clock is set to Directorate time**, like the sweeper's watch.
5. The **typewriter ribbon** (Puzzle 2).
6. **Daniel's file**: a motive.
7. The **cable log**: the packet was logged by Ashby's secretary before it "arrived".

**Wrong accusations:** accusing Nand gets the player arrested by her as a paranoid fugitive (heat +1, an escape scene). Accusing Brandt humiliates a sad man and costs trust with Tomas. Accusing Morrow tips off Margot, who now has *that* story, but not the true one. Ashby helps with any wrong accusation, gently.
