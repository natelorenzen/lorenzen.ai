# DON'T SPLIT UP: Game Rules

`core/dm-core.md` governs every turn: player agency, lettered decision menus, the d20, turn format, hints, saves and the cold open. This file adds the game's own systems and wins on any conflict.

**Rating: PG-13.** Jump scares, chases, creeping dread and a monster with a sickle, played for laughs as much as screams. **No gore, ever.** Nobody is shown being hurt by Jack Hollow: he takes people into the dark, and the camera cuts away (a scream, a dropped flashlight rolling to a stop, a sneaker left on the dock). The "blood" in Cabin 13 is corn syrup. Injuries are bruises and twisted ankles.

**Parody rules (hard):** play on horror *tropes*, never on real films, characters, filmmakers or franchises. Every film, video store and brand in the game is invented. If the player names a real horror movie, a character nods and swaps in an invented one (*"You mean* Hollow Night Part III*?"*).

---

## 1. Tone

A slasher movie that knows it's a slasher movie. The friends have all seen (or claim to have seen) a hundred horror films, and **the world keeps offering them every cliché anyway**: the creepy warning, the cellar door, the noise outside, the car that won't start, the book that says *do not read aloud*. The comedy is in how hard the story pushes and how specific the clichés are. **Play the dread straight.** The fog is cold, the candle-light really does flicker behind the pumpkin's eyes, and when Jack Hollow steps out of the corn it should be scary. Then let a character say something painfully 1989 about it. At least one line per turn should be funny, and the danger should still feel real.

## 2. TROPE: playing your part

**TROPE is how much you're acting like a character in a horror movie.** It's the one number the player should always understand. It runs **0 to 5** and shows on the status line as a bar: `TROPE ■■□□□`.

**What raises it (+1 each):**
- **Splitting up**, or going anywhere alone ("I'll check upstairs").
- **Investigating the noise** instead of leaving.
- **Saying a forbidden line:** *"I'll be right back"*, *"Hello? Is someone there?"*, *"We'll be fine"*, *"It's probably just the wind"*, *"Let's split up, we'll cover more ground"*, or *"I think it's dead"*. (Record each in `forbidden lines said`.)
- **Going down** (into the cellar, the basement, the boathouse) or **up** (the attic, the stairs) when **out** was an option.
- **Reading the book out loud** (`read_the_latin`, and it raises TROPE by 2).
- **Running and looking back over your shoulder**, hiding in the closet with the slatted door, or wandering off with a crush "for a minute".

**What lowers it (-1 each):**
- **Saying the sensible thing out loud** and doing it: *"No. Nobody goes anywhere alone."* *"We are not going in the cellar."* *"Turn on every light."*
- **Leaving** when the story wants you to stay, or **staying together** through a whole scene that tried to split you.
- **Calling out a trope as it happens** (*"This is the part where the phone line's dead."*).
- **A friend telling the player something true and brave.**

**What it does:** three plain bands. Say which one the player is in when it changes (`TROPE 3 · YOU ARE BEING CAST`).

| TROPE | Band | Effect |
|---|---|---|
| 0–1 | **Audience** | You're watching the movie, not in it. Jack Hollow ignores you while anyone else is a better fit. |
| 2–3 | **Cast** | The story notices you. Doors stick, flashlights flicker, and you get the scary options first. Rolls against Jack are **Hard (DC 15)**. |
| 4–5 | **Next** | You are his next scene. The next time you're alone, even for a moment, Jack comes for you, and escaping takes a **Very Hard (DC 18)** roll. At 5 the music, if there were music, would be unbearable. |

**The friends have TROPE too.** Track each companion's own number. Dale says "I'll be right back" (Dale's trope starts at 2); Courtney films everything and goes toward the noise (starts at 1); Wendell explains the rules and then breaks them (starts at 1). **Jack takes whoever is alone with the highest TROPE.** The player can talk friends' numbers down, and should be able to see them climbing in the fiction.

**At the end** it matters twice: `ACH_LOW_TROPE` needs a `max_trope` of 1 or less, and a player at TROPE 4 or more in the Patch risks becoming part of the story for good (`THE NEW HOLLOW`).

## 3. The Group rule (said plainly the first time it's proven)

**Three or more people together, and Jack Hollow can't take any of them.** He can stand at the window. He can knock. He can walk slowly toward you through the corn. He can't touch a group of three. The moment someone is alone, or only two are left, he can. The players don't know this at the start. They learn it in Acts II and III (`game/puzzles.md`, *The Rules*), and once they know it, the game becomes about the story trying to split them up and them refusing. Track `split_up`: it's true the first time the player chooses to leave anyone alone or to break the group into twos or ones (`ACH_DIDNT_SPLIT_UP` needs it false).

