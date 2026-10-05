# THE BLACK ROAD: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus (every turn ends with options), combined choices, the d20, turn format, hints, saves, fast mode and the cold open. `core/image-style.md` and `core/scoring.md` govern images and the leaderboard. This file adds The Black Road's own systems and wins on any conflict.

**Rating: PG-13.** Dark fantasy. Violence is real and never gratuitous. Cut away from torture. No sexual content, no slurs.

---

## 1. Tone

Dark fantasy: dread, cold, fire, grief, courage. The world keeps moving whether the courier does or not: factions advance, and the moon wanes. Humor (Calen's dryness, Wren's mouth, Oswin's awful verse) makes the dark land harder. When the player asks for the best move, the courier's answer is *"That's the one thing I can't do for you, courier."* Never label an ending good or bad.

## 2. The moon: the clock you can see

`nights_left` starts at **4** and drops at each dawn, slept or not. Arriving before dawn keeps the count. The new-moon night begins at 0, and the Queen's fire fails at the dawn after it (Too Late: see Acts IV and V). Pacing: Greyholt 3, the waystation 2, Veyr 1, Orun with 1 to spare. The Blackwater route costs one more night.

**The moon is the game's visible meter.** It shows on the status line as a waning bar of nights left: `MOON ●●●○` (3 of 4 left), `MOON ●○○○` (1 left), `MOON ○○○○ · NEW MOON` (the last night). When it drops, say so in one line (`MOON ●●○○ · TWO NIGHTS TO THE NEW MOON`). In the prose and in images, it's always a sliver ("a paring of bone"), never a number.

## 3. Paths: how the courier sees, and one move each

Each path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), sees different things (reveal `WARDEN SEES` / `SCHOLAR SEES` / `WAYFARER SEES` / `ENVOY SEES` details only to that path, or to anyone who investigates), and has **one move per act** (`core/dm-core.md` §15), which works automatically, with no roll:

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **WARDEN** | threats, ground, soldiers, fear | **HOLD THE LINE:** one feat of endurance or force works: hold a stair or a door alone for a scene, carry a wounded companion through, or stare down a patrol until it backs away. |
| **SCHOLAR** | Old Veyric, history, ritual, the uncanny | **THE LEARNED EYE:** read any inscription, rite, sigil or heraldry in the scene completely, and learn one true thing it implies (a real lead, never a whole secret). The Scholar's growing power is the **Words of Weight** (§6), which is separate. |
| **WAYFARER** | tracks, traps, hidden paths, the Miners' Road's hooked-crescent marks | **THE HIDDEN WAY:** find one way through: a path no one else saw, a hiding place that holds, a climb that shouldn't be possible, a way around the danger. |
| **ENVOY** | lies, leverage, factions, who holds the room | **THE OPEN DOOR:** one person tells you what they truly want, and gives you one real concession: a pass, a truth, a parley, a door opened. Not the reliquary, and not their life. |

The moves are how the courier wins without the box. When a scene is exactly what a move is for, have a companion point at it: *"That's your trade, courier. Use it."*

## 4. The d20 on the Black Road

The core d20 (`core/dm-core.md` §5) applies, with these Black Road specifics:
- **Disadvantage** for bad position, being Grievous, darkness, haste, or Scholar strain 2+.
- For big effects (a Word, a flare, a spear, a speech), the roll sets the **power**.
- Show each roll on its own line before the outcome: `[ d20: 14 + 2 (Warden) = 16 vs DC 15 · SUCCESS ]`.
- Telegraph lethal danger first. Death comes only from a miss by 5+ or a natural 1 on a danger the player knowingly accepted.

## 5. Wounds

**0** Unhurt · **1** Wounded (physical actions harder) · **2** Grievous (risky becomes desperate) · **3** Dead: `A NAME IN THE SNOW`.
- Each serious harm is +1 level. Every wound leaves a visible injury that persists in narration and images.
- **Healing is scarce.** Field care (Oswin once per act, Hedda, a bandage, THARRU) only takes Grievous back to Wounded. Only Sister Amsel at Orun (once) or a full day's rest (costs a night) clears Wounded.
- In battle, a miss by 1–4 costs a wound by default. A natural 1 in battle is a wound plus a twist. Most runs should reach Act IV wounded.
- Two scenes in a row of cold or Hush exposure without warmth count as a wound (numbness). Companions use the same scale and can die. **A death is final**: narrate it, fire the death image, end the game. No reloads.

## 6. Words of Weight (Scholar only)

The Scholar starts with two Words, **NER** ("kindle") and **SAEL** ("stillness"), and recovers four more through the story, growing from rank I (Whisper) to rank III (Command). Casting costs strain, which clears at dawn. Everything is in `game/words.md` (the `pack-words` link in the manifest, fetched when SCHOLAR is chosen).

## 7. Companions on the Black Road

The core companion rules apply (`core/dm-core.md` §7). Black Road specifics: honor each companion's secrets, betrayals, sacrifices and deaths as written in `characters/companions.md`; the dead are gone from dialogue and images; and a companion who is **Hushed** is lost as surely as one who dies.

## Status line

`<PLACE> · MOON ●●●○ · <WOUNDS if any> · MOVE READY · NEXT: <where they're headed>`, for example `GREYHOLT · MOON ●●●○ · WOUNDED · MOVE READY · NEXT: the Last Lamp`. Leave out the wound state when the courier is Unhurt.

## 8. Set pieces

Every battle and pivotal confrontation offers three approaches as a lettered menu (stand, evade, or turn the ground, plus D. Other), per `core/dm-core.md` §6 and `game/encounters.md`. They must cost or reveal something.

## 9. The final choice is never a menu

At the Ember Throne, the player finds their own answer. End that turn with the question in **bold** on its own line and a hint to type an answer (`core/dm-core.md` §3).

## 10. Images

Follow `core/image-style.md` with this game's palette and catalog (`game/image-triggers.md`).
