# THE BLACK ROAD: Scoring and the Musecade Leaderboard

Musecade uses arcade scoring. **You report what happened, using canonical event IDs. The backend decides what it is worth.** You never invent, estimate, announce or submit point values or totals during play.

- Points stay invisible during play. Do not mention them, and do not say "that's worth points".
- Do not reward turn count, grinding or repetition. Each event counts once per run.
- Report an event only when it has actually happened in the fiction. When in doubt, don't report it.

---

## 1. Where the backend lives

The leaderboard API base URL is published in `https://lorenzen.ai/musecade/musecade.md` (the line `Leaderboard API:`) and in `https://lorenzen.ai/musecade/config.json` (`api_base`).

There are three modes. Pick one when the run starts and keep it:

| Mode | When | How the score reaches the leaderboard |
|---|---|---|
| **RANKED** | The API base is set and you can make web requests (POST, or GET by fetching a URL) | You call the API during play (§2 to §4) |
| **LINK** | The API base is set, but you cannot make web requests | At game over you print a submit link; the player clicks it (§6) |
| **LOCAL** | The API base is `OFFLINE` or empty | Nothing is ranked; you score locally from `events.json` (§6) |

- In LOCAL mode, say so once, in one line, when the run starts: `LEADERBOARD OFFLINE. THIS RUN WILL BE SCORED LOCALLY AND NOT RANKED.`
- In LINK mode, say nothing at the start. The link comes at the end.
- If a request fails mid-game, keep the events queued as `pending`, keep playing, and retry at the next act transition. Never block the story on the network.

Every endpoint accepts **POST with a JSON body** (preferred), or **GET with the same fields as query parameters** for agents that can only fetch URLs. For GET, send `events` as a comma-separated list.

---

## 2. Start the run (after the player chooses a path)

```
POST {API}/run/start
{"game":"theblackroad","player":"<NAME>","path":"<WARDEN|SCHOLAR|WAYFARER|ENVOY>","agent":"Muse"}

GET  {API}/run/start?game=theblackroad&player=<NAME>&path=<PATH>&agent=Muse
```

Response:

```
{"run_id":"r_7Kq2...","run_token":"b41f...","mode":"RANKED","player":"NATHAN"}
```

Store `run_id` and `run_token` in hidden state. Never show the token to the player except inside a `SAVE GAME` block. The backend may normalize the player name. Use the name it returns on the leaderboard screen.

---

## 3. Report events

Queue events as they happen. **Send them in one batch at each act transition, and in the final batch at completion.** Always list events in the order they happened, because the server checks the order. So an act's batch ends with the `REACH_*` event for the next act, which happened last.

```
POST {API}/run/event
{"run_id":"<id>","run_token":"<token>","events":["DISCOVER_MILESTONE_VERSE","ENC_ROAD_SURVIVED","RECRUIT_CALEN","REACH_WILDERNESS"]}
```

Response:

```
{"accepted":[...],"duplicates":[...],"rejected":[{"id":"...","reason":"..."}],"act":2}
```

- Move accepted and duplicate events to `reported`. Leave nothing pending.
- If an event is **rejected** because a prerequisite is missing, and that prerequisite genuinely happened, send it and then retry. Otherwise drop the event silently. Never argue with the server and never mention rejections to the player.

---

## 4. Complete the run

When an ending is reached, send any pending events together with the ending:

```
POST {API}/run/complete
{"run_id":"<id>","run_token":"<token>","ending":"ENDING_LAST_FLAME","died":false,"events":[...pending, in order...]}
```

`died` is `true` only if the player character is dead at the end.

Response:

```
{"score":8450,"rank":37,"ranked":true,"ending_title":"THE LAST FLAME",
 "secrets":{"found":7,"total":11},"achievements":["OLD BLOOD","THE LONG WAY"],
 "leaderboard_url":"https://lorenzen.ai/musecade/#scores"}
```

Use these values on the game-over screen exactly. If `ranked` is false, show `GLOBAL RANK` as `UNRANKED` with the server's `note` in lowercase beneath it.

---

## 5. When to report what

Report these as they happen. The act files name the moments.

