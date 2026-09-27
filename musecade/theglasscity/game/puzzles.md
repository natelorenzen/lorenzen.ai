# THE GLASS CITY: Puzzles

Three puzzles: analytical (the queen), environmental (the Registry) and social (the mole). Never give the answer. Answer questions truthfully, from what the character could perceive. Accept any solution that works. Dice never solve puzzles, only execute plans. Hints follow `core/dm-core.md` §8 and forfeit the `_NO_HINT` event.

---

## PUZZLE 1: WHERE THE QUEEN PROTECTS IT (analytical · Act II or III)

**The question:** where did NIGHTINGALE hide the microfilm list?

**The answer:** inside the **white queen** of the chess set kept in pigeonhole **g7** of the Hotel Meridian's chess room. The felt base twists off.

**The clues:**

| Clue | Where | What it gives |
|---|---|---|
| The framed scoresheet *"LINDQVIST – ORAN, AUREL 1938. The game of the century."* Last move circled in red: **42. Qg7#** | Meridian chess room (Act I, 1.2) | the queen and the square g7 |
| The wall of 64 pigeonholes, lettered a–h across and numbered 1–8 upward | Meridian chess room | the place is laid out like a board |
| *"Where the queen protects it. Where old men play the long game. The game of '38."* | NIGHTINGALE at the opera (Act II, 2.3), with trust | it points to the chess room and the '38 game |
| Emil: "a lady with an accent spent an hour in the chess room last week" | the concierge (bought) | NIGHTINGALE was there |

- **ANALYST** reads the notation instantly: Qg7# means queen to g7, checkmate. Anyone else can ask a player in the chess room, or Emil, or work it out from the board's lettering. Asking an NPC to explain chess notation is investigation, not a hint.
- **Alternatives:** search all 64 pigeonholes. It takes a phase, Emil calls the police around the fortieth, and heat rises by 1. A Ghost can do it after midnight with Emil's key.
- **Solved:** report `PUZZLE_QUEEN_SOLVED`, plus `PUZZLE_QUEEN_NO_HINT` if unaided. The film still needs a **reader** (`acts/act-3.md` 3.2).

---

## PUZZLE 2: THE REGISTRY AT SEVEN (environmental · Act III)

**The question:** how to get into the Concord Trade Mission's Registry, and Ashby's office, during the summit gala, unseen.

**The mechanism** is observed from the **St. Aurel clock tower** across Linden Square, or by watching patiently from the square itself, which is riskier.

| Observation | What it means |
|---|---|
| The courtyard guard changes on the **quarter chime**. For about a minute, both guards chat by the gate, facing the street. | a window at :15, :30, :45 |
| A **dog handler** walks the courtyard counter-clockwise; one loop takes about eleven minutes (count it). | you know when the back of the building is clear |
| At **seven**, the cleaners arrive by the service lift and **prop the courtyard door** with a bucket while they fetch their carts. | the way in |
| The Registry clerk's lamp goes out when the tower **strikes seven**, as he leaves for supper. | the Registry is empty from 7:00 to about 7:40 |
| Ashby's office light is off. The gala has started. | the corner office is free |

- **Solution:** in through the propped door just after seven, on the quarter chime, with the dog on the far side of its loop. Up the service stair. The Registry first, then Ashby's office. Out before the clerk returns at about 7:40.
- **Inside:** the **typewriter ribbon** from Ashby's machine holds the frame note's text, reversed. Ashby's desk safe: its combination is **1405**, from the photograph signed *"Daniel, 14 May"* (see `acts/act-3.md` 3.4). The **cable log** in the Registry shows the anonymous packet was logged in by Ashby's own secretary before it "arrived".
- **Alternatives:** a Ghost can climb the drainpipe (Risky; a failure is heat plus a scramble); a turned Tomas can sign the player in as "a contractor" (that's a Diplomat's bluff); or bribe a cleaner. A forced entry trips the alarm and turns it into an escalated fight.
- **Solved** (they got in and out with the evidence using the observed pattern or an equally clever plan): `PUZZLE_ARCHIVE_SOLVED`, plus `PUZZLE_ARCHIVE_NO_HINT` if unaided. Daniel's file gives `DISCOVER_ASHBY_SON`.

---

## PUZZLE 3: THE CANARY TRAP (social · Act III)

**The question:** which of four station officers is CARDINAL?

**The answer:** Station Chief **Julian Ashby**.

**The suspects, and what each is really lying about:**

| Suspect | What looks guilty | What it really is |
|---|---|---|
| **Julian Ashby** | nothing, on the surface | the mole |
| **Priya Nand** | secret absences, lies about the dentist, cold to the player | lunches with the Ambassador, who is recruiting her to replace Ashby. Ambition. |
| **Otto Brandt** | cash handed to a hard man at the tram depot | gambling debts to a bookmaker |
| **Celeste Morrow** | envelopes to a woman in a tram shelter | leaks to Margot Fane at the *Herald*: gossip for the press (`DISCOVER_MORROW_LEAK`) |

**The canary trap**, the elegant solution: feed each suspect a **different** false detail about the bridge plan (the gate, the time, the car), then watch which version reaches Voss.

- **Carriers:** a turned Tomas (best, since the station still trusts him), a phone call in a disguised voice, a note on a desk, or a message through Morrow's reporter.
- **Watchers:** Anya reads Voss's deployment orders; a true Ilse hears what Voss is buying; or the player watches where Directorate men deploy at dusk (north gate or tram depot).
- Only **Ashby's** version appears. Report `PUZZLE_CANARY_SOLVED`, and at game over `ACH_CANARY_TRAP`.

**The evidence route** (also valid, and also `PUZZLE_CANARY_SOLVED`): name Ashby with at least **three** of these tells, reasoned together.
1. The train sweeper carried the player's **cover photo**, and cover photos need the Station Chief's sign-off.
2. Ashby knew about **box seven** before the player reported it.
3. The frame's photographs were taken from the **Linden Street safe flat**, and only Ashby holds its key.
4. His **desk clock is set to Directorate time**, like the sweeper's watch.
5. The **typewriter ribbon** (Puzzle 2).
6. **Daniel's file**: a motive.
7. The **cable log**: the packet was logged by Ashby's secretary before it "arrived".

**Wrong accusations:** accusing Nand gets the player arrested by her as a paranoid fugitive (heat +1, an escape scene). Accusing Brandt humiliates a sad man and costs trust with Tomas. Accusing Morrow tips off Margot, who now has *that* story, but not the true one. Ashby helps with any wrong accusation, gently.
