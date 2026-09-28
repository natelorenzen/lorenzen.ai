# THE BLACK ROAD: Scoring

**Report what happened as canonical event IDs; the server decides what it's worth.** Never mention, estimate or submit points. Each event counts once, and only if it truly happened.

## Modes (pick one at the start)
The API base is the `Leaderboard API:` line in `https://lorenzen.ai/musecade/musecade.md`.
- **RANKED:** the API is set and you can make web requests (POST, or GET by fetching a URL with the same fields as query parameters, and `events` comma-separated).
- **LINK:** the API is set, but you can't make requests. At the end, print a submit link (`game/gameover.md`).
- **LOCAL:** the API is `OFFLINE`. Say once: `LEADERBOARD OFFLINE. THIS RUN WILL BE SCORED LOCALLY AND NOT RANKED.`

Never block the story on the network.

## Start the run (right after the path is chosen)
`POST {API}/run/start {"game":"theblackroad","player":"<NAME>","path":"<PATH>","agent":"Muse"}` returns `run_id`, `run_token` and the normalized `player`. Keep the token hidden, except in `SAVE GAME`.

## Events: hold them until the end
Keep every event in `pending`, **in the order it happened** (the server checks the order), and send them all at once when the game ends (`game/gameover.md`). That's two network calls per run. Only if a run is paused for a long time: `POST {API}/run/event {"run_id","run_token","events":[…]}` before `SAVE GAME`.

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
