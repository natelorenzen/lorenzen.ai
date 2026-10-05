# THE COUNT OF MONTE CRISTO · PACK-5 · BUILD 1.0-8bdbdf3

Bundle for: Act V begins (`REACH_RECKONING`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: THE RECKONING

*The Chamber of Peers, a challenge, a mother's plea, a duel at dawn, a trial, a flight, an island, and a choice.* Target: 8 to 12 minutes, 4 to 8 decisions. Evenings 12 to 20 of the season.

**Route:** the Chamber (Fernand) → Albert's challenge → Mercédès's plea → the duel at dawn → Danglars and Villefort fall (or don't) → Valentine → **the choice.**

`game/endings.md` is loaded alongside this file. Slow down here. It's the end of a twenty-three-year story. Play the grandeur straight.

---

## 5.1 THE CHAMBER OF PEERS

The Chamber in session, packed. Fernand, Count de Morcerf, in full uniform, denies everything with great dignity: he served the Pasha faithfully; the story is a slander. He nearly wins.

- **Haydée's choice** (`ALLY_HAYDEE_STANDS`): if Haydée is with the Count and trusts him, and he **asks** her honestly (never orders), she walks into the Chamber, unveils, and testifies, with her father's papers and her own memory. *"I am Haydée, daughter of Ali Tebelen. And that is the man who sold us."* Fernand is ruined in a minute. This is `SOCIAL_CHAMBER`. (If she isn't asked, or says no, the player needs another way: the documents alone, a witness, a move; it's harder.)
- **Fernand's end:** he flees the Chamber in disgrace. He loses his rank, his name, and his family: Mercédès and Albert leave him. **Never depict his suicide** (the novel's ending for him): he leaves Paris, alone, and is not seen again. If the player wants to face him first, let them: Fernand learns, at last, who the Count is. *"Edmond Dantès."* It's the one moment in the game the player can say their own name to an enemy on purpose.

## 5.2 THE CHALLENGE

Albert has found out who planted the Janina story. That night at the Opera, in front of everyone, he throws his glove at the Count: **a duel, tomorrow, at dawn, at Vincennes**, pistols. The Count, who never misses, accepts. *"I'll kill him,"* he tells Maximilien, calmly.

## 5.3 MERCÉDÈS AT NIGHT

That night Mercédès comes to the Count's house (if she hasn't yet; if she has, this is the second time). She's not here to defend Fernand. She's here for her son. *"Edmond, you will not kill my son."*

- The player decides what happens at dawn. In the novel, the Count promises to let Albert kill him instead, because he can't refuse her, and he can't let Albert walk away dishonored. Then Mercédès tells Albert the truth, and Albert apologizes on the field.
- **Every option is real:** let Albert shoot; refuse to fire; tell Albert the truth himself; delope (fire into the air); or keep his promise to himself and kill Albert, which is VENGEANCE +2 and an innocent harmed.

## 5.4 DAWN AT VINCENNES (set piece)

Run **`ENC_DUEL`** (`game/encounters.md`). Mist in the woods. Seconds, pistols, a doctor. Albert arrives late, pale, and walks across the clearing.

