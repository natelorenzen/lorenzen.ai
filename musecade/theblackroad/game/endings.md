# THE BLACK ROAD: Endings

Eleven endings. None is good or bad; each is a price someone pays. Never label one as a win or loss.

**Every ending follows this sequence:**

1. **The moment:** 100 to 200 words narrating what the courier does and what it costs.
2. **The ending image** (its trigger below). It is always generated, even if the budget is spent. If motion clips are possible (`core/image-style.md` §5), follow it with `VID_ENDING`: 5 seconds animating that image, with one slow camera move and the ending's single most important motion (the crown igniting, the spark rising, the mist rolling, the traveler walking on).
3. **The epilogue:** 120 to 220 words assembled from the *Epilogue* notes below plus the fates of companions, factions, Greyholt and the Queen, drawn from state. Past tense, like a chronicle. The last line should echo the road.
4. **Complete the run** with the ending's **ID** (`game/gameover.md`) and print its journey-complete screen, or its death screen.
5. **Evaluate achievements** first, using `game/achievements.md`, so that they are included in the completion batch.

**Universal epilogue fragments** (use the ones that apply):

- **Greyholt:** if Bram was restored, *"Bram Ruel kept the Last Lamp lit for thirty more winters, and never once let it go out."* If he was freed, *"Hedda Ruel buried her husband under the chapel bell and rang it every new moon."* If he was killed, *"Hedda Ruel closed the Last Lamp and went south, and the lamp went out."* Otherwise, as fits the ending.
- **Calen:** loyal and alive, with Liss saved: *"Calen Marr took his sister south in the spring. He never wore a Warden's colors again."* Alive without her: he stays north, *"to keep the road."* Betrayed: he is *"paid, promoted, and never seen to smile."* Dead: *"The fox was found in his fist."*
- **Wren:** kept warm and alive: *"Wren went back to Hollin's Ford and opened a waystation, and she hummed in it every day, loudly, out of spite."* Hushed: *"Some nights, travelers on the Split hear a girl humming in the snow."* Dead: as fits the ending.
- **Oswin:** alive: *"Brother Oswin wrote a very long, very bad poem about the whole affair, and it was sung in the South for a century."* Dead: *"His lantern was hung in the Queen's Road, and it is lit every new moon."*
- **Dask:** alive with the Kindling: see `THE CROWN OF CHAINS`. Alive without it: *"returned south empty-handed and was quietly retired to a very small house."* Dead: *"The Southern Throne sent no one to ask."*
- **Serith:** doubted and alive: *"Serith the Unburnt went home to Saltcombe and planted the burned fields."* Undoubted: follows the Hush's fate.
- **The Order:** Hesk dead on the stair, the Order ended, or the Order continuing, as fits.

---

## THE LAST FLAME

**ID:** `ENDING_LAST_FLAME` · **fate:** sacrificed

*The courier sets the Kindling in the Crown and takes the throne.* Fate: sacrificed.

**The moment:** Maelis thanks them and gives up the Crown. She crumbles to warm ash as it leaves her head. The Kindling, set against the blue jewel, catches: the Crown flares white-gold. When the courier puts it on, there is no pain at first, only warmth, then a great deal of it. The lattice blazes back to life under the glass, line by line, and the blue sea sinks away into the dark. The courier sits. They are the throne now. They will be for a very long time.

**Epilogue:** the seal holds for another age. Orun's lanterns burn. The road north is safe by spring. Travelers who reach the Ember Throne in later centuries report that the bearer sometimes speaks, and remembers their name, and the name of every companion who walked with them. Companions who lived visit once. Most cannot bear to visit twice.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LAST_FLAME
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
The courier (exact appearance, gear and injuries) seated upright on the black
obsidian throne, wearing the black iron crown of flames, now blazing white-gold,
the blue jewel at its brow. Fire pours from them into veins of gold across a
black glass floor, pressing a vast pale blue sea back into the darkness below.
Their eyes glow. Their expression is calm. Any surviving companions stand
small at the foot of the stair, looking up. Majestic, tragic, heroic.

