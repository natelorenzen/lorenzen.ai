# THE GLASS CITY: Allies

Three people may stand with the player. **Two of them are reporting on the player when they meet**, and the third is on the other side. Trust runs from -3 to +3 (`core/dm-core.md` §7).

---

## TOMAS REYNE: the junior officer

**Visual:** twenty-six, tall and slightly too thin, fair hair that won't stay combed, a good raincoat bought for this posting, a notebook always in hand. Freckles. Earnest eyes.

**Personality:** eager, idealistic, funny without meaning to be. He reveres Ashby and loves the job. He's brave in the way of people who have never been hurt.

**History:** two years in the Office, top of his course, first foreign posting. Ashby took a personal interest in him, which is how Ashby collects people.

**Motivation:** to be useful, and to be good at this.

**Secret** (`DISCOVER_TOMAS_REPORTS`): Ashby told him to report the player's every move "so we can protect you". He does, every evening, by phone to Ashby's flat. He doesn't know what Ashby does with it.

**Capability:** a station pass and keys that still work after the player is burned (until someone thinks to cancel them), the station's routines, a car, and a talent for being overlooked. He is the perfect carrier for the **canary trap** (`game/puzzles.md`).

**Fear:** that Ashby is what the evidence says he is.

**Loyalty test:**
- `ALLY_TOMAS_TURNED` when he sees **real evidence** against Ashby (the film, the ribbon, Daniel's file, the canary result) and trust is at least 1. He goes pale, then very steady. "Tell me what to do."
- Unturned, he follows Ashby's orders: the frame arrest (Act II) and the bridge's north gate (Act IV). A betrayal done out of loyalty, not malice.

**Possible sacrifice:** he walks into the station on Act IV's night to steal the convoy manifest and doesn't come out; or he stands between Ashby's men and Lena at the gate.
**Possible death:** the Raid, the Glasshouse, the bridge.

---

## ILSE VARGA: the bookbinder

**Visual:** forties, compact, ink-stained fingers, half-moon glasses on a chain, a cardigan with too many pockets, and graying dark hair pinned up with a pencil. Her shop smells of glue, leather and coffee.

**Personality:** dry, amused, mercenary on the surface and sentimental underneath. She calls everyone *"darling"*, as an accusation.

**History:** she has forged papers for both sides for twenty years and is proud of her craft. Her younger brother **Pavel**, a student radical, was arrested by the Directorate three years ago and is held at **Hollow Hill**.

**Motivation:** get Pavel out.

**Secret** (`DISCOVER_ILSE_REPORTS`): every Concord officer who visits her shop goes into a report to **Voss**. It's the price of Pavel's continued life. She will report on the player too, until she decides not to.

**Capability:** papers (a new identity lowers heat by 1, once), disguises, a back-room doctor (Critical to Hurt, once), a microfilm reader, the old town's back doors, and every rumor in Aurel.

**Fear:** the letter from Hollow Hill that doesn't come.

**Loyalty test:**
- `ALLY_ILSE_TRUE` if her secret is known and met with care rather than fury (trust 2 or more), **or** if the player bargains Pavel's release from Voss (Act IV). She stops selling, and she starts lying to Voss for the player: a false bridge plan.
- Otherwise, on night 3, she sells the real bridge plan, and Kell knows the gate.

**Possible sacrifice:** she walks into the Directorate residence to deliver the false plan in person, and they know. **Possible death:** the Raid (if she's hiding the player), or the Glasshouse.

---

## ANYA SOREL: the old flame

**Visual:** late thirties, dark hair cut blunt at the jaw, a wool coat the color of wet slate, a silver ring on her thumb, and grey-green eyes that give nothing away. At the opera she wears black silk.

**Personality:** controlled, ironic, very tired, and brave in a way she'd never call brave. With the player, she's warm and wary in equal measure: five years of unfinished business, played entirely in looks and short sentences. PG-13: nothing more than a held hand, one kiss if earned, and fade to black.

**History:** a Directorate officer. Five years ago she and the player were on opposite sides of an operation in the winter city of Kessel, and something happened between them that neither service knows about.

**Motivation:** get Lena and Katya out. Then get herself out, if that's possible.

**Secret** (`DISCOVER_ANYA_HANDLER`): she's NIGHTINGALE's minder, and she's also the one who helped Lena decide to run. Voss is starting to suspect her. Every hour with the player is a risk to her life.

**Capability:** Directorate procedures, patrol routes, Voss's habits, the quay boats, and a Directorate ID that gets doors opened, until it doesn't. She can see Voss's orders, which makes her the canary trap's best **watcher**.

**Fear:** being recalled home.

**Loyalty test:**
- `ALLY_ANYA_CHOOSES` on night 3 (Act IV) if trust is at least 2: she chooses the player. She crosses, covers them, or runs with them (`THE THIRD COUNTRY`, `ACH_OLD_FLAMES`).
- At trust of 0 or less, she makes her own deal with Kell to survive, and it includes where the player will be.

**Possible sacrifice:** she stays at the city end in her Directorate coat and waves the convoy through, and is arrested as it clears.
**Possible death:** the Glasshouse or the bridge.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited ally who is alive and free (not arrested or held).
