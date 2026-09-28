# ACT I: THE CROSSING

*Arrival, the inn, the will, the first piece of the puzzle, and the man who wants to buy it all.* Target: 11 to 15 minutes, 7 to 10 decisions. Monday.

---

## 1.0 COLD OPEN: THE SQUALL (the tutorial)

**Open with action, straight after the path tag.** It's easy, nobody gets hurt, and it teaches the game in 3 or 4 decisions.

**The scene:** the little ferry *Halcyon Belle*, forty minutes out, grey water and a gold October sky. Then a squall comes sideways off the sea. Rain like thrown gravel, and the deck tilts. A stack of **lobster traps** breaks its lashing and starts sliding toward the rail, and toward a tiny old woman in a yellow slicker clutching a cake box: **Marguerite Doucette**, eighty-two. She is more worried about the cake than the traps.

- **Path spotlight**, one line for this path only:
  - CARETAKER: *she's not afraid for herself. That cake is for someone.*
  - STRATEGIST: *the traps are tied with one rope, and the knot is on your side.*
  - ARTIST: *for one second the light through the rain goes exactly the color of the glass in your pocket.*
  - ADVENTURER: *the ferry will roll again in about four seconds. You can feel it coming through your feet.*

**Beat 1: the first menu.** End the turn with a lettered menu. For example:
- **A.** Get between her and the traps and brace them.
- **B.** Grab her arm and pull her toward the cabin.
- **C.** Cut the loose line so the traps slide the other way.
- **D.** Other: type your own

```
[ TIP · Type A, B or C to choose, or type anything you can imagine. The options are a shortcut, never a limit. ]
```

**Beat 2: the first roll.** An **easy d20 (DC 8)**, shown openly, then:

```
[ TIP · Easy things just happen. When a moment really matters, the d20 decides how well. +2 when it fits who you've been. ]
```

**Beat 3: the turn.** The ferry rights itself, and the squall blows past as fast as it came. Marguerite, cake intact or not, looks the player up and down: *"You're Winnie's girl. You have her hands. She'd have gone for the cake too."* She won't explain.

```
[ TIP · This week will cost you. Hard days wear you thin; friends, rest and laughter bring you back. Nobody dies on Halcyon, but not every chapter is easy. ]
```

**Beat 4.** Halcyon rises out of the rain: a harbor of shingled houses, a church steeple, and on the northern bluff a tall grey Victorian with a widow's walk. Beyond it on the point stands a **dark lighthouse**.

```
[ TIP · Ask anyone anything. Follow your curiosity. Type SAVE GAME anytime to keep your place. ]
```

**Rules:** no harm. A miss costs something small: a soaked coat, a smashed cake (Marguerite forgives you in about three business days), or her lawyer's envelope blown open on the deck. Tips appear only here, and can be skipped.

---

## 1.1 HALCYON HARBOR

The ferry landing, a harbor of lobster boats, the **Halcyon General & Hardware** (owner **Hank Pruitt**, friendly and nosy), **Doucette's Bakery**, the **Grange Hall** with its banner for *THE 47TH SEA GLASS FESTIVAL · SATURDAY*, and a hand-lettered sign on a pole: *SAVE THE BLUFF. VOTE NO SATURDAY.* Beside it, a slicker sign: *VALE COASTAL: JOBS FOR HALCYON.*

The lawyer, **Mr. Abernathy** (seventies, bow tie, office above the bakery), reads the will:

- The inn and "everything in it" go to the player, *"on the condition that she stays seven nights before she decides anything at all."*
- A sealed letter from Winnie: short, funny, unsentimental. *"You were eleven and you sorted my beach by color for an entire afternoon. Nobody else ever did that. I've left you a trail. Don't let anyone rush you. Especially the man with the teeth."*
- Abernathy mentions, drily, that her cousin **Lydia** "has expressed an interest" in contesting.

## 1.2 THE SEA GLASS INN

Load `characters/companions.md` and `characters/npcs.md` now.

A shingled Victorian with twelve guest rooms, three of them usable. Faded chintz, a crooked brass bell over the door, and a lobby full of Winnie's odds and ends. There's a **tide clock** on the wall, stopped at **4:10**. Over the fireplace hangs a big, beautiful **seascape** of the bluff and its rocks at low tide, unsigned on its face. Up top is the **widow's walk**, with a round window of **seven empty leaded panes**. Its stair is locked, and Bea has the key.

