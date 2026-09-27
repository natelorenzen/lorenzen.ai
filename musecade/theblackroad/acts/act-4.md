# ACT IV: THE DESCENT

*The true purpose of the reliquary becomes clear. Earlier decisions return with consequences.* Target: 12 to 18 minutes, 8 to 12 meaningful decisions.

Night count: arrives at **2, 1 or 0**. Everything in this act happens on the arrival day and the night that follows. The courier must reach the throne (Act V) **before the dawn after the new moon**, which means before the night count would fall below 0. If it would, see *Too Late* at the end of this act.

This is the act where the game remembers. Before writing each scene, check state: companions' trust and secrets, faction standing and awareness, `bram`, `tam`, `killed_someone`, the reliquary's state, and the Litany clues.

---

## 4.1 ORUN

The monastery of the Last Lantern is cut into the cliff above Veyr: galleries, cells, a bell tower, a courtyard hanging over the drop, and a **rope-lift** (a winch and a basket) that once hauled supplies up from the valley. Half of it is ruined. Five monks remain (`npcs.md`):

- **Prior Hesk**: seventies, gaunt, iron-grey, severe, entirely sincere.
- **Sister Amsel**: the healer, brisk and kind. Her infirmary is the only place in the game that fully mends wounds: once, for the courier and each companion, it clears Wounded to Unhurt. The scars remain.
- **Brothers Tove and Idris**: young, frightened, devout.
- **Brother Caddoc**: ancient and blind. He tends the great bell.

**The welcome is wrong.** They kneel. They wash the courier's feet. The bowl on the altar holds exactly **40 gold crowns**, "from the hand that receives it." The guest cell has a **white robe** laid out on the bed. SCHOLAR SEES: it is the *watch-robe* of old Veyr, the garment the dead were burned in. ENVOY SEES: they look at the courier the way people look at someone on the scaffold, with pity and gratitude. WARDEN SEES: none of them turn their back on the courier. WAYFARER SEES: the cell's door bolts from the outside.

**The truth.** Prior Hesk will not lie when asked directly about the ritual, the robe, the payment, or what happens at the throne. He will not volunteer it either, until dusk, when he must. His words, adapted:

> "The Queen has held the deep for three hundred and seventeen years. Her fire is nearly spent. The box holds a coal from her own pyre, kept by this Order for this night. It will light the Crown again. But the Crown needs a bearer, a living one, who takes the Queen's place on the throne and burns as she has burned. The Kindling accepts only the one who carried it here, or the one they freely give it to. The broker was ours. We chose you. It had to be someone who would come of their own will. I will not insult you by saying I'm sorry. I would do it again."

- Report `DISCOVER_RELIQUARY_TRUTH` (if not already learned).
- **Willingness is the law of the fire.** The Kindling dims if taken by force. The Crown kills an unwilling bearer at once, and then the seal fails. Nobody, not Hesk, not Dask, can simply make the courier do this. They can only persuade, bargain or deceive.
- If the box was **opened** earlier, Hesk sees the ember mark and closes his eyes: "Then it's certain. It knows you."
- **Oswin's secret** (`DISCOVER_OSWIN_PURPOSE`), if not already out, comes out here, from him if trust ≥ 0, or from Hesk if not: *Oswin read the broker's ledger and chose the courier's name, "because you had no one who would come looking. I told myself that was a mercy."*

The courier's reaction is theirs. Let them rage, bargain, walk out, ask questions, or accept. The monks will not stop them from leaving, except that it is nearly dusk and the siege is coming.

---

## 4.2 BEFORE THE DARK

An hour of grey light before dusk. The courier can prepare (barricade, lay fire, find the lamp-oil store, ready the bell, scout the undercroft cracks where blue light leaks up, rig the rope-lift) and talk. **Each companion has a moment here.** Play the ones that are present, briefly.

- **Calen:** if his orders are known, he says: "When Dask comes up that road, he'll expect me to hand you over. I haven't decided. That's the truth." If they are not known, he is tense and quiet and checks the road constantly. This is the last chance to earn his loyalty before the siege: honesty, shared danger, Liss. See `companions.md`, *The Choice at Orun*.
- **Wren:** the singing is loud for her here. She is shaking, frost to the collarbone. If her secret is known and the courier keeps her near the box's warmth, gives her emberstone, or burns the frost back with an open Kindling (one flare), she steadies. If her secret is unknown or ignored, she is slipping.
- **Oswin:** if trust ≥ 2 and his secret is out, he asks forgiveness and means it. If the courier talks about refusing, he says quietly, "Then refuse. I'll stand with you. Hesk can damn me." (That sets up `OSWIN_CHOOSES_YOU`.) If trust is low and the courier plans to flee, **Hesk orders Oswin to drug them** with poppy in their tea. Oswin obeys, unless trust ≥ 1. ENVOY SEES his hands shaking as he pours. SCHOLAR SEES the bitterness. A drugged courier wakes in the white robe at the Lantern Door, Wounded by nothing but despair and a headache, and the siege has already happened around them.

