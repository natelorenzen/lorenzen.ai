# THE SEA GLASS INN · PACK-END · BUILD 1.0-160a2be

Bundle for: any ending triggers before Act V (death, leaving early, surrender). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: game/endings.md =====

# THE SEA GLASS INN: Endings

Eleven endings. None is a failure, and none is "the right answer". Each is a way a woman can choose to live the second half of her life. Treat every one with dignity and warmth.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, told as "one year later" (the next Sea Glass Festival); (4) complete the run with the ending's **ID** and `died: false`; (5) the final screen (`scoring.md`).

**Epilogue fragments** (use the ones that apply):

- **Bea:** partners: *"Bea's name went up on the sign under Winnie's. She finally sat down. Once."* Otherwise: *"Bea opened a little café on the harbor, and it was full every morning."*
- **Jonah:** bonded: *"The* Winifred *went back in the water in May, with two people aboard."* Otherwise: *"Jonah built three boats that winter. He named one after the storm."*
- **Maya:** bonded: *"Maya's first boat launched in June. Her mother cried on the ramp and blamed the salt."* Otherwise: *"Maya went back to the city. She called every Sunday, and she meant it."*
- **Lydia:** at peace: *"Lydia came back for the festival, with a new haircut and a new job, and she won the sea glass contest out of sheer spite."*
- **Marguerite:** *"Marguerite made the festival bread one more time. She said it was her last. It wasn't."*
- **The painting:** say where it hangs, and who stands in front of it.
- **Vale:** *"Preston Vale bought a bluff on a different island. Its council was less interesting."*

---

## THE KEEPER

**ID:** `ENDING_THE_KEEPER` · **fate:** lives

**The moment:** She takes Winnie's keys off the hook by the door and puts them in her own pocket. Tomorrow the roofer comes, and the day after, the plumber. The inn is hers, not as an inheritance, but as a job she chose.

**Epilogue:** A year later the Sea Glass Inn has nine working rooms, a waiting list for the festival, and a new sign. Say how it was saved: the island, the painting, a lot of spreadsheets, or all three. She still loses her reading glasses. She has never been less lost.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_KEEPER
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Morning sun on a freshly painted shingled Victorian inn on a bluff, window
boxes of flowers, a new hand-lettered sign reading nothing legible, the
player on the porch with a mug and a ring of old keys, companions
around her, the lighthouse bright on the point behind. Warm, triumphant,
cozy.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## MARLOWE HOUSE

**ID:** `ENDING_MARLOWE_HOUSE` · **fate:** lives

**The moment:** In front of the whole Grange Hall, or on the porch with only Marguerite to hear, she says it: the painting stays on Halcyon, forever, and the inn becomes a place where people come to make things.

**Epilogue:** Marlowe House opened in June: six artists in residence, a gallery in the old dining room, and *The Keeper's Daughter* in the room where it was painted, the window's sea glass throwing color on the floor. Art historians came in their thousands. The ferry added a run. Say who runs it (Bea, the player, or both) and what the player does with her mornings.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_MARLOWE_HOUSE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A sunlit gallery room in an old inn: visitors standing quietly before a
large glowing painting of a lighthouse in a storm, colored light from a
round sea-glass window spilling across the floorboards; through the doorway
an artist at an easel on the porch; the player leaning in the doorway,
smiling. Luminous, peaceful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## SECOND SPRING

**ID:** `ENDING_SECOND_SPRING` · **fate:** lives

**The moment:** Jonah, on the seawall at sunset, says more words in a row than anyone has heard from him in four years. None of them is a proposal, and all of them are an invitation. She stays. (PG, and warm.)

**Epilogue:** The *Winifred* went back in the water in May. They take her out on Sunday mornings when the tide is right. Say what she does with the inn. Mostly, though, this is the story of a woman who thought that part of her life was finished, and found out it wasn't.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SECOND_SPRING
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A small varnished wooden sailboat named in white letters (unreadable) on a
calm sparkling bay at golden hour, two figures aboard (the player and a
broad-shouldered bearded man at the tiller), the lighthouse and the inn on
the bluff behind them. Soft, romantic, bright.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## MAYA'S HARBOR

