# GHOSTLINE · PACK-4 · BUILD 1.0-57b8947

Bundle for: Act IV begins (`REACH_CANOPY`). It contains the files listed below. Do not fetch them individually. Keep playing from where you are. Everything loaded earlier still applies.

===== FILE: acts/act-4.md =====

# ACT IV: THE CANOPY

*A climb through the sold sky, the truth from a dead woman, a friend's choice, a daughter's program, and the sun.* Target: 12 to 16 minutes, 8 to 11 decisions. Night 2 to dawn on day 3.

**Route:** up the Spine to the underside of the sky → talk to Mara, for real → cross the Canopy between the blimps → **break through into the sun**.

---

## 4.1 THE SPINE

The **Spine**: a mile-high service tower of cables and ladders that runs up from the Stacks into the Canopy, humming with maglev lines. Condensation rains up here like a second weather. The Cartographers' cable car can take them halfway, if they have the Cartographers' trust. After that it's scaffolds.

- **Anchors on the way:** the Spine passes the old **flood wall** where the player and Ines sat as kids (the memory of her drowning is fake; the memory of sitting here is real) and, higher, **Canopy scaffold 9**, where they died two years ago. Standing there is an anchor, and a strange one.
- **Rook** (*Lotus's bounty hunter*) is waiting on a maintenance platform, polite and patient. He can be bought, beaten or befriended, once. If Lotus's deal held (`SOCIAL_LOTUS_DEAL`), he tips his hat and lets them pass.

## 4.2 MARA

At the top of the Spine, in a service shed full of fans, rain and blue light, it's quiet enough to talk. Mara knows they know about the patches. She's run out of places to hide.

- **The conversation** (`SOCIAL_MARA_TRUTH`): the player gets her to admit both things, out loud and without excuses: that she built the patches and let them run for six years, **and** that at the Loom she was planning to keep the body. Then she has to say, honestly, what she wants for the player now. Pressure, compassion, Juno, and the player's own edited life can all get her there. It rarely happens in one exchange. Only honest play earns it.
- Mara at her most honest: *"I made three million people a little less themselves, and I slept fine. And now I'm in you, and you're the first person I've ever been afraid of hurting. I don't know what that means."*
- NETRUNNER at Deep II can hear what she isn't saying. Use it here.

## 4.3 THE CANOPY (set piece)

Run **`ENC_CANOPY`** (`game/encounters.md`): the crossing between the blimps, a mile above the Stacks and a mile below the sun. Holo-ads the size of cathedrals, scaffolds swaying in the wind, drones, and the Quiet Men on sky-sleds, closing in.

Three things happen here, in whatever order the fight allows:

- **Kes's choice** (`KES_STAYS`): an Orison chime on Kes's phone, a voice: her cousin's release, signed, if she leaves the player on the scaffold. She has to choose. If trust is 1 or higher, or the player forgave her after the church, she stays: *"I sold you once. I'm not doing it twice."* If not, she goes, and *Lucky* disappears into the blimps.
- **Juno's *Lullaby*** (`JUNO_LETS_GO`): at the worst moment, with the player hanging onto a scaffold, Juno has the chance to run it: full sync in an hour, her mother back. If she's come to see the player as a person, she deletes it in front of them, and says goodbye to her mother through their face. If not, she runs it (SYNC +2), and the player has to fight it or talk her down.
- **Kade's intel** (`DISCOVER_KADE_BACKUP`): the Cartographers, or Juno, crack a Quiet Man's sled on the way up and find Seraphine Kade's personal restore file: **Version Twelve**. Eleven deaths, eleven restores, eleven self-edits: `FEAR-3`, `GUILT:DELETE`, `DOUBT:DELETE`.

## 4.4 THE SUN

They break through the top of the Canopy, onto the roof of the highest blimp, at dawn. **Real sunlight**, for the first time in the player's life (or the first they remember). The Crown's towers rise out of a sea of blimp-backs like islands. The Spire in the middle, white and gold.

```
[IMAGE_TRIGGER]
ID: IMG_ABOVE_THE_SKY
TYPE: MAJOR_REVEAL
STATUS: REQUIRED

Generate an image before continuing.
Use current character and world state.

SCENE:
Dawn above an endless sea of grey ad-blimp backs stretching to the horizon,
glowing holo-ads fading in the light; gleaming white and gold towers rising
out of the blimps like islands, the tallest a slender white spire; on the
roof of the nearest blimp a thief in a rain-black jacket shielding their
eyes from the first real sunlight, the crew beside them. Awe, triumph,
vertigo.

STYLE:
Authentic retro arcade pixel art: the Musecade pixel style
(core/image-style.md). Pixels visible at a glance.

Do not reveal undiscovered information.

[/IMAGE_TRIGGER]
```

**Dawn on day 3, standing in the sun, ends Act IV.** Record `REACH_CROWN` (it's sent with everything else at the end) and fetch the Act V pack.

---

## Exceptions

- **They go to Ines now instead of the Loom, and try to vanish together:** possible. See `HOME` (`game/endings.md`, loaded with Act V; fetch the Act V pack).
- **They accept an Orison offer relayed by Kade's voice through a Quiet Man's chime** ("come in, and we'll split you ourselves, and you'll work for us"): that's the road to `THE NEW ARCHITECT`.
- **SYNC reaches 5 here:** `FULL SYNC`. Fetch the end pack. Play the last moments from the player's side, fading.
