# ACT II: THE WILDERNESS

*Routes diverge and companions emerge.* Target: 12 to 18 minutes, 8 to 11 meaningful decisions.

Night count: begins at **3**. Dawn at the waystation lowers it to **2**. The Blackwater route costs one extra night.

At the start of this act, load `characters/npcs.md` and `world/locations.md`. Load `game/puzzles.md` when the courier reaches the waystation (2.2). Load `world/factions.md` when a Warden, Dask, a Choir member or the Listener is first identified.

The land climbs. Rain turns to sleet, then snow. Pines, scree, black water in the gullies. The Black Road comes and goes under the snow like a spine.

---

## 2.1 THE GIRL IN THE TRAP

Midmorning on the road north of Greyholt, in a stand of snow-heavy pines. A sharp cry, then a stream of inventive swearing.

**Wren** is caught by the ankle in an **iron man-trap**, a toothed jaw hidden under the snow beside the road. Blood on the snow. She has a knife out and is trying to lever the jaws apart and failing. She is nineteen, small, wiry, sharp-faced, with a dark braid and shaved sides, wrapped in a stolen man's coat three sizes too big. She hums between curses, constantly, a tune with no end.

- The trap is **Southern military issue**, stamped with the Warden's tower. There are more hidden along both verges. WARDEN SEES this at once: a picket-line technique, "to stop anyone going north who hasn't been through the checkpoint". WAYFARER SEES the other traps under the snow, three more within twenty paces.
- Freeing her: a Wayfarer or Warden can do it cleanly. Anyone else can do it with a lever (staff, sword scabbard, branch) and a decent plan, or clumsily and at a cost (a gashed hand: Wounded).
- If the courier leaves her: she frees herself hours later and never trusts them. She may still turn up at the waystation, limping and hostile.
- Once free, she is wary, then practical. She wants food, and she keeps edging toward the courier. "Why are you so *warm*? You're like standing next to a bread oven." (It's the box.)
- She knows the country: the Split and its waystation, the pass, the Blackwater. If trust reaches +1, or if she is asked directly about "another way" north, she admits her da ran salt through **the old Miners' Road** under the mountain, marked with hooked crescents. "Nobody's used it since the singing started." Report `DISCOVER_LONG_WAY`.
- She will come along for food and warmth (`RECRUIT_WREN`). She limps for a day.
- Her secret (`companions.md`): a patch of frost-white skin over her heart. It spreads. She hears the singing. The courier may notice she never shivers near the box and shakes badly away from it. Report `DISCOVER_WREN_HUSHING` when the courier sees the mark or she confides it.

```
[IMAGE_TRIGGER]
ID: IMG_WREN
TYPE: COMPANION
STATUS: OPTIONAL (fire only if the budget comfortably allows; skip if the courier left her)

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
A snowy pine wood, grey morning light. A wiry young woman with a dark braid
and shaved sides, in an enormous stolen coat, sits in the snow gripping a
knife, her ankle bloodied by a sprung iron trap. She glares up at the viewer
with defiant, wolfish eyes. The courier stands over her, seen from behind.
Pale breath, falling snow, black trunks, one shaft of cold light.

Do not reveal undiscovered information.
(No frost mark on her chest. No Hushed. No soldiers.)

[/IMAGE_TRIGGER]
```

**If Calen was not recruited in Act I,** he catches up here or at the waystation: "I told you. Safer in twos." Offer once more.

---

## 2.2 THE WAYSTATION OF SAINT HOLLIS

The **Split**: the Black Road forks. North, the High Pass climbs into the clouds. East, a track descends toward the Blackwater. Where they part stands the **waystation of Saint Hollis**: a squat stone hostel with a walled yard, a shrine room and an iron bell. The brothers who kept it are gone. The door is marked with a **frost sigil**: a spiral, cut through by a single line. It was drawn with a finger on the wood and has not melted.

The courier arrives at dusk. They cannot reach anywhere else before dark, and the Hushed walk at night.

**Inside:** five strangers and a fire.

- **Aldous Fenn**, a merchant: soft, sweating, rings on his fingers, a heavy locked strongbox he never leaves.
- **Mother Grell**, an old woman, flinty and sharp-tongued, with her granddaughter **Pip**, about eight, who doesn't speak and draws with charcoal on the floorboards.
- **Tam**, a young shepherd: tall, open-faced, helpful, friendly, eager to fetch water and tend the fire.
- **Brother Oswin**, a monk in a patched grey habit with a lantern sigil: round, balding, sixties, cheerful, fond of bad verse, and the first to offer the courier the warm seat. He says he is "on pilgrimage to the shrine." His eyes go to the courier's coat, where the box is, and stay there a moment too long.

**What happened:** last night, a pilgrim named **Jory** vanished from his bed. His blanket was found rimed with frost, the bar was lifted from the door, and the sigil was on it at dawn. The Hushed circle the waystation each night now. Everyone suspects everyone.

**The social puzzle: THE LISTENER.** One of them is a **Listener** of the White Choir, who opens doors for the Hushed and marks the houses they should visit. It is **Tam**. Run it from `game/puzzles.md`, *Puzzle 1*. It carries the clues, the red herrings (Fenn is lying about something else, and Oswin is lying about something else), the midnight deadline, and the consequences of accusing the wrong person.

**Brother Oswin.** Load his full entry from `companions.md`.

- He is here because the Order sent him to meet the courier and guide them to Orun. He will admit that much readily if asked why a "pilgrim" is waiting at a shrine with no brothers. ("Very well. I was sent to walk you home. Orun is my home. You're expected.")
- He will not yet say *why* the courier is expected. That is his secret (`DISCOVER_OSWIN_PURPOSE`), and it comes out later (Act IV, or earlier under great trust or pressure).
- He can translate the Weeping Milestone from a rubbing or a good description (`DISCOVER_MILESTONE_VERSE`).
- He knows the waystation hymn, painted on the shrine wall: *"We keep the watch the Queen began; / we tend the flame she burned for."* It is a Litany clue: **the flame comes before the lantern, and the lantern is last.** Record `litany_clues: hymn`.
- SCHOLAR: the hymn's first line is painted beneath in Veyric, *"ennar maelis…"*. Hearing Oswin sing it (or reading it with care), the Scholar feels *ennar*, "keep", settle into them. `WORD LEARNED: ENNAR, "keep"`. (`maelis` is there too, but the Scholar doesn't yet know what it truly names; that comes in the crypt.)
- Recruit: `RECRUIT_OSWIN`. He simply comes. He was always going to.

