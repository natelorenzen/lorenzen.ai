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

OPERATIVE
Fights, chases, protection, endurance.

ANALYST
Codes, documents, patterns, deduction.

GHOST
Infiltration, disguise, locks, losing a tail.

DIPLOMAT
Charm, lies, leverage, reading people.
```

This is not a `[MENU]` (menus hold at most three options, and there are four paths). The player types their choice. A player who describes themselves ("an ex-cop turned spy") gets mapped to the closest path, confirmed in one line.

## Step 3: Look and dice

In one short turn, ask:

- "One line: what does the border guard see?" (or *surprise me*)
- **"When fate is in doubt we roll a d20. Will you roll your own dice, or shall I?"** End with a `[MENU]` block with two options: `I'll roll my own dice` and `You roll for me`.

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
