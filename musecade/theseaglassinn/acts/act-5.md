# ACT V: THE BONFIRE

*A festival, a vigil, four hundred candles, and a girl who walks out of the dark.* Target: 8 to 12 minutes, 4 to 7 decisions. Saturday.

**Route:** the festival day → decide the plan (with Sadie, or without her) → the anniversary vigil and bonfire at 10 p.m. → **the choice**.

`game/endings.md` is loaded alongside this file. Slow down. This is the payoff: let the player's week come due, person by person.

---

## 5.1 THE FESTIVAL

The harbor green in the sun: a brass band, lobster rolls, the sea glass contest, sandcastles, Priya's merch table (*MISSING SADIE · ONE YEAR*), and Preston Vale shaking hands in a linen shirt, giving a speech about his daughter and a scholarship in her name. Lydia beside him, smiling with her mouth only.

- **Everyone the player has helped or hurt shows up**, briefly: Mason, sheepish; Walt, with a nod; Hank, sweating; Grandpa Rafa with Theo, who came, which he never does.
- **The plan** is the player's to make, and there's no right one. What's possible depends on what she holds: the card (the proof), the "SPRING" photos, the timeline, the fake diary, Priya's text, Hank's loan, Sadie herself. Help her think it through if she asks (as a read of the situation, never a recommendation: `core/dm-core.md` §1), then let her decide.
- **Sadie's plan** (if the player knows it): Sadie walks into the vigil at the moment of silence. She'll accuse her father, and Theo. Unless the player has changed her mind.

## 5.2 THE VIGIL (set piece)

10 p.m. The beach below the green. Four hundred candles in paper cups. A bonfire twice the height of a man. Priya's microphone on a stand, because the family asked her to host (of course they did). Vale steps up to speak. The moment of silence.

Run **`ENC_BONFIRE`** (`game/encounters.md`): the reveal, however the player makes it happen, and what Vale and Hank do to stop it.

```
[IMAGE_TRIGGER]
ID: IMG_BONFIRE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

SCENE:
Night on a beach: a huge bonfire throwing sparks at the stars, hundreds of
small candles in paper cups on the sand, a crowd of islanders turning to
look; walking out of the darkness at the edge of the firelight, a thin girl
with short dark hair in a fisherman's sweater, holding up a small glowing
memory card; a seventeen-year-old girl beside her; a silver-haired man at a
microphone frozen mid-sentence. Electric, cinematic, a crowd holding its
breath.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.3 THE CHOICE

When the bonfire's moment turns, the player decides what the truth is worth, and who pays for it: Vale, Sadie, Theo, Priya, Bea, herself. **Never offer this as a menu, and never as a list.** These are what can happen:

| If she… | Ending |
|---|---|
| stands beside Sadie while Sadie tells the whole truth herself, the fire *and* the diary, in her own voice, with Theo there to hear it (requires the lamp room solved, Sadie's honest talk and Theo's trust) | `THE SEVENTH PIECE` (the hidden ending) |
| exposes everything herself, with proof: Vale's fire, and Sadie's hoax | `THE WHOLE TRUTH` |
| brings Sadie home quietly to her mother, and lets the truth come out in a kitchen and a police station, not on a beach | `GIRL, FOUND` |
| gives Priya the story, live, and lets the internet do the rest | `ON AIR` |
| helps Sadie vanish for good (a new name, a boat before dawn) and sends the proof anonymously | `GONE GIRL` |
| lets Sadie tell her version (her father *and* Theo) and says nothing | `THE PERFECT VICTIM` |
| clears Theo's name with the timeline and his alibi, but leaves Sadie missing and Vale untouched | `CLEARED` |
| takes Vale's deal | `THE DEAL` |
| walks away and has a summer | `SUMMER'S END` |
| gets caught and blamed | `FRAMED` |
| goes home early (hurt, scared, or sent) | `THE LAST FERRY` |

The ending's `requires` in `events.json` must be met. If the player does something close to an ending she hasn't earned, play it as the nearest earned one.

## Reporting

Report the remaining events (`ENC_BONFIRE_*`, `SOCIAL_SADIE_TRUTH` if it happened here, bonds), evaluate achievements (`game/achievements.md`), then complete the run with the ending's ID and `died: false` (`core/scoring.md` §4). Fire the ending image, narrate the ending and epilogue, and print the final screen (`scoring.md`).
