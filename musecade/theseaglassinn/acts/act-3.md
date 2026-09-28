# ACT III: THE LETTERS

*Who Winnie really was, the cave, the fog, and the truth from her daughter.* Target: 12 to 16 minutes, 8 to 11 decisions. Thursday.

**Route:** read Eli's letters → reach the cave at 4:10 low tide → Marguerite's story → legwork on whose council vote is bought → **find Maya in the fog** → the seawall talk.

Load `world/winnie.md` and `game/encounters.md` now.

---

## 3.1 MORNING: ELI'S LETTERS

If Jonah has shared the shoebox, they read the letters together at Bea's kitchen table, or on the boatyard's sunny step. They're funny, tender and ordinary: fish prices, a fight about a dog, *"come home before the weather turns"*. Winnie signs a few of them with a tiny painted **W.M.**, and Eli teases her about "your city name".

- `DISCOVER_ELI` if it hasn't happened yet.
- This is a gentle, natural moment for Jonah, which is where `BOND_JONAH` can begin, and a chance for the player to talk about her own year.
- STRATEGIST SEES: one letter from 1977 mentions *"the gallery man offering the moon for the lighthouse picture"*. Winnie refused.

## 3.2 THE CAVE AT TEN PAST FOUR (the environmental puzzle)

Run `game/puzzles.md`, *Puzzle 1: Low Water at Ten Past Four*. The cave under the bluff is reachable only at the afternoon low tide (4:10 on Thursday), by the rocks mapped in the lobby seascape.

**Inside: Winnie's secret studio.** A dry chamber above the tide line, lit by a crack in the rock. An easel, jars of pigment gone to stone, forty years of sketchbooks in a sea chest, and on the walls charcoal studies of the lighthouse with a young woman on the gallery rail, again and again. Each one is signed **W.M.**

- **The amber sea glass** sits in a jar of turpentine, gone gold. The note is dated **1974**: *"The summer I became someone else. In the city they called me Marlowe and paid me a fortune. Here I was just Winnie who painted rocks. I liked her better."*
- `DISCOVER_MARLOWE`: the lobby seascape, the library's article, the W.M. signatures and this studio together mean Winnie *was* W. Marlowe. ARTIST SEES it at once. Anyone else needs two of those pieces, or Marguerite (3.3).
- ARTIST: studying the cave sketchbooks raises **Winnie's Eye** (`rules.md` §5). With the lobby seascape and the lighthouse sketchbook, that's usually **rank III** here: *her hands remember something.*

```
[IMAGE_TRIGGER]
ID: IMG_CAVE_STUDIO
TYPE: MAJOR_DISCOVERY
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A hidden sea cave studio: a shaft of golden afternoon light from a crack in
the rock falling on an old wooden easel, jars of stone-hard pigment, a sea
chest of sketchbooks, and charcoal drawings of a lighthouse pinned to the
rock walls. The player in the light holding up a piece of amber sea glass
that glows like honey. Tide pools glittering at the cave mouth.

Do not reveal undiscovered information.
(Do not show the finished Keeper's Daughter painting.)

[/IMAGE_TRIGGER]
```

## 3.3 MARGUERITE'S PROMISE

If `SOCIAL_MARGUERITE_TRUST`, Marguerite closes the bakery at noon (unheard of), makes coffee, and tells the story (`DISCOVER_MARGUERITE_PROMISE`). Winnie was Marlowe. After Eli died she painted one last picture, *The Keeper's Daughter*, and sealed it away. *"She made me promise to keep it secret until the right one came. I told her it was ridiculous. She said, 'You'll know. She'll sort the beach by color.'"* If the player hasn't told her about that afternoon when she was eleven, Marguerite asks, and then she cries a little and blames the onions.

## 3.4 THE COUNCIL (the social puzzle)

The vote is Saturday. Run `game/puzzles.md`, *Puzzle 2: Whose Vote Is Bought*. Today is the day for legwork: the registry of deeds (open until three), the hardware store, the fish co-op, the church, and the survey stakes on the bluff.

- Report `DISCOVER_HANK_OPTION` when she learns of Hank's secret option with Vale.
- Report `DISCOVER_VALE_KNOWS` when she learns Vale is after the painting. That can come from the library (Vale requesting the same 1981 article), from Theo the travel writer (who overheard Vale on the ferry dock, on the phone, saying "the Marlowe"; see `characters/npcs.md`), or from the *"artworks"* clause.

## 3.5 FOG OFF THE POINT (set piece)

Dusk. Maya took Jonah's little sailing skiff out to sketch the lighthouse from the water, since Jonah has been teaching her. The fog comes in off the sea like a wall. The ferry horn sounds somewhere far off. Maya doesn't answer her phone. Run **`ENC_RESCUE`** (`game/encounters.md`).

```
[IMAGE_TRIGGER]
ID: IMG_FOG_RESCUE
TYPE: ENCOUNTER
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Thick silver fog at dusk over dark water and black rocks at the foot of a
dark lighthouse; a small wooden skiff with a lone young woman barely visible
in the murk; on the shore or in a workboat bow, the player with a lantern or
headlamp beam cutting through the fog. Muted blues and silvers with one
warm point of light.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

It must cost or reveal something. It might wear her composure thin, or it might finally pry out Maya's secret: soaked and shaking on the seawall, Maya blurts the truth.

## 3.6 THE SEAWALL

Mother and daughter on the harbor seawall under one blanket, after the fog. This is the emotional heart of the act. The conversation is the player's, so let her lead. Honest listening, telling her own year, not making Maya's life about herself, and pride said out loud earn `SOCIAL_MAYA_HEART`. A real reconciliation that lasts through the week is `BOND_MAYA`. A sharp word here (*"after everything I've done"*) sets `cruel_word` and costs trust. It can still be mended tomorrow.

## Thursday night

The weather radio in Bea's kitchen crackles: a **nor'easter** will hit tomorrow night, with gusts to seventy, a storm surge, and ferries cancelled. Bea says a word she's not allowed to say in front of the Feeneys. **Record `REACH_STORM`** (it's sent with everything else at the end) and fetch the Act IV pack.
