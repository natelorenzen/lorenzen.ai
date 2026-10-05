# THE BLACK ROAD: Scoring

Follow `core/scoring.md` for the protocol (RANKED, LINK and LOCAL modes; start the run right after the path is chosen; hold every event in `pending`, in order, and send them all with the completion). This file gives the slug, the events, and where the screens are.

- **Slug:** `theblackroad` · **events table:** `https://lorenzen.ai/musecade/theblackroad/events.json`
- **Paths:** `WARDEN`, `SCHOLAR`, `WAYFARER`, `ENVOY`
- **Game-over screens:** `game/gameover.md`

## When to report what

| Kind | IDs |
|---|---|
| Progress | `REACH_WILDERNESS` · `REACH_VEYR` · `REACH_ORUN` · `REACH_THRONE` |
| Secrets (11) | `DISCOVER_MILESTONE_VERSE` · `DISCOVER_HEDDA_CELLAR` · `DISCOVER_CALEN_ORDERS` · `DISCOVER_LONG_WAY` · `DISCOVER_WREN_HUSHING` · `DISCOVER_OSWIN_PURPOSE` · `DISCOVER_MINERS_TALLY` · `DISCOVER_CRYPT` · `DISCOVER_BURNING_TRUTH` · `DISCOVER_STILLHEART` · `DISCOVER_RELIQUARY_TRUTH` |
| Puzzles | `PUZZLE_LIAR_*` · `PUZZLE_GATE_*` · `PUZZLE_LITANY_*` (`SOLVED`, plus `NO_HINT` if unaided) |
| Encounters | `ENC_ROAD_*` · `ENC_AMBUSH_*` · `ENC_BRIDGE_*` · `ENC_DROWNED_*` · `ENC_CINDER_*` · `ENC_ORUN_*` · `ENC_THRONE_*` (`SURVIVED`; plus `CLEVER` for an ingenious resolution) |
| Social | `SOCIAL_HEDDA_MERCY` · `SOCIAL_FENN_BARGAIN` · `SOCIAL_TAM_TURNED` · `SOCIAL_DASK_PARLEY` · `SOCIAL_SERITH_DOUBT` · `QUEEN_SPOKEN` |
| Companions | `RECRUIT_CALEN` · `RECRUIT_WREN` · `RECRUIT_OSWIN` · `CALEN_STAYS_LOYAL` · `WREN_KEPT_WARM` · `OSWIN_CHOOSES_YOU` · `LISS_SAVED` · `COMPANION_SURVIVES_*` (at game over, for each recruited companion who is alive and not Hushed) |
| Achievements | at game over (`game/achievements.md`), except `ACH_WHATS_IN_THE_BOX`, which is recorded when it happens |
| Endings | sent only with the completion (`game/endings.md`) |