---

## 4.3 THE SIEGE OF ORUN

Run `ENC_ORUN` from `game/encounters.md`. Who comes depends on the whole game so far:

**From below: the Hushed.** Always. Pale figures climb out of the undercroft cracks and up the cliff, drawn by the Kindling. With them comes a sound like wind through a thousand throats.
- If Serith was **not** doubted, she leads the **White Choir** with them, singing, torches out, and the Choir tries to reach the box and smother it in snow.
- If Serith **was** doubted, the Choir does not come. Serith may arrive alone later (Act V).
- If the courier **massacred the Choir** in Veyr, twice as many Hushed come, and they come straight for the courier.
- If **Tam** was turned or spared kindly (`tam: turned` or `spared`), he appears among the Hushed-side attackers and opens the side gate for the courier instead, or warns them of where the Hushed will break through. If he was killed, nothing. If he was spared cruelly, he points them at the courier.

**Up the road: the Wardens.** If Dask is aware of the courier (Kestrel's Watch, Warden scouts, Calen's reports, an open Kindling), **Dask arrives with ten Wardens** up the Queen's Road at dusk.
- He wants the Kindling taken to the Crown and the Crown's fire taken *south*. He will fight the Hushed if they threaten the prize.
- If `SOCIAL_DASK_PARLEY` produced a deal or a believed lie, he may hold back, ally, or fall into a trap of the courier's making.
- If Dask is unaware (the Miners' Road with no betrayal), there are no Wardens. The siege is only the Hush.

**A Scholar in the siege** can hold the undercroft stair with ENNAR's ward, sweep the courtyard with NER, or quiet a knot of Hushed with SAEL. It's their best moment to feel how far their magic has come since Greyholt. Strain is the limit, so make them choose.

**The companion turn.** In the middle of the siege, at the worst moment:

- **Calen** (see `companions.md`): if loyal (trust ≥ 1, and his orders are known, or he chose to tell), he steps between Dask and the courier and tears up his orders in front of him. Report `CALEN_STAYS_LOYAL`. Otherwise **he betrays**: he seizes the box (or knocks the courier down) and runs for Dask. He can be stopped in that moment by words about Liss, by force, or by the Kindling itself refusing him (it dims in his hands; he stares at it). Fire `IMG_BETRAYAL`.
- **Wren**: if slipping, the Hush calls her by her mother's voice. She either runs into the undercroft toward the deep, or tries to take the box with her ("She says if I bring the fire, she'll let them all go!"). Fire `IMG_BETRAYAL` if she takes it. If she was kept warm, she hears the call and **refuses it**, and her refusal is the most human thing in the siege. Report `WREN_KEPT_WARM`.

```
[IMAGE_TRIGGER]
ID: IMG_ORUN_SIEGE
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A cliffside monastery at dusk under a moonless sky, its great bell tower
silhouetted, torches and braziers blazing orange. Pale blue-eyed figures
swarm up the cliff and out of glowing blue cracks in the courtyard floor.
[If Wardens present: black-and-white armored soldiers with tower banners
charge up a stair-road below.] [If the Choir is present: white-robed
singers with snuffed torches.] The courier stands at the center, holding
the black iron box against their chest, companions present fighting at
their side. Heroic low angle. Fire against ice.

Do not reveal undiscovered information.
(No throne, no queen, no crown.)

[/IMAGE_TRIGGER]
```

```
[IMAGE_TRIGGER]
ID: IMG_BETRAYAL
TYPE: BETRAYAL
STATUS: REQUIRED if a companion betrays (skip IMG_ORUN_SIEGE's slot only if the budget is at 7)

Generate an image before continuing.
Use current character and world state.

SCENE:
Close, dramatic. Amid the siege's firelight and blue glow, the betraying
companion (exact description from companions.md, with injuries) holds the
black iron box and backs away from the courier, face torn between grief and
resolve. Behind them, their destination: [Dask and his Wardens on the stair]
or [the glowing blue mouth of the undercroft]. The courier, reaching out.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**The Stair Hold.** When the courtyard falls, the siege becomes the Stair Hold: three waves on the undercroft stair (the climbers, the push, the cold), each with a three-approach decision menu. See `ENC_ORUN` in `game/encounters.md`. Every wave must cost or reveal something. This is the Warden's finest hour.

**Outcomes and resolution:** the siege, including the Stair Hold, lasts 4 to 8 decisions and ends when the courier gets down into the undercroft (with or without the box and companions), when they escape by the rope-lift (see below), or when they die. The monks hold the undercroft stair behind them. **Prior Hesk** dies holding it unless someone helps him; Brother Caddoc rings the great bell until the end. Report `ENC_ORUN_SURVIVED` and, for a clever resolution (the bell, the oil store, the rope-lift as a weapon, turning Dask against the Hushed, Tam's gate), `ENC_ORUN_CLEVER`. A courier who slips through the whole siege unseen, a Wayfarer's move, earns `ACH_UNSEEN` (report at game over).

- **If the box is lost** (to Dask, to a fleeing Wren), the courier can pursue: Dask goes *down* toward the throne too, since he needs the Crown, and Wren runs to the deep. The chase continues in Act V. The box is never simply gone. It is going to the same place the courier is.
- **Escaping by the rope-lift** down to Veyr with the box ends the mission: `THE ROAD SOUTH` (the courier walks away) or, if dawn comes, `WHITE SILENCE`.
- **Handing the box to Dask** here: `THE CROWN OF CHAINS`.
- **Handing it to Serith or the Hush**: `THE WHITE CHOIR`.

---

## 4.4 THE LANTERN DOOR

Beneath Orun, the undercroft becomes a rough-cut tunnel and ends at a round bronze door set in the living rock. In an arc above it are **five bronze lanterns**, each cast with a symbol: **a hand holding a star, a circlet, an open eye, a flame, and a lantern.** Beneath, in Veyric: *"SPEAK THE ROAD OF VEYR, AND THE DOOR WILL KNOW YOU AS ITS OWN."*

Run **Puzzle 3: The Litany of Veyr** from `game/puzzles.md`. The lanterns must be lit in historical order: **star, crown, eye, flame, lantern**. The clues are in state (`litany_clues`: milestone, hymn, mural, epitaph, tally). Oswin and Hesk know part of it. A wrong order brings a breath of killing cold from behind the door.

On success, the door rolls aside, and the lanterns' light throws a line of Veyric onto the far wall that only the correct order produces: **"ANNA VAELUN: WHAT WAS TAKEN MAY BE GIVEN BACK."** Anyone who has seen the mural's hinged crown, or Maelis's journal margin, now understands: *the Crown opens, and those are the words.* Record `names_learned: anna vaelun`.

SCHOLAR: the light of the five lanterns seems to pour *into* them. `WORD LEARNED: ANNA VAELUN, "the giving back"`, the greatest of the Words, able to free the Hushed and to be heard by the Hush itself (`game/words.md`).

Bypasses (no `PUZZLE_LITANY_SOLVED`): a Wayfarer finds the **miners' crack** beside the door, a squeeze through old workings that lets out into the Deepworks. It's slow and cold (numbness), and it misses the words. Brute force (a Warden breaking the door's hinge-pin) works with a great deal of time and noise: the Hushed below come to meet them.

---

## 4.5 THE STAIR OF ASH

Below the door, a stair of black glass winds down a shaft so deep that its bottom glows blue. The walls are lined with the **old deep galleries**, and they connect to the miners' workings.

- **The Miners' Tally** is here too, on a gallery wall off the stair, if the courier missed it on the Miners' Road (`DISCOVER_MINERS_TALLY`; see `act-2.md` 2.4C for its text).
- **The Hushed of the Deep** stand in a line down the stair, dozens of them: the missing travelers, pilgrims, Greyholt's people, Choir members. They face downward, waiting. They do not attack unless fire is waved at them or they are struck. As the courier passes, they whisper together, in one voice: *"give it back… give it back…"* (Let the player wonder whether "it" means the box.)
- **Liss.** If Calen is present, he sees her among them: a woman his age, his coloring, frost-white, eyes filmed blue. He says her name and she does not turn. **Saving her** takes warmth pressed to her heart for a long time (emberstone, or one flare of the open Kindling), her name, and something of hers: *the wooden fox*. If it works, the frost cracks off her like eggshell, and she says "Cal?" in a voice like a child's. Report `LISS_SAVED`. She is too weak to go further, and Calen must choose whether to stay with her or go on. If she is saved and Calen is loyal, he goes on: "She'll keep. The world won't."
- **Wren** hears her mother here. If she was kept warm, she holds the courier's hand the whole way down. If she ran earlier, she is here, halfway down the stair, standing among the Hushed and turning pale. She can still be called back (trust ≥ 0, her name, warmth). Otherwise she walks down ahead of them into the light.

The stair ends at an arch of fused black glass, and beyond it is a vast cavern full of fire and ice. **Crossing the arch ends Act IV.** Send the batch with `REACH_THRONE` first. Load `acts/act-5.md` and `game/endings.md`.

---

## Too Late

If the night count would fall below **0** before the courier crosses the arch (because of too much rest, the Blackwater route plus a night in Veyr plus delays, and so on):

- At dawn after the new moon, **the Queen's fire goes out.** In Orun, every flame gutters blue. The bell stops. A great silence rolls up out of the mountain and down over Veyr, and the ash-figures crumble.
- The courier may still descend. Play Act V with the *Too Late* variant (see `act-5.md`). The Hush is already rising, and some endings change.
