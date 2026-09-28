# ACT V: THE GLASS BRIDGE

*Dawn, the convoy hour, and the choice.* Target: 8 to 12 minutes, 4 to 8 decisions.

**Route:** reach the bridge in the convoy hour → the confrontation → **the choice**.

`game/endings.md` is loaded alongside this file. Slow down here. The player has spent an hour getting to this bridge.

---

## 5.1 THE CONVOY HOUR

Dawn on day 4. The **Glass Bridge**: three hundred meters of iron and glass over the grey lake, from the Aurel quay to the Concord enclave on Pier Island. A Directorate-and-Aurel checkpoint stands at the city end, and the Concord gate at the island end. For **one hour** the summit's diplomatic convoys (the ambassador's black cars) cross without being searched. Pedestrians cross through the covered **gallery** that runs alongside the roadway, with papers checked at both ends.

**How the player means to cross** is whatever they've built: NIGHTINGALE and Katya hidden in the ambassador's car (Tomas's keys and manifest, Morrow's or Nand's help), walking the gallery on Ilse's papers, a boat under the bridge (Anya's quay knowledge), or something entirely their own.

```
[IMAGE_TRIGGER]
ID: IMG_BRIDGE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dawn over a grey lake: a long covered bridge of iron and glass running to
an island of towers, black diplomatic cars queued at a striped checkpoint,
soldiers and men in overcoats, the first pale sunlight turning the glass
gold. The player at the city end with whoever is with them (NIGHTINGALE in
a headscarf, others as present). Far along the bridge, a lone figure waiting
mid-span.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_BRIDGE
PAIRED WITH: IMG_BRIDGE
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the sun clears the hills and light runs gold down the bridge's glass
panels one by one; convoy exhaust curls; the lone figure mid-span turns.
CAMERA: slow push along the bridge.
[/VIDEO_TRIGGER]
```

## 5.2 THE CONFRONTATION

Who is on the bridge depends on everything before. Combine these, and run it as **`ENC_BRIDGE`** (`game/encounters.md`), with a three-approach lettered menu at the turning point.

- **Ashby is at the Concord end.** If he's free, he's there as station chief to "receive the defector". He has two men, and orders that NIGHTINGALE be shot "resisting" once she's through the gate, with the film on her. He smiles at the player like a proud teacher.
- **Kell is at the city end**, if Voss died in the Glasshouse or never dealt: a sniper in the tollhouse tower and men at the checkpoint. If Ilse sold the real plan, Kell knows the gate and the car.
- **Voss stands mid-span**, the lone figure, if his parley was honored: hands in his coat, sunlight on his glasses. He'll keep his word exactly as bargained, and not one inch further.
- **A betrayal comes due:** an unturned Tomas steps forward with an arrest warrant, "for your own good"; a low-trust Anya's deal hands the player's car to Kell; or Ilse's papers carry a flaw she put there on purpose.
- **Katya.** If she isn't there, Lena stops halfway. *"I can't."*

Report `ENC_BRIDGE_SURVIVED` if the player lives through it, plus `ENC_BRIDGE_CLEVER` for an ingenious resolution: Voss exposing Ashby at the gate, the canary's false plan sending Kell's men to the wrong end, Margot's photographer waiting on the island, the ambassador's car used as a shield, or a confession tape played to the Concord gate officer.

## 5.3 THE CHOICE

When the confrontation turns, the player decides. **Never offer this as a menu, and never as a list.** These are what can happen:

| If the player… | Ending |
|---|---|
| gets NIGHTINGALE across **and** puts Ashby's guilt in front of the Concord (the film plus the ribbon, a confession, Voss's word at the gate, or the canary result with Tomas as witness) | `GLASS AND DAYLIGHT` |
| gets NIGHTINGALE across, but Ashby walks, whether for lack of proof or because the player chose to keep the secret | `THE QUIET PROMOTION` |
| accepts Ashby's offer, and crosses as his partner | `TWO FLAGS` |
| takes Ashby's place with Voss, or hands Ashby to Voss and becomes the Directorate's new man inside | `CARDINAL` |
| leaves both flags behind, and takes a boat with Anya (and Lena and Katya, if they choose) to a third country | `THE THIRD COUNTRY` |
| lets Margot break the whole story at dawn | `FRONT PAGE` |
| hands NIGHTINGALE to Voss or Kell to save someone or something | `THE GARDENER'S TRADE` |
| steps into the line of fire, or stays behind on the bridge, so that Lena crosses | `THE BRIDGE AT DAWN` |
| is taken by either side | `A QUIET ROOM` |
| walks away from all of it, alone | `NOBODY` |
| dies | `A STAR WITHOUT A NAME` |

## The Empty Bridge

If the player isn't at the bridge by the end of the convoy hour (a missed dawn, capture, a wrong turn):

- NIGHTINGALE crosses without them, if Anya or Ilse is true and she has papers. Otherwise Kell takes her back.
- `GLASS AND DAYLIGHT` and `THE BRIDGE AT DAWN` are no longer possible. The rest of the mole plot still resolves: `FRONT PAGE`, `TWO FLAGS`, `CARDINAL`, `THE GARDENER'S TRADE`, `THE THIRD COUNTRY`, `A QUIET ROOM` and `NOBODY` remain.

## Reporting

Report `ENC_BRIDGE_*`, `RESCUE_KATYA` (if not yet), `ALLY_*` events that resolved here, and companion survival. Evaluate achievements (`game/achievements.md`), then complete the run with the ending's ID (`core/scoring.md` §4). Fire the ending image, narrate the ending and epilogue (`game/endings.md`), and print the game-over or death screen (`scoring.md`).
