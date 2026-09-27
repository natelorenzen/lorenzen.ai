# THE BLACK ROAD: Puzzles

Three substantial puzzles, one social, one environmental and one historical. Each has discoverable clues and allows clever alternatives.

**Rules for every puzzle:**

- **Never give the answer.** Present what can be observed, and let the player reason.
- **Answer questions truthfully,** filtered through what the character could perceive (path matters: see each puzzle's `SEES` lines).
- **Accept any solution that works in the fiction,** including ones not listed here.
- **Hints** (`rules.md` §11): after about three stuck turns, or on request. Record `hints_used`. A hinted solve earns `_SOLVED` but not `_NO_HINT`. A companion answering because the player asked counts as a hint. A companion's *unprompted* one-line in-character remark that only points at a clue does not count, but don't make such remarks until the player has been stuck for at least two turns.

---

## PUZZLE 1: THE LISTENER (social · Act II, the waystation of Saint Hollis)

**The question:** who among the travelers opens the door for the Hushed?

**The answer:** **Tam**, the young shepherd, a Listener of the White Choir. He will lift the bar at **midnight**.

**The deadline:** midnight. The courier has the evening, roughly 4 to 6 player actions of investigation and conversation. Keep time moving: the fire burns down, Pip falls asleep, the Hushed are heard (not heard) circling outside.

### Clues (all discoverable)

| Clue | How it is found | Path that notices it unprompted |
|---|---|---|
| Tam claims he came in from the rain this afternoon, but **his boots and hems are dry**, and there's no mud on his crook. | Looking at him, or asking when he arrived | WAYFARER |
| Tam **doesn't shiver**, even away from the fire. His hands are **cold as stone** to shake. | A handshake, sitting beside him, handing him a cup | WARDEN (the handshake) |
| Tam says his flock grazed the **Hollin valley**, but Hollin's Ford was emptied a month ago. Wren, if present, says so flatly: "There's nothing alive in Hollin." | Asking about his flock | ENVOY (the story is rehearsed) |
| The frost sigil on the door is drawn **at the height of a tall man's reach**. Fenn is short, Grell is stooped, Oswin is round and middling. | Examining the sigil | anyone who looks |
| Tam volunteers to **take the last watch** and to "fetch water" after dark. | Planning the night | ENVOY |
| Tam carries a **white reed pipe** in his jerkin, a Choir whistle. | Searching his things, or seeing it when he bends | WAYFARER |
| **Pip's drawing:** a tall man with a crook at a door marked with a spiral, blue lines coming from his mouth. | Being kind to Pip, or drawing with her | none; only kindness |
| Near the reliquary, Tam **edges away**, while everyone else edges closer to its warmth. | Watching, or deliberately bringing the box near him | SCHOLAR (as a phenomenon) |

### Red herrings (people lying about something else)

- **Fenn** is sweating, evasive and guarding his strongbox. He is lying, but about **emberstone smuggling**, not the Choir. Pressing him reveals the stones and his Miners' Road route (`SOCIAL_FENN_BARGAIN` if bargained well). Mother Grell loudly accuses him.
- **Oswin** is lying about being a pilgrim. He was sent to meet the courier. ENVOY SEES the evasion. He admits the errand if pressed, but not its purpose.
- **Wren** (if present) is drawn to the box's warmth, which is the *opposite* of Tam's reaction. If the player uses "who reacts oddly to the box" as a test, note that Wren leans *toward* it.
- **Pip** doesn't speak, which Grell explains angrily. She isn't Hushed; she's grieving.

### Solutions

- **Expose him** with the evidence: accuse him with at least two real clues and he gives up, calm and sad. Report `PUZZLE_LIAR_SOLVED`.
- **Trap him:** pretend to sleep and catch him at the bar at midnight. Report `PUZZLE_LIAR_SOLVED`.
- **Test him:** press the box's warmth to his hand. He flinches and his skin reddens like frostbite in reverse. Report `PUZZLE_LIAR_SOLVED`.
- **Any other sound reasoning** that correctly identifies Tam before midnight: report `PUZZLE_LIAR_SOLVED`.
- Solved without hints: also report `PUZZLE_LIAR_NO_HINT`.
- **After:** what to do with Tam (`npcs.md`): bind him, question him (he names Serith and the Choir's aim, which is useful), turn him (`SOCIAL_TAM_TURNED`), release him, or kill him (`killed_someone`). Record `tam`.

### Failure

- **Accusing the wrong person:** the room turns on the accused. Fenn is tied up (and furious), or Oswin is thrown out into the snow (he survives the night in the yard's shrine, badly chilled, trust -2), or Grell curses the courier. Tam helps with the accusation.
- **At midnight** Tam lifts the bar. Six Hushed come in, silent. A short, frightening scramble follows. Resolve it in 2 or 3 decisions using `ENC_ROAD`'s rules; it does not earn encounter events. Someone is taken unless the courier acts decisively: **Pip** first, then Grell. If Pip is taken, Grell walks out into the snow after her at dawn. It's the worst thing that can happen in Act II, so let it land.
- Tam slips away with the Hushed, and the Choir is aware of the courier.

---

## PUZZLE 2: THE ASH GATE (environmental · Act III, Veyr)

**The question:** how to open Veyr's sealed gate.

**The mechanism:** the Ash Gate's bronze doors are counterweighted by a **heat engine**. Air heated in the **correct braziers** rises through flues into the gatehouse and turns a vane-wheel (a hot-air turbine) that winds the counterweight chain. Two braziers are real, the **east** ("dawn") and the **north** ("hearth"). Two are **traps**, west and south: they vent burning pitch onto the gateway when lit. A **skeleton's sword** is jammed in the chain gear inside the gatehouse, so even when the correct braziers are lit, the gate rises two feet and stops, groaning.

**Stage 1: which braziers?**

| Clue | How found | Noticed unprompted by |
|---|---|---|
| **Soot:** heavy, centuries-deep soot stains on the wall above the east and north braziers. The wall above the west and south braziers is clean. | Looking up at the gatehouse wall | anyone who examines the braziers |
| **Worn steps:** the stone steps up to the east and north braziers are dished by centuries of feet. The others are sharp-edged. | Looking at the steps | WAYFARER |
| **The flues:** the east and north braziers have iron flues running up into the gatehouse. The west and south have none, only a strange spout pointing at the gateway below. | Close inspection, or climbing | SCHOLAR (engineering), WARDEN (a murder-hole trick) |
| **The draft:** standing by the east or north brazier, one can feel a faint pull of air *into* its bowl. | Holding a hand or a flame near it | anyone who tests |
| **Oswin's saying:** "In Veyr they lit the dawn and the hearth at the gate every morning." | Asking Oswin (counts as a hint if asked for help) | none |
| **The mural** (if seen first): gatekeepers lighting two fires, east and north. | Hall of Crowns | none |

**Fire source needed:** the courier needs fire: flint and tinder with fuel (ash-wood from the dead city burns), emberstones (Fenn), lamp oil (Scholar's lamp), or the **Kindling itself**. The Kindling will tempt players who haven't opened the box. That's intended: it lights the braziers instantly, but it breaks the first instruction.

**Stage 2: the jammed chain.** Once the correct braziers burn, the gate lifts two feet and stops, shuddering. Looking through the **murder-hole** above the gateway, or climbing into the gatehouse (a Wayfarer can climb the flue; anyone else can squeeze through the lifted gate gap and find the gatehouse stair inside), reveals the chain gear jammed by an ancient **sword**, still in a skeleton's hand. The skeleton wears a gate-warden's badge. Freeing it: a pole through the murder-hole, a climb, or brute strength. The gate then rises fully.

**Traps:** lighting the west or south brazier releases burning pitch from the spout onto the gateway, a Risky dodge for anyone standing there. It is a wound if caught. The pitch burns for a while, blocking the gate.

**Solutions:** the correct braziers plus clearing the chain: report `PUZZLE_GATE_SOLVED` (and `PUZZLE_GATE_NO_HINT` if unaided). Clever alternatives that engage the mechanism, such as lighting a fire directly under the flues inside the gatehouse, or cranking the vane-wheel by hand with three strong people and an hour: also `PUZZLE_GATE_SOLVED`. Bypassing the gate altogether (a climb, the culvert, the postern) does not.

---

## PUZZLE 3: THE LITANY OF VEYR (historical · Act IV, the Lantern Door)

**The question:** in what order must the five lanterns be lit to "speak the road of Veyr"?

**The answer:** **star → crown → eye → flame → lantern.** (The theft, the forging, the waking, the Burning, the watch.)

**The door:** five bronze lanterns in an arc above a round bronze door, each cast with a symbol: **a hand holding a star · a circlet · an open eye · a flame · a lantern**. Their positions in the arc are jumbled: from left to right, **eye, lantern, star, flame, circlet**. Each lantern has a wick and oil still in it, three centuries old but sealed. Inscription (Veyric; a Scholar or Oswin reads it; for others, it is the "writing over the door"): *"SPEAK THE ROAD OF VEYR, AND THE DOOR WILL KNOW YOU AS ITS OWN."*

### Clues from earlier in the game (check `litany_clues`)

| Clue | Where | What it establishes |
|---|---|---|
| The Weeping Milestone: pictograms of star, circlet, eye, in that order. Verse: *"Veyr was born of what it took."* | Act I | **star, crown, eye** come first, in that order |
| The waystation hymn: *"We keep the watch the Queen began; / we tend the flame she burned for."* | Act II | the **flame** comes before the **lantern**, and the lantern is last |
| The Miners' Tally: the blue heart was cut out first; the dreams of silence came after the forge | Act II or IV | the **star** is first, and the **eye** follows the **crown** |
| The mural, five scenes in order | Act III | the whole order |
| The Queen's epitaph: *"She burned so the eye would close."* | Act III | the **flame** comes after the **eye** |
| Maelis's journal | Act III | the theft, the waking, the Burning, the Order's founding |

A player with the mural has everything. A player with the milestone and the hymn can deduce it (star, crown, eye, then flame, then lantern). A player with none of these must reason from the symbols and what they've learned of the story, which is possible and very satisfying.

### Helpers (each use counts as a hint if the player asks)

- **Oswin** knows only "the lantern is last, and the flame before it."
- **Prior Hesk** (if alive and not hostile) knows the full order, but was forbidden to speak it: "The door must be *known*, not told." An Envoy can argue him out of it, which counts as a hint.
- **A Scholar** can reason from Veyric grammar that the Litany reads as a history, oldest first.

### Wrong order

The lit lanterns gutter out blue. A breath of killing cold rolls from behind the door: everyone at the door goes numb (one wound level for anyone already numb). On the second failure, the Hushed on the far side hear it and start to come up. On the third, they arrive (a short, grim fight at the door, 2 or 3 decisions, no encounter events). The lanterns can be relit and tried again. The oil lasts for about four attempts.

### Success

The door rolls aside on hidden weights. The five lanterns throw a line of Veyric onto the far wall: *"ANNA VAELUN: WHAT WAS TAKEN MAY BE GIVEN BACK."* Report `PUZZLE_LITANY_SOLVED`, plus `PUZZLE_LITANY_NO_HINT` if unaided.

### Alternatives (no event)

- **The miners' crack:** a Wayfarer notices a draft from a fissure beside the door, which is old mine workings. A slow, freezing squeeze into the Deepworks. It misses the words.
- **Brute force:** a Warden breaks the door's hinge-pin over an hour of noise. The Hushed below come to meet them.
