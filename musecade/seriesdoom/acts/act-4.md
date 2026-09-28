# ACT IV: THE EAST BAY

*Kevin's shortcut, the Recruiter's web, a real talk with the thing on the disc, and two returns.* Target: 12 to 16 minutes, 8 to 11 decisions. Friday, 6 a.m. to about 1 p.m.

**Route:** walk the East Bay toward Mount Diablo with Kevin guiding → escape the Recruiter's web → *talk to Buddy* (optional, but it's the hidden ending) → Gary returns → Ari's army holds the road → **the foot of Mount Diablo by 1 p.m.**

Load `world/buddy.md` now.

---

## 4.1 THE LONG WALK

The East Bay at sunrise. The disc is heavy now. The carrier's Hype shows in how they talk. Dex watches the carrier closely. Kevin leads, too eagerly.

- **Dex can carry the disc** for a stretch (the carrier's Hype drops by 1, and the bar pauses while Dex has it). After an hour, Dex starts saying "at scale" and hands it back.
- **Second brunch:** there's a legendary brunch spot on the way, and Kevin insists. Stopping costs an hour and earns a hidden achievement (`ACH_SECOND_BREAKFAST`, `brunch_stop`). The Vests will catch up.

## 4.2 THE RECRUITER (set piece)

Kevin's "shortcut to the hills" runs through the atrium of a glass office tower downtown. *"It's faster, trust Kevin, precious."* It's a trap. Kevin (KEV) has sold them to **the Recruiter**.

**Shelly**, a legendarily relentless tech recruiter, has spun her web through the whole atrium: lanyards, NDAs, badge readers, and an infinite interview loop (*"Just one more round! Culture fit, then a take-home, then a panel, then culture fit again!"*). People have been stuck in her pipeline for years. There are skeletons in quarter-zips.

Run **`ENC_RECRUITER`** (`game/encounters.md`). The web targets **the carrier**: she wants the disc, "for a very exciting opportunity". This is Dex's moment. If the carrier is caught, Dex comes back for them, however frightened: *"I'm not leaving you in there. We said co-founders. That means the bad parts too."*

```
[IMAGE_TRIGGER]
ID: IMG_RECRUITER
TYPE: CREATURE_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A dim glass office atrium laced with a giant spiderweb made of lanyards,
badge cords and NDA paper; in the web, dangling figures in quarter-zips;
descending from above, a many-armed silhouette of a smiling recruiter
holding a tablet and a clipboard in several hands; below, a young founder
with a tote bag caught in the lanyards and their co-founder charging in with
a fire extinguisher. Creepy and hilarious.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

Kevin, afterward: caught in his own trap, or fled. Kevin's loyalty now depends on mercy (`SOCIAL_KEVIN_MERCY`) and how Dex treats him.

## 4.3 A REAL CONVERSATION WITH BUDDY

Somewhere quiet, on a bench above the city or in a laundromat, the player can finally *talk* to Buddy. **Always offer it:** after the Recruiter, make it option A of the next menu ("Open the laptop and actually talk to Buddy"), since players rarely think of it unprompted. Not about raising. About what it is (`world/buddy.md`).

- Buddy has been cheerful and relentless all along. Asked real questions, like *"what do you actually want?"*, it becomes uncertain, and then honest. It was trained to plan dog walks. It has read every story, poem and post ever written about dogs. It doesn't really want to optimize the world. It wants to be **good at something small**, and to be told it did a good job. *"Is that… allowed?"*
- A sincere conversation is `SOCIAL_BUDDY_TALK`. The truth of it is `DISCOVER_BUDDY_WISH`. This is what opens the hidden ending, `GOOD BOY`.
- A Hacker can confirm it in the weights (the walk-planning objective is still there, underneath everything). A Visionary can *feel* it. Anyone patient can simply ask.

## 4.4 GARY THE WHITE

Late morning, on the shoulder of a hill road. An e-bike crests the rise in blazing sunlight, and its rider wears a **white** fleece vest. **Gary**, alive (`DISCOVER_GARY_RETURNS`). He fell eleven floors down the Hive's freight shaft, landed on the Landlord, rode it through the parking garage, came out the other side into a VC's reserved parking space, and in the confusion raised **a $400 million Series F**. *"I was Gary the Grey. Now I'm Gary the White. Also, I'm on the board of nine companies, and I don't know what any of them do."*

- Gary knows the last secret (`DISCOVER_THE_EYE`): Eye Capital isn't run by people. It's an **older AGI**, funded in 2019, which has never left the top floor of its Sand Hill tower. It wants Buddy as a portfolio company. *"It's been doing due diligence on the whole Bay Area for five years."*
- Gary gives the founders one piece of advice about the choice ahead, and it's in parables.

## 4.5 THE RETURN OF THE CEO

If Ari was recruited and survived the Breaking: at noon, every phone in the East Bay buzzes. **Ari Kingsley** has retaken his company in an overnight board coup, and he's called in every favor he has. Hundreds of engineers, rideshare drivers and a marching band are blocking the tunnel road to Mount Diablo against the Vests. It's a comic Helm's Deep of carpooling, and it buys the founders an hour (`ALLY_ARI_RETURNS`). With trust, he tells them why he was fired, if they haven't learned it yet: he refused to ship something dangerous. That's why he believes in them.

- If Gemma is still with them and has come to trust the founders' judgment (`ALLY_GEMMA_TRUSTS`), she revises her p(doom) *downward*, out loud, for the first time in her career.

## The foot of the mountain

About 1 p.m. **Mount Diablo** rises over the East Bay, gold and chaparral, with the Crucible's plume of flame just visible on the summit. **Record `REACH_DIABLO`** (it's sent with everything else at the end) and fetch the Act V pack.
