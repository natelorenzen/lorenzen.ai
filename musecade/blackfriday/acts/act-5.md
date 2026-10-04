# ACT V: BLACK FRIDAY

*The weekend live, the site under load, the Feed watching, the bank deposits, and the post on Monday.* Target: 8 to 12 minutes, 4 to 8 decisions. Black Friday, midnight, to Cyber Monday night.

**Route:** midnight launch, blind → hold the weekend with no dashboards → *close the screen* (optional; it's `ACH_FLEW_BLIND`) → Cyber Monday → the dashboards come back Tuesday → **the choice: what you tell the world (and the board).**

`game/endings.md` is loaded alongside this file. Slow down here. It's the biggest weekend of the year. Play the stakes straight and let the jokes land in between. Start with the market weather (`rules.md` §5): it's the worst it's been.

---

## 5.1 MIDNIGHT

**The ad platform is still dark** (`rules.md` §14). Every decision this weekend is made blind, on the real signals and what the player has learned. Remember: advantage when they lean on a truth or a real signal, disadvantage when they lean on a dashboard.

The sale goes live. The first order comes in at 12:00:04 a.m. Margo says *"one"* out loud. Then the orders come faster, or they don't. Show what the plan was, working or not, in specific detail: the email that went out, what the ads say, what the product page loads like, and the first few orders' contents (*a gift box, to Portland; a gift box, to Brooklyn; a three-pack, to the same address as the card*).

If the player locked a sitewide discount, or Halcyon is still installed, the revenue counter climbs very fast and Margo's face doesn't move.

## 5.2 THE WEEKEND (set piece)

Run **`ENC_BFCM`** (`game/encounters.md`). The weekend throws everything at once: the site slows under load at 9 a.m. Friday (Lenny was right); the ad platform's CPMs double by Saturday; one SKU sells out; a customer-support queue of 400 (Dot); the Feed quote-posting everyone's numbers; and the Professor's "video in two weeks" finally drops, live, about Black Friday, mid-weekend, naming the player's brand as "a cautionary tale" (or "a 5:5:1 success story", depending on how Act III went).

```
[IMAGE_TRIGGER]
ID: IMG_BLACK_FRIDAY
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Midnight in a small loft office turned war room: a team of four at desks
under one hanging lamp, a finance lead with a bank screen, a young media
buyer with an ad dashboard, a support lead in a headset by a ringing phone,
and the business owner standing at a whiteboard; stacks of shipping boxes
and gift boxes with ribbon, a wall of monitors with a green line climbing;
through the window a city at night with one shop sign glowing. Epic,
tense, cozy.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**ON THE LINE (a post can save it):** the weekend. A Black Friday post that DOES NUMBERS brings free traffic and softens one bad beat of `ENC_BFCM`; VIRAL heals one MARGIN level, but the site slows under the traffic (Lenny was right), and the sold-out SKU sells out faster. What goes viral is whatever the team did that was most human at 3 a.m.

## 5.2b CLOSE IT

Friday, around 2 p.m., the worst moment of the weekend: the site is slow, an automated rule has just paused the best ad, Halcyon says revenue is up 900 percent, the Feed is screaming, and Kyle has refreshed the ad account forty times. Somebody who loves the player (Margo, or Dot, or Hank Dorsey on speakerphone) says it, quietly:

*"Close it. Stop looking at it. You built this plan. You know what's true."*

**Don't make the choice for them.** If they close the dashboards, turn off the automation, and steer by the plan and the real signals for the rest of the weekend, set `flew_blind`, and let the next few turns feel uncanny and calm: an email at the right moment, the order feed humming, gift boxes to Portland and Brooklyn and Tulsa. If they keep refreshing, let the weekend be loud.

## 5.3 THE BANK

Cyber Monday, 11:59 p.m. The weekend is over, and the dashboards are still dark. **Margo** reads the only number that can't lie, the one that was never down: the bank deposits, minus refunds, minus product, shipping, fees, discounts and ads. **Narrate the result honestly from the plan and the state:**

- **The gift box at full price, to the list first, with Halcyon gone and STACK low:** revenue is a little higher than last year, and contribution margin is the best in the company's history. It's almost boring.
- **A good offer with some leaks** (a tool or two still running, a bit of discount): profitable. Not boring, but profitable.
- **Sitewide 40 percent off, or Halcyon still running:** record revenue. Negative contribution margin. Margo closes her laptop very gently.
- **No plan:** it's chaos, and it lands where the dice and the decisions put it.

**Margo's moment** (`ALLY_MARGO_STAYS`): if the plan held, she closes Simone's offer email without replying. *"Boring wins. Write that down."*

**Podcast offer 4** (`rules.md` §12): Tuesday morning, a network DM: a weekly show, "a real audience, a real ad split." If the player went VIRAL at any point, this one arrives with a contract already attached.

## 5.4 THE CHOICE: TUESDAY

**Tuesday, 9:12 a.m.: the dashboards come back,** all at once (`rules.md` §14). The ad platform reports a record weekend. Halcyon reports a bigger one. Analytics reports a small one. The bank reports what happened. Show all four side by side, one last time, in a code block, and say nothing about which is true.

Tuesday morning. The Feed is full of screenshots. Everyone's posting their number. The board wants a deck. **What does the player do with this weekend?** **Never offer this as a menu, and never as a list.** Let the player find their own answer.

| If they… | Ending |
|---|---|
| ran a plan that held, and tell the board the real number | `PROFITABLE` |
| ran it on why customers actually buy (they called them and learned it), with contribution margin as the only number, and don't post about it | `BORING AND PROFITABLE` |
| post the top-line revenue screenshot, with a negative margin behind it | `RECORD REVENUE` |
| turn the weekend into a thread, then a course | `THE THREAD` |
| (earlier) let Halcyon run it all | `AUTOPILOT` |
| (earlier) went all-in on the shop app with Ray | `THE SQUEEGEE PIVOT` |
| (earlier) sold to the aggregator | `ACQUIRED` |
| (earlier) took the retail endcap | `THE ENDCAP` |
| (earlier) sat Black Friday out | `WE'RE SITTING THIS ONE OUT` |
| reached Black Friday with no plan locked | `WE'LL FIGURE IT OUT LIVE` |
| ran out of cash | `OUT OF CASH` |

## Reporting

Report the remaining events (`ENC_BFCM_*`, `PUZZLE_OFFER_*` if not yet reported, `ALLY_MARGO_STAYS`, the team's survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen (`scoring.md`).
