# THE COUNT OF MONTE CRISTO: Endings

Eleven endings. Play every one with full romantic conviction. Never label an ending good or bad: let the player feel what they chose.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, written as the last chapter of a novel, years later; (4) complete the run with the ending's **ID**; (5) the final screen and the journal line (`scoring.md`).

**Epilogue fragments:**

- **Mercédès:** *"Mercédès lives in Louis Dantès' old house on the Allées de Meilhan, and keeps a garden. On the anniversary of a wedding that never happened, she walks to the Catalans."*
- **Albert:** spared and told the truth: *"Albert took his mother's name and joined the army in Africa. He wrote to her every week, and once, without explanation, to the Count."*
- **Valentine and Maximilien:** saved: *"They were married on the island of Monte Cristo, in a palace no one else has ever found."* Lost: *"Maximilien Morrel never married. He tended a grave in Paris and one in Marseille."*
- **Danglars:** *"Danglars lives in a cheap hotel in Italy and counts his fifty thousand francs every morning."* Or, if never forgiven: *"Nobody knows what became of the Baron."*
- **Villefort:** *"In the garden at Auteuil, a man digs every evening and never finds what he's looking for."*
- **Caderousse:** according to the diamond's fate.
- **Jacopo:** *"Jacopo has a boat of his own, and smuggles nothing now except, occasionally, letters from the Count."*
- **Haydée:** always according to her own choice.
- **Faria:** *"On the wall of a cell in the Château d'If, beside a tunnel no guard ever found, two names are still carved: an old priest's, and* [the player's carved name]*."*

---

## WAIT AND HOPE

**ID:** `ENDING_WAIT_AND_HOPE` · **fate:** lives

**The moment:** The reckoning is done, and at the last, the Count shows mercy: to Danglars on the road, to Albert in the clearing, to himself. On Monte Cristo he gives Valentine and Maximilien the island and a letter. Then he sails, at dawn, toward the horizon. If Haydée chose to come, she is at his side. The letter's last words: *"All human wisdom is contained in two words: wait and hope."*

**Epilogue:** The novel's ending, earned. Say who was spared, who wasn't, and where the white sail was last seen. Nobody in Paris ever saw the Count again.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WAIT_AND_HOPE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Dawn over a deep blue Mediterranean sea: a white-sailed yacht heading
toward a glowing horizon, a tall figure in black at the stern and a woman
in Greek silk beside him; on the rocky shore of a barren island, a young
couple waving, a letter in the young woman's hand. Hopeful, epic, serene.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## EDMOND

**ID:** `ENDING_EDMOND` · **fate:** lives · **the hidden ending**

**The moment:** The ending Dumas didn't write. Edmond stops being the Count. He spares every innocent, lets the law have what's left of his enemies, gives the treasure away (to the Morrels, to Valentine and Maximilien, to the hospitals Danglars robbed, to Haydée, to her freedom), and takes the coach to Marseille with nothing but his own name. At the Catalans, Mercédès is mending a net. She looks up. *"Edmond."* He sits down beside her. Whatever they say to each other is theirs.

**Epilogue:** They're not young, and they don't pretend to be. They walk to the harbor in the evenings and argue about the weather. Albert visits. Say who else, and what Edmond does with his days: he teaches, perhaps, the way Faria taught him. The Count of Monte Cristo became a story people told in Paris, and nobody believed it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_EDMOND
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Golden evening at a small whitewashed fishing village on the shore of
Marseille: a man in plain clothes, grey at the temples, sitting on a low
wall beside a dark-haired woman mending a fishing net; fishing boats
drawn up on the pebbles, the sea glittering, a fortress on a tiny island
far out in the bay, small and harmless. Quiet, tender, warm.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## PROVIDENCE

**ID:** `ENDING_PROVIDENCE` · **fate:** lives

**The moment:** Every enemy is destroyed. So is everyone around them. The Count stands in his mansion on the Champs-Élysées among the ruins of four families and feels, for the first time in twenty-three years, nothing at all. Haydée has gone (if she was ever here). Mercédès won't open her door. He is God's instrument, and God's instruments are alone.

**Epilogue:** Tell it plainly, without judgment. Say who was ruined, and which of them never did anything. The Count left France rich and empty, and somewhere, every night, he hears an old priest's voice say *"Do not let what I give you make you a god."*

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_PROVIDENCE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A vast dark Paris mansion at night, chandeliers unlit, gold everywhere
and dust sheets on the furniture; a lone pale man in black sitting in a
huge armchair before a dying fire, a fortune in jewels spilled on a table
beside him; through the tall windows, a city of lights, every one of them
far away. Cold, magnificent, desolate.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE KING'S JUSTICE

**ID:** `ENDING_JUSTICE` · **fate:** lives · available from Act IV

**The moment:** Edmond puts it all on the desk of the King's minister: the Janina papers, Bertuccio's sworn statement about Auteuil, the poisoner's evidence, Danglars' books. No masks, no theatre. Then he steps back, and lets the law do what it should have done in 1815.

**Epilogue:** The trials took a year. The law was slower than vengeance, and kinder to the innocent. Say what happened to each enemy, through the courts, and who was spared the fallout because it was done in daylight. Edmond testified once, under his own name, and walked out of the Palais de Justice a free man for the first time since he was nineteen.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_JUSTICE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The steps of a grand stone Palais de Justice in Paris on a bright morning,
crowds and gendarmes, a man in plain dark clothes walking down the steps
into the sunlight alone, behind him through the great doors a courtroom
in session. Dignified, bright, quietly triumphant.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE DUEL

**ID:** `ENDING_THE_DUEL` · **fate:** sacrificed · available from Act V

