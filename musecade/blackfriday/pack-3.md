# BLACK FRIDAY · PACK-3 · BUILD 1.0-d9cca6a

Bundle for: Act III begins (`REACH_BACK_ROOM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: THE BACK ROOM

*Where the biggest brand owners say the real number, a woman who held the P&L, a podcast taping with a live audience, and a course that cites itself.* Target: 11 to 15 minutes, 8 to 11 decisions. Day 35 night to Day 34.

**Route:** the Back Room dinner → win Simone over → the *Margin Call* live taping in the morning → **home to the War Room**, with a plan to build.

Start with the market weather (`rules.md` §5) and the Enhancement of the Act (`rules.md` §15): the Algorithm has auto-translated every Wrung caption into Portuguese. Sales in Ohio are up 9 percent. Nobody can explain it. Kyle wants to "lean in".

---

## 3.1 THE BACK ROOM

A steakhouse private room, dark wood, no windows. Twelve brand owners around one table. They introduce themselves by their figures (*"Gus. Eight."* *"Priya. Seven, almost eight."*). **Gus Ferraro** (`characters/npcs.md`) has already ordered for everyone. Phones face-down. **No vendors. No gurus. No badges.** In this room, and only in this room, people say the real number.

**The goal, said plainly by Gus when the player sits down:** *"Rules of the room. Nobody's selling. Nobody's posting. Tell us what's actually working, and we'll tell you."*

- **The Real Number Round:** around the table, each owner says their public number, then their real number. The real number is always smaller and always better. Rex, if he's here: *"EIGHT FIGURES. EVERY MONTH."* Pause. *"Six of it's subscriptions. The hero SKU isn't the wallet anymore. It's the keychain. Don't tell anyone."*
- **A seat at the table** (`SOCIAL_BACK_ROOM`): earned by saying something true and specific about your own business (a real number, a real mistake, the dubstep, the line item nobody can explain). Bragging gets a polite silence. A screenshot gets you seated next to the kitchen door.
- **What they admit off the record:** the platform is more expensive than they post. Half of them are running the same three ads. The best weekend most of them ever had was an email. One of them has quietly turned off a third of his apps, and nothing happened. Hal Brody, already acquired: *"Everyone in this room who sold their company sold it because the margin was good, not because the revenue was big."*
- **The aggregator:** a man at the end of the table, who isn't technically a brand owner, leaves a term sheet by the player's plate on his way out. Signing is `ACQUIRED`.

## 3.2 THE WOMAN WHO HELD THE P&L

At the far end of the table, in a black blazer, with a printed P&L folded in her jacket: **Simone Arceneaux**, Quarry Capital. She doesn't talk much. When she does, the table stops. SaaS sellers think she's a relic, because she has actually held a P&L. She's the one who offered Margo a job.

- **Winning her** (`SOCIAL_SIMONE`): ask her a real question (*"What would you cut?"*), show her the four numbers and admit you don't know which is true, or tell her about the line item nobody can explain (she laughs, once, which nobody at the table has ever heard). Pitching her, bragging, or asking for investment closes her up.
- **Her sheet** (`DISCOVER_SIMONE_SHEET`): one page. Contribution margin per order, after product, shipping, fees, discounts and ad cost, and one line at the bottom: *"If this number is negative, nothing else on this page matters."* She slides it over. *"Run Black Friday on this, and nothing else."* (It's the key to Puzzle 3.)
- **Margo** (`DISCOVER_MARGO_OFFER`): Simone mentions, without guilt, that she's offered Margo a CFO role. *"She's the best I've seen. She'll stay if you deserve her."*

## 3.3 THE LIVE TAPING (set piece)

The next morning: a live episode of the *Margin Call* podcast in a hotel ballroom, 300 people who all sell something, two mics. Benji invites the player up. Co-guest: **Professor Vince Calloway**, who has had a night to prepare and a new method (*Hexagon 2*).

Run **`ENC_PODCAST`** (`game/encounters.md`). Benji asks the questions nobody wants to answer on a mic: *"What's your MER? What's your contribution margin? What are your first three hires? What's the one tool you'd cut?"* The Professor tries to claim the player as a 5:5:1 case study, live, in front of their own numbers.

```
[IMAGE_TRIGGER]
ID: IMG_LIVE_TAPING
TYPE: BATTLE
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A hotel ballroom podcast stage under hot spotlights, like a gladiator
arena: two giant microphones on a desk, a host in headphones leaning in,
a guru in a headset mic gesturing grandly at a huge screen showing a
glowing hexagon; between them, a business owner in a conference lanyard
sitting very still; an audience of hundreds holding up glowing phones.
A showdown, tense and absurd.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **The course loop** (`DISCOVER_COURSE_LOOP`): live, someone asks where 5:5:1 actually comes from. The Professor cites a framework from Benji's podcast. Benji cites Theo's Sunday newsletter. **Theo**, in the front row, says he got it from the Professor's course. There's a long silence while 300 people work out that it's a circle. Nobody in the circle has run an ad account since 2019. (The player can trace it themselves with a few questions, or a Scholar-like move; or Hank Dorsey, in the front row, just says it.)
- **Where the method came from** (`DISCOVER_METHOD_ORIGIN`): Benji, laughing, on air or off: *"You know he named 5:5:1 on this show? Episode 212. I needed a title. He said 'five, five, one' because he was looking at the clock. It was 5:51."* If both come out live, it's very good for the player (`SOCIAL_VINCE`, if they haven't won it yet), and very bad for the Professor's video, which is now coming in four weeks.

**Podcast offer 2** (`rules.md` §12): after the taping, Benji puts a hand on the player's shoulder: *"You're good on a mic. You should have your own show."* Hal Brody, passing behind him: *"Don't."*

**ON THE LINE (a post can save it):** Margo. If her offer from Simone is known, a post that DOES NUMBERS (a clip from the taping, credited to Margo's math) makes her laugh out loud in a meeting; VIRAL, and Simone herself replies *"Told you she's the best,"* and Margo's trust goes up by 2. What goes viral is a 9-second clip of the player's face when the Professor says "Hexagon 2".

## 3.4 THE FLIGHT HOME

Day 34. Kyle has a notebook with forty new tactics in it, and one of them is just the word *"Portuguese?"* Margo's text when they land: *"War Room. Tomorrow. Bring the plan, or bring the truth."*

**Walking into Wrung HQ ends Act III.** Record `REACH_WAR_ROOM` (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **They sign the aggregator's term sheet:** `ACQUIRED` (fetch `pack-end.md`).
- **A big-box retail buyer at the dinner** (there's always one, quietly) offers an endcap in 400 stores for the holidays: accepting it and skipping online Black Friday is `THE ENDCAP`.
- **MARGIN hits 3:** `OUT OF CASH`.
