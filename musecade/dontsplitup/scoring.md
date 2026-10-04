# DON'T SPLIT UP: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `dontsplitup` · **events table:** `https://lorenzen.ai/musecade/dontsplitup/events.json`
- **Paths:** `JOCK`, `NERD`, `SKEPTIC`, `WEIRDO`

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_CABIN` · `REACH_CAMP` · `REACH_TOWN` · `REACH_PATCH` |
| Secrets (11) | `DISCOVER_EARL_CARDS` · `DISCOVER_FLYER` · `DISCOVER_WENDELL_SECRET` · `DISCOVER_FOG_MACHINES` · `DISCOVER_DALE_GRANDPA` · `DISCOVER_DARLENE_STORY` · `DISCOVER_THE_TAKEN` · `DISCOVER_THE_COMMITTEE` · `DISCOVER_THE_ORIGIN` · `DISCOVER_THE_STINGER` · `DISCOVER_HOLLOW_WISH` |
| Puzzles | `PUZZLE_CABIN_SOLVED` · `PUZZLE_CABIN_NO_HINT` · `PUZZLE_RULES_SOLVED` · `PUZZLE_RULES_NO_HINT` · `PUZZLE_LANTERN_SOLVED` · `PUZZLE_LANTERN_NO_HINT` |
| Encounters | `ENC_CABIN_*` · `ENC_CAMP_*` · `ENC_MAZE_*` · `ENC_PATCH_*`, where `*` is `SURVIVED` or `CLEVER` (earns both) |
| Social | `SOCIAL_EARL` · `SOCIAL_DARLENE` · `SOCIAL_SHERIFF` · `SOCIAL_MAYOR` · `SOCIAL_HOLLOW_TALK` |
| Companions | `RECRUIT_DALE` · `RECRUIT_WENDELL` · `RECRUIT_COURTNEY` · `ALLY_DALE_COMES_BACK` · `ALLY_COURTNEY_TAPE` · `ALLY_WENDELL_WATCHES` · `COMPANION_SURVIVES_DALE` · `COMPANION_SURVIVES_WENDELL` · `COMPANION_SURVIVES_COURTNEY` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` |

## Final screen

```
══════════════════════════════

        DON'T SPLIT UP

       THE FINAL CREDITS

══════════════════════════════

STARRING
<NAME>

AS
THE <PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

PEAK TROPE
<max_trope> / 5

FRIENDS AT SUNRISE
<alive and awake> / <recruited>

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `NO TEENAGERS WERE PERMANENTLY HARMED IN THE MAKING OF THIS NIGHT.`, the high-scores link, and one fake VHS box blurb for the sequel, three lines long, in the breathless voice of a 1989 video-store shelf (*"This year... the Hollow comes HOME."*). For `NO SEQUEL` and `COME FOR THE LEAVES`, the blurb is for a sequel that was cancelled, and why.

For `I'LL BE RIGHT BACK`, title the screen `GAME OVER` instead of `THE FINAL CREDITS`, and replace the blurb with: `Type #dontsplitup to go back in.`
