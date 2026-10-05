# THE SEA GLASS INN · PACK-3 · BUILD 2.0-343a6ae

Bundle for: Act III begins (`REACH_DARKROOM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: THE DARKROOM

*Film in a red-lit cellar, a cave that floods, a photograph that can't exist, and a burned cannery.* Target: 12 to 16 minutes, 8 to 11 decisions. Thursday: the new moon.

**Route:** develop Sadie's film → the sea cave at morning low tide → the photograph that changes everything → the cannery ruins with Theo → solve the bonfire night → **Thursday night: the causeway, and Gull Rock**.

Load `game/encounters.md` now (it's in this pack).

---

## 3.1 MORNING: THE DARKROOM

The inn's cellar darkroom: red bulb, trays, the vinegar smell of stop bath. Jules keeps watch at the top of the stairs. (PHOTOGRAPHER: this is her room now. Everyone else: Bea can show her how, or Jules's cousin can, or the pharmacy on the mainland takes a day and raises Whispers.)

**Sadie's rolls** (whatever she's found so far):
- **Priya's roll** (from two days before the bonfire): Sadie and Priya on the rocks, laughing; the lighthouse; Theo asleep in the dinghy; and a frame of the **causeway at low tide, with a line drawn in chalk on a rock**: the tide mark she was practicing.
- **The roll from Sadie's room** (the bonfire night itself): the bonfire from behind, from the path to the point, alone. **The causeway rocks, still wet, in the dark.** The last frame is black. (A timeline piece: she went to the causeway, not the lighthouse.)
- **The dinghy roll** (if Theo checks the dinghy's locker with her): Sadie at fifteen, on the south shore at night, stars. The last three frames are orange: **the cannery, burning**, and a white boat at its pier. (A cannery clue.)

The Photographer's **Darkroom** rank rises with each roll (`rules.md` §6).

## 3.2 THE CHAPEL (set piece)

The photo booth strip said *"the Chapel. always."* The red note said *"where the sea keeps them"*. Theo knows exactly where that is, and it hurts him to say it: the sea cave under the point, on the ocean side, where he and Sadie used to go. **Morning low tide is about 10:10.** They have maybe forty minutes inside.

- The high dry ledge at the back: a **tin box**, sealed with candle wax. Inside: the **violet sea glass** and its note, and a **film roll** marked in Sadie's hand: *"SPRING."*
- **Run `ENC_CAVE`** (`game/encounters.md`): the tide turns early (a new-moon tide, extra big), a wave collapses the way out, and the Chapel starts to fill.

```
[IMAGE_TRIGGER]
ID: IMG_THE_CHAPEL
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Inside a tall sea cave like a stone chapel, shafts of green-blue light
through a hole in the rock, seawater surging in white across the floor; on a
high dry ledge a seventeen-year-old girl opening a small rusted tin box, a
violet piece of sea glass glowing in it; below her, a tall boy with a
flashlight watching the water rise. Beautiful, claustrophobic, urgent.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 3.3 THE PHOTOGRAPH

Developing the **"SPRING"** roll (back in the darkroom, or at Priya's, or with a Photographer's ZOOM IN on the wet negatives by flashlight): the island in spring. Snow in the lighthouse doorway. The bakery bench, **with the brass plaque that was only installed this April**. The festival poster for **this** year, on the bakery window. And the last frame: a self-portrait in a mirror, a girl with short dark hair and Sadie Vale's face.

**`DISCOVER_SADIE_ALIVE`.** Give it room. This is the twist the game is built around: the girl everyone mourned has been alive the whole time, and she's been watching.

- The handwriting on the notes, and the diary, and the "SPRING" label: all the same looping `g`. **She wrote the diary herself.** If the player hasn't solved *Puzzle 1* yet, this is a huge hint.
- Companions react in character: Priya goes white; Theo walks out and has to be found; Jules says, very quietly, *"The gulls."* (`DISCOVER_JULES_BASKET` if she tells the player about the basket now.)

## 3.4 THE CANNERY

The burned **cannery ruins** on the south shore, fenced, VALE COASTAL RESORT · COMING SOON. Theo will go if she asks: this is where his father's life ended. (At trust 2, he asks *her*.)

- Inside the fence: black beams, the long half-collapsed pier with its **numbered pilings**, and a view straight across the water to the **Vale house**. From here, anyone at the pier is visible from Vale's deck. (That's why Sadie never came back for what she hid. The player doesn't know that yet.)
- **The fire:** Theo shows her where the space heater was supposed to have been. It doesn't make sense: the fire started at the pier end. With the dinghy roll's orange frames (3.1) and Theo's father's case file (Theo has a copy), a player can put it together: the white boat at the pier that night is *Second Wind* (`DISCOVER_CANNERY_FIRE`). Proof is another matter. The player can't prove it yet.
- **Vale sees them.** A figure on the Vale deck with binoculars. Whispers +1.

## 3.5 THE NEW MOON

By Thursday evening, the player should know (or strongly suspect) that Sadie is alive, and where she is. Evening low tide is about **10:35 p.m.**, on the darkest night of the month.

- **If the player hasn't solved *Puzzle 2* yet**, the sandal clue and the tide log make it click now, with a hint if needed. Nobody took Sadie. She walked to Gull Rock.
- **Going out to Gull Rock tonight** is the player's choice: across the causeway at low tide, in the dark (a Moderate roll, DC 12; ATHLETE with advantage), or **swimming** the channel at mid-tide (a Very Hard roll, DC 18, unless it's the Athlete's move: `ACH_NIGHT_SWIM` either way if she makes it; a miss is Hurt and a rescue by Theo).
- **If she goes, she finds Sadie** (`acts/act-4.md` 4.1 is played tonight instead of Friday). Record `ACH_FIRST_LIGHT` at game over.
- **If she doesn't go**, Sadie comes to her: that's Act IV.

**Thursday night ends Act III.** Record `REACH_STORM` (it's sent with everything else at the end) and fetch the Act IV pack. If she's going to Gull Rock tonight, fetch it now, before the crossing.

---

## Exceptions

- **She goes to Hank or Vale with the "SPRING" photos:** Vale takes it very calmly, thanks her, and asks where the negatives are. Whispers +3. That night the darkroom is broken into. Sadie is in real danger now, and so is the player. (It leads toward `FRAMED` unless she turns it around.)
- **She tells Priya to break the story now:** Priya wants to. If she does, it's `ON AIR` early and messily (Act IV), and Sadie runs for real.

===== FILE: game/encounters.md =====

# THE SEA GLASS INN: Set Pieces

There are no fights to the death on Halcyon. The set pieces are the sea, the storm and the people who want the truth buried. They follow the Musecade rules: three genuinely different approaches as a lettered menu, a d20 at the turning point, and every set piece must **cost or reveal** something.

## Rules
1. **Open with the situation:** what's at risk, where, and one usable detail (a rope, a flare, a phone flashlight, a dinghy, a crowd, a microphone).
2. **Three approaches as a lettered menu (A, B, C, plus D. Other):** **go straight at it** (brave and direct; risks Harm), **get help or get clever with people** (costs trust, time or Whispers), and **use the place** (the tide, the dark, the storm, the island's own tricks; a bigger roll with a bigger payoff).
3. **Roll the d20 at the turning point** (`core/dm-core.md` §5). A miss by 1 to 4 costs Hurt or Whispers +1, whichever hurts more right then. A miss by 5+ costs both, or loses what she came for. Nobody dies.
4. **Paths pay off:** the Athlete owns the water and the rocks; the Charmer turns people; the Sleuth sees the trick in the situation; the Photographer sees the detail that matters (a light, a face, the angle of a camera).
5. `_SURVIVED` means she came through it; `_CLEVER` means it was handled masterfully, and earns both.

---

## Cold open: the bonfire chase (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_CAVE: The Chapel · SET PIECE (Act III, Thursday morning)
- **At stake:** the player and whoever came with her, the tin box, the "SPRING" film. The way out is under water.
- **Terrain:** the high dry ledge; a chimney of rock toward a crack of daylight; the surge through the entrance every seven waves; Theo's rope; a floating piece of driftwood; the phone in a plastic bag.
- **Menu example:** "Swim the entrance between the seventh wave and the next." / "Climb the chimney toward the daylight crack." / "Wait on the ledge for the tide to turn, and keep everyone calm."
- **Reveals:** that Theo will go under the water for her without thinking about it. **Costs:** Hurt, a soaked film roll (a Photographer can still save it), or three hours on a ledge (Whispers +1 when Bea can't find her).

## ENC_STORM: The Pier · SET PIECE (Act IV, Friday night)
- **At stake:** the proof, the player's safety, and whether Vale catches her with it.
- **Terrain:** the half-collapsed cannery pier in a summer gale; black water between the pilings; the seventh piling's crossbeam; rotten planks; the fence; Theo's workboat; *Second Wind* coming round the point without lights; the power out across the island.
- **Menu example:** "Climb out along the crossbeams to piling seven, now, before the boat gets here." / "Theo brings the workboat in under the pier while you keep watch." / "Kill the flashlight, let Vale come to the empty end of the pier, and go round him in the dark."
- **Reveals:** Vale in person, without the smile. **Costs:** Hurt, Whispers, or the jar in the sea (a miss by 5+: it's gone, unless someone dives for it, which is the Athlete's moment).

## ENC_BONFIRE: The Vigil · SET PIECE (Act V, Saturday night)
- **At stake:** whether the truth gets said, whose truth it is, and who's still standing when it's done.
- **Terrain:** four hundred people and candles; Priya's microphone and livestream; the bonfire; Vale at the mic; Hank at the edge of the crowd; Lydia; the dark beach where Sadie waits; the island's cell signal (terrible, except by the lifeguard chair).
- **Menu example:** "Walk up to the microphone and start talking before anyone can stop you." / "Get the card's video onto Priya's stream, and let four hundred phones light up at once." / "Go to Sadie in the dark and walk out together."
- **What Vale does:** reaches for the microphone, talks about grief and "a troubled girl", signals Hank. **What Hank does:** depends on whether the player knows about his boat: say it out loud, and he steps back.
- **Reveals:** everything, depending on the plan. **Costs:** Whispers stops mattering tonight; what it costs is people (a friendship, Theo's forgiveness, Bea's trust, Sadie's) if the player uses them.
