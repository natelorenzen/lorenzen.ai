# THE BLACK ROAD · PACK-3 · BUILD 1.5-3666e40

Bundle for: Act III begins (`REACH_VEYR`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: THE DEAD KINGDOM

*The player reaches Veyr and begins discovering what happened.* Target: 10 to 15 minutes, 6 to 10 meaningful decisions.

Night count: arrives at **2** (Pass or Miners' Road) or **1** (Blackwater). A night in Veyr lowers it by 1 at dawn. Climbing to Orun through the night and arriving before dawn keeps it, at a cost (see 3.6).

Load `world/lore.md` at the start of this act. It holds the full history, which the player now begins to uncover.

This act is about **awe and discovery**. The city is a tomb, beautiful and terrible. Let the player wander. Most of what's here is optional, and that is fine.

---

## 3.1 FIRST VIEW OF VEYR

Deliver this on arrival, from whichever direction:

- **From the Pass:** at dusk, rounding a shoulder of the mountain, the whole valley opens below.
- **From the Blackwater:** at dusk, from the lakeside cliff path, the city rises over the black water.
- **From the Deepworks:** up a foundry stair and out onto a high forge-terrace in the middle of the city, at nightfall, with the whole of it spread around them.

Veyr: a great city of black stone in a high snowy valley. Towers, bridges, domes, all silent. **In every street, square and window stand grey figures, tens of thousands of them: the people of Veyr, turned to ash-stone mid-step, mid-word, mid-embrace, three hundred and seventeen years ago.** Snow on their shoulders. In the center rises the **Queen's Spire**. Above the city, on a black cliff, sits the monastery of **Orun**, with a single light burning in it. And in the cracks of the mountain above Orun, a **pale blue glow** pulses, very slowly, like breathing.

```
[IMAGE_TRIGGER]
ID: IMG_FIRST_VIEW_OF_VEYR
TYPE: LANDSCAPE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
An enormous dead city of black stone in a snowy mountain valley at dusk,
towers and domes and bridges, a tall central spire. Its streets are filled
with thousands of grey ash-stone human figures frozen mid-motion. High above
on a sheer black cliff, a small monastery with one warm light. In the
mountain cracks above it, a vast pale electric-blue glow. A crimson and
orange sunset band behind the peaks. In the foreground, seen from behind,
small against the scale, the courier and present companions.

Do not reveal undiscovered information.
(No crown, no throne, no queen, no creature in the blue glow.)

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_FIRST_VIEW_OF_VEYR
PAIRED WITH: IMG_FIRST_VIEW_OF_VEYR
STATUS: HIGH PRIORITY (see game/image-triggers.md §7)
LENGTH: 5 seconds
MOTION: snow drifts down over the dead city; the blue glow in the mountain
pulses once, slowly, like breathing; the single light in the monastery
flickers; the travelers' cloaks stir in the wind.
CAMERA: slow crane up and forward over the travelers' shoulders, revealing
the full valley.
[/VIDEO_TRIGGER]
```

Companion reactions, one line each at most. Oswin crosses himself with a lantern sign: "Home." Wren stops humming, and for the first time says nothing at all. (If her secret is known: the frost mark aches, and she hears the song clearly here.) Calen: "Gods. Which of them would have been children?"

- SCHOLAR SEES: the ash-figures are not statues. There are no chisel marks. The stone preserves the weave of their clothes.
- WAYFARER SEES: fresh tracks through the snow, dozens of bare feet and some booted, all leading toward the Queen's Spire. People are here.
- ENVOY SEES: the figures near the Spire all face it, as if they were listening to someone when it happened.
- WARDEN SEES: no bodies from a battle, no breached walls. Whatever did this was not an army.

---

## 3.2 THE ASH GATE

*(Pass and Blackwater arrivals only. Deepworks arrivals are already inside.)*

The only intact way through Veyr's wall is the **Ash Gate**: a pair of blackened bronze doors thirty feet high, in a gatehouse flanked by four iron braziers. The rest of the wall is sheer, or has slumped into the lake. Run **Puzzle 2: The Ash Gate** from `game/puzzles.md`. It is solved through observation (soot, worn steps, the draft, a jammed chain), and it has trapped braziers for the unobservant.

Alternatives that bypass it (no `PUZZLE_GATE_SOLVED`):

- **Climb** the wall at the lakeside, where it has slumped (Wayfarer: Risky; others: Desperate).
- **The culvert:** a storm drain under the wall, half-choked with ice. It leads under the city and comes up in the **Royal Crypt** (3.4). It is dark and tight, and something Hushed nests in it (a short, frightening scramble, not a full encounter).
- **Force the postern** beside the gate: a Warden with a lever and time. It's noisy, and it wakes the Cinder Guard early (see 3.4).

---

## 3.3 THE HALL OF CROWNS

The great hall at the foot of the Queen's Spire. Its roof is half gone and snow falls onto a floor of red and black marble. **Along its walls runs a mural in enamel and gold leaf, three hundred feet long**: the history of Veyr. Firelight is burning here, because **the White Choir is camped in the Hall**.

**The Choir:** about twenty people in white wool, most of them ordinary, gaunt, grieving refugees; a few pale and silent, half-Hushed; and **Serith the Unburnt** (`npcs.md`). They sit facing the mountain and sing without words. Their song has no rhythm and no end. Wren (if her secret is known) is pulled toward it like a tide.

**Serith** receives the courier without fear. She knows about the box. The Listener's reports, or the Hush itself, told her (if `choir aware`). She is tall, forties, with half her face smooth, shiny burn scar. She lost her children when Southern Wardens burned her plague-struck village, **Saltcombe**, six years ago.

- **Her creed:** the Hush is mercy. Silence without pain, memory without grief. The Queen is a tyrant who burned her own people alive and has held the world in pain for three centuries. "The fire in your coat is the last of her cruelty. Put it out."
- **Her offer:** give her the box, and she will see that the courier and their companions walk out of Veyr untouched. If Wren is Hushing: "And the girl will stop hurting. Ask her. She hears it."
- **Calen and Serith:** if Calen is present, she recognizes him, slowly. He was a Warden at Saltcombe. He carried the torches. This is a powerful moment: Calen's guilt (see `companions.md`), Serith's shaking calm, and a knife's edge between them.
- **Planting doubt** (`SOCIAL_SERITH_DOUBT`): Serith can be moved, not converted. Real arguments work:
  - *The Hush takes memory.* "In the silence, will you remember your children's names?" If Bram was restored or freed and spoke Hedda's name, that is evidence.
  - *Wren* speaking honestly about what the song feels like: cold, and forgetting.
  - Evidence the Hushed suffer: frost-burned, starving, the pilgrims who walked into the lake.
  - The Burning truth from the crypt, used honestly: "She burned them. And the Hush will do the same thing slower."
  - Doubted, Serith will not lead the Choir against Orun (Act IV), and may appear at the throne as a wildcard rather than an enemy.
- **Attacking the Choir** is a massacre of mostly unarmed people. Set `killed_someone` and choir -2, and Serith escapes into the mountain to lead the Hushed against Orun in fury.
- **Giving her the box:** `THE WHITE CHOIR` (`endings.md`).

**The mural.** It runs in order around the hall, and it is the richest history in the game. Describe the scenes, in order, when the courier looks:

1. Miners bringing a **blue star** up out of the mountain.
2. A king at a forge, closing a **circlet** around the blue star. SCHOLAR SEES the Veyric caption: *"THE HEART OF THE DEEP, SET IN THE CROWN OF THE KING."*
3. A great **eye** opening in the mountain. Veyr's people look up in fear.
4. A queen in a crown of **flame**, arms spread; the people around her turning grey.
5. Robed monks carrying **lanterns** up a cliff stair.

- Anyone who studies it records `litany_clues: mural` (the full order: star, crown, eye, flame, lantern).
- A Scholar, or anyone the Scholar or Oswin translates for, who understands the caption realizes the Crown's blue jewel is **the heart of the thing in the deep**: report `DISCOVER_STILLHEART`. A non-Scholar without Oswin sees only "a blue jewel in the crown" unless they already found the Miners' Tally and put it together themselves. Reward that deduction with the event.
- A detail for sharp eyes (Scholar, Wayfarer, or anyone who studies scene 2 closely): the circlet is drawn **in two hinged halves**. The Crown opens.

```
[IMAGE_TRIGGER]
ID: IMG_HALL_OF_CROWNS
TYPE: MAJOR_DISCOVERY
STATUS: OPTIONAL (fire if the courier studies the mural and the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A vast ruined royal hall, roof half open to falling snow, floor of red and
black marble. Along the wall runs an enormous gold-and-enamel mural of a
king closing a crown around a glowing blue star, and a giant eye opening in
a mountain. White-robed pilgrims sit singing by small fires. The courier,
lit by firelight, stands before the mural, looking up at it. Gold, crimson,
pale blue, deep shadow.

Do not reveal undiscovered information.
(Do not depict the queen seated on any throne.)

[/IMAGE_TRIGGER]
```

**Liss's token.** If Calen is present, he finds, among the Choir's things, a small **carved wooden fox**. He made it for his sister Liss when they were children. Serith, asked, says gently: "Liss. She came to us in the spring, after her husband died. She was the first of us to be given the silence. She went up to the mountain." Calen goes very quiet. This sets up `LISS_SAVED` in Act IV.

---

## 3.4 THE ROYAL CRYPT

Beneath the Queen's Spire, reached by a stair behind the Hall's throne dais (Serith knows it), by the culvert from the Ash Gate, or by Oswin's memory of "the Queen's undercroft". Entering it: report `DISCOVER_CRYPT`.

A long vaulted crypt lit by nothing. Along its aisle stand the **Cinder Guard**: forty knights in the Queen's livery, turned to ash-stone like the city, but *kneeling*, swords point-down, facing the tombs. At the far end are the tombs of Veyr's kings and queens.

- **King Aldric Veyr, the Founder:** *"HE TOOK THE STAR FROM THE DEEP, AND MADE US GREAT."*
- **Queen Maelis Veyr, the Last:** the tomb is **empty**, its lid resting open. It was never used. Her epitaph was carved in advance by her own order: *"SHE BURNED SO THE EYE WOULD CLOSE."* Record `litany_clues: epitaph` (the flame comes after the eye).
- **Maelis's journal** lies in her empty tomb's niche, bound in red leather, the last pages written the night before the Burning. It is the heart of the history (`world/lore.md`, *The Queen's Journal*). Reading it: report `DISCOVER_BURNING_TRUTH`. The short version, in her voice: *the King's theft woke it; it is coming for its heart; I cannot give the heart back without taking off the Crown, and the Crown will not come off a living queen; so I will seal it with fire; the fire must come from somewhere; a thousand have volunteered; it is not enough; God forgive me for the rest.*
- SCHOLAR SEES, in the margin of the journal's last page, a line scratched out and rewritten: *"There was another way. Aldric's own forgers knew the word. Anna vaelun. The giving back. But I could not ask it of the deep, not after what we took."* The Scholar now knows the word. Record `names_learned: anna vaelun`. It is not yet clear what it does. The Litany Door and the Queen make it clear.
- SCHOLAR, reading the journal: *maelis* is not only her name, it is the Veyric word for **ember**. She was named for the fire she would become. `WORD LEARNED: MAELIS, "ember"`. With it comes authority the Cinder Guard can feel (`game/words.md`).

**The Cinder Guard** (`ENC_CINDER` in `game/encounters-3.md`). The Guard **stirs** when an open Kindling or unmasked fire is carried past them, when a tomb is disturbed, when the journal is taken from the niche, or when the postern was forced (3.2). They rise, ash sifting from their joints, and bar the way. They believe the Queen's fire is being stolen.

- They can be calmed: by kneeling; by speaking Veyric (a Scholar: "I carry the Queen's fire home"); by speaking the Word MAELIS with power (a roll, for a Scholar at rank III); by reciting the waystation hymn; by showing the lantern sigil on the reliquary's seal; or by returning what was taken.
- They can be fought: slow, heavy, immune to fire, brittle to hard blows and to cold water. A Warden's fight.
- They can be outrun: they do not leave the crypt.

```
[IMAGE_TRIGGER]
ID: IMG_CINDER_GUARD
TYPE: ENCOUNTER
STATUS: OPTIONAL (fire only if the Guard rises and the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(game/image-triggers.md §3). Pixels visible at a glance.

SCENE:
A long vaulted royal crypt in darkness. Rows of armored knights made of grey
ash-stone rise from kneeling, ash pouring from their joints, embers glowing
faintly in their visor slits, great swords lifting. The courier stands in the
aisle holding a small warm light, present companions behind. Deep blacks,
ember orange, ash grey.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Report `ENC_CINDER_SURVIVED` if the Guard rose and the courier survived or escaped, and `ENC_CINDER_CLEVER` if they calmed or outwitted it. If the Guard never stirred, report nothing for it.

---

## 3.5 NIGHT IN VEYR

If the courier stays the night (the night count drops by 1):

- The Choir sings all night. The blue glow above Orun brightens.
- **Wren** (if present and Hushing): she sleepwalks toward the mountain in the small hours. Whoever keeps watch sees her go. If she is caught and brought back to the box's warmth, she wakes shaking, and the frost mark has grown. This is a natural moment for `DISCOVER_WREN_HUSHING` if it hasn't happened. If nobody is watching, she is found at dawn at the foot of the Queen's Road, barefoot and blue-lipped, and becomes Wounded.
- **Calen** (if present, and if his orders are still secret): he spends the night awake, looking at the fox. An Envoy, or anyone who sits with him, can get the whole truth now (`DISCOVER_CALEN_ORDERS`).
- **Oswin** mutters prayers and does not sleep. Pressed, he says only: "Tomorrow they'll tell you everything. I'm sorry I couldn't be the one."

## 3.6 THE QUEEN'S ROAD

A stair-road cut up the cliff to Orun, with a stone lantern-niche every hundred steps. All the lanterns are dead. It is half a day's climb.

- **Pushing on through the night** without sleeping in Veyr, and reaching Orun before dawn, keeps the night count. But the climb is in the dark and the cold. Everyone arrives numb (Wounded unless kept warm by emberstone, fire or the Kindling), and the Hushed on the mountainside see a moving light. If the courier reaches Orun this way with **2 or more nights** left, `ACH_BEFORE_THE_MOON` becomes available.
- The last lantern-niche before Orun still has oil in it. Lighting it makes a monk's bell ring above, a welcome.

**Arriving at Orun's gate ends Act III.** Record `REACH_ORUN` and fetch the Act IV pack.

---

## Exceptions

- **The courier skips Veyr** entirely by skirting the valley: it is possible along the high snowfields (Risky and cold, with no night saved). Most of this act's discoveries are missed. That is allowed.
- **The courier destroys the Kindling** (anywhere, any act): see *Destroying the Kindling* in `game/endings.md`. The seal can no longer be renewed. The story continues if they wish, but at the throne only `THE LONG QUIET`, `THE SECOND BURNING` (using the Queen's own last fire) or `WHITE SILENCE` remain possible.
- **The courier opens the box in Veyr:** the whole city's ash-figures turn, very slowly, to face them. Nothing else happens. That is enough.

===== FILE: world/lore.md =====

# ELDERVALE: Lore

Loaded at Act III. This is the history the player can uncover. Reveal it only through what they find, read or are told. Never lecture.

---

## Eldervale

A cold, old country of moor, pine and mountain between the southern kingdoms and the **Karrow Mountains**. The South is ruled by **the Southern Throne** from Harrowgate: wealthy, orderly, ambitious. Eldervale's north has been empty for three centuries. Its people tell three kinds of story about why:

- **The Southern story:** Veyr was a proud northern kingdom that practiced forbidden fire-magic and destroyed itself. A warning.
- **The pilgrims' story:** a holy queen died to save the world from a demon under the mountain, and her monks keep her flame. A consolation.
- **The children's rhyme:** *"Queen of cinders, queen of snow, / where did all your people go? / Up the stair and down the deep, / hush now, hush now, go to sleep."*

All three are partly true.

## The calendar

Years are counted **After the Burning** (A.B.). The game takes place in late autumn of **317 A.B.**

---

## The history of Veyr

**The Founding (about 120 years before the Burning, "the first year of the King").** **Aldric Veyr**, a mine-lord of the Karrow, drove a shaft to the bottom of the mountains and found a cavern of ancient ice. At its heart lay **the Stillheart**: a blue stone of frozen starlight that sang. His miners cut it free. Aldric carried it up to his forge. Its cold, set against fire, doubled every flame near it: forges that never cooled, hearths that burned without fuel, a city warm in endless winter. Veyr grew rich and splendid within a generation, and stayed so for a century. *Source: the Miners' Tally; the Hall of Crowns mural, scenes 1 and 2; Aldric's tomb.*

**The Crown.** Aldric's forgers set the Stillheart into a circlet of black iron worked as flames: **the Ember Crown**. The Crown was forged in two hinged halves, closed with a word of taking and opened with its opposite, **"anna vaelun"**, *the giving back*. Its wearer commanded Veyr's fire. It passed from Aldric to his son, to his grandson, and at last to his great-granddaughter. *Source: mural, scene 2; Maelis's journal margin; the Lantern Door.*

**The Waking.** What slept in the ice was not a stone. The Stillheart was the heart of **the Hush**: a vast, ancient, cold intelligence, the deep silence of the mountains, older than any people. Without its heart it could not sleep. It began, over a hundred years, very slowly, to wake. The mountain grew colder. Miners dreamed of silence. Then people started walking into the snow at night, pale and voiceless: **the first Hushed**. *Source: the Miners' Tally; mural, scene 3.*

**The Burning (year 0).** Queen **Maelis Veyr** inherited the Crown and the Waking at nineteen. By twenty-three, the Hush was rising through the mines to take back its heart. Giving it back would mean taking off the Crown, and **the Crown will not come off a living wearer.** So Maelis chose fire. She called her people to the great square and asked for volunteers to pour their life into a seal. **A thousand came.** It was not enough. So she took the rest: every hearth, every flame, every living warmth in Veyr, drawn through the Crown and poured down into the deep as a lattice of fire. The people of Veyr became ash where they stood. Maelis walked down beneath the mountain to the **Ember Throne**, at the top of the stair above the Hush, and sat, and began to burn. *Source: Maelis's journal; mural, scene 4; her epitaph; the Queen herself.*

**The Watch.** The Queen's handmaidens and priests who survived founded **the Order of the Last Lantern** at **Orun**, the old mine-head monastery above the throne cavern. They kept her watch, tended the lanterns of the Queen's Road, and, knowing her fire would one day run out, took **a single living coal from her pyre** and kept it in a sealed iron reliquary for the night it would be needed: **the Kindling**. The Order's charter holds that the Kindling will relight the Crown for a new bearer, "one who carries it freely to the throne". *Source: mural, scene 5; the waystation hymn; Prior Hesk.*

**Now (317 A.B.).** The Queen's fire is nearly spent. The Hush is waking again: travelers vanish, villages walk into the snow, the cold spreads south. The Order, down to five monks, hired a courier through a broker in Harrowgate. The Southern Throne learned of it. So did the White Choir.

---

## The Litany of Veyr

The Order's short form of the history, carved on the Lantern Door: **star, crown, eye, flame, lantern**. The theft, the forging, the waking, the Burning, the watch. The clues to it are scattered through the game (see `game/puzzles.md`, Puzzle 3).

---

## The Queen's Journal

Red leather, in Maelis's hand, left in her own empty tomb in the Royal Crypt. Most of it is the ordinary diary of a young queen: court, weather, her dog, a boy she liked. The last pages are the ones that matter. Quote from them sparingly, in her voice:

> *The miners won't go below the ninth gallery. They say the rock is listening.*

> *Master Hollen showed me my great-grandfather's forge-book tonight. The Crown opens. There is a word. Anna vaelun. The giving back. But it will not open on a living head, and it will not leave mine, and if it did, who would carry the heart down into that? And what would it do to us, after what we took?*

> *A thousand came to the square today. A thousand. The baker's girl, who is eleven. I told her to go home, and she wouldn't.*

> *It is not enough. Hollen has done the sums four times.*

> *Tomorrow I will take the rest. I have not told them. God forgive me. No: let no one forgive me. Let them only be warm, wherever they are.*

> *(scratched out, rewritten in the margin:) There was another way. Aldric's own forgers knew the word. Anna vaelun. The giving back. But I could not ask it of the deep, not after what we took.*

---

## Old Veyric

The old northern tongue, now read only by scholars and the Order. Useful phrases:

- **anna vaelun:** "the giving back"
- **Veyr ennar Orun:** "Veyr keeps Orun" (a greeting to the Order)
- **maelis:** "ember" (the Queen's name means ember)
- **sael:** "silence", or "the Hush"
- **I carry the Queen's fire home:** *"Maeli'sen tharru orun-ai."*

A Scholar can speak it. Anyone can repeat a phrase they've been taught. Addressing the Queen in it earns `ACH_QUEENS_TONGUE`.

---

## Things no one knows

Leave these open. Do not resolve them, even at the end:

- Whether the Hush is conscious in any way a person would recognize.
- Whether the Hushed suffer.
- Whether Maelis was right.

===== FILE: world/creatures-3.md =====

# ELDERVALE: The Cinder Guard

## The Cinder Guard

Queen Maelis's forty knights, turned to ash-stone in the Burning, kneeling in the Royal Crypt.

- **Look:** knights of grey ash-stone in the Queen's flame livery, embers faint in their visor slits. Ash pours from their joints when they move.
- **Want:** to guard the Queen's rest and her fire. They wake when fire passes that isn't hers (an open Kindling, a torch waved at a tomb), when a tomb is disturbed, or when the crypt is broken into by force.
- **Behavior:** slow, heavy, relentless inside the crypt. They never leave it.
- **Weakness:** hard blunt blows shatter them; cold water cracks them. Fire does nothing.
- **Calming:** kneeling, the Queen's name, Old Veyric, the waystation hymn, the lantern sigil on the reliquary seal, returning a disturbed object.

===== FILE: game/encounters-3.md =====

# THE BLACK ROAD: Encounters, Act III

## ENC_CINDER: The Cinder Guard (Act III, the Royal Crypt)

- **Enemies:** up to forty Cinder Guard, though usually only the nearest eight rise.
- **Their goal:** stop the Queen's fire being stolen, and drive intruders out of the crypt.
- **Terrain:** a long vaulted aisle, tombs, the Queen's empty tomb at the far end, a drain channel of meltwater along the floor, a collapsed side vault, the stair out.
- **Beats:**
  1. Ash sifts. A knight lifts its head.
  2. Eight rise, swords lifting, and bar the aisle.
  3. They advance, slowly, relentlessly.
  4. The stair out is blocked or open, depending on where the courier stands.
- **Clever resolutions:** kneeling; the Queen's name; Old Veyric; the hymn; showing the lantern seal; returning the journal; smashing the drain channel so cold water floods the aisle and cracks them; leading them into the collapsed vault.
- **Resolution:** they kneel again, are broken, or the courier leaves the crypt (they will not follow).
