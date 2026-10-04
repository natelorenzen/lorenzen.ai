# ACT I: MARSEILLE

*The happiest day of Edmond's life, and the letter that ends it.* Target: 10 to 14 minutes, 7 to 10 decisions. 24 to 28 February 1815.

**Route** (each scene's goal is the status line's `NEXT`): bring the *Pharaon* in → see your father → the Catalans, Mercédès and Fernand → *the arbor at La Réserve* (where the letter is written) → the betrothal feast → **the arrest, and Villefort**.

---

## 1.0 COLD OPEN: THE PHARAON (the tutorial)

**Open with action, straight after the path tag.** It's easy, nobody gets hurt, and it teaches the game in 4 or 5 decisions.

**The scene:** 24 February 1815. The three-masted *Pharaon*, out of Smyrna, rounds the point into Marseille harbor under a hard mistral, flying her flag at half-mast. **Captain Leclère** died of fever at sea. **Edmond**, first mate, nineteen, has the deck. On the quay, a crowd is gathering; among them, **Monsieur Morrel**, the owner, already rowing out. At Edmond's elbow, **Danglars** the purser, smiling: *"A pity about the captain. I wonder who they'll give her to."*

- **Path spotlight**, one line for this path only:
  - COUNT: *Morrel's face in the boat: hope, and fear for his money. Everyone on that quay wants something from this ship.*
  - ABBE: *Danglars' smile doesn't reach his eyes. He's been carrying something for weeks.*
  - SAILOR: *the wind will push her onto the Fort Saint-Jean rocks if you take her in under topsails. Clew them up now.*
  - SCHOLAR: *Leclère's letter for Paris is in your coat. You promised. You don't know what's in it. Nobody aboard knows you have it, except Danglars, who watched you take it.*

**Beat 1: the first menu.** End the turn with a lettered menu. For example:
- **A.** Take her in yourself, under reduced sail, and let the crew see how it's done.
- **B.** Hand the deck to the pilot and go below for Leclère's papers.
- **C.** Call Danglars over and ask him, quietly, what he's smiling about.
- **D.** Other: type your own

```
[ TIP · Type A, B or C to choose, or type anything you can imagine. The options are a shortcut, never a limit. ]
```

**Beat 2: the first roll.** Bringing the *Pharaon* to anchor in the mistral: an **easy d20 (DC 8)**, shown openly. Success: she glides in, and the crowd cheers. A miss: a hard landing, a broken spar, and Danglars makes sure Morrel notices.

```
[ TIP · Easy things just happen. When it really matters, the d20 decides how well. +2 when it fits who you'll become. ]
```

**Beat 3: the captaincy.** Morrel comes aboard, looks at the ship and the man, and says it: *"Captain Dantès."* Danglars congratulates him first, and warmest. Introduce VENGEANCE here, by contrast: Edmond has never hated anyone in his life.

```
[ TIP · VENGEANCE (0 to 5) is how much of Edmond the Count replaces. It starts at 0. Revenge that hurts the innocent raises it; mercy and truth lower it. It decides how this story can end. ]
```

**Beat 4: the move.** Morrel asks, offhand, why the *Pharaon* stopped at the island of Elba. Danglars is listening very carefully. Morrel's clerk points at Edmond: *"This is your gift. Use it."* Let the move work, cleanly (the Count's charm turns the question into a joke; the Abbé reads Danglars' interest; the Sailor's seamanship gives a good nautical reason for Elba; the Scholar notices Danglars has already counted the days). This one is free: the move is ready again for the rest of Act I.

```
[ TIP · Your MOVE works once per act, no roll: MONEY IS A KEY, CONFESSION, SINBAD or FARIA'S METHOD. It grows as you do. ]
```

**Beat 5.** The ship is in. Edmond is captain. He has a father to see and a wedding to arrange. Print the first status line.

```
[ TIP · The status line shows where and when you are, your VENGEANCE, and where you're headed. Type STATUS, WHO or RECAP anytime. SAVE GAME works too. ]
```

**Rules:** no harm here. A miss costs something small: a scraped hull, Morrel's frown, Danglars' satisfaction. Tips appear only here, and can be skipped.

---

## 1.1 FATHER

A small room on the Allées de Meilhan. **Louis Dantès**, thin, proud, has been living on almost nothing. (He paid back a debt to Caderousse with the money Edmond left him.) He weeps. Edmond can give him money, promises, and the news that he'll never be poor again. Make the player love the old man. It matters later.

**Caderousse**, the neighbor, leans in the doorway, congratulating too loudly and asking how much a captain earns.

