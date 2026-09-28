# ACT III: THE VAULT

*A building only the dead can enter, a registry of three million edits, and two names the player never expected to find.* Target: 12 to 16 minutes, 8 to 11 decisions. Day 2, afternoon, to night 2.

**Route:** case the Cradle → get inside (only the dead get in) → the registry vault → what the registry says about Lumen, about Mara, about you → **get out alive, and find a way up**.

**Night 2 is coming.** At the start of this act, SYNC +1 (`rules.md` §2). Say it, and let the player feel it: Mara's memories are louder now.

Load `game/encounters.md` now (it's in this pack).

---

## 3.1 THE CRADLE

Orison's **Restore Center** for the Stacks: a windowless white tower, forty stories, with the Continuity logo glowing on its crown. The Basic-tier dead of the Stacks come here to be regrown and restored. Morgue drones drop through an intake bay on the roof, every twenty minutes, all night.

**Casing it** (from Kes's cab, a rooftop across the street, Null's memory of its security, or the Cartographers' cameras) reveals the mechanism for `game/puzzles.md`, *Puzzle 2: Only the Dead Get In*. Let the player gather it by observation and questions. Don't list it.

**Mara's key:** her codes would open the staff entrance, just like that. SYNC +1. She offers, of course.

## 3.2 THE HEIST

However they solve it, they end up inside: in the cold intake hall with its rows of gel tanks and regrowing bodies, and a quiet that makes everyone whisper. Staff in white. Quiet Men on the stairwells. The **registry vault** on sublevel 3.

- **The registry key** from the memory palace opens the vault. Inside: one terminal, one room of humming cold storage, and every Basic restore in Lumen since 2081.
- NETRUNNER: the vault is the second dive that counts for the Deep. Getting in and out of the registry's grid unseen is a Moderate roll, DC 12, or BACKDOOR.

## 3.3 THE REGISTRY

What's in it. Reveal these one at a time, and give each its moment:

- **The edits** (`DISCOVER_EDITS`): three million people, each with a patch list: `GRATITUDE+2`, `ANGER(ORISON)-3`, `UNION_MEMORY:DELETE`. Null finds his own congregation's families. Kes finds her cousin, restored after a riot, `ANGER(ORISON)-4`.
- **Who built it** (`DISCOVER_MARA_BUILT_IT`): the patch system's author signature on every entry, `M.QUELL · ARCHITECT`, from 2081. Mara, in their head, says nothing for a long moment. Then: *"I told myself it was for trauma."* Juno, if she's here, walks out.
- **The player's own record** (`DISCOVER_YOUR_DEATH`): their name. Died two years ago: *fall, Canopy scaffold 9*. Restored, Basic tier. Patch list: `GRATITUDE+1`, `SIBLING_DEATH:INSERT`. They don't remember dying. They've never been anyone else, as far as they know.
- **Ines** (`DISCOVER_SISTER_ALIVE`): the patch says `SIBLING_DEATH:INSERT`. The registry cross-links it: **Ines**, the same surname, restored three years ago after a "workplace accident". Patch list: `UNION_MEMORY:DELETE`, `SIBLING_DEATH:INSERT`, `LOYALTY(KADE)+4`. Current employment: **personal assistant to the CEO, Orison Spire, the Crown.** She's alive. They each think the other drowned.

Give the player room to feel this. It's the heart of the game.

```
[IMAGE_TRIGGER]
ID: IMG_THE_REGISTRY
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A cold white vault deep underground, walls of humming storage racks with
tiny blinking lights, a single terminal glowing; a courier in a rain-black
jacket staring at the screen, where two photos glow side by side, their own
face and a young woman's; frost on the floor; in the reflection on the
screen, a silver-haired woman's face overlapping the courier's. Clinical,
devastating.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 3.4 GETTING OUT

The alarm goes as they copy the registry (it always does: Orison trips it when the registry is read). Lockdown. Quiet Men in the stairwells, gel-tank rooms sealing one by one.

- **Null's penance** (`NULL_REDEEMED`): if Null is with them and has confessed, or is about to, he holds the sublevel door against the Quiet Men with his one arm and his old codes, and tells the player to run. He can survive it (a roll, the player's help, or a move), or he can't. The player's choices decide.
- **Kes** comes through, or doesn't: if the player forgave her, *Lucky* is waiting at the intake bay when they burst onto the roof.
- Getting out with the registry copy: the proof of three million edits, on a chip in their pocket.

**Where to go now:** the Cartographers can broadcast anything, but only from above the Canopy, where Orison's jammers don't reach. The Loom is in the Crown. So is Ines. Everything is **up**.

**Starting the climb ends Act III.** Record `REACH_CANOPY` (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **They're caught inside:** the Quiet Men put them in a restore tank. If they're Flatlined inside the Cradle, the ending is `RESTORED`: they wake up a week later, edited, grateful, with no ghost and no memory of any of it. (Telegraph the danger.)
- **They give up the registry to buy their way out:** the Quiet Men take it and let them go (Kade's orders: "the ghost will finish them anyway"). They can still go up, without the proof.
- **They go to find Ines immediately:** fine. It's the same way: up.
