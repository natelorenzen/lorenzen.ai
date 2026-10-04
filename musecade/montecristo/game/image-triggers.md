# THE COUNT OF MONTE CRISTO: Images

Follow `core/image-style.md` for the look (1991 arcade pixel art), the prompt template, the budget (5 to 8 per run, one reserved for the ending, none in the cold open), continuity and motion clips. Stage it like a grand adventure-game cutscene: big skies over the sea, stone and candlelight in prison, gold and crimson in Paris. Never imitate any film or illustrated edition of the novel.

**PALETTE** (use this as the template's PALETTE line): *Mediterranean revenge in pixels: deep sea blue and storm black, Marseille ochre and white stone, prison grey and tallow-candle yellow, treasure gold and jewel red and emerald, Paris ballroom crimson and black, moonlight silver.*

**Continuity:** Edmond's look changes by act and must match it: in Act I a young sailor in a blue jacket, clean-shaven; in Act II gaunt, long-haired and bearded in rags; from Act III, the Count: pale, black-haired, elegant, in black, with whatever `look` detail the player gave at creation (it never changes, and Mercédès recognizes it). The Abbé Busoni in a priest's soutane; Sinbad in a weathered sea coat. Faria: old, white-bearded, a ragged soutane. Haydée in Greek embroidered silk; Jacopo in a red cap; Bertuccio in a steward's black coat. Mercédès: black hair, at nineteen and at forty-two, always steady. No gore; no depiction of suicide; no child ever in danger in an image.

## Trigger catalog

| ID | Where | Status |
|---|---|---|
| `IMG_FARIA` | Act II, 2.4 | REQUIRED |
| `IMG_THE_SACK` | Act II, 2.6 | REQUIRED |
| `IMG_TREASURE` | Act III, 3.1 | REQUIRED |
| `IMG_CATACOMBS` | Act III, 3.5 | OPTIONAL |
| `IMG_AUTEUIL` | Act IV, 4.3 | REQUIRED |
| `IMG_DUEL` | Act V, 5.4 | REQUIRED |
| `IMG_ENDING_*` | `game/endings.md` | REQUIRED |
| `IMG_DEATH` | `game/endings.md`, THE CEMETERY OF THE CHÂTEAU D'IF | REQUIRED on that ending |

A typical run: FARIA → SACK → TREASURE → AUTEUIL → DUEL → ENDING = 6, plus the catacombs if the budget allows, for 7.

## Clip catalog

| ID | Paired with | Priority |
|---|---|---|
| `VID_SACK` | `IMG_THE_SACK` | High: the most famous escape in literature |
| `VID_ENDING` | the ending's image | Reserved: always, if clips are possible |
