# THE COUNT OF MONTE CRISTO: Companions

Three people join Edmond after the Château d'If. Trust runs from -3 to +3 (`core/dm-core.md` §7). Each has a moment, and a way to be lost: they **leave** (disgusted by what the Count has become) or are **taken** (hurt, arrested, or sent away). Companions see VENGEANCE in action: at 4 or more, each loses 1 trust per act.

---

## JACOPO: the smuggler

**Visual:** thirties, Genoese, sun-black, a red cap, bare feet on any deck, a laugh like a dropped anchor.

**Personality:** cheerful, loyal, superstitious, honest in everything except customs duties. He thinks Edmond is the best sailor he's ever seen, and says so.

**History:** a sailor on the smuggling tartane *Jeune Amélie*. He pulls Edmond out of the sea after the escape (Act II) and shares his bread, his shirt and his watch on deck.

**Capability:** ships, crews, smugglers' coves from Genoa to Marseille, and the patience to sit in a boat off an island for three days without asking why.

**Moment** (`ALLY_JACOPO_REFUSES`): when Edmond offers him a fortune from the treasure, he refuses all but enough for a boat of his own. *"You pulled me through your storm. That's enough for a man."* He'll captain that boat for the Count for the rest of the game. `RECRUIT_JACOPO` in Act II.

---

## BERTUCCIO: the steward

**Visual:** fifties, Corsican, grey, broad-shouldered, a steward's black coat, and a habit of crossing himself whenever anyone mentions Auteuil.

**Personality:** fierce, devoted, guilt-ridden, superstitious. He runs the Count's houses perfectly and has a past he doesn't talk about.

**History:** twenty years ago, Villefort refused justice for Bertuccio's murdered brother. Bertuccio swore a Corsican *vendetta*, followed Villefort to a house in **Auteuil**, and one night saw him bury a box in the garden. He struck Villefort down, dug up the box, and found a newborn baby, alive. He and his sister-in-law raised the child, **Benedetto**, who grew up cruel and ran away. The Abbé Busoni once heard this confession, which is how the Count knows to hire him.

**Capability:** knows every house, servant and back door in Paris; can arrange anything; knows Villefort's secret. He helps with the Auteuil dinner (`ENC_AUTEUIL`).

**Moment** (`ALLY_BERTUCCIO_TELLS`): when the Count buys the house at Auteuil (Act IV) and Bertuccio sees the garden, he goes white and tells the whole story (`DISCOVER_AUTEUIL`; it can lead to `DISCOVER_BENEDETTO`). How Edmond takes it decides whether Bertuccio is forgiven, by himself or anyone. `RECRUIT_BERTUCCIO` in Act III.

---

## HAYDÉE: the princess

**Visual:** twenty, Greek, dark eyes, an embroidered jacket and silk, a lute, and a way of sitting very still that means she's remembering.

**Personality:** proud, brilliant, grave, unexpectedly funny in four languages. She was a princess, then a slave, and is now free, and she has thought harder than anyone in Paris about what to do with freedom.

**History:** the daughter of **Ali Tebelen, Pasha of Janina**. When she was four, a French officer in her father's service betrayed the fortress to the Turks, her father was killed, and she and her mother were sold as slaves. The officer's name was **Fernand Mondego**, now the Count de Morcerf (`DISCOVER_JANINA`). The Count bought her freedom in Constantinople; she lives in his house in Paris as a free woman, and has been told so, in writing.

**Capability:** she is living proof of what Fernand did, and the only witness. She also notices everything at the Opera.

**Moment** (`ALLY_HAYDEE_STANDS`): at the Chamber of Peers (Act V), when Fernand denies it all, Haydée walks in, unveils, and testifies. It has to be **her choice**, asked for honestly, never ordered. `RECRUIT_HAYDEE` in Act III (her freedom bought) or early Act IV.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited companion who is still with Edmond, or safe and on good terms, at the end.
