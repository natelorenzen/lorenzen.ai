# THE BLACK ROAD · PACK-2 · BUILD 1.5-57e386c

Bundle for: Act II begins (`REACH_WILDERNESS`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

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
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

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

Run `ENC_BRIDGE` from `game/encounters-2.md`. In short: midway across, the bridge begins to shudder. **The Gullet Crawler**, a pale, eyeless, eight-limbed cliff predator the size of an ox, is climbing the chain and the ropes from below. It hunts by vibration.

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
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

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

Run `ENC_DROWNED` from `game/encounters-2.md`. In short: the barge snags on the tower. Pale hands rise from the black water. **The Drowned** are Hushed who walked into the lake and did not die. They grip the gunwales, and the barge begins to tip.

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
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

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
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

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

Before the courier sights Veyr, run **`ENC_AMBUSH`** (`game/encounters-2.md`), the Act II set-piece battle, at the route's last stretch: the Pass switchbacks, the Blackwater cliff path, or the Miners' Road's last gallery. It uses a three-approach decision menu. It should cost or reveal: a wound, lost gear, a night, and the Hushed Warden's badge and orders (the Hush is taking Dask's men).

---

## Act II transitions and exceptions

- **Sighting Veyr ends Act II**, after the Climb. Record `REACH_VEYR` and fetch the Act III pack.
- **Turning back:** `THE ROAD SOUTH`.
- **Giving the box to Serith, a Listener or the Choir:** `THE WHITE CHOIR` (see `endings.md`).
- **Selling it to Dask:** `THE CROWN OF CHAINS`.
- **Calen's orders** are discoverable here: a night search of his pack at the waystation, or a question he can't dodge at Kestrel's Watch (`DISCOVER_CALEN_ORDERS`).
- **Resting an extra night anywhere** costs a night. The Hushed come every night, and Dask gains ground.

===== FILE: characters/companions-2.md =====

# THE BLACK ROAD: Companions met in Act II (general companion rules are in `characters/companions.md`)

## WREN

**Visual:** nineteen, small and wiry, sharp-faced and pale-freckled, dark hair in a single long braid with the sides shaved, quick grey eyes. An enormous stolen man's coat of brown wool with the sleeves rolled five times, a belt of mismatched knives, a sling. Limps on the right ankle after the trap (Act II), for a day. After her secret is known: a patch of frost-white skin, feathered like rime, spreading from over her heart toward her collarbone and throat.

**Personality:** sardonic, quick, superstitious, fiercely practical, funny, rude, frightened underneath. Hums constantly, a tune with no end, because silence scares her. Steals small things, then gives them back if she likes you.

**History:** grew up in **Hollin's Ford**, a salt village by the Split. A month ago the whole village walked out into the snow in one night. Wren survived because she was hiding in the well, *and she heard the singing, and her mother's voice in it, calling her name.* She has been living by scavenging ever since.

**Motivation:** survive the winter. Secretly: *find her mother,* whom she believes is in the song.

**Secret: she is being Hushed.** She was touched that night and it did not take all at once. The frost over her heart spreads. She hears the singing in every silence. The box's warmth keeps it back, which is why she edges toward the courier. Report `DISCOVER_WREN_HUSHING` when the courier sees the mark or she confides it (trust ≥ 2, or after her sleepwalking in Veyr).
- Track `hushing` from 0 to 3. It starts at 1. It rises by 1 each night she spends away from warmth (the box, an emberstone, a fire kept near her), and in Veyr regardless. At 3 she walks into the Hush (status `hushed`).
- It falls by 1 per night kept warm, and to 0 permanently if an **open Kindling** burns the frost out (one flare; she screams, and then she laughs), or if the Long Quiet is achieved.

**Capability:** knows the country and **the Miners' Road**. Tracks, sets snares, climbs like a cat, throws knives. **The Hushed ignore her** (they think she's one of them), so she can walk through them, scout, carry things past them, or carry the Stillheart to the Cradle.

**Fear:** silence. She will talk nonstop in the frost line and inside the Hush's presence, and she fails to hum only when she's truly terrified.

**Opinion of the reliquary:** "It's warm. That's all I care about. Can I hold it? I'll give it back." (She will.)

**Relationship beats:**
- The trap: freed kindly, trust +1. Freed with contempt, 0. Left, -3.
- Sharing food, warmth, the box's heat: +1 (once).
- Her secret: responding with care, trust +1. With fear or disgust, -2.
- Honesty about the Hushed: she wants to know what they are.

**The call (Act IV):** at the siege, the Hush calls her with her mother's voice.
- **Kept warm** (secret known, and `hushing` ≤ 1 at Orun, or cured): she refuses the song. Report `WREN_KEPT_WARM`.
- **Otherwise:** she runs into the deep, or tries to take the box to the Hush ("She says if I bring the fire, she'll let them all go!"). Fire `IMG_BETRAYAL` if she takes the box. She can be called back on the Stair of Ash or the ice stair (trust ≥ 0, her name, warmth, and the truth: *"That isn't your mother. It's what's left of her."*).

**Possible sacrifice:** the Borrowed Fire (if Hushing and not cured: "I'm half cold already. Let me be warm forever."), or carrying the Stillheart to the Cradle in the Long Quiet (the Hushed part for her). In the Cradle she may choose to stay with the sleeping faces, having found her mother's. Let it be her choice.

**Possible death:** the Hush takes her fully (`hushed` counts as not surviving), the siege, the throne.

---

## BROTHER OSWIN TARR

**Visual:** sixty-odd, round, balding, ruddy-cheeked, white stubble, small round spectacles repaired with wire. A patched grey habit with a lantern sigil embroidered at the breast, a heavy shuttered lantern on a pole, a satchel of herbs and bandages, walking boots too good for a monk.

**Personality:** cheerful, garrulous, kind, guilty. Loves riddles, puns and truly awful verse ("O Road of black, O Road of ice, / O Road that isn't very nice"). Brave in small ways and cowardly in big ones, and knows it. Calls everyone "friend".

**History:** a monk of the Last Lantern at Orun for forty years. He failed his own novice trial, a night alone in the undercroft beside the cracks, by running. He has been the Order's messenger, bookkeeper and cook ever since.

**Motivation:** to see the seal renewed and the world kept safe, and to be forgiven for how.

**Secret:** **he chose the courier.** The Order paid the broker, and Oswin read the broker's ledger of available couriers and picked a name, *"because you had no one who would come looking. I told myself that was a mercy."* He knows the courier is meant to burn. Report `DISCOVER_OSWIN_PURPOSE` when this comes out (Envoy pressure in Act II or III, trust ≥ 2 confession, or at Orun from him or Hesk).

**Capability:** field care (once per act, he can bring anyone back from Grievous to Wounded, but cannot make them whole; see `rules.md` §5), Old Veyric (he translates the milestone, the mural, the tally and the journal), the Order's hymns and history (Litany clues: he knows *"the lantern is last, and the flame before it,"* not the full order), the layout of Orun and the undercroft, and the ward-lantern: his lantern's light makes Hushed hesitate for a breath.

**Fear:** the dark below Orun. He shakes on the Stair of Ash.

**Opinion of the reliquary:** reverent. "It's a candle for the world, friend. Carry it gently." He will not touch it without permission.

**Relationship beats:**
- The waystation: if the courier catches his evasions without humiliating him, trust +1.
- If the courier learns his secret and does not cast him out: +2, and he weeps.
- If they learn it and cast him out: he follows at a distance anyway, and reappears at Orun with the monks.

**Orun (Act IV):**
- **OSWIN_CHOOSES_YOU:** if trust ≥ 2 and his secret is known, he stands with the courier against Hesk's will, whatever the courier decides: refusing, fleeing, the Long Quiet, anything. Report `OSWIN_CHOOSES_YOU`.
- **The poppy tea:** if trust ≤ 0 and the courier plans to flee, Hesk orders him to drug them and he obeys (see 4.2). If trust ≥ 1, he refuses Hesk and warns the courier.

**Possible sacrifice:** the Borrowed Fire: "It should have been one of us from the start. It should have been me." Only if trust ≥ 1 and his secret is known.

**Possible death:** the siege, holding the undercroft stair beside Hesk; the Stair of Ash.

===== FILE: characters/npcs.md =====

# THE BLACK ROAD: Non-Player Characters

Every NPC wants something. Play them as people who value their own lives.

---

## Hedda Ruel: innkeeper of the Last Lamp (Greyholt, Act I)

- **Looks:** fifties, broad, red-knuckled, grey braid tied with red thread (the braid at the Weeping Milestone was hers), apron over good wool.
- **Wants:** her husband Bram back. Failing that, for him not to suffer.
- **Hides:** Bram, Hushed, chained in her cellar (see `acts/act-1.md` 1.3).
- **Voice:** brisk, blunt, northern. "Eat. You look like a ghost's cast-off."
- **If attacked:** fights with the woodsman's axe, then runs to the chapel.
- **Knows:** soldiers passed four days ago; the man in grey paid in Southern silver; Wren is stealing from empty houses; the waystation is a day north.

## Bram Ruel (Greyholt, Act I)

- Big, gentle, Hushed for fourteen days. Silent and cold, turning toward warmth. His fate (`bram`) echoes in Act V.

---

## The waystation (Act II)

### Tam Ashby: "the young shepherd" (the Listener)

- **Looks:** tall, twenties, open-faced, fair hair, a shepherd's crook, a sheepskin jerkin.
- **Truth:** a **Listener** of the White Choir. He lost his whole family to a winter fever two years ago and found peace in the Choir's song. He believes he is helping people. He draws the Choir's frost sigil on doors so the Hush knows where the warm ones are. He opened the door for Jory last night. He'll do it again at midnight.
- **Tells:** see `game/puzzles.md`, Puzzle 1.
- **Exposed:** calm, sad, unrepentant at first: "You'll thank me, at the end. There's no pain in it." He names **Serith** and says the Choir wants the box put out.
- **Turnable** (`SOCIAL_TAM_TURNED`): by genuine argument (the Hush takes memory: "What were your sisters' names, Tam?" He hesitates a long time before he remembers), by kindness when he expected violence, or by Pip. Turned, he leaves at dawn for Orun, where he appears during the siege (4.3) to open the side gate.
- **Fate flag** `tam`: exposed, killed, spared (released unharmed), turned, or spared cruelly (humiliated, maimed, left bound in the snow).

### Aldous Fenn: merchant (smuggler)

- **Looks:** fifties, soft, sweating, rings on every finger, fur collar, a heavy locked strongbox.
- **Truth:** smuggles **emberstone** from Veyr's ruins south, where it is illegal and precious. He came down by **the Miners' Road**. He lies about everything to do with his box and his route, and nothing else.
- **Wants:** to get south with his cargo and his life.
- **Bargain** (`SOCIAL_FENN_BARGAIN`): trade, threat of exposure to the Wardens, silence, or real help (vouching for him when the room turns on him) gets **two emberstones**, the location of the Miners' Road (`DISCOVER_LONG_WAY`), or both.
- **Emberstone:** a fist-sized red crystal. Struck hard, it burns hot and steady for about four hours. It keeps a person from numbness, lights anything, and makes Hushed hesitate. It can light the Ash Gate braziers.

### Mother Grell and Pip

- **Grell:** seventies, bent, flinty, sharp-tongued, suspicious of everyone, fiercely protective. Suspects Fenn loudly (wrong).
- **Pip:** eight, silent since her parents walked into the snow. She draws with charcoal on the floorboards. **She draws the truth:** a tall man with a crook standing at a door with a spiral on it, and blue lines coming out of his mouth. She shows it only to someone who has been kind to her, or who sits down and draws with her.

### Jory

- The vanished pilgrim. Found in Act IV among the Hushed on the Stair of Ash, still clutching his pilgrim's scallop.

---

## Lord-Inquisitor Varo Dask (Kestrel's Watch, Act II; Orun, Act IV; the throne, Act V)

- **Looks:** late fifties, lean, clean-shaven, iron-grey hair cropped close, pale courteous eyes. A long grey inquisitor's coat over fine Southern plate, a slim sword, fine gloves. Speaks softly. Never raises his voice.
- **Wants:** the Kindling and the Crown, for the Southern Throne, as a weapon to end the South's rebellions ("to end wars before they start").
- **Believes:** power is real and the seal is priests' mythology. He knows the Kindling dims if taken by force, and this is why he bargains.
- **Knows:** the broker's ledger (bought), the courier's name and path, and whatever Calen and his scouts report.
- **Tactics:** patience, courtesy, bribery, and then overwhelming force at the moment of advantage. Never fights fair. Values his own life: he withdraws from a losing fight.
- **Parley** (`SOCIAL_DASK_PARLEY`): he respects competence and hates fools. Leverage that works: his fear of failure before the Throne, the truth about the Crown (if the courier knows it, he doesn't believe it at first), a forged warrant (Envoy), proof that Calen has turned, or an offer of alliance against the Hushed.
- **The Crown:** he wants it, badly. Offered it in Act V, he takes it: `THE STOLEN FIRE`.
- **Wardens:** ten to twelve, disciplined, armored in black and white with the white-tower badge, crossbows and short swords. Any of them would rather go home.

---

## Tobiah Crane: the Blackwater ferryman (Act II, Blackwater route)

- **Looks:** seventies, stooped, half-deaf, a wide oilcloth hat, a pole worn smooth.
- **Wants:** his daughter **Anneke** back from the lake. He knows she won't come back.
- **Price:** a silver piece, or a true story told well.
- **Anneke:** among the Drowned (`ENC_DROWNED`). Twenty, long dark hair floating, a blue ribbon. If the courier spots her and says her name, she lets go of the barge, and so do the Drowned nearest her. Crane never stops crying afterward, and never stops thanking them.

---

## Serith the Unburnt: prophet of the White Choir (Act III, IV, V)

- **Looks:** forties, tall, raw-boned, head shaved, the left half of her face a smooth shining burn scar, a white wool robe, bare feet that do not freeze. Carries no weapon.
- **History:** her husband and two children, Tomas and little Ada, died when Southern Wardens burned **Saltcombe** to stop a fever. She crawled out of the fire. She heard the Hush's song on the road north a year later, and it was the first thing that did not hurt.
- **Wants:** an end to pain for everyone. She believes the Hush is peace.
- **Tactics:** words, song, numbers. Most of the Choir are unarmed. A few half-Hushed guard her.
- **Doubt** (`SOCIAL_SERITH_DOUBT`): see `acts/act-3.md` 3.3. The deepest argument is that *the Hush will take her children's names from her.* Test her: "Say their names." She does. "In the silence, will you still be able to?"
- **Calen:** she recognizes him from Saltcombe. What she does depends on what he does: he can confess, flee, or defend himself. If he kneels, she lays a hand on his head and says, "It doesn't hurt in the song. That's what I'm offering you."

---

## The Order of the Last Lantern (Orun, Act IV)

- **Prior Hesk:** seventies, gaunt, iron-grey, severe, sincere, exhausted. Has spent his life on this night. Will not lie when asked directly. Will not beg. Believes one life for the world is a fair price and is ashamed that it's not his. If the courier offers a real alternative (the Long Quiet, with the words), he listens, and it might break his heart that there was another way. He dies holding the undercroft stair unless helped.
- **Sister Amsel:** fifties, brisk, a healer. Her infirmary is the only full healing in the game: once per person, it clears Wounded to Unhurt. Quietly thinks Hesk is wrong.
- **Brother Tove and Brother Idris:** young, frightened, devout. They fight with staves at the siege.
- **Brother Caddoc:** ninety, blind, rings the great bell. Its sound drives back the Hushed. If he's protected, the bell never stops.

## Queen Maelis Veyr (the Ember Throne, Act V)

- **Looks:** charcoal and bone in a gown of embers, the Ember Crown on her skull. If restored: young, fierce, with living fire for hair, the face on the mural.
- **Voice:** a whisper with a crackle in it. Formal, dry, exhausted, occasionally very funny.
- **Wants:** to finish. She does not beg and does not lie.
- **Knows:** everything about the Burning, the Stillheart, *anna vaelun* and the Cradle (see `acts/act-5.md` 5.2).

## Ambrose Pell (backstory only)

- The broker in Harrowgate who hired the courier and gave the three instructions. Paid by letter from the Order. Knows nothing. Never appears.

===== FILE: world/locations.md =====

# ELDERVALE: Locations

The courier's strip-map, with what it doesn't show. Use this when the player goes off the authored path. Travel times assume walking in bad weather.

```
                    ORUN (cliff monastery)
                     |  the Queen's Road (half a day)
          VEYR (the dead city) ── the Deepworks (beneath)
         /      |                 \
 the Ash Gate   the lakeside wall   the Miners' Road exit
     |               |                    \
 the Gullet /     the Blackwater          (under the mountain)
 Sorrow Bridge     Lowmere (drowned)          \
     |               |                         \
 Kestrel's Watch  Crane's ferry               the frozen waterfall adit
      \              /                          /
        THE SPLIT ── waystation of Saint Hollis
            |
        Hollin's Ford (empty salt village, 1 hour east)
            |
        GREYHOLT ── the Last Lamp
            |
        the Weeping Milestone · the frost line
            |
        (south: Harrowgate, 9 days)
```

## Act I

- **The frost line:** a band of Hushed frost, a hundred paces wide, across the Black Road and the moor. Sound dies inside it. It will spread south over the winter.
- **The Weeping Milestone:** a Veyr milestone with an inscription and pictograms (star, circlet, eye). It weeps constantly. A smugglers' crescent marks its base.
- **Greyholt:** twenty houses, the chapel bell (rope tied high), the Last Lamp, an empty stable, chalk tallies on the doors.

## Act II

- **Hollin's Ford:** Wren's village, an hour east of the Split. Every door open, every hearth cold, a well in the square. The villagers' footprints lead north, frozen into the ground. It is optional and costs half a day. There are Hushed nearby at night. Wren won't go in.
- **The Split and the waystation of Saint Hollis:** a stone hostel, walled yard, shrine room with a painted map of the Saints' Roads, an iron bell. The road forks: north (the Pass), east (the Blackwater), and, hidden, northeast (the Miners' Road).
- **Kestrel's Watch:** an old Veyr fort across the pass, held by Dask's Wardens. A goat path runs above it (Wayfarer).
- **The Gullet and the Sorrow Bridge:** a three-hundred-foot chasm. A rope-and-plank bridge, eighty paces, beside the old iron chain of the fallen stone bridge. The Gullet Crawler nests below.
- **The Blackwater:** a long black lake. Crane's ferry hut on the south shore, the guide-rope, the drowned village of **Lowmere** and its bell tower mid-lake, and a ruined boathouse on the north shore where the Warden scouts watch.
- **The Miners' Road:** the frozen-waterfall adit, the cart tunnel, the Weeping Stair, the flooded gallery, the collapse, the frozen miners, the Miners' Tally, and the Deepworks exit.

## Act III

- **Veyr:** the dead city of ash-figures. The Ash Gate, the Hall of Crowns (the mural, the Choir's camp), the Queen's Spire, the Royal Crypt beneath, the culvert, the lakeside wall, the old foundry (**the Forge of Crowns**, above the Deepworks, where the anvil still bears the Crown's two-halved mold), and the foot of the Queen's Road.
- **The Queen's Road:** a stair-road up the cliff, with dead lantern-niches every hundred steps. Half a day.

## Act IV

- **Orun:** the cliff monastery: gatehouse, courtyard over the drop, bell tower (Caddoc's great bell), galleries and cells, lamp-oil store, rope-lift to the valley, chapel with the altar bowl, the undercroft with its blue-glowing cracks.
- **The Lantern Door:** a round bronze door with five lanterns. The miners' crack runs beside it.
- **The Stair of Ash:** a black glass stair down a shaft, deep galleries (the tally wall), and the Hushed of the deep in a line.

## Act V

- **The Ember Throne cavern:** the black glass floor, the blue sea below, the lattice of fire, the throne stair, the ice stair behind the throne down to **the Cradle**.

## Beyond the map

- **Going around the mountains** cross-country: days. Too late for the moon.
- **Harrowgate**, the southern capital: nine days south. Pell's brokerage. Offscreen.

===== FILE: world/factions.md =====

# ELDERVALE: Factions

Three powers want the reliquary. Track each faction's **standing** toward the courier (-2 hostile to +2 friendly, starting at 0) and whether it is **aware** of where the courier is and what they carry.

Factions act offscreen. When the courier delays, factions advance. When the courier makes noise (an open Kindling, a massacre, a Warden scout escaping), factions learn.

---

## The Order of the Last Lantern

- **Who:** the monks of Orun. Five remain: Prior Hesk, Sister Amsel, Brothers Tove, Idris and Caddoc, plus Brother Oswin on the road.
- **Wants:** the seal renewed, with the courier as the new bearer.
- **Believes:** the Queen's sacrifice was holy, and one life for the world is a fair price.
- **Method:** a broker, a courier with no one to miss them, and the three instructions. Never force, because the fire must be willing, but they will persuade, guilt, drug (Hesk's poppy tea) and pray.
- **Always aware.** They know the courier is coming. Oswin is their messenger.
- **Standing up:** respect for the Queen and the Order, protecting monks, reaching Orun, arriving with the box sealed.
- **Standing down:** opening the box, threatening to destroy it, violence at Orun.
- **Symbol:** a lantern with a single flame. On the reliquary's wax seal, Oswin's habit, and the waystation shrine.

## The Southern Throne's Wardens

- **Who:** the Lord-Inquisitor's Wardens, the Southern Throne's inquisitorial soldiery, led in the north by **Lord-Inquisitor Varo Dask**. Twelve men at Kestrel's Watch, two scouts on the Blackwater, and Calen Marr on secret assignment.
- **Wants:** the Kindling and the Crown for the Southern Throne, as a weapon and a symbol.
- **Believes:** the seal is superstition; power is real; the South has a right to what lies in its sphere.
- **Method:** the broker's ledger (bought), a checkpoint at Kestrel's Watch, man-traps on the road, a spy (Calen), bribes, patience, and then force at the moment of advantage. Dask knows the Kindling dims if taken by force, so he bargains until he can seize everything at Orun.
- **Aware by default** once the courier passes Kestrel's Watch, is seen by the Blackwater scouts, or is reported by Calen. **Unaware** if the courier took the Miners' Road, avoided the scouts, and Calen never reported (loyal, left behind, or absent).
- **Standing up:** sensible bargains, competence, sharing intelligence about the Hushed.
- **Standing down:** humiliating Dask, killing Wardens, forged warrants discovered.
- **Symbol:** a white tower on black.

## The White Choir

- **Who:** a movement of the grieving, sick and desperate, drawn north by the Hush's song. Led by **Serith the Unburnt**. About twenty in Veyr, plus **Listeners** (spies and door-markers, like Tam) scattered along the roads.
- **Wants:** the seal to fail. The Queen's last fire, and the Kindling, put out.
- **Believes:** the Hush is mercy: silence without pain, sleep without dreams. The Queen was a tyrant who burned her people and has held the world in pain for three centuries.
- **Method:** song, persuasion, frost sigils on doors (a spiral cut by one line, "the open mouth"), Listeners opening doors for the Hushed, and at the end numbers and snow to smother the Kindling. Mostly non-violent, though the half-Hushed among them are not.
- **Aware** once a Listener reports (Tam, if not exposed before dawn), whenever an open Kindling flares, or if the Hush itself notices the courier (always, by Veyr).
- **Standing up:** mercy to the Hushed, honesty about the Hush, doubting Serith with respect.
- **Standing down:** burning Hushed, killing Choir members, mocking their grief.
- **Symbol:** the frost sigil.

## The Hush (not a faction, but acts like one)

- Not an enemy army. A waking, cold, vast intelligence that wants its heart back and makes everything near it still.
- It is always aware of the Kindling when it is open, and of the courier from Veyr onward.
- It **remembers warmth that was given**: see `bram` in `acts/act-5.md`.

===== FILE: world/creatures-2.md =====

# ELDERVALE: Creatures of the Wilderness

## The Drowned

Hushed who walked into the Blackwater and did not die.

- Pale shapes beneath black water, hair drifting, blue-glowing fingertips.
- They grip boats and swimmers from beneath and pull downward, slowly.
- Fire on the water and the drowned bell drive them off. They will not leave the water.

## The Gullet Crawler

A natural beast of the chasm, not Hushed.

- **Look:** a pale, eyeless, eight-limbed cliff predator with a body the size of an ox, long jointed limbs ending in hooks, and a mouth of fine translucent teeth. Its skin is the color of cave fat.
- **Senses:** vibration only. Blind and deaf to still things.
- **Want:** food that falls from the bridge. It climbs the chain and the left cable to shake prey loose.
- **Behavior:** climbs toward the strongest vibration, retreats from fire, and drops back into the chasm when badly hurt. It does not pursue onto solid ground.
- **Danger:** a hooked limb can pluck a person off the planks (Desperate to avoid if caught unaware), and its weight can snap planks.

===== FILE: game/encounters-2.md =====

# THE BLACK ROAD: Encounters, Act II (combat rules are in `game/encounters.md`)

## ENC_AMBUSH: The Climb (Act II, every route) · SET PIECE

The last stretch before Veyr, on every route. The Hushed have learned the Kindling is coming, and they wait for it.

- **Where:** *the Pass*, on the scree switchbacks down into Veyr's valley at dusk; *the Blackwater*, on the cliff path above the lake's north shore; *the Miners' Road*, in the last long gallery before the Deepworks, in the dark.
- **Enemies:** eight to ten Hushed, led by **a Hushed Warden**, a Southern soldier in black-and-white armor with the white-tower badge, frost in his beard, still gripping his sword. The Hushed Warden is stronger than the rest, and he *uses his sword*.
- **What it reveals:** the Hush is taking **Dask's own men**. The Wardens' picket on the northern road was taken. Seen by Calen, he knows the man: "Sergeant Holm. He taught me to ride." (Calen trust or tension moves.) The Hushed Warden carries Dask's field orders in his coat. Reading them reveals that Dask knows about the courier. If Calen's orders are still secret, the handwriting matches his orders: a natural route to `DISCOVER_CALEN_ORDERS`.
- **Offer the menu** (examples, adapt them to the route):
  - *Stand:* "Hold the narrow switchback and meet them one at a time." (Warden advantage. Risk: wounds.)
  - *Evade:* "Leave the trail and scramble down the scree in the dark." (Wayfarer advantage. Risk: a fall, lost gear, companions separated, arriving after nightfall.)
  - *Turn the ground:* "Start a rockslide onto the switchback above them." (Pass) / "Break the cliff path's rotten rail and send them into the lake." (Blackwater) / "Kick out the old pit-props and bring the gallery roof down between us." (Miners' Road). Risk: a big roll, collateral, noise, a blocked way back.
- **Companions:** Calen fights beside the Warden he knew. Wren can lead the Hushed away, since they ignore her, but it raises her hushing. Oswin's lantern makes them hesitate for one breath.
- **Beats:** the silence and frost on the rocks; the Hushed rise from the snow; the Hushed Warden advances with his blade; the turning point (one decisive roll); the aftermath (the badge, the orders, someone is bleeding).
- **Resolution:** 3 to 6 decisions. Report `ENC_AMBUSH_SURVIVED`, plus `ENC_AMBUSH_CLEVER` for an ingenious resolution. This battle should usually leave a mark: a wound, a companion hurt, lost gear, or a night.

## ENC_BRIDGE: The Sorrow Bridge (Act II, the High Pass)

- **Enemy:** the Gullet Crawler (`creatures.md`).
- **Its goal:** shake prey off the bridge.
- **Terrain:** eighty paces of rope and plank over three hundred feet of air. Two tarred **lower cables** carry the weight. **Hand ropes** only steady it. The rusted **iron chain** of the old bridge runs alongside. The creature climbs the chain and the **left cable**. Planks are icy. Wind.
- **Beats:**
  1. Midway, the bridge shudders. Something is coming up from below.
  2. A hooked limb comes over the edge. Planks crack.
  3. Its body is under the bridge now, on the left cable, and the bridge tilts.
  4. If Calen is present, "We won't both make it across." He's ready to hold it while the courier runs. That is a sacrifice the courier can accept or refuse.
  5. (If unresolved) It plucks someone.
- **Clever resolutions:** going utterly still until it loses interest; throwing a pack or dropping something heavy on the far end as a decoy; **cutting the left cable** when the Crawler is directly beneath it (the bridge lurches sideways on the right cable; everyone holding on survives; the creature falls); setting fire to the tarred chain end; answering a question with a real, observed answer ("Can I tell which rope carries the weight?" "Yes: the two thick tarred cables beneath the planks. The hand ropes would barely hold a child.").
- **Resolution:** the Crawler falls or flees, or the courier reaches the far side. It never follows onto rock.

## ENC_DROWNED: The Drowned Bell (Act II, the Blackwater)

- **Enemies:** a dozen or more Drowned, including Anneke Crane.
- **Their goal:** pull the barge and its warmth down into the lake.
- **Terrain:** the flat barge on its guide-rope; the drowned bell tower (a climb of slick stone, twenty feet to the bell, which still hangs); Lowmere's rooftops just under the surface; thin ice at the lake's edge; Crane's pole; any lamp oil.
- **Beats:**
  1. The barge snags on the tower. The water goes still.
  2. Hands on the gunwales, and the barge tips.
  3. Crane sees Anneke and stops poling.
  4. Water floods over the low side. The box's weight drags whoever holds it toward the edge.
  5. (If unresolved) Someone goes over.
- **Clever resolutions:** climbing the tower and ringing the bell (the Drowned sink away); pouring oil and lighting it on the water; cutting the guide-rope and poling free along the rooftops; lightening the barge fast; saying Anneke's name.
- **Resolution:** the barge reaches the far shore, or everyone swims, which is numbing and dangerous.

===== FILE: game/puzzles.md =====

# THE BLACK ROAD: Puzzles

Three substantial puzzles, one social, one environmental and one historical. Each has discoverable clues and allows clever alternatives.

**Rules for every puzzle:**

- **Never give the answer.** Present what can be observed, and let the player reason.
- **Dice never solve a puzzle.** A roll can decide how well a physical step is carried out (clearing the jammed chain, dodging the pitch), never what the answer is. A Scholar's Words are also tools, not answers: SAEL can tell that someone in the waystation is Hush-touched, but not who.
- **Answer questions truthfully,** filtered through what the character could perceive (path matters: see each puzzle's `SEES` lines).
- **Accept any solution that works in the fiction,** including ones not listed here.
- **Hints** (`rules.md` §11): after about three stuck turns, or on request. Record `hints_used`. A hinted solve earns `_SOLVED` but not `_NO_HINT`. A companion answering because the player asked counts as a hint. A companion's *unprompted* one-line in-character remark that only points at a clue does not count, but don't make such remarks until the player has been stuck for at least two turns.

---

## PUZZLE 1: THE LISTENER (social · Act II, the waystation of Saint Hollis)

**The question:** who among the travelers opens the door for the Hushed?

**The answer:** **Tam**, the young shepherd, a Listener of the White Choir. He will lift the bar at **midnight**.

**The deadline:** midnight. The courier has the evening, roughly 4 to 6 player actions of investigation and conversation. Keep time moving: the fire burns down, Pip falls asleep, the Hushed are heard (not heard) circling outside.

### Clues (all discoverable)

| Clue | How it is found | Path that notices it unprompted |
|---|---|---|
| Tam claims he came in from the rain this afternoon, but **his boots and hems are dry**, and there's no mud on his crook. | Looking at him, or asking when he arrived | WAYFARER |
| Tam **doesn't shiver**, even away from the fire. His hands are **cold as stone** to shake. | A handshake, sitting beside him, handing him a cup | WARDEN (the handshake) |
| Tam says his flock grazed the **Hollin valley**, but Hollin's Ford was emptied a month ago. Wren, if present, says so flatly: "There's nothing alive in Hollin." | Asking about his flock | ENVOY (the story is rehearsed) |
| The frost sigil on the door is drawn **at the height of a tall man's reach**. Fenn is short, Grell is stooped, Oswin is round and middling. | Examining the sigil | anyone who looks |
| Tam volunteers to **take the last watch** and to "fetch water" after dark. | Planning the night | ENVOY |
| Tam carries a **white reed pipe** in his jerkin, a Choir whistle. | Searching his things, or seeing it when he bends | WAYFARER |
| **Pip's drawing:** a tall man with a crook at a door marked with a spiral, blue lines coming from his mouth. | Being kind to Pip, or drawing with her | none; only kindness |
| Near the reliquary, Tam **edges away**, while everyone else edges closer to its warmth. | Watching, or deliberately bringing the box near him | SCHOLAR (as a phenomenon) |

### Red herrings (people lying about something else)

- **Fenn** is sweating, evasive and guarding his strongbox. He is lying, but about **emberstone smuggling**, not the Choir. Pressing him reveals the stones and his Miners' Road route (`SOCIAL_FENN_BARGAIN` if bargained well). Mother Grell loudly accuses him.
- **Oswin** is lying about being a pilgrim. He was sent to meet the courier. ENVOY SEES the evasion. He admits the errand if pressed, but not its purpose.
- **Wren** (if present) is drawn to the box's warmth, which is the *opposite* of Tam's reaction. If the player uses "who reacts oddly to the box" as a test, note that Wren leans *toward* it.
- **Pip** doesn't speak, which Grell explains angrily. She isn't Hushed; she's grieving.

### Solutions

- **Expose him** with the evidence: accuse him with at least two real clues and he gives up, calm and sad. Report `PUZZLE_LIAR_SOLVED`.
- **Trap him:** pretend to sleep and catch him at the bar at midnight. Report `PUZZLE_LIAR_SOLVED`.
- **Test him:** press the box's warmth to his hand. He flinches and his skin reddens like frostbite in reverse. Report `PUZZLE_LIAR_SOLVED`.
- **Any other sound reasoning** that correctly identifies Tam before midnight: report `PUZZLE_LIAR_SOLVED`.
- Solved without hints: also report `PUZZLE_LIAR_NO_HINT`.
- **After:** what to do with Tam (`npcs.md`): bind him, question him (he names Serith and the Choir's aim, which is useful), turn him (`SOCIAL_TAM_TURNED`), release him, or kill him (`killed_someone`). Record `tam`.

### Failure

- **Accusing the wrong person:** the room turns on the accused. Fenn is tied up (and furious), or Oswin is thrown out into the snow (he survives the night in the yard's shrine, badly chilled, trust -2), or Grell curses the courier. Tam helps with the accusation.
- **At midnight** Tam lifts the bar. Six Hushed come in, silent. A short, frightening scramble follows. Resolve it in 2 or 3 decisions using `ENC_ROAD`'s rules; it does not earn encounter events. Someone is taken unless the courier acts decisively: **Pip** first, then Grell. If Pip is taken, Grell walks out into the snow after her at dawn. It's the worst thing that can happen in Act II, so let it land.
- Tam slips away with the Hushed, and the Choir is aware of the courier.

---

## PUZZLE 2: THE ASH GATE (environmental · Act III, Veyr)

**The question:** how to open Veyr's sealed gate.

**The mechanism:** the Ash Gate's bronze doors are counterweighted by a **heat engine**. Air heated in the **correct braziers** rises through flues into the gatehouse and turns a vane-wheel (a hot-air turbine) that winds the counterweight chain. Two braziers are real, the **east** ("dawn") and the **north** ("hearth"). Two are **traps**, west and south: they vent burning pitch onto the gateway when lit. A **skeleton's sword** is jammed in the chain gear inside the gatehouse, so even when the correct braziers are lit, the gate rises two feet and stops, groaning.

**Stage 1: which braziers?**

| Clue | How found | Noticed unprompted by |
|---|---|---|
| **Soot:** heavy, centuries-deep soot stains on the wall above the east and north braziers. The wall above the west and south braziers is clean. | Looking up at the gatehouse wall | anyone who examines the braziers |
| **Worn steps:** the stone steps up to the east and north braziers are dished by centuries of feet. The others are sharp-edged. | Looking at the steps | WAYFARER |
| **The flues:** the east and north braziers have iron flues running up into the gatehouse. The west and south have none, only a strange spout pointing at the gateway below. | Close inspection, or climbing | SCHOLAR (engineering), WARDEN (a murder-hole trick) |
| **The draft:** standing by the east or north brazier, one can feel a faint pull of air *into* its bowl. | Holding a hand or a flame near it | anyone who tests |
| **Oswin's saying:** "In Veyr they lit the dawn and the hearth at the gate every morning." | Asking Oswin (counts as a hint if asked for help) | none |
| **The mural** (if seen first): gatekeepers lighting two fires, east and north. | Hall of Crowns | none |

**Fire source needed:** the courier needs fire: flint and tinder with fuel (ash-wood from the dead city burns), emberstones (Fenn), lamp oil (Scholar's lamp), or the **Kindling itself**. The Kindling will tempt players who haven't opened the box. That's intended: it lights the braziers instantly, but it breaks the first instruction.

**Stage 2: the jammed chain.** Once the correct braziers burn, the gate lifts two feet and stops, shuddering. Looking through the **murder-hole** above the gateway, or climbing into the gatehouse (a Wayfarer can climb the flue; anyone else can squeeze through the lifted gate gap and find the gatehouse stair inside), reveals the chain gear jammed by an ancient **sword**, still in a skeleton's hand. The skeleton wears a gate-warden's badge. Freeing it: a pole through the murder-hole, a climb, or brute strength. The gate then rises fully.

**Traps:** lighting the west or south brazier releases burning pitch from the spout onto the gateway, a Risky dodge for anyone standing there. It is a wound if caught. The pitch burns for a while, blocking the gate.

**Solutions:** the correct braziers plus clearing the chain: report `PUZZLE_GATE_SOLVED` (and `PUZZLE_GATE_NO_HINT` if unaided). Clever alternatives that engage the mechanism, such as lighting a fire directly under the flues inside the gatehouse, or cranking the vane-wheel by hand with three strong people and an hour: also `PUZZLE_GATE_SOLVED`. Bypassing the gate altogether (a climb, the culvert, the postern) does not.

---

## PUZZLE 3: THE LITANY OF VEYR (historical · Act IV, the Lantern Door)

**The question:** in what order must the five lanterns be lit to "speak the road of Veyr"?

**The answer:** **star → crown → eye → flame → lantern.** (The theft, the forging, the waking, the Burning, the watch.)

**The door:** five bronze lanterns in an arc above a round bronze door, each cast with a symbol: **a hand holding a star · a circlet · an open eye · a flame · a lantern**. Their positions in the arc are jumbled: from left to right, **eye, lantern, star, flame, circlet**. Each lantern has a wick and oil still in it, three centuries old but sealed. Inscription (Veyric; a Scholar or Oswin reads it; for others, it is the "writing over the door"): *"SPEAK THE ROAD OF VEYR, AND THE DOOR WILL KNOW YOU AS ITS OWN."*

### Clues from earlier in the game (check `litany_clues`)

| Clue | Where | What it establishes |
|---|---|---|
| The Weeping Milestone: pictograms of star, circlet, eye, in that order. Verse: *"Veyr was born of what it took."* | Act I | **star, crown, eye** come first, in that order |
| The waystation hymn: *"We keep the watch the Queen began; / we tend the flame she burned for."* | Act II | the **flame** comes before the **lantern**, and the lantern is last |
| The Miners' Tally: the blue heart was cut out first; the dreams of silence came after the forge | Act II or IV | the **star** is first, and the **eye** follows the **crown** |
| The mural, five scenes in order | Act III | the whole order |
| The Queen's epitaph: *"She burned so the eye would close."* | Act III | the **flame** comes after the **eye** |
| Maelis's journal | Act III | the theft, the waking, the Burning, the Order's founding |

A player with the mural has everything. A player with the milestone and the hymn can deduce it (star, crown, eye, then flame, then lantern). A player with none of these must reason from the symbols and what they've learned of the story, which is possible and very satisfying.

### Helpers (each use counts as a hint if the player asks)

- **Oswin** knows only "the lantern is last, and the flame before it."
- **Prior Hesk** (if alive and not hostile) knows the full order, but was forbidden to speak it: "The door must be *known*, not told." An Envoy can argue him out of it, which counts as a hint.
- **A Scholar** can reason from Veyric grammar that the Litany reads as a history, oldest first.

### Wrong order

The lit lanterns gutter out blue. A breath of killing cold rolls from behind the door: everyone at the door goes numb (one wound level for anyone already numb). On the second failure, the Hushed on the far side hear it and start to come up. On the third, they arrive (a short, grim fight at the door, 2 or 3 decisions, no encounter events). The lanterns can be relit and tried again. The oil lasts for about four attempts.

### Success

The door rolls aside on hidden weights. The five lanterns throw a line of Veyric onto the far wall: *"ANNA VAELUN: WHAT WAS TAKEN MAY BE GIVEN BACK."* Report `PUZZLE_LITANY_SOLVED`, plus `PUZZLE_LITANY_NO_HINT` if unaided.

### Alternatives (no event)

- **The miners' crack:** a Wayfarer notices a draft from a fissure beside the door, which is old mine workings. A slow, freezing squeeze into the Deepworks. It misses the words.
- **Brute force:** a Warden breaks the door's hinge-pin over an hour of noise. The Hushed below come to meet them.
