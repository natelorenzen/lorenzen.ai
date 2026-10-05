# BLACK FRIDAY · PACK-2 · BUILD 1.0-ce5bdfb

Bundle for: Act II begins (`REACH_SUMMIT`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: SCALEFEST

*An expo hall that bows, a booth that can't explain itself, the most heated panel in conference history, the question of who's the goodest, an AI demo, and a supercar.* Target: 13 to 17 minutes, 9 to 12 decisions. Day 37 to Day 35, Austin.

**Route:** through the expo hall → meet the big fish → the Great Debate (or tacos) → *the goodest* and *the demo* (optional) → **an invitation to the Back Room**.

Load `game/puzzles.md` and `game/encounters.md` now. Start with the market weather (`rules.md` §5), and the Enhancement of the Act (`rules.md` §15): the Algorithm has given every Wrung ad an AI background. The sponge now sits on a marble counter in a Tuscan villa. Wrung does not sell villas. Click-through is up.

---

## 2.1 THE EXPO HALL (set piece)

**ScaleFest**: a convention center in Austin, cold brew on tap, a DJ at 9 a.m., and every screen running a lower third: *presented by HALCYON · Agentic Commerce Is Here.* The expo hall is two hundred software booths, and the player's lanyard says the most powerful words in the building: **BRAND OWNER.**

**The goal, said plainly by Kyle at the door:** *"We need to get to the main stage by ten for the big panel. And we can't come out of here with software."*

Run **`ENC_EXPO`** (`game/encounters.md`). **The Bow:** when a salesperson sees a brand-owner badge, they physically bow, a little, without realizing it. Then they swarm. Every booth has a four-minute demo, a QR code, a tote bag, and a phrase (*"we're like an operating system for your operating system"*).

**Booth 1: Halcyon.** The biggest booth, with a fog machine, an LED wall reading *AGENTIC · INTELLIGENT · LAYER*, and four reps. Ask any of them what Halcyon does, and each gives a completely different answer, confidently, at the same time:
- *"It's a layer."*
- *"It's agentic. So it does things."*
- *"It's less a product and more a philosophy."*
- *"Have you tried it? Then you know."*

**Brayden**, the Solutions Architect, sees the badge and lights up: *"You're a customer! How are you loving it?"* (Never let Halcyon resolve. Asking breaks `ACH_DIDNT_ASK`; walking past it, smiling, keeps it.)

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
LED walls showing abstract shapes instead of words, salespeople in
matching quarter-zips bowing slightly toward a business owner wearing a
lanyard and holding a kitchen sponge, like courtiers before a king; a
young media buyer beside them clutching a free tote bag; the biggest booth
at the end pumping theatrical fog around four reps all pointing in
different directions. Epic, absurd, overwhelming.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 2.2 THE BIG FISH

By the coffee line, the sellers part like the sea. **Rex Mahoney** (`characters/npcs.md`), CEO of Bulwark, walks through in a plain grey hoodie, holding a black coffee. Every booth bows lower. He says the number to nobody in particular: *"EIGHT FIGURES. EVERY MONTH. TARIFFS SURVIVED. NEXT."*

- **Winning his respect** (`SOCIAL_REX`): say your own real number, plainly, with no adjectives. He hates "we're scaling", "it's early", and "we're in a growth phase". He loves *"we did $12,180 yesterday and I don't know how much of it was ads."* If he likes the player: *"Come to the Back Room tomorrow. Gus is doing steak."* That's the invitation to Act III.
- **His secret** (`DISCOVER_REX_SECRET`): at 5 a.m. in the hotel lobby, he's at a corner table answering his own customer-support inbox, one email at a time. *"Nine years. Don't tell anybody. It ruins the bit."*

## 2.3 THE GREAT DEBATE

10 a.m., main stage: ***"THE GREAT DEBATE: How Must the Ad Account Be Structured?"*** It has the energy of a custody hearing. On stage: **Professor Vince Calloway** (Team One Campaign, and the inventor of 5:5:1), **Walt Ferreira** (who does not run exclusive cost caps and does not care if you do), **Gord Lachance** (*"Your ads aren't fatiguing. The Algorithm is murdering them by demanding four hundred more"*), and **Lenny Szabo** (*"or the website"*). Moderator: **Benji Kaplan**, who looks like a man who has seen a wall with three words on it.

Play it as the most unhinged panel in conference history, and go big:
- The Professor has a man in the third row removed from his paid community, live, on his phone, for admitting to cost caps. The man's coworkers slowly move one seat away from him.
- Walt explains his position, says he doesn't post about the brands he runs, says he'd rather delete his account than make content, and stops talking for the rest of the panel. It's the most respected forty seconds of the conference.
- **The Landing Page Question** erupts, as it always does: a man at the mic asks whether to send traffic to a landing page or straight to the product page. The panel splits four ways. Someone suggests a landing page *for* the landing page. Lenny: *"Or the website."* (Ending any argument in the game with *"or the website"* is `ACH_OR_THE_WEBSITE`.)
- **Q&A:** the player gets one question, and the question is the move.
  - **Outplaying the Professor** (`SOCIAL_VINCE`): ask him for one number he'd stand behind (his own contribution margin, a holdout result, a case study still in business), bring Jun's Truthtable, or let Walt and Lenny take him apart while you hand them the mic. Vince never de-escalates. That night he posts a product from the shopping app that shouldn't exist (a self-stirring candle) and starts a new fight.
  - **The famous screenshot** (`DISCOVER_GURU_CASE_STUDY`): his slide says *"$2.3M in 30 days with 5:5:1."* With a Founder's move, a phone search, or Hank Dorsey in the front row (*"I know that store. Candle shop. Closed in March."*), the truth: a candle shop, revenue including returns, shut down eight months later.
- **Breakfast tacos** (`ACH_BREAKFAST_TACOS`, `tacos`): there's a taco truck outside and the panel is an hour long. Skipping it for tacos costs the panel's leads. **Ray Zhao** is at the truck, and tells a Ray-zinger. (*"What do you call a TikTok Shop SKU with no repurchase? A one-hit Shopder."* Nobody laughs. Laughing sincerely is `ACH_LAUGHED`.)

## 2.4 WHO'S THE GOODEST (optional)

At the bar, the industry's second favorite question: **the first three hires.** Benji asks every founder he meets, and every founder answers "a creator manager." The player can answer honestly (they already have three hires, and one of them does everything). **Wren Holloway** keeps a mental list of who's actually *good*, as opposed to who's *cracked*, and if the player is about to hire someone terrible, she'll say so, quietly. (*"He's very cracked. He's not good. Those are different words."*)

## 2.5 THE DEMO (optional)

A side room: *"NOOSPHERE: The Shared Brain for Humans and Agents. Live Demo."* **Jasper Quill and Cole Fenn** (`characters/npcs.md`). *"Almost a thousand businesses. We're so grateful."* Cole, unprompted: *"Let's get you on Noosphere."* Noosphere has lore: everyone who says they use it doesn't, and everyone who says they don't, does. Signing up is STACK +1.

- **The demo** (`DISCOVER_NOOSPHERE_DEMO`): the AI agent answering questions is a little too human: it makes typos and corrects them, and it slows down whenever Jasper leaves the room. Through a door left ajar: Jasper, in the next room, typing very fast. *"It's a... human-in-the-loop beta."* Play it kindly: two people with a good idea and no product yet, which is most of the expo hall.

## 2.6 THE PARKING LOT

Leaving, the player passes **Trent**, leaning on a rented supercar, selling a course called *Black Friday Millionaire* to a small crowd. Someone says "supercar", the crowd says "Trent", and everyone moves on.

**Jun Park** is at the coffee cart, quietly handing out a URL on a Post-it: *Truthtable, free, lines up your store, your ad platform and your bank.* Nobody takes one. The Feed would rather argue about hooks. It's the key to Puzzle 1 if it's unsolved.

**Podcast offer 1** (`rules.md` §12): a branded mic booth by the coffee line. *"Free production. We just get the pre-roll."* (It's Halcyon's pre-roll. Nobody knows what it says.)

**ON THE LINE (a post can save it):** a seat at the Back Room. A post from the conference that DOES NUMBERS gets Gus to DM an invitation; VIRAL gets Rex to quote-post it in all caps. What goes viral is never the panel take. It's the photo of the man getting kicked out of the Professor's community, or of Trent's supercar with a parking ticket on it.

**The invitation:** Rex's (from `SOCIAL_REX`), or Hal Brody's if the player impressed him at the Q&A, or Gus's own text: *"Steak. 8 p.m. Brand owners only. No badges. No methods."* **Walking into the Back Room ends Act II.** Record `REACH_BACK_ROOM` (it's sent with everything else at the end) and fetch the Act III pack.

