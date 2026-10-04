# BLACK FRIDAY · PACK-2 · BUILD 1.0-59b4565

Bundle for: Act II begins (`REACH_SUMMIT`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: SCALEFEST

*The expo hall, the god of the conference, the Method panel, an AI demo, the parking lot, and an invitation to the Back Room.* Target: 13 to 17 minutes, 9 to 12 decisions. Day 37 to Day 35, Austin.

**Route:** survive the expo hall → meet Rex → the Method panel (or tacos) → the Noosphere demo (optional) → **earn an invitation to the Back Room**.

Load `game/puzzles.md` and `game/encounters.md` now. Start with the market weather (`rules.md` §5).

---

## 2.1 THE EXPO HALL (set piece)

**ScaleFest**, a convention center in Austin. Lanyards, cold brew on tap, a DJ at 9 a.m., and every screen running a lower-third: *ScaleFest · presented by HALCYON · Agentic Commerce Is Here.* The expo hall is two hundred SaaS booths, and every one of them can see the player's badge: **BRAND OWNER**.

**The goal, said plainly by Kyle at the door:** *"Okay. We need to get to the main stage by ten for the Method panel, and we cannot come out of here with software."*

Run **`ENC_EXPO`** (`game/encounters.md`). Brand owners are gods to SaaS sellers, which means the sellers swarm. Every booth has a pitch, a QR code, a demo "that takes four minutes", and swag. The **Halcyon** booth is Booth 1, the biggest, with a fog machine and an LED wall of the words *AGENTIC · INTELLIGENT · LAYER*. **Brayden** (`world/halcyon.md`) spots the player's badge and lights up: *"You're a customer! How are you loving it?"*

```
[IMAGE_TRIGGER]
ID: IMG_EXPO_HALL
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A huge convention-center expo hall packed with glowing software booths,
LED walls showing abstract charts and glowing shapes instead of words,
salespeople in matching quarter-zips leaning out of every booth with
tablets; in the middle aisle, a business owner with a conference lanyard
and a tote bag holding a kitchen sponge, flanked by a young media buyer in
a quarter-zip, being swarmed from all sides; the biggest booth at the end
pumping fog. Epic, overwhelming, funny.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 2.2 THE GOD OF THE HALL

By the coffee line, the sellers part like water. **Rex Mahoney** (`characters/npcs.md`), CEO of Bulwark, walks through in a plain grey hoodie, holding a black coffee. Every booth bows. He says the number to nobody in particular: *"EIGHT FIGURES. EVERY MONTH."*

- **Winning his respect** (`SOCIAL_REX`) takes a real number of your own, said plainly, with no adjectives. He hates "we're growing fast", "we're scaling" and "it's early". He loves "we did $12,180 yesterday and I'm not sure how much of it was ads". Brand owners talk to brand owners in receipts. If he likes the player, he says: *"Come to the Back Room tomorrow. Gus is doing steak."* (That's the invitation, and the way to Act III.)
- **His secret** (`DISCOVER_REX_SECRET`): with trust, or if the player is up at 5 a.m. in the hotel lobby, they catch him at a corner table, answering his own customer-support inbox, one email at a time. *"Nine years. Every morning. Don't tell anybody. It ruins the bit."*

## 2.3 THE METHOD PANEL

10 a.m., main stage: *"THE GREAT DEBATE: How to Win Q4 on the Ad Platform."* On stage: **Professor Vince Calloway** (inventor of the 5:5:1 Method), **Walt Ferreira** (*"11 reasons I'm a bad follow"*), **Gord Lachance** (streaming TV), and **Lenny Szabo** (*"or the website"*). Moderator: **Benji Kaplan** of the *Margin Call* podcast.

Play the debate big. Vince says there is one correct structure. Walt says it depends, then says he doesn't post about his brands, then stops talking. Gord says the platform is killing the ads, not the audience. Lenny says it's the website. Vince calls everyone who disagrees "cost-cap cowards". At Q&A, the player can ask one question, and **the question is the move.**

- **Outplaying Vince** (`SOCIAL_VINCE`): ask him for one number he'd stand behind (his own contribution margin, an incrementality result, a case study that's still in business); bring Jun's Truthtable output; or let Walt and Lenny take him apart while you hand them the mic. Vince doesn't de-escalate. He'll promise "a video in two weeks" and post something unhinged that night.
- **The famous screenshot** (`DISCOVER_GURU_CASE_STUDY`): Vince's slide shows *"$2.3M in 30 days with 5:5:1."* With a Founder's move, a search on a phone, or Hank Dorsey in the audience (*"I know that store. Candle shop. Closed in March."*), the truth comes out: it was a candle shop, the revenue included returns, and it shut down eight months later.
- **Breakfast tacos** (`ACH_BREAKFAST_TACOS`, `tacos`): there's a taco truck outside, and the panel is an hour long. Skipping the panel for tacos costs the panel's leads, and wins a hidden achievement. Ray Zhao is at the truck, and tells a Ray-zinger. (Laughing sincerely is `ACH_LAUGHED`.)

## 2.4 THE DEMO (optional)

A side room, *"NOOSPHERE: The Shared Brain for Humans and Agents. Live Demo."* **Jasper Quill and Cole Fenn** (`characters/npcs.md`). *"Almost a thousand businesses. We're so grateful."* Cole, to the player, unprompted: *"Let's get you on Noosphere."* The agent answers any question about your business, instantly, in a chat window. Signing up is STACK +1.

- **The demo** (`DISCOVER_NOOSPHERE_DEMO`): the answers are a little too human, with typos that get corrected. A Buyer or Operator notices the latency spikes whenever Jasper isn't in the room. Through a door left ajar: Jasper, in the next room, typing very fast. *"It's a... human-in-the-loop beta."* Played kindly: they're not crooks, they're two people with a good idea and no product yet, which is most of the expo hall.

**ON THE LINE (a post can save it):** a seat at the Back Room. A post from the conference that DOES NUMBERS gets Gus to DM an invitation; VIRAL gets Rex to quote-post it in all caps (`SOCIAL_REX` still has to be earned in person). What goes viral is never the panel take. It's the photo of the fog machine at the Halcyon booth, or Trent's supercar with a parking ticket on it.

**Podcast offer 1** (`rules.md` §12): the branded mic booth by the coffee line. *"Free production. We just get the pre-roll."*

## 2.5 THE PARKING LOT

Leaving, the player passes **Trent**, leaning on a rented supercar, selling a course called *Black Friday Millionaire* to a small crowd. Someone says "supercar", the crowd says "Trent", and everyone moves on. (Pure texture. If the player engages, he'll sell them the course: STACK +1, and it's 40 slides of screenshots.)

Before they go, **Jun Park** is at the coffee cart, quietly handing out a URL on a Post-it: *Truthtable, free, lines up your store, your ad platform, and your bank.* It's the key to Puzzle 1 if they haven't solved it.

**The invitation:** Rex's invitation to the Back Room (from `SOCIAL_REX`), or Hal Brody's, if the player impressed him at the panel Q&A, or Gus's own text, if a Founder used their move on anyone: *"Steak. 8 p.m. Brand owners only. No badges."* **Walking into the Back Room ends Act II.** Record `REACH_BACK_ROOM` (it's sent with everything else at the end) and fetch the Act III pack.

**Fallback:** if nobody invited them, Dot texts: *"Gus Ferraro just called the support line to compliment the sponges. He says come to dinner."* (Dot answers every call.)

---

## Exceptions

- **A buyer approaches** (an aggregator that rolls up small brands, at the bar): accepting is `ACQUIRED`, from Act III, so play one more scene and let them sign at the Back Room.
- **MARGIN hits 3:** `OUT OF CASH`.

===== FILE: game/puzzles.md =====

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

===== FILE: game/encounters.md =====

# BLACK FRIDAY: Set Pieces

Business peril, taken completely seriously. Every set piece follows `core/dm-core.md` §6: three approaches as a lettered menu, a d20 at the turning point, and it must **cost or reveal** something. A miss by 1 to 4 costs a MARGIN level, a HAIR level, days, or trust. **Buying something can end any of them instantly** (STACK +1). Always let the player know someone's offering.

## Rules
1. Open with the situation, played dead straight, plus one usable detail (a mic, a QR code, the cancel button, Jun's script).
2. **Three approaches (A, B, C, plus D. Other):** **hold your ground** (say no, say the number, face it), **walk away** (leave, pause, turn it off), **turn the room** (use the setting: the audience, the Feed, the platform's own rules, another vendor).
3. **Paths pay off:** the Founder makes sellers bow, the Buyer rolls it back, the Operator shows the margin, the Creative writes the line that turns it.
4. Nobody is humiliated who didn't earn it. The worst outcome is a bad quarter, a lost hair, a quit teammate.

---

## Cold open: four numbers (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_EXPO: The Expo Hall · SET PIECE (Act II)
- **Threat:** two hundred SaaS booths and a brand-owner badge. Demos "that take four minutes". Brayden at Booth 1.
- **Terrain:** aisles, a coffee line, swag tables, a fog machine, an LED wall, a back exit through the loading dock, Rex's path through the crowd.
- **Menu example:** "Flip the badge around and walk straight down the middle aisle saying 'just looking'." / "Out through the loading dock and around to the main stage." / "Ask every booth the same question, 'what's the contribution margin on this?', and watch the aisle clear."
- **Reveals:** Halcyon's booth (Brayden can't explain it), and Rex. **Costs:** usually a tool trial (STACK) or an hour.

## ENC_PODCAST: The Live Taping · SET PIECE (Act III)
- **Threat:** two mics, three hundred phones, Benji's hard questions, and Professor Calloway trying to make you his case study.
- **Terrain:** the stage, the big screen behind it (whatever's on the player's phone can go up there), the front row (Hank Dorsey), the producer's booth, the clock.
- **Menu example:** "Say your real numbers on the mic, all of them." / "Turn every question back to the Professor: 'What's yours?'" / "Put Jun's Truthtable up on the big screen and let it talk."
- **Reveals:** where the Method came from. **Costs:** reputation either way; a HAIR level if it goes badly.

## ENC_ACCOUNT: The Weekend Spike · SET PIECE (Act IV)
- **Threat:** the ad account spending 60 percent over budget at double the cost per order, at 6 a.m. on a Saturday, with Kyle at a wedding.
- **Terrain:** the ad account, Kyle's automated rules, the flexible-budget setting, the checkout (Halcyon), the support queue, the Feed (other accounts spiking too), Walt's DMs.
- **Menu example:** "Pause everything, now, and eat the lost weekend." / "Find the automated rule and the budget setting, and turn off only those." / "Call Walt, who's seen this exact Saturday before."
- **Reveals:** Halcyon's discount in the checkout, and whose rule it was. **Costs:** a MARGIN level, or a HAIR level, or both.

## ENC_BFCM: The Weekend (Act V)
- **Threat:** everything at once, **with the ad platform dark** (`rules.md` §14): the site slowing at 9 a.m., CPMs doubling, a SKU selling out, 400 support tickets, and the Professor's video naming the brand live.
- **Terrain:** the War Room, the store's settings, the email tool, the warehouse on the phone, Dot's queue, the Feed.
- **Menu example:** "Close the ad account. Steer by the order feed and the bank." / "Pull ad spend to the list only and let email carry Saturday." / "Swap the sold-out SKU into the gift box and send a 'back in stock' email to the waitlist."
- **Reveals:** whether the plan survives contact with the weekend.
