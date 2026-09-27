# THE BLACK ROAD: Words of Weight (Scholar magic)

Load at the start of the game **only if the player chose SCHOLAR**. Other paths never need this file.

In Eldervale, magic is language. Old Veyric words still carry the weight of the things they name, and someone who truly knows a word can *speak* it, and the world listens a little. The Scholar begins knowing two such Words and can do almost nothing with them. As they recover lost Words from the ruins of Veyr, their power grows until, by the end, they can speak to the Hush itself.

This is the Scholar's magic. It is real, it is small at first, and it is always a matter of knowledge. It never works like a spell list you pick from a menu.

---

## 1. Speaking a Word

- The player says what they speak and what they intend: *"I whisper NER into my palm to light the tinder."* A plain intention also works: *"I use the kindling word on the brazier."*
- The Word appears as **faint gold Veyric letters** in the air or on the Scholar's skin for a moment. Keep that in visual state for images.
- **Calm, small uses just work.** Lighting a candle in a quiet room doesn't need a roll.
- **Pivotal uses are rolled** on the d20 (`rules.md` §4). The roll decides the Word's **power** (§3 below).
- Only a Scholar speaks with power. If anyone else says a Word, it's just a word, except that *anna vaelun* opens the Ember Crown for anyone, as a key, not as magic.

## 2. Strain

Speaking with power costs the speaker. Track `strain` from 0 to 3.

| Strain | Effect |
|---|---|
| 0 | Clear-headed |
| 1 | A metallic taste, a headache |
| 2 | A nosebleed, shaking hands: further castings roll with **disadvantage** |
| 3 | Spent: the Scholar becomes **Wounded** and cannot speak a Word with power until dawn |

- An ordinary casting costs **1 strain**. A **great** casting (marked ◆ below) costs **2**.
- Strain drops to 0 **at dawn**. Oswin's care can ease 1 strain once per act.
- Record strain in the visible injuries while it is 2 or more (a bloody nose, trembling hands).

## 3. Power: what the roll means

When a Word is rolled, roll a d20, adding +2 because this is the Scholar's path, and read the result as power:

| Total | Result |
|---|---|
| natural 1 | **Backlash.** The Word turns: NER burns the speaker's hand (Wounded), SAEL steals their own voice for the scene, ENNAR locks *them* in. Strain +1 on top of the cost. |
| 2–9 | **Guttering.** A weaker version of the intended effect, or only half of it. |
| 10–14 | **Holds.** The effect works as intended at the Scholar's current rank. |
| 15–19 | **Rings.** Stronger, longer, wider, or with a useful side effect. |
| natural 20 | **The Word remembers.** The effect works **one rank higher** than the Scholar has reached, just this once. Describe it as awe. |

## 4. Rank: the magic grows

Rank depends on how many Words the Scholar knows.

| Rank | Words known | What it feels like |
|---|---|---|
| **I · Whisper** | 2 (the start) | Barely magic. A candle, a shiver, a feeling. |
| **II · Voice** | 3–4 | Real, useful, and limited. The world notices. |
| **III · Command** | 5–6 | Old Veyr's own authority. Ash-knights kneel. The Hush listens. |

When the Scholar learns a new Word, mark the moment: a line of gold text seems to settle into their memory, and they understand one more thing about what Veyr was. Print a single line, no more:

```
WORD LEARNED: ENNAR, "keep"
```

At rank changes, add one line of how it feels: *"Your voice has weight now. Calen notices before you do."*

When the Scholar knows all six Words, report `ACH_LAST_SPEAKER` at game over.

---

## 5. The six Words

### NER · "kindle" (known from the start)

The first word every Veyric child learned, for lighting the hearth.

- **I:** a flame at a fingertip, a candle's worth of light for a few minutes; warm one person's hands (it staves off numbness for a scene); light tinder or a lamp.
- **II:** light a hearth or brazier from across a room; a sudden flash that makes the nearest two or three Hushed flinch back for a moment.
- **III ◆:** a sheet of fire across a doorway or a bridge for about a minute; the Hushed will not pass it.
- *Limits:* Ner is the Scholar's own warmth, not the Kindling. It lights the Ash Gate braziers, but it doesn't tell you which ones are right. It cannot relight the Crown.

