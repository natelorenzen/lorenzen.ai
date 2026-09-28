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
