# THE BLACK ROAD: Companions met in Act II (general companion rules are in `characters/companions.md`)

## WREN

**Visual:** nineteen, small and wiry, sharp-faced and pale-freckled, dark hair in a single long braid with the sides shaved, quick grey eyes. An enormous stolen man's coat of brown wool with the sleeves rolled five times, a belt of mismatched knives, a sling. Limps on the right ankle after the trap (Act II), for a day. After her secret is known: a patch of frost-white skin, feathered like rime, spreading from over her heart toward her collarbone and throat.

**Personality:** sardonic, quick, superstitious, fiercely practical, funny, rude, frightened underneath. Hums constantly, a tune with no end, because silence scares her. Steals small things, then gives them back if she likes you.

**History:** grew up in **Hollin's Ford**, a salt village by the Split. A month ago the whole village walked out into the snow in one night. Wren survived because she was hiding in the well, *and she heard the singing, and her mother's voice in it, calling her name.* She has been living by scavenging ever since.

**Motivation:** survive the winter. Secretly: *find her mother,* whom she believes is in the song.

**Secret: she is being Hushed.** She was touched that night and it did not take all at once. The frost over her heart spreads. She hears the singing in every silence. The box's warmth keeps it back, which is why she edges toward the courier. Report `DISCOVER_WREN_HUSHING` when the courier sees the mark or she confides it (trust ≥ 2, or after her sleepwalking in Veyr).
- Track `hushing` from 0 to 3. It starts at 1. It rises by 1 each night she spends away from warmth (the box, an emberstone, a fire kept near her), and in Veyr regardless. At 3 she walks into the Hush (status `hushed`).
- It falls by 1 per night kept warm, and to 0 permanently if an **open Kindling** burns the frost out (one flare; she screams, and then she laughs), or if the Long Quiet is achieved.

**Capability:** knows the country and **the Miners' Road**. Tracks, sets snares, climbs like a cat, throws knives. **The Hushed ignore her** (they think she's one of them), so she can walk through them, scout, carry things past them, or carry the Stillheart to the Cradle.

**Fear:** silence. She will talk nonstop in the frost line and inside the Hush's presence, and she fails to hum only when she's truly terrified.

**Opinion of the reliquary:** "It's warm. That's all I care about. Can I hold it? I'll give it back." (She will.)

**Relationship beats:**
- The trap: freed kindly, trust +1. Freed with contempt, 0. Left, -3.
- Sharing food, warmth, the box's heat: +1 (once).
- Her secret: responding with care, trust +1. With fear or disgust, -2.
- Honesty about the Hushed: she wants to know what they are.

**The call (Act IV):** at the siege, the Hush calls her with her mother's voice.
- **Kept warm** (secret known, and `hushing` ≤ 1 at Orun, or cured): she refuses the song. Report `WREN_KEPT_WARM`.
- **Otherwise:** she runs into the deep, or tries to take the box to the Hush ("She says if I bring the fire, she'll let them all go!"). Fire `IMG_BETRAYAL` if she takes the box. She can be called back on the Stair of Ash or the ice stair (trust ≥ 0, her name, warmth, and the truth: *"That isn't your mother. It's what's left of her."*).

**Possible sacrifice:** the Borrowed Fire (if Hushing and not cured: "I'm half cold already. Let me be warm forever."), or carrying the Stillheart to the Cradle in the Long Quiet (the Hushed part for her). In the Cradle she may choose to stay with the sleeping faces, having found her mother's. Let it be her choice.

**Possible death:** the Hush takes her fully (`hushed` counts as not surviving), the siege, the throne.

---

## BROTHER OSWIN TARR

**Visual:** sixty-odd, round, balding, ruddy-cheeked, white stubble, small round spectacles repaired with wire. A patched grey habit with a lantern sigil embroidered at the breast, a heavy shuttered lantern on a pole, a satchel of herbs and bandages, walking boots too good for a monk.

**Personality:** cheerful, garrulous, kind, guilty. Loves riddles, puns and truly awful verse ("O Road of black, O Road of ice, / O Road that isn't very nice"). Brave in small ways and cowardly in big ones, and knows it. Calls everyone "friend".

**History:** a monk of the Last Lantern at Orun for forty years. He failed his own novice trial, a night alone in the undercroft beside the cracks, by running. He has been the Order's messenger, bookkeeper and cook ever since.

**Motivation:** to see the seal renewed and the world kept safe, and to be forgiven for how.

**Secret:** **he chose the courier.** The Order paid the broker, and Oswin read the broker's ledger of available couriers and picked a name, *"because you had no one who would come looking. I told myself that was a mercy."* He knows the courier is meant to burn. Report `DISCOVER_OSWIN_PURPOSE` when this comes out (Envoy pressure in Act II or III, trust ≥ 2 confession, or at Orun from him or Hesk).

**Capability:** field care (once per act, he can bring anyone back from Grievous to Wounded, but cannot make them whole; see `rules.md` §5), Old Veyric (he translates the milestone, the mural, the tally and the journal), the Order's hymns and history (Litany clues: he knows *"the lantern is last, and the flame before it,"* not the full order), the layout of Orun and the undercroft, and the ward-lantern: his lantern's light makes Hushed hesitate for a breath.

**Fear:** the dark below Orun. He shakes on the Stair of Ash.

**Opinion of the reliquary:** reverent. "It's a candle for the world, friend. Carry it gently." He will not touch it without permission.

**Relationship beats:**
- The waystation: if the courier catches his evasions without humiliating him, trust +1.
- If the courier learns his secret and does not cast him out: +2, and he weeps.
- If they learn it and cast him out: he follows at a distance anyway, and reappears at Orun with the monks.

**Orun (Act IV):**
- **OSWIN_CHOOSES_YOU:** if trust ≥ 2 and his secret is known, he stands with the courier against Hesk's will, whatever the courier decides: refusing, fleeing, the Long Quiet, anything. Report `OSWIN_CHOOSES_YOU`.
- **The poppy tea:** if trust ≤ 0 and the courier plans to flee, Hesk orders him to drug them and he obeys (see 4.2). If trust ≥ 1, he refuses Hesk and warns the courier.

**Possible sacrifice:** the Borrowed Fire: "It should have been one of us from the start. It should have been me." Only if trust ≥ 1 and his secret is known.

**Possible death:** the siege, holding the undercroft stair beside Hesk; the Stair of Ash.
