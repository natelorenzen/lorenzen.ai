# THE BLACK ROAD: Game Over

Complete the run as `core/scoring.md` §4 and §5 describe (`"game":"theblackroad"`; `died` is true only if the courier is dead), and use the server's values exactly. Then print the right screen below.

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
