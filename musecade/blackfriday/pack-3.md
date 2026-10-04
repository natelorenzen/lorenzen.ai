# BLACK FRIDAY · PACK-3 · BUILD 1.0-59b4565

Bundle for: Act III begins (`REACH_BACK_ROOM`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-3.md =====

# ACT III: THE BACK ROOM

*A steakhouse private room where the gods tell the truth, a woman who held the P&L, a podcast taping with a live audience, and where the Method came from.* Target: 11 to 15 minutes, 8 to 11 decisions. Day 35 night to Day 34.

**Route:** the Back Room dinner → win Simone over → the *Margin Call* live taping in the morning → **home to the War Room**, with a plan to build.

Start with the market weather (`rules.md` §5).

---

## 3.1 THE BACK ROOM

A steakhouse's private room, dark wood, no windows. Twelve brand owners around one table: sixes, sevens, eights and nines (figures, which is how they introduce themselves). **Gus Ferraro** (`characters/npcs.md`) has already ordered for everyone. Phones face-down. **No vendors, no gurus, no badges.** Here, people say the real numbers.

**The goal, said plainly by Gus when the player sits down:** *"Rules of the room. Nobody's selling. Nobody's posting. Tell us what's actually working, and we'll tell you."*

- **A seat at the table** (`SOCIAL_BACK_ROOM`): earned by saying something true and specific about your own business (a real number, a real mistake, Halcyon), and by listening. Bragging gets a polite silence. A screenshot gets you seated next to the kitchen door.
- **What the gods say, when they're off the record:** the platform is more expensive than they post. Half of them are running the same three ads. The best weekend most of them ever had was an email. One of them has quietly turned off a third of their apps. Rex, if he's here, says the number, then says the real number, which is smaller and better. Hal Brody, already acquired, says the quiet part: *"Everyone in this room who sold their company sold it because the margin was good, not because the revenue was big."*
- **The aggregator:** a man at the end of the table, who isn't technically a brand owner, leaves a term sheet by the player's plate on his way out. Signing is `ACQUIRED`.

## 3.2 THE WOMAN WHO HELD THE P&L

At the far end of the table, in a black blazer, with a printed P&L folded in her jacket: **Simone Arceneaux**, Quarry Capital. She doesn't talk much. When she does, the table stops. She's the one who offered Margo a job.

- **Winning her** (`SOCIAL_SIMONE`): asking her a real question (*"What would you cut?"*), showing her the four numbers and admitting you don't know which is true, or not pretending about Halcyon. Pitching her, bragging, or asking for investment closes her up.
- **Her sheet** (`DISCOVER_SIMONE_SHEET`): if she's won, she unfolds it. One page. Contribution margin per order, after product, shipping, payment fees, discounts and ad cost, and a single line at the bottom: *"If this number is negative, nothing else on this page matters."* She slides it over. *"Run Black Friday on this, and nothing else."* (It's the key to Puzzle 3.)
- **Margo** (`DISCOVER_MARGO_OFFER`): Simone mentions, without guilt, that she's offered Margo a CFO role. *"She's the best I've seen. She'll stay if you deserve her."* (Or Margo tells the player herself, with trust 1 or more.)

## 3.3 THE LIVE TAPING (set piece)

The next morning: a live episode of the *Margin Call* podcast in a hotel ballroom, 300 people, two mics. Benji Kaplan invites the player up (because of the panel, because of Rex, or because someone dropped out). Co-guest: **Professor Vince Calloway**, who's had a night to prepare.

Run **`ENC_PODCAST`** (`game/encounters.md`). Live, in front of everyone who sells something, Benji asks the questions nobody wants to answer on a mic: *"What's your MER? What's your contribution margin? What are your first three hires? What's the one tool you'd cut?"* Vince tries to make the player the case study for 5:5:1. The audience is holding up phones.

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
A hotel ballroom podcast stage under hot spotlights: two big microphones
on a desk, a host in headphones leaning in, a guru in a headset mic
gesturing at a giant screen of a rising chart; between them, a business
owner in a conference lanyard sitting very still; an audience of
hundreds holding up glowing phones. A showdown, tense and absurd.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

- **Where the Method came from** (`DISCOVER_METHOD_ORIGIN`): Benji, on air or off, laughs. *"You know he named 5:5:1 on this show? Episode 212. I needed a title. He said 'five, five, one' because he was looking at the clock. It was 5:51."* Or Hank Dorsey, in the front row, says it out loud. Or Vince, cornered, admits it. If this comes out live, it's very good for the player (`SOCIAL_VINCE`, if they haven't won it yet) and very bad for Vince's video.

**ON THE LINE (a post can save it):** Margo. If her offer from Simone is known, a post that DOES NUMBERS (a clip from the taping, credited to Margo's math) makes her laugh out loud in a meeting; VIRAL, and Simone herself replies *"Told you she's the best"*, and Margo's trust goes up by 2. What goes viral is a 9-second clip of the player's face when the Professor says "5:5:1".

**Podcast offer 2** (`rules.md` §12): Benji, after the taping: *"You're good on a mic. You should have your own show."* Hal, passing behind him: *"Don't."*

## 3.4 THE FLIGHT HOME

Day 34. The flight home. Kyle has a notebook full of tactics, and the player has a choice to make about each one. Margo's text, when they land: *"War Room. Tomorrow. Bring the plan, or bring the truth."*

**Walking into Wrung HQ ends Act III.** Record `REACH_WAR_ROOM` (it's sent with everything else at the end) and fetch the Act IV pack.

---

## Exceptions

- **They sign the aggregator's term sheet:** `ACQUIRED` (fetch `pack-end.md`).
- **A big-box retail buyer at the dinner** (there's always one, quietly) offers an endcap in 400 stores for the holidays: accepting it and skipping DTC Black Friday is `THE ENDCAP`.
- **MARGIN hits 3:** `OUT OF CASH`.
