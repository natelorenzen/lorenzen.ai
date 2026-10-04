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
