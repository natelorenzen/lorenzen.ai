# DON'T SPLIT UP: Character Creation

Fast. Something just went under the van.

## Step 1: Name

The leaderboard name, trimmed to 12 characters, uppercased, letters, numbers and spaces only. If there's none, use "SURVIVOR". Ask, in the same line, what pronouns to use (or use they/them if they skip it).

## Step 2: Path

Print:

```
<NAME>.

Seventeen. Senior year.
Costume: not decided yet.
Horror movies seen: a lot.

EVERY HORROR MOVIE HAS THE SAME CAST.
WHICH ONE ARE YOU?

A. THE JOCK
Strong, fast, brave. Usually dies second.
MOVE · HOLD THE DOOR: one feat of strength, no roll.

B. THE NERD
You've seen them all. You know the rules.
MOVE · I'VE SEEN THIS ONE: name the trope, learn how it ends.

C. THE SKEPTIC
There's a rational explanation. Usually.
MOVE · THAT'S FAKE: see through one prop, trick or lie.

D. THE WEIRDO
Black nail polish, a book of folklore, no fear of the dark.
MOVE · THE OLD WAYS: one charm that keeps him out.

Each move works once per act. Type MOVE to use it.
```

Show the four paths as a lettered menu. This is the one menu with four real options: **A** to **D** are the paths, in the order printed above, and the player can answer with just the letter. There is no "Other" here, but if the player describes themselves instead, map it to the closest path and confirm in one line.

## Step 3: Look

Ask, in one short turn: "One line: what's your Halloween costume? (It's 1989. Homemade counts.)" (or *surprise me*)

Don't ask about dice. You roll every die (`core/dm-core.md` §5).

## Step 4: Start the run

Start the run silently (`core/scoring.md` §2). Record `RECRUIT_DALE` and `RECRUIT_WENDELL`: they're in the van.

## Step 5: Begin

```
<NAME> · <PATH> · 11 HOURS UNTIL SUNRISE
```

Then go straight into the cold open (`acts/act-1.md` 1.0).

---

## What they're carrying

A flashlight with weak batteries, a Walkman, a bag of fun-size candy, a costume, and a map of the lake from the flyer. Plus:

- **JOCK:** a letterman jacket, a baseball bat (for the softball game nobody is going to play), and a sports bottle of orange drink. *Sees:* exits and things that can be broken.
- **NERD:** a backpack of VHS tapes, a notebook titled *THE RULES* (half full), and a calculator watch. *Sees:* the trope that's happening.
- **SKEPTIC:** a pocket tape recorder, a magnifying glass, and an encyclopedia volume (*S–T*) "for reference". *Sees:* wires, props and liars.
- **WEIRDO:** a satchel of salt, chalk and candles, a paperback of regional folklore, and a tarot deck missing the Fool. *Sees:* the real old stuff.