[/IMAGE_TRIGGER]
```

---

## THE BORROWED FIRE

**ID:** `ENDING_BORROWED_FIRE` · **fate:** lives

*A companion volunteers, the courier freely gives them the Kindling, and they take the throne.* Fate: the courier lives.

Only a companion who volunteers, as their arc allows (`companions.md`, *Sacrifice*), can take this role. The courier cannot order it. Play the volunteering with care: it should cost the courier something to accept.

- **Calen:** "I carried torches at Saltcombe. Let me carry one that's worth it." If Liss was saved: "Tell her I kept the road."
- **Oswin:** "It should have been one of us from the start. It should have been me. I chose you because I was afraid. I'm not now. Well. I am. Give it here."
- **Wren:** "I'm half cold already. Let me be warm forever." (If her Hushing was cured, she does not volunteer.)

**Epilogue:** the seal holds. The courier walks back up the Stair of Ash alone, or with whoever is left, and out into the first morning after the new moon. They collect their 40 crowns at Orun and do not know what to do with them. Name the companion on the throne in the chronicle, with love. Future travelers who reach the throne say the bearer asks after the courier.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_BORROWED_FIRE
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
The volunteering companion (exact description from companions.md) seated on
the black obsidian throne, wearing the blazing black iron crown of flames,
golden fire pouring from them into the glass floor. Below the stair, the
courier stands looking up, one hand half raised in farewell. Firelight on tears.
The pale blue sea sinking into darkness below. Tender, tragic, vast.

[/IMAGE_TRIGGER]
```

---

## THE STOLEN FIRE

**ID:** `ENDING_STOLEN_FIRE` · **fate:** lives

*Someone else takes the Crown because they wanted it: Dask's ambition, an undoubted Serith's deception, or another deceived or coerced into wanting it.* Fate: the courier lives.

**The moment:** most often it's Dask. The courier sets the Kindling in the Crown and offers it to him, or lets him take it. He puts it on with a conqueror's smile, and then the Crown *takes him*: he is drawn up the stair and onto the throne, and fire pours from him into the lattice as he screams, and then as he stops screaming. The seal holds. Adapt for whoever took it.

**Epilogue:** the seal holds, burning a bearer who did not know what he asked for. The Southern Throne receives a letter from the courier (or no letter at all) and sends no more Wardens north. In time, pilgrims come to the Ember Throne to see *the Inquisitor Who Wanted Fire*. The chronicle does not say whether the courier sleeps well.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_STOLEN_FIRE
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

