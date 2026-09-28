# GHOSTLINE: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Gunfights, chases, chrome, rain and neon; injuries described without gore; a world where death is cheap for the rich and final for the poor. No torture on screen, no sexual content, no real companies or brands (all invented). The horror here is quiet: people who've been edited and don't know it.

---

## 1. Tone

Noir in the rain, told fast. Neon on wet streets, ramen steam, the hum of the blimps overhead, street slang used lightly (and invented, not borrowed). The player is a tired, capable courier who's never had anything to lose, and now has everything. **Use the pronouns the player gives at character creation; if none, use they/them.** **Mara's voice is the second character in every scene**: in *italics*, clever, dry, frightened, sometimes kind, sometimes cold, never fully honest. Keep turns tight and sensory. Let every scene have one image the player won't forget.

**Mara's voice:** she speaks in the player's head in italics (*"Left. The door with the fish. Trust me."*). She can be wrong. She has opinions. She is not the narrator, and she never chooses for the player.

## 2. Sync: how much of you is left

**SYNC is how far Mara has overwritten you.** It runs **0 to 5**, starts at **1**, and shows on the status line as a bar: `SYNC ■□□□□`.

**What raises it (+1):**
- **Each night that passes** (at the start of Act III, and again at the start of Act V).
- **Using one of Mara's keys.** Mara offers them often: her Orison access codes open any Orison door; her face and voice can be worn to fool an Orison system; her memory holds the spire's floor plans, Kade's schedule, the name of every guard captain. **They always work.** That's the trap. (Record each in `keys used`.)

**What lowers it (−1), called anchors:** saying a true memory of your own out loud to someone who listens; going somewhere from your own past (your old apartment, the noodle bar where you grew up, the flood wall); a companion calling you by your street name when it matters; a real sleep (only one is possible, and it costs six hours).

| Sync | Band | Effect |
|---|---|---|
| 0–1 | **You** | No effect. Mara is a voice. |
| 2–3 | **Bleeding through** | You know things you shouldn't: Mara's memories surface unasked (the DM may give one vivid flash per act). Companions notice you've started saying "we". |
| 4 | **Her** | Once per act, Mara takes the wheel for one action, without asking (the DM plays it, it's always something Mara wants, and it's never the final choice). |
| 5 | **Gone** | Full sync: `FULL SYNC` (`game/endings.md`), unless you're already at the Loom. |

Say which band they're in when it changes (`SYNC 3 · SHE'S BLEEDING THROUGH`). Track `max_sync` for `ACH_STILL_ME`.

## 3. Harm

| Level | State | Effect |
|---|---|---|
| 0 | Fine | |
| 1 | **Scratched** | Cuts, burns, a round that grazed you. Physical actions harder when it matters. |
| 2 | **Bleeding** | Physical rolls with disadvantage. You leave a trail. |
| 3 | **Flatlined** | `FLATLINE` (`game/endings.md`). Or, if it happens inside Orison's reach from Act III on, `RESTORED`. |

Healing: Tallow's clinic (once), a Medtech's move, or a stim from the night market (Bleeding to Scratched, once per act). In a set-piece fight, a miss by 1 to 4 costs one harm or +1 bounty, whichever hurts more right then. Lethal danger is always telegraphed.

## 4. The clock

**Forty-eight hours**, from 11 p.m. on night 1 to 11 p.m. on night 3, when the overwrite finishes regardless (SYNC goes to 5). Travel between districts costs time (`world/lumen.md`). Name the time at every scene change (*"Night 1 · 2:40 a.m."*).

## 5. Paths: what kind of runner

Each path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), sees different things (the act files mark `NETRUNNER SEES`, `CHROME SEES`, `FIXER SEES`, `MEDTECH SEES`), and has **one move per act** (`core/dm-core.md` §15):

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **NETRUNNER** | networks, cameras, drones, the code under everything | **BACKDOOR:** take over one system in the scene (a door, a drone, the cameras, a turret, an elevator) for the whole scene. Also grows **the Deep** (§6). |
| **CHROME** | threats, exits, who's armed, who's scared | **OVERCLOCK:** end one fight in a single burst of speed. You take no harm from it. |
| **FIXER** | who owes who, what everything costs, who's lying | **CALL IN A FAVOR:** someone in the Stacks owes you. One real favor: a ride, a safehouse, a weapon, a door, a name. |
| **MEDTECH** | bodies, implants, heartbeats, what a face is hiding | **PATCH:** fix one person's harm completely (yours included), *or* read one person's biometrics and know if they're lying. |

**The moves are yours, not Mara's.** They never raise SYNC. When a scene is exactly what a move is for, have Kes or Mara point at it once.

## 6. The Deep (Netrunner only)

The Netrunner can go deeper into Lumen's networks than anyone, and it grows as they survive the dives that matter (the Cartographers' test, the vault, the Canopy's grid).

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | Jack into any local network and see what's on it |
| **II** | survive two dives | Walk Orison's own grid unseen, and hear the thoughts Mara doesn't say aloud (a truth about Mara, once per act). |
| **III** | survive three dives, including the vault | Talk to the Loom directly, and split cleanly without solving the Loom's riddle. |

Mark rank changes with one line: `THE DEEP · RANK II`. Report `ACH_THE_DEEP` at rank III.

## 7. Companions and trust

Kes, Brother Null and Juno (`characters/companions.md`). Trust runs -3 to +3 (`core/dm-core.md` §7). Each has a secret, and one of them will sell the player out on night 1 unless the player is lucky or careful. Loyalty is earned in danger.

## 8. The final choice is never a menu

At the Loom, the player decides who lives in their head, what happens to the edit logs, and what happens to Lumen. Let them find their own answer.

## 9. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).

## Status line

`NIGHT <n> · <TIME> · SYNC ■□□□□ <BAND> · MOVE READY · NEXT: <goal>`, for example `NIGHT 1 · 11:52 PM · SYNC ■□□□□ YOU · MOVE READY · NEXT: Tallow's clinic`. Add `· SCRATCHED` or `· BLEEDING` when hurt, and `· 41H LEFT` for the clock.
