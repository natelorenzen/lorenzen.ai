# BLACK FRIDAY: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `blackfriday` · **events table:** `https://lorenzen.ai/musecade/blackfriday/events.json`
- **Paths:** `FOUNDER`, `BUYER`, `OPERATOR`, `CREATIVE`

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_SUMMIT` · `REACH_BACK_ROOM` · `REACH_WAR_ROOM` · `REACH_BFCM` |
| Secrets (11) | `DISCOVER_KYLE_TESTIMONIAL` · `DISCOVER_DOT_NOTES` · `DISCOVER_GURU_CASE_STUDY` · `DISCOVER_NOOSPHERE_DEMO` · `DISCOVER_REX_SECRET` · `DISCOVER_MARGO_OFFER` · `DISCOVER_SIMONE_SHEET` · `DISCOVER_METHOD_ORIGIN` · `DISCOVER_INCREMENTALITY` · `DISCOVER_COURSE_LOOP` · `DISCOVER_WHY_THEY_BUY` |
| Puzzles | `PUZZLE_NUMBERS_SOLVED` · `PUZZLE_NUMBERS_NO_HINT` · `PUZZLE_LEVER_SOLVED` · `PUZZLE_LEVER_NO_HINT` · `PUZZLE_OFFER_SOLVED` · `PUZZLE_OFFER_NO_HINT` |
| Encounters | `ENC_EXPO_*` · `ENC_PODCAST_*` · `ENC_ACCOUNT_*` · `ENC_BFCM_*`, where `*` is `SURVIVED` or `CLEVER` (earns both) |
| Social | `SOCIAL_REX` · `SOCIAL_VINCE` · `SOCIAL_BACK_ROOM` · `SOCIAL_SIMONE` · `SOCIAL_CUSTOMER_CALLS` |
| Companions | `RECRUIT_MARGO` · `RECRUIT_KYLE` · `RECRUIT_DOT` · `ALLY_MARGO_STAYS` · `ALLY_KYLE_UNSUBSCRIBES` · `ALLY_DOT_PRESENTS` · `COMPANION_SURVIVES_MARGO` · `COMPANION_SURVIVES_KYLE` · `COMPANION_SURVIVES_DOT` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` |

## Final screen

```
══════════════════════════════

         BLACK FRIDAY

        THE BOARD DECK

══════════════════════════════

OPERATOR
<NAME>

CAME UP THROUGH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

PEAK STACK
<max_stack> / 5

HAIR
<FULL | THINNING | RECEDING | HAT>

TEAM STILL HERE
<still on the team> / <recruited>

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `CONTRIBUTION MARGIN IS THE ONLY MARGIN.`, the high-scores link, and **the player's year-in-review post**, the Feed's favorite December tradition, in a code block: five short lines, in the voice the ending deserves: growth (the real number, or the screenshot number), what the hero product isn't anymore, the one thing they stopped doing, what posting itself paid them this year (*"$8,212 from posting. $31K trackable. $0 from the podcast, because there is no podcast"*), and one line to the Feed. Then three replies: someone selling something, Cole, and Ray.

For `OUT OF CASH`, title the screen `GAME OVER` instead of `THE BOARD DECK`, and replace the post with: `Type #blackfriday to raise a bridge round.`
