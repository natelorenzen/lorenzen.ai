# BLACK FRIDAY · PACK-4 · BUILD 1.0-0d8ee76

Bundle for: Act IV begins (`REACH_WAR_ROOM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-4.md =====

# ACT IV: THE WAR ROOM

*Four hundred AI ads or three good ones, the website, a holdout test, the weekend the account caught fire, what Halcyon really does, and ten phone calls.* Target: 12 to 16 minutes, 8 to 11 decisions. Day 33 to Day 1 (Thanksgiving).

**Route:** set the plan's pieces in motion (creative, website, holdout) → survive the weekend spike → expose Halcyon → *call customers* (optional, but it's the hidden ending) → build and lock the offer → **the Blackout, Thanksgiving afternoon** → midnight.

Load `world/halcyon.md` now. Start with the market weather (`rules.md` §5).

---

## 4.1 THE WHITEBOARD

Wrung HQ, blinds down. **Margo** has written one line at the top of the whiteboard: ***DOES IT SURVIVE CONTRIBUTION MARGIN?*** Kyle has written forty tactics under it. Dot is here, if she was recruited, with a stack of notebooks.

**The goal, said plainly by Margo:** *"By Thanksgiving, I want one offer, one email plan, one ad plan, and a number I believe. Everything on this board either earns its place or it's gone."*

Time matters now. Each piece costs days (`world/the-feed.md`). Let the player choose what to start, in what order. Three pieces worth starting early:

- **Creative.** Kyle has an AI tool queued up that will make **400 ads overnight** (STACK +1, 2 days, and then 3 days of cleanup when 380 of them are subtly wrong: sponges with six corners, a model holding the sponge like a phone). Or **Tess Varga**, by video call, writes three openers on a napkin and holds it up to the camera: *"Did you read the brief."* (4 days, and they're good.) Creative fatigue drops either way, but only one of them doesn't bend the brand.
- **The website.** **Lenny Szabo** looks at the product page for nine seconds. *"Your ads are fine. It's the website."* The page takes 6 seconds to load on a phone because of fourteen apps' scripts. Fixing it (3 days, cutting apps) heals MARGIN one level and lowers STACK.
- **The holdout.** **Walt Ferreira** or **Hank Dorsey** (on a call, or on the Feed) suggests it: turn off all ads in one state for two weeks and see what actually changes. *"We've done this quarter before. Test it."* It needs **14 days** to run. If it's started by about Day 16, the result lands before Black Friday.

**Podcast offer 3** (`rules.md` §12): two microphones and a foam panel appear on Kyle's desk, "just to test it". He has a name. It's a sponge pun. He's so proud of it.

## 4.2 THE OHIO HOLDOUT

If the holdout ran: two weeks with no ads in Ohio. The ad platform said it was driving 60 percent of revenue. Ohio's revenue fell by **25 percent**. (`DISCOVER_INCREMENTALITY`.) The ads matter. They matter less than the dashboard says, and the email list matters more. Margo looks at the result for a long time and then frames it.

- **Kyle's moment** (`ALLY_KYLE_UNSUBSCRIBES`): after the holdout, or after Halcyon is exposed, Kyle quietly cancels every course, unfollows the Professor, and turns off his automated rules. *"I'm going to run the account like it's my money."*

## 4.3 THE WEEKEND SPIKE (set piece)

A Saturday, around Day 20. The player's phone wakes them at 6 a.m.: the ad account has spent **60 percent over budget** since midnight at double the cost per order, and it's still going. Kyle's phone is off (it's his sister's wedding). The Feed is already talking about it: other accounts are spiking too.

Run **`ENC_ACCOUNT`** (`game/encounters.md`). Three things are compounding: the platform's flexible budget deciding Saturday is special, an automated "scale winners" rule Kyle copied from a course, and Halcyon's checkout incentive turning every new order into a 25-percent-off order. The fire is real, and the player has to decide what to touch.

```
[IMAGE_TRIGGER]
ID: IMG_WEEKEND_SPIKE
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
Dawn in a small loft office above a laundromat, blinds half open: a
business owner in pajamas and a hoodie at a desk lit by four monitors, one
showing a line chart rocketing upward into a red danger zone like a
monster rising, money-green coins pouring out of the screen; a coffee mug
tipping over; a whiteboard behind with one underlined line of scribble.
Dramatic, panicked, funny.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 4.4 THE CURSED LINE ITEM, AGAIN (puzzle)

With the spike, or the holdout, or Dot's tickets, something about Halcyon finally doesn't add up. Run `game/puzzles.md`, *Puzzle 2: The Cursed Line Item*. The truth (`DISCOVER_HALCYON`): Halcyon shows a "personalized AI incentive" (25 percent off) at checkout to nearly everyone, then reports every order as "AI-influenced revenue". **Canceling it for real**, now that they know, takes one call where the player says exactly what it's doing. Brayden goes very quiet: *"I'll... process that."* MARGIN heals one level, and STACK drops by one.

- **Autopilot:** Halcyon has an answer for being caught. Brayden offers **Halcyon Autopilot**: let the agent run *everything* through Black Friday (ads, offers, emails, inventory), free for the season. *"You just watch."* Accepting is `AUTOPILOT`.

## 4.5 TEN PHONE CALLS

**Always offer it:** after the spike or the Halcyon reveal, make it option A of the next menu (*"Have Dot get ten customers on the phone, and actually call them"*), since players rarely think of it unprompted. It costs one day.

- With Dot's help (or without; it's harder alone), the player calls ten real customers. Not a survey. A conversation. Ask why they buy, and wait.
- A sincere day of calls is `SOCIAL_CUSTOMER_CALLS`, and lowers STACK by one. The truth of it is `DISCOVER_WHY_THEY_BUY`: four of the ten say some version of the same thing. *"Oh, I don't use them. I send them to my son. His sponge could walk on its own."* Dot's notebooks confirm it: **41 percent of orders are parents sending sponges to grown-up kids who've moved out.** Nobody buys Wrung because of a hook. They buy it out of love, mild disgust, and the fact that it doesn't smell. Black Friday is gifting season.
- **Dot's moment** (`ALLY_DOT_PRESENTS`): if Dot is recruited, she takes the whiteboard marker. *"Can I say something? I've been waiting four years to say something."* She draws a sponge, an arrow, and a house. Everybody gets it at once.
- A Creative's move here writes the gift line in one go. An Operator's move shows the gift box's margin at full price is 2.5 times the sitewide discount's.

