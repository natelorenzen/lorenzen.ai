# ACT I: THE ROAD

*Mission, atmosphere, first threat.* Target: 10 to 15 minutes, 6 to 9 meaningful decisions.

Night count: begins at **4**. Dawn at Greyholt lowers it to **3**.

Act I is about dread, not action. Let the rain, the silence and the absent people do the work. The first real terror, and the first image, is the Night Visitors (1.4).

---

## THE RELIQUARY: rules for every act

The black iron box is warm, heavy, bound with three iron bands and sealed with lantern-sigil wax. Nothing about it is magical to casual inspection except the warmth.

- **Listening:** held to the ear on a silent night, it makes a sound like a banked fire settling. A Scholar may think it sounds like breathing.
- **Hushed and the box:** Hushed are drawn to its warmth from a distance, but recoil from it up close, the way a moth circles and then flinches. Wren likes to stand near it without knowing why (see `companions.md`).
- **Opening it:** the bands can be pried or cut with a blade and a few minutes' effort. The wax seal breaks. Inside, on a bed of grey ash, lies **the Kindling**: a coal the size of a walnut, alive with orange-gold fire, which does not burn the iron around it. When the lid lifts, heat rushes up the opener's arm and leaves an **ember mark** in their palm, a spiral of faint orange light under the skin. That mark is permanent. Add it to visual state.
  - The opener is now **bound**. The Kindling will accept only them as its bearer.
  - A faint voice, felt more than heard, a woman's: *"…carry me home…"*
  - Report `ACH_WHATS_IN_THE_BOX` if this is Act I or II. Set `instructions_broken.opened`.
  - Fire `IMG_RELIQUARY_OPENED` (below).
- **Using the open Kindling:** held up with intent, it **flares**, and Hushed within a stone's throw fall back as from a furnace. It lights any fuel instantly. Each deliberate flare spreads the ember mark further up the arm (track `flares`). At the third flare the bearer starts to burn from inside: they become **Wounded**, and every later flare costs a wound level. The Choir and the Hush can sense an open Kindling from miles away: set `choir aware` and `wardens aware`.
- **Closing it again** is possible; the lid still fits. The mark remains.

```
[IMAGE_TRIGGER]
ID: IMG_RELIQUARY_OPENED
TYPE: MAJOR_REVEAL
STATUS: REQUIRED the first time the box is opened (any act)

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
Close, low angle. The courier's hands hold the black iron box open.
Inside, on grey ash, a walnut-sized coal of living orange-gold fire
lights the courier's face from below. Heat shimmer. The first spiral of
an ember mark glows in the palm. Around them, whatever the current
location is, falls into deep shadow. Rain or snow hisses in the heat.

Do not reveal undiscovered information.
(No crown, no queen, no throne.)

[/IMAGE_TRIGGER]
```

---

## 1.1 THE VANISHED ROAD

Open immediately after the path tag. Keep the first turn under 150 words.

**What is here:** The Black Road, three centuries old, paved with fitted black basalt, runs north through the Karrow foothills. Rain. Moorland, heather, dead bracken. The mountains ahead are hidden in cloud.

Yesterday the road "disappeared." Here is what that means: **a hundred paces ahead, a band of pale frost lies across the land like a drawn line**, stretching left and right out of sight into the fog. The rain falls on it and does not melt it. Beneath the frost the black stones are still there, dim, like something under ice. On the far side, the road continues north.

**The horse** stops ten paces from the frost and will not go closer. She trembles, ears flat. Whipping, coaxing and pulling all fail.

SCHOLAR FEELS (the Word SAEL stirs unbidden, their first taste of magic): the frost line is not weather, it is *attention*. Something vast is listening through it. The hairs on their arms stand up, and for a moment they can feel the warm box in their coat as clearly as a hand on their chest.

**Inside the frost line:** no sound. Footsteps make none. Speech comes out flat and small, as though the air is swallowing it. Breath does not steam. Crossing on foot takes a minute and leaves the courier *numb* (fingers stiff, face aching) for a short while. It is safe, but it feels deeply wrong. On the far side, sound returns like a held breath released.

**Ways past the horse problem:**

- Leave her. She wanders home south, or later turns up at Greyholt's stable if the player tells her "go on".
- Blindfold her and lead her across (a Warden or Wayfarer knows the trick; anyone else can think of it). She crosses shaking, and will serve until the Split.
- Lead her around the frost line through the moor. It works, but it is slow. The courier reaches Greyholt **after dark**, and the Night Visitors (1.4) catch them on the open moor instead of at the inn. Use the *Moor variant* in 1.4.