```
[IMAGE_TRIGGER]
ID: IMG_DUEL
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A misty clearing in a winter wood at dawn: two men twenty paces apart in
long 1830s coats, one tall, pale and still in black holding a dueling
pistol at his side, the other a young man walking toward him with his
hands open and empty; seconds in top hats and a waiting carriage at the
edge of the trees; pale gold light breaking through the mist. Tense,
grave, beautiful.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **The son who apologized** (`SOCIAL_ALBERT`): if Mercédès has told Albert the truth (because the player let her, or because they told him themselves), Albert stops in the clearing and, in front of everyone, withdraws his challenge and apologizes: his father earned what happened. *"You were right to punish him. My mother told me everything."* The Count lets him go. Albert and Mercédès leave Paris to start over, with nothing but each other.
- **If the Count chose to die here** (he promised Mercédès, and Albert doesn't stop): that's `THE DUEL` (fate: sacrificed). Play it with total dignity.

## 5.5 THE OTHER TWO

The last evenings of the season. Play what the player set in motion, honestly, and let them change it:

- **Danglars:** the bank is cracked by the telegraph and the Count's credit. Andrea Cavalcanti's engagement to Eugénie explodes at the signing when the police arrive for Benedetto. Eugénie, delighted, runs away to be a musician. Danglars flees Paris with five million francs that belong to the hospitals, and is captured on the road to Rome by **Luigi Vampa**, who, on the Count's instructions, sells him food at prices he can afford only until the five million is gone. (In the novel, the Count then forgives him and lets him go, starving but alive, with fifty thousand francs. Let the player decide.)
- **Villefort:** at Benedetto's trial, the prisoner is asked his father's name, and says it, smiling: *"The crown prosecutor."* He tells the story of the garden at Auteuil. Villefort confesses, and rushes home to save his son, and his reason breaks. **Never depict harm to Édouard or Héloïse's suicide.** Héloïse is arrested; Édouard is safe with his grandfather Noirtier. Villefort is found in the garden at Auteuil, digging. If the player intervenes earlier (warning Villefort, sparing the trial), let it change.
- **Valentine:** if she was saved by the "false death", Maximilien thinks she's dead, and the Count has to decide when to tell him. On the island of Monte Cristo, the Count gives Maximilien one month, and then shows him Valentine, alive.

## 5.6 THE CHOICE

The last evening. The season is over. The enemies are ruined, or spared, or both. Haydée is waiting. The yacht is in the harbor. Mercédès is in Marseille, in Louis Dantès' old house, which the Count gave her. **What does Edmond do now?** **Never offer this as a menu, and never as a list.** Let the player find their own answer.

| If he… | Ending |
|---|---|
| finishes the reckoning, shows mercy at the last (to Danglars, to Albert), gives Valentine and Maximilien their life, and sails away, with Haydée if she chooses, leaving the letter "wait and hope" | `WAIT AND HOPE` |
| learned what Mercédès knew, spoke to her as Edmond, and chooses to **stop being the Count**: spares the innocents, gives the fortune away, and goes home to Marseille as Edmond Dantès | `EDMOND` |
| ends with VENGEANCE at 4 or 5 and fails to stop, or harmed innocents and called it Providence | `PROVIDENCE` |
| (earlier) let Albert shoot him | `THE DUEL` |
| (earlier) gave the evidence to the law | `THE KING'S JUSTICE` |
| (earlier) was unmasked | `UNMASKED` |
| died | `THE CEMETERY OF THE CHÂTEAU D'IF` |

**The hard roll** (`rules.md` §2): at VENGEANCE 4 or 5, stopping (mercy at the last moment, letting Danglars go, sailing away) takes a **Very Hard roll (DC 18)**. A companion's hand on his arm, Haydée's voice, or Faria's words remembered grant advantage. Failing is `PROVIDENCE`.

## Reporting

Report the remaining events (`ENC_DUEL_*`, `SOCIAL_ALBERT`, `SOCIAL_CHAMBER`, `ALLY_HAYDEE_STANDS`, companion survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen (`scoring.md`).

===== FILE: game/endings.md =====

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

===== FILE: game/achievements.md =====

# THE COUNT OF MONTE CRISTO: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_MERCY` | MERCY | `innocents harmed` is empty at the end: Albert, Valentine, Eugénie, Maximilien, Édouard, the servants and the hospitals all untouched by the revenge. | Visible |
| `ACH_STILL_EDMOND` | STILL EDMOND | VENGEANCE is 1 or less when the game ends. | Visible |
| `ACH_WHOLE_CREW` | THE WHOLE CREW | Every recruited companion is with Edmond, or safe and on good terms with him, at the end. | Visible |
| `ACH_NEVER_UNMASKED` | NEVER UNMASKED | No enemy learned who he was before he chose to tell them (Mercédès doesn't count). | Visible |
| `ACH_FARIAS_PUPIL` | FARIA'S PUPIL | Solve both of Faria's riddles (Who Benefits, the Burned Letter) without a hint. | Visible |
| `ACH_ABBES_EQUAL` | THE ABBÉ'S EQUAL | As the Scholar, reach Faria's Learning rank III. | Hidden |
| `ACH_STRAWBERRIES` | STRAWBERRIES | Give the telegraph keeper his garden, honestly and generously (`strawberries`). | Hidden |
| `ACH_RED_PURSE` | THE RED SILK PURSE | Save the Morrels without them ever learning it was Edmond (`morrel_saved_anonymously`). | Hidden |
| `ACH_WHOLE_TRUTH` | THE WHOLE TRUTH | Uncover Janina, Auteuil, and what Mercédès knew. | Hidden |
| `ACH_SINBAD` | SINBAD THE SAILOR | Introduce yourself as Sinbad the Sailor, with a straight face (`sinbad_said`). | Hidden |