**ID:** `ENDING_MAYAS_HARBOR` · **fate:** lives

**The moment:** She hands Maya the inn's keys, or the boatyard's, or both. *"It's yours to figure out. I'll be a ferry away."* Maya holds them for a long time.

**Epilogue:** Maya apprenticed with Jonah, took over the inn's odd jobs, and built her first boat by summer. Say where the player went: back to the city, somewhere new, or the cottage down the lane. Their Sunday calls became Sunday visits. The best thing Winnie left wasn't the inn; it was the week that gave a mother and daughter back to each other.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_MAYAS_HARBOR
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A boat ramp at sunrise: a young woman with a nose ring and sawdust on her
overalls launching a small new wooden boat, her mother on the ramp beside
her hand to her heart, a bearded boatbuilder grinning in the shed doorway,
the inn on the bluff above. Proud, tender, fresh.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## TWO HARBORS

**ID:** `ENDING_TWO_HARBORS` · **fate:** lives

**The moment:** A handshake across Bea's kitchen table that turns into a hug that goes on too long. Fifty-fifty. Bea runs the inn. The player comes for the summers, and for whenever she needs to.

**Epilogue:** Two names on the sign. Bea sat down, once. The player kept her mainland life and a room at the top of the stairs with a sea-glass window. Tell what she does in each harbor, and which one she calls home when someone asks.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_TWO_HARBORS
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A warm inn kitchen at night: two women laughing across a table crowded
with mugs, ledgers and a pie, a hand-painted sign leaning against the
wall with two names on it (unreadable), rain on the dark window,
lighthouse beam passing outside. Joyful, cozy.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE PAINTER

**ID:** `ENDING_THE_PAINTER` · **fate:** lives

**The moment:** In the cave studio, or the hidden room, or on the rocks at low tide, she picks up one of Winnie's brushes and doesn't put it down. (For an Artist at Eye rank III it's a calling. For anyone else it's a brave beginning.)

**Epilogue:** She painted every day for a year. Say where: at the inn, in the city, or on the rocks. Her first small show was in the Grange Hall, and Marguerite bought the first painting, and overpaid. What she does with *The Keeper's Daughter* and the inn goes here too. The last line is about color.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_PAINTER
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The player painting at an old easel on sunlit rocks at low tide, a canvas
of the lighthouse coming alive under her brush, a tin of paints and a jar
of sea glass beside her, gulls overhead, the inn on the bluff. Joyful,
free, full of color.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## LYDIA'S INN

**ID:** `ENDING_LYDIAS_INN` · **fate:** lives

**The moment:** She slides the deed across the table to her cousin. *"You need a home more than I need an inn."* Lydia, who hasn't cried in front of anyone since 1989, does.

**Epilogue:** Lydia turned out to be terrifyingly good at running an inn. The player comes every October, and always gets the room with the window. Say what she did with her own year, and with the painting. The cousins grew old as friends, which neither of them would have bet on.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LYDIAS_INN
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Two women in their fifties on an inn's porch steps at dusk sharing a bottle
of wine and laughing, one immaculate and one windblown, a small suitcase
at the windblown one's feet, the lighthouse lit on the point. Warm,
bittersweet, forgiving.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE LONG WAY HOME

**ID:** `ENDING_LONG_WAY_HOME` · **fate:** lives

**The moment:** She sells the inn to the Halcyon Land Trust for one dollar and a promise, and takes the Sunday ferry back to her old life, which she will not live the old way.

**Epilogue:** Say what changed: a new job she chose, a friendship rebuilt, a sketchbook opened, a daughter called. The inn became the island's, run by Bea. She visits. She keeps the blue piece of sea glass on her kitchen windowsill, where the morning finds it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LONG_WAY_HOME
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A ferry pulling away from an island harbor at sunrise, the inn and
lighthouse small on the bluff, a crowd on the dock waving; the player at
the stern rail, holding up a piece of blue sea glass to the light.
Hopeful, open, bittersweet.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE WIDE WORLD

