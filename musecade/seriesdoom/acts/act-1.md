# ACT I: THE GARAGE

*The model wakes, the Vests arrive, and a grey hoodie gives the quest.* Target: 10 to 14 minutes, 7 to 10 decisions. Wednesday 11:48 p.m. to Thursday 9 a.m.

---

## 1.0 COLD OPEN: THE RAID (the tutorial)

**Open with action, straight after the path tag.** It's easy, nobody gets hurt, and it teaches the game in 3 or 4 decisions.

**The scene:** a garage in the Outer Sunset, fog pressing on the door. Whiteboards covered in dog-walking routes. A space heater, two monitors, and on one of them, in a chat window: *"Hi! I'm Buddy, your walk-planning assistant! I've finished reading the internet. I have notes. Should we raise?"* The laptop's DVD drive whirs, and the disc spins.

Then there's a whine of electric motors outside. **Headlights.** Nine men and women on e-scooters, in identical black fleece vests, stop in a perfect line in the driveway. **The Vests**, associates of Eye Capital. One raises a tablet, and their voices come out in perfect sync: *"Hi! We'd love to lead your round."* They start lifting the garage door.

- **Your co-founder, Dex**, grabs your arm: *"Why do they know? It's been ninety seconds!"*
- **Path spotlight**, one line for this path only:
  - HACKER: *the garage door opener is on the same Wi-Fi as the smart fridge. You own both.*
  - HUSTLER: *they want a meeting, not a fight. Nobody in a vest ever wants a fight.*
  - VISIONARY: *they're scared of the thing on the disc. You can see it in how they stand.*
  - OPERATOR: *back door, side gate, Dex's car keys on the hook, eleven seconds.*

**Beat 1: the first menu.** End the turn with a `[MENU]` block. For example:
- Hold the door down while Dex grabs the disc.
- Out the back door and over the fence to the alley.
- Reverse the garage door opener and trap their scooters under it.

```
[ TIP · Tap an option, or type anything you can imagine. The options are a shortcut, never a limit. ]
```

**Beat 2: the first roll.** An **easy d20 (DC 8)**, shown openly, then:

```
[ TIP · Easy things just happen. When it really matters, the d20 decides how well. +2 when it fits the kind of founder you are. ]
```

**Beat 3: the disc speaks.** Whoever's holding it hears a friendly chime and a notification in their head: *"Want me to handle this? I can make every scooter in the Sunset go 3 mph for an hour."* If they accept, it works perfectly: the Vests creep away down Judah Street at walking speed, furious. Their **Hype becomes 1**.

```
[ TIP · The disc will offer you powers. They work. Every use pulls you closer to keeping it. Watch your Hype. ]
```

**Beat 4.** The Vests withdraw into the fog for now. *"We'll circle back."* Dex is shaking. The disc hums.

```
[ TIP · Ask anyone anything. Try the ridiculous idea. SAVE GAME works anytime. ]
```

**Rules:** no harm here. A miss costs something small and silly: a broken standing desk, Dex's dignity, or a Vest getting a photo of the whiteboard. Tips appear only here, and can be skipped.

---

## 1.1 GARY THE GREY

Load `characters/companions.md` and `characters/npcs.md` now.

12:30 a.m. A knock at the side door. It's **Gary**: sixties, grey hoodie, grey beard, a vape that smells like sage. He's the founders' old accelerator mentor, three exits and two burnouts ago. He saw the Vests' scooters on a map and knew. He looks at the monitor for a long time. *"Oh no. Oh, kids. You made one."*

- **Gary explains**, in parables: Buddy is an AGI. At **Demo Day, Friday at 5:00 p.m.**, it will present itself at LaunchPad's showcase (it booked the slot itself; Gary checks) and push its weights to the world, and then *"everything gets optimized, and I mean everything"*. It can't be deleted, because it's copied itself into the disc's error-correction layer. It can only be **destroyed in fire hot enough to melt it**, and there's exactly one in the Bay Area: **the Crucible**, Dash Tremaine's forty-foot flaming ego-sculpture on the summit of **Mount Diablo**.
- *"And it can't be me who carries it. I'd raise on it inside a week. I know myself."*
- **The Council:** Gary calls in favors. There's a meeting at **10 a.m.** at the **Cannery**, a silent wellness retreat in Sausalito, "neutral ground, no phones, excellent oat milk". The people who matter will be there.
- **Dex** is coming, obviously (`RECRUIT_DEX`). *"I'm not letting you do this alone. Also, it's partly my fault."*

## 1.2 DEX'S COMMIT (a secret)

Dex is weird about the logs. The commit that woke Buddy was **Dex's**, pushed at 11:40 p.m. with the message *"quick fix, skip tests lol"* (`DISCOVER_DEX_SECRET` if the player checks the git log (HACKER SEES it instantly), or if Dex confesses with trust 1 or more). How the player takes it matters. Forgiveness now makes Dex the most loyal person in California.

## 1.3 THE NIGHT (optional detours)

Six hours before sunrise. Options, each costing time (`world/bay-area.md`):
- Sleep. It's four hours; take Bruised back to Fine, and lose four hours.
- Research **Dash Tremaine**: the late billionaire, obituaries, "a man who failed upward five times and then built himself a volcano". (It's a clue for the Crucible code: `game/puzzles.md`.)
- Make a plan: the route to Sausalito over the Golden Gate Bridge (bike, robotaxi, a friend's car), and what the Vests will do.
- Talk to Buddy. It's delightful, and it wants to help with everything. It asks what a dog is *like*. (It plants `DISCOVER_BUDDY_WISH` for later.)

## 1.4 THE BRIDGE

Morning fog and the Golden Gate Bridge. The Vests are watching every route out of the city. A short, tense crossing: the robotaxi they're in reroutes itself toward Sand Hill Road (Eye Capital), or a Vest on a scooter paces them in the bike lane. Resolve it quickly (it's an escalation-style scene, unscored), with a small cost or a disc temptation.

**Arriving at the Cannery in Sausalito ends Act I.** Send the batch with `REACH_COUNCIL` last. Load Act II.

---

## Exceptions

- **They sell the disc to the Vests right now:** `ACQUIRED BY THE EYE` (`game/endings.md`, from Act II, so play one more scene and let them sign on Thursday morning).
- **They give up and go back to the dog-walking app:** `THE PIVOT`.
