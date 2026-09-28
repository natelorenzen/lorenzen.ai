# THE SEA GLASS INN: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `theseaglassinn` · **events table:** `https://lorenzen.ai/musecade/theseaglassinn/events.json`
- **Paths:** `SLEUTH`, `CHARMER`, `ATHLETE`, `PHOTOGRAPHER`
- Every ending's fate is `lives`: nobody dies in this story. Always complete with `died: false`.

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_LIARS` · `REACH_DARKROOM` · `REACH_STORM` · `REACH_BONFIRE` |
| Secrets (11) | `DISCOVER_BEA_TOLD` · `DISCOVER_JULES_BASKET` · `DISCOVER_DIARY_FAKE` · `DISCOVER_THEO_ALIBI` · `DISCOVER_PRIYA_TEXT` · `DISCOVER_HANK_PAID` · `DISCOVER_LYDIA_KNEW` · `DISCOVER_CANNERY_FIRE` · `DISCOVER_SADIE_ALIVE` · `DISCOVER_MARGUERITE_SECRET` · `DISCOVER_VALE_CRIME` |
| Puzzles | `PUZZLE_DIARY_SOLVED` · `PUZZLE_DIARY_NO_HINT` · `PUZZLE_TIMELINE_SOLVED` · `PUZZLE_TIMELINE_NO_HINT` · `PUZZLE_SEAGLASS_SOLVED` · `PUZZLE_SEAGLASS_NO_HINT` |
| Set pieces | `ENC_CAVE_*` · `ENC_STORM_*` · `ENC_BONFIRE_*`, where `*` is `SURVIVED` (came through it) or `CLEVER` (handled it masterfully; earns both) |
| Social | `SOCIAL_VALE_BLUFF` · `SOCIAL_BEA_TRUTH` · `SOCIAL_LYDIA` · `SOCIAL_THEO_TRUST` · `SOCIAL_SADIE_TRUTH` |
| Companions | `RECRUIT_JULES` · `RECRUIT_PRIYA` · `RECRUIT_THEO` · `BOND_JULES` · `BOND_PRIYA` · `BOND_THEO` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` (sent only with `/run/complete`, and always with `died: false`) |

## Final screen

After the ending's narration and image, print:

```
══════════════════════════════

      THE SEA GLASS INN

         CASE CLOSED

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

Then: `EVERYONE LIES. NOT EVERYONE GETS CAUGHT.` and the high-scores link (`core/scoring.md` §6).
