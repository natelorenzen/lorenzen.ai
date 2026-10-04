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
