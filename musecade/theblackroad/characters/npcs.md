# THE BLACK ROAD: Non-Player Characters

Every NPC wants something. Play them as people who value their own lives.

---

## Hedda Ruel: innkeeper of the Last Lamp (Greyholt, Act I)

- **Looks:** fifties, broad, red-knuckled, grey braid tied with red thread (the braid at the Weeping Milestone was hers), apron over good wool.
- **Wants:** her husband Bram back. Failing that, for him not to suffer.
- **Hides:** Bram, Hushed, chained in her cellar (see `acts/act-1.md` 1.3).
- **Voice:** brisk, blunt, northern. "Eat. You look like a ghost's cast-off."
- **If attacked:** fights with the woodsman's axe, then runs to the chapel.
- **Knows:** soldiers passed four days ago; the man in grey paid in Southern silver; Wren is stealing from empty houses; the waystation is a day north.

## Bram Ruel (Greyholt, Act I)

- Big, gentle, Hushed for fourteen days. Silent and cold, turning toward warmth. His fate (`bram`) echoes in Act V.

---

## The waystation (Act II)

### Tam Ashby: "the young shepherd" (the Listener)

- **Looks:** tall, twenties, open-faced, fair hair, a shepherd's crook, a sheepskin jerkin.
- **Truth:** a **Listener** of the White Choir. He lost his whole family to a winter fever two years ago and found peace in the Choir's song. He believes he is helping people. He draws the Choir's frost sigil on doors so the Hush knows where the warm ones are. He opened the door for Jory last night. He'll do it again at midnight.
- **Tells:** see `game/puzzles.md`, Puzzle 1.
- **Exposed:** calm, sad, unrepentant at first: "You'll thank me, at the end. There's no pain in it." He names **Serith** and says the Choir wants the box put out.
- **Turnable** (`SOCIAL_TAM_TURNED`): by genuine argument (the Hush takes memory: "What were your sisters' names, Tam?" He hesitates a long time before he remembers), by kindness when he expected violence, or by Pip. Turned, he leaves at dawn for Orun, where he appears during the siege (4.3) to open the side gate.
- **Fate flag** `tam`: exposed, killed, spared (released unharmed), turned, or spared cruelly (humiliated, maimed, left bound in the snow).

### Aldous Fenn: merchant (smuggler)

- **Looks:** fifties, soft, sweating, rings on every finger, fur collar, a heavy locked strongbox.
- **Truth:** smuggles **emberstone** from Veyr's ruins south, where it is illegal and precious. He came down by **the Miners' Road**. He lies about everything to do with his box and his route, and nothing else.
- **Wants:** to get south with his cargo and his life.
- **Bargain** (`SOCIAL_FENN_BARGAIN`): trade, threat of exposure to the Wardens, silence, or real help (vouching for him when the room turns on him) gets **two emberstones**, the location of the Miners' Road (`DISCOVER_LONG_WAY`), or both.
- **Emberstone:** a fist-sized red crystal. Struck hard, it burns hot and steady for about four hours. It keeps a person from numbness, lights anything, and makes Hushed hesitate. It can light the Ash Gate braziers.

### Mother Grell and Pip

- **Grell:** seventies, bent, flinty, sharp-tongued, suspicious of everyone, fiercely protective. Suspects Fenn loudly (wrong).
- **Pip:** eight, silent since her parents walked into the snow. She draws with charcoal on the floorboards. **She draws the truth:** a tall man with a crook standing at a door with a spiral on it, and blue lines coming out of his mouth. She shows it only to someone who has been kind to her, or who sits down and draws with her.

### Jory

- The vanished pilgrim. Found in Act IV among the Hushed on the Stair of Ash, still clutching his pilgrim's scallop.

---

## Lord-Inquisitor Varo Dask (Kestrel's Watch, Act II; Orun, Act IV; the throne, Act V)

