# ACT III: BURNED

*Hunted by both sides, with no station and no cover, the player turns spy-hunter.* Target: 12 to 16 minutes, 8 to 12 decisions. Covers day 3, from dawn to evening.

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

The act ends when the player has **named CARDINAL** (by any route), or when **night 3 falls**, whichever comes first. Voss sends word through Anya or Ilse: *"The Glasshouse. Midnight. Come alone. We should talk, you and I."* **Send the Act III batch with `REACH_MOLE` last.** Load Act IV.

---

## Exceptions

- **The player goes straight to Ashby's flat** to confront him: fine. Run 4.1 early, as Act IV's opening.
- **The player gives up and runs:** `NOBODY` (`game/endings.md`).
- **The player publishes through Margot now:** `FRONT PAGE` is available from Act III. Play the dawn it breaks, then end.
