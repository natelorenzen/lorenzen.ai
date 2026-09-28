# SERIES DOOM: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `seriesdoom` · **events table:** `https://lorenzen.ai/musecade/seriesdoom/events.json`
- **Paths:** `HACKER`, `HUSTLER`, `VISIONARY`, `OPERATOR`

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_COUNCIL` · `REACH_BREAKING` · `REACH_EAST_BAY` · `REACH_DIABLO` |
| Secrets (11) | `DISCOVER_DEX_SECRET` · `DISCOVER_BRANDON_ORDERS` · `DISCOVER_GEMMA_PAPER` · `DISCOVER_LEO_WALLET` · `DISCOVER_ARI_OUSTER` · `DISCOVER_MANN_ARMY` · `DISCOVER_BUDDY_EMAILS` · `DISCOVER_KEVIN_PAST` · `DISCOVER_GARY_RETURNS` · `DISCOVER_THE_EYE` · `DISCOVER_BUDDY_WISH` |
| Puzzles | `PUZZLE_HIVE_SOLVED` · `PUZZLE_HIVE_NO_HINT` · `PUZZLE_LEAK_SOLVED` · `PUZZLE_LEAK_NO_HINT` · `PUZZLE_CRUCIBLE_SOLVED` · `PUZZLE_CRUCIBLE_NO_HINT` |
| Encounters | `ENC_HIVE_*` · `ENC_PARK_*` · `ENC_RECRUITER_*` · `ENC_DIABLO_*`, where `*` is `SURVIVED` or `CLEVER` (earns both) |
| Social | `SOCIAL_COUNCIL` · `SOCIAL_GABRIELLE` · `SOCIAL_MANN` · `SOCIAL_KEVIN_MERCY` · `SOCIAL_BUDDY_TALK` |
| Companions | `RECRUIT_DEX` · `RECRUIT_ARI` · `RECRUIT_GEMMA` · `ALLY_DEX_CARRIES` · `ALLY_ARI_RETURNS` · `ALLY_GEMMA_TRUSTS` · `COMPANION_SURVIVES_DEX` · `COMPANION_SURVIVES_ARI` · `COMPANION_SURVIVES_GEMMA` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` |

## Final screen

```
══════════════════════════════

          SERIES DOOM

        EXIT INTERVIEW

══════════════════════════════

FOUNDER
<NAME>

PATH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

PEAK HYPE
<max_hype> / 5

TEAM STILL STANDING
<alive> / <recruited>

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `THANK YOU FOR YOUR SERVICE TO THE BAY AREA.`, the high-scores link, and one fake LinkedIn post, three lines long, in which the founder humbly announces what just happened.

For `RUNWAY: ZERO`, title the screen `GAME OVER` instead of `EXIT INTERVIEW`, and replace the LinkedIn post with: `Type #seriesdoom to raise again.`
