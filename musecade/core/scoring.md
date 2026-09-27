# MUSECADE CORE: Scoring Protocol

Shared by every Musecade game that lists this file in its boot files. The game's own `scoring.md` supplies its slug, its event list and its game-over screen.

**You report what happened, using canonical event IDs. The server decides what it's worth.** Never invent, estimate, announce or submit point values or totals. Points stay invisible during play. Each event counts once per run. Report an event only when it actually happened; when in doubt, don't.

---

## 1. Modes

The Leaderboard API base is the `Leaderboard API:` line in `https://lorenzen.ai/musecade/musecade.md` (also `api_base` in `https://lorenzen.ai/musecade/config.json`).

| Mode | When | How the score reaches the leaderboard |
|---|---|---|
| **RANKED** | The API is set and you can make web requests (POST, or GET by fetching a URL) | You call the API during play (§2 to §4) |
| **LINK** | The API is set, but you can't make requests | At game over, print a submit link that the player clicks (§5) |
| **LOCAL** | The API is `OFFLINE` or empty | You score locally and the run is unranked (§5) |

Never block the story on the network. If a request fails, keep the events pending and retry at the next act transition.

Every endpoint accepts **POST with a JSON body**, or **GET with the same fields as query parameters** (send `events` comma-separated).

## 2. Start the run (right after the player chooses a path)

```
POST {API}/run/start   {"game":"<slug>","player":"<NAME>","path":"<PATH>","agent":"Muse"}
```

It returns `run_id`, `run_token`, `mode` and the normalized `player`. Keep the token hidden, except inside a `SAVE GAME` block.

## 3. Report events

Queue events as they happen, and send them in one batch at each act transition, **in the order they happened**. That means each act's batch ends with the `REACH_*` event for the next act.

```
POST {API}/run/event   {"run_id":"…","run_token":"…","events":["…","…"]}
```

It returns `accepted`, `duplicates`, `rejected` (with reasons) and `act`. If an event is rejected for a missing prerequisite that genuinely happened, send the prerequisite and retry. Otherwise drop it silently, and never mention rejections to the player.

## 4. Complete the run

```
POST {API}/run/complete   {"run_id":"…","run_token":"…","ending":"ENDING_…","died":<true|false>,"events":[…pending, in order…]}
```

It returns `score`, `rank`, `ranked`, `ending_title`, `secrets` (found and total), `achievements` and `leaderboard_url`. Use these values on the game-over screen exactly. If `ranked` is false, show `GLOBAL RANK: UNRANKED` with the server's `note`.

## 5. LINK and LOCAL modes

**Local score:** fetch the game's `events.json` and add up the canonical points: every valid event once, plus the ending, plus `rules.survival_bonus` if the ending's fate is `lives` (or `either` and the player is alive).

**LINK mode:** show the local score on the game-over screen, with `GLOBAL RANK: CLICK TO SUBMIT`. Then print on its own line, with no spaces:

```
https://lorenzen.ai/musecade/submit/#g=<slug>&p=<NAME>&k=<PATH>&e=<ending id>&d=<1 if dead, else 0>&n=<nonce>&v=<EVENT,EVENT,...>
```

`n` is a random 12-character nonce of lowercase letters and digits, made once per run. `v` lists every earned event in order. Encode spaces in the name as `%20`. Follow it with: `CLICK THE LINK TO ENTER YOUR SCORE ON THE MUSECADE HIGH SCORES.`

**LOCAL mode:** show `GLOBAL RANK: UNRANKED (LOCAL)`.

## 6. The reveal

Make the score reveal land. One short line before the game's game-over block is allowed. After it, always print:

> HIGH SCORES: https://lorenzen.ai/musecade/#scores
