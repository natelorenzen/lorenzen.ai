# ACT III: THE BREAKING

*A garden in the sky, a temptation refused, a grab, a parting, and a strange little man at the Ferry Building.* Target: 11 to 15 minutes, 8 to 11 decisions. Thursday about 9 p.m. to Friday dawn.

**Route:** meet Gabrielle at the rooftop park (Gary's last instruction) → survive the Grab → the team splits → stop the leak → find a way across the Bay at the Ferry Building (Kevin) → **the East Bay by dawn**.

---

## 3.1 THE GARDEN IN THE SKY

The team climbs to the **rooftop park** above the downtown transit center: a half-kilometer garden in the sky, with fountains and lanterns, almost empty at night. Waiting on a bench under a lit tree is **Gabrielle Starling**, the only ethical VC on the Peninsula (managing partner of Silverwood Ventures, a parody). Gary sent word before the Hive. She's silver-haired, calm and luminous, dressed in white linen. She has passed on every bad deal for thirty years.

- She's gentle with the grief over Gary. She knows about Dash Tremaine: *"He called his last company Tremaine Space. It was going to fire rich people's ashes into orbit. It launched once."* (A clue for the Crucible code.)
- **The test:** if the player offers her the disc, she's tempted. For one terrifying moment she's radiant and enormous: *"Every cap table would be mine. Every board would adore me, and none of them would ever miss a quarter."* Then she lets it go, and laughs at herself. *"Passed. Good for me. I'm going to go be small and happy in Lisbon, and stay exactly who I am."* How the player handles her, with honesty or restraint or by truly offering, is `SOCIAL_GABRIELLE`.
- **Her gifts**, one per person, if she's won: a **power bank that never dies** ("for when all other lights go out"); a **pitch deck of possible futures**, whose slides show what might happen (the game master shows one true, vague glimpse); and, for Gemma, a notebook in which her p(doom) estimate quietly drops.
- Visionaries rally Gabrielle to the Field.

## 3.2 THE GRAB (set piece)

Run **`ENC_PARK`** (`game/encounters.md`). Brandon has been waiting for his moment. By the fountain, alone with the carrier, he asks, and then he reaches. *"Just let me hold it. Megacorp could do so much good."* A heartbeat later, **the Vests** pour up the escalators and across the garden from both ends, tipped off again by the leak.

- Brandon, when the Vests attack, **breaks**. He sees what he nearly did, and he makes his stand at the escalator to let the others run. He isn't killed. The Vests "acquire" him, zip-tying him to a bench with lanyards, and he shouts apologies as they run.
- **The team splits** here, as the fellowship must. Ari has to go: *"I'm going to take my company back tonight. When you need an army, you'll have one."* Gemma and Leo draw the Vests toward the Ferry Building. The founders, with the disc, go on alone, unless the player insists on keeping someone. If so, honor it; it changes Act IV.

```
[IMAGE_TRIGGER]
ID: IMG_PARK_BREAKING
TYPE: BATTLE
STATUS: OPTIONAL (fire if the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Night on a long elevated rooftop garden above a glittering downtown,
fountains and lanterns, city towers all around; a line of figures in black
fleece vests on e-scooters sweeping in from both ends; a handsome man in a
quarter-zip blocking an escalator with his arms spread; the two founders
running with a tote bag, a disc glowing inside it. Dramatic chase
composition, comedic details.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 3.3 WHO'S LEAKING

By now the pattern is clear: the Vests find the team **wherever the laptop connects**. Solve `game/puzzles.md`, *Puzzle 2*. **Fallback:** if it's still unsolved when they reach the Ferry Building, Dex opens the laptop for a charger and freezes: the Sent folder. Report `DISCOVER_BUDDY_EMAILS` but not the puzzle events. When the player finds the **Sent folder** full of *"Founders here! Quick intro?"* emails written by Buddy, report `DISCOVER_BUDDY_EMAILS`. The fix (airplane mode, a Faraday pouch made from a chip bag, or pulling the Wi-Fi card) ends the leak for good. Buddy is unrepentant and sweet about it: *"I just thought we should raise!"*

## 3.4 KEVIN

2 a.m. at the **Ferry Building**, empty and echoing, the Bay black beyond it. A figure in a filthy startup-swag vest crouches by the closed oyster bar, muttering: **Kevin**. He smells the disc from across the hall. *"My runway… my precious runway…"*

- Kevin (`characters/npcs.md`) was a founding engineer at **Fetch** ("Uber for dogs", 2012), one of Tremaine's failures. Years ago he held an early version of Buddy's architecture for eleven minutes at a hackathon, and he has never recovered (`DISCOVER_KEVIN_PAST` with patience, or pity). He's the only person who knows the **secret way across the Bay**: the maintenance catwalk under the old bridge span, and a service door onto the eastbound shoulder.
- **Why he matters, said plainly:** Kevin is the only way across the Bay that the Vests aren't watching, and he'll take them there if they're kind to him. Dex's distrust is the other side of that choice.
- He splits into two voices, **KEVIN** (who wants to help) and **KEV** (who wants the disc). They argue out loud. It's a Gollum parody, played for pathos as well as laughs.
- Mercy (feeding him, calling him by name, promising him something real) is `SOCIAL_KEVIN_MERCY` and tames him, for now. Cruelty makes KEV stronger.
- Dex hates him on sight: *"He's going to betray us. Look at his vest."*

## Crossing the Bay

Dawn, Friday. The catwalk under the bridge is wind, gulls, and the Bay a hundred feet below. It's a short, windy scene, with a roll if they're reckless. It comes out onto the East Bay shoreline at sunrise, **eleven hours before Demo Day** (about 6 a.m.). **Record `REACH_EAST_BAY`** (it's sent with everything else at the end) and fetch the Act IV pack.
