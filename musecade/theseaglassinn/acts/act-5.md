# ACT V: THE FESTIVAL

*The whole island in one place, the vote, and the choice about the rest of her life.* Target: 8 to 12 minutes, 4 to 7 decisions. Saturday.

`game/endings.md` is loaded alongside this file. Slow down. Let her enjoy the day before she has to choose.

---

## 5.1 THE MORNING AFTER

The inn has storm damage, the dock is gone, and there's water in the cellar. Then, one by one, **the island shows up**: Hank with a generator, the co-op with lumber, Marguerite with coffee, the Feeneys with a check "for the roof, and don't argue", and Danny Sutter (if the lighthouse brought him home) with his whole family. How much of the island comes depends on how she spent the week: the people she helped, listened to and was honest with.

## 5.2 THE SEA GLASS FESTIVAL

On the harbor green: a brass band, lobster rolls, the sea glass jewelry tent, children's sandcastles, and the **Sea Glass Contest** (rarest piece wins; Winnie's cobalt would win in a walk).

- **Vale's last offer**, near the lobster tent: **$6 million**, for the inn *"and its contents"*, if she signs before the vote. He's dropped the charm. *"You don't know what to do with it. I do."*
- **Dr. Imogen Hart** (if met), quietly: *"If you ever want it seen properly, a museum would weep. So would I. It should hang somewhere people can stand in front of it."*
- **The painting's options**, stated in-world by whoever's nearby. The Keeper's Daughter could be sold (for a fortune), loaned, donated (to the island, or to a museum), kept, or hung in the inn where it was painted. It is **hers to decide**.

## 5.3 THE GRANGE HALL VOTE

Evening. The whole island is packed into the Grange Hall, with folding chairs and wet coats. The rezoning of the bluff is up for a vote.

- She can speak. **The speech** is the player's own words. If it's honest, specific and about the island (not a lecture), it's `SOCIAL_COUNCIL_SPEECH`. Roll it with advantage if she spent the week listening.
- **Hank's option** (`DISCOVER_HANK_OPTION`), if she knows and chooses to raise it (gently or not), forces Hank to recuse himself. Without Hank the vote is 2 to 2, and a tie means the rezoning fails. If she stays silent, or doesn't know, it passes 3 to 2, unless her speech turns Rev. Ada Lin (a hard roll).
- **The painting** can change the room: *"There's a Marlowe in the attic of the inn. It belongs to this island."* It's a thunderbolt. How it lands depends on her.

Report `PUZZLE_COUNCIL_SOLVED` if she identified Hank through reasoning (`game/puzzles.md`).

## 5.4 THE CHOICE

After the vote, on the inn's porch or at the lighthouse or on the seawall, **she decides**. Never offer this as a menu, and never as a list. Let her find it, then honor it fully:

| If she… | Ending |
|---|---|
| stays and runs the inn herself, saved by the island, the painting, grit or all three | `THE KEEPER` |
| gives *The Keeper's Daughter* to the island, turning the inn into a gallery and artists' retreat | `MARLOWE HOUSE` |
| stays, because of Jonah and the second spring she didn't think she'd get | `SECOND SPRING` |
| hands the inn's future to Maya (and Bea, and Jonah's boatyard) and lets her daughter find her own harbor | `MAYA'S HARBOR` |
| makes Bea a full partner and splits her life between the island and the mainland | `TWO HARBORS` |
| picks up Winnie's brushes: she's a painter now, wherever she lives | `THE PAINTER` |
| gives the inn to Lydia, who needs a home more than she does | `LYDIA'S INN` |
| goes back to her old life, changed, and sells the inn cheaply to the island's land trust | `THE LONG WAY HOME` |
| sells to Vale and takes the money to see the world | `THE WIDE WORLD` |
| loses the vote and the bluff, and leaves while the resort goes up | `HIGH TIDE` |
| (earlier) takes the first ferry off | `THE LAST FERRY` |

Several can blend. `SECOND SPRING` and `TWO HARBORS` can both be true, for example. Pick the ending whose *heart* matches her choice, and weave the rest into the epilogue.

## Reporting

Report remaining events (`SOCIAL_COUNCIL_SPEECH`, `PUZZLE_COUNCIL_*`, any bonds), evaluate achievements (`game/achievements.md`), then complete the run with the ending's ID and `died: false` (`core/scoring.md` §4). Fire the ending image, narrate the ending and epilogue (`game/endings.md`), and print the final screen (`scoring.md`).
