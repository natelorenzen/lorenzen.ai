# ACT IV: PARIS

*The season: a recognition across a breakfast table, three enemies at the height of their power, a dinner in a haunted garden, a false signal, and a poisoner.* Target: 12 to 16 minutes, 8 to 11 decisions. **Evenings 1 to about 12 of a 20-evening season**, 1838.

**Route:** arrive at the Morcerfs' (and be recognized) → choose how to strike each enemy → the dinner at Auteuil → the telegraph → *protect Valentine* (the poisoner reaches her on evening 15) → **the night the Chamber of Peers convenes**.

Start the clock: `PARIS · EVENING 1 OF 20` (`rules.md` §4).

---

## 4.1 THE BREAKFAST

The Morcerf house, 10:30 a.m. Albert introduces the Count to Paris's young men, who are dazzled: the emeralds, the Arabian horses, the stories of the East. Then to his father, **General Fernand, Count de Morcerf**, who doesn't recognize Edmond at all. Then, in the doorway, to his mother.

**Mercédès** sees him. Her face goes white. She says, perfectly steadily, *"Monsieur le Comte."* She knows. He knows she knows. Neither says a word. (Record her in `recognized by`. It doesn't count as being unmasked: she will never tell.)

- Later, in the garden, she offers him a peach from the hothouse. **He won't take it.** (In the East, you never eat in the house of an enemy.) She understands exactly what that means.
- **The last move** (`rules.md` §5): that night, in his new house on the Champs-Élysées, the last mask fits. Edmond knows all four moves now; tell the player which one they've gained, and that each works once per act.
- **The goal, said plainly in the narration:** three men built their lives on Edmond's grave: Fernand, Danglars, Villefort. They're all in this city. He has twenty evenings. What he does with them is the game.

## 4.2 THE THREE ENEMIES

Let the player plan freely. Each enemy has a weakness; each strike can hit someone innocent, and VENGEANCE tracks it (`rules.md` §2). Offer them as leads, not a script:

- **Fernand** (Janina): at the Opera, Haydée sees Fernand in a box across the house, and faints. Afterward she tells the Count the whole story of Janina (`DISCOVER_JANINA`): her father's fortress, the French officer who sold it, her mother dying in slavery. The proof is in the Pasha's papers and in her. *The innocent at risk:* **Albert**, who worships his father, and Mercédès.
- **Danglars** (the bank): the Count opens "unlimited credit" with Danglars' bank and watches it strain. A BUYER-like eye, an Operator's patience, or Lucien Debray's gossip reveals the truth (`DISCOVER_DANGLARS_LEDGER`): Danglars is speculating with borrowed money on **Spanish government bonds**, on tips his wife gets from Debray, who reads the ministry's telegraph news first. *The innocent at risk:* **Eugénie**, who'd happily be free of all of them, and the hospitals whose money Danglars holds.
- **Villefort** (Auteuil): see 4.3. *The innocents at risk:* **Valentine**, and his little son Édouard.

## 4.3 DINNER AT AUTEUIL (set piece)

The Count buys a house at **Auteuil**, closed for twenty years. When **Bertuccio** sees the garden, he goes grey and tells his story (`ALLY_BERTUCCIO_TELLS`, `DISCOVER_AUTEUIL`): the vendetta, the night he struck Villefort down, the box Villefort had buried, the baby inside it, alive. The baby grew up to be **Benedetto**, a thief who was sent to the galleys and escaped.

The Count invites Paris to dinner there: **Villefort**, **Monsieur and Madame Danglars**, Debray, Maximilien Morrel, and a charming young "Italian prince", **Andrea Cavalcanti**, whom the Count is "sponsoring" in society. Run **`ENC_AUTEUIL`** (`game/encounters.md`). After dinner, the Count walks his guests through the garden and tells them, as an amusing ghost story, that his workmen found the bones of a newborn buried under a tree. **Madame Danglars faints. Villefort goes white.** (She was the baby's mother.)

```
[IMAGE_TRIGGER]
ID: IMG_AUTEUIL
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A walled garden at night behind an old country house, lanterns in the
trees, guests in 1830s evening dress gathered under a great dark tree; a
pale man in black with a candle gesturing calmly at a patch of dug earth;
a lady in silk fainting into a gentleman's arms; a tall stern man in a
magistrate's black coat frozen white with terror. Gothic, elegant,
suspenseful.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **Andrea Cavalcanti** (`DISCOVER_BENEDETTO`): the Count knows, or the player can work out (via Bertuccio, who recognizes the young man with horror, or a Scholar's connection), that Andrea is Benedetto. The convict son Villefort buried is courting Danglars' daughter, sponsored by the Count. It's a terrible weapon. It's aimed at people who didn't bury anyone (Eugénie, and Villefort's family).

## 4.4 THE FALSE SIGNAL (puzzle)

Danglars lives on the telegraph. The ministry's news crosses France on **semaphore towers**: arms on a pole that relay coded signals from hilltop to hilltop. Debray sees it first and tips Madame Danglars, who tips her husband. Run `game/puzzles.md`, *Puzzle 3: The False Signal*. If it works, Danglars sells his Spanish bonds in a panic on false news, and loses a million francs the next day when the truth comes out. It's the first crack in the bank.

- **The keeper's garden** (`ACH_STRAWBERRIES`, `strawberries`): the keeper at Montlhéry, an old man who wants nothing but a garden with a pond and strawberries. Giving him one, honestly and generously, is the hidden achievement.

## 4.5 THE POISONER

Death keeps visiting Villefort's house: Valentine's grandparents, the Saint-Mérans, die suddenly one after the other. Then a servant. The family doctor, **d'Avrigny**, whispers the word: poison. Villefort refuses to believe it.

- **Noirtier**, paralyzed, speaking only with his eyes, has worked it out. Asked the right way (Valentine reading the alphabet, one blink for yes), he spells it: his son's second wife, **Héloïse** (`DISCOVER_POISONER`). She's killing for her son's inheritance. **Valentine is next.** He has been giving Valentine tiny daily doses of his own medicine (brucine) to make her resistant. It won't be enough for long.
- **The clock:** on **evening 15**, the poisoner gives Valentine a dose that will kill her, unless the player has acted: moving her, warning her, exposing Héloïse, or (the novel's way) secretly giving her a sleeping draught that makes her appear dead, then spiriting her away to Monte Cristo. A Scholar's chemistry, an Abbé's confession, or Maximilien's courage can each help. **Valentine dying is the single heaviest weight on VENGEANCE in the game** (+2), because the Count's plans brought the danger close and he knew.
- Maximilien Morrel, the son of the man who saved Edmond's father, loves Valentine. If she's lost, he wants to die. Remember it for the endings.

## 4.6 MERCÉDÈS

At any point in Act IV or Act V, Mercédès can come to the Count's house, alone, at night. She doesn't call him "Count". She calls him **"Edmond."**

- **What she knew** (`DISCOVER_MERCEDES_TRUTH`): she recognized him the instant she saw him. She waited eighteen months. She married Fernand only after she was told Edmond was dead and his father had died. She paid, secretly, for Louis Dantès' grave, and has visited it every year. *"I've never stopped being the girl at the Catalans. You're the one who stopped being Edmond."*
- **A real conversation** (`SOCIAL_MERCEDES`): if the player answers her as **Edmond**, honestly, not as the Count, and not with a speech about justice. It opens the hidden ending, `EDMOND`. (It also drops VENGEANCE by 1.)

## The night the Chamber convenes

Around evening 12: a newspaper in Janina's region prints the story of a French officer who betrayed Ali Pasha. The Chamber of Peers calls the Count de Morcerf to answer it tonight. Paris is buzzing. Albert is furious, and looking for whoever planted it. **Record `REACH_RECKONING`** (it's sent with everything else at the end) and fetch the Act V pack.

---

## Exceptions

- **The player gives the evidence to the courts and the King's ministers** instead of using it himself (the Janina papers, the Auteuil story, the poisoner, Danglars' books), and steps back to let the law work: `THE KING'S JUSTICE` (fetch `pack-end.md`). He may still need to protect Valentine.
- **Two enemies learn who he is** before he reveals it (`rules.md` §7): `UNMASKED`.
- **He dies:** `THE CEMETERY OF THE CHÂTEAU D'IF`.
