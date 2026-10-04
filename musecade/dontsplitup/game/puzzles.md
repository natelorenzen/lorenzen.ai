# DON'T SPLIT UP: Puzzles

Three puzzles: environmental (the cabin), deductive (the Rules) and observational (the first lantern). Never give the answer. Answer questions truthfully, from what the character could notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8. Every puzzle has a fallback that moves the story on, at a cost.

---

## PUZZLE 1: BEHIND THE SET (environmental · Act II)

**The question:** what's really going on in Cabin 13, and how do you get out of it with the doors and windows stuck and something walking around outside?

**The mechanism** (observed, not told):

| Observation | What it means |
|---|---|
| The cobwebs are perfectly even, and smell like hairspray | spray-can cobwebs: someone dressed this room |
| The "blood" on the wall is sticky and smells like pancakes | corn syrup and red food coloring |
| The howling wind comes from **inside the chimney**, and loops every 40 seconds | a speaker, with a cord |
| An **orange extension cord** runs from the chimney, under the rug, to the cellar trapdoor | the effects are run from below |
| A price sticker inside the back cover of the book: *$4.99, Hollow Pines Gift Shop* | the "ancient" book is a souvenir |
| The cellar shelf of preserves has **a draft** coming through it, and the jars are glued down | a hidden door |
| Footsteps under the floor when nobody's in the cellar, and a sneeze | someone is in the crawlspace |

- **Solution:** follow the cord. In the cellar, behind the glued-down shelf of preserves, is a **stagehand tunnel** (Lyle's way in and out, lined with fog-machine fluid and spare plastic bones) that runs a hundred feet to the boathouse. A Skeptic's *That's Fake* finds the shelf at once; a Jock can rip it off the wall; Courtney's camcorder playback shows the cord; a Weirdo notices the candles lean toward the shelf.
- **Solved** (they work out the cabin is a set and use the crew's own way out): `PUZZLE_CABIN_SOLVED`, plus `PUZZLE_CABIN_NO_HINT` if unaided, plus `DISCOVER_FOG_MACHINES`. Jack Hollow still comes at midnight (`ENC_CABIN`), but now they know where the back door is.
- **Fallback** (after the third hint): at midnight Jack breaks the front window and they have to go out the back into the woods and around the lake the long way. It costs an hour, someone twists an ankle, and there are no puzzle events.
- **Going down alone** to check the cellar is a trope (+1 TROPE). Going down as three is safe.

---

## PUZZLE 2: THE RULES (deductive · Acts II–III)

**The question:** what can Jack Hollow do, and what can't he? The players have to work it out from what they've seen, not from Wendell's notebook (which is about 70 percent right).

**The answer:** three rules.

1. **The Group rule:** he can only take someone who is **alone** (or one of only two). Three or more together, and he can't touch any of them.
2. **The Casting rule:** of the people alone, he takes whoever is **playing their part hardest**: the highest TROPE.
3. **The Smile rule:** he can't pass a **lit jack-o'-lantern carved with a smiling face**, or a line of salt. (A scary face doesn't work. The 1969 brochure said "a smiling Jack keeps the harvest safe.")

**The evidence:**

| Clue | Where | Points to |
|---|---|---|
| Earl, off script: *"Three's the number."* | Act I, gas station | the Group rule |
| Jack watches the group at the cabin's edge and doesn't come closer; he takes the one who wandered off | Act II, 2.2 | the Group rule |
| Whoever was taken had been saying the lines, going toward noises, filming alone | Acts II–III | the Casting rule |
| Jack walks all the way down the canoe dock to the group, and **can't**; then he looks at whoever is standing furthest away | Act III, 3.3 | Group and Casting |
| Darlene's 1979 story: three of them in the bell tower all night, untouched | Act III, 3.1 | the Group rule |
| Darlene's cork board: every visitor taken in ten years was alone when it happened | Act III, 3.2 | the Group rule |
| Cabin 13's porch has carved pumpkins: the scary ones stayed lit when he passed; one smiling one, carved by a little kid years ago, **he walked around** | Act II | the Smile rule |
| Darlene's mess hall door has a faded smiling pumpkin painted on it. *"Mr. Pruitt painted that. He never told me why."* | Act III | the Smile rule |

- **Solved:** state the Group rule and at least one of the other two, with reasons: `PUZZLE_RULES_SOLVED`, plus `PUZZLE_RULES_NO_HINT` if unaided. Once it's solved, say it plainly back (`rules.md` §3), and make every later set piece about the story trying to split them up.
- **Fallback:** Darlene says the Group rule outright at the end of Act III (*"Three. Always three. That much I know."*). No puzzle events.
- **Wendell's wrong rule:** he is sure that *"the monster can't cross running water"*. It can. Let him be wrong about it once, harmlessly, in a funny way.

---

## PUZZLE 3: THE FIRST LANTERN (observational · Act V)

**The question:** of a thousand lit jack-o'-lanterns in the Patch, which one holds Jack Hollow's heart?

**The answer:** the first one ever carved for him, for the 1969 brochure photo: a **white** pumpkin, a **crescent-moon** left eye, a **star** right eye, and a smile with exactly **three teeth**. It sits halfway up the hill, near the old split-rail fence. Its flame **doesn't lean** uphill like all the others.

**The clues, gathered across the game:**

| Clue | Where | Gives |
|---|---|---|
| **The 1969 brochure** in the town archive, with a close-up of the mascot's jack-o'-lantern | Act IV, the archive | moon, star, three teeth, and that it's pale |
| **Earl**, if won over: *"I carved the first one. For the photo. I was nineteen. White pumpkin, 'cause they photographed better. Gave it three teeth, 'cause that's how many I had left after the rodeo."* | Act I or Act IV | white, three teeth |
| **Darlene**: *"Every year, the first light to come on up there is halfway up the hill. And it never flickers. Not once in ten years."* | Act III | where, and that it's steady |
| **Wendell**, from the *Hollow Night* box: *"The first lantern has four teeth."* (He's wrong: the movie changed it.) | any time | a decoy |
| In the Patch, **Jack Hollow** keeps turning his head toward one spot on the hill | Act V | where |

**Decoys in the Patch:** dozens of white pumpkins; several with a moon and a star, but four teeth (the movie version, carved by fans); one with three teeth and two stars.

- **Solved:** the player finds it by reasoning (at least two features, or the steadiness plus one feature) and snuffs it: `PUZZLE_LANTERN_SOLVED`, plus `PUZZLE_LANTERN_NO_HINT` if unaided.
- **Fallback:** snuff them one by one. Each wrong lantern takes time (ten minutes per handful) and makes Jack take a step closer to whoever is furthest from the group. A Weirdo can feel the right one, warm in the cold, at a cost (Shaken). No puzzle events, but snuffing it this way still works.
- **The hidden ending doesn't need it.** `COME FOR THE LEAVES` changes the story instead of snuffing the candle.
