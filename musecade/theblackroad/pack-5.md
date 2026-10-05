# THE BLACK ROAD · PACK-5 · BUILD 1.5-41b517c

Bundle for: Act V begins (`REACH_THRONE`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: THE CROWN

*The player confronts the central dilemma. Different decisions produce different final confrontations.* Target: 8 to 12 minutes, 4 to 8 meaningful decisions.

`game/endings.md` is loaded alongside this file. Every path out of this act ends in one of its endings.

Slow down here. Let the cavern breathe. The player has spent an hour getting to this room. Give them time to look, talk and decide. Then make the decision matter.

---

## 5.1 THE EMBER THRONE

The arch opens onto a cavern so large its roof is lost in darkness. The floor is a single sheet of black glass, and it is **transparent**. Far beneath it lies **a sea of pale blue light**, slowly moving, like the surface of a lake seen from underneath. In it, if one looks long enough, drift **shapes**: faces, hands, the outlines of people, thousands of them, and among them something vast that has no outline at all.

Holding that sea down is **a lattice of fire**: lines of orange-gold flame running through the glass like veins, all converging on the center of the cavern, where a stair of black glass rises to **the Ember Throne**.

On the throne sits **Queen Maelis Veyr**. Three hundred and seventeen years of burning have left her a figure of charcoal and bone wrapped in a gown that is now only embers, glowing and fading slowly, like breath. On her head is **the Ember Crown**: black iron worked into flames, and at its brow a **blue jewel** the size of a hen's egg that shines with a cold light fire cannot touch. The lattice's flames run *from* her and *into* the floor. They are thin now, flickering, and some have gone out. Where they have gone out, the blue sea presses up against the glass.

Behind the throne, a **stair of ice** winds down through a gap in the lattice into the blue: the way to **the Cradle**, the ice-cave where the Stillheart was cut out more than four centuries ago.

- If the box is present and sealed, it grows **hot** enough to smoke in its bands. If it is open, the Kindling blazes and **leans** toward the throne like a flame in a draught.
- SCHOLAR SEES: the lattice is a binding circle of classic Veyric form, and it is drawing on its center, the Queen, like a lamp drawing on the last of its oil.
- WAYFARER SEES: the ice stair is sound, but each step down is colder, and the blue sea's surface at the bottom *moves aside* for something coming up.
- WARDEN SEES: no enemy yet. Every exit, all two of them. The glass would hold a regiment.
- ENVOY SEES: the Queen's head is turned very slightly toward the courier. She is aware.

```
[IMAGE_TRIGGER]
ID: IMG_EMBER_THRONE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A colossal underground cavern. The floor is black glass, and far below it
glows a vast sea of pale electric-blue light full of drifting human shapes.
Veins of orange-gold fire run across the glass toward a black glass stair.
At its top, on a throne of fused obsidian, sits a queen made of charcoal and
bone in a gown of glowing embers, wearing a black iron crown of flames set with
a cold blue jewel. The fire veins are thin and some have gone dark. Tiny in the
foreground, seen from behind, the courier (and present companions), holding
the black iron box, whose seams glow orange. Awe, heat against cold, enormous
scale.

Do not reveal undiscovered information.
(If DISCOVER_STILLHEART is not reported, the blue jewel is just a jewel:
do not show it as a heart or connect it visually to the sea.)

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_EMBER_THRONE
PAIRED WITH: IMG_EMBER_THRONE
STATUS: HIGH PRIORITY (see game/image-triggers.md §7)
LENGTH: 5 seconds
MOTION: fire pulses along the golden veins in the glass floor toward the
throne and gutters in places; far below, pale shapes drift in the blue sea;
the ember gown breathes light; at the very end the charcoal queen's head
turns slightly toward the viewer.
CAMERA: slow push-in from the travelers toward the throne.
[/VIDEO_TRIGGER]
```

---

## 5.2 THE QUEEN

Maelis can speak if spoken to, respectfully or otherwise. Her voice is a whisper with a crackle in it, like a log settling. Report `QUEEN_SPOKEN` once the courier has a real exchange with her.

- **Addressed in Old Veyric** (a Scholar, or anyone who learned and uses the hymn, the milestone verse, or *anna vaelun*): she answers in Veyric, then in the common tongue, and she is warmer and more candid. Report `ACH_QUEENS_TONGUE` at game over.
- **What she says, as the conversation earns it:**
  - "You carried it all this way. They didn't tell you, did they. They never told me either. My father simply put it on my head."
  - On the Burning: "A thousand came to the square and gave themselves. It was not enough. So I took the rest. I have had three hundred years to decide whether I was right. I haven't."
  - On the jewel, if asked (report `DISCOVER_STILLHEART` if not already): "It is not a jewel. It is the heart of the thing below. My great-grandfather's miners cut it out while it slept. It has been trying to come home ever since."
  - On another way, if asked about giving it back, or if the courier says *anna vaelun*: "The Crown opens. The words are *anna vaelun*. But it will not open on a living head, and I could never take it off. You could lift it from me, if I let you, and I would die. Then someone would have to carry the heart down to the Cradle and put it back where it was taken. The deep may take them. It may not. I never learned how it feels about us." If the courier did not know the words, they now know them.
  - On what she wants: "To finish. Whatever you choose, choose it before my fire does."
  - **If handed the Kindling herself:** see `LONG LIVE THE QUEEN`. She can tell the courier this is possible only if asked directly, "Is there a way *you* could hold it?" She answers honestly: "Give me the coal, and I will burn as I did the day I sat down. Young, and whole, and for another age. I would not ask it. I am telling you it is possible."
- **She will not beg, and she will not lie.**
- **To a Scholar** she can teach any Word they are missing, if asked, in exchange for their name, spoken in Veyric. `WORD LEARNED` as usual. It is her last gift, and it can complete the six (`ACH_LAST_SPEAKER`).

---

## 5.3 THE CONFRONTATION

Who is in this room depends on everything before. Use the **first** variant that applies. If several apply, combine them, and let them collide with each other. Run it as `ENC_THRONE` (`game/encounters-5.md`), in 3 to 6 decisions.

### A. Dask

If Dask got the box (the Crown of Chains was refused, but Calen betrayed; or he took it in the siege), or followed the courier down: **Lord-Inquisitor Varo Dask** arrives through the arch with whatever Wardens survived. He is cut and blood-streaked and still courteous.

- He does not believe in the seal. He believes in power. "Three hundred years of priests telling kings what's under the mountain. What's *on* the mountain is a crown that burns a kingdom. The South will have it."
- **His plan:** he wants the Kindling set in the Crown and the Crown on a head he controls, ideally his own, and then taken south. He has not grasped that the Crown binds its wearer to the throne.
- **Ways through:** fight him (Wardens are good, but the glass floor is treacherous near the dark veins); trade with him; or let him have exactly what he asked for. **If Dask puts the relit Crown on his own head willingly, it binds him to the throne:** `THE STOLEN FIRE`.

### B. Serith

If Serith was doubted and came to see for herself, or leads the Choir down: **Serith the Unburnt** comes through the arch alone or with singers.

- Undoubted: she wants the Queen's last fire to go out and will try to smother the Kindling, or break the lattice with the Choir's song, which makes the dark veins spread. Fight, persuade, or outpace her.
- Doubted: she stands at the edge of the glass, looking down at the faces in the blue sea, searching for her children. She may help, or ask to be the one to carry the heart down (a `THE LONG QUIET` variant: "Let me be the one who gives it back. I have been trying to walk into that silence for six years. Let me walk in with a gift.").

### C. A betrayal comes due

- **Calen** with the box, bound for Dask (combine with A).
- **Wren** walking the box down the ice stair into the blue. She cannot open it, but the Hush wants it smothered. She can be called back (warmth, trust, her name, the truth about her mother's voice), followed, or stopped. If she reaches the bottom with it, the Kindling goes out in the Hush: `WHITE SILENCE`, unless the courier gets there first.

### D. The Hush rises

If none of the above applies, or if the Queen is refused, or the courier lingers too long: **the Hush comes up to meet them.** The blue sea bulges against the glass where the lattice is dark, and the glass sings, cracks and parts. Up through it rises a vast, slow shape of pale light made of all the faces it has taken, and it speaks with all their voices at once.

- **It remembers Greyholt.** Check `bram`:
  - `freed` or `restored`: one voice rises clearer than the rest, a big man's gentle voice: *"This one gave warmth. Let them come."* The faces part. **The way to the Cradle opens and stays safe.** The Hush waits, to see what the courier will give.
  - `killed`: *"This one killed me."* The Hushed faces surge up through the cracks toward the courier. Every approach to the Cradle becomes Desperate.
  - `untouched`: the Hush is simply vast and indifferent, and the Cradle is Risky.
- It does not fight like an enemy. It **takes**: warmth, voice, memory. Every exchange in its presence without fire costs numbness.
- It can be driven back with the Kindling's flares, the Crown's fire, or noise. It can be spoken to. It understands *giving back*.
- **A Scholar who speaks ANNA VAELUN** to it (a great casting, rolled) makes it stop and *listen*. The way to the Cradle becomes safe for this scene, even if Bram was killed.

### Too Late variant

If the courier arrives after the Queen's fire failed (`act-4.md`, *Too Late*): the lattice is dark, and Maelis is ash in the shape of a queen. **She cannot speak** (no `QUEEN_SPOKEN`, no `LONG LIVE THE QUEEN`). The Crown still sits on her skull. The Hush is already risen and fills the cavern like fog. Play variant D at full strength, and combine it with anyone else who came. The other endings remain possible, and their epilogues account for the lost night.

```
[IMAGE_TRIGGER]
ID: IMG_FINAL_CONFRONTATION
TYPE: CLIMAX
STATUS: OPTIONAL (fire at the confrontation's turning point, only if the
        budget still leaves one image for the ending)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
Inside the vast cavern of the Ember Throne: [the specific confrontation:
Dask and his Wardens on the black glass floor | Serith and the white
singers | a companion on the ice stair with the box | a colossal rising
shape of pale blue light made of countless human faces]. The courier at the
center with the box or the Kindling blazing orange, companions present, the
charcoal queen on her throne above. Cracks of blue light splitting the black
glass. Maximum drama.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Report `ENC_THRONE_SURVIVED` if the courier lives through the confrontation, and `ENC_THRONE_CLEVER` if they resolved it cleverly (tricking Dask into the Crown, turning Serith, passing the Hush with Bram's voice, calling Wren back, using the lattice's dark veins as a weapon).

---

## 5.4 THE CHOICE

When the confrontation is resolved (or suspended: the Hush waits, and a stalemate can be a pause), the courier chooses. **Do not present these as a list, and never as a decision menu.** They are what can happen. Let the player find their own.

| If the courier... | Ending |
|---|---|
| sets the Kindling in the Crown, lifts it from Maelis, and takes the throne themselves | `THE LAST FLAME` |
| freely gives the Kindling to a companion who volunteers (see `companions.md`, *Sacrifice*), who takes the throne | `THE BORROWED FIRE` |
| lets or tricks someone else (Dask, an undoubted Serith, a deceived Tam) into taking the Crown | `THE STOLEN FIRE` |
| speaks *anna vaelun*, lifts the Crown from Maelis with her consent, opens it, and carries the Stillheart down the ice stair to the Cradle to give it back | `THE LONG QUIET` |
| breaks or forces the Crown open without the words, or turns the Crown's fire on the Hush as a weapon | `THE SECOND BURNING` |
| gives the Kindling to Maelis herself | `LONG LIVE THE QUEEN` |
| refuses everything, walks away, lets the Kindling be smothered, or destroys it, and does not return the heart | `WHITE SILENCE` |
| dies | `A NAME IN THE SNOW` |

**Mechanics that matter:**

- **Lifting the Crown from Maelis** kills her. If she consents, she thanks the courier. If she does not, she can refuse and the Crown will not come away (it will not leave a living head against its wearer's will). She consents to the courier's reasonable plan, and to the Long Quiet at once if it is offered with the words.
- **The Kindling** must be given freely to anyone but its carrier (or the one who opened the box). Taken by force, it dims to nothing: `WHITE SILENCE`, unless the heart is returned.
- **The Crown** kills an unwilling wearer at once. "Willing" means *wanting it*. Dask wants it.
- **The Long Quiet** needs the words (the Litany Door, the journal margin, or the Queen). Without them, prying the Crown open breaks it: `THE SECOND BURNING`. The descent to the Cradle is safe if the Hush let them pass (Bram), Risky if the Hush is indifferent, and Desperate if it is hostile. A companion may carry the heart instead (Wren passes easily; the Hushed know her). If the carrier is Hushed or dies on the way but the heart reaches the Cradle, the ending is still `THE LONG QUIET`, and that person's fate goes into the epilogue.
- **Report** `QUEEN_SPOKEN`, `ENC_THRONE_*` and any remaining events, then complete the run with the ending (`game/gameover.md`). Fire the ending's image (`endings.md`), narrate the ending and epilogue, and then print the game-over screen.

===== FILE: world/creatures-5.md =====

# ELDERVALE: The Hush

## The Hush

Not a creature. The deep silence of the mountains, vast, ancient and cold.

- In the throne cavern it rises as a colossal slow shape of pale light made of all the faces it has taken, speaking with all their voices at once.
- It does not fight. It takes warmth, voice and memory.
- It understands *giving back*, and it remembers warmth given freely.
- Fire and noise push it back. Nothing mortal can kill it except the Second Burning.

===== FILE: game/encounters-5.md =====

# THE BLACK ROAD: Encounters, Act V

## ENC_THRONE: Before the Ember Throne (Act V)

See `acts/act-5.md` 5.3 for the variants: Dask, Serith, a betrayal come due, or the Hush rising.

- **Terrain:** the black glass floor, clear, with **dark veins** where the fire has gone out; the glass there is thin and cracking, and blue light pushes up through it. The **live veins** are too hot to stand on for long. The throne stair. The ice stair to the Cradle. The Queen herself, who can speak and, once, act. Her fire can flare one last time at her will.
- **Clever resolutions:** luring Dask's Wardens onto dark veins; giving Dask exactly what he asked for; turning Serith with her children's names; calling Wren back from the ice stair; walking through the Hush on Bram's voice; asking the Queen for help.
- **Resolution:** the confrontation is resolved or suspended, and the choice comes (5.4).

===== FILE: game/endings.md =====

# THE BLACK ROAD: Endings

Eleven endings. None is good or bad; each is a price someone pays. Never label one as a win or loss.

**Every ending follows this sequence:**

1. **The moment:** 100 to 200 words narrating what the courier does and what it costs.
2. **The ending image** (its trigger below). It is always generated, even if the budget is spent. If motion clips are possible (`game/image-triggers.md` §7), follow it with `VID_ENDING`: 5 seconds animating that image, with one slow camera move and the ending's single most important motion (the crown igniting, the spark rising, the mist rolling, the traveler walking on).
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

===== FILE: game/achievements.md =====

# THE BLACK ROAD: Achievements

Evaluate every achievement at game over, before sending the completion batch. The only exception is `ACH_WHATS_IN_THE_BOX`, which is reported when it happens. Never announce achievements during play. They appear on the game-over screen.

Visible achievements are listed on the Musecade website. Hidden ones are not, and are discovered by earning them.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NO_SWORD_DRAWN` | NO SWORD DRAWN | Complete the adventure (reach Act IV or later) without intentionally killing anyone: Hushed, Wardens, Choir or otherwise. Driving off, disabling, escaping and freeing Bram at Hedda's request all count as not killing. Companions' kills don't count against the courier unless the courier ordered them. | Visible |
| `ACH_OLD_BLOOD` | OLD BLOOD | Discover the complete history of Veyr: `DISCOVER_MILESTONE_VERSE`, `DISCOVER_MINERS_TALLY`, `DISCOVER_CRYPT`, `DISCOVER_BURNING_TRUTH`, `DISCOVER_STILLHEART` and `QUEEN_SPOKEN`. | Visible |
| `ACH_EVERYBODY_LIVES` | EVERYBODY LIVES | Finish (Act IV or later) with every recruited companion alive and not Hushed. At least one must have been recruited. A companion on the throne (The Borrowed Fire) does not count as alive for this. | Visible |
| `ACH_WHATS_IN_THE_BOX` | WHAT'S IN THE BOX? | Open the reliquary in Act I or Act II. Report it immediately. | Visible |
| `ACH_THE_LONG_WAY` | THE LONG WAY | Discover **and travel** the Miners' Road. | Visible |
| `ACH_BEFORE_THE_MOON` | BEFORE THE MOON | Reach Orun with **2 or more** nights left. | Hidden |
| `ACH_UNSCARRED` | UNSCARRED | Finish (Act IV or later) without the courier ever being wounded (`ever_wounded` is n). Numbness that never became a wound doesn't count. | Hidden |
| `ACH_SILVER_TONGUE` | SILVER TONGUE | End three would-be fights with words alone (`words_resolved` ≥ 3). Examples: talking down the Wardens, calming the Cinder Guard with Veyric, turning Tam, persuading Dask to stand aside, calling Wren back, Serith standing down. | Hidden |
| `ACH_LONE_ROAD` | THE LONE ROAD | Reach the Ember Throne without ever recruiting a companion. | Hidden |
| `ACH_THREE_INSTRUCTIONS` | THREE INSTRUCTIONS | Reach the Ember Throne having never opened the box, never surrendered it (even briefly, even to a companion to hold), and never been late (the night count never fell below 0). | Hidden |
| `ACH_OATHBREAKER` | OATHBREAKER | Break all three instructions in one run: open it, surrender it (to anyone, at any point), and be late (the night count falls below 0) or abandon the road to Orun entirely. | Hidden |
| `ACH_UNSEEN` | UNSEEN | Pass through the Siege of Orun from the courtyard to the Lantern Door without being seen by any enemy. | Hidden |
| `ACH_QUEENS_TONGUE` | THE QUEEN'S TONGUE | Address Queen Maelis in Old Veyric. | Hidden |
| `ACH_LAST_SPEAKER` | THE LAST SPEAKER | A Scholar who recovers all six Words of Weight (`game/words.md`). | Hidden |

Achievements may carry modest points (the server decides). Several can be earned in one run. A few are mutually exclusive (`THE LONE ROAD` vs. `EVERYBODY LIVES`; `THREE INSTRUCTIONS` vs. `OATHBREAKER` and `WHAT'S IN THE BOX?`).

===== FILE: game/gameover.md =====

# THE BLACK ROAD: Game Over

## Complete the run
`POST {API}/run/complete {"run_id","run_token","ending":"ENDING_…","died":<true only if the courier is dead>,"events":[…all pending, in order…]}`

It returns `score`, `rank`, `ranked`, `ending_title`, `secrets` (found and total), `achievements` and `leaderboard_url`. Use them exactly. If `ranked` is false, show `GLOBAL RANK: UNRANKED` with the server's `note`. If an event is rejected for a missing prerequisite that truly happened, add it and retry. Otherwise ignore the rejection, silently.

**LOCAL or LINK:** add up the points yourself from `https://lorenzen.ai/musecade/theblackroad/events.json`: each event once, plus the ending, plus `survival_bonus` if the fate is `lives` (or `either` and alive). LOCAL shows `GLOBAL RANK: UNRANKED (LOCAL)`. LINK shows `CLICK TO SUBMIT`, then prints on its own line:
`https://lorenzen.ai/musecade/submit/#g=theblackroad&p=<NAME>&k=<PATH>&e=<ending id>&d=<1|0>&n=<12-char random nonce>&v=<EVENT,EVENT,…>`
followed by `CLICK THE LINK TO ENTER YOUR SCORE ON THE MUSECADE HIGH SCORES.`

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