**Bea Okafor**, the manager, is forty-five, and she's been keeping the inn running with one hand and a lot of opinions. She sizes the player up: *"You're the niece. Right. Well, the boiler hates everyone, the roof leaks in Room 6, we have three guests and one of them is a travel writer, God help us. Tea?"* She stays on if the player wants her (`RECRUIT_BEA`).

- **Her secret** (`DISCOVER_BEA_SAVINGS`): the inn's ledger shows Winnie's last year of bills paid by *personal checks signed B. Okafor*. STRATEGIST SEES it on a glance at the books; anyone else needs to ask or to look.
- CARETAKER SEES: she hasn't sat down in a week, and she's afraid of being told to leave.
- ARTIST SEES: the lobby seascape is extraordinary, far better than anything in an inn should be. The rocks are painted with unusual care, as if they mattered. (It's Winnie's work. At Eye rank II its rocks read as a map of the cave; see `rules.md` §5.)
- ADVENTURER SEES: the tide clock isn't broken. Someone stopped it on purpose.
- **The guests:** **Mr. and Mrs. Feeney**, retired, from the mainland, sweet and endlessly curious; and **Theo Park**, a travel writer, lanky and nosy, writing *"a piece about hidden New England"*.

## 1.3 THE MAN WITH THE TEETH

Late afternoon. A silver rental car on the gravel. **Preston Vale** of *Vale Coastal Living*: fifties, perfect teeth, a fleece vest over a thousand-dollar shirt, genuinely charming. He brings flowers for Bea, who is not charmed.

- **His offer:** **$2.1 million**, cash, for the inn "and all contents", closing in thirty days. It's a transformational number for a woman with no job. *"The offer stands until the council votes on Saturday. After that, well. I'd hate for you to miss it."*
- STRATEGIST SEES: *"all contents, fixtures, and artworks"* in the letter of intent. It's an odd phrase for a teardown.
- DIPLOMAT-style reads work for anyone paying attention: he glances at the ceiling twice when he mentions the attic.
- A good negotiation (more time, better terms, a promise he can't keep, or making him show his hand) is `SOCIAL_VALE_TERMS`. **Signing anything** sets `signed_anything`. It's not the end, but Vale will hold her to it.

## 1.4 THE FIRST PIECE

The **blue sea glass** in her pocket, and the note: *"Start where the light used to be."*

- *Where the light used to be* is the **lighthouse** on the point. It's been dark since 1978. The keeper's cottage is boarded up, and the tower door is rusted but not locked.
- It's a twenty-minute walk along the bluff at dusk (a phase). Or it waits for tomorrow.
- **Inside the lamp room**, wedged behind the great dusty lens, is an envelope and a piece of **cobalt** sea glass, the rarest color. The note: *"This is the last piece, and it's in the first place, because that's how grief works. Go back to the beginning. The beginning was Marguerite, and bread."* (Record glass: blue and cobalt. The notes' dates matter; see `game/puzzles.md`.)
- ADVENTURER SEES: the lighthouse's lamp is old, but the generator shed behind it looks recently serviced. Someone has been keeping it ready (it was Winnie).

```
[IMAGE_TRIGGER]
ID: IMG_LIGHTHOUSE
TYPE: LANDSCAPE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dusk on a rocky island point: a tall dark lighthouse against an amber and
rose sky, the sea glittering below, a shingled Victorian inn with a
widow's walk on the bluff behind. The player, small, walking the bluff path
toward the lighthouse, coat blowing, one hand raised to the light holding
a piece of blue sea glass that glows where the sun hits it.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_LIGHTHOUSE
PAIRED WITH: IMG_LIGHTHOUSE
STATUS: HIGH PRIORITY (see core/image-style.md §5)
LENGTH: 5 seconds
MOTION: the last sun slides down the lighthouse; waves roll in and break
white on the rocks; the sea glass in her hand flashes blue once.
CAMERA: slow push along the bluff path toward the lighthouse.
[/VIDEO_TRIGGER]
```

**Monday night.** Rain on the roof, the boiler groaning, Room 6's bucket going *plink*. Bea leaves a plate of stew on the counter. The first night of seven. **Record `REACH_ISLAND`** (it's sent with everything else at the end) and fetch the Act II pack.

---

## Exceptions

- **She signs Vale's offer on Monday** and wants to leave: Winnie's condition means the sale can't close before seven nights. Vale doesn't mind waiting. Continue, with `signed_anything` set. She can still back out, which becomes its own drama. If she simply leaves the island on the next ferry: `THE LAST FERRY` (`game/endings.md`).
- **She tells Vale about the sea glass trail:** he becomes very interested, and very helpful. That's a warning sign.
