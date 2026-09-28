# THE SEA GLASS INN: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `theseaglassinn` · **events table:** `https://lorenzen.ai/musecade/theseaglassinn/events.json`
- **Paths:** `CARETAKER`, `STRATEGIST`, `ARTIST`, `ADVENTURER`
- Every ending's fate is `lives`: this story has no death. Always complete with `died: false`.

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_ISLAND` · `REACH_LETTERS` · `REACH_STORM` · `REACH_FESTIVAL` |
| Secrets (11) | `DISCOVER_BEA_SAVINGS` · `DISCOVER_VALE_KNOWS` · `DISCOVER_HANK_OPTION` · `DISCOVER_LYDIA_TROUBLE` · `DISCOVER_MAYA_SECRET` · `DISCOVER_MARGUERITE_PROMISE` · `DISCOVER_JONAH_LETTERS` · `DISCOVER_ELI` · `DISCOVER_MARLOWE` · `DISCOVER_HIDDEN_ROOM` · `DISCOVER_KEEPERS_DAUGHTER` |
| Puzzles | `PUZZLE_TIDE_SOLVED` · `PUZZLE_TIDE_NO_HINT` · `PUZZLE_COUNCIL_SOLVED` · `PUZZLE_COUNCIL_NO_HINT` · `PUZZLE_SEAGLASS_SOLVED` · `PUZZLE_SEAGLASS_NO_HINT` |
| Set pieces | `ENC_RESCUE_*` · `ENC_STORM_*`, where `*` is `SURVIVED` (came through it) or `CLEVER` (handled it masterfully; earns both) |
| Social | `SOCIAL_VALE_TERMS` · `SOCIAL_MARGUERITE_TRUST` · `SOCIAL_LYDIA_PEACE` · `SOCIAL_MAYA_HEART` · `SOCIAL_COUNCIL_SPEECH` |
| Companions | `RECRUIT_BEA` · `RECRUIT_JONAH` · `RECRUIT_MAYA` · `BOND_BEA` · `BOND_JONAH` · `BOND_MAYA` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` (sent only with `/run/complete`, and always with `died: false`) |

## Final screen

After the ending's narration and image, print:

```
══════════════════════════════

      THE SEA GLASS INN

        CHAPTER CLOSED

══════════════════════════════

NAME
<NAME>

PATH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

SEA GLASS
<pieces found> / 7

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `THE ISLAND WILL KEEP A LIGHT ON FOR YOU.` and the high-scores link (`core/scoring.md` §6).