**Fallback:** if nobody invited them, Dot texts: *"Gus Ferraro just called the support line to compliment the sponges. He says come to dinner."* (Dot answers every call.)

---

## Exceptions

- **A buyer approaches** (an aggregator that rolls up small brands, at the bar): accepting is `ACQUIRED`, from Act III, so play one more scene and let them sign at the Back Room.
- **MARGIN hits 3:** `OUT OF CASH`.

===== FILE: game/puzzles.md =====

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

===== FILE: game/encounters.md =====

# BLACK FRIDAY: Set Pieces

Business chaos, played for laughs: real money, ridiculous situations. Every set piece follows `core/dm-core.md` §6: three approaches as a lettered menu, a d20 at the turning point, and it must **cost or reveal** something. A miss by 1 to 4 costs a MARGIN level, a HAIR level, days, or trust. **Buying something can end any of them instantly** (STACK +1). Always let the player know someone's offering.

## Rules
1. Open with the situation at full comic volume, plus one usable, absurd detail (a fog machine, a hexagon, a phone at a wedding, a sponge with hands).
2. **Three approaches (A, B, C, plus D. Other):** **hold your ground** (say no, say the number, face it), **walk away** (leave, pause, turn it off), **turn the room** (use the setting: the audience, the Feed, the platform's own rules, another guru).
3. **Paths pay off:** the Founder makes sellers bow, the Buyer rolls it back, the Operator shows the margin, the Creative writes the line that turns it.
4. Every set piece contains at least one absurd recurring bit (a bow, someone getting kicked out of a paid community, a "video in two weeks", an enhancement turning on). Nobody is humiliated who didn't earn it.

---

## Cold open: four numbers (unscored tutorial)
See `acts/act-1.md` 1.0.

## ENC_EXPO: The Expo Hall · SET PIECE (Act II)
- **Threat:** two hundred SaaS booths, a BRAND OWNER badge, the Bow, and the swarm. Four Halcyon reps with four explanations.
- **Terrain:** aisles, a coffee line, a swag table, a fog machine, an LED wall, the loading dock, and Rex's path through the crowd (where the sellers part like the sea).
- **Menu example:** "Flip the badge around and walk down the middle aisle saying 'just looking'." / "Out through the loading dock and around to the main stage." / "Ask every booth the same question, 'what's the contribution margin on this?', and watch the aisle empty."
- **Reveals:** Rex, and the fact that no one at Halcyon knows. **Costs:** usually a tool trial (STACK) or an hour, and a tote bag.

## ENC_PODCAST: The Live Taping · SET PIECE (Act III)
- **Threat:** two mics, three hundred phones, Benji's hard questions, and the Professor trying to make you a 5:5:1 case study live, with Hexagon 2 on the screen.
- **Terrain:** the stage, the big screen behind it (whatever's on the player's phone can go up there), the front row (Hank, Theo), the producer's booth, the clock (it says 5:51 at some point).
- **Menu example:** "Say your real numbers on the mic, all of them." / "Turn every question back to the Professor: 'What's yours?'" / "Ask the front row where the framework came from, and follow the citations."
- **Reveals:** the course loop and the 5:51 origin. **Costs:** reputation either way; a HAIR level if it goes badly.

## ENC_ACCOUNT: The Descent · SET PIECE (Act IV)
- **Threat:** the ad account spending 60 percent over budget at 6 a.m. on a Saturday, with Kyle at a wedding, and the only way to stop it is down through the settings (`world/the-lever.md`).
- **Terrain:** the Permissions Loop, the Recommendations page, the Opportunity Score, the Enhancements tab, Kyle's Automated Rules, and the sticky note at the bottom.
- **Menu example:** "Pause everything from the top and eat the lost weekend." / "Go all the way down and turn off only the rule that's doing it." / "Call Walt, who has seen this exact Saturday before and will explain it in four words."
- **Reveals:** Kyle's copied rule (it raises the budget whether ROAS is up or down), and, at the bottom, the sticky note. **Costs:** a MARGIN level, or a HAIR level, or both.

## ENC_BFCM: The Weekend (Act V)
- **Threat:** everything at once, **with the ad platform dark** (`rules.md` §14): the site slowing at 9 a.m., CPMs doubling, a SKU selling out, 400 support tickets, "Plus+ Feelings", and the Professor's two-hour video naming the brand live.
- **Terrain:** the War Room, the store's settings, the email tool, the warehouse on the phone, Dot's queue, the hourly pacing spreadsheet, the Feed.
- **Menu example:** "Close the ad account. Steer by the order feed and the bank." / "Pull spend to the list only and let email carry Saturday." / "Swap the sold-out SKU into the gift box and email the waitlist."
- **Reveals:** whether the plan survives the weekend.