**ID:** `ENDING_WIDE_WORLD` · **fate:** lives

**The moment:** She signs. Vale smiles with all his teeth. She's rich, and she's free, and she's a little heartbroken, and that's allowed.

**Epilogue:** Say where she went: Lisbon, Kyoto, a sailing school, a cottage somewhere warm. Say what Vale built, and what happened to the painting under his ownership, honestly. Bea opened a café. Marguerite never forgave her, then forgave her at Christmas. She learned that you can love a place and still leave it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_WIDE_WORLD
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The player at a sunny café table on a foreign harbor waterfront, colorful
buildings and bright boats behind her, a map and a postcard of a lighthouse
on the table, sunglasses pushed up, smiling at something out of frame.
Bright, free, a touch wistful.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## HIGH TIDE

**ID:** `ENDING_HIGH_TIDE` · **fate:** lives

**The moment:** The vote passes. The bluff is rezoned. Whatever she keeps (the inn for now, the painting, her dignity), the island is going to change, and she can't stop it.

**Epilogue:** Vale's resort went up two years later. Say what she did: fought it, left, stayed and made the inn the last honest place on the bluff, or took the painting somewhere it would be loved. The island changed, but the lighthouse still turned. Sometimes you lose the vote and keep everything that mattered.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_HIGH_TIDE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
Twilight on the island bluff: construction cranes silhouetted beside the
old shingled inn, whose windows still glow warm; the lighthouse beam
sweeping over both; the player on the inn's widow's walk looking out.
Bittersweet, dignified, a little defiant.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE LAST FERRY

**ID:** `ENDING_LAST_FERRY` · **fate:** lives · available in every act

**The moment:** She takes the next ferry off the island before the week is out. It's too much, too soon, and that's a real and human choice.

**Epilogue:** Say what happened to the inn (Lydia's claim, Vale's offer, or the land trust), and to the people she met. Winnie's last pieces of sea glass stayed hidden for someone else to find. Years later she came back one October. The lighthouse was lit. *"Start where the light used to be,"* she said, and walked up the bluff.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_LAST_FERRY
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A small ferry heading out across grey water under a pale sky, an island
with a dark lighthouse and a Victorian inn falling behind; the player seen
from behind at the rail, coat collar up, one hand in her pocket. Quiet,
melancholy, open.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# THE SEA GLASS INN: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_EVERY_PIECE` | EVERY PIECE | Find all seven pieces of Winnie's sea glass. | Visible |
| `ACH_NEVER_SIGNED` | NEVER SIGNED | Reach Act IV or later without ever signing anything Preston Vale offered (`signed_anything` false). | Visible |
| `ACH_WHOLE_HARBOR` | THE WHOLE HARBOR | Win over Marguerite, make peace with Lydia, and give the speech at the Grange Hall. | Visible |
| `ACH_OPEN_HEART` | OPEN HEART | Bond with Bea, Jonah and Maya. (A bond with Jonah can be a deep friendship.) | Visible |
| `ACH_FULL_STORY` | THE FULL STORY | Learn about Eli, Marlowe, Marguerite's promise, and see *The Keeper's Daughter*. | Visible |
| `ACH_WINNIES_EYE` | WINNIE'S EYE | As an Artist, reach rank III of Winnie's Eye. | Hidden |
| `ACH_STEADY_HANDS` | STEADY HANDS | Reach the festival without ever wearing thin (`ever_worn_thin` false). | Hidden |
| `ACH_LIGHTKEEPER` | LIGHTKEEPER | Relight the old Halcyon lighthouse. | Hidden |
| `ACH_NO_HARD_WORDS` | NO HARD WORDS | Reach the festival without a single cruel word to anyone (`cruel_word` false). Firmness is fine; cruelty isn't. | Hidden |
| `ACH_FIRST_LIGHT` | FIRST LIGHT | Open the hidden room with the sea glass before the storm opens it. | Hidden |
