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
