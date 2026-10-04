# THE COUNT OF MONTE CRISTO: Scoring

Follow `core/scoring.md` for the protocol. This file gives the slug, the events and the screens.

- **Slug:** `montecristo` · **events table:** `https://lorenzen.ai/musecade/montecristo/events.json`
- **Paths:** `COUNT`, `ABBE`, `SAILOR`, `SCHOLAR`

## When to report what

| Kind | IDs |
|---|---|
| Act progress | `REACH_CHATEAU` · `REACH_ISLAND` · `REACH_PARIS` · `REACH_RECKONING` |
| Secrets (11) | `DISCOVER_THE_LETTER` · `DISCOVER_NOIRTIER` · `DISCOVER_FARIA_TREASURE` · `DISCOVER_FATHER` · `DISCOVER_CADEROUSSE` · `DISCOVER_JANINA` · `DISCOVER_AUTEUIL` · `DISCOVER_BENEDETTO` · `DISCOVER_POISONER` · `DISCOVER_DANGLARS_LEDGER` · `DISCOVER_MERCEDES_TRUTH` |
| Puzzles | `PUZZLE_BETRAYAL_SOLVED` · `PUZZLE_BETRAYAL_NO_HINT` · `PUZZLE_SPADA_SOLVED` · `PUZZLE_SPADA_NO_HINT` · `PUZZLE_TELEGRAPH_SOLVED` · `PUZZLE_TELEGRAPH_NO_HINT` |
| Encounters | `ENC_SACK_*` · `ENC_CATACOMBS_*` · `ENC_AUTEUIL_*` · `ENC_DUEL_*`, where `*` is `SURVIVED` or `CLEVER` (earns both) |
| Social | `SOCIAL_MORREL` · `SOCIAL_CADEROUSSE` · `SOCIAL_CHAMBER` · `SOCIAL_MERCEDES` · `SOCIAL_ALBERT` |
| Companions | `RECRUIT_JACOPO` · `RECRUIT_BERTUCCIO` · `RECRUIT_HAYDEE` · `ALLY_JACOPO_REFUSES` · `ALLY_BERTUCCIO_TELLS` · `ALLY_HAYDEE_STANDS` · `COMPANION_SURVIVES_JACOPO` · `COMPANION_SURVIVES_BERTUCCIO` · `COMPANION_SURVIVES_HAYDEE` |
| Achievements | see `game/achievements.md` |
| Endings | see `game/endings.md` |

## Final screen

```
══════════════════════════════

  THE COUNT OF MONTE CRISTO

          THE LEDGER

══════════════════════════════

EDMOND DANTÈS
<NAME>

BECAME
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score>

SECRETS
<found> / 11

PEAK VENGEANCE
<max_vengeance> / 5

INNOCENTS HARMED
<count, or NONE>

COMPANIONS AT THE END
<with him> / <recruited>

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `ALL HUMAN WISDOM IS CONTAINED IN TWO WORDS: WAIT AND HOPE.`, the high-scores link, and one sentence written on the last page of Edmond's journal, in his voice, about the ending he chose.

For `THE CEMETERY OF THE CHÂTEAU D'IF`, title the screen `GAME OVER` instead of `THE LEDGER`, and replace the journal line with: `Type #montecristo to dig again.`
