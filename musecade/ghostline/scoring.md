# GHOSTLINE: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `ghostline` · **events table:** `https://lorenzen.ai/musecade/ghostline/events.json`
- **Paths:** `NETRUNNER`, `CHROME`, `FIXER`, `MEDTECH`
- `FULL SYNC`, `RESTORED` and `FLATLINE` complete with `died: true`. Every other ending completes with `died: false`.

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_STACKS` · `REACH_VAULT` · `REACH_CANOPY` · `REACH_CROWN` |
| Secrets (11) | `DISCOVER_MARA_MURDER` · `DISCOVER_LOTUS_BUYER` · `DISCOVER_KES_DEAL` · `DISCOVER_NULL_PAST` · `DISCOVER_JUNO_PLAN` · `DISCOVER_LOOM_PRICE` · `DISCOVER_EDITS` · `DISCOVER_YOUR_DEATH` · `DISCOVER_MARA_BUILT_IT` · `DISCOVER_SISTER_ALIVE` · `DISCOVER_KADE_BACKUP` |
| Puzzles | `PUZZLE_PALACE_SOLVED` · `PUZZLE_PALACE_NO_HINT` · `PUZZLE_VAULT_SOLVED` · `PUZZLE_VAULT_NO_HINT` · `PUZZLE_LOOM_SOLVED` · `PUZZLE_LOOM_NO_HINT` |
| Set pieces | `ENC_CHURCH_*` · `ENC_CANOPY_*` · `ENC_SPIRE_*`, where `*` is `SURVIVED` or `CLEVER` (masterful; earns both) |
| Social | `SOCIAL_LOTUS_DEAL` · `SOCIAL_CARTOGRAPHERS` · `SOCIAL_NULL_CONFESSION` · `SOCIAL_MARA_TRUTH` · `SOCIAL_INES` |
| Companions | `RECRUIT_KES` · `RECRUIT_NULL` · `RECRUIT_JUNO` · `KES_STAYS` · `NULL_REDEEMED` · `JUNO_LETS_GO` · `COMPANION_SURVIVES_*` (at game over, for each recruited companion still alive: `COMPANION_SURVIVES_KES`, `COMPANION_SURVIVES_NULL`, `COMPANION_SURVIVES_JUNO`) |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` (sent only with `/run/complete`) |

## Final screen

After the ending's narration and image, print:

```
══════════════════════════════

          GHOSTLINE

        CONNECTION LOST

══════════════════════════════

RUNNER
<NAME>

PATH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

SYNC AT THE END
<n> / 5

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `IN LUMEN, EVERYONE IS SOMEBODY'S BACKUP.` and the high-scores link (`core/scoring.md` §6). For `FLATLINE`, `FULL SYNC` and `RESTORED`, title the screen `GAME OVER` instead of `CONNECTION LOST`, and add: `Type #ghostline to jack in again.`