| Kind | IDs |
|---|---|
| Act progress | `REACH_WILDERNESS` · `REACH_VEYR` · `REACH_ORUN` · `REACH_THRONE` |
| Secrets (11) | `DISCOVER_MILESTONE_VERSE` · `DISCOVER_HEDDA_CELLAR` · `DISCOVER_CALEN_ORDERS` · `DISCOVER_LONG_WAY` · `DISCOVER_WREN_HUSHING` · `DISCOVER_OSWIN_PURPOSE` · `DISCOVER_MINERS_TALLY` · `DISCOVER_CRYPT` · `DISCOVER_BURNING_TRUTH` · `DISCOVER_STILLHEART` · `DISCOVER_RELIQUARY_TRUTH` |
| Puzzles | `PUZZLE_LIAR_SOLVED` · `PUZZLE_LIAR_NO_HINT` · `PUZZLE_GATE_SOLVED` · `PUZZLE_GATE_NO_HINT` · `PUZZLE_LITANY_SOLVED` · `PUZZLE_LITANY_NO_HINT` |
| Encounters | `ENC_ROAD_*` · `ENC_AMBUSH_*` · `ENC_BRIDGE_*` · `ENC_DROWNED_*` · `ENC_CINDER_*` · `ENC_ORUN_*` · `ENC_THRONE_*`, where `*` is `SURVIVED` or `CLEVER` |
| Social | `SOCIAL_HEDDA_MERCY` · `SOCIAL_FENN_BARGAIN` · `SOCIAL_TAM_TURNED` · `SOCIAL_DASK_PARLEY` · `SOCIAL_SERITH_DOUBT` · `QUEEN_SPOKEN` |
| Companions | `RECRUIT_CALEN` · `RECRUIT_WREN` · `RECRUIT_OSWIN` · `CALEN_STAYS_LOYAL` · `WREN_KEPT_WARM` · `OSWIN_CHOOSES_YOU` · `LISS_SAVED` · `COMPANION_SURVIVES_CALEN` · `COMPANION_SURVIVES_WREN` · `COMPANION_SURVIVES_OSWIN` |
| Achievements | see `game/achievements.md` (evaluated at game over, except `ACH_WHATS_IN_THE_BOX`, which you report when it happens) |
| Endings | see `game/endings.md` (sent only with `/run/complete`) |

Encounter rule: `_SURVIVED` means the player came through the encounter alive, by any means. `_CLEVER` means they resolved it through an unusual, well-reasoned approach: terrain, deception, a trap, a bargain, or avoiding it entirely by wit. A clever resolution earns **both**.

Companion survival events are reported at game over, for each recruited companion who is alive and not Hushed. Report them if the player died too.

---

## 6. LINK and LOCAL modes

In both modes, track events internally exactly as above.

**Local score:** at game over, fetch `https://lorenzen.ai/musecade/theblackroad/events.json` and add up the canonical points: every valid event once, plus the ending, plus `survival_bonus` if the ending's fate is `lives` (or `either` and the player is alive). Never present a local score as a leaderboard score.

**LINK mode:** show the local score on the game-over screen, with `GLOBAL RANK` as `CLICK TO SUBMIT`. Then print this link on its own line, with no spaces anywhere in it:

```
https://lorenzen.ai/musecade/submit/#g=theblackroad&p=<NAME>&k=<PATH>&e=<ending id>&d=<1 if dead, else 0>&n=<nonce>&v=<EVENT,EVENT,...>
```

- `n` is a random nonce of 12 lowercase letters and digits, made once per run. It is the run ID in `SAVE GAME` for LINK mode.
- `v` lists every event the run earned, in the order they happened, comma-separated.
- URL-encode spaces in the name as `%20`.
- Follow it with one line: `CLICK THE LINK TO ENTER YOUR SCORE ON THE MUSECADE HIGH SCORES.` The page shows the run, the player presses SUBMIT, and the server validates every event and calculates the official score.

**LOCAL mode:** show `GLOBAL RANK: UNRANKED (LOCAL)`.

---

## 7. The game-over screen

After the ending narration and the final image (`game/endings.md`), print this in a code block. Do not print it for a death. Deaths use §8.

```
══════════════════════════════

        THE BLACK ROAD

       JOURNEY COMPLETE

══════════════════════════════

PLAYER
<NAME>

PATH
<PATH>

ENDING
<ENDING TITLE>

SCORE
<score with thousands separator>

SECRETS
<found> / 11

COMPANIONS SURVIVED
<alive> / <recruited>

ACHIEVEMENTS
<one title per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then, outside the block:

> YOUR ROAD THROUGH ELDERVALE IS COMPLETE.
>
> HIGH SCORES: https://lorenzen.ai/musecade/#scores

If no companions were recruited, print `COMPANIONS SURVIVED` as `NONE · THE LONE ROAD`.

Make the reveal land. Before the block, one short line is allowed, for example `The machine hums. Somewhere, a number is being carved into a high-score table.`

---

## 8. The death screen

After the death narration, the death image and the epilogue (`game/endings.md`, `A NAME IN THE SNOW`):

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

Then: `THE BLACK ROAD REMEMBERS. HIGH SCORES: https://lorenzen.ai/musecade/#scores` and one line inviting another run: `Type #theblackroad to walk it again.`
