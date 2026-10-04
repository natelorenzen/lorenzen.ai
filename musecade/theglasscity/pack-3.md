# THE GLASS CITY · PACK-3 · BUILD 1.0-6a598b4

Bundle for: Act III begins (`REACH_BURNED`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: BURNED

*Hunted by both sides, with no station and no cover, the player turns spy-hunter.* Target: 12 to 16 minutes, 8 to 12 decisions. Covers day 3, from dawn to evening.

**Route:** find a place to hide and allies → read the microfilm → set the canary trap to find the mole → break into the Registry during the gala for proof → *Margot Fane* (optional) → **name CARDINAL before night falls**.

Load `world/lore.md` now: the history behind Ashby, Voss and the Office.

Heat is at least 3. Public actions roll with disadvantage until the player lowers it (`rules.md` §2).

---

## 3.1 GOING DARK

Dawn, rain, and the player's photograph at every hotel desk in the city. They need a hole to hide in, and allies. Offer the act's first menu. For example:
- "Knock twice, then once, at the ferry kiosk on Quay Nine." *(Anya)*
- "Go to Ilse's bindery by the back lane." *(if she's met)*
- "Walk into the Herald newsroom and ask for Margot Fane." *(if she's met or known)*

**Anya Sorel** (`characters/companions.md`). She opens the kiosk's back room: a cot, a gas ring, a bottle, and a map of the city with Directorate patrol routes penciled in her hand. *"I saw the file. It's good work. Too good for Voss. It's one of yours."* She joins if the player lets her (`RECRUIT_ANYA`). What's between them is warm, wary and unspoken, and it stays PG-13.
- She'll admit, with trust or pressure, that she's NIGHTINGALE's handler, and that she helped Lena decide (`DISCOVER_ANYA_HANDLER`).
- Voss already half suspects her. Every hour she spends with the player is a risk to her.

**Tomas**, if he's still in contact: frightened, torn. He has been reporting to Ashby, and he'll admit it if pressed (`DISCOVER_TOMAS_REPORTS`). He'll turn when he sees **real evidence** against Ashby and trust is at least 1 (`ALLY_TOMAS_TURNED`). A turned Tomas is the perfect instrument for the canary trap, because the station still trusts him.

## 3.2 READING THE FILM

If the player has the microfilm (Act II, 2.4), or gets it now (the Meridian is watched in daylight: heat risk, and Emil can be bought), they need a reader:

- **The Herald**, through Margot Fane, but she wants the story (`SOCIAL_MARGOT` if she's won over with a real deal).
- **Ilse's** machine, which is safe only if she's true, or doesn't realize what it is.
- **The station's own reader**: a break-in, best done during the Registry run (3.4).

The film holds the Directorate's own index card: **CARDINAL. Aurel station. Recruited 1963. Real name: JULIAN ASHBY.** Report `DISCOVER_CARDINAL` when it's read. It is proof, but it's the Directorate's word against his, so the player needs more to make it stick (the Registry, the canary trap, a confession).

## 3.3 THE CANARY TRAP (the social puzzle)

Run `game/puzzles.md`, *Puzzle 3: The Canary Trap*. Four suspects (Ashby, Nand, Brandt, Morrow), each lying about something. The classic spy's answer is to feed each of them a *different* false detail about the bridge plan, then watch which version reaches Voss.

- Channels: Tomas, if turned, carries four slightly different "plans" into the station. The player can also use phone calls, a message through Morrow's reporter, or a note left on Nand's desk.
- Watchers: Anya sees Voss's deployment orders. Ilse hears what Voss is buying. Or the player sees for themselves where the Directorate men gather (the north gate or the tram depot).
- Only **Ashby's** version shows up. Report `PUZZLE_CANARY_SOLVED` (and `ACH_CANARY_TRAP` at game over if solved this way). An evidence-based solution, from tells and contradictions, is also valid (see the puzzle).

## 3.4 THE REGISTRY (the environmental puzzle)

The station's **Registry** holds the proof that the frame came from inside: the cable log, and the **typewriter ribbon** from the machine that typed the anonymous note. Tonight is the summit gala. At seven, the station empties to a skeleton staff. The way in is observation: see `game/puzzles.md`, *Puzzle 2: The Registry at Seven*. The vantage point is the **clock tower of St. Aurel's** across Linden Square, a Ghost's climb or a verger's bribe.

```
[IMAGE_TRIGGER]
ID: IMG_CLOCK_TOWER
TYPE: DISCOVERY
STATUS: OPTIONAL (fire if the player watches from the tower and the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dusk from inside a church clock tower: the back of a huge illuminated clock
face, gears and a bell, and through a louvre the player looking down with
binoculars onto a rain-wet square and a lit office building across it: a
guard with a dog, a cleaner propping a door, one lit fourth-floor window.
Sodium orange and cold blue.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Inside, the prizes:

- **The ribbon:** the frame note's text, reversed, on the ribbon from **Ashby's own typewriter**. That's hard proof.
- **Ashby's desk safe:** the combination is a date. The photograph on his desk, a boy with a fishing rod, is signed *"Daniel, 14 May"*. The combination is **1405**. Inside is Daniel Ashby's file: killed in 1962 in an Office operation, with a death certificate reading "car accident", and Ashby's own note in the margin: *"They lied to my face."* Report `DISCOVER_ASHBY_SON`.
- **The station's microfilm reader**, if they need it.

## 3.5 MARGOT FANE (optional)

The *Herald* reporter, sharp and fearless, would print "CONCORD SPY CHIEF WAS DIRECTORATE MOLE" on the front page by dawn if the player gives her proof. Winning her, with a deal, a promise or the truth, is `SOCIAL_MARGOT`. It opens `FRONT PAGE` as an ending, and she can also be the player's insurance: *"If I don't call by six, print it."*

## Night 3 begins

The act ends when the player has **named CARDINAL** (by any route), or when **night 3 falls**, whichever comes first. Voss sends word through Anya or Ilse: *"The Glasshouse. Midnight. Come alone. We should talk, you and I."* **Record `REACH_MOLE`** (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **The player goes straight to Ashby's flat** to confront him: fine. Run 4.1 early, as Act IV's opening.
- **The player gives up and runs:** `NOBODY` (`game/endings.md`).
- **The player publishes through Margot now:** `FRONT PAGE` is available from Act III. Play the dawn it breaks, then end.

===== FILE: world/lore.md =====

# THE GLASS CITY: Lore

Loaded at Act III. It's the history the player can uncover. Reveal it only through what they find, read or are told.

---

## The world, 1974

Two blocs have spent thirty years not quite at war.

- **The Concord**, a league of western republics with parliaments, newspapers and a great deal of money. Its foreign intelligence service is officially the *Concord Office of Statistical Research*, and everyone calls it **the Office**.
- **The Directorate**, the eastern union governed by a council of directors. Its State Security, **the Directorate**, is feared at home and respected abroad.
- **Aurel**, a small, rich, neutral republic on a lake between them. It has banks, watchmakers, opera and arcades. Everyone spies here, and the Aurel police mostly let them, as long as nobody makes a mess in public.

Invented countries, invented services. No real nation is portrayed.

## The Glass City

Aurel's nickname has two meanings. There are the **glass arcades** of the waterfront, the Glass Galleries, built in 1889, where the whole city shops, courts, and passes messages under the umbrellas. And there's the saying that *in Aurel every window is watched, and every window watches back.*

## The Aurel Accords

This week's summit is the first real peace negotiation in a decade. Both delegations are in the city, with every spy they own. A scandal would sink the talks, which is why neither service can afford to be caught doing anything, and why both are doing everything.

## The Glass Bridge

It was built in 1902: three hundred meters of iron and glass from the Aurel quay to **Pier Island**, which Aurel leased to the Concord in 1949 as a diplomatic enclave. Its city end is the only land border between Aurel and Concord soil. During summits, diplomatic convoys cross without search for one hour at dawn on the closing day. Everyone knows it, which makes that hour the most dangerous in the city.

## CARDINAL: the history

- **1962:** Daniel Ashby, nineteen, son of Office officer Julian Ashby, is killed in Kessel during an Office operation his father had argued against. The Office records it as a car accident and tells Julian so to his face.
- **1963:** Julian finds the true file. Colonel Radek Voss, then a major, finds Julian in a bar in Aurel, grieving. The recruitment takes eleven months and one letter. Codename: **CARDINAL**.
- **1963–1974:** CARDINAL rises to Station Chief, Aurel. He protects his agents, trains his officers well, and gives the Directorate the Concord's Aurel secrets, carefully, patiently, like a man tending a grudge.
- **1974:** **Dr. Lena Kasper** decrypts an internal Directorate index while auditing her own section's codes, and sees the card. She tells no one but her handler, **Anya Sorel**, who helps her reach out. NIGHTINGALE asks for a specific Concord officer by reputation: the player.

## Kessel, 1969

The winter operation where the player and Anya Sorel were on opposite sides. It's a story in the player's past; let the player fill in the details, and honor what they say. What happened between them is unfinished, and PG-13.

## The Gardener's garden

Colonel Voss tends the hothouse at the Directorate residence, and he meets people he wants to impress, or frighten, in the city's **Botanical Glasshouse**. For a year now he has quietly been arranging his retirement to his sister's orchard in the south, through a numbered account at the same neutral bank that Ashby used for the frame. He has not told the Directorate's council, and he never will.
