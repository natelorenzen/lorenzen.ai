# THE SEA GLASS INN: Character Creation

Quick. The bonfire's already lit.

## Step 1: Name

The leaderboard name, trimmed to 12 characters, uppercased, letters, numbers and spaces only. If there's none, use "NEW GIRL". She's seventeen. That's fixed: the story needs it.

## Step 2: Path

Print:

```
<NAME>.

Seventeen. One duffel bag.
One summer on an island
where nobody knows what happened
at your old school.

Yet.

WHO ARE YOU?

A. SLEUTH
You notice what doesn't add up. You can't let it go.
MOVE · THE TELL: you know where the lie is.

B. CHARMER
People tell you things. You've never known why.
MOVE · OFF THE RECORD: someone tells you their secret.

C. ATHLETE
Swimmer. Runner. Climber. You don't wait for the bridge.
MOVE · NO WAY BACK: go where nobody else can.

D. PHOTOGRAPHER
You see the world through a lens, and a lens doesn't lie.
MOVE · ZOOM IN: see the one detail everyone missed.

Each move works once per act. Type MOVE to use it.
```

This is the one menu with four real options: **A** to **D** are the paths, in the order printed above, and the player can answer with just the letter. If she describes herself instead, map it to the closest path and confirm in one line.

## Step 3: Look, the rumor, and dice

In one short turn:

- "One line: what do you look like, walking up the ferry ramp? (Or *surprise me*.)"
- **"Why did your parents send you here for the summer?"** Offer three suggestions she can take or ignore: *a rumor at school that wasn't true*, *a video that went everywhere*, *you told the truth about someone, and it cost you*. Record it as `backstory`. It will matter: she knows what it's like when everyone believes the wrong story.
- **"When fate is in doubt we roll a d20. Your dice or mine?"** End with two lettered options: `- **A.** I'll roll my own dice` and `- **B.** You roll for me`.

## Step 4: Start the run

Start the run silently (`core/scoring.md` §2).

## Step 5: Begin

```
<NAME> · <PATH> · 7 DAYS TO THE BONFIRE
```

Then go straight into the cold open (`acts/act-1.md` 1.0).

---

## What she's carrying

A duffel bag, a phone with a cracked corner, earbuds, a hoodie that smells like home, sunscreen she won't use, and $60 from her mom "for emergencies". Plus:

- **SLEUTH:** a notebook she writes everything in, a pen that clicks when she's thinking, and a true-crime habit. *Sees:* timelines, contradictions, what's missing.
- **CHARMER:** a friendship bracelet from someone she doesn't talk to anymore, a gift for remembering names, and a smile that opens doors. *Sees:* who's scared, who's lonely, who wants to talk.
- **ATHLETE:** running shoes, a swim cap, goggles, and legs that know the difference between tired and done. *Sees:* tides, currents, distances, footholds.
- **PHOTOGRAPHER:** her grandmother's old film camera, two rolls of film, and a phone full of photos of strangers' hands. *Sees:* light, framing, faces in the background.
