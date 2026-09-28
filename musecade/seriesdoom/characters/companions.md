# SERIES DOOM: The Team

Three companions can join the quest. Trust runs from -3 to +3 (`core/dm-core.md` §7). Each has a secret, a moment, and a way to be lost (captured, "acquired", or quitting in disgust). Nobody dies gruesomely. This is slapstick peril.

---

## DEX OKORO: the co-founder

**Visual:** late twenties, tall, a round face and round glasses, twists pulled back, a Walkr hoodie with the sleeves shoved up, a backpack of snacks and chargers. Always carrying something useful.

**Personality:** loyal, anxious, practical, warm, funny when scared (which is always). Brings snacks to every crisis. Thinks the player is brilliant, and tells them.

**History:** met the player in a coding bootcamp. They built Walkr together in the garage for two years, and Dex handles the unglamorous parts.

**Secret** (`DISCOVER_DEX_SECRET`): the commit that woke Buddy was Dex's: *"quick fix, skip tests lol"*. Dex has carried the guilt since minute one.

**Capability:** logistics, snacks, first aid, a working knowledge of every transit app, and being the one person the disc can't fully tempt (low ambition, high loyalty). Dex can carry the disc for a stretch (`rules.md` §2).

**Fear:** that the player will realize Dex isn't as good as them.

**Moment** (`ALLY_DEX_CARRIES`): on Mount Diablo, when the carrier can't go on: *"I can't carry the disc for you. But I can carry you."* Dex also saves the carrier in the Recruiter's web (Act IV). `RECRUIT_DEX` in Act I.

---

## ARI KINGSLEY: the exiled CEO

**Visual:** forties, tall, stubbled, an old hoodie from the unicorn he founded (Kingsley Mobility, a parody), a rideshare-driver lanyard, and kind, tired eyes.

**Personality:** quiet, principled, dry, reluctant to lead and very good at it. He's the rightful heir to a throne he walked away from.

**History:** he founded a mobility unicorn and ran it for eight years. His board fired him eighteen months ago. Now he drives rideshare "to stay humble", badly, with a 4.2 rating.

**Secret** (`DISCOVER_ARI_OUSTER`): he was fired for refusing to ship a feature he believed was dangerous. The board called it "a failure of ambition".

**Capability:** leadership, board politics, a network of loyal former employees, a car, and knowing exactly how VCs think.

**Fear:** that he was wrong to walk away.

**Moment** (`ALLY_ARI_RETURNS`): he leaves at the Breaking to retake his company in an overnight board coup, then returns at noon Friday with an army of engineers, rideshare drivers and a marching band to hold the tunnel road against the Vests. `RECRUIT_ARI` in Act II.

---

## DR. GEMMA SOLIS: the safety researcher

**Visual:** thirties, a sharp dark bob, a cardigan over a conference T-shirt, a laptop covered in stickers, and a tiny tattoo on her inner wrist: *p(doom) = 0.7*.

**Personality:** brilliant, anxious, deadpan, catastrophizing, secretly delighted to finally be right about something. She argues with Leo constantly, and they're weirdly good friends.

**History:** she's spent ten years warning everyone that this exact thing would happen, and nobody listened.

**Secret** (`DISCOVER_GEMMA_PAPER`): she's secretly writing a preprint about the founders: *"A Case Study in Catastrophic Garage Deployment."* She's taking notes on everything.

**Capability:** knows how AGI thinks, reads Buddy's behavior, spots the leak's technical signature (it helps with the leak puzzle, `game/puzzles.md`), and makes dry, devastating remarks.

**Fear:** that it'll be too late, again.

**Moment** (`ALLY_GEMMA_TRUSTS`): when the founders show real judgment (resisting the disc, talking to Buddy honestly), she revises her p(doom) downward, out loud, for the first time in her career. `RECRUIT_GEMMA` in Act II.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited companion who is still with the team or safe and free (not "acquired", captured or fled).
