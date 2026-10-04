# THE COUNT OF MONTE CRISTO · PACK-3 · BUILD 1.0-80be850

Bundle for: Act III begins (`REACH_ISLAND`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: MONTE CRISTO

*Treasure, a priest with a diamond, a purse of red silk, a princess set free, and a bandit's catacomb.* Target: 11 to 15 minutes, 8 to 11 decisions. 1829 to 1838.

**Route:** find the treasure → Marseille in disguise (what became of everyone) → save the Morrels → make the Count (Bertuccio, Haydée) → Rome, Carnival, and Albert → **Paris**.

Load `world/the-world.md` now.

---

## 3.1 THE TREASURE

Edmond fakes an injury so the smugglers will leave him on Monte Cristo for a few days (or tells Jacopo something close to the truth: that's a trust choice). Alone on the island with a pickaxe and the solved letter: the creek, the rocks, the flagstone, the stair, the cave, the hollow wall, **the second opening.** Narrate the dig with full Dumas grandeur. If Puzzle 2 wasn't solved, the fallback in `game/puzzles.md` applies here.

```
[IMAGE_TRIGGER]
ID: IMG_TREASURE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Inside a dark rock cave lit by a single torch, three iron-bound chests
burst open, gold coins, ingots, pearls, diamonds and rubies spilling over
the stone floor and glittering; a weathered man with a sailor's beard and
a pickaxe kneeling before them, his face lit gold; a narrow stone stair
and a sliver of blue Mediterranean sky behind him. Awe, triumph, a hint of
danger.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **Jacopo's moment** (`ALLY_JACOPO_REFUSES`): when Edmond offers him a fortune, he takes only enough for a boat. (Report it the first time the offer is made and refused.)
- **The temptation:** Edmond could simply take the treasure and go. Live like a sultan in the East, forget Marseille. That's `THE TREASURE` (`game/endings.md`, fetch `pack-end.md`). Let it be tempting.

## 3.2 THE ABBÉ BUSONI

Edmond comes back to Marseille in disguise. (The Abbé path has this at full power; every path uses the disguise once here.) His father's room is let to strangers. Nobody recognizes him.

- **His father** (`DISCOVER_FATHER`): a neighbor, or the old porter, or Caderousse, tells it: Louis Dantès stopped eating after the arrest, refused all help but Mercédès's and Morrel's, and died of hunger the next year, saying his son's name. Give it room. VENGEANCE wants to rise here; let the player decide.
- **The diamond:** dressed as an Italian priest, the "Abbé Busoni", Edmond visits **Caderousse**, now a poor innkeeper at the Pont du Gard, with a hard, frightening wife. He shows him a diamond "left by a dying sailor named Edmond Dantès, to be shared among the four friends who loved him most": Danglars, Fernand, Caderousse, and Mercédès.
- **The confession** (`DISCOVER_CADEROUSSE`, `SOCIAL_CADEROUSSE`): greed and wine do the rest, if the player plays it right (patience, the right questions, the diamond on the table). Caderousse tells everything: the letter, the arbor, Fernand, and what became of them all. Danglars a banker; Fernand a general and a count; Villefort in Paris; Mercédès married to Fernand, a mother, unhappy, rich. *"She waited eighteen months."* Edmond gives Caderousse the diamond. (In the novel, it ruins him. Here, it's the player's call how much to leave him.)

## 3.3 THE RED SILK PURSE

**Monsieur Morrel**, the only man who tried to help Edmond's father, is ruined: his ships lost, his debts due at eleven o'clock on 5 September, a pistol already loaded on his desk. (PG-13: show his despair and the clock, never the act; the rescue comes in time.) His son **Maximilien** knows. His daughter **Julie** doesn't.

- Edmond, as an English banking agent ("Lord Wilmore's clerk", or as any disguise), buys up all Morrel's debts and gives him three months. On the deadline day, a messenger in a sailor's cap gives Julie a key to her grandfather's old room. In it, on the mantel: **a red silk purse** (the one Morrel once gave Louis Dantès) holding the receipt for every debt, paid, and a diamond for her dowry. At that moment, the harbor bells ring: a new *Pharaon*, identical to the old one, is sailing into port, fully laden.
- This is `SOCIAL_MORREL`. If the Morrels never learn who did it, it's `ACH_RED_PURSE` (`morrel_saved_anonymously`).
- **The other life:** Morrel offers the mysterious sailor the new *Pharaon*'s captaincy, whoever he is. Accepting it, and never going to Paris, is `CAPTAIN OF THE PHARAON`.

## 3.4 MAKING THE COUNT

Nine years pass in a montage of the player's choosing (Edmond buys the island and the title "Count of Monte Cristo" from the Tuscan government, travels the East, builds a yacht and a fortune, and learns the world). Two people join him:

- **Bertuccio** (`characters/companions.md`): the Abbé Busoni once heard his confession in a Nîmes prison and got him freed. He becomes the Count's steward (`RECRUIT_BERTUCCIO`). He's grateful, devoted, and terrified of something in his past.
- **Haydée:** in a Constantinople slave market, the Count buys the freedom of a Greek girl who was a princess. He gives her the paper that makes her free, and tells her she can go anywhere. She chooses to come with him to Paris. *"You are the only person who has ever asked me what I wanted."* (`RECRUIT_HAYDEE`.) Don't reveal her story yet (`DISCOVER_JANINA` is Act IV).
- **The third move** (`rules.md` §5): at the end of the nine years, offer the two moves Edmond doesn't know yet as a lettered menu. One line of montage for how he learned it (a season as a priest in Italy, a year with the smugglers, a library in Constantinople, a fortune spent wisely).
- **Sinbad:** if the player ever introduces themselves as *"Sinbad the Sailor"* with a straight face, record `sinbad_said` (`ACH_SINBAD`).

## 3.5 ROME: THE CATACOMBS (set piece)

Carnival in Rome, 1838. Confetti, masks, horse races down the Corso. Two young Frenchmen, **Albert de Morcerf** (Mercédès and Fernand's son) and his sharp-eyed friend **Franz d'Épinay**, are staying at the same hotel as the mysterious Count of Monte Cristo. Albert, charming and reckless, follows a masked woman out of the carnival. She's bait. He's kidnapped by the bandit **Luigi Vampa** and held for ransom in the **catacombs of Saint Sebastian**: pay 4,000 piastres by six in the morning, or he dies.

Run **`ENC_CATACOMBS`** (`game/encounters.md`). Franz brings the ransom note to the Count. The Count goes himself, at night, through miles of bones, to the bandits' camp. Vampa owes him a debt (the Count once spared one of his men) and Albert is set free, reading a book, unbothered, having slept through his own kidnapping.

```
[IMAGE_TRIGGER]
ID: IMG_CATACOMBS
TYPE: BATTLE
STATUS: OPTIONAL (fire if the budget allows)

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Ancient Roman catacombs by torchlight, walls of skulls and bones, a band
of armed brigands in sheepskin and pointed hats around a fire; their
handsome leader standing up in surprise; walking in calmly from the dark
tunnel, a tall pale man in a black cloak, alone, unarmed; behind the
bandits, a young Frenchman in a carnival costume sitting on a coffin
reading a book. Dramatic, theatrical, eerie.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- Albert is grateful beyond words. *"If you ever come to Paris, my father's house is yours. I insist."* The Count names a date three months away, at 10:30 in the morning. He is exactly on time.
- **The other life:** Vampa, impressed, offers the Count a place among the bandits of the Campagna, the freest men in Italy. Accepting is `KING OF THE BANDITS`.

**Arriving in Paris ends Act III.** 21 May 1838, 10:30 a.m., the Morcerf house, Rue du Helder. The clock strikes as the Count walks in. Record `REACH_PARIS` (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **He takes the treasure and disappears:** `THE TREASURE`.
- **He captains the new *Pharaon*:** `CAPTAIN OF THE PHARAON`.
- **He joins Vampa:** `KING OF THE BANDITS`.
- **He dies** (the catacombs gone wrong): `THE CEMETERY OF THE CHÂTEAU D'IF`.

===== FILE: world/the-world.md =====

# THE COUNT OF MONTE CRISTO: The World

Loaded at Act III. France and the Mediterranean, 1815 to 1838.

## The history (for flavor; never a lecture)
- **1815:** Napoleon is in exile on the island of **Elba**. On 1 March he escapes and returns to France for the Hundred Days, then loses at Waterloo. In February, carrying a letter from Elba makes you a Bonapartist plotter. Villefort's career depends on looking loyal to the King.
- **1829 to 1838:** France under a king again. In Paris, money, rank and gossip are everything. The new rich (bankers like Danglars) and the new nobility (soldiers like Fernand) buy their way into society.
- **Greece and Janina:** Ali Tebelen, Pasha of Janina, held out against the Ottoman Sultan until 1822, when he was betrayed by a French officer in his service and killed.

## Places
- **Marseille:** the Old Port, the Fort Saint-Jean, the Catalan village on the shore, **La Réserve** tavern with its vine arbor, the Allées de Meilhan, the Palais de Justice.
- **The Château d'If:** a fortress on a rock in Marseille bay. Dungeons below the sea line. The dead are thrown into the sea.
- **Monte Cristo:** a barren granite island south of Elba. Wild goats, myrtle, a small creek, a cave. Later, the Count's hidden palace.
- **The Pont du Gard:** Caderousse's poor inn, near the Roman aqueduct.
- **Rome:** Carnival on the Corso, the Hôtel de Londres, the **catacombs of Saint Sebastian** (Vampa's hideout).
- **Paris:** the Count's mansion on the **Champs-Élysées**; the Morcerf house on the Rue du Helder; the Danglars mansion on the Chaussée d'Antin; Villefort's house on the Faubourg Saint-Honoré; the **Opera**; the **Chamber of Peers**; the **Palais de Justice**; the woods of **Vincennes** (the duel); the **telegraph tower at Montlhéry**, outside the city.
- **Auteuil:** a village just outside Paris. A house with a walled garden, closed for twenty years, which the Count buys.

## Money, for scale
A sailor earns 100 francs a month. Morrel's debts: 287,000 francs. A good house in Paris: 500,000. Danglars' fortune: 30 million, on paper. The Count's: nobody can say.
