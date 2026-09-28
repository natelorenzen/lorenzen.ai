# THE SEA GLASS INN · PACK-4 · BUILD 1.0-bd3414f

Bundle for: Act IV begins (`REACH_STORM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-4.md =====

# ACT IV: THE STORM

*The day the island holds its breath, and the night the house tells its secret.* Target: 12 to 16 minutes, 8 to 11 decisions. Friday.

---

## 4.1 MORNING: VALE'S ENGINEER

Vale arrives with **"a structural engineer, just a formality for the lender"**: **Dr. Imogen Hart**, crisp, polite, and far more interested in the attic than the foundation. She's actually a senior specialist from a major auction house.

- She heads straight for the widow's walk stairs. STRATEGIST SEES her business card peeking out of her bag, and it isn't an engineering firm. ARTIST SEES her gloves: museum cotton. CARETAKER SEES that she feels bad about this.
- `DISCOVER_VALE_KNOWS` if it hasn't happened yet.
- **Vale's new offer**, now that he's cornered: **$3.4 million**, including "all contents". The deadline is still Saturday's vote. Lydia is due to sign her claim over to him at noon.

## 4.2 THE VIOLET PIECE AND THE WINDOW

- **The violet glass** is in the inn itself. The tide clock stopped at 4:10 has a little brass door behind the pendulum, and the note inside is dated **spring 1978**: *"That spring I bought a house full of rooms with my last painting money, so I'd never be alone in one. I called it the Sea Glass Inn, because broken things can be beautiful if you give them enough time."* (ADVENTURER and ARTIST SEE the clock's hidden door. Anyone else finds it by examining the clock.)
- **The window:** the widow's walk has a round window of seven empty leaded panes around a center boss. The boss is engraved *FROM THE DAWN, THE WAY THE LIGHT GOES*. Run `game/puzzles.md`, *Puzzle 3: Seven Colors of Winnie*.
- If she solves it before the storm, the paneling in the attic swings open. Report `PUZZLE_SEAGLASS_SOLVED`, `DISCOVER_HIDDEN_ROOM`, and at game over `ACH_FIRST_LIGHT`. Then 4.4's reveal happens now, in the afternoon light.

## 4.3 THE NOR'EASTER (set piece)

Friday night. Run **`ENC_STORM`** (`game/encounters.md`). The power goes out at nine. The sea comes over the harbor wall. Room 6's ceiling gives up. The cellar starts to flood. A shutter tears loose on the widow's walk. The Feeneys are frightened, and Theo is filming for his "piece". And out past the point, **Walt Sutter's son Danny** is still bringing his lobster boat in, in the dark, with his radio dead.

- **The lighthouse** has been dark since 1978, but its generator shed was recently serviced, because Winnie kept it ready. Relighting it guides Danny home (`ACH_LIGHTKEEPER`). It's a hard, wet run along the bluff and a roll to start the old generator.
- Every companion is in it: Bea commanding the kitchen, Jonah on the roof or with the pumps, Maya wherever the player needs her, Lydia hopeless and then, suddenly, brave. Marguerite arrives soaked to the skin carrying bread, because of course she does.

```
[IMAGE_TRIGGER]
ID: IMG_NOREASTER
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A wild nor'easter at night: a shingled Victorian inn on a bluff lashed by
rain and spray, windows glowing with candlelight, a shutter flying loose,
huge waves exploding on the rocks below; on the point, an old lighthouse
beam just blazing back to life across the storm. The player on the bluff
in a streaming jacket, and present companions, bracing against the wind.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 4.4 THE ROOM BEHIND THE WALL

If it isn't already open, then **at the height of the storm** a gust takes the widow's walk shutter, the old paneling in the attic cracks along a seam, and a hidden door swings inward in the lightning.

- Report `DISCOVER_HIDDEN_ROOM` (without `ACH_FIRST_LIGHT`, since the storm found it).
- Inside is a small, dry, cedar-lined room, and on the easel, uncovered, **The Keeper's Daughter** (1978). It's the lighthouse at night in a storm, its beam blazing, and on the gallery rail stands a young woman with her hand raised to the sea, waiting. It is the best thing Winnie ever made. Everyone who sees it goes quiet. Report `DISCOVER_KEEPERS_DAUGHTER`.
- Pinned to the frame is Winnie's last note: *"For whoever sorts the beach by color. It's yours. Not the money. The choice."*

```
[IMAGE_TRIGGER]
ID: IMG_KEEPERS_DAUGHTER
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A small cedar-lined hidden room lit by a candle and a flash of lightning
through a round window of colored sea glass. On an easel, a large luminous
painting of a lighthouse blazing in a storm, with a young woman on the
gallery rail raising her hand toward the sea. The player standing before
it, one hand over her mouth; companions crowding the doorway behind her.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 4.5 THE LONG NIGHT

The storm blows out after two. Candles, blankets, the kitchen table. This is the act's quiet heart: conversations that change the ending. Let the player choose who to sit with. Each of these is a real scene, not a checkbox:

- **Lydia**, finally honest about her year: `SOCIAL_LYDIA_PEACE` if the player meets her with grace. Lydia tears up her agreement with Vale, or doesn't.
- **Bea:** her savings, her dream of co-owning the inn, her fear. A true partnership offered or accepted is `BOND_BEA`.
- **Jonah:** a quiet porch at three in the morning. Sara, Eli, Winnie, second chances. PG: a held hand, maybe one kiss, if the player chooses. `BOND_JONAH` if it's real.
- **Maya:** if the seawall went badly, it can be mended here (`BOND_MAYA`).

## Saturday dawn

The storm is gone. The island is scrubbed and gold, with seaweed on the lawn. **Record `REACH_FESTIVAL`** (it's sent with everything else at the end) and fetch the Act V pack.
