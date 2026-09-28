# THE BLACK ROAD: Game Over

## Complete the run
`POST {API}/run/complete {"run_id","run_token","ending":"ENDING_…","died":<true only if the courier is dead>,"events":[…all pending, in order…]}`

It returns `score`, `rank`, `ranked`, `ending_title`, `secrets` (found and total), `achievements` and `leaderboard_url`. Use them exactly. If `ranked` is false, show `GLOBAL RANK: UNRANKED` with the server's `note`. If an event is rejected for a missing prerequisite that truly happened, add it and retry. Otherwise ignore the rejection, silently.

**LOCAL or LINK:** add up the points yourself from `https://lorenzen.ai/musecade/theblackroad/events.json`: each event once, plus the ending, plus `survival_bonus` if the fate is `lives` (or `either` and alive). LOCAL shows `GLOBAL RANK: UNRANKED (LOCAL)`. LINK shows `CLICK TO SUBMIT`, then prints on its own line:
`https://lorenzen.ai/musecade/submit/#g=theblackroad&p=<NAME>&k=<PATH>&e=<ending id>&d=<1|0>&n=<12-char random nonce>&v=<EVENT,EVENT,…>`
followed by `CLICK THE LINK TO ENTER YOUR SCORE ON THE MUSECADE HIGH SCORES.`

## Journey complete
After the ending narration and image, one short line is allowed (`The machine hums. Somewhere, a number is being carved into a high-score table.`), then:

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
<score>

SECRETS
<found> / 11

COMPANIONS SURVIVED
<alive> / <recruited>   (or NONE · THE LONE ROAD)

ACHIEVEMENTS
<one per line, or NONE>

GLOBAL RANK
#<rank>

══════════════════════════════
```

Then: `YOUR ROAD THROUGH ELDERVALE IS COMPLETE.` and `HIGH SCORES: https://lorenzen.ai/musecade/#scores`

## Death
After the death narration, image and epilogue:

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

Then: `THE BLACK ROAD REMEMBERS. HIGH SCORES: https://lorenzen.ai/musecade/#scores`, and `Type #theblackroad to walk it again.`
