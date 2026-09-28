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