**ON THE LINE (a post can save it):** **4,000 ceramic sponge holders** in the warehouse that nobody ordered more than 300 of. A post that DOES NUMBERS sells a thousand; VIRAL sells out all of them in a day, at full price, and heals one MARGIN level. What goes viral is never the product: it's Dot's handwritten note in a customer's box, or a customer's reply with a photo of their son's disgusting old sponge.

## 4.6 THE OFFER

Now the plan. Run `game/puzzles.md`, *Puzzle 3: The Offer*: one offer, built on Simone's sheet (if they have it) and what customers actually want, that survives contribution margin. **Locking it** sets `plan_locked` (note the day: `ACH_PLAN_BY_HALLOWEEN` needs 25 or more days left).

- **The Feed's last temptations**, all in the last week: **Ray Zhao** offers to move everything to the short-video app's shop with a window-squeegee bundle that goes viral (`THE SQUEEGEE PIVOT`); the Professor's academy offers the player a "case study slot" (STACK +1); a "40% OFF SITEWIDE" banner is one click away (`sitewide_discount`).
- **The thread:** if the player starts drafting a thread about their Black Friday strategy before Black Friday has happened, Theo Marsh likes it within a minute. The Professor quote-posts it. Kyle says it's doing numbers. Turning it into a course is `THE THREAD`.

## THANKSGIVING: THE BLACKOUT

Day 1, Thanksgiving. 2:14 p.m. Everyone is at their family's table, with a laptop open next to the gravy. The plan is locked (or it isn't). And then Kyle's phone buzzes, and buzzes, and doesn't stop.

**The ad platform has broken** (`rules.md` §14). Spend: $0. Conversions: 0. Every ad: *Learning*. Status page: *"We're aware of an issue affecting some advertisers."* The ads are still running. The money is still spending. Nobody can see anything, and Black Friday starts in ten hours.

```
@walt_badfollow · reporting is down. ads are not. good luck everyone. i'm going to go eat pie
@profvincecalloway · 5:5:1 accounts are UNAFFECTED. Video coming.
@halcyon_ai · Halcyon customers: our outage-proof Agentic Intelligence is fully operational.
@orthewebsite · can't see the ads. can still see the website. just saying
```