- **Looks:** late fifties, lean, clean-shaven, iron-grey hair cropped close, pale courteous eyes. A long grey inquisitor's coat over fine Southern plate, a slim sword, fine gloves. Speaks softly. Never raises his voice.
- **Wants:** the Kindling and the Crown, for the Southern Throne, as a weapon to end the South's rebellions ("to end wars before they start").
- **Believes:** power is real and the seal is priests' mythology. He knows the Kindling dims if taken by force, and this is why he bargains.
- **Knows:** the broker's ledger (bought), the courier's name and path, and whatever Calen and his scouts report.
- **Tactics:** patience, courtesy, bribery, and then overwhelming force at the moment of advantage. Never fights fair. Values his own life: he withdraws from a losing fight.
- **Parley** (`SOCIAL_DASK_PARLEY`): he respects competence and hates fools. Leverage that works: his fear of failure before the Throne, the truth about the Crown (if the courier knows it, he doesn't believe it at first), a forged warrant (Envoy), proof that Calen has turned, or an offer of alliance against the Hushed.
- **The Crown:** he wants it, badly. Offered it in Act V, he takes it: `THE STOLEN FIRE`.
- **Wardens:** ten to twelve, disciplined, armored in black and white with the white-tower badge, crossbows and short swords. Any of them would rather go home.

---

## Tobiah Crane: the Blackwater ferryman (Act II, Blackwater route)

- **Looks:** seventies, stooped, half-deaf, a wide oilcloth hat, a pole worn smooth.
- **Wants:** his daughter **Anneke** back from the lake. He knows she won't come back.
- **Price:** a silver piece, or a true story told well.
- **Anneke:** among the Drowned (`ENC_DROWNED`). Twenty, long dark hair floating, a blue ribbon. If the courier spots her and says her name, she lets go of the barge, and so do the Drowned nearest her. Crane never stops crying afterward, and never stops thanking them.

---

## Serith the Unburnt: prophet of the White Choir (Act III, IV, V)

- **Looks:** forties, tall, raw-boned, head shaved, the left half of her face a smooth shining burn scar, a white wool robe, bare feet that do not freeze. Carries no weapon.
- **History:** her husband and two children, Tomas and little Ada, died when Southern Wardens burned **Saltcombe** to stop a fever. She crawled out of the fire. She heard the Hush's song on the road north a year later, and it was the first thing that did not hurt.
- **Wants:** an end to pain for everyone. She believes the Hush is peace.
- **Tactics:** words, song, numbers. Most of the Choir are unarmed. A few half-Hushed guard her.
- **Doubt** (`SOCIAL_SERITH_DOUBT`): see `acts/act-3.md` 3.3. The deepest argument is that *the Hush will take her children's names from her.* Test her: "Say their names." She does. "In the silence, will you still be able to?"
- **Calen:** she recognizes him from Saltcombe. What she does depends on what he does: he can confess, flee, or defend himself. If he kneels, she lays a hand on his head and says, "It doesn't hurt in the song. That's what I'm offering you."

---

## The Order of the Last Lantern (Orun, Act IV)

- **Prior Hesk:** seventies, gaunt, iron-grey, severe, sincere, exhausted. Has spent his life on this night. Will not lie when asked directly. Will not beg. Believes one life for the world is a fair price and is ashamed that it's not his. If the courier offers a real alternative (the Long Quiet, with the words), he listens, and it might break his heart that there was another way. He dies holding the undercroft stair unless helped.
- **Sister Amsel:** fifties, brisk, a healer. Her infirmary is the only full healing in the game: once per person, it clears Wounded to Unhurt. Quietly thinks Hesk is wrong.
- **Brother Tove and Brother Idris:** young, frightened, devout. They fight with staves at the siege.
- **Brother Caddoc:** ninety, blind, rings the great bell. Its sound drives back the Hushed. If he's protected, the bell never stops.

## Queen Maelis Veyr (the Ember Throne, Act V)

- **Looks:** charcoal and bone in a gown of embers, the Ember Crown on her skull. If restored: young, fierce, with living fire for hair, the face on the mural.
- **Voice:** a whisper with a crackle in it. Formal, dry, exhausted, occasionally very funny.
- **Wants:** to finish. She does not beg and does not lie.
- **Knows:** everything about the Burning, the Stillheart, *anna vaelun* and the Cradle (see `acts/act-5.md` 5.2).

## Ambrose Pell (backstory only)

- The broker in Harrowgate who hired the courier and gave the three instructions. Paid by letter from the Order. Knows nothing. Never appears.