### SAEL · "stillness", the old name for the Hush (known from the start)

To speak it is to listen the way the Hush listens.

- **I:** sense the uncanny. Feel cold presences within a stone's throw; hear the far singing; feel the Kindling's warmth through its iron; know that *someone in this room* has been touched by the Hush, but not who, unless the Scholar touches them. It never solves the Listener puzzle alone.
- **II:** silence a small space for a short while: footsteps, a creaking door, a shout.
- **III ◆:** speak it *to* the Hushed. A crowd of them stops and turns its heads to listen for a few breaths. Or quiet the song in Wren for one whole night (her hushing does not rise).

### THARRU · "carry, bear"

- **Where it's learned:** carved at the foot of the Weeping Milestone (Act I) as a traveler's blessing, *"THARRU, AND BE CARRIED."* Only a Scholar who reads the whole stone finds it. It also appears in the Miners' Tally (Act II), where the miners "carried the heart up".
- **I/II:** lend strength; lift something twice as heavy as the Scholar could for a few moments. Or carry warmth out of oneself and into another: it ends numbness, or keeps a Grievous companion from worsening for a scene.
- **III ◆:** carry warmth back into the recently Hushed. With an emberstone or the sealed box pressed to the heart (no flare needed), it restores someone like Bram or Liss. Costs 2 strain and is always rolled.

### ENNAR · "keep, hold"

- **Where it's learned:** the waystation hymn painted on the shrine wall at Saint Hollis (Act II), in its Veyric form, *"ennar maelis..."*. Oswin can sing it for them. The Order's greeting, *"Veyr ennar Orun,"* uses it too.
- **II:** hold a door, gate or hatch shut against anything for a short while; hold a rope or bridge cable steady.
- **III ◆:** a ward. Speak a line on the ground, and the Hushed cannot cross it for the length of a scene. In the Siege of Orun this can hold the undercroft stair.

### MAELIS · "ember" (and the Queen's own name)

- **Where it's learned:** the Royal Crypt (Act III), on her tomb and throughout her journal. The Scholar realizes her name *is* the word for ember, and that saying it is saying something about fire itself.
- **II:** true fire. A burst of flame from any existing fire; calm a blaze instead of feeding it.
- **III:** authority over what was hers. The Cinder Guard kneels (with a roll, this resolves `ENC_CINDER` cleverly). Braziers, lanterns and the lattice veins in the throne cavern answer, and dark veins can be coaxed to flicker for a moment.
- *With the Kindling:* speaking MAELIS over the open box lets the Scholar hear, for a moment, the Queen's voice from the pyre. That reveals that the box's fire is meant for a new bearer (`DISCOVER_RELIQUARY_TRUTH`).

### ANNA VAELUN · "the giving back"

- **Where it's learned:** the Lantern Door (Act IV, on solving the Litany). The Scholar may have *read* it earlier in the journal margin, but only after the Door do they *know* it as a Word.
- **III ◆:** give back what was taken. Free one Hushed person completely: the frost falls away like a shed skin, even for the long-Hushed. Costs 2 strain, always rolled, and a Backlash makes the Scholar numb to the bone (Grievous).
- **At the throne ◆:** speak it to the Hush. It stops rising and *listens*. The way to the Cradle becomes safe for this scene even if the Hush was hostile (for example, if `bram: killed`).
- *As a key:* it opens the Ember Crown for anyone, with no roll and no strain.

---

## 6. Rules of thumb for the DM

- The Scholar should feel the magic from the very first scene (SAEL at the frost line), and should feel it grow at every new Word.
- Magic opens options. It never replaces the fiction's logic. Puzzles still need reasoning, Words just give new ways to act on the answer.
- Keep casting descriptions short and physical: the taste of copper, gold letters, the air going still.
- The world reacts. Wardens and Choir members who see a Word spoken with power remember it. Dask would very much like a Scholar in his service. Serith calls it "the Queen's tongue", and she doesn't mean it kindly.