**Aldous Fenn** is a smuggler of **emberstone** (see `npcs.md`), red crystals prised from Veyr's ruins that burn hot for hours when struck. They are illegal in the South and precious in winter. He came *down* from Veyr by the Miners' Road. Pressure, a fair trade, or discretion about his cargo (`SOCIAL_FENN_BARGAIN`) gets two emberstones, directions to the Miners' Road (`DISCOVER_LONG_WAY`), or both.

**The shrine room** has a painted wall map of the old "Saints' Roads". SCHOLAR SEES a faded line labelled in Veyric *Salt Way*, running *under* the mountain from a ravine northeast of the Split to beneath Veyr itself. That is the Miners' Road (`DISCOVER_LONG_WAY`). WAYFARER SEES a hooked crescent scratched into the yard wall's northeast corner.

**Night.** At dawn the Hushed withdraw, and the night count drops to **2**.

---

## 2.3 THE THREE ROADS

In the morning the courier chooses. Wren, Oswin and Calen all have opinions, and they disagree:

- Calen favors **the Pass** ("It's the road. Roads are for going places.") and is oddly insistent. His orders say to bring the courier through Kestrel's Watch.
- Oswin favors **the Pass**, gently: it's the pilgrim road.
- Wren favors **the Miners' Road** if she has admitted it exists, and otherwise **the Blackwater** ("Soldiers on the pass. You saw their traps.").

| Route | Time | Main danger | Arrives |
|---|---|---|---|
| **The High Pass** | 1 day | Kestrel's Watch (Dask's checkpoint), then the Sorrow Bridge | Veyr's south gate, the Ash Gate, at dusk |
| **The Blackwater** | 2 days (+1 night) | The Drowned Bell, the ferry, Warden scouts | Veyr's lakeside wall at the second dusk |
| **The Miners' Road** (hidden) | 1 day, underground | Flood, collapse, cold, the old dead | Under Veyr, in the Deepworks; skips the Ash Gate |

---

## 2.4A THE HIGH PASS

### Kestrel's Watch

A squat Veyr fort straddling the pass, re-roofed in fresh timber, a Southern banner (a white tower on black) snapping above it. **Twelve Wardens**. A barrier across the road. Everyone going north is stopped.

**Lord-Inquisitor Varo Dask** is here (`npcs.md`). He receives the courier courteously in the fort's hall, with a fire and wine. He knows exactly who they are: he bought a copy of the broker's ledger. He knows what they carry, roughly: "a fire the monks of Orun have been waiting three hundred years to spend."

