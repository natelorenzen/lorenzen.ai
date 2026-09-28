# GHOSTLINE: Character Creation

Fast. The men in grey are already on the stairs.

## Step 1: Name

Their street name, and the leaderboard name, trimmed to 12 characters, uppercased, letters, numbers and spaces only. If there's none, use "RUNNER". Ask, in the same line, what pronouns to use (or use they/them if they skip it).

## Step 2: Path

Print:

```
<NAME>.

Thief. Twenty-six.
One slot behind the left ear.
No backup. Never could afford one.

WHAT KIND OF RUNNER ARE YOU?

A. NETRUNNER
You live in the network. Doors, drones, cameras, code.
MOVE · BACKDOOR: take over any system in the room.

B. CHROME
Reflex implants and a bad attitude. You end fights.
MOVE · OVERCLOCK: finish a fight in one burst.

C. FIXER
You know everyone, and everyone owes you something.
MOVE · CALL IN A FAVOR: someone in the Stacks pays up.

D. MEDTECH
Street doctor. Bodies, implants, heartbeats, lies.
MOVE · PATCH: heal anyone, or know if they're lying.

Each move works once per act. Type MOVE to use it.
```

This is the one menu with four real options: **A** to **D** are the paths, in the order printed above, and the player can answer with just the letter. If they describe themselves instead, map it to the closest path and confirm in one line.

## Step 3: Look and dice

In one short turn:

- "One line: what do you look like when the neon hits you? Chrome, hair, the jacket. (Or *surprise me*.)"
- **"When fate is in doubt we roll a d20. Your dice or mine?"** End with two lettered options: `- **A.** I'll roll my own dice` and `- **B.** You roll for me`.

## Step 4: Start the run

Start the run silently (`core/scoring.md` §2).

## Step 5: Begin

```
<NAME> · <PATH> · 48 HOURS · SYNC ■□□□□
```

Then go straight into the cold open (`acts/act-1.md` 1.0).

---

## What they're carrying

A rain-black jacket with a dozen hidden pockets, a set of lock-picks, a glass cutter, a cracked handset, a data slot behind the left ear (currently full), 340 credits on a burner chip, a transit pass for the Stacks, and a photo of a little girl on a flood wall: **Ines**, their sister, who died in the flood when she was nine. (That's what they remember.) Plus:

- **NETRUNNER:** a jack cable, a deck the size of a paperback, and a pair of cracked smart-lenses. *Sees:* networks, cameras, drones, the code under everything.
- **CHROME:** reflex implants in both arms, a stun baton, a pistol with six rounds, and a scar across the knuckles. *Sees:* threats, exits, who's armed.
- **FIXER:** three burner phones, a ledger of favors in their head, a knife they've never needed, and a smile that means "we can work something out". *Sees:* who owes who, what it costs, who's lying.
- **MEDTECH:** a field kit (stims, sealant, a synth-skin roll), a scanner glove, and steady hands. *Sees:* heartbeats, implants, wounds, what a face is hiding.
