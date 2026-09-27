# THE GLASS CITY: Scoring

Follow `core/scoring.md` for the protocol (modes, API calls, batching, LINK and LOCAL). This file gives the game's slug, its events and its screens.

- **Slug:** `theglasscity` · **events table:** `https://lorenzen.ai/musecade/theglasscity/events.json`
- **Paths:** `OPERATIVE`, `ANALYST`, `GHOST`, `DIPLOMAT`

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_CONTACT` · `REACH_BURNED` · `REACH_MOLE` · `REACH_BRIDGE` |
| Secrets (11) | `DISCOVER_SWEEPER_PHOTO` · `DISCOVER_TOMAS_REPORTS` · `DISCOVER_ANYA_HANDLER` · `DISCOVER_ILSE_REPORTS` · `DISCOVER_PAVEL` · `DISCOVER_MORROW_LEAK` · `DISCOVER_KATYA` · `DISCOVER_THE_FRAME` · `DISCOVER_ASHBY_SON` · `DISCOVER_VOSS_GARDEN` · `DISCOVER_CARDINAL` |
| Puzzles | `PUZZLE_QUEEN_SOLVED` · `PUZZLE_QUEEN_NO_HINT` · `PUZZLE_ARCHIVE_SOLVED` · `PUZZLE_ARCHIVE_NO_HINT` · `PUZZLE_CANARY_SOLVED` · `PUZZLE_CANARY_NO_HINT` |
| Encounters | `ENC_ARCADE_*` · `ENC_RAID_*` · `ENC_GLASSHOUSE_*` · `ENC_BRIDGE_*`, where `*` is `SURVIVED` or `CLEVER` (a clever resolution earns both) |
| Social | `SOCIAL_BORDER` · `SOCIAL_NIGHTINGALE_TRUST` · `SOCIAL_ILSE_DEAL` · `SOCIAL_MARGOT` · `SOCIAL_VOSS_PARLEY` · `SOCIAL_ASHBY_CONFRONT` |
| Allies | `RECRUIT_TOMAS` · `RECRUIT_ILSE` · `RECRUIT_ANYA` · `ALLY_TOMAS_TURNED` · `ALLY_ILSE_TRUE` · `ALLY_ANYA_CHOOSES` · `RESCUE_KATYA` · `COMPANION_SURVIVES_TOMAS` · `COMPANION_SURVIVES_ILSE` · `COMPANION_SURVIVES_ANYA` |
| Achievements | see `game/achievements.md` (evaluated at game over) |
| Endings | see `game/endings.md` (sent only with `/run/complete`) |

Companion survival events are reported at game over for each recruited ally who is alive and free.

## Game-over screen

After the ending narration and image, print:

```
══════════════════════════════

        THE GLASS CITY

       OPERATION CLOSED

══════════════════════════════

COVER NAME
<NAME>

PATH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

ALLIES STANDING
<alive> / <recruited>   (or NONE · LONE WOLF)

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `THE FILE ON AUREL IS CLOSED.` and the high-scores link (`core/scoring.md` §6).

## Death screen

```
══════════════════════════════

          GAME OVER

══════════════════════════════

<NAME> · <PATH>
FELL <where, 2 to 5 words>

SCORE
<score>

SECRETS
<found> / 11

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `THEY CARVED A STAR FOR YOU. NO NAME UNDER IT.`, the high-scores link, and `Type #theglasscity to go back in.`
