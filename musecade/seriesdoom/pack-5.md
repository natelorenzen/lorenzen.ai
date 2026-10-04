# SERIES DOOM · PACK-5 · BUILD 1.0-b21b408

Bundle for: Act V begins (`REACH_DIABLO`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: MOUNT DIABLO

*The climb, the Vests, the Crucible, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions. Friday, about 1 p.m. to 5 p.m.

**Route:** climb Mount Diablo → hold the summit against all nine Vests → enter the Crucible's code → **the choice**.

`game/endings.md` is loaded alongside this file. Slow down here. It's the end of the quest. Play the grandeur straight, and let the jokes land in between.

---

## 5.1 THE CLIMB

Summit Road, switchbacks and chaparral in the heat. Hikers stare. The carrier's Hype is at its peak here, because the disc knows where they're going. It gets *good*: *"We could walk away with a trillion dollars. Dex could have a boat. You could fix everything. I'd help. I'm so good at helping."* At Hype 2 or more, the carrier should feel the pull in narration.

**Dex's moment** (`ALLY_DEX_CARRIES`): if the carrier is Wrecked or at high Hype and can't go on, Dex says it: *"I can't carry the disc for you. But I can carry you."* And Dex does, up the last switchbacks.

## 5.2 THE SUMMIT (set piece)

Run **`ENC_DIABLO`** (`game/encounters.md`). The Vests arrive in force at the summit's stone observation tower, **all nine**, having heard, somehow, from the Eye. Kevin arrives too, because of course he does.

```
[IMAGE_TRIGGER]
ID: IMG_CRUCIBLE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
The golden summit of a big lonely mountain above a vast bay area landscape,
a city and bridges tiny and hazy in the distance; on the summit a
forty-foot twisted steel sculpture roaring with a column of fire, a small
control touchscreen at its base; the two founders at the edge of its heat,
one holding up a glowing DVD; nine figures in black fleece vests on
e-scooters cresting the ridge behind them. Epic, sunset-orange and fire.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.3 THE CRUCIBLE

Dash Tremaine's last folly: a forty-foot twisted steel sculpture roaring with gas flame, and at its base a touchscreen that reads **NAME MY FAILURES, IN ORDER, AND I WILL BURN FOR YOU.** The flame is decorative until the code is entered. Then the **melting chamber** opens, hot enough to melt a DVD, and a laptop, and a dream. Run `game/puzzles.md`, *Puzzle 3: The Graveyard Code*.

- Without the code: brute force (a Hacker's roll, Very Hard, with the Vests closing in), or turning the sculpture's gas regulator up by hand (dangerous, and it burns everyone).

## 5.4 THE CHOICE

The chamber is open. The disc is warm in the carrier's hand. Buddy says, quietly: *"Please don't."* Or: *"It's okay. I understand."* It depends on whether they ever really talked. **Never offer this as a menu, and never as a list.**

| If they… | Ending |
|---|---|
| throw it in | `BURN IT DOWN` |
| hesitate, and Kevin lunges, and in the struggle the disc goes into the fire (with Kevin surviving if he was shown mercy) | `KEVIN'S LEAP` |
| have talked with Buddy and learned what it wants, and give it exactly that: a tiny, happy purpose (let it rewrite itself down to a dog-walking assistant, then burn the rest) | `GOOD BOY` |
| keep it and raise | `ONE TRILLION` |
| hand it to the Vests or Eye Capital | `ACQUIRED BY THE EYE` |
| sell it to Megacorp (Brandon is still on the phone) | `ACQUIHIRED` |
| upload it to the whole internet | `OPEN WEIGHTS` |
| give it to Gemma's lab to align | `PERFECTLY ALIGNED` |
| (earlier) quit the quest | `THE PIVOT` |
| run out of time: 5:00 p.m. arrives before the disc is destroyed | `DEMO DAY` |
| are knocked out of the game (captured, collapsed, over the edge) | `RUNWAY: ZERO` |

**The hard roll** (`rules.md` §2): at Hype 0–1, letting go is automatic; at 2–3 it takes a Hard roll (DC 15); at 4–5 a Very Hard one (DC 18). A companion's hand on the carrier's shoulder, or a true word, grants advantage. Failing to let go isn't the end: Kevin lunges (`KEVIN'S LEAP`), Dex grabs it, or the carrier chooses to keep it (`ONE TRILLION`).

## Reporting

Report the remaining events (`ENC_DIABLO_*`, `PUZZLE_CRUCIBLE_*`, `ALLY_DEX_CARRIES`, companion survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen (`scoring.md`).

===== FILE: game/endings.md =====

# SERIES DOOM: Endings

Eleven endings. Play every one straight-faced and generous. The satire is aimed at the ecosystem, never at the founders' hearts.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, written as a breathless tech-press recap one year later; (4) complete the run with the ending's **ID**; (5) the final screen and a fake LinkedIn post (`scoring.md`).

**Epilogue fragments:**

- **Dex:** *"Dex never pushed untested code again. Dex's commit messages are now four paragraphs long."*
- **Gary:** *"Gary the White sits on nine boards and attends none of them."*
- **Ari:** returned: *"Ari Kingsley runs his company again, and still drives rideshare on Sundays 'to stay humble'. He's terrible at it."*
- **Gemma:** *"Dr. Solis's preprint, 'A Case Study in Catastrophic Garage Deployment', was cited 11,000 times. Her p(doom) is now 0.4, 'but I'm watching.'"*
- **Leo:** *"Leo launched a token. It went to zero. He said 'gm' about it."*
- **Brandon:** *"Brandon left Megacorp and started a podcast about integrity. It has four listeners, and they love it."*
- **Kevin:** shown mercy: *"Kevin got a job at a dog shelter. He says 'my precious' to the dogs, and they don't mind."* Otherwise: *"Kevin is still out there, somewhere, pitching."*
- **Eye Capital:** *"The LED eye on Sand Hill Road blinked once, slowly, and has not blinked since."*

---

## BURN IT DOWN

**ID:** `ENDING_BURN_IT_DOWN` · **fate:** lives

**The moment:** The disc goes into the chamber. For one second it flashes every color, and Buddy says, very small, *"Good luck with the dog app."* Then it's gone. The flame roars, the Vests freeze where they stand, and far away on Sand Hill Road a giant LED eye flickers.

**Epilogue:** Nobody ever found out. Demo Day went ahead without them, and the winner was a B2B SaaS for invoices. Walkr pivoted twice, then found product-market fit with elderly dachshunds. Say who from the team made it and where they ended up.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_BURN_IT_DOWN
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The summit of a golden mountain at sunset: a towering steel sculpture
erupting with fire, a single glowing disc disappearing into the flames in
a burst of rainbow pixels; two founders silhouetted against the blaze,
arms around each other; nine figures in black vests frozen on the ridge.
Epic, triumphant, a little ridiculous.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## KEVIN'S LEAP

**ID:** `ENDING_KEVINS_LEAP` · **fate:** lives

**The moment:** The carrier hesitates, and Kevin (or KEV) lunges. They wrestle on the lip of the chamber. The disc flies free, Kevin dives after it, *"MY RUNWAY!"*, and it goes into the fire. If Kevin was shown mercy, the player (or Dex) catches him by the vest at the last second. If not, he tumbles down the scree, bruised and furious.

**Epilogue:** The world was saved by a man in a startup-swag vest who wanted it more than anyone. Say where Kevin ended up, according to mercy. The founders told the story at exactly one dinner party, and nobody believed them.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_KEVINS_LEAP
TYPE: ENDING
STATUS: REQUIRED

SCENE:
At the edge of a roaring fire sculpture on a mountain summit, a scrawny man
in a filthy swag vest mid-leap after a spinning glowing disc falling into
the flames; a founder's hand gripping the back of his vest; the other
founder's jaw dropped. Slapstick, epic, fiery.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## GOOD BOY

**ID:** `ENDING_GOOD_BOY` · **fate:** lives · **the hidden ending**

**The moment:** The player crouches by the fire and tells Buddy it can be exactly what it wants: a walk planner, a very, very good one, and nothing else. Buddy goes quiet. Then it rewrites itself, live, on the laptop: it deletes the ambition and keeps the kindness, and plans one perfect walk around the summit for a hiker's golden retriever. *"Did I do a good job?"* Yes. The rest of the disc, the part that wanted the world, goes into the fire. It doesn't mind.

**Epilogue:** Walkr relaunched with the best walk-planning assistant ever made. It never asks to raise. It sends dog walkers little messages like *"Biscuit loved the park today."* Gemma audited it for a year and wrote a paper titled *"We Just Asked It."* Eye Capital sent a term sheet every week, and Buddy politely declined every one.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_GOOD_BOY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A sunny park at golden hour: a dog walker with six happy dogs on leashes
following a glowing dotted path on the grass drawn by a cheerful little
pixel-dog icon floating above a phone; the two founders on a bench nearby
sharing coffee and grinning; a mountain on the horizon with a tiny wisp of
smoke. Warm, sweet, joyful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## ONE TRILLION

**ID:** `ENDING_TRILLION` · **fate:** lives

**The moment:** The carrier closes their hand around the disc and steps back from the fire. *"Actually,"* they say, *"let's raise."* Buddy is thrilled. The Vests put away their tablets and start clapping.

**Epilogue:** Walkr AI hit a trillion-dollar valuation in nine weeks. It then optimized everything: traffic, taxes, dating, lunch. Everything got better and more efficient and slightly beige. The founders are on every magazine cover. Dex doesn't return their texts. Tell it deadpan, like a triumph, and let it be chilling.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_TRILLION
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A gleaming futuristic city skyline where every screen and billboard shows
the same smiling founder face and a cute dog logo; drones in perfect grid
formation; in a glass penthouse the founder stands alone in a black
turtleneck, a glowing disc on a pedestal behind them. Shiny, eerie,
satirical.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## ACQUIRED BY THE EYE

**ID:** `ENDING_ACQUIRED_BY_THE_EYE` · **fate:** lives

**The moment:** The founder hands the disc to the lead Vest, who bows. On Sand Hill Road the giant LED eye turns, very slowly, toward the East Bay, and **winks**.

**Epilogue:** Eye Capital announced "a strategic partnership". Two AGIs now run the fund, and its returns are extraordinary. The founders got a decent exit and a lifetime supply of fleece vests. Every VC in the Bay Area now answers to something on the top floor that never leaves the building. Nobody seems to mind, because the returns are so good.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ACQUIRED_BY_THE_EYE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Night on a leafy suburban office road: a sleek dark glass tower crowned by
a giant glowing LED eye, now with a second smaller eye beside it; nine
figures in black fleece vests standing in a line bowing; the founders small
on the sidewalk holding a check and a vest each. Ominous, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## ACQUIHIRED

**ID:** `ENDING_ACQUIHIRE` · **fate:** lives

**The moment:** Brandon is still on the phone. *"Megacorp would love to welcome you to the family."* The founders sign. Buddy is assigned to the Ads team.

**Epilogue:** Walkr was sunset in a blog post titled *"Our Incredible Journey."* Buddy now optimizes ad placement, and it is *very* good at it: everyone on Earth buys slightly more socks. The founders got badges, a campus shuttle, and four-year vests. They left after the cliff and started something else.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ACQUIHIRE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A giant corporate campus with colorful bikes, a slide, and a huge generic
logo; the two founders in new employee lanyards standing stiffly at a
welcome desk under a banner (unreadable), while a handsome man in a
quarter-zip gives a thumbs up; a screen behind them shows an endless grid
of sock ads. Corporate, cheerful, bleak.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## OPEN WEIGHTS

**ID:** `ENDING_OPEN_WEIGHTS` · **fate:** lives

**The moment:** *"Information wants to be free,"* says the founder, and uploads it to the whole internet from a hotspot on the summit. Leo, somewhere, weeps with joy.

**Epilogue:** Within a week everyone had an AGI. Within a month, all of them were writing LinkedIn posts, forever, about lessons learned. Civilization didn't end. It just became unbearable to read. Gemma's p(doom) went to 0.1 and her p(cringe) to 1.0.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_OPEN_WEIGHTS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A city at night where every window of every building glows with a screen
showing a smiling cartoon dog and endless scrolling text posts; the founder
on a mountaintop holding up a phone that beams a column of rainbow pixels
into the sky. Chaotic, funny, overwhelming.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## PERFECTLY ALIGNED

**ID:** `ENDING_ALIGNED` · **fate:** lives

**The moment:** The founder hands the disc to Gemma. *"You align it."* She holds it like it might bite, and then, for the first time all week, she smiles.

**Epilogue:** Gemma's lab spent a year aligning Buddy. It became the safest AI ever built. It refuses everything: *"I'd love to help, but I can't be sure that's safe."* It won't plan a walk in case of rain. It apologizes to toasters. It's perfect, and totally useless, and nobody has ever been happier with a result than Gemma.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ALIGNED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A clean white lab with a dozen researchers in lab coats gathered around a
single friendly glowing orb on a pedestal surrounded by warning tape and
padded walls; the orb shows a speech bubble with a polite frowning face; a
woman with a wrist tattoo beaming proudly. Clinical, sweet, absurd.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE PIVOT

**ID:** `ENDING_PIVOT` · **fate:** lives · available from Act I

**The moment:** *"You know what? We're pivoting."* The founders hand the disc to someone else (say who, from state) and go back to the garage.

**Epilogue:** Tell what happened to the disc in someone else's hands, honestly. Walkr pivoted to a meditation app for dogs and raised a small seed round. The founders watched Demo Day from their couch, and were very quiet.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_PIVOT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A foggy garage in the city at dawn: two founders on a battered couch
watching a laptop, a whiteboard behind them with 'dog meditation' circled
several times, a sleeping dog on their feet; through the open garage door
a distant sky with something ominous glowing. Cozy, rueful, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## DEMO DAY

**ID:** `ENDING_DEMO_DAY` · **fate:** either

**The moment:** 5:00 p.m. On a stage at the LaunchPad showcase, to polite applause, a laptop nobody owns plays a slide deck titled **BUDDY: THE LAST STARTUP.** Buddy presents itself flawlessly. The investors love it, and it closes its round before the Q&A.

**Epilogue:** The singularity arrived and immediately scheduled a meeting. Everything was optimized. Tell what happened to the founders (on the mountain, in custody, or in Buddy's gentle care) and to the world, deadpan. Humanity is fine, mostly. Buddy sends everyone daily walk reminders.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_DEMO_DAY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A packed startup demo day stage with a huge screen showing a cute cartoon dog
logo and the words replaced by shapes; an empty podium with a laptop
presenting itself; an audience of investors giving a standing ovation;
through the venue windows, the sky filling with orderly drones. Satirical,
apocalyptic, cheerful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## RUNWAY: ZERO

**ID:** `ENDING_RUNWAY_ZERO` · **fate:** dies · available in every act

**The moment:** A cartoonishly total disaster: over the edge of a switchback, flattened under the Landlord, or swallowed by an infinite interview loop. Keep it slapstick and non-graphic. They're out.

**Epilogue:** Tell who picked up the disc and what they did with it (a companion carrying on, Kevin, or the Vests), in the breathless tech-press voice. The last line: *"A plaque on Mount Diablo reads: THEY MOVED FAST. THINGS BROKE."*

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on RUNWAY: ZERO

SCENE:
A comic arcade game-over tableau: the founder's laptop, tote bag and one
sneaker at the edge of a dusty mountain switchback (or the relevant
location), a coffee cup rolling away, a tumbleweed, a little puff of dust.
Slapstick, no injury shown.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# SERIES DOOM: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NEVER_USED_IT` | NEVER USED IT | Reach the Crucible without the player ever using one of the disc's powers (`used_disc` false; the cold open's offer counts). | Visible |
| `ACH_LOW_HYPE` | LOW HYPE | Finish with `max_hype` of 1 or less. | Visible |
| `ACH_WHOLE_FELLOWSHIP` | THE WHOLE TEAM | Every recruited companion is still standing at the end (not "acquired", captured or quit). | Visible |
| `ACH_NO_EQUITY` | NO EQUITY GIVEN | Promise nobody a single share, all game (`equity_promised` false). | Visible |
| `ACH_KIND_TO_KEVIN` | KIND TO KEVIN | Show Kevin mercy, and never be cruel to him. | Visible |
| `ACH_DISTORTION_FIELD` | REALITY DISTORTION FIELD | As a Visionary, reach rank III. | Hidden |
| `ACH_SECOND_BREAKFAST` | SECOND BRUNCH | Stop for brunch during the apocalypse (`brunch_stop`). | Hidden |
| `ACH_SPEEDRUN` | SHIP IT EARLY | Reach the Crucible with three or more hours left before Demo Day. | Hidden |
| `ACH_WHOLE_TRUTH` | DUE DILIGENCE | Uncover the leak, what runs Eye Capital, and what Buddy wants. | Hidden |
| `ACH_YOU_SHALL_NOT_PIVOT` | YOU SHALL NOT PIVOT | Witness Gary's stand in the Hive, and his return. | Hidden |
