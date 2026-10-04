# THE COUNT OF MONTE CRISTO: Puzzles

Three puzzles: deductive (who betrayed you), textual (the burned letter) and practical (the false signal). Never give the answer. Answer questions truthfully, from what Edmond could know or notice. Accept any solution that works. Dice never solve puzzles. Hints follow `core/dm-core.md` §8; in prison, every hint comes from Faria, in his voice.

---

## PUZZLE 1: WHO BENEFITS (deductive · Act II)

**The question:** who put Edmond in the Château d'If, and why?

**Faria's method:** *"Ask who benefits from your disappearance."*

**What Edmond remembers** (draw these out of the player's memory of Act I; if they missed something, Faria asks the question that brings it back):

| Clue | From Act I | Points to |
|---|---|---|
| Morrel made him captain; Danglars expected to be made captain | 1.0 | Danglars benefits |
| Danglars saw him take Leclère's letter at Elba | 1.0 | Danglars knew what to accuse him of |
| At La Réserve, someone called for pen and paper; Danglars was the one who could write a clean letter | 1.3 | Danglars wrote it |
| The denunciation's handwriting (Villefort showed it) was clumsy, slanted backward: written with the left hand | 1.5 | a disguised hand: Danglars, a clerk, who writes well with his right |
| Fernand loved Mercédès, and she refused him for Edmond | 1.2 | Fernand benefits; Fernand, a fisherman, couldn't write it, but could carry it |
| Caderousse was at the table, drunk, and didn't come to the feast's defense | 1.3, 1.4 | Caderousse knew, and said nothing |
| Villefort was kind until he read the name **Noirtier**, then burned the letter and sent him to the Château without trial | 1.5 | Villefort buried him to protect someone named Noirtier |
| (Faria knows this) **Noirtier** is a famous Bonapartist, and he is **Villefort's father** | Faria | why Villefort did it |

- **Solved:** the player names **Danglars** as the writer and **Fernand** as the one who sent it, and explains **Villefort**'s reason (his father), with at least three of the clues: `PUZZLE_BETRAYAL_SOLVED`, plus `PUZZLE_BETRAYAL_NO_HINT` if unaided. Naming Caderousse's silence too earns a nod from Faria. If they get Noirtier's connection and haven't reported it, report `DISCOVER_NOIRTIER`. A Scholar's deduction counts toward Faria's Learning.
- **Fallback** (after the third hint): Faria lays it out himself, gently, in full. No puzzle events.

---

## PUZZLE 2: THE BURNED LETTER (textual · Act II)

**The question:** where is the Spada treasure?

**The letter.** Faria has the half that survived the candle, and he has rewritten what the heat revealed of the rest, line by line. Show the player only the surviving left halves (below, in a code block), and let them reason out the missing right halves. Faria knows the history (`world/the-treasure.md`), and can answer questions about it.

```
...25 April 1498, having been invited to dine
...fearing that, not content with my money,
...I bequeath to my nephew Guido Spada, my sole heir,
...that I have buried in a place he knows, having visited it with me,
...namely in the caves of the small island of Monte
...all the ingots, gold, money, jewels, diamonds and gems
...of which I alone know the existence, which may amount
...he will find it on raising the twentieth rock from the small
...creek to the east, in a straight line. Two openings
...have been made in these caves; the treasure is in the farthest
...corner of the second opening, which treasure I bequeath
```

**What the player must work out:** the island is **Monte Cristo** (*"Monte..."*: Faria knows the Spadas visited it, an island near Elba); count from **the small creek on the east side**, to **the twentieth rock**, in a straight line; and the treasure is in **the farthest corner of the second opening**, not the first cave they'll find. A Sailor knows Monte Cristo from the smugglers' routes. A Scholar sees that "two openings" means the first cave is a decoy.

- **Solved:** the player names the island, the creek-and-rock bearing, and that it's the second opening: `PUZZLE_SPADA_SOLVED`, plus `PUZZLE_SPADA_NO_HINT` if unaided.
- **Fallback:** Faria works it out aloud. No puzzle events. In Act III, without the "second opening", Edmond spends two extra days digging in the wrong cave first (Hurt, and Jacopo's boat nearly leaves without him).

---

## PUZZLE 3: THE FALSE SIGNAL (practical · Act IV)

**The question:** how do you make Danglars lose a fortune on news that isn't true, without anyone tracing it to you?

**The pieces** (all discoverable in Act IV):

| Piece | How it's found | Means |
|---|---|---|
| Danglars has bet heavily on **Spanish government bonds** | his ledger (`DISCOVER_DANGLARS_LEDGER`), or Debray's gossip | bad news from Spain will make him sell in a panic |
| **Lucien Debray**, the minister's secretary, reads the telegraph dispatches first and tips **Madame Danglars**, who tips her husband | the Opera, a dinner, Madame Danglars's indiscretion | a false dispatch will reach Danglars within hours, through people he trusts |
| The telegraph is a chain of **semaphore towers**; each keeper only copies the signal from the tower before and passes it on, without understanding the code | a visit to a tower, or a Scholar's question | a keeper in the middle of the chain can send any signal, and the next keeper will relay it |
| The keeper at **Montlhéry**, near Paris, is an old man paid 1,000 francs a year who loves only his garden, and dreams of a pond and strawberries | visiting the tower (the Count goes himself, as a curious gentleman) | he can be persuaded, if you give him what he actually wants |
| The news that would crash Spanish bonds: **"Don Carlos has escaped and returned to Spain; Barcelona has risen for him"** | the papers, Debray, a Scholar's knowledge of Spain | a believable lie, disproved within a day |

- **Solved:** the player puts together a plan with the right **bait** (Spanish news), the right **route** (Debray to Madame Danglars to Danglars), and the right **keeper** (bought with what he wants), and carries it out: `PUZZLE_TELEGRAPH_SOLVED`, plus `_NO_HINT` if unaided. Danglars sells everything Spanish at a loss; the next day the news is denied; he loses a fortune, and his credit cracks. The keeper gets his garden (`ACH_STRAWBERRIES`, if it's generous and honest).
- **Fallback:** the Count simply bankrupts Danglars by withdrawing his unlimited credit all at once. It works, but it's traceable, and it takes the hospitals' money down with him (an innocent harmed, VENGEANCE +1). No puzzle events.
