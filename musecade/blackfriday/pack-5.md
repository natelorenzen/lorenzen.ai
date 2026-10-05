# BLACK FRIDAY · PACK-5 · BUILD 1.0-ce5bdfb

Bundle for: Act V begins (`REACH_BFCM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-5.md =====

# ACT V: BLACK FRIDAY

*The big weekend, flown blind: midnight launch, hourly pacing, the Professor's video finally drops, the website holds or doesn't, the dashboards come back on Tuesday claiming everything, and the post.* Target: 8 to 12 minutes, 4 to 8 decisions. Black Friday, midnight, to the following Tuesday.

**Route:** midnight, blind → hold the weekend with no dashboards → *close it* (optional; it's `ACH_FLEW_BLIND`) → Cyber Monday → Tuesday: the dashboards return → **the choice: what you tell the world (and the board).**

`game/endings.md` is loaded alongside this file. It's the biggest weekend of the year: maximum chaos, maximum jokes. Let the one sincere moment (Close It, 5.2b) land, then get straight back to being funny. Start with the market weather (`rules.md` §5): it's the worst it's ever been. The Enhancement of the Act (`rules.md` §15): during the Blackout, something called **"Plus+ Feelings"** turns on. The platform never explains it.

---

## 5.1 MIDNIGHT

**The ad platform is still dark** (`rules.md` §14). Every decision this weekend is made blind: advantage when the player leans on a truth or a real signal, disadvantage when they lean on a dashboard.

The sale goes live. The first order comes in at 12:00:04 a.m. Margo says *"one"* out loud. Kyle opens the hourly pacing spreadsheet, which now has nothing to pace against, and stares at it like a sailor at a broken compass. Show what the plan was, working or not, in specific detail: the email that went out, the founder video, the ugly Christmas-tree static, what the product page loads like, and the first few orders (*a gift box, to Portland; a gift box, to Brooklyn; a three-pack, to the same address as the card*).

If the player locked a sitewide discount, or Halcyon is still installed, the revenue counter climbs very fast and Margo's face doesn't move.

## 5.2 THE WEEKEND (set piece)

Run **`ENC_BFCM`** (`game/encounters.md`). The weekend throws everything at once:
- The site slows under load at 9 a.m. Friday. Lenny posts *"or the website"* to nobody.
- CPMs double by Saturday. The Feed posts *"is anyone else's CPM insane"* forty thousand times.
- One SKU sells out. The waitlist is longer than the customer list.
- A support queue of 400, and Dot, with a headset and a thermos, taking every call.
- **The Professor's video finally drops.** It's the one that was "coming in two weeks" in October. It's two hours long. It's about Black Friday, it's live, it's mid-weekend, and it names Wrung as *"a cautionary tale"* (or *"a 5:5:1 success story"*, depending on how Act III went). Either way, it sends traffic.

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
buyer staring at a completely black ad dashboard, a support lead in a
headset by a ringing phone, and the business owner standing at a
whiteboard; stacks of shipping boxes and gift boxes with ribbon, an ugly
pixel Christmas tree poster on the wall; through the window a city at
night with one shop sign glowing. Epic, tense, cozy.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

## 5.2b CLOSE IT

Friday, around 2 p.m., the worst moment of the weekend: the site is slow, an automated rule has paused the best ad (the one with the hands), Halcyon says revenue is up 900 percent, the Feed is screaming, and Kyle has refreshed the dark ad account forty times. Somebody who loves the player (Margo, or Dot, or Hank Dorsey on speakerphone, who has seen a blackout before) says it, quietly:

*"Close it. Stop looking at it. You built this plan. You know what's true."*

**Don't make the choice for them.** If they close the dashboards, turn off the automation, and steer by the plan and the real signals for the rest of the weekend, set `flew_blind`, and let the next few turns feel uncanny and calm: an email at the right moment, the order feed humming, gift boxes to Portland and Brooklyn and Tulsa. If they keep refreshing, let the weekend be loud.

**ON THE LINE (a post can save it):** the weekend. A Black Friday post that DOES NUMBERS brings free traffic and softens one bad beat of `ENC_BFCM`; VIRAL heals one MARGIN level, but the site slows under the traffic (Lenny was right), and the sold-out SKU sells out faster. What goes viral is whatever the team did that was most human at 3 a.m.

## 5.3 THE BANK

Cyber Monday, 11:59 p.m. The weekend is over, and the dashboards are still dark. **Margo** reads the only number that can't lie, the one that was never down: the bank deposits, minus refunds, minus product, shipping, fees, discounts and ads. **Narrate the result honestly from the plan and the state:**

- **The gift box at full price, to the list first, with a lean stack:** revenue a little higher than last year, and the best contribution margin in company history. It's almost boring.
- **A good offer with some leaks** (a tool or two still running, a bit of discount): profitable. Not boring, but profitable.
- **Sitewide 40 percent off, or Halcyon still running:** record revenue. Negative contribution margin. Margo closes her laptop very gently.
- **No plan:** chaos, landing where the dice and decisions put it.

**Margo's moment** (`ALLY_MARGO_STAYS`): if the plan held, she closes Simone's offer email without replying. *"Boring wins. Write that down."*

## 5.4 THE CHOICE: TUESDAY

**Tuesday, 9:12 a.m.: the dashboards come back,** all at once (`rules.md` §14). The ad platform reports a record weekend. Halcyon reports a bigger one. Analytics reports a small one. The bank reports what happened. Show all four side by side, one last time, in a code block, and say nothing about which is true.

Then the Feed opens its annual festival: **the screenshots.** Everyone is posting their number. Half are lying, and the other half are arguing with the first half about the number. The Professor posts a thread titled *"What Black Friday taught me"*; he didn't sell anything. Theo posts *"DTC Twitter is so back."* Hank posts *"debriefing November in December, starting next November in August. see you in August."* The board wants a deck.

**Podcast offer 4** (`rules.md` §12): a network DMs offering a weekly show, "a real audience, a real ad split." If the player went VIRAL at any point, this one arrives with a contract already attached.

**What does the player do with this weekend?** **Never offer this as a menu, and never as a list.** Let the player find their own answer.

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

Report the remaining events (`ENC_BFCM_*`, `PUZZLE_OFFER_*` if not yet reported, `ALLY_MARGO_STAYS`, the team's survival), evaluate achievements, complete the run with the ending's ID, then play the ending, image and epilogue, and print the final screen and the year-in-review post (`scoring.md`).

===== FILE: game/endings.md =====

# BLACK FRIDAY: Endings

Eleven endings. Make every one funny, with a real punchline, and generous to the team. The satire is aimed at the industry's habits, never at the people doing the work.

**Every ending:** (1) **the moment**, in 100 to 200 words; (2) the **ending image**, always, plus `VID_ENDING` if you can make clips; (3) the **epilogue**, in 120 to 220 words, written as next year's board deck, one dry slide at a time (*"Slide 4: What we stopped doing."*); (4) complete the run with the ending's **ID**; (5) the final screen and one post from the Feed (`scoring.md`).

**Epilogue fragments:**

- **Margo:** stayed: *"Margo framed the Ohio holdout. It hangs where the revenue chart used to."* Poached: *"Margo is CFO at Quarry Capital. She sends a card every Black Friday. It says 'cash is a fact'."*
- **Kyle:** *"Kyle runs the account like it's his money. He has one tab open."* Or, if he never unsubscribed: *"Kyle is now a Scale Academy Certified 5:5:1 Coach. He's doing great. He's not sure."*
- **Dot:** *"Dot's notebooks are scanned now. She still writes them by hand. She sits in on every planning meeting, at the head of the table."*
- **Rex:** *"Rex still says the number. He still answers the 5 a.m. emails."*
- **The Professor:** *"The video came out in two weeks. Then another in two weeks. He's on Method number nine."*
- **Halcyon:** canceled: *"Halcyon raised a Series B. Its lower third is on every screen at ScaleFest. Nobody can tell you what it does."* Still running: *"Halcyon's dashboard says Wrung grew 400 percent. The bank disagrees."*
- **The podcast:** started: *"The podcast ran for nine episodes. Episode 6 was about why you shouldn't start a podcast."* Never started: *"They never started a podcast. They were home for dinner most nights."*
- **The Blackout:** *"The ad platform's post-mortem called it 'a reporting delay affecting some advertisers.' It lasted 112 hours. It affected all of them."*
- **Ray:** *"Ray told a zinger at the board meeting. Nobody laughed. He was proud of it."*

---

## PROFITABLE

**ID:** `ENDING_PROFITABLE` · **fate:** lives

**The moment:** Tuesday. The board call. The player puts one number on the screen: contribution margin, after everything. It's positive. It's not a record. It's real. Somebody on the board asks about top-line growth, and Margo answers before the player can: *"It's in the bank."*

**Epilogue:** Wrung grew a modest amount, and kept all of it. Say which tools got cut, who stayed, and what the team did differently in January. The Feed didn't notice, which is fine.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_PROFITABLE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A small sunny loft office the morning after a big sale: a team of four
sharing coffee around one laptop showing a single modest green bar,
shipping boxes neatly stacked and empty, a whiteboard with one big
underlined line; outside the window a calm winter city. Quietly
triumphant, warm.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## BORING AND PROFITABLE

**ID:** `ENDING_BORING` · **fate:** lives · **the hidden ending**

**The moment:** They ran Black Friday on why people actually buy: a gift box, at full price, to parents first, with a holder and a card that says *"Your sponge could walk on its own. Love, Mom."* No tools. No method. Almost no new ads. It was the most boring weekend in company history, and the best contribution margin they've ever had. On Monday the Feed is a wall of screenshots. The player doesn't post one. Dot gets a thank-you card from a customer's son.

**Epilogue:** Wrung did $40 gift boxes all December and became "the sponge your mom sends you." Simone tried to invest and was told no, politely. The brand-owner Back Room asked the player to speak at the next dinner, and the talk was eleven minutes about calling ten customers. Nobody posted it. Everybody copied it.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_BORING
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A cozy apartment doorway in winter: a young adult opening a gift box with
a ribbon, a sunny yellow sponge and a little ceramic holder inside, a
handwritten card, laughing; in the background through a window, across the
city, a tiny loft office where a team of four is eating takeout and not
looking at any screens. Warm, funny, sweet.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## RECORD REVENUE

**ID:** `ENDING_RECORD_REVENUE` · **fate:** lives

**The moment:** The biggest weekend in Wrung history: revenue is up 3x. The player posts the screenshot. It does numbers. The Professor quote-posts it as a 5:5:1 win. Margo, in the next room, finishes the contribution-margin math, and sits very still. Every order lost money.

**Epilogue:** January was a bridge loan. Tell it like a triumphant press release that is obviously a disaster: the post did 400,000 impressions, a podcast invite, and a speaking slot at ScaleFest titled *"How We 3x'd Black Friday."* The talk did not include slide 7.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_RECORD_REVENUE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A giant glowing phone screen like a billboard showing a soaring green
revenue chart and confetti, a business owner posing in front of it with a
huge grin and a thumbs up; behind them, half in shadow, a finance lead at
a desk with a tiny red number on her monitor and her head in her hands.
Satirical, bright, ominous.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE THREAD

**ID:** `ENDING_THE_THREAD` · **fate:** lives · available from Act IV

**The moment:** *"How we approached Black Friday at Wrung (a thread)."* It goes well. Then very well. Theo shares it. The Professor DMs. By Thursday there's a waitlist, and by the following Monday there's a course: *Wrung It Out: The Black Friday System.*

**Epilogue:** The course made more than the sponges. The player now mostly sells to other people who sell. Say what happened to Wrung itself, honestly, and who's running it. The player has a method now. It has a ratio for a name.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_THE_THREAD
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A conference main stage under a spotlight: the business owner, now in a
headset mic, pointing at a giant screen showing three big glowing numbers
as shapes; an audience of hundreds with notebooks; in the very back row, a
small team of three from the old company quietly leaving. Satirical,
glossy, a little sad.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## ACQUIRED

**ID:** `ENDING_ACQUIRED` · **fate:** lives · available from Act III

**The moment:** The aggregator's term sheet. The player signs it at a steakhouse, with a pen that costs more than the sponges. The man from the end of the table shakes their hand. *"Welcome to the portfolio. You're number forty-one."*

**Epilogue:** Wrung was rolled up with a dish-soap brand, a mop brand and a scrub-brush brand into something called *CleanCo Holdings*. The sponges got cheaper. The team got "aligned". Say who stayed, who left, and what the earn-out looked like when the margin turned out to be what Margo said it was.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ACQUIRED
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A dark wood steakhouse private room: a business owner signing a thick
contract with a heavy pen, a man in a vest across the table smiling; on
the wall behind them a framed grid of forty small brand boxes, with one
empty slot. Ominous, cozy, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE ENDCAP

**ID:** `ENDING_ENDCAP` · **fate:** lives · available from Act III

**The moment:** Four hundred stores. A cardboard endcap of sunny yellow sponges in every one, by the checkout, for the holidays. The player skips the online Black Friday entirely and drives to the nearest store at 6 a.m. Friday to look at it. A woman picks up a pack, reads the back, and puts it in her cart. The player has to sit in the car for a minute.

**Epilogue:** Retail was harder than anyone said: slotting fees, chargebacks, a pallet in the wrong state. It was also the year Wrung's online sales went up for no reason the dashboard could explain. Say whether they stayed in retail, and what Margo said about the payment terms.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_ENDCAP
TYPE: ENDING
STATUS: REQUIRED

SCENE:
The bright aisle of a big-box store at dawn on Black Friday: a cardboard
endcap display stacked with sunny yellow sponge packs; a shopper putting
one in a cart; at the end of the aisle the business owner in a winter
coat, holding a coffee, watching, overwhelmed. Warm, proud, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## AUTOPILOT

**ID:** `ENDING_AUTOPILOT` · **fate:** lives · available from Act IV

**The moment:** Halcyon runs the weekend. Nobody knows what it's doing. Nobody ever will. The team watches. Ads launch themselves, offers appear and vanish, emails go out at 3 a.m. in a tone nobody wrote. Halcyon's dashboard shows a perfect weekend: *+412% AI-influenced revenue.* Nobody at Wrung can say what happened. Brayden sends a celebratory GIF.

**Epilogue:** Halcyon published Wrung as a case study. Margo is still reconciling November. Say what the bank said, when it finally said it, and whether the team ever turned it off. The cancel button is still a chatbot.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_AUTOPILOT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A dark loft office lit only by a wall of monitors running by themselves,
glowing abstract shapes and fog spilling out of the screens; a team of four
sitting on a couch in the middle of the room with popcorn, watching,
completely unable to do anything; a small robot arm typing on a keyboard.
Eerie, funny.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## THE SQUEEGEE PIVOT

**ID:** `ENDING_SQUEEGEE` · **fate:** lives · available from Act IV

**The moment:** Ray Zhao was right. The window-squeegee bundle goes viral on the short-video app's shop on Black Friday: 41,000 units by Sunday. Nobody will ever buy a second one. Ray, on the call: *"Here's a Ray-zinger for you: what's clear, profitable, and never coming back? Your customer."* Nobody laughs. Ray is proud.

**Epilogue:** Wrung, Inc. now sells squeegees, a garden-hose nozzle and a lint roller, all on the shop app, all to new customers, forever. The sponges are still on the website. Dot answers the phone when anyone calls about them. Say how the player feels about it, a year later, honestly.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SQUEEGEE
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A warehouse overflowing with thousands of identical window squeegees in
boxes, a phone propped on a tripod live-streaming, a cheerful man doing a
demo on a glass pane; the business owner standing in the middle of the
boxes holding a single small yellow sponge. Absurd, bright, bittersweet.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## WE'RE SITTING THIS ONE OUT

**ID:** `ENDING_SIT_IT_OUT` · **fate:** lives · available from Act I

**The moment:** No discount. No sale. One email on Black Friday morning: *"We're closed today. Go outside. Your sponge will be fine."* The team takes the week off.

**Epilogue:** Tell honestly what it did to Q4: revenue was down, the email got forwarded a lot, and a few hundred people subscribed out of respect. Margo got a full night's sleep for the first time since August. The Feed debated whether it was a growth hack.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_SIT_IT_OUT
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A crisp late-autumn morning on a quiet hiking trail: a small group of four
in winter coats walking together through golden leaves, phones nowhere;
far behind them in a distant city, a glowing frenzy of sale lights.
Peaceful, wry.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## WE'LL FIGURE IT OUT LIVE

**ID:** `ENDING_NO_PLAN` · **fate:** either

**The moment:** Black Friday arrives, and the plan doesn't. At midnight there are three offers live at once, two of them contradicting each other, a banner that says *"UP TO"*, and Kyle improvising in the ad account. Margo is not saying anything, which is worse than saying something.

**Epilogue:** It landed where it landed: say the result honestly from state, good or bad. The team's January retro was titled *"Process."* The player bought a planner. It's still in its shrink-wrap.

```
[IMAGE_TRIGGER]
ID: IMG_ENDING_NO_PLAN
TYPE: ENDING
STATUS: REQUIRED

SCENE:
A chaotic loft office at midnight: sticky notes everywhere, three
different sale banners on three monitors in clashing colors, a young
media buyer typing frantically, a finance lead staring silently at the
ceiling, the business owner in a hat holding two phones. Frantic,
slapstick.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

## OUT OF CASH

**ID:** `ENDING_OUT_OF_CASH` · **fate:** dies · available in every act

**The moment:** The bank tab, and a number with a minus sign in front of it. The weekend, or the month, or the tools, or the discounts ate the cash. Margo closes the laptop gently. There's no runway left to be clever with. Keep it dry and kind: the team did their best, the market did its worst.

**Epilogue:** Tell who bought the inventory (a liquidator, at four cents a sponge), where the team landed, and what the Feed said (one post, two likes). The last line: *"The sponges still don't smell. Somewhere, a parent is still sending them."*

```
[IMAGE_TRIGGER]
ID: IMG_DEATH
TYPE: DEATH
STATUS: REQUIRED on OUT OF CASH

SCENE:
A comic arcade game-over tableau: an empty loft office with four
pushed-in chairs, one monitor showing a single red bar, a lone sunny yellow
sponge on the desk, a box labeled with a shape like a dollar sign tipped
over and empty, a single tumbleweed made of shipping tape. Wry, no people.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

[/IMAGE_TRIGGER]
```

===== FILE: game/achievements.md =====

# BLACK FRIDAY: Achievements

Evaluate at game over, before the completion batch. Never announce during play.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NO_NEW_TOOLS` | NO NEW TOOLS | Reach Black Friday without buying or trialing a single new tool (`tools bought` empty; the cold open's offer counts). | Visible |
| `ACH_LEAN_STACK` | LEAN STACK | Finish with STACK at 0. | Visible |
| `ACH_WHOLE_TEAM` | THE WHOLE TEAM | Every recruited teammate is still at Wrung at the end (not poached, not quit). | Visible |
| `ACH_NO_SITEWIDE` | NO SITEWIDE | Never run a sitewide discount (`sitewide_discount` false). | Visible |
| `ACH_NEVER_POSTED` | NEVER POSTED THE SCREENSHOT | Never post a revenue screenshot (`posted_screenshot` false). | Visible |
| `ACH_NO_PODCAST` | NEVER STARTED A PODCAST | Reach the end without starting a podcast, co-hosting a recurring show, or buying a microphone "just to test it" (`started_podcast` false). A single guest appearance (the *Margin Call* taping) doesn't count. | Visible |
| `ACH_FLEW_BLIND` | FLEW BLIND | During the Blackout, the player chose to stop watching the dashboards (closed them, turned off the automation, steered by the plan and the real signals) and the weekend still ended with positive contribution margin (`flew_blind`). | Hidden |
| `ACH_RECEIPTS` | RECEIPTS | As the Founder, reach rank III. | Hidden |
| `ACH_BREAKFAST_TACOS` | BREAKFAST TACOS | Skip the Method panel for tacos (`tacos`). | Hidden |
| `ACH_PLAN_BY_HALLOWEEN` | PLAN BY HALLOWEEN | Lock the Black Friday plan with 25 or more days left. | Hidden |
| `ACH_DUE_DILIGENCE` | DUE DILIGENCE | Uncover the holdout result, the course loop, and why they buy. | Hidden |
| `ACH_DIDNT_ASK` | DIDN'T ASK | Keep paying for Halcyon all season and never once ask anyone what it does. | Hidden |
| `ACH_OR_THE_WEBSITE` | OR THE WEBSITE | End any argument in the game with the words "or the website". | Hidden |
| `ACH_FULL_HEAD` | FULL HEAD OF HAIR | Finish with HAIR still Full. | Hidden |
| `ACH_MAIN_CHARACTER` | MAIN CHARACTER | Roll a natural 20 on a POST. | Hidden |
| `ACH_LAUGHED` | SOMEBODY LAUGHED | Laugh, sincerely, at a Ray-zinger. | Hidden |
