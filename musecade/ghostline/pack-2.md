# GHOSTLINE · PACK-2 · BUILD 1.0-1f0c5f8

Bundle for: Act II begins (`REACH_STACKS`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-2.md =====

# ACT II: THE STACKS

*A church in a flooded station, a daughter who wants her mother back, a raid, and a dive into a dead woman's memories.* Target: 13 to 17 minutes, 9 to 12 decisions. Night 1, about 3 a.m., to Day 2, early afternoon.

**Route:** sanctuary at Brother Null's church → Juno finds them → survive the raid → the Cartographers' blimp → the memory palace → **a plan to break into the Cradle**.

Load `world/lumen.md`, `world/mara.md` and `game/puzzles.md` now (they're in this pack).

---

## 2.1 THE CHURCH OF THE UNBACKED

**Hollow Line, platform 4**: a flooded metro station lit by thousands of candles on the water and the tracks. Three hundred people sleep on the platforms and in the dead trains. Nobody here has a slot. **Brother Null** (*an ex-Orison guard who preaches "live once"*) meets them at the stairs, huge and gentle, and gives them tea.

- Null offers sanctuary without asking what they've done. *"Everyone here is running from being kept. You're welcome."* He'll walk with them if they ask, or if they're kind to his people: `RECRUIT_NULL`.
- **Mara goes very quiet around him.** Then, in the player's head, tight and frightened: *"I know that voice."* (A seed for `DISCOVER_NULL_PAST`. She isn't sure yet. She'll be sure by the raid.)
- **Rest:** a real sleep is possible here (six hours, SYNC −1, once in the game). So is an anchor: telling someone at the candlelit tea stall a memory of their own.

## 2.2 JUNO

Morning, Day 2. A kid with a white buzz cut and jack cables braided into her hair slides onto the bench beside them. **Juno Quell** (*Mara's sixteen-year-old daughter, a hacker*). She tracked the slot's signal from the Cartographers' blimp.

- She doesn't talk to the player at first. She talks to her mother, through the player's face: *"Mom? Are you in there?"* Play Mara's answer through the player's mouth only if the player lets her speak (it doesn't cost SYNC; it costs something stranger). Let the scene be raw.
- Juno is brilliant, furious and sixteen. She'll bring them to the Cartographers, and she'll help: `RECRUIT_JUNO`.
- **Her secret** (`DISCOVER_JUNO_PLAN`) is on her deck: a program called *Lullaby* that would finish the overwrite in an hour. A NETRUNNER's BACKDOOR finds it; so does trust 2, or a MEDTECH reading her when she says she just wants to help.

## 2.3 THE RAID (set piece)

Run **`ENC_CHURCH`** (`game/encounters.md`). Late morning. The Quiet Men come down the main stairs and, at the same moment, through the maintenance tunnel that only locals know. Candles going out one by one in the dark water. Three hundred people who've never hurt anyone.

- **How did they know about the tunnel?** Kes is the only outsider who does: she's been here with the player before. (`DISCOVER_KES_DEAL` if the player puts it together, or confronts her. Kes breaks, and tells them about her cousin in debt prison. What the player does now matters for the whole game.)
- **Null in the raid:** he knows the Quiet Men's patterns exactly (they sweep left, they never look up, a code-chime makes them pause). In the chaos, one of them says his old service name through its chime. Mara, in the player's head, flat and certain: *"That's the man who shot me."* (`DISCOVER_NULL_PAST`.) Whether and how the player confronts him is theirs. `SOCIAL_NULL_CONFESSION` is the moment he tells the truth, to the player or to Mara, without being forced to.

## 2.4 THE CARTOGRAPHERS

Juno takes them up: a cable car into the underside of the Canopy, to a derelict ad-blimp that's been hollowed into a server farm. A dozen hackers, and **Atlas** (*the Cartographers' blind, sixty-year-old leader*).

- The Cartographers want the edit logs free. They don't trust anyone from Orison, including a dead one. **Earning their trust** (`SOCIAL_CARTOGRAPHERS`): letting them scan the slot, telling them the truth about the bounty, or going into the palace dive with them watching.
- **The Loom** (`DISCOVER_LOOM_PRICE`): Atlas explains, gently, how the Loom works: two minds, one body, and the other mind goes into a drive, into the open network, or nowhere. Mara has known this all along, and hasn't said. How the player takes it matters.
- **The memory palace:** Mara's partition of the ghost (the registry key for the Cradle, and her message to the Cartographers) is locked behind three of her own memories. Run `game/puzzles.md`, *Puzzle 1: The Memory Palace*: a guided dive, with Atlas and Juno in the player's ear and Mara in their head.

```
[IMAGE_TRIGGER]
ID: IMG_MEMORY_PALACE
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

SCENE:
A surreal digital dreamscape: three floating memory rooms suspended in a
void of glowing cyan code, a rainy tenement kitchen, a white laboratory, a
birthday party in a glass penthouse, each glitching at the edges; a
thief in a rain-black jacket walking a bridge of light between them, and
a translucent silver-haired woman in a lab coat walking beside them like a
reflection. Dreamlike, eerie, neon.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

```
[VIDEO_TRIGGER]
ID: VID_MEMORY_PALACE
PAIRED WITH: IMG_MEMORY_PALACE
MOTION: the memory rooms drift and rotate slowly in the void; glitch lines ripple across the kitchen; the translucent woman turns her head toward the thief
CAMERA: slow orbit around the bridge of light
[/VIDEO_TRIGGER]
```

**Opening the partition** gives them the **registry key**: the one thing that can open the patch registry in the Cradle's vault. Mara's message to the Cartographers says: *"The proof isn't in my logs. It's in their registry. Every name. Go to the Cradle."*

**Deciding to break into the Cradle ends Act II.** Record `REACH_VAULT` (it's sent with everything else at the end) and fetch the Act III pack.

---

## Exceptions

- **They hand the ghost to the Cartographers to extract:** Atlas refuses; it would kill the player. *"We're not Orison."*
- **Juno runs *Lullaby* on them in their sleep** (if trust with Juno is -1 or lower and they slept at the church): SYNC +2. They wake with Mara's handwriting on their arm. It can be stopped, once, by Null or Kes.
- **They go to Lotus to sell now:** `SOLD`, from Act II.

===== FILE: world/lumen.md =====

# GHOSTLINE: Lumen

A vertical megacity of forty million on a drowned coast, 2089. Fictional. **Every company, product and person is invented.**

## The layers
- **The Crown:** above the sky. Towers that rise through the ad-blimps into real sunlight: gardens, glass, clean air, silence. Orison's **Spire** is the tallest, with the **Loom** at its top. Nobody from the Stacks goes up except as staff, or as a body.
- **The Canopy:** the sky that was sold. A mile-thick layer of moored ad-blimps, holo-screens and maintenance scaffolds, humming day and night, raining condensation and light down on the city. Maglev cables and service elevators run through it. The Cartographers hide inside a derelict blimp docked to its underside.
- **The Stacks:** everything underneath. Arcologies stacked on arcologies, neon, noodle steam, drone traffic, acid rain that's mostly just rain now, flooded lower levels. Where the player lives.

## Districts of the Stacks
- **Lucky Hand Noodle Bar** (Kowtow Row): where the game begins. A red-lit counter, a cook named **Auntie Bao** who's seen everything, a back door into an alley of cables.
- **Tallow's clinic:** behind a noodle shop two streets over, down a staircase lined with jars of spare eyes.
- **The night market** (the Drowned Mile): a flooded boulevard turned floating bazaar of lanterns, stalls and boats. Madame Lotus holds court on a barge at the center.
- **The Church of the Unbacked:** a flooded metro station, Hollow Line platform 4, lit by thousands of candles. Three hundred people sleep there. Two entrances: the main stairs, and a maintenance tunnel only locals know.
- **The Cradle:** Orison's **Restore Center** for the Stacks. A windowless white tower where the Basic-tier dead are regrown and restored. Morgue drones come and go all night.
- **The flood wall:** the old sea wall where the player and Ines used to sit. An anchor (`rules.md` §2).
- **The player's old apartment:** a capsule in Stack 9, level 41. An anchor.

## Getting around (time costs)
| From → to | How | Time |
|---|---|---|
| Anywhere in the Stacks | on foot, or the Hollow Line metro | 30 to 60 minutes |
| Anywhere in the Stacks | Kes's hover-cab *Lucky* | 15 minutes |
| The Stacks → the Canopy | a service elevator (watched), the Cartographers' cable car, or climbing the Spine | 1 to 3 hours |
| The Canopy → the Crown | through the blimps and out the top; only by scaffold, drone or stolen shuttle | 2 hours |

## Continuity
Everyone who can afford it has a slot behind the ear and backs up nightly. **Gold** restores are perfect. **Basic** restores are cheap, slow and, secretly, edited. People in the Stacks call restoring "coming back". The **Unbacked** refuse, and live once.

## The look
Neon in pink, cyan and acid green; red paper lanterns; rain on everything; holo-ads of a smiling woman saying *"Continuity. Because you're worth keeping."*; drones like fireflies; and, above it all, the grey underbellies of the blimps where the sky should be.

===== FILE: world/mara.md =====

# GHOSTLINE: Mara's Truth

For the storyteller only. Reveal it through evidence and people, never as a summary.

## Who she was
- Born in the Stacks in 2039. Her mother cooked in a noodle bar and told her one thing she never forgot: *"Remember the river"* (the river that used to run where the flood wall is now: remember where you came from).
- A scholarship to Orison at nineteen. Chief architect of Continuity by forty. She designed the restore process that made death a subscription.
- **In 2081 she built the patch system**, "to remove trauma from people restored after violent deaths". A young technician asked about consent. She said: *"Nobody will notice."* Kade's board saw what else it could do. By 2083, every Basic restore had patches for obedience, gratitude and forgetting.
- She knew for six years and did nothing. She got rich. She missed her daughter's childhood. Then, last year, Juno ran away to the Stacks, and Mara went looking, and saw what the Stacks looked like with three million edited people in it.
- **She edited her own memories, too**: the day she shipped Patch 1.0 (so it feels like a triumph), and Juno's twelfth birthday (so she remembers being there). She knows she did it. She doesn't remember what's underneath.

## How she died
- She copied the edit logs and the patch registry key, planning to give them to the Cartographers. Kade found out. Two nights ago Kade ordered a team of **Quiet Men** to her lab (`DISCOVER_MARA_MURDER`: she heard Kade's voice on their comms: *"Quietly, please. She was family."*). One of them was **Brother Null**, who fired.
- In her last ninety seconds, she jacked her whole mind and the logs into the thief who'd broken into her lab to steal a prototype (the player), because a slot with no Orison backup can't be wiped remotely.

## What she wants
- To live. She'll help the player reach the Loom, and she means it, mostly. At the Loom she'll try to keep the body if she can, unless the player has reached her (`SOCIAL_MARA_TRUTH`).
- To leak the logs. That part is real.
- To be forgiven by Juno. She'd trade almost anything for that.

## The Loom
- The Loom is Orison's master restore engine, built to make perfect copies. It can also **split** a mind that's been merged.
- **The price** (`DISCOVER_LOOM_PRICE`): two minds, one body. The Loom asks which memories belong to whom, then writes one mind back into the body. The other goes into a drive (to be restored later, in a new body, if anyone pays), into the open network (a free ghost in the wire), or nowhere (deleted).
- **The exception, which no one has ever tried:** if both minds agree on every memory's owner, and both consent, the Loom can weave them side by side: two minds sharing one body, each whole. That's `TWO MINDS`, the hidden ending, and it needs the Loom solved honestly and Mara's truth.

## The memory palace (for Puzzle 1)
Mara locked her partition of the ghost (the registry key and her message to the Cartographers) behind three memories, each with a moment she patched. The passphrase is the three true words underneath. See `game/puzzles.md`.

## What's on the logs
Every Basic restore since 2081, with a patch list: `GRATITUDE+2`, `ANGER(ORISON)-3`, `UNION_MEMORY:DELETE`, `GRIEF(FLOOD_2085):INSERT`. Including one thief (the player, restored after a scaffold fall two years ago: `SIBLING_DEATH:INSERT`) and one union organizer (Ines, restored after a "workplace accident": `SIBLING_DEATH:INSERT`, `LOYALTY(KADE)+4`).

===== FILE: game/puzzles.md =====

# GHOSTLINE: Puzzles

Three puzzles: a memory (the palace), a heist (the vault) and an identity (the Loom). Never give the answer. Answer questions truthfully, from what the runner could notice. Accept any solution that works. Dice never solve puzzles. **Mara can solve the first two instantly**, as a key: it works, costs SYNC +1, and forfeits the puzzle event. Hints follow `core/dm-core.md` §8, and every puzzle has a fallback (§14).

**The three tells of a patched memory** (Tallow mentions one in Act I if asked about restores; Atlas teaches all three before the palace dive): a patched moment **has no smell**; **people in the background repeat** (the same stranger crosses twice); and **the light doesn't move** (flames, shadows and screens are frozen). Everything real flickers.

---

## PUZZLE 1: THE MEMORY PALACE (Act II)

**The question:** what's the passphrase to Mara's locked partition?

**The mechanism:** a guided dive into three of Mara's memories. Mara patched one moment in each. The passphrase is **the three true words underneath the patches**, in the order the memories happened. The player finds each patched moment by its tell, then "pulls the seam" (they just have to say they're doing it) to see what's really there.

| Memory | What the player sees | The tell | The true moment underneath |
|---|---|---|---|
| **The kitchen, 2049.** Mara at nine, a tenement kitchen in the rain, her mother at the stove. Mother turns and says: *"Work hard and they'll let you up there someday."* | noodle steam, rain, the radio | when the mother speaks, **the smell of the broth vanishes** | her mother actually said: *"Remember the **river**."* |
| **The lab, 2081.** A white lab full of applause: the day Patch 1.0 shipped. Mara at the center, champagne. | cheering engineers, a glass wall, the city below | **the same bearded technician crosses behind her twice** | the applause was never there. One young technician asks, *"What about **consent**?"* and Mara says, *"Nobody will notice."* |
| **The birthday, 2085.** Juno's twelfth birthday in a Crown penthouse. Mara sings, and Juno blows out the candles, and hugs her. | balloons, a cake, the sun through the glass | **the candle flames don't move**, not even when Juno blows | Mara wasn't there. Juno blows the candles out **alone**, and a nanny claps. |

- **Solved:** name the three words in order, **RIVER · CONSENT · ALONE**: `PUZZLE_PALACE_SOLVED`, plus `_NO_HINT` if unaided. It opens the partition and the registry key.
- Each true moment hits Mara hard, especially the third, especially if Juno is watching. Play it.
- **Mara's key:** she can open it herself (SYNC +1, no puzzle events), but she doesn't want to look underneath, and says so.
- **Fallback** (after the third hint): Juno breaks the partition with brute force. It works, but it tears something: Mara loses the birthday memory completely, and SYNC +1. No puzzle events.

---

## PUZZLE 2: ONLY THE DEAD GET IN (Act III)

**The question:** how do you get into the Cradle's intake, and down to the vault?

**The mechanism** (observed, not told):

| Observation | What it means |
|---|---|
| **Morgue drones** drop into the roof intake bay every twenty minutes. Nobody checks the drones themselves. | a way in, if you're cargo |
| Each body bag's **tag** is scanned against a list on the intake screen: *EXPECTED ARRIVALS*. A bag that isn't on the list gets sent back. | you have to be an **expected death** |
| An intake nurse complains on her break (in the noodle stall across the street, or on the Cartographers' feed): *"Another warm one tonight. Flagged, sent back, paperwork."* The scanner reads **body temperature**, not heartbeat. | you have to be **cold** |
| The Cradle's **cold room** for incoming bodies is on the intake floor, and the service stairs go down to sublevel 3 from there. | once you're in, you're in |

- **Solution:** get registered as an expected death (Lotus can sell a death record; a Netrunner or Juno can forge one onto the list; a Fixer can call in a favor from a morgue clerk), **and** arrive cold (a chilled body bag from a fish market's ice room, Null's old cryo-coat, a Medtech's hypothermia drug that drops body temperature safely for twenty minutes), in a morgue drone (Kes can hijack one; so can a Netrunner) or through the intake another way. Accept any plan that satisfies both conditions.
- **Solved:** `PUZZLE_VAULT_SOLVED`, plus `_NO_HINT` if unaided.
- **Mara's key:** the staff entrance, with her codes. SYNC +1, no puzzle events, and the Quiet Men know exactly where she is the moment she uses them.
- **Half a solution** (cold but not expected, or expected but warm): they're flagged at intake, and it becomes a short fight or chase inside: it costs harm, or the alarm goes early.
- **Fallback** (after the third hint): Null remembers an old guard's trick: the laundry chute. It works, but it takes two hours and costs everyone a harm. No puzzle events.

---

## PUZZLE 3: THE LOOM (Act V)

**The question:** the Loom asks, *"Tell me which memories are whose."* It shows six memories, floating as panes of light. The player must sort each into **MINE**, **MARA'S**, or **NEITHER** (a patch, which belongs to no one, and will be burned out).

| Memory | Answer | How they can know |
|---|---|---|
| A little girl on a flood wall, the water rising, the girl gone. | **NEITHER** (a patch) | the registry: `SIBLING_DEATH:INSERT`; Ines is alive; and it has no smell |
| Learning to fly a hover-cab with Kes at nineteen, both screaming with laughter. | **MINE** | Kes remembers it too; it flickers |
| A tenement kitchen in the rain: *"Remember the river."* | **MARA'S** | the memory palace |
| Waking in a clinic two years ago, not remembering the fall, a nurse saying *"Welcome back."* | **MINE** | the registry says they died and were restored; this is the real waking. It's strange, but it's theirs |
| Feeling a warm rush of gratitude toward Orison when a Continuity ad plays. | **NEITHER** (a patch) | `GRATITUDE+1` in their registry entry; the light in it doesn't move |
| A white lab, a young technician asking about consent, and the words *"Nobody will notice."* | **MARA'S** | the memory palace |

- **Solved:** sort all six correctly: `PUZZLE_LOOM_SOLVED`, plus `_NO_HINT` if unaided. It makes a clean split possible, and (with `SOCIAL_MARA_TRUTH` and both minds' consent) the weave of `TWO MINDS`.
- **Getting the flood memory wrong** (keeping it as MINE) keeps a lie in their head forever; say so in the epilogue. **Giving MARA'S memories to themselves** or vice versa: the Loom obeys, and someone comes out of it a little wrong.
- **The Deep III shortcut:** a Netrunner at rank III can speak to the Loom directly and split without the sort (no puzzle events, and `TWO MINDS` is still possible if Mara's truth is earned).
- **Fallback** (after the third hint): Mara sorts them herself. She takes one ambiguous memory for her own pile (the hover-cab with Kes), and the player never gets it back. No puzzle events.