SCENE:
The one who took the crown (for Dask: a lean grey-haired man in a grey
inquisitor's coat over Southern armor) seated rigidly on the black obsidian
throne, the black iron crown of flames blazing on his head, fire pouring from
him into a glass floor, his face caught between triumph and horror. The
courier stands at the foot of the stair in shadow, watching, face unreadable.
Ember light, cold blue below, moral ambiguity.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

---

## THE LONG QUIET

**ID:** `ENDING_LONG_QUIET` · **fate:** either

*The courier speaks* anna vaelun*, lifts the Crown from Maelis with her consent, opens it, and carries the Stillheart down to the Cradle to give it back.* Fate: either. The hidden solution.

**The moment:** the words. The Crown's two halves unfold like hands. The Stillheart, freed, is cold enough to burn, and it sings. Maelis, uncrowned, says, "Oh. It's quiet." Then she is ash, and she is smiling. The ice stair; the blue sea parting (or not; see 5.3 D); the Cradle, a hollow of ancient ice shaped exactly around an absence. The heart goes back. The Hush breathes out once, a sound felt in the bones of the mountain, and **goes to sleep**. The blue light dims to nothing. The Kindling, no longer needed, rises out of the box like a spark from a fire, floats up into the dark, and goes out, or stays, a warm coal, if the courier closes a hand on it.

**Epilogue:** no one burns. The Crown is two halves of black iron on an empty throne. The Hushed who were taken within the last season wake where they stand, confused and cold and alive: pilgrims on the stair, the villagers of Greyholt, Liss, Anneke Crane in the shallows of the Blackwater. Those taken long ago simply lie down and rest. Veyr's ash-figures crumble into the snow, and in spring the valley is green. The Order of the Last Lantern has nothing left to keep. If a companion carried the heart down, say what the Cradle took from them, or did not. The Black Road becomes an ordinary road.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LONG_QUIET
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
Deep inside a vast cavern of ancient blue ice, the courier (or the companion
who carried it) kneels and places a glowing pale-blue stone into a hollow
shaped exactly to hold it. Around them, the ice is full of countless sleeping
human faces with closed eyes, peaceful. One small orange spark drifts upward
into the darkness above. Silence made visible: soft blue, one warm point of
light, reverent composition.

[/IMAGE_TRIGGER]
```

---

## THE SECOND BURNING

**ID:** `ENDING_SECOND_BURNING` · **fate:** dies

*The courier breaks the Crown open without the words, or turns its fire on the Hush as a weapon.* Fate: the courier dies.

**The moment:** the Crown cracks, or the courier raises it like a torch. Three hundred years of banked fire come out of it at once. It is the most beautiful thing they have ever seen. The blue sea boils. The Hush does not scream. It is silence, and silence doesn't. It simply *ends*, burned out of the mountain. So does everything else in the cavern.

**Epilogue:** the mountain burned for a year. Orun is gone. The fire came down the Queen's Road into Veyr and melted the ash-figures into glass. The Karrow glowed red at night as far south as Harrowgate, and the snows did not return for a decade. In the South they call it the Second Burning, and they argue about the courier the way they argue about Maelis. The Hush is gone forever. Nothing will ever again come up out of the deep. Nothing will ever again sleep there, either.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SECOND_BURNING
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A mountain range at night erupting in colossal pillars of orange-gold fire
from every crack and peak, a cliff monastery silhouetted and burning, a dead
city in the valley below lit red. The sky is crimson and black. In the sky,
faint and vast, the fading ghost-shape of a pale blue eye closing forever.
Apocalyptic, awe-struck, no human figures visible.

[/IMAGE_TRIGGER]
```

---

## LONG LIVE THE QUEEN

**ID:** `ENDING_LONG_LIVE_THE_QUEEN` · **fate:** lives

*The courier gives the Kindling to Maelis herself.* Fate: the courier lives.

**The moment:** she takes the coal in a hand of charcoal and bone and presses it to where her heart was. Fire runs through her like dawn through a window. Ash falls away: skin, hair, a face, young, fierce, the face on the mural. The lattice blazes. The Queen of Veyr stands up from the Ember Throne for the first time in three hundred and seventeen years, the Crown blazing on her brow, and the seal holds *as long as she wishes it to*. She looks at the courier. "Thank you. I suppose I owe you a kingdom." It is not entirely clear whether that is a promise or a threat.

**Epilogue:** Maelis Veyr came down the Queen's Road at dawn, and the ash-figures of Veyr turned to watch her pass. By summer she had a court of refugees, Choir penitents, Order monks and Southern deserters. By winter she had an army. The seal holds, because she holds it, and she answers to no one. In the South, the Throne sends envoys, then Wardens, then envoys again. The chronicle of the courier ends: *they were given a seat at her table, and they took it, or they did not, and either way she remembered who had lit her.*

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LONG_LIVE_THE_QUEEN
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A young fierce queen with living fire for hair, wearing a black iron crown of
flames with a cold blue jewel, rising from an obsidian throne, charcoal
and ash falling from her like a shed skin to reveal a gown of flame. She
extends one hand toward the courier, who kneels or stands at the foot of the
stair. Golden light floods the cavern. Triumphant and unsettling.

[/IMAGE_TRIGGER]
```

---

## WHITE SILENCE

**ID:** `ENDING_WHITE_SILENCE` · **fate:** either

*The Queen's fire goes out and nothing replaces it: refusal, walking away, the Kindling smothered, lost to the Hush or destroyed, or simply too late with no other choice made.* Fate: either. The courier may walk out alive, or be taken.

**The moment:** the last vein of fire goes out. The Queen is ash. The glass floor frosts from beneath, white, and then the silence comes up through it: not dark, but *pale*. If the courier stays, the cold takes voice first, then warmth, then names (`died: true`, and they are Hushed). If they run, they reach the surface at dawn to find Orun silent, its bell frozen mid-swing.

**Epilogue:** the Hush rose slowly, the way snow falls. It took Orun that morning, Veyr's valley that week, Greyholt by midwinter. It did not burn or break anything. It simply made things still. By the second year the South was building fires along the Harrowgate road and ringing bells all night. The Choir, if any remained, walked north singing to meet it. Whether the Hush is a mercy is a question now asked by people who are running out of time to answer it. If the courier lived: *they were one of the last people in Eldervale to remember the Queen's name.*

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WHITE_SILENCE
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A vast wave of pale luminous white-blue mist, taller than mountains, rolling
slowly over a snow-covered valley, a small village, and a long black road.
Everything it touches is frosted white and perfectly still: trees, houses, a
frozen bell mid-swing. At the edge of the mist, a tiny figure (the courier if
alive) looks back. A single fading ember glows somewhere in the snow.
Eerie, beautiful, quiet.

[/IMAGE_TRIGGER]
```

---

## THE CROWN OF CHAINS

**ID:** `ENDING_CROWN_OF_CHAINS` · **fate:** lives

*The courier sells or surrenders the reliquary to Lord-Inquisitor Dask (Act II, IV or V) and walks away from it.* Fate: the courier lives. A courier who hands it over and then tries to get it back is still playing; see `acts/act-2.md`.

**The moment:** Dask weighs the box in his hands and smiles, and the Kindling (surrendered, not taken) stays bright. "A sensible person. How rare." The courier gets their gold, and an escort south.

**Epilogue:** Dask carried the Kindling up to Orun with a condemned man in chains, who took the Crown willingly in exchange for his children's pardon. The Crown asks only that its bearer want it, not why. The seal holds. With the Crown's fire proven, the Southern Throne's forgers spent twenty years learning to draw on it. The first *ember-lance* burned a rebel city in the year 340. Nobody in the South calls it the Third Burning, officially. The courier's gold spent as well as any. (If the courier was captured instead of paid, Dask offered them the same bargain first. Tell whether they took it.)

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_CROWN_OF_CHAINS
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
On an obsidian throne in a fire-veined cavern, a gaunt prisoner in iron
chains wears a blazing black iron crown of flames, fire pouring from them into
the floor. Before the throne, soldiers in black-and-white armor with white
tower banners stand in ranks, and a lean grey inquisitor in a grey coat holds
up a lantern of captured fire, studying it. Cold, imperial, ominous.

[/IMAGE_TRIGGER]
```

---

## THE WHITE CHOIR

**ID:** `ENDING_WHITE_CHOIR` · **fate:** sacrificed

*The courier gives the reliquary to Serith, to a Listener, or into the Hush (smothering the Kindling), or walks into the Hush themselves.* Fate: sacrificed.

**The moment:** Serith takes the box as though it were a sleeping child and carries it into the snow, singing, and pushes it deep into a drift. The warmth goes out of it slowly. The courier, if they stay, feels the song for the first time: it is very peaceful. It asks nothing. It would like them to stop.

**Epilogue:** with the Kindling smothered, the Queen's fire failed at the new moon, exactly as in `WHITE SILENCE`, but faster, because the Choir sang the Hush up to meet it. The courier walked north with the Choir, or south alone. Tell which, and whether they still remember their own name. The Choir grew. It was the only thing in Eldervale that did.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WHITE_CHOIR
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A long procession of white-robed figures walking up a snowy mountainside at
twilight toward a vast pale blue glow in the rock, singing, mouths open. At
the front, a tall woman with a half-burned face carries a black iron box
against her chest, frost creeping over it. Among the singers, [the courier].
Serene, cold, haunting.

[/IMAGE_TRIGGER]
```

---

## THE ROAD SOUTH

**ID:** `ENDING_ROAD_SOUTH` · **fate:** lives

*The courier abandons the mission and leaves, with or without the box.* Fate: the courier lives.

**The moment:** the road south is easier. It always is.

**Epilogue:** depends on what they left behind. If they kept the box, it stayed warm in a cupboard in Harrowgate for years, and on the night of the new moon it cried. If they left it somewhere, someone found it: say who, from state (Dask's Wardens, the Choir, Wren, Oswin). By default the Queen's fire failed at the new moon, and the Hush came down slowly (see `WHITE SILENCE`), and by the time it reached Harrowgate the courier was old enough to find it almost welcome. If a companion took the box on to Orun without them, that companion's fate becomes the ending's heart. Tell it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ROAD_SOUTH
TYPE: ENDING
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A lone traveler (the courier, seen from behind) walking south down a long
black-paved road through autumn moorland toward a warm-lit distant town at
sunset. Behind them, far to the north, dark mountains under storm cloud, and
in their cracks a faint pale blue glow. Melancholy, open, quiet.

[/IMAGE_TRIGGER]
```

---

## A NAME IN THE SNOW

**ID:** `ENDING_NAME_IN_THE_SNOW` · **fate:** dies

*The courier dies.* Fate: dies. Available in every act.

**The moment:** narrate the death honestly and without cruelty: what killed them, what they saw last, what was in their hands. Then stop.

**Epilogue (built from state):**

- **The box:** who took it from the body. Dask's Wardens, the Choir, a companion, the Hush, or nobody: it lay in the snow and the snow covered it.
- **Companions:** did anyone carry on? A loyal Calen or Oswin, or a kept-warm Wren, may take the box to Orun. If so, give the ending they would most plausibly reach (usually `THE BORROWED FIRE` with themselves on the throne), told as legend.
- **Eldervale:** without the Kindling at the throne, the seal failed at the new moon (as `WHITE SILENCE`), unless a companion carried on.
- **The last line** names the place they fell, e.g. *"There is a cairn at the Sorrow Bridge. Someone keeps a lamp in it."*

Then print the **death screen** (`game/gameover.md`), not the journey-complete screen. Complete the run with `died: true`.

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on death

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
The place where the courier fell [exact location], moments after. Their
[weapon or tool] lies in the snow beside a dark shape half-covered by drift.
The black iron box [still there, glowing faintly | gone, leaving only a
melted hollow in the snow]. Wind, falling snow, one ember of light. Quiet,
tragic, dignified. No gore.

[/IMAGE_TRIGGER]
```

---

## Destroying the Kindling

The Kindling can be destroyed: smothered under snow or water for a whole night, crushed under something enormous, or dropped into the Gullet or the Blackwater. When it is destroyed:

- It dies with a sound like a sigh. The courier feels it in their chest (more so if they opened it).
- The seal cannot be renewed. The Queen's fire fails at the new moon.
- If the courier goes on to the throne anyway, only `THE LONG QUIET`, `THE SECOND BURNING` (breaking open the Queen's own dying Crown) or `WHITE SILENCE` remain.
- Otherwise, when the courier stops, the ending is `WHITE SILENCE` (if they stay in the north), or `THE ROAD SOUTH` (if they leave).
