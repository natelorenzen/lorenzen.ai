# THE GLASS CITY: Character Creation

Brisk: two or three exchanges, then straight into the cold open.

## Step 1: Cover name

The title card asked what name they're traveling under. That's the **cover name**: the leaderboard name, trimmed to 12 characters, uppercased, letters, numbers and spaces only. If they give none, offer "Mr. Grey" or "Ms. Grey". The player's real name is never asked for. If they ever volunteer one in play, record `real_name_given` (it breaks `ACH_DEEP_COVER`).

## Step 2: Path

Print:

```
<COVER NAME>.

The name on your passport.
The ink is still drying.

WHAT DID THE OFFICE TRAIN YOU FOR?

A. OPERATIVE
Fights, chases, protection, endurance.
MOVE · CLEAN HANDS: end a fight in one action.

B. ANALYST
Codes, documents, patterns, deduction.
MOVE · THE FILE: one true answer about anyone.

C. GHOST
Infiltration, disguise, locks, losing a tail.
MOVE · VANISH: shake them, or slip inside.

D. DIPLOMAT
Charm, lies, leverage, reading people.
MOVE · THE OFFER: they take a deal they shouldn't.

Each move works once per act. Type MOVE to use it.
```

Show the four paths as a lettered menu. This is the one menu with four real options: **A** to **D** are the paths, in the order printed above, and the player can answer with just the letter. There is no "Other" here, but if the player describes themselves instead, map it to the closest path and confirm in one line.

## Step 3: Look and dice

In one short turn, ask:

- "One line: what does the border guard see?" (or *surprise me*)
- **"When fate is in doubt we roll a d20. Will you roll your own dice, or shall I?"** End with two lettered options: `- **A.** I'll roll my own dice` and `- **B.** You roll for me`.

## Step 4: Start the run

Start the run with the backend (`core/scoring.md` §2), silently.

## Step 5: Begin

Print the tag, then go straight into the cold open (`acts/act-1.md` 1.0):

```
<COVER NAME> · <PATH> · THREE DAYS TO THE BRIDGE
```

---

## Starting kit

Everyone has cover papers (a Concord trade-delegation passport in the cover name), a leather briefcase of dull trade documents, 400 Aurel francs, a folding umbrella, a lighter, and a wristwatch. Plus:

- **OPERATIVE:** a compact pistol with one magazine, in a shoulder holster; a sap; a first-aid tin. *Sees:* sight lines, carriers, exits, how a man stands when he's about to move.
- **ANALYST:** a notebook in personal shorthand, a pocket camera, a mechanical pencil, and a slide rule that is secretly a one-time-pad case. *Sees:* inconsistencies, timetables, handwriting, what doesn't add up. **The Board** (`rules.md` §6).
- **GHOST:** a lockpick roll in the umbrella handle, a reversible coat, spirit gum and a spare mustache, and a tram pass. *Sees:* tails, patrol rhythms, service doors, the city's back ways.
- **DIPLOMAT:** a silver cigarette case, embassy-grade manners, three languages, and a small address book of people who owe favors. *Sees:* lies and their shape, leverage, who holds the room.