**The moment:** He promised Mercédès. At Vincennes he stands with his pistol lowered and lets Albert fire. The shot is loud in the mist. He falls in the wet grass, and the last thing he sees is the light coming up through the trees, gold, like the harbor at Marseille the day the *Pharaon* came in.

**Epilogue:** Albert learned the truth the next day, and never forgave himself, and then, slowly, did. Mercédès buried him in Marseille, beside his father, under his own name. Say what became of the companions, and of the fortune, which he'd left to the people he loved.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_DUEL
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A misty winter clearing at dawn, a pistol lying in the frosted grass
beside a black cloak, gold light streaming through the bare trees; in
the distance, a young man walking away with his head bowed, and a
carriage waiting; a single bird rising. Grave, quiet, beautiful.
No injury shown.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## UNMASKED

**ID:** `ENDING_UNMASKED` · **fate:** lives · available from Act IV

**The moment:** They know. Two of the men who buried him have worked out who the Count really is, and they strike first: a warrant, a mob, a scandal in every paper. The Count leaves Paris by night with what he can carry, and his enemies hold a dinner to celebrate.

**Epilogue:** Tell honestly where the revenge stood when it collapsed, who was left exposed, and what Edmond did next. He was never caught. He was never at peace either.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_UNMASKED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A rain-soaked Paris street at night, a black carriage racing away under
flickering gas lamps; behind it, in the lit windows of a mansion, three
silhouetted men raising glasses; a torn calling card lying in a puddle.
Tense, bitter, dramatic.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE TREASURE

**ID:** `ENDING_TREASURE` · **fate:** lives · available from Act III

**The moment:** He fills the boat, and doesn't turn north toward France. He turns east. Monte Cristo falls away behind him, and with it Marseille, Paris, and three men who will never know how close they came.

**Epilogue:** He lived like a prince in the East: palaces, horses, a library. Say honestly what became of the people he never went back for: Morrel and the *Pharaon*, Mercédès, his enemies at the height of their power. Some nights he dreamed of a scratching in a wall.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_TREASURE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
An opulent Eastern palace terrace at sunset over a golden sea, domes and
cypress trees, silk cushions and chests of gold; a man in rich robes
standing alone at the balustrade looking west toward a horizon he will
never sail to. Luxurious, beautiful, wistful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## CAPTAIN OF THE PHARAON

**ID:** `ENDING_PHARAON` · **fate:** lives · available from Act III

**The moment:** The new *Pharaon* sails into Marseille, and Morrel offers the mysterious sailor her command. He takes it. Captain, at last, of the ship he should have commanded at nineteen. He never goes to Paris.

**Epilogue:** He sailed for the House of Morrel for twenty years, and the ships never lost a cargo. Maximilien called him "the Captain" and never asked his name. Say what happened in Paris without him, honestly. On calm nights at sea, he was happy, and that was enough.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_PHARAON
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A three-masted merchant ship under full sail on a bright blue sea, its
captain at the wheel in a weathered blue coat, sun on his face, gulls
overhead; the harbor of Marseille shining behind, a little fortress on a
rock far astern. Free, joyful, windblown.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## KING OF THE BANDITS

**ID:** `ENDING_VAMPA` · **fate:** lives · available from Act III

**The moment:** Vampa holds out his hand in the catacombs, and the Count takes it. The freest men in Italy have a new friend, and the Roman Campagna has a new legend.

**Epilogue:** For years, travelers on the road to Rome told stories of a pale, courteous man who robbed only bankers and always left a receipt. Say what became of Paris without him. Albert de Morcerf told the story of his kidnapping at every dinner party for the rest of his life.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_VAMPA
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The wild Roman countryside at golden hour, ancient aqueduct ruins on the
hills, a band of brigands on horseback in sheepskin and pointed hats, and
riding at their head beside their handsome leader, a pale man in a black
cloak, laughing. Romantic, roguish, free.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE WEDDING FEAST

**ID:** `ENDING_WEDDING` · **fate:** lives · available from Act I

**The moment:** The letter never reaches the prosecutor, or it does and there's nothing to find. The soldiers never knock, or knock at an empty room. At two o'clock, at the town hall of Marseille, Edmond Dantès marries Mercédès. Old Dantès cries. Danglars smiles, and smiles, and smiles.

**Epilogue:** The book never happened. No prison, no treasure, no Count. Edmond captained the *Pharaon* and grew old with Mercédès in the house on the Allées de Meilhan. Say what became of Danglars, Fernand and Villefort when nobody ever came for them: a little better, a little worse, unexamined. Somewhere in the Château d'If, an old priest dug his tunnel into the wrong cell, and found it empty.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WEDDING
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A sunny wedding procession on a Marseille quay in 1815: a young sailor
and a dark-haired bride in white with flowers, an old father beaming,
Catalan fishermen and sailors cheering, a three-masted ship dressed in
flags in the harbor; at the edge of the crowd, one man in a purser's coat
smiling too widely. Joyful, sunlit, with one shadow.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE CEMETERY OF THE CHÂTEAU D'IF

**ID:** `ENDING_CEMETERY` · **fate:** dies · available in every act

**The moment:** The sea, or a bullet on the harbor steps, or the dark of a cell, or a duel gone wrong. Keep it brief, grave and non-graphic. Edmond Dantès is gone, and the men who buried him never learned how close they came.

**Epilogue:** Tell what became of everyone who was waiting for him: his father, Mercédès, Faria's treasure, still under the twentieth rock. The last line: *"The sea is the cemetery of the Château d'If. It keeps everything."*

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on THE CEMETERY OF THE CHÂTEAU D'IF

SCENE:
A comic-free arcade game-over tableau: a dark stormy sea at night, a
grim fortress on a black rock, and on the surface of the waves a single
torn piece of canvas drifting beside a floating sailor's cap, lightning
far off. Somber, still, no body shown.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```