**The Weeping Milestone** stands at the edge of the frost: a black pillar, man-high, carved with Veyric script and three pictograms. Water beads and runs down it constantly, even in the dry lee.

- Everyone sees the pictograms: **a hand lifting a star out of a mountain; a circlet; an open eye.** (These are the first three stations of the Litany. See `game/puzzles.md`. Record `litany_clues: milestone`.)
- SCHOLAR SEES: the script reads, in Old Veyric: *"ORUN, FORTY LEAGUES. VEYR WAS BORN OF WHAT IT TOOK. WHAT WAS TAKEN, THE MOUNTAIN MOURNS."* The weeping is condensation, but it only happens on this stone, and the Scholar knows that cold stone sweats when something colder lies beneath it. Report `DISCOVER_MILESTONE_VERSE`.
- SCHOLAR, reading the whole stone down to the moss at its foot: a traveler's blessing, *"THARRU, AND BE CARRIED."* Speaking it aloud, the Scholar feels the word take weight on their tongue. `WORD LEARNED: THARRU, "carry"` (`game/words.md`). The Scholar reaches rank II.
- Non-Scholars can copy the glyphs or make a rubbing. If Oswin or a Scholar later translates it, report `DISCOVER_MILESTONE_VERSE` then.
- WAYFARER SEES: at the base, scratched and old, a **hooked crescent**: a smugglers' mark you've seen on caches in the south. It points northeast, into the hills. (It marks the old Miners' Road. On its own this is only a hint. See Act II.)
- WARDEN SEES: in the mud beside the road, a dozen sets of hobnailed boots, Southern military issue, four or five days old, heading north. Someone marched soldiers up this road.
- ENVOY SEES: fresh offerings wedged in a crack: a copper coin, a braid of grey hair tied with red thread. Someone nearby is praying hard for someone.
- ANYONE who looks at the frost closely: prints of **bare feet** pressed into it, many, walking north toward Greyholt, and none coming back.

Greyholt lies an hour north. The strip-map shows it. Smoke from one chimney is visible when the fog thins.

---

## 1.2 GREYHOLT

Twenty stone houses on a hillside, most of them shuttered. Doors are marked in chalk with tallies (one stroke per person taken), some with five or six. No dogs. No children. The chapel bell hangs in an open frame on the green. Its rope is tied up high, out of reach, as if someone was afraid of it being rung.

**The Last Lamp**, a low inn, is the only lit building. By old custom, its lantern above the door is never allowed to go out. Its stable is empty.

If the player explores the empty houses: food left on tables, cold hearths, beds slept in. In one house, frost on the inside of the windows in the shape of handprints. A Wayfarer or careful searcher finds that **the missing walked out on their own feet**. Doors were unbarred from inside.

If the player rings the bell: sound seems to carry impossibly far. Later, this becomes useful (1.4).

---

## 1.3 THE LAST LAMP

Warm, smoky, near-empty. A peat fire. The smell of broth.

**Hedda Ruel** runs it: fifties, broad, red-knuckled, efficient, grieving and hiding it (`npcs.md`). She serves without questions and names a fair price. She says her husband Bram "went up to the Split for salt a fortnight past, and the road will give him back when it's ready."

- She takes a bowl of broth down to the cellar twice an evening, and comes back with it empty.
- The cellar door has a **new iron bolt** on the outside.
- She hums, constantly and softly, a lullaby.
- ENVOY SEES: the grief is fresh and the story about the salt is a lie she has told many times. She is protecting someone, not hiding a crime.
- WAYFARER SEES: scratches on the cellar door's lower boards, from the inside.
- SCHOLAR SEES: a rime of frost around the cellar keyhole, in a warm room.
- WARDEN SEES: a woodsman's axe behind the bar, placed where a scared person keeps a weapon.

**Calen Marr** sits in the corner with his back to the wall: early thirties, Southern-dark, clean-shaven badly, an old burn scar over the back of his left hand, a good sword whose crossguard has had a crest **filed off**. He has been here two days "waiting for the rain to stop". When the courier enters, he watches the coat, not the face.

Load `characters/companions.md` now.

- He opens with dry courtesy: "You've the look of someone paid to go somewhere unpleasant." He is going north himself, to find his sister. He offers to walk with the courier: "Roads are safer in twos. I don't need paying. I need company that won't run."
- He never asks what the courier carries. **ENVOY SEES** that. He already knows.
- WARDEN SEES: he stands and sits like a Southern Warden, drilled and weighted to the left, and the filed crest was the Warden's tower.
- The player can recruit him now (`RECRUIT_CALEN`), after the night, or not at all. If refused, he follows at a distance and reappears in Act II.
- His pack holds his **sealed orders** (see `companions.md`: `DISCOVER_CALEN_ORDERS`). A player who searches it while he sleeps, or who gets the truth out of him, learns them.

**The cellar.** If the player gets past the bolt (or persuades Hedda), they find **Bram Ruel** chained to a pillar: a big man gone the color of candle wax, eyes filmed pale blue, lips blue, silent, frost feathering his beard. He does not struggle. He turns his head toward the reliquary's warmth like a plant toward light. Hedda has been feeding him broth he cannot swallow and singing to him every night. Report `DISCOVER_HEDDA_CELLAR`.

- Hedda, confronted, doesn't deny it. "He came back. Fourteen days ago. He walked in the door and sat down by the fire and he hasn't said a word since. He's in there. I know he's in there."
- **This is the first social encounter.** What the player does with Bram matters much later (Act V). Possible outcomes (record `bram`):
  - **Untouched:** leave them be. Bram breaks loose in 1.4 regardless.
  - **Freed:** with Hedda's consent, the courier gives Bram a gentle end: warmth, words, Hedda holding him. One quiet way: press the *sealed* box's warmth to his chest. For a moment his eyes clear. He says "Hedda," and then he goes still, at peace. Report `SOCIAL_HEDDA_MERCY`. Hedda weeps and is grateful. This is not killing for `ACH_NO_SWORD_DRAWN` purposes. It is a release that Hedda asked for.
  - **Restored:** open the box and hold the Kindling to him. The frost melts from him in a hiss of steam; Bram gasps, coughs, weeps, *lives*. He is weak and remembers little, but he is back. Report `SOCIAL_HEDDA_MERCY`. This breaks the first instruction (see above). Hedda would die for the courier now.
  - **Killed:** cutting Bram down against Hedda's wishes. Set `killed_someone`. Hedda will not forgive it. She closes the inn door on the courier at dawn.

---

## 1.4 THE NIGHT VISITORS

Load `game/encounters.md` and `world/creatures.md` now. The full encounter is `ENC_ROAD` in `encounters.md`. The shape of it:

Around midnight the rain stops. The silence that follows is total. The peat fire burns without crackling. Then the lantern above the door begins to gutter, though there is no wind.

Outside, **eight Hushed** have walked up out of the dark: the missing of Greyholt, in nightclothes and work clothes, barefoot, pale, filmed eyes glowing faint blue. They stand around the inn in silence, then put their palms flat on its walls and windows. Frost spreads from their hands across the glass.

```
[IMAGE_TRIGGER]
ID: IMG_FIRST_HUSHED
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Original dark-fantasy illustration inspired by
late-1980s fantasy arcade cabinet artwork.

SCENE:
Night, a lone stone inn on a black hillside, one lantern guttering above
its door. Around it, a ring of barefoot villagers in nightclothes stand
motionless, their skin candle-white and their eyes glowing pale electric blue,
palms pressed flat to the walls and windows. Frost spreads in feathered
fans from their hands across the glass. Warm orange firelight inside, cold blue
outside. Low mist. The courier's silhouette is visible at a frosted window,
from outside looking in.

Do not reveal undiscovered information.
(The Hushed are only "the pale villagers" to the player so far.
Show no crown, no queen, no mountain monastery.)

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_FIRST_HUSHED
PAIRED WITH: IMG_FIRST_HUSHED
STATUS: OPTIONAL (see game/image-triggers.md §7)
LENGTH: 5 seconds
MOTION: frost crawls in feathered fans across the window glass from the
pressed white palms; the lantern above the door gutters and dims; the
villagers are utterly still except for one who slowly turns its glowing
blue eyes toward the viewer.
CAMERA: very slow push-in toward the frosted window.
[/VIDEO_TRIGGER]
```

- **What they want:** the warmth. They are drawn to the box and to living heat. They do not bite or claw. They grip, and their grip steals warmth and voice. A person held too long goes numb, silent, and begins to become one of them.
- **What hurts them:** fire and loud sound. They recoil from flame and flinch from noise. **The chapel bell** is a weapon, and a Scholar or Envoy may guess why: "a silence that hates noise". Killing them is possible (they are frail flesh), but they are the people of Greyholt.
- **Bram** breaks his chain during the siege (unless he was freed or restored) and comes up the cellar stair toward the warmth. Hedda throws herself in front of him.
- **Calen** fights if present: efficiently, grimly, trying not to kill ("They're farmers, not soldiers.").
- **A Scholar** has their first real use for magic here: NER to relight the guttering lantern, or to make the nearest Hushed flinch; SAEL to feel where the next one is pressing. At rank I it's barely enough, and that's the point. Roll pivotal castings (`rules.md` §4).

**The Moor variant:** if the courier is caught outside, the Hushed walk out of the fog on the open moor. The terrain is a stone sheepfold, a peat stream, a lightning-dead oak, and the frost line itself (sound dies inside it). Greyholt's lantern is visible a mile away.

**Resolution:** the Hushed withdraw at the first grey of dawn, walking north toward the mountains. Report `ENC_ROAD_SURVIVED` if the courier lives, and `ENC_ROAD_CLEVER` for an ingenious resolution (the bell, a ring of lamp-oil fire, luring them with heated stones into the stable and barring it, hiding the box's warmth in the cold cellar, and so on). Record whether the courier killed any of them (`killed_someone`).

This is the first combat and the **tutorial set piece**. It should be frightening, fast (3 to 6 decisions), and it should teach two things without stating them: **fire and noise drive the Hushed back; their touch steals voice and warmth.** When the door starts to give, offer the first decision menu, with three lateral approaches (for example, *hold the door with the table and blades*, *run for the chapel bell*, *pour the lamp oil across the threshold and light it*) plus the wildcard. A Warden reads the room unprompted: two doors, one choke point, the oil barrel. It must cost or reveal something: a wound, a Hushed face Hedda recognizes, the cellar, Calen's Southern drill showing.

---

## 1.5 DAWN AT GREYHOLT

Night count drops to **3**. If the courier is Grievous, Hedda's care (if she's friendly) brings them back to Wounded. It cannot mend them fully (`rules.md` §5). This rest is part of the same night.

- **Hedda** (if the courier helped her or showed mercy): provisions, a heavy fleece-lined cloak (warmth: it helps against numbness), and information. *Soldiers passed north four days ago: twelve of them, and a gentleman in grey who paid in Southern silver and asked about couriers.* She also mentions *a girl called Wren, from Hollin's Ford, who's been stealing from the empty houses. Half-wild. If you see her, tell her there's a bed here.* And: *"The waystation at the Split is a day north. The brothers of Saint Hollis used to keep it. God knows who keeps it now."*
- If the courier broke her trust, she gives nothing but the last line, from behind the door.
- If Bram was **restored**, he says one useful thing, hoarse: "The singing. Under the mountain. It's asking for something back."
- **Calen**, if not yet recruited, asks again, more directly.
- The horse, if she came this far, can go on until the Split.

**Leaving Greyholt northward** ends Act I. Report the Act I batch with `REACH_WILDERNESS` (`scoring.md` §3). Load Act II.

---

## If the player does something else

- **Goes back south** at any point in Act I: let them, and give them one chance to reconsider ("The rain is at your back now. It feels like permission."). If they continue, the ending is `THE ROAD SOUTH` (`game/endings.md`).
- **Opens the box:** follow *The Reliquary*, above. The Kindling can end the Night Visitors outright, with one flare. That is spectacular, costs a flare, and makes the Choir aware.
- **Attacks Hedda or Calen:** Hedda fights with the axe, then flees. Calen disarms rather than kills unless the courier is lethal, then leaves (status `left`, trust -3). He reports the courier to Dask as dangerous: Wardens aware, and Dask comes to Orun expecting a fight.
- **Burns the inn, the village, the Hushed:** allowed. The consequences are real: `killed_someone`, Hedda's hatred, Calen's disgust (trust -2), and the Choir hears of a *burner* on the road (choir -1, aware).
- **Heads straight for the mountains cross-country:** the Karrow is impassable for days without the pass, the Miners' Road or the Blackwater. Point them at the map. Do not stop them if they insist, but it costs nights.