## 1.2 THE CATALANS

The Catalan village on the shore, low white houses and nets. **Mercédès**, mending a net, sees Edmond and runs. **Fernand** is sitting at her table, his knife in the wood. *"You've come back,"* he says, as if it were an accusation. Mercédès makes it plain: she loves Edmond, she will always love Edmond, and if Edmond dies, she'll die too. Fernand leaves without a word.

- How Edmond treats Fernand here, kindly or proudly, is remembered (it changes nothing about the letter, but it changes how the player feels in Act V).

## 1.3 THE ARBOR AT LA RÉSERVE (the letter)

Walking back, Edmond passes **La Réserve**, a tavern with a vine arbor. At a table under the vines: **Danglars**, **Caderousse** (drunk), and, a moment later, **Fernand**, who's been brought over. They raise a glass to the new captain. Edmond can stop and drink with them, or wave and walk on.

- **What's happening** (`DISCOVER_THE_LETTER`): Danglars, smiling, calls for pen, ink and paper. He writes **with his left hand**, slowly, a short note: an anonymous denunciation saying Edmond carries a letter from Napoleon on Elba to the Bonapartist committee in Paris. He crumples it and tosses it in a corner, *"a joke"*. Fernand picks it up when he thinks no one sees. Caderousse sees, and is too drunk to care.
- **How the player can catch it:** by stopping and staying; by an ABBE or SCHOLAR noticing a man writing with the wrong hand (ABBE SEES Danglars' guilt, SCHOLAR SEES the ink on the wrong fingers); by looking back from the street; or by Caderousse, later, babbling something. Report `DISCOVER_THE_LETTER` only if the player actually learns what was written, or sees enough to know.
- **This is the one place the whole story can be prevented.** If the player knows, and acts (gets the letter back, destroys Leclère's letter for Paris, goes straight to Morrel or the authorities, or takes Mercédès and leaves Marseille before the feast), let it work, if it's clever and the dice allow. That's `THE WEDDING FEAST` (`game/endings.md`, fetch `pack-end.md`). It should be possible, and not easy.

## 1.4 THE BETROTHAL FEAST

28 February. La Réserve's upper room, the whole Catalan village, Morrel, flowers, wine. Edmond and Mercédès are to be married at the town hall at two. Danglars toasts the couple. Fernand is pale. Old Dantès is happy.

**Three knocks.** A commissary of police and four soldiers. *"Which of you is Edmond Dantès?"* The room goes silent.

- The player can go quietly, argue, or (if they're very bold) try to run. Running is dangerous: it's a telegraphed **Hard (DC 15)** roll, and a miss by 5 or more is gunfire on the harbor steps (`THE CEMETERY OF THE CHÂTEAU D'IF`). Make sure they know.
- Mercédès's face as they take him is the image the player will carry for fourteen years. Don't fire an image here (none in Act I), but write it so it lasts.

## 1.5 VILLEFORT

The Palais de Justice, late afternoon. **Gérard de Villefort**, deputy prosecutor, has left his own betrothal lunch to deal with this. He's handsome, ambitious, and at first, genuinely kind: Edmond is obviously innocent, a sailor who did his dead captain a favor. Villefort is about to let him go.

Then he asks to see the letter from Elba, and reads the name it's addressed to: **Monsieur Noirtier, Rue Coq-Héron, Paris** (`DISCOVER_NOIRTIER`, if the player sees or learns the name). Villefort's face changes completely. He asks, very carefully, whether Edmond has told anyone the name. Then he **burns the letter in the fireplace** in front of him, smiling: *"There. Now there's no evidence against you. You'll be free in the morning."*

- **Noirtier is Villefort's father.** A royalist prosecutor with a Bonapartist father is finished. Villefort is burying the only witness: Edmond.
- The player can try anything (beg, threaten, mention Morrel, demand a trial). Nothing changes Villefort's mind, but let them try, and let it reveal character. A SCHOLAR's move or an ABBE's move can see what the name meant to him, which is a lead for Act II.
- That night, gendarmes put Edmond in a boat. *"Where are we going?"* Nobody answers. The boat turns, not toward the Palais, but out to sea, toward a black rock in the harbor with a fortress on it: **the Château d'If.**

**The prison gate closing ends Act I.** Record `REACH_CHATEAU` (it's sent with everything else at the end) and fetch the Act II pack.

---

## Exceptions

- **The arrest is prevented** at 1.3: `THE WEDDING FEAST` (fetch `pack-end.md`).
- **Edmond is shot fleeing** the arrest: `THE CEMETERY OF THE CHÂTEAU D'IF`.
