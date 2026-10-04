# BLACK FRIDAY: Puzzles

Three puzzles: deductive (the four numbers), a descent (there is no lever) and a choice (the offer). Never give the answer. Answer questions truthfully, from what the player could see. Accept any solution that works. Dice never solve puzzles. **Buying a tool can "solve" any of them instantly**, according to the tool: that's STACK +1, forfeits the puzzle event, and the tool is wrong in an interesting way. Hints follow `core/dm-core.md` §8, and every hint should be a joke that's also true.

---

## PUZZLE 1: THE FOUR NUMBERS (deductive · Acts I–III)

**The question:** yesterday's revenue was reported four ways. Which is real, and why are the others different?

| System | Says | Why |
|---|---|---|
| **The store** | $13,204 | every order placed yesterday, including one refunded later ($620), before payment fees |
| **The ad platform** | $19,880 | every order in the last 7 days from anyone who **clicked** an ad, or **viewed** one in the last day, credited to the day the ad was seen; it also counts automatic subscription renewals from people who once scrolled past an ad in 2023 |
| **Analytics** | $8,410 | **last click only**, and it can't see about a third of phone shoppers, who block tracking |
| **Halcyon** | $41,000 | nobody knows. It says "AI-influenced". Don't explain it (this row is the joke) |
| **The bank** | $12,180 | the deposit: the store's number, minus the refund, minus payment fees |

**The clues:** Margo's bank tab; the store's order list (one refund, a lot of subscription renewals); the ad platform's attribution setting (a Buyer finds it in one click, under a menu called "Comparing windows"); analytics showing almost no phone traffic; and **Jun Park's Truthtable** (Act II), which lines them all up by order and colors the overlaps.

- **Solved:** the player names the bank (or the store, adjusted) as the real number, and explains why at least two of the others differ: `PUZZLE_NUMBERS_SOLVED`, plus `PUZZLE_NUMBERS_NO_HINT` if unaided. Margo gets her one number: **store revenue, net of refunds, divided by all ad spend.** That's the MER they'll run on. (Explaining Halcyon's number isn't required, and isn't possible.)
- **Fallback:** by the end of Act III, Margo picks the bank and stops asking. No puzzle events.

---

## PUZZLE 2: THERE IS NO LEVER (a descent · Act IV)

**The question:** the Professor swears there's a hidden setting that lowers CPMs. Where is the CPM lever?

**The answer:** there isn't one. The ad platform charges less when people actually want the ad (the *expected action rate*). **The lever is the ad** (and the offer, and the website). See `world/the-lever.md`.

**The clues, gathered across the game:**

| Clue | Where |
|---|---|
| Benji went looking and found "a sticky note, three words" at the bottom | Act I, the Feed |
| Tess's napkin ads made the CPMs drop a little, and nobody touched a setting | Act IV, 4.2 |
| The ad with the sponge's hands is the cheapest ad in the account, and it's the one people actually stop for | Act IV, the Enhancement |
| The 400 AI ads made CPMs go *up*, and the Algorithm sulked | Act IV, 4.2 |
| Every screen of the settings maze offers a "recommendation", and none of them is a lever | Act IV, 4.6 |
| Walt, if asked: *"The win lives outside the ad account. Offer, site, creative, whether anyone wants the thing. Then I log off."* | any time |
| The sticky note at the bottom of the settings: ***IT'S THE AD.*** | Act IV, 4.6, if the player reaches the bottom |

- **Solved:** the player concludes, in their own words, that **there's no setting**, and that cheaper ads come from better ads, a better offer or a better site (citing at least two clues, or reaching the sticky note and understanding it): `PUZZLE_LEVER_SOLVED`, plus `_NO_HINT` if unaided. From then on, every good creative or offer decision gets advantage, and Kyle, told plainly, unsubscribes.
- **Fallback:** Benji calls, finally ready to talk about it, and says the three words on the sticky note. No puzzle events.
- **Buying the lever:** the Professor's *Hexagon* Module 7 ($997) contains a 40-minute video of him opening and closing the same settings menu. STACK +1, no puzzle event.

---

## PUZZLE 3: THE OFFER (a choice · Act IV)

**The question:** what's the Black Friday offer that survives contribution margin?

**On the whiteboard,** three offers, each from a guru, each with a name:
- **The Professor's "Doorbuster Stack":** 40 percent off sitewide, plus a free gift, plus a mystery box, plus free shipping, *"to feed the Algorithm conversion volume."*
- **Ray's "Squeegee Bundle":** a three-pack and a window squeegee, on the shop app, through affiliates, at a price that ends in 7.
- **Kyle's "Hexagon Funnel":** a landing page before the landing page before the product page, then a quiz, then a discount for completing the quiz.

**The numbers** (Margo has them, or Simone's sheet, or an Operator's move; give them when asked, plainly):

| Per order | Amount |
|---|---|
| The three-pack price | $24.00 |
| Product cost | $4.50 per three-pack |
| Shipping | $5.50 per box |
| Payment fees | about 3 percent |
| Ad cost per order, new customer, Black Friday CPMs | about $11 |
| Ad cost per order, someone already on the email or SMS list | about $1 |
| A ceramic sponge holder (4,000 in the warehouse) | $3.00 |
| Gift wrap and a handwritten-style card | $1.00 |

**Worked examples** (don't show these; use them to judge):
- **The Doorbuster Stack**, to new customers: $14.40 - $4.50 - $5.50 - $0.43 - $11 - (gift and box) = **about -$10 an order.** Every sale loses money. The revenue chart is beautiful.
- **The three-pack at full price**, to new customers: **+$2.28.** Thin.
- **A gift box** (two three-packs and the holder, wrapped, shipped to someone else) **at $40, to the list first:** **+$18.30 an order.** That's the answer, if they know why people buy.

- **Solved:** the player builds or picks an offer whose contribution margin per order, after ads, is clearly positive, by doing (or asking for) the math: `PUZZLE_OFFER_SOLVED`, plus `_NO_HINT` if unaided. Any offer that works counts. The gift box isn't required. It's just the best.
- **Fallback:** Margo builds a safe, dull offer (the three-pack at full price, free shipping over $40). No puzzle events; profitable, but small.
- A sitewide discount isn't "wrong" (the player can choose it). Say what the math says, and let the Professor retweet it.
