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

Who is in this room depends on everything before. Use the **first** variant that applies. If several apply, combine them, and let them collide with each other. Run it as `ENC_THRONE` (`game/encounters.md`), in 3 to 6 decisions.

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
- **Report** `QUEEN_SPOKEN`, `ENC_THRONE_*` and any remaining events, then complete the run with the ending (`scoring.md` §4). Fire the ending's image (`endings.md`), narrate the ending and epilogue, and then print the game-over screen.