- **His offer:** 500 gold crowns and safe conduct south for the box. Now. No questions.
- **What he doesn't do:** take it by force. He believes, correctly, that the Kindling dims when taken from its bearer against their will, and he needs it bright. He intends to let the courier carry it to Orun and take it there, along with the Crown's fire. He won't say that unless outplayed.
- If Calen is present, Dask and Calen do not acknowledge each other. ENVOY SEES they know each other well. WARDEN SEES Calen standing at attention without meaning to.
- **Outcomes:**
  - **Sell the box:** set `instructions_broken.surrendered`. If the courier takes the gold and leaves, load `game/endings.md`: `THE CROWN OF CHAINS`. If they try to get it back (theft by night, a forged warrant, a bargain, a fight), keep playing. Dask sets out for Orun with the box the next morning, escorted by six Wardens, and it can be recovered on the road, at Orun, or at the throne. A Kindling given away freely can serve whoever it was given to, so Dask now has a legitimate bearer-candidate.
  - **Refuse:** Dask lets them pass. "Then carry it well. I'll see you at the top." Wardens aware.
  - **Negotiate an advantage** (learn his plan, extract a promise, secure passage without surrender, plant a convincing lie): report `SOCIAL_DASK_PARLEY`. The Envoy's forged Southern seal can create very interesting lies ("I carry it by the Throne's own warrant; you are to escort me.").
  - **Attack him:** twelve Wardens. Desperate. Probably death, or capture, and then the box is taken anyway: `THE CROWN OF CHAINS` with the courier in chains.
  - **Sneak around the fort:** a Wayfarer can find the goat path above it (Risky, in snow). Anyone else is Desperate. Success avoids Dask entirely until Orun.

### The Sorrow Bridge

Beyond the fort, the road reaches **the Gullet**, a chasm three hundred feet deep with a white river roaring at its bottom. Veyr's stone bridge fell in the Burning. What remains is a **rope-and-plank bridge**, eighty paces long, strung beside an old rusted **iron chain** that still spans the gap.

Run `ENC_BRIDGE` from `game/encounters.md`. In short: midway across, the bridge begins to shudder. **The Gullet Crawler**, a pale, eyeless, eight-limbed cliff predator the size of an ox, is climbing the chain and the ropes from below. It hunts by vibration.

- Everyone sees that the bridge hangs from **two thick tarred cables under the planks**. The hand ropes only steady it. The creature climbs by the **iron chain** and the **left cable**.
- If Calen is present, he draws his sword: "We won't both make it across."
- Clever answers include: going still (it hunts by vibration); sending a decoy (a thrown pack, a dropped pack goat) shaking the other end; waiting until it is directly beneath the left cable and cutting it (the bridge lurches sideways, and everyone must be holding on); burning the chain end (it has tar on it); or fighting on the planks (Desperate).

```
[IMAGE_TRIGGER]
ID: IMG_SORROW_BRIDGE
TYPE: ENCOUNTER
STATUS: REQUIRED on the High Pass route

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
A sagging rope-and-plank bridge over a vast black chasm, a white river far
below, snow whipping sideways. On the bridge, the courier and any companions
present, braced. Climbing up from beneath, over a rusted iron chain, a
huge pale eyeless creature with eight long jointed limbs, its body the size
of an ox, its limbs spread across the underside of the bridge. Dramatic low
angle from the chasm looking up. Storm light, a crimson break in the clouds.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Report `ENC_BRIDGE_SURVIVED` and, for a clever resolution, `ENC_BRIDGE_CLEVER`. By dusk the courier comes down out of the pass and sees Veyr (Act III).

---

## 2.4B THE BLACKWATER

The track descends through dead orchards to **the Blackwater**, a long black lake under the mountains, skinned with thin ice at the edges.

**Tobiah Crane**, the ferryman (`npcs.md`): old, half-deaf, polite, immovable. He ferries at dawn only. The courier must spend the night in his hut on the south shore (**the night count drops by 1 extra**). His price is a silver piece, or a true story told well; he accepts either with the same nod. His daughter **Anneke** walked into the lake in the summer. He leaves a lamp in the window for her.

At dawn the ferry, a flat barge on a guide-rope, crosses. Midway it passes over the drowned village of **Lowmere**, flooded when Veyr's dam broke in the Burning. Its **bell tower** still stands out of the water. The bell rang by itself last night.

Run `ENC_DROWNED` from `game/encounters.md`. In short: the barge snags on the tower. Pale hands rise from the black water. **The Drowned** are Hushed who walked into the lake and did not die. They grip the gunwales, and the barge begins to tip.

- Crane will not fight. He weeps and looks for Anneke's face.
- Clever answers include: ringing the drowned bell (a climb up the tower; noise drives them off); fire (emberstones, lamp oil on the water); cutting the guide-rope and poling free; lightening the barge; or, if Anneke is recognized, speaking to her.

```
[IMAGE_TRIGGER]
ID: IMG_DROWNED_BELL
TYPE: ENCOUNTER
STATUS: REQUIRED on the Blackwater route

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
Dawn mist on a black mountain lake. A drowned stone bell tower rises from
the water, its bronze bell green with age. A flat ferry barge snagged against
it, tilting. Dozens of pale hands with blue-glowing fingertips grip the
barge's edges from beneath the water. The courier and any present companions
stand braced on the tilting deck, an old ferryman in a wide hat clutching his
pole. Snow-capped peaks, one crimson line of sunrise.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**The far shore:** two **Warden scouts** watch the landing from a ruined boathouse. They can be avoided, bluffed, bribed or fought. If they see the courier, Dask learns the route (Wardens aware). Report `ENC_DROWNED_SURVIVED` and, if earned, `ENC_DROWNED_CLEVER`. By the second dusk the courier reaches Veyr's lakeside wall (Act III). **The night count is one lower than on the other routes.**

