# THE SEA GLASS INN · PACK-3 · BUILD 1.0-bd3414f

Bundle for: Act III begins (`REACH_LETTERS`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: THE LETTERS

*Who Winnie really was, the cave, the fog, and the truth from her daughter.* Target: 12 to 16 minutes, 8 to 11 decisions. Thursday.

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

===== FILE: world/winnie.md =====

# THE SEA GLASS INN: Winifred Hale

Loaded at Act III. This is Winnie's life, the story the sea glass tells. Reveal it only through letters, notes, people and places.

| Year | Chapter | Sea glass | Where it's hidden | Note (summary) |
|---|---|---|---|---|
| 1971 | **Arrival:** she came for the light | **Blue** | with the will | *"Start where the light used to be."* |
| 1972 | **Friendship:** the first winter, Marguerite's bread | **Green** | Doucette's Bakery (Marguerite) | *"The first winter I nearly left. Marguerite fed me…"* |
| 1974 | **The studio:** becoming W. Marlowe | **Amber** | the sea cave studio | *"The summer I became someone else…"* |
| 1975 | **Love:** Eli, and the boat he named for her | **Red** | the dory *Winifred*'s bow, Jonah's shed | *"He built a boat and named it after me…"* |
| Feb 1978 | **The storm:** Eli lost | **White** | St. Brendan's, behind the memorial plate | *"February. The storm took him…"* |
| Spring 1978 | **The inn:** a house full of rooms | **Violet** | the tide clock's hidden door, in the inn | *"That spring I bought a house full of rooms…"* |
| 2026 | **Goodbye:** the letter to the girl who sorted the beach | **Cobalt** | the lighthouse lamp room | *"This is the last piece, and it's in the first place…"* |

## The life

- **Born 1944** in the city. Art school on a scholarship. By 1970 she was the brightest young painter of her year, and restless.
- **1971:** she came to Halcyon for one summer to paint the light, and stayed.
- **1972:** the first winter nearly broke her. Marguerite, then twenty-eight and newly widowed, fed her and told her to stop feeling sorry for herself. They were best friends for fifty-five years.
- **1973–1977:** she sent paintings to a city gallery under the name **W. Marlowe**. Critics adored them, and collectors fought over them. Nobody knew who Marlowe was. She painted in a sea cave under the bluff, because the light there was "like being inside a shell".
- **1975:** **Eli Brennan**, a lobsterman, built a dory and named it *Winifred* before he'd said ten words to her. They loved each other and never married. *"Paper is for people who need proof."*
- **February 7, 1978:** the great storm. Eli and two other boats were lost. Winnie stood at the lighthouse all night.
- **Spring 1978:** she painted one last picture, **The Keeper's Daughter**: the lighthouse blazing in a storm, and a young woman on the gallery rail raising her hand to the sea. She sealed it behind the attic wall of the failing Sea Glass Inn, which she bought that spring with her last painting money. She never exhibited again. W. Marlowe simply vanished.
- **1978–2026:** forty-six years running the inn. She kept the lighthouse's generator serviced every year, *"in case someone needs bringing home"*. She stopped the lobby tide clock at 4:10, the low tide of the day she first found the cave.
- **One summer, about thirty years ago:** her great-niece, eleven years old, spent an entire afternoon sorting the beach's sea glass by color. Winnie wrote in her diary: *"She sorted it the way I used to sort paints. That one."*
- **2026:** Winnie died in her sleep in September, with the window open.

## The painting

***The Keeper's Daughter*** **(1978)**, oil on linen, about four feet by five. It's the lost masterpiece of W. Marlowe, hunted by art historians for decades, and it's worth a fortune at auction. It is also, as everyone who sees it understands, a painting about grief, and about keeping a light on anyway.

===== FILE: game/encounters.md =====

# THE SEA GLASS INN: Set Pieces

There are no fights on Halcyon. The set pieces are the sea and the weather, and the stakes are people she loves, the inn, and her own composure. They still follow the Musecade rules: three genuinely different approaches as a lettered menu, a d20 at the turning point, and every set piece must **cost or reveal** something.

## Rules
1. **Open with the situation:** what's at risk, where, and one usable detail (a foghorn, the church bell, the lighthouse generator, a sump pump, the co-op boats).
2. **Three approaches as a lettered menu (A, B, C, plus D. Other):** **go in yourself** (brave and direct; it costs composure and risks harm to the inn or to you), **rally the island** (call people in; it costs time and favors, and pride), and **use what's here** (the lighthouse, the bell, the tides, clever improvising; a bigger roll with a bigger payoff).
3. **Roll the d20 at the turning point** (`core/dm-core.md` §5). A miss by 1 to 4 costs composure +1, or damage to the inn. Nobody dies. The worst outcomes are fear, loss of property, and hard feelings.
4. **Paths pay off:** the Adventurer handles boats, weather and cold water; the Caretaker keeps people calm and organized; the Strategist makes the plan and knows who to call; the Artist sees the detail that matters (a light in the fog, the seam in the paneling).
5. `_SURVIVED` means she came through it; `_CLEVER` means it was handled masterfully, and earns both.

---

## Cold open: the squall on the ferry (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_RESCUE: Fog off the Point · SET PIECE (Act III, Thursday dusk)
- **At stake:** Maya, alone in Jonah's little sailing skiff, somewhere in the fog near the rocks off the lighthouse point. Her phone is dead.
- **Terrain:** thick fog, the rising tide, the black rocks at the point, the dark lighthouse, the harbor's foghorn, the church bell, Jonah's workboat, the co-op's radios.
- **Menu example:** "Take Jonah's workboat out into the fog and find her yourself." / "Get Walt and the co-op boats out in a line, calling her name." / "Run for the lighthouse, and give her a light to steer by."
- **Reveals:** Maya's secret, on the seawall afterward (`acts/act-3.md` 3.6). **Costs:** composure, almost always. This is her child.

## ENC_STORM: The Nor'easter · SET PIECE (Act IV, Friday night)
- **At stake:** the inn (the roof, the cellar, the windows), the guests, the attic and what it hides, and Danny Sutter's lobster boat coming in blind.
- **Terrain:** power out; the sea over the harbor wall; Room 6's ceiling; the flooding cellar; a shutter tearing on the widow's walk; the old **lighthouse generator**; candles; companions.
- **Menu example:** "Stay and fight for the inn: buckets, boards, and everyone on the pumps." / "Get everyone to the church hall and let the house take its chances." / "Run the bluff to the lighthouse and bring the old light back to life."
- **Reveals:** the hidden room (if it isn't open yet), and who people are under pressure (Lydia, suddenly brave). **Costs:** damage to the inn, composure, and a night with no sleep.
- Relighting the lighthouse guides Danny home: `ACH_LIGHTKEEPER`.