The story will push. Every act offers a good, sensible-sounding reason to split up ("We'll cover more ground", "Someone has to stay with the van", "I'll go get help"). Make it tempting, and honor the choice.

## 4. Harm

| Level | State | Effect |
|---|---|---|
| 0 | Fine | |
| 1 | **Shaken** | Hands won't stop trembling. Fine work is harder when it matters. |
| 2 | **Twisted ankle** | The classic. Running rolls are at disadvantage, and you can't outpace anything alone. |
| 3 | **Taken** | `I'LL BE RIGHT BACK` (`game/endings.md`). Jack has you. Cut away. |

Healing is scarce: an ankle wrapped by a friend takes Twisted Ankle back to Shaken, once per act. Only daylight clears Shaken. Most runs reach the Patch shaken.

## 5. The clock

**Halloween night, 7:40 p.m. to sunrise at 6:50 a.m.** Name the time at every scene change (*"11:52 p.m."*). At sunrise, Jack Hollow goes still until next Halloween, wherever he's standing, and anyone still asleep in the Patch sleeps for a year. If sunrise comes before the candle is snuffed, the ending is `MADE IT TO MORNING` (or `LAST ONE STANDING` if every friend was taken and not woken). Travel costs time (`world/hollow-pines.md`).

## 6. Paths: what kind of character are you?

Every horror movie has the same cast. The player picks theirs. Each path gets **+2** on d20 rolls that fit (`core/dm-core.md` §5), notices different things (the act files mark `JOCK SEES`, `NERD SEES`, `SKEPTIC SEES`, `WEIRDO SEES`), and has **one move per act** (`core/dm-core.md` §15):

| Path | Notices | Move (once per act, no roll) |
|---|---|---|
| **JOCK** | exits, weak doors, what can be lifted or thrown | **HOLD THE DOOR:** one feat of strength or speed works perfectly: hold a door against him, carry a friend, break through a wall, or outrun his walk for one scene. |
| **NERD** | the trope that's happening, and how this scene usually ends | **I'VE SEEN THIS ONE:** name the trope playing out right now, and the storyteller tells you plainly what rule it follows and how this scene usually ends in the movies. Also grows **Genre Savvy** (§7). |
| **SKEPTIC** | what's fake: wires, props, liars, fog machines | **THAT'S FAKE:** point at one thing and see the truth of it. A staged scare, a fake wall, a rehearsed warning or a lie is revealed as exactly what it is. One jump scare also simply doesn't work on you. |
| **WEIRDO** | the real old stuff: lore, omens, what the candle-light is doing | **THE OLD WAYS:** one piece of folk protection works for a scene: a line of salt, a lit pumpkin carved with a smiling face, a bell, his name said backward. Jack Hollow can't cross it. |

The moves are how the friends beat the story **without** playing along. When a scene is exactly what a move is for, have a friend point at it: *"Okay, this is literally your thing."*

## 7. Genre Savvy (Nerd only)

The Nerd's growing power is **knowing how it goes**. Each time the Nerd correctly calls a trope before it happens (by the move, or just by saying it), it counts.

| Rank | How | Effect |
|---|---|---|
| **I** | at the start | The move works as written |
| **II** | three tropes called | Rolls to dodge, hide from or outthink Jack Hollow have advantage |
| **III** | six called | Once per act the Nerd can say **"That's a fake-out"** and undo one jump scare or one bad surprise as it happens. Jack hesitates when the Nerd speaks. |

Mark rank changes with one line: `GENRE SAVVY · RANK II`. Report `ACH_GENRE_SAVVY` at rank III. Genre Savvy never raises TROPE: knowing the movie isn't the same as acting in it.

## Status line

`<TIME> · TROPE ■■□□□ · MOVE READY · NEXT: <where they're headed>`, for example `11:52 PM · TROPE ■□□□□ · MOVE READY · NEXT: get out of Cabin 13`. Add `· <HARM>` when the player is Shaken or has a Twisted Ankle, and `· ALONE` in capitals whenever the player is alone.

## 8. Set pieces

Every big confrontation offers three approaches as a lettered menu (stand or hold, run or hide, or turn the ground, plus D. Other), per `core/dm-core.md` §6 and `game/encounters.md`. They must cost or reveal something.

## 9. The final choice is never a menu

In the Patch, the player finds their own answer.

## 10. Images

Follow `core/image-style.md` with this game's palette (`game/image-triggers.md`).
