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
