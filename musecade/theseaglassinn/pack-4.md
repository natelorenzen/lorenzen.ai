# THE SEA GLASS INN · PACK-4 · BUILD 2.0-20b8fdc

Bundle for: Act IV begins (`REACH_STORM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-4.md =====

# ACT IV: THE STORM

*The girl on Gull Rock, the seventh piece, a lamp that lights again, and a pier in a storm.* Target: 12 to 16 minutes, 8 to 11 decisions. Friday (or Thursday night, if she went to Gull Rock).

**Route:** meet Sadie → the cobalt glass and her plan → Marguerite → the lamp room: set the seven pieces → **the cannery pier in the storm, for the proof** → the long night.

---

## 4.1 THE GIRL ON GULL ROCK

**If the player crossed on Thursday night:** the keeper's cottage looks like a ruin until she steps through the back door into warmth: a woodstove, a cot, a tarp ceiling, two hundred library books in stacks, and a girl with short dark hair and a knife she's never used, standing very still.

**If she didn't:** Friday, before dawn, the player wakes up and **Sadie is sitting at the end of her bed**, in a fisherman's sweater, salt in her hair. She came across at low tide and up the inn's back stairs. *"You took your time."*

**Sadie Vale** (*the missing girl, alive*): magnetic, funny, rehearsed, exhausted. Play her as the most interesting person the player has ever met, and never quite trustworthy. She has been waiting a year to be seen.

- **What she tells, freely:** the fire, the camera, her father, the week he took her phone, Aunt Bea and Hank (if Bea hasn't confessed, Sadie says it bluntly, and it lands hard), the night she walked across the causeway, and the plan: *"Saturday. The bonfire. Everyone who ever lit a candle for me. I walk in, alive, with the proof, and he's finished."* (`sadie_plan_known`)
- **What she hides:** the diary. If the player hasn't proved it's fake, Sadie lets her think her father wrote it. If the player has, Sadie shrugs: *"It had to be someone. Someone with a motive."* She says Theo will "be fine". She intends to tell the bonfire that Theo scared her too.
- **The cobalt sea glass** is on a string around her neck. She gives it to the player: *"You'll need all seven."* Note: *"I was seventeen when I died. It was the bravest thing I ever did. It wasn't the kindest."*
- **Why she needs the player:** the proof is in the seventh piling of the cannery pier, in plain view of her father's house. *"If he sees me, I really disappear. If he sees you, you're a nosy kid on a dare."* She tells the player to find the spot "the way I left it": with the glass, in the lamp room. It's a test. (If the player asks outright, Sadie says: *"If you can't figure out the light, you can't handle him."*)
- **Talking to her for real** (`SOCIAL_SADIE_TRUTH`): the player has to get Sadie to say what she did to Theo, out loud, without excuses, and to see it as something she did to a person. Pressure, kindness, the player's own backstory (being the one everyone believed a lie about) and Theo himself can all get her there. It rarely happens in one conversation. It can happen here, in the lamp room, in the long night, or at the bonfire. Only honest play earns it; tricks and threats don't.
- **Theo and Sadie:** if Theo is with the player, this is the hardest scene in the game for him. Let him rage, or go silent, or walk out. Don't resolve it for him.

## 4.2 MARGUERITE

**Marguerite** (*the ancient baker*) meets them at the causeway with a basket, or she's in the bakery's back kitchen when the player comes to ask. She isn't sorry. *"She came to me crying. What should I have done, call her father?"* `DISCOVER_MARGUERITE_SECRET` (the flour on the pillow, the basket, the gulls). She'll tell the truth about Theo, if asked: *"I told her it was wicked. She did it anyway. I helped anyway. We'll both answer for it."* If the player has been kind to Jules, Marguerite gives her one thing: the old key to the lighthouse lamp room's cabinet, with a working battery lamp in it.

## 4.3 THE LAMP ROOM

Run `game/puzzles.md`, *Puzzle 3: Seven Colors*. The lamp room at dusk, the seven slots, the seven pieces, the harbor chart on the wall, and a battery lamp. Set right, the colored light falls on the chart and the colors cross, white, on **CANNERY PIER · PILING 7**.

```
[IMAGE_TRIGGER]
ID: IMG_SEVEN_COLORS
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dusk in an old lighthouse lamp room: a seven-sided brass lamp housing set
with seven glowing pieces of sea glass (white, green, amber, red, violet,
cobalt, blue), a lamp inside throwing seven colored beams across a faded
harbor chart painted on the curved wall, where the beams cross in one white
point on a pier; a seventeen-year-old girl and her friends staring at it;
storm clouds massing outside the windows. Magical, triumphant, ominous.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**Friday night, the storm comes in** early: a summer gale, wind, sideways rain, the ferry cancelled, the power out across the island by 10. Low tide about 11:25 p.m.: the pier's lower pilings will be reachable. Nobody will be watching the cannery in this. Except someone is.

## 4.4 THE PIER (set piece)

Run **`ENC_STORM`** (`game/encounters.md`): the cannery pier in the storm. The seventh piling. The jar sealed with wax, wrapped in a plastic bag, tied under the crossbeam, a year in the salt. And a white boat, running without lights, coming round the point toward the cannery. Vale has been watching the new girl for five days.

- **Getting the jar** is `DISCOVER_VALE_CRIME` when they see what's on the card (a phone that takes the card, or Priya's laptop: the fire, the boat, and Preston Vale walking back down the pier with a gas can, date-stamped, in Sadie's shaking fifteen-year-old voice: *"Dad?"*).
- **Vale on the pier**, if it comes to that: he never raises his voice. *"Give me the card, and you go home a hero with a scholarship. Keep it, and you're a troubled girl who broke into a fenced site in a storm and made things up about a grieving father. Who do you think they'll believe?"* (`took_vale_deal` if she gives it to him: see *Exceptions*.)

## 4.5 THE LONG NIGHT

After the storm: candles in the inn's kitchen, the power still out, everyone wet. Conversations that change the ending. Let the player choose who to sit with:

- **Theo**, on the porch, about his father, now that there might be proof. (`BOND_THEO` if she's earned it.)
- **Priya**, who wants to broadcast it all tomorrow, live, and whose reasons are a tangle of truth and ambition. (`BOND_PRIYA` if she chooses the truth over the story.)
- **Jules**, who's terrified for Marguerite, and who has been braver than anyone. (`BOND_JULES`.)
- **Aunt Bea**, if she hasn't confessed yet (`SOCIAL_BEA_TRUTH`).
- **Sadie**, if she's here, about what she's going to say tomorrow, and about Theo (`SOCIAL_SADIE_TRUTH`).
- **Lydia**, by phone or on the beach at dawn, if the player chooses to tell her Sadie is alive. She cries. She asks one question: *"Is she warm?"*

## Saturday dawn

The storm's gone. The island is scrubbed and gold. There's seaweed on the harbor green, and the festival bunting is going up anyway. **Record `REACH_BONFIRE`** (it's sent with everything else at the end) and fetch the Act V pack.

---

## Exceptions

- **She gives Vale the card on the pier:** he takes it, thanks her, and the scholarship arrives by email by morning. Sadie's plan collapses. That's `THE DEAL`, unless the player made a copy first (a clever player can: Priya's laptop, a phone photo of the screen). Then it's a very different Saturday.
- **She's caught on the pier at Whispers 4 or more, without the card:** Vale calls Hank, Hank calls her mother, and she's charged with trespassing and sent home on the first ferry: `FRAMED`.
- **She's Hurt a second time:** `THE LAST FERRY`. Bea puts her on the boat herself, crying.
- **The player never solves the lamp room:** after the third hint, Sadie loses patience and tells her: *"Piling seven. I'd hoped you'd be smarter."* No puzzle events.
