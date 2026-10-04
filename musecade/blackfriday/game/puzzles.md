# BLACK FRIDAY: Puzzles

Three puzzles: deductive (the four numbers), investigative (the cursed line item) and arithmetic (the offer). Never give the answer. Answer questions truthfully, from what the player could see. Accept any solution that works. Dice never solve puzzles. **Buying a tool can "solve" any of them instantly**, according to the tool: that's STACK +1, forfeits the puzzle event, and the tool is wrong in an interesting way. Hints follow `core/dm-core.md` §8.

---

## PUZZLE 1: THE FOUR NUMBERS (deductive · Acts I–III)

**The question:** yesterday's revenue was reported four ways. Which is real, and why are the others different?

| System | Says | Why |
|---|---|---|
| **The store** | $13,204 | every order placed yesterday, at checkout, including one refunded later ($620), before payment fees |
| **The ad platform** | $19,880 | every order in the last 7 days from someone who **clicked** an ad, or **viewed** one in the last day, credited to yesterday when the ad was seen; it also counts automatic subscription renewals from people who once saw an ad |
| **Analytics** | $8,410 | **last click only**, and it can't see about a third of phone shoppers, who block tracking |
| **Halcyon** | $41,000 | every order that saw its checkout pop-up in the last 30 days, "AI-influenced" |
| **The bank** | $12,180 | the deposit: the store's number, minus the refund, minus payment fees |

**The clues:** Margo's bank tab; the store's order list (one refund, a lot of subscription renewals); the ad platform's attribution setting (a Buyer finds it in one click); analytics showing almost no phone traffic; Halcyon's dashboard fine print ("30-day influence window"); and **Jun Park's Truthtable** (Act II, or on the Feed), which lines up all of them by order, and colors the overlaps.

- **Solved:** the player names the bank (or the store, adjusted) as the real number, and explains why at least two of the others differ: `PUZZLE_NUMBERS_SOLVED`, plus `PUZZLE_NUMBERS_NO_HINT` if unaided. Margo gets her one number: **store revenue, net of refunds, divided by all ad spend.** That's the MER they'll run on. (A Founder who corrects someone on the Feed with this earns a Receipt.)
- **Fallback:** by the end of Act III, Margo just picks the bank and stops asking. No puzzle events, and Halcyon's number keeps confusing people.

---

## PUZZLE 2: THE CURSED LINE ITEM (investigative · Acts III–IV)

**The question:** what does Halcyon actually do?

**The answer:** it shows a 25-percent-off "AI incentive" at checkout to nearly everyone, then claims every order as its own (`world/halcyon.md`).

**The clues:**
1. **Average order value** dropped 22 percent the week Halcyon was installed (the Buyer's Rollback, or the store's reports).
2. **The P&L** has a "discounts" line up $31,000 a month with no campaign behind it (an Operator's move, or Margo).
3. **Dot's support tickets:** *"Why did I get 25% off? I didn't ask for it. Not complaining!"* Dozens of them, since July.
4. **Discount codes** on orders starting `HALCY-` that nobody at Wrung created.
5. **The page itself:** Lenny or Jun (or a phone with a slow connection) spots a checkout script from Halcyon that loads a pop-up after the cart.
6. **The holdout** (Act IV): in Ohio, with ads off, Halcyon still claims the same "AI-influenced" share.

- **Solved:** name what it does using at least **two** clues: `PUZZLE_HALCYON_SOLVED`, plus `_NO_HINT`, plus `DISCOVER_HALCYON`. Canceling it is then one honest call (`acts/act-4.md` 4.4).
- **Fallback:** if it's still unsolved after the weekend spike, Margo finds the discount line herself at 2 a.m. and texts a screenshot with no words. Report `DISCOVER_HALCYON`, but not the puzzle events.
- **Wrong accusations:** blaming Kyle publicly costs trust -2 (and he quits by the end of Act IV unless it's repaired). Blaming the ad platform is true-ish, but it isn't this.

---

## PUZZLE 3: THE OFFER (arithmetic · Act IV)

**The question:** what's the Black Friday offer that survives contribution margin?

**The numbers** (Margo has them, or Simone's sheet, or an Operator's move; give them when asked, plainly):

| Per order | Amount |
|---|---|
| The three-pack price | $24.00 |
| Product cost | $4.50 per three-pack |
| Shipping | $5.50 per box |
| Payment fees | about 3 percent |
| Ad cost per order, new customer, on Black Friday (CPMs doubled) | about $11 |
| Ad cost per order, someone already on the email or SMS list | about $1 |
| A ceramic sponge holder (in the warehouse, 4,000 of them) | $3.00 |
| Gift wrap and a handwritten-style card | $1.00 |

**Worked examples** (don't show these; use them to judge the player's plan):
- **40 percent off sitewide, to new customers:** $14.40 - $4.50 - $5.50 - $0.43 - $11 = **-$7.03 an order.** Every sale loses money. Revenue looks enormous.
- **The three-pack at full price, to new customers:** $24 - $4.50 - $5.50 - $0.72 - $11 = **+$2.28.** Thin.
- **A gift box** (two three-packs and the holder, wrapped, shipped to someone else) **at $40, to the list first:** $40 - $9 - $3 - $1 - $6.50 - $1.20 - $1 = **+$18.30 an order.** That's the answer, if they know why people buy.

- **Solved:** the player builds an offer whose contribution margin per order, after ads, is clearly positive, by doing (or asking for) the math: `PUZZLE_OFFER_SOLVED`, plus `_NO_HINT` if unaided. Any offer that works counts: a bundle, a free gift with purchase, list-only early access, a subscription perk. The gift box isn't required. It's just the best.
- **Fallback:** Margo builds a safe, dull offer (the three-pack at full price with free shipping over $40). No puzzle events, and it's profitable but small.
- **No sitewide trap:** a sitewide discount isn't "wrong" (the player can choose it), but say what the math says.