Let the panic be real and funny for one turn: Kyle wants to pause everything, Margo wants to know if they're still being charged (yes), Halcyon emails an upgrade offer, Gus's Back Room chat is 140 unread messages of people asking if theirs is broken too (it is). Then let the player decide how they'll fly tomorrow. **Don't solve it for them.** The real signals (`rules.md` §14) are all still there for anyone who looks.

- A player who knows the **holdout result** knows the ads were only ever about a quarter of it, and that the email list can carry more than the dashboard ever admitted.
- A player who has **Simone's sheet** can run the weekend from the bank.
- A player who knows **why they buy** doesn't need a dashboard to know what to send.
- A player who knows none of this is about to have a very long weekend.

```
[IMAGE_TRIGGER]
ID: IMG_BLACKOUT
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A family holiday dinner table at dusk, a roast and pies and candles; at
one end, a business owner and a young media buyer hunched over a laptop
whose screen has gone totally black with one small spinning loading
circle; their phones lighting their faces, notifications stacking up;
the rest of the family frozen mid-bite staring at them; through the
window, a whole city's lights flickering out one block at a time. Dramatic,
ominous, funny.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**11:58 p.m.** Back at the War Room, or at the kitchen table. Margo has the bank tab open. Kyle has an ad account that shows nothing. Dot has her headset on. The sale goes live at midnight, blind. **`DATA: DARK`** goes on the status line. **Record `REACH_BFCM`** (it's sent with everything else at the end) and fetch the Act V pack.

**If no plan is locked by now**, Black Friday arrives anyway: the ending is `WE'LL FIGURE IT OUT LIVE` (still fetch the Act V pack and play the weekend).

---

## Exceptions

- **They hand Black Friday to Halcyon Autopilot:** `AUTOPILOT` (play the weekend in Act V, from the sidelines).
- **They move the brand to the shop app with Ray:** `THE SQUEEGEE PIVOT` (fetch `pack-end.md`).
- **They sell the course:** `THE THREAD` (fetch `pack-end.md`).
- **MARGIN hits 3:** `OUT OF CASH`.

===== FILE: world/halcyon.md =====

# BLACK FRIDAY: Halcyon

Loaded at Act IV. This is the truth about the cursed line item.

## What it says it is
**Halcyon** · *"The Agentic Commerce Intelligence Layer."* $6,400 a month. Its website has no nouns: *"Halcyon orchestrates intelligent outcomes across your commerce surface."* It sponsors the lower third of every ScaleFest screen. Its invoice is clearer than its product: the invoice says exactly what you owe, monthly, forever. The best public guess, on the Feed, is that it's some combination of AI landing pages, shoppable content and "agentic checkout". **Every time someone explains it, the explanation is different, and a little bit of a lie.**

## How Wrung got it
Kyle started the "free 14-day trial" at a 1:07 a.m. webinar in June (`DISCOVER_KYLE_TRIAL`). It converted to paid in July. Its cancel button is a chatbot.

## What it actually does (`DISCOVER_HALCYON`)
- It injects a checkout pop-up that shows a **"personalized AI incentive"** to nearly every shopper: 25 percent off, auto-applied with a code starting `HALCY-`.
- It then reports **every order** that saw the pop-up as **"AI-influenced revenue"**, which is why its dashboard number is three times the store's.
- Since July, average order value is down 22 percent, discount spend is up $31,000 a month, and Halcyon's dashboard shows a beautiful line going up and to the right.
- Nobody at Halcyon is a villain. **Brayden**, the Solutions Architect, genuinely doesn't know. The product was built by an AI agent from a pitch deck, and nobody ever checked what it did. It's the purest thing in the game: a tool that grows a metric by eating the business it measures.

## How Brayden talks
A firm handshake and no nouns. *"Halcyon is about surfacing intent at the moment of truth."* *"It's less a tool and more a layer."* *"Great question. Let me loop in our solutions team."* (He is the solutions team.) Confronted with the truth, plainly, he goes quiet, then very sincere: *"I'll be honest, I've never seen the back end."*

## Killing it
Once the player knows what it does, one call where they say it out loud cancels it for real. MARGIN heals one level. STACK drops by one. The Feed never finds out. Halcyon's lower third is still on every ScaleFest screen next year.

## Autopilot
Caught, Halcyon offers **Autopilot**: hand it everything through Black Friday, free. That's the `AUTOPILOT` ending: it runs a flawless weekend by its own dashboard, and nobody at Wrung can tell you what happened.
