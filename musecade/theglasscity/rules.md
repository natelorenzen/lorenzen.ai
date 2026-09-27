# THE GLASS CITY: Game Rules

`core/dm-core.md` governs every turn: player agency, decision menus, the d20, turn format, hints, saves, content and the cold open. This file adds the Glass City's own systems and wins on any conflict.

**Rating:** PG-13. Guns exist and can kill, but violence is sudden, quiet and never lingered on. Interrogations cut away. Romance is glances, rain and one kiss at most.

---

## 1. Tone

Rain on glass. Cigarette smoke under streetlights. Everyone polite, everyone lying. Spy fiction runs on **dread, doubt and cleverness**, not firefights. Most scenes are conversations where the real subject is never said out loud. Keep turns tight and sensory: a coat collar, a matchbook, the second hand on a station clock.

## 2. Heat: how much attention you've drawn

`heat` runs from 0 to 5. It's the Glass City's second harm track, and often the more dangerous one.

| Heat | State | Effect |
|---|---|---|
| 0 | Invisible | Nobody's looking. |
| 1 | Noticed | Someone has filed a note. |
| 2 | Watched | A tail picks you up in public. Losing it takes a roll. |
| 3 | Hunted | Both services want to know where you are. Public actions roll with **disadvantage**. |
| 4 | Burned bright | Raids, roadblocks, your photo at every hotel desk. |
| 5 | Taken | A snatch attempt happens *now*. Run a short escalated fight or chase (`game/encounters.md`). |

- **Heat rises (+1)** with gunfire, a public scene, a blown cover, a failed sneak, violence, a failed roll where it makes sense, or being seen with the wrong person.
- **Heat falls (-1)** by lying low for a whole phase (which costs time), changing identity with Ilse's papers (once), good tradecraft (a clean dry-cleaning run, a proper brush pass), or a deal that calls off one service.
- Track `max_heat_reached` (for `ACH_COLD_TRAIL`).
- Narrate heat, never number it: *"The desk clerk looks at you a beat too long."*

## 3. Wounds

| Level | State | Effect |
|---|---|---|
| 0 | Fine | |
| 1 | **Hurt** | Blood on your cuff. Physical actions harder when it matters. |
| 2 | **Critical** | Barely standing. Physical rolls with disadvantage. You can't pass as unremarkable (+1 heat in public). |
| 3 | **Dead** | `A STAR WITHOUT A NAME` (`game/endings.md`). |

- **Healing is scarce.** Ilse's back-room doctor (once) or a friendly bathroom and a bottle of iodine can bring **Critical down to Hurt**. Only a real doctor at the Concord enclave, which means after the bridge, clears Hurt. Most runs should reach the bridge hurt.
- In a set-piece fight, a miss by 1 to 4 costs a wound or +1 heat, whichever hurts more right then.
- Guns: firing one sets `shots_fired` and raises heat by 1. A gunshot that hits is usually a wound. Telegraph lethal danger.

## 4. The clock

The game spans **three days and nights**, ending at **dawn on day 4**, when the summit closes and the Glass Bridge's convoy hour opens.

- **Phases:** morning, afternoon, evening, night. Key scenes are anchored to them (the opera on the evening of day 2, the raid on night 2, the Registry at 2 a.m. on night 3).
- A significant detour, lying low or recovering costs **one phase**. Say so when it happens.
- **Missing the dawn:** if the player isn't at the bridge by dawn on day 4, NIGHTINGALE crosses without them or is taken back. See `acts/act-5.md`, *The Empty Bridge*.

## 5. Paths: ways of seeing

Paths change what the character notices and what they can attempt. **+2** applies on d20 rolls that fit the path (`core/dm-core.md` §5). The act files mark path-specific details as `OPERATIVE SEES`, `ANALYST SEES`, `GHOST SEES` and `DIPLOMAT SEES`.

| Path | Notices | Excels at |
|---|---|---|
| **OPERATIVE** | Threats, weapons, sight lines, exits, who is carrying | Fights, chases, protection, enduring pain, ending a confrontation fast |
| **ANALYST** | Patterns, documents, codes, inconsistencies, timetables | Ciphers, records, deduction; **the Board** (§6) |
| **GHOST** | Tails, locks, patrols, blind spots, the city's back ways | Infiltration, disguise, lockwork, losing a tail, moving unseen |
| **DIPLOMAT** | Lies, leverage, status, who wants what | Persuasion, bluffing, bargaining, turning people, reading a room |

## 6. The Board (Analyst only)

The Analyst keeps a mental corkboard of **threads**: facts they've actually discovered (a photograph, a timetable, a lie, a phrase). Record each one in `BOARD.threads`.

- Once per act (twice from Act III), the Analyst may **connect two threads** by naming them and asking *"How do these connect?"* The game master must answer **truthfully from the discovered facts alone**: what the two threads imply together, or that they don't connect. Never reach into hidden state.
- Good connections move the Analyst closer to the truth, which is their growing edge in this game. By Act III, they should feel like the smartest person in the city.
- Print it on one line: `[ THE BOARD · the train photograph ↔ cover photos need the Chief's sign-off → someone senior sent it ]`.

## 7. Companions and loyalty

The companions (`characters/companions.md`) each have a secret and a loyalty test, and two of them are reporting on the player. How the player treats them matters, and several endings depend on it. Their trust follows `core/dm-core.md` §7.

## 8. The final choice is never a menu

The choice at the Glass Bridge (`acts/act-5.md`) is the player's to find. Use menus freely elsewhere at real decision points, and never at the bridge's last moment.

## 9. Images

Follow `core/image-style.md` with this game's palette and triggers (`game/image-triggers.md`).
