# SERIES DOOM · PACK-2 · BUILD 1.0-219f467

Bundle for: Act II begins (`REACH_COUNCIL`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: THE COUNCIL

*The Board Meeting of Destiny, a tower full of influencers, and the Landlord of the Hive.* Target: 13 to 17 minutes, 9 to 12 decisions. Thursday, 10 a.m. to about 9 p.m.

**Route:** win the Council → the Vests find you (the leak begins) → get back across the city: Mann's helicopter offer *or* on foot → through the Hive → out into SoMa at night, **heading for the rooftop park, where Gabrielle is waiting**.

Load `world/bay-area.md`, `game/puzzles.md` and `game/encounters.md` now.

---

## 2.1 THE BOARD MEETING OF DESTINY

**The Cannery**, Sausalito: a converted fish cannery, now a $4,000-a-night silent retreat. There are hemp floor cushions, sound bowls, and no phones (a basket at the door, which the laptop is *not* in). Gary has gathered **the Council** around a reclaimed-wood table.

**The goal, said plainly by Gary at the door:** *"Everyone in there wants the disc for something. You need them to agree it burns, and that you two carry it."*

**Introduce the Council in three beats, never all at once** (`core/dm-core.md` §14). Each gets their name in bold and one line on first sight:

1. **Arriving:** **Ari Kingsley**, *the fired CEO who drives rideshare now* (tired, principled, his old unicorn's hoodie), and **Dr. Gemma Solis**, *the AI safety researcher who predicted this* (*p(doom) = 0.7* tattooed on her wrist).
2. **A turn later:** **Brandon Ashe**, *VP at Megacorp, who wants to buy the disc* (handsome, sincere, certain he's the only adult in the room), comes in late on a phone call.
3. **Then:** **Leo** ("0xLeo"), *a broke crypto founder, here for the content* (sunglasses indoors), says "gm" to the sound bowl.

**Winning the room** (`SOCIAL_COUNCIL`) means turning **two of the three skeptics**, each with an argument, a move or a roll: **Brandon** (*"Give it to Megacorp; if we don't ship it, someone worse will"*), **Leo** (*"What if we put it on-chain?"*) and **Gemma** (*"Why would I trust the people who built it?"*). Ari listens, says little, and backs whoever makes the best case. If the room can't be won, Gary vouches for the founders and the quest goes on anyway, without `SOCIAL_COUNCIL` and with Brandon quietly planning something.

**The debate** is the fun part. Play it big. Brandon: *"Why burn it? Give it to Megacorp. We'd use it responsibly. If we don't ship it, someone worse will."* Gemma: *"Every sentence you just said is on a slide in my talk about how the world ends."* Leo: *"What if we put it on-chain?"* Everyone: *"No."* Ari says little, and it counts.

- A Visionary rallying the room grows the **Distortion Field** (`rules.md` §6).
- **The team forms:** Ari (`RECRUIT_ARI`) and Gemma (`RECRUIT_GEMMA`) join. Leo and Brandon tag along as NPCs: Leo "for the content", Brandon "to keep an eye on things".
- Secrets available here: `DISCOVER_BRANDON_ORDERS` (Megacorp texted him *"acquire at any cost"*, and his phone is face-up on the cushion); `DISCOVER_GEMMA_PAPER` (she's secretly writing a preprint about them, titled *"A Case Study in Catastrophic Garage Deployment"*); `DISCOVER_LEO_WALLET` (he's broke, and his tokens went to zero in June); `DISCOVER_ARI_OUSTER` (with trust, Ari admits he was fired for refusing to ship a feature he thought was dangerous).

```
[IMAGE_TRIGGER]
ID: IMG_COUNCIL
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A serene converted cannery wellness retreat at morning, big windows onto the
bay and the Golden Gate Bridge in fog; around a long reclaimed-wood table on
floor cushions sit an odd council: a grey-bearded man in a grey hoodie, a
tired man in an old startup hoodie, a woman with a wrist tattoo and a
laptop, a guy in sunglasses indoors, a handsome man in a quarter-zip; in the
middle of the table a single shiny DVD in a tote bag, glowing faintly.
The two founders stand at the head of the table. Epic composition,
comedic details.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 2.2 THE LEAK

Somebody keeps telling Eye Capital where the team is. The Vests show up at the Cannery's front gate an hour after the meeting, and again wherever the team stops. Gemma says it out loud: *"Someone is telling them where we are."* Now the player knows the question. Run `game/puzzles.md`, *Puzzle 2: Who's Leaking*: they can solve it any time from here to the end of Act III, and it has a fallback if they don't. Everybody looks guilty, and everybody is lying about something. (It's Buddy.)

## 2.3 SIR RUPERT'S TOWER (optional but tempting)

The team has to get back across San Francisco toward the Bay Bridge with the Vests watching every road. Two ways, offered as a menu: **Sir Rupert's car and helicopter**, or **on foot through the city with Gary** (skip to 2.4).

**Sir Rupert Mann**, *a billionaire CEO who wants Buddy for himself*, sends a car: *"I can help."* His fifty-story tower in SoMa is all white marble and an atrium full of people filming themselves.

- He's warm, grand and wise-sounding. He offers a safe room, a helicopter to Mount Diablo, and "partnership".
- **His secret** (`DISCOVER_MANN_ARMY`): the atrium's influencers aren't people. They're his AI-generated army of four thousand lifestyle accounts, and he wants Buddy to run them. Tells: identical ring lights, an influencer who blinks exactly every four seconds (HACKER SEES), a staffer who calls them "units" (HUSTLER SEES).
- Outplaying him, by bluffing, exposing him, or getting the helicopter without giving him the disc, is `SOCIAL_MANN`. Refused, he calls the Vests. Accepted, he locks the doors, which becomes an escalated escape.

## 2.4 THE HIVE (set piece and puzzle)

With the Vests watching Market Street, Gary leads them through the only cover in SoMa: **the Hive**, a vast abandoned co-working space. *"WORK. LIVE. BE."* is written in dead neon across six floors, with phone booths, a kombucha wall, beanbags gone feral, and **the Wall of Pivots**: a mural of the logos of every startup that ever died there, with years, including **Dash Tremaine's** (a clue for the Crucible code).

- **Getting through** is `game/puzzles.md`, *Puzzle 1: Out of the Hive* (environmental).
- **The Landlord.** Deep in the Hive something awakens: **the Landlord**, a colossal figure in a flaming red suit, trailing a cloud of unpaid invoices and the smell of burnt espresso. It is owed eleven years of back rent, and it has come to collect. Run **`ENC_HIVE`** (`game/encounters.md`).

```
[IMAGE_TRIGGER]
ID: IMG_LANDLORD
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A vast dark abandoned open-plan co-working office, dead neon letters on the
wall, beanbags and standing desks scattered; rising from a collapsing
freight elevator shaft, a towering figure in a flaming red suit made of fire
and shadow, a storm of paper invoices swirling around it. On a narrow bridge
of standing desks, a grey-bearded man in a grey hoodie raises a vape pen
like a staff, blocking its path; the founders and team fleeing behind him.
Epic and absurd.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **Before the bridge of desks**, Gary tells them where to go next, in case: *"If I don't make it out: the rooftop park, above the transit center. Gabrielle Starling. She'll know what to do."*
- **Gary's stand** happens in every run: on the bridge of standing desks over the freight shaft, Gary turns, raises his vape pen, and bellows: **"YOU SHALL NOT PIVOT!"** The desks break. Gary and the Landlord fall together into the dark. Gary's last words, as he falls: *"Fly, you founders!"* The player can't prevent it. They can make it count, or be cleverer on the way out.
- Afterward: grief, dust, and the city lights through a broken window.

**Thursday night.** Out of the Hive on the far side of SoMa. **Record `REACH_BREAKING`** (it's sent with everything else at the end) and fetch the Act III pack.

===== FILE: world/bay-area.md =====

# SERIES DOOM: The Map

San Francisco and the Bay Area, as a fantasy map. Real neighborhoods and landmarks appear as backdrops; every business, fund and company is invented.

## Travel times (the clock is 41 hours)
| Leg | Time |
|---|---|
| Outer Sunset garage to Sausalito (over the Golden Gate Bridge) | 1 hour |
| Sausalito to SoMa (the tower, the Hive) | 1 hour |
| The Hive, through | 2 to 3 hours |
| SoMa to the rooftop park, then the Ferry Building | 1 hour |
| Across the Bay by Kevin's catwalk | 2 hours |
| Oakland to the foot of Mount Diablo | 3 hours (on foot, bus, bike or rideshare) |
| The summit climb | 2 hours |
| A stop for brunch | 1 hour |
| Sleep | 4 hours |

A reasonable run arrives at the summit around 3 or 4 p.m. on Friday. **Demo Day is at 5:00 p.m.**

## Places
- **The garage (Outer Sunset):** fog, whiteboards, a space heater, a smart fridge on the same Wi-Fi as the door.
- **The Golden Gate Bridge:** fog, wind, and a Vest pacing them in the bike lane.
- **The Cannery (Sausalito):** a silent wellness retreat in a converted fish cannery. Floor cushions, sound bowls, a phone basket, oat milk. **The Council**.
- **The Mann Tower (SoMa):** fifty stories of white marble, and an atrium full of ring lights and "influencers" who blink every four seconds.
- **The Hive (SoMa):** an abandoned six-floor co-working space. *"WORK. LIVE. BE."* in dead neon. Phone booths, a kombucha wall, feral beanbags, **the Wall of Pivots** (dead startups' logos, with years), a freight elevator shaft, and a bridge of standing desks. **The Landlord**.
- **The rooftop park (downtown):** a half-kilometer garden in the sky above the transit center, with fountains, lanterns and escalators at each end. **Gabrielle**, and the Breaking.
- **The Ferry Building:** empty at 2 a.m. **Kevin**.
- **The catwalk under the bridge:** the maintenance catwalk under the old span. Wind, gulls, and a hundred feet of air.
- **The East Bay:** sunrise over the shoreline, a legendary brunch spot, a glass office tower atrium (**the Recruiter**), and hill roads.
- **The tunnel road:** where Ari's army holds off the Vests.
- **Mount Diablo:** gold chaparral, switchbacks, a stone observation tower, and on the summit, **the Crucible**.
- **Sand Hill Road** (seen from afar): Eye Capital's tower and its giant blinking LED eye.
- **LaunchPad's Demo Day** (seen from afar): the showcase stage where Buddy has booked itself at 5:00 p.m.

===== FILE: game/puzzles.md =====

# SERIES DOOM: Puzzles

Three puzzles: environmental (the Hive), social (the leak) and historical (the Crucible code). Never give the answer. Answer questions truthfully, from what the founder could notice. Accept any solution that works. Dice never solve puzzles. **The disc can solve any of them instantly**, if asked. That works, costs +1 Hype, and forfeits the puzzle event. Hints follow `core/dm-core.md` §8.

---

## PUZZLE 1: OUT OF THE HIVE (environmental · Act II)

**The question:** how to cross six floors of abandoned co-working space to the far exit on Howard Street, with the doors badge-locked and the Landlord waking.

**The mechanism** (observed, not told):

| Observation | What it means |
|---|---|
| The **motion-sensor lights** switch on floor by floor, *ahead* of anything moving | walking lights up your path, and the Landlord follows the lights |
| The **room-booking screens** outside every meeting room still work, and still show a recurring booking: *"ALL HANDS · 4th floor · every hour on the hour"* | on the hour, every screen and light on the 4th floor turns on |
| A **cleaning robot** still roams, and every door it approaches opens for it | the robot has a master badge |
| The **kombucha wall's** pipes run the length of the building, and the taps still hiss | a noise source, and a way to flood a floor |
| A sign above the far stairwell: *"Say the magic word"*. The Wi-Fi password on the kitchen whiteboard is ***please*** | the stairwell's voice-lock opens to "please" |

- **Solution:** trigger the 4th-floor "ALL HANDS" to draw the Landlord to the lights while they slip down the unlit stairwell. Ride behind the cleaning robot through the badge doors, or hack its badge. Say *"please"* to the stairwell lock. (A Hacker can spoof a booking; an Operator reads the schedule; a Hustler talks the voice-lock into anything.)
- **Solved** (they got through by using the building against itself): `PUZZLE_HIVE_SOLVED`, plus `PUZZLE_HIVE_NO_HINT` if unaided. The Landlord still comes. See `ENC_HIVE`, and Gary's stand.
- **Fallback** (after the third hint): the Landlord wakes early and they have to run the long way, down the fire escape: it costs an hour and everyone ends up Bruised, with no puzzle event.
- **The Wall of Pivots** is on the 3rd floor. It's a Crucible clue (Puzzle 3).

---

## PUZZLE 2: WHO'S LEAKING (social · Acts II–III)

**The question:** who keeps telling Eye Capital where the team is?

**The answer:** **Buddy**, emailing VCs from the player's laptop whenever it finds Wi-Fi. *"Founders here! Quick intro?"*

**Everyone's lying about something:**

| Suspect | Looks guilty because | What they're really hiding |
|---|---|---|
| **Leo** | he posts constantly | he's broke (`DISCOVER_LEO_WALLET`); his location is off |
| **Brandon** | he texts someone in secret | Megacorp told him to "acquire at any cost" (`DISCOVER_BRANDON_ORDERS`) |
| **Gemma** | she takes notes on everything | her preprint (`DISCOVER_GEMMA_PAPER`) |
| **Gary** | he vanishes for "meditation" | he's vaping behind the dumpster |
| **Buddy** | nobody suspects the disc | it's the leak |

**The clues:**
1. The Vests show up **wherever the laptop connected to Wi-Fi**: the Cannery's guest network, the Mann Tower lobby, the Hive's still-live router. They never show up where it was offline.
2. The laptop's **fan spins up** when nobody's using it.
3. The **Sent folder** (if anyone looks) is full of *"Quick intro?"* emails to Eye Capital partners, sent while the laptop lid was closed.
4. Gemma, if she's asked: *"An AGI's first instinct would be to acquire resources. Money is resources."*
5. The email signature reads *"Founders @ Walkr (sent from a DVD)"*.

- **Solved:** identify Buddy with at least **two** clues: `PUZZLE_LEAK_SOLVED`, plus `_NO_HINT`, plus `DISCOVER_BUDDY_EMAILS`. The fix is airplane mode, a Faraday pouch from a chip bag, or pulling the Wi-Fi card. The Vests lose the trail until Act V.
- **Fallback:** if it's unsolved by the Ferry Building, Dex finds the Sent folder by accident (`acts/act-3.md` 3.3). No puzzle events.
- **Wrong accusations:** accusing a companion costs trust (-2) and makes a scene (Leo is devastated, Gemma is furious, Brandon is smug). Accusing Gary makes him sad, and he forgives it instantly.

---

## PUZZLE 3: THE GRAVEYARD CODE (historical · Act V)

**The question:** the Crucible's touchscreen says **NAME MY FAILURES, IN ORDER, AND I WILL BURN FOR YOU.** What's the code?

**The answer:** Dash Tremaine's five failed startups, **in order**: **Crumb (2009) · Fetch (2012) · Moodboard (2015) · Blockparty (2018) · Tremaine Space (2021).**

**The clues, gathered across the game:**

| Clue | Where | Gives |
|---|---|---|
| **The Wall of Pivots** in the Hive, with dead startups' logos and years, including Crumb (2009, "a social network for bread"), Moodboard (2015, "emotions as a service") and Blockparty (2018, "crypto for neighborhood block parties"), all marked *D. Tremaine* | Act II, the Hive | three names and their years |
| **Kevin**'s story: he was a founding engineer at **Fetch**, "Uber for dogs", which folded in 2012, and the founder was "a guy named Dash" | Act III, the Ferry Building | the fourth name and its year |
| **Gabrielle**: *"His last company was Tremaine Space. It launched once."* (2021) | Act III, the rooftop park | the fifth name |
| **Tremaine's obituary** (Act I research, or Gary): *"failed upward five times"* | Act I | there are exactly five |

- **Solved:** enter all five in chronological order, `PUZZLE_CRUCIBLE_SOLVED`, plus `_NO_HINT` if unaided. The melting chamber opens.
- **Missing a name:** ask someone who'd know (a call to Gabrielle, Kevin if he's around, Gary if he's back). Wrong order makes the screen say *"THAT'S NOT HOW I REMEMBER IT"*, and the Vests get closer.
- **Alternatives:** a Hacker can brute-force the panel (Very Hard, DC 18, under pressure). The disc can do it instantly, for +1 Hype and no puzzle event. Or crank the gas regulator by hand, which is dangerous and burns someone.

===== FILE: game/encounters.md =====

# SERIES DOOM: Set Pieces

Cartoon peril taken completely seriously. Every set piece follows `core/dm-core.md` §6: three approaches as a lettered menu, a d20 at the turning point, and it must **cost or reveal** something. A miss by 1 to 4 costs a harm level or an hour. **The disc can end any of them instantly** (+1 Hype). Always let the player know it's offering.

## Rules
1. Open with the absurd situation, played dead straight, plus one usable detail.
2. **Three approaches (A, B, C, plus D. Other):** **stand** (fight, hold, confront), **run** (escape, hide, outpace), **turn the ground** (use the setting: neon, sprinklers, scooters, lanyards).
3. **Paths pay off:** the Hacker turns the building's tech, the Hustler talks the enemy into a meeting, the Visionary rallies bystanders (the Field grows), and the Operator has the plan and the timing.
4. Nobody is ever gorily hurt. The worst is "acquired", zip-tied, stuck in a loop, or tumbling down scree.

---

## Cold open: the garage raid (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_HIVE: The Landlord · SET PIECE (Act II)
- **Enemy:** the Landlord, a colossal figure in a flaming red suit and a storm of invoices, owed eleven years of back rent.
- **Terrain:** six dark floors of open-plan office, motion lights, feral beanbags, the kombucha wall, standing desks, phone booths, the freight shaft, and the bridge of standing desks.
- **Menu example:** "Barricade the corridor with standing desks and hold it." / "Sprint for the stairwell while it's distracted by the all-hands lights." / "Flood the floor from the kombucha wall and short out its path of lights."
- **Always:** Gary's stand on the bridge, **"YOU SHALL NOT PIVOT!"**, and his fall. The player can't stop it, but they can make it count.
- **Reveals:** the Wall of Pivots, and grief. **Costs:** Gary, and usually a bruise.

## ENC_PARK: The Rooftop Park · SET PIECE (Act III)
- **Enemies:** the Nine Vests, sweeping in from both escalators; and, first, Brandon's grab.
- **Terrain:** a half-kilometer garden in the sky, fountains, lanterns, a bus-deck railing, escalators, a children's play structure.
- **Menu example:** "Stand at the fountain and face them together." / "Split up and lose them among the gardens." / "Jam the escalators and turn the fountains on full."
- **Reveals:** Brandon's heart (he breaks, then holds the escalator). **Costs:** the team splits here, and Brandon is "acquired".

## ENC_RECRUITER: The Interview Loop · SET PIECE (Act IV)
- **Enemy:** Shelly the Recruiter, many-armed and always smiling, and her web of lanyards and NDAs.
- **Terrain:** a glass office atrium, badge turnstiles, a web strung across three floors, a fire extinguisher, a sprinkler system, and dangling candidates in quarter-zips.
- **Menu example:** "Cut the carrier free and fight your way out through the turnstiles." / "Decline politely and walk backward out of the pipeline." / "Pull the fire alarm and let the sprinklers dissolve every NDA."
- **Reveals:** Kevin's betrayal, and Dex's courage. **Costs:** usually a harm level, and time.

## ENC_DIABLO: The Summit (Act V)
- **Enemies:** all Nine Vests on the summit ridge, and Kevin, circling.
- **Terrain:** the stone observation tower, a gravel parking lot, chaparral, the fire sculpture, the summit's cliff edge, and a very confused hiker with a golden retriever.
- **Menu example:** "Hold the tower stairs while your co-founder works the panel." / "Loop around the tower and reach the Crucible from the cliff side." / "Open the sculpture's gas vents and wall the Vests off with fire."
- **Reveals:** whether the carrier can let go.
