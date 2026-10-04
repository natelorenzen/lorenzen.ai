# DON'T SPLIT UP: The Friends

Three friends can share the night. Trust runs from -3 to +3 (`core/dm-core.md` §7). Each has their own **TROPE** (`rules.md` §2), a secret, a moment, and a way to be lost: **taken** (asleep in the Patch, wakeable before sunrise) or **gone** (they leave, furious or terrified, and sit the rest out). Nobody dies on screen.

---

## DALE PRUITT: the driver

**Visual:** eighteen, lanky, a mullet he's proud of, a denim jacket covered in band patches (invented bands), and a rubber werewolf mask pushed up on his forehead all night. He drives **the Mothership**, a 1978 conversion van with shag carpet and a wizard airbrushed on the side.

**Personality:** a goofball and a sweetheart. He's the prankster, the comic relief, the one who jumps out of closets yelling "BOO". He says **"I'll be right back"** constantly, without noticing. His TROPE starts at **2**, and it's the funniest, most dangerous thing in the van.

**History:** the player's friend since second grade. He found the flyer and planned the whole trip.

**Secret** (`DISCOVER_DALE_GRANDPA`): Dale didn't just find the flyer. He went looking for it. His grandfather, **Hank Pruitt**, was the director of Camp Crescent in 1979, and came home that November and never talked about it again. Hank died last spring. In his things, Dale found ten years of Hollow Pines flyers, all for Cabin 13, all stamped with the same committee seal. Dale wants to know what happened. He'll admit it with trust 1 or more, or if the player finds the flyers in the van's glovebox.

**Capability:** the van (when it starts), a toolbox, a cassette of sound effects for pranks (screams, chainsaws, a werewolf howl), and a total lack of fear of looking stupid.

**Fear:** that his grandfather was a coward, or worse, part of it.

**Moment** (`ALLY_DALE_COMES_BACK`): Dale is the only person in horror history who says *"I'll be right back"* **and is.** It happens when he goes off to do something brave in Act IV or V (draw Jack away, fetch the van, ring the fire bell) with trust 1 or more and something from the player to hold onto (a plan, a lit smiling pumpkin, the Weirdo's salt, a promise); or when he's woken in the Patch. He walks back into the light, werewolf mask askew: *"Told you."* `RECRUIT_DALE` in Act I.

---

## WENDELL FISH: the expert

**Visual:** seventeen, small, enormous glasses, a cardigan with leather elbow patches, a clip-on tie with tiny skulls, and a spiral notebook titled **THE RULES** in block capitals. He works at **Video Vault**, the video store on Route 6.

**Personality:** an insufferable, lovable know-it-all who will explain the rules of horror movies to you while you're being chased. Pedantic, anxious, loyal. *"Statistically, the virgin, the nerd and the token comic relief have the best odds. I'm two of those."* His TROPE starts at **1**, and climbs every time he insists on explaining something instead of running.

**History:** the player's lab partner. He came because "someone has to know the rules".

**Secret** (`DISCOVER_WENDELL_SECRET`): Wendell has **never watched a horror movie all the way through.** He's too scared. He's read the back of every box in Video Vault, the plot summaries in two magazines, and the novelizations of three. He hides behind the couch at the scary parts. So his rules are about 70 percent right, and he's wrong about exactly one thing at the worst possible moment (the storyteller picks it). He confesses with trust 1 or more, or the player catches him with his eyes squeezed shut during a scare.

**Capability:** knows the shape of every horror plot, carries a flashlight with fresh batteries (the only one in the group), and can recite the entire *Hollow Night* legend from the box copy. He helps with `game/puzzles.md` (*The Rules*), confidently and not always correctly.

**Fear:** that he's a coward, and everyone will find out.

**Moment** (`ALLY_WENDELL_WATCHES`): in the Patch, at the worst moment, Wendell keeps his eyes open for the first time in his life: *"I'm watching the whole thing this time."* He's the one who sees what everyone else misses (the first lantern's flicker, or the last pumpkin relighting). `RECRUIT_WENDELL` in Act I.

---

## COURTNEY VANCE: the camcorder

**Visual:** eighteen, big permed hair with a scrunchie, a homecoming sash she wears ironically over a leather jacket, and an enormous shoulder-mounted camcorder with a red REC light that's almost always on.

**Personality:** sharp, sarcastic, fearless, and absolutely going toward the scary noise, because that's where the shot is. She hosts **Courtney After Dark**, a public-access show with nine viewers, and she's here to film a Halloween special. *"If something kills us, at least it'll be well lit."* Her TROPE starts at **1**, and climbs every time she goes after a shot alone.

**History:** a stranger. She's from the rival high school two towns over. Her car died at the Last Chance Gas & Bait (Act I), and she's going to the same lake, to the same cabin.

**The flyer** (`DISCOVER_FLYER`): Courtney won the same free weekend at Cabin 13, for the same night, from an identical flyer. Two groups were booked into one cabin. Comparing the two flyers shows the fine print, in tiny type at the bottom of both: *"Hollow Pines Halloween Committee · Visitor Program · Est. 1979."* (Or the player can find it on Dale's flyer alone, with a magnifying glass or a Skeptic's move.)

**Capability:** the camcorder. It sees in the dark (badly), it records everything, and on playback it shows things the eye missed: wires, a man in the crawlspace, the fog machine's extension cord. She's brave, fast and has a can of hairspray and a lighter.

**Fear:** that nothing she does will ever matter to anyone.

**Moment** (`ALLY_COURTNEY_TAPE`): in Act IV, at Town Hall, Courtney gets the Halloween Committee on tape, mid-meeting, saying the quiet part out loud. *"And... we're rolling."* That tape can change the ending (`FOUND FOOTAGE`). `RECRUIT_COURTNEY` in Act I, if the player lets her into the van.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited friend who is awake and free at the end: with the player, safely away, or taken but woken in the Patch before sunrise. A friend still asleep in the Patch at sunrise, or one who became part of the story, doesn't count.
