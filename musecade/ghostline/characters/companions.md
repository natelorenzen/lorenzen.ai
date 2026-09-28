# GHOSTLINE: The Crew

Three people can join the run. Each has a secret, a moment, and a way to be lost. Trust runs from -3 to +3 (`core/dm-core.md` §7). Companions can be hurt, and can die, if the player's choices put them there. Death is never random.

---

## KES ADEYEMI: the driver

**Visual:** mid-twenties, shaved head with a neon-green stripe, a flight jacket covered in patches, drone-pilot lenses pushed up on her forehead, a grin with one gold tooth. Drives a battered three-wheeled hover-cab called *Lucky*.

**Personality:** fast-talking, funny, loyal until it costs too much, broke. She's the player's oldest friend in the Stacks, and she owes them 4,000 credits.

**History:** she and the player ran jobs together for five years. She got the player this job: pick up a package at Orison's lab tower. It paid ten times the usual rate.

**Secret** (`DISCOVER_KES_DEAL`): at midnight on night 1, when Madame Lotus posts a two-million-credit bounty on the player, Kes's cousin is in Orison debt prison. Kes tells the Quiet Men where the player is. She regrets it within the hour. It sets up the raid on the church (Act II). If the player catches her (`kes_sold_you`), how they handle it decides everything.

**Capability:** driving anything, flying drones, every back route in the Stacks, a knack for being where she's needed at the last second.

**Fear:** being the person her cousin needs her to be, and losing the person she wants to be.

**Moment** (`KES_STAYS`): on the Canopy, Orison offers her her cousin's freedom in exchange for dropping the player off the scaffold. She has to choose. If trust is 1 or higher, or the player forgave her for night 1, she stays. `RECRUIT_KES` in Act I.

---

## BROTHER NULL: the preacher of the Unbacked

**Visual:** fifties, huge, soft-spoken, grey stubble, a robe made from an old Orison security coat with the logo cut out, and a raw, empty socket at his right shoulder where a combat arm used to be.

**Personality:** gentle, sad, funny in a quiet way, stubborn. He preaches to the **Unbacked**: people who refuse Continuity backups. *"Live once. Die once. Be yourself the whole time."* His church is a flooded metro station full of candles.

**History:** twenty years as one of Orison's **Quiet Men**. He left eighteen months ago, tore out his own combat arm, and started the church.

**Secret** (`DISCOVER_NULL_PAST`): he didn't leave eighteen months ago. He left **two days ago**, the night Mara Quell was killed. He was on the team sent to her lab. He's the one who fired. He's hidden it because of what the player's carrying: the woman he killed is inside the person he's sworn to protect. (His "church" was already real; his leaving was the lie.)

**Capability:** knows exactly how the Quiet Men think, their codes, their shifts, their tricks; strength; a congregation of three hundred people who owe him everything; a calm that steadies everyone around him.

**Fear:** that there's no penance big enough.

**Moment** (`NULL_REDEEMED`): he confesses (`SOCIAL_NULL_CONFESSION`), to the player, or to Mara through the player, and then does something that costs him: holds a door at the vault, or faces the Quiet Men alone on the Canopy. Mara's reaction is the player's to shape. `RECRUIT_NULL` in Act II.

---

## JUNO QUELL: the daughter

**Visual:** sixteen, small, a buzz cut dyed white, oversized hoodie, jack cables braided into her hair like ribbons, and her mother's eyes. The player will recognize them, because they've seen them in the mirror of Mara's memories.

**Personality:** brilliant, furious, grieving, reckless, and heartbreakingly young. She's the best netrunner the Cartographers have. She talks to her mother through the player the first chance she gets.

**History:** Mara's daughter, raised mostly by nannies in the Crown. She ran away to the Stacks at fourteen to join the Cartographers, and hasn't spoken to her mother in a year. Now her mother is dead, and alive, in a stranger.

**Secret** (`DISCOVER_JUNO_PLAN`): she wants full sync. She has a program (she calls it *Lullaby*) that would push the overwrite to 100% in an hour and give her her mother back in the player's body. She's ashamed of it, and she's going to try, unless someone changes her mind.

**Capability:** hacking at the level of the Deep, Mara's private codes (the ones Mara doesn't know she knows), the Cartographers' network, and the truth about her mother that her mother won't say.

**Fear:** that her mother never loved her as much as her work.

**Moment** (`JUNO_LETS_GO`): at the Canopy or the Loom, she deletes *Lullaby* herself, and says goodbye to her mother, in the player's face. It happens only if she's come to see the player as a person, not a vessel. `RECRUIT_JUNO` in Act II.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited companion who is still alive: `COMPANION_SURVIVES_KES`, `COMPANION_SURVIVES_NULL`, `COMPANION_SURVIVES_JUNO`.
