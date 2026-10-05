# THE SEA GLASS INN · PACK-2 · BUILD 2.0-bffed21

Bundle for: Act II begins (`REACH_LIARS`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: THE LIARS

*The podcast, the diary, the boy everyone blames, a mother's porch light, and a harbor log that remembers everything.* Target: 13 to 17 minutes, 9 to 12 decisions. Tuesday and Wednesday.

**Route:** Priya's studio and the diary → Theo at the boatyard → Lydia on the beach, and Sadie's room → the harbor office → *Aunt Bea's kitchen at 2 a.m.* (optional) → piece together the bonfire night → **Wednesday night: someone wants her gone**.

Load `world/island.md`, `world/sadie.md` and `game/puzzles.md` now (they're in this pack). The player can take these scenes in any order. Push gently toward the next one when a scene is done.

---

## 2.1 TUESDAY: THE STUDIO

**Priya's** garage, converted into a studio: foam on the walls, a ring light, and a **wall of string**: photos, timelines, maps, a year of obsession. She plays the new girl a clip from episode 1: the diary, read aloud in Priya's steady podcast voice.

- **The diary:** twenty-two entries from last May and June, supposedly Sadie's, found by her father in her desk and "shared with the police". Theo grabbing her arm, Theo's temper, Theo's truck, *"If anything happens to me, it was Theo."* Priya has scans of every page. Run `game/puzzles.md`, *Puzzle 1: The Diary*. The player can start it here, and finish it whenever she's found enough.
- **Priya is hiding something** (`DISCOVER_PRIYA_TEXT`). Tells: she won't talk about 11:30; her timeline wall has a gap between 11:10 and 11:50 that's been torn and re-pinned; she has a second, older phone she never uses. CHARMER, with trust 1+, or THE TELL on *"She never contacted anyone"*, gets her there. She breaks down. It's a big moment. The player can keep it secret, or not.
- Priya has one of **Sadie's film rolls**, given to her two days before the bonfire, never developed: *"I couldn't. What if she's in it?"*
- If the player hasn't recruited her yet, this is where Priya asks: `RECRUIT_PRIYA`.

## 2.2 THE BOY EVERYONE BLAMES

The **Reyes boatyard**. *MURDERER* still ghosts through the white paint on the shed. **Theo** (*Sadie's boyfriend, the one the diary blames*) is under a hull, and doesn't come out. **Grandpa Rafa** (*his grandfather, who owns the boatyard*) offers her a soda and a warning: *"He's had a year of people like you."*

- **Getting past his door** takes more than one visit, or a move, or real honesty: telling him what she's doing and why, or telling him about her own rumor at home (her `backstory` matters here). Then `RECRUIT_THEO`.
- **The amber sea glass** is taped inside the little dinghy ***SADIE*** in the back of the shed, under the thwart. Theo didn't know it was there. It hits him hard.
- **Diary clue:** Theo sold his truck in **April**, to pay his father's appeal lawyer (Rafa has the receipt on the wall). The diary has him driving her home in it on June 12.
- **His secret** (`DISCOVER_THEO_ALIBI`) comes with trust 2, or at the lighthouse at night, or with THE TELL on *"I was home"*: he was at the lighthouse from 11:15 to midnight, waiting for her, because she asked him to meet her there. `SOCIAL_THEO_TRUST` is the moment he tells her, if she believes him out loud.
- He mentions his father, the cannery, the fire, once, and shuts down. (A thread for Act III.)

## 2.3 THE PORCH LIGHT

Sunset on the western beach, below the glass house on the cliff. **Lydia Vale** (*Sadie's mother*) walks the tide line every evening, barefoot, with a glass of wine.

- She's polite and far away. The right question (about Sadie as a person, not a case; or about the porch light) or a true thing about Sadie gets her talking: `SOCIAL_LYDIA`. Then, very quietly, the go-bag (`DISCOVER_LYDIA_KNEW`), and the key to Sadie's room: *"He's in Boston until Wednesday. Find her before he does."*
- **Sadie's room** (the house is empty; the cleaner's day off; Whispers +1 if she's seen going in, +2 if Vale's security camera catches her and she hasn't dealt with it):
  - Her **real notebooks** from school, full of doodles, crossings-out, five different pens, coffee rings. The diary scans are one pen, one pressure, no mistakes. (A diary clue, and PHOTOGRAPHER SEES it at once.)
  - **The red sea glass**, inside a hollowed-out paperback of *Rebecca* on her shelf. Note: *"I was fourteen when I found out my dad only smiles with his teeth. I started keeping things where the sea keeps them."*
  - Her **camera bag**: the camera is gone (it went with the go-bag), but a **film roll** is sewn into the lining.
  - A photo booth strip of Sadie and Theo at twelve, in the dinghy. On the back, in her looping hand: *"the Chapel. always."*
- **Tension:** if Whispers is 3 or more, Vale's car comes up the drive early. Out the window, down the cliff path, or bluff it (a set of choices, one roll).

## 2.4 THE HARBOR OFFICE

**Walt Sumner** (*the harbormaster, grumpy and honest*) keeps everything on paper. He'll show a polite kid the **harbor log** for last summer's bonfire night if she asks right (Bea's niece helps):

- **Low tide 11:40 p.m.** High tide 5:50 a.m.
- ***Second Wind* out 12:20 a.m., "no lights, P.V.?"**, in Walt's handwriting. In at 3:10 a.m.
- **The boat registry:** Hank Pruitt's boat, *Miss Behavin'*, had a $41,000 loan. Paid off in full on July 30 last year by **Cedar Point Holdings**, whose address is Vale's lawyer's office (`DISCOVER_HANK_PAID` if she connects it: a Sleuth sees it at once; anyone else needs the lawyer's name, which is on Vale's yacht club letter if she took the job, or in the Herald on Priya's wall).
- **Hank's report:** the sandal was found at 7:10 a.m. *"on a dry rock below the lighthouse"*. (The timeline's key clue: `game/puzzles.md`, *Puzzle 2*.)

## 2.5 THE BONFIRE NIGHT

Run `game/puzzles.md`, *Puzzle 2: The Bonfire Night*. It spans Acts II and III: the pieces come from Priya's recordings, Mason's stories (Jules can get them: *"Mason saves everything, he's that guy"*), the harbor log, Hank's report, Theo's secret and Sadie's film. Keep a visible list for the player if she asks (`RECAP`). She can solve it any time before the storm.

## 2.6 AUNT BEA'S KITCHEN (optional, but it matters)

2 a.m., Tuesday or Wednesday. Bea can't sleep, and neither can she. Cocoa. If the player is honest with her about what she's doing (the note, the glass, the lighthouse), Bea tells her the worst thing she's ever done: Sadie came to this kitchen and said she was scared of her father, and Bea told Hank (`DISCOVER_BEA_TOLD`, `SOCIAL_BEA_TRUTH`). *"I did what you're supposed to do. And a week later she was gone."* From here on, Bea covers for her: Whispers −1, and she gets the car keys.

## Wednesday night

Back at the inn after dark. Her bike's tires are slashed. Under her door, a typed note on the yacht club's letterhead, unsigned: *"Summers here are short. Go home."* Whispers +1. If she took Vale's job, the note instead says: *"Glad you're on the team."* Either way, somebody's watching.

**Wednesday night ends Act II.** Record `REACH_DARKROOM` (it's sent with everything else at the end) and fetch the Act III pack.

---

## Exceptions

- **She confronts Vale directly:** he's hurt, patient, and devastating: he calls Bea, gently, about "the stress the poor girl is under". Whispers +2. Bea is forced to ground her for a day unless she's already on her side.
- **She accepts Vale's scholarship offer to drop it:** `THE DEAL` (from Act II). Play one more scene so it lands.
- **She decides it's not her business and has a normal summer:** `SUMMER'S END` (from Act II).

===== FILE: world/island.md =====

# THE SEA GLASS INN: Halcyon Island

A small island an hour by ferry off a northern coast. Four hundred year-round people, three thousand in summer, lobster boats, one school, one church, one bakery, and a rumor for every occasion. Fictional.

- **The harbor and ferry landing:** the *Halcyon Belle* runs twice a day. The **harbormaster's office** (Walt Sumner) keeps the **tide board**, the **harbor log** (every boat in and out, by hand, since 1962) and the **boat registry** (who owns what, and who holds the loan).
- **The Sea Glass Inn:** a shingled Victorian on the bluff above the harbor, eleven rooms, Aunt Bea's kitchen, a porch that sags, and a jar of sea glass by the front desk. Her room is under the eaves, with a view of the dead lighthouse and Gull Rock. The cellar has an **old darkroom** from when the inn had a photography club, with trays, a red bulb and chemicals Bea keeps "for the smell of 1985".
- **Doucette's Bakery:** Marguerite's. Everyone comes through between 8 and 10. Sadie's bench outside, with its brass plaque.
- **The cove:** where the summer kids have bonfires. The Ashfords' speaker. A lifeguard chair.
- **The dead lighthouse:** on the point, dark since 1998. The lamp room holds a **seven-sided brass lamp housing with seven empty slots** and a **harbor chart painted on the curved wall** (1930s, with every pier, rock and piling numbered).
- **The causeway:** a line of black rocks from the point to **Gull Rock**, walkable for about ninety minutes either side of low tide. It floods fast, and the current between the rocks at mid-tide is strong enough to drown a grown man.
- **Gull Rock:** a small islet off the point, and the **old keeper's cottage**, roofless from the outside. Inside the back two rooms, rebuilt with tarps and driftwood, there's a woodstove, a cot, two hundred library books, and a girl who's been dead for a year.
- **The sea cave ("the Chapel"):** under the lighthouse point on the ocean side, reachable only at low tide across the rocks. A high dry ledge at the back, where Sadie and Theo used to go. It floods to the ceiling at high tide.
- **The Reyes boatyard:** Grandpa Rafa and Theo. A shed that smells of cedar and diesel, *MURDERER* painted over but still showing through, and a little sailing dinghy named ***SADIE*** that Theo built her when they were twelve.
- **The Vale house:** glass and cedar on the western cliff, with its own dock and the boat *Second Wind*. Lydia's porch light is always on.
- **The cannery ruins:** the burned-out **Halcyon Cannery** on the south shore, fenced off, VALE COASTAL RESORT · COMING SOON on the fence. Its long wooden pier half collapsed, with numbered pilings still standing like black teeth. You can see it from the Vale house.
- **The Grange Hall and the harbor green:** the Sea Glass Festival on Saturday, and the **anniversary vigil and bonfire at 10 p.m.** on the beach below the green.
- **Tides this week** (on the fridge and the harbor board): low tide about **7:40 a.m. and 8:05 p.m. on Monday**, about 50 minutes later each day: **Thursday about 10:10 a.m. and 10:35 p.m.** (new moon, extra low), **Friday about 11 a.m. and 11:25 p.m.**, **Saturday about 11:50 a.m. and midnight**.
- **Last summer's bonfire night** (from the harbor log): low tide at **11:40 p.m.**, high tide just before 6 a.m.

===== FILE: world/sadie.md =====

# THE SEA GLASS INN: What Really Happened

For the storyteller only. Reveal it through evidence and people, never as a summary.

## Three summers ago: the cannery fire
- Preston Vale's resort plan needed the cannery land, and the cannery's owners wouldn't sell. On an August night, Vale took *Second Wind* round to the cannery pier, went inside with a gas can, and left. The fire took the whole building. The insurance paid, the owners sold, and the watchman, **Tomás Reyes**, was blamed for a space heater and took a plea deal to avoid a longer sentence. He's still in prison on the mainland.
- **Sadie (fifteen)** was out on the south shore that night shooting the stars with her new digital camera. She filmed the fire starting, and her father's boat at the pier, and her father walking back down it with a can in his hand. She didn't understand what she'd seen for a year.

## Last summer: the plan
- At sixteen, she understood. She told no one but Aunt Bea, in the inn's kitchen, that she was scared of her father. Bea told Deputy Hank. Hank told Vale. Vale took her phone "for her own good" and started driving her everywhere.
- Sadie decided to disappear, and to make it stick. She hid the camera's memory card in a jar sealed with candle wax, tied inside the **seventh piling** of the cannery pier. She wrote a fake diary about Theo, in one weekend, and left it where her father would find it. She asked Marguerite for help, and Marguerite said yes.

## The bonfire night, minute by minute (the answer to the timeline)
| Time | What actually happened | What the evidence shows |
|---|---|---|
| 10:40 | Sadie at the bonfire, laughing, in a white sundress | Mason's first story (10:41) |
| 11:00 | St. Brendan's bell rings eleven | Priya's recording: the bell under the music |
| 11:10 | Sadie leaves the bonfire alone, walking toward the point, carrying one sandal | Mason's second story (11:12): Sadie in the background, alone, heading for the point. Sadie's last roll: the bonfire from behind, shot from the path |
| 11:15 | Theo arrives at the lighthouse, as she asked. He waits | His secret; the lighthouse door's new chain (he broke the old one) |
| 11:20 | Sadie goes round the ocean side of the point, avoiding the lighthouse, and waits at the causeway | Her last roll: a frame of the causeway rocks, still wet |
| 11:32 | Sadie texts Priya from the causeway: *"don't look for me. i mean it."* | Priya's secret; the phone company records (if the player gets them from Lydia) |
| 11:40 | Low tide. Sadie walks across the causeway to Gull Rock | The harbor log: low tide 11:40 |
| 11:50 | Mason's third story: the bonfire, no Sadie | Mason's third story |
| 12:05 | Theo gives up and goes home | Grandpa Rafa |
| 12:20 | *Second Wind* leaves the Vale dock without lights | The harbor log (in Walt's hand: *"no lights, P.V.?"*). A red herring: Vale went looking for Sadie on the water, because he suspected |
| 5:50 a.m. | High tide | |
| 7:10 a.m. | A jogger finds **one sandal on a dry rock** below the lighthouse, **above the high-tide line** | Hank's report. **The key clue:** if Sadie had gone into the water at 11:30, the sandal would have been under water at 5:50 and washed away. It was placed there *after* high tide, by Marguerite at dawn, as Sadie asked |

**The solution:** nobody took Sadie. She walked out to Gull Rock at low tide, on her own, and someone planted the sandal the next morning.

## This year
- Sadie has lived on Gull Rock for a year: Marguerite's bread, library books, a woodstove, a lot of thinking. She's changed: tougher, stranger, lonelier, and still certain she was right.
- She's watched the new girl since the ferry. The new girl is an outsider, has no reason to lie, and (Sadie heard Bea tell Marguerite) was sent away because of a rumor that wasn't true. Sadie thinks that makes her perfect. She lays the sea glass trail to test her and to lead her to the proof, because she's too afraid to go near the cannery pier herself: it's in full view of her father's house.
- **Her plan for the bonfire:** walk into the vigil alive, in front of the whole island and Priya's microphone, hold up the proof, and accuse her father. She intends to say that she ran because her father *and* Theo frightened her. She has not decided to tell the truth about the diary. That's the player's fight.

## The seven pieces and their notes (in age order)
| Piece | Where | Note |
|---|---|---|
| WHITE (6) | the lamp room, Act I | *"I was six the first time I climbed up here. Dad said the light was dead. I said lights don't die. They wait."* |
| GREEN (9) | Sadie's bench at the bakery, Act I | *"I was nine when Marguerite taught me to braid bread. She said everything strong is three weak things twisted together."* |
| AMBER (12) | taped inside the dinghy *SADIE* at the boatyard, Act II | *"I was twelve when a boy built me a boat, and I pretended not to cry."* |
| RED (14) | Sadie's bedroom, inside a hollowed-out copy of *Rebecca*, Act II | *"I was fourteen when I found out my dad only smiles with his teeth. I started keeping things where the sea keeps them."* (a pointer to the cave) |
| VIOLET (15) | the tin box in the sea cave, Act III | *"I was fifteen when I watched the cannery burn. I was holding a camera. I didn't understand for a year."* |
| COBALT (17) | from Sadie's own hand, Act III or IV | *"I was seventeen when I died. It was the bravest thing I ever did. It wasn't the kindest."* |
| BLUE (18) | her pillow, the first night | *"I'm eighteen now. They're all lying. Start where the light used to be."* |

===== FILE: game/puzzles.md =====

# THE SEA GLASS INN: Puzzles

Three puzzles: textual (the diary), social (the bonfire night) and environmental (the lamp room). Never give the answer. Answer questions truthfully, from what she could notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8, and every puzzle has a fallback (§14).

---

## PUZZLE 1: THE DIARY (Act II)

**The question:** is the diary real?

**The answer:** no. It was written all at once, recently, by someone who knew the island well but not every detail: **Sadie herself**.

**The impossibilities** (each one is found, never told):

| Clue | Where | What it shows |
|---|---|---|
| *"June 12: Theo drove me home in his truck and wouldn't let me out"* | the diary | Theo **sold the truck in April** (Rafa's receipt on the boatyard wall, 2.2) |
| *"May 30: the ferry was cancelled for the storm, so I was stuck with him all day"* | the diary | the **harbor log** shows the *Halcyon Belle* ran both trips on May 30, in calm weather (2.4) |
| One pen, one pressure, no crossings-out, no coffee rings, twenty-two entries | the scans | Sadie's **real school notebooks** have five pens, doodles and mess (2.3). A diary kept over six weeks doesn't look like this |
| *"The Brooding One was in a mood again"* | the diary | that's **Priya's** nickname for Theo, from the podcast. Sadie never called him that (Priya, if asked) |
| The looping `g` with a flick at the end | the diary scans | it's the **same hand as the sea glass notes**. Sadie wrote it. (SLEUTH or PHOTOGRAPHER SEES it once she has two notes and the scans side by side) |

- **Solved:** name **two** impossibilities and conclude the diary is fake: `PUZZLE_DIARY_SOLVED`, plus `_NO_HINT` if unaided, plus `DISCOVER_DIARY_FAKE`. Realizing Sadie wrote it herself isn't required, but it's the best version.
- **Fallback** (after the third hint): Priya finds the ferry log clue herself, too late for her show, and says it out loud. No puzzle events; `DISCOVER_DIARY_FAKE` still counts.

---

## PUZZLE 2: THE BONFIRE NIGHT (Acts II–III)

**The question:** what happened to Sadie between 11:10 and midnight?

**The answer:** nobody took her. She walked to the causeway on her own and crossed to Gull Rock at low tide (11:40). The sandal was planted the next morning. (Full timeline in `world/sadie.md`.)

**The pieces:**
1. **Mason's three stories** (Jules gets them): 10:41 Sadie at the fire; 11:12 Sadie in the background, alone, walking toward the point; 11:50 no Sadie.
2. **Priya's recording:** the church bell ringing eleven under the music, which syncs the clips. And, if she confesses, the **11:32 text**: *"don't look for me."*
3. **Theo's alibi:** he was at the lighthouse from 11:15 to 12:05 and never saw her. So she didn't go to the lighthouse.
4. **Sadie's last roll:** the causeway rocks, still wet, in the dark.
5. **The harbor log:** low tide **11:40 p.m.**; high tide **5:50 a.m.**
6. **Hank's report:** the sandal was found at 7:10 a.m. **on a dry rock**, below the lighthouse, above the high-tide line. If she'd gone into the sea at 11:30, it would have been underwater at 5:50 and washed away.
7. **The red herring:** *Second Wind* out at 12:20 without lights. (Vale searching the water. It looks like guilt. It isn't this kind.)

- **Solved:** the player works out that Sadie **left on her own and crossed to Gull Rock**, backed by at least **three** pieces (the dry sandal and the low tide are the heart of it): `PUZZLE_TIMELINE_SOLVED`, plus `_NO_HINT` if unaided.
- **Wrong answers:** blaming Vale for taking her (he didn't), or Theo (he didn't), costs nothing but time, unless she says it out loud in town (Whispers +1) or to Theo (trust −2).
- **Fallback:** the "SPRING" roll (3.3) proves Sadie is alive anyway. No puzzle events.

---

## PUZZLE 3: SEVEN COLORS (Act IV)

**The question:** how do the seven pieces go in the lamp room's seven slots, and what does the light show?

**The mechanism** (observed, not told):
- The brass lamp housing has **seven slots** in a ring. One slot has a tiny engraved **1** under it (the keeper's first position, facing the harbor).
- Each note gives Sadie's **age** when it happened: 6, 9, 12, 14, 15, 17, 18. The blue note says *"Start where the light used to be"*, and the white note says *"I was six the first time I climbed up here"*: the lamp room is where her story starts.
- With a lamp inside, each piece throws a colored beam onto the **harbor chart** painted on the wall. In the wrong order, the beams scatter. In the right one, they converge.

- **Solution:** set the pieces **in order of her age**, starting at slot 1 and going round: **white (6) · green (9) · amber (12) · red (14) · violet (15) · cobalt (17) · blue (18)**. The beams cross in a point of white light on the chart: **CANNERY PIER · PILING 7**.
- **Solved:** `PUZZLE_SEAGLASS_SOLVED`, plus `_NO_HINT` if unaided. Report `ACH_EVERY_PIECE` at game over if all seven were found by her (the cobalt counts: Sadie gives it).
- **Missing pieces:** with five or six, the point of light is a smear across the south shore: "the cannery pier", but not which piling. She can search the pier (a Hard roll, DC 15, and an hour in the storm), or go back for the missing pieces.
- **Fallback** (after the third hint): Sadie tells her (`acts/act-4.md`, *Exceptions*). No puzzle events.
