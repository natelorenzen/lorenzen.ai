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