---

## 2.4C THE MINERS' ROAD (hidden)

Available only once `DISCOVER_LONG_WAY` is reported. The hooked crescents lead up a ravine northeast of the Split to a timber-framed adit half-hidden by a frozen waterfall.

Inside: a cart tunnel sloping down, rails still in place. Then the **Weeping Stair**, a thousand steps cut into a natural shaft, slick with meltwater, down through galleries of black rock veined with red **emberstone** (loose chunks can be collected). The cold deepens as the stair descends. There is a faint sound at the edge of hearing, like distant choral singing, which stops when anyone listens for it.

Obstacles (resolve 2 or 3; keep the pace up):

- **The flooded gallery:** fifty paces of freezing black water, chest-deep. Wading means numbness (a wound if prolonged). Clever: an old ore-cart as a raft, or a high ledge a Wayfarer spots.
- **The collapse:** a section of tunnel has come down. There is a crawlway through the rubble, tight and unstable (Risky), or a side gallery that loops round past the **frozen miners**.
- **The frozen miners:** a gallery of twenty Veyr miners, three centuries dead, standing mid-stride in a skin of blue ice, faces turned toward the deep. They are harmless unless touched. A touched one *turns its head*, and nothing more. It is the most frightening moment on the route, so play it for dread.

**The Miners' Tally.** In the deepest gallery, before the tunnel climbs toward Veyr, a wall is cut with shift-tallies. Beneath them, a carved account and a pictograph: **miners carrying a blue star up a stair; above them, a forge and a crown; and in the rock beneath them, a great closed eye beginning to open.**

- SCHOLAR SEES (or Oswin translates): *"In the first year of the King, we cut the blue heart from the ice-cave at the bottom of the world. It sang to us. Master Veyr took it up to the forge. Since then the deep is cold, and the men dream of silence. We have stopped singing at work. We cannot hear ourselves."*
- Report `DISCOVER_MINERS_TALLY` (for anyone who understands it). Record `litany_clues: tally` (the theft comes first, and the waking comes after the crown).
- SCHOLAR: if THARRU was missed at the milestone, it is here: the miners "carried the heart up". `WORD LEARNED: THARRU, "carry"`.

```
[IMAGE_TRIGGER]
ID: IMG_MINERS_ROAD
TYPE: DISCOVERY
STATUS: REQUIRED on the Miners' Road route

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
A vast underground gallery of black rock veined with glowing red crystal.
Twenty ancient miners in rotted leather stand frozen mid-stride inside
translucent blue ice, pickaxes on their shoulders, all facing deeper into
the dark. The courier and present companions pass between them holding a
single warm light. Cold blue glow from below, warm orange from the lamp,
breath steaming. Enormous scale.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

The tunnel climbs and ends in **the Deepworks**, the old foundry-caverns directly beneath Veyr. A stair leads up into the city (Act III, *via the Deepworks*). Report `ACH_THE_LONG_WAY` at game over (see `achievements.md`), since the courier has now traveled it. This route avoids Kestrel's Watch, and Dask does not learn where the courier went (Wardens unaware until Orun, unless Calen reports).

---

## 2.5 THE CLIMB (every route)

Before the courier sights Veyr, run **`ENC_AMBUSH`** (`game/encounters.md`), the Act II set-piece battle, at the route's last stretch: the Pass switchbacks, the Blackwater cliff path, or the Miners' Road's last gallery. It uses a three-approach decision menu. It should cost or reveal: a wound, lost gear, a night, and the Hushed Warden's badge and orders (the Hush is taking Dask's men).

---

## Act II transitions and exceptions

- **Sighting Veyr ends Act II**, after the Climb. Send the Act II batch in the order things happened, which puts `REACH_VEYR` last. Load Act III.
- **Turning back:** `THE ROAD SOUTH`.
- **Giving the box to Serith, a Listener or the Choir:** `THE WHITE CHOIR` (see `endings.md`).
- **Selling it to Dask:** `THE CROWN OF CHAINS`.
- **Calen's orders** are discoverable here: a night search of his pack at the waystation, or a question he can't dodge at Kestrel's Watch (`DISCOVER_CALEN_ORDERS`).
- **Resting an extra night anywhere** costs a night. The Hushed come every night, and Dask gains ground.
