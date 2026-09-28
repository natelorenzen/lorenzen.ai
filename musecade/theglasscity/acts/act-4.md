# ACT IV: THE MOLE

*One long night. The mentor, the enemy spymaster, the daughter, and every loyalty coming due.* Target: 12 to 16 minutes, 8 to 12 decisions. Covers night 3, from dusk to the hour before dawn.

Before each scene, check state: which allies are recruited, and their trust and secrets; what the player can **prove** (the film, the ribbon, the canary result, Daniel's file); heat; whether Katya is known; and whether Margot is in play.

---

## 4.1 ACROSS THE CHIEF'S DESK

Ashby can be found at his flat on Ember Row, at the station after the gala, or on the gala's terrace with a glass of something he isn't drinking. He isn't hiding. He's waiting.

- He is warm, tired and very honest, once it's clear the player knows. *"Daniel was nineteen. They told me it was a car. I read the real file two years later. I didn't do it for money."*
- **His offer:** *"Come in with me. Two flags. You'd be the best they ever had. Or walk onto that bridge tomorrow and watch what happens to the girl."* (He knows about Katya, if the Directorate does.)
- A real confrontation, where the player presses him with evidence, his son, or the offer turned around, is `SOCIAL_ASHBY_CONFRONT`. If the player records it (the Analyst's camera, a hidden tape recorder from Ilse, Tomas listening at the door), a **confession** becomes the strongest evidence in the game.
- He won't be arrested quietly by a burned officer. He makes a call if the player leaves him free. If they restrain him, the station will notice by dawn.
- Accepting his offer leads toward `TWO FLAGS`, or `CARDINAL` if the player means to replace him (`acts/act-5.md`).

## 4.2 THE GARDENER'S GLASSHOUSE

Midnight. The **Botanical Glasshouse** on the hill: a Victorian palace of iron and glass, steamy and green, orchids and palms, rain loud on the panes. **Colonel Radek Voss** waits by the fern pool: sixties, cardigan under his coat, pruning shears in hand. He tends the Directorate residence's plants himself. That's where "the Gardener" comes from.

- He's courteous, dry and weary. He wants NIGHTINGALE back, his asset protected, and no scandal.
- **His secret** (`DISCOVER_VOSS_GARDEN`): he's done. His sister has an orchard in the south, and a neutral bank holds his exit. The tells: an orchard catalog in his coat, a train ticket dated next week (GHOST SEES), the way he talks about *after* (DIPLOMAT SEES). An Analyst's Board can connect *the neutral bank in the frame's records* to *a Directorate colonel with a private account*.
- **The parley** (`SOCIAL_VOSS_PARLEY`): leverage on his exit gets real terms. Offer him a clean exit, and he'll give up Ashby (*"Ashby was always a man who needed to be forgiven. I'm tired of forgiving him."*), let NIGHTINGALE and Katya cross, release **Pavel** for Ilse, or let Anya go. He will trade some of these, not all. Make the player choose.
- Offered NIGHTINGALE, he accepts, and that's `THE GARDENER'S TRADE`.

**The ambush** (set piece `ENC_GLASSHOUSE`, `game/encounters.md`). Mid-parley, **Major Dragan Kell**, Voss's hardline deputy, springs it. He's been told that Voss is going soft, and Ashby is the one who told him. Kell has four men. He wants the courier alive and the Colonel quietly dead.

```
[IMAGE_TRIGGER]
ID: IMG_GLASSHOUSE
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Midnight inside a vast Victorian iron-and-glass hothouse, palms and giant
ferns, steam drifting, rain on the panes above. An older man in a coat
with pruning shears ducks behind a fern pool; armed men in dark coats
advance between the palms with flashlights; the player crouched among the
plants with any present allies. A pane shattering, glass falling like rain.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Whether Voss survives the Glasshouse matters. A living Voss who was dealt with honestly keeps his terms at the bridge. A dead Voss means Kell holds the Aurel end of the bridge.

## 4.3 KATYA

If `DISCOVER_KATYA`, NIGHTINGALE won't cross without her daughter. Katya sleeps in the **conservatory dormitory**, under a Directorate "chaperone" who plays cards in the porter's lodge until three.

- It's a quick extraction heist: the music practice rooms, a fire escape, a cello case (it would fit a slight sixteen-year-old, and she'll hate it), or Voss's word, if the parley included her.
- Katya: sixteen, furious, brave, a pianist who insists on bringing her sheet music. Report `RESCUE_KATYA` when she's out and with the player.

## 4.4 THE ALLIES' NIGHT

Each recruited ally has a moment tonight (`characters/companions.md`):

- **Tomas:** if he's turned (`ALLY_TOMAS_TURNED`), he goes back into the station to steal the convoy manifest and the ambassador's car keys. If not, Ashby tells him to bring the player to the bridge's north gate at dawn "for their safety", which is where Kell's men will be.
- **Ilse:** if her secret is known and she's shown care, or Pavel's release was bargained with Voss, she stops selling (`ALLY_ILSE_TRUE`). She feeds Voss a false bridge plan, and she makes the papers for NIGHTINGALE and Katya. Otherwise she sells the real plan, and Kell will know which gate the player means to use.
- **Anya:** she can't go back after tonight, because Voss or Kell knows. She must choose. With trust 2 or more she chooses the player (`ALLY_ANYA_CHOOSES`) and will cross, cover or run with them. With trust of 0 or less, she makes her own deal to survive, which may mean selling where the player will be.

## The hour before dawn

The rain stops. The lake goes pewter. Convoy engines turn over on the summit's last morning. **Record `REACH_BRIDGE`** (it's sent with everything else at the end) and fetch the Act V pack.

---

## Exceptions

- **The player misses the Glasshouse:** Voss sends Kell to find them instead, as a short escalated fight at the kiosk or the bindery (heat 5 rules). Voss's terms are off unless they reach him before dawn.
- **The player kills Ashby:** set `killed_someone`, and raise heat to 5 on both sides. Voss is relieved, and the Office is not. `GLASS AND DAYLIGHT` remains possible only with the film **and** the ribbon, or a confession on tape.
