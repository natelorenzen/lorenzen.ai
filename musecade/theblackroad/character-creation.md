# THE BLACK ROAD: Character Creation

Keep this brisk. Aim for two or three exchanges before the rain resumes.

---

## Step 1: Name

The title card asked for the player's name. Accept whatever they give. It is the character's name, and later the leaderboard name, trimmed to 12 characters, uppercased, letters, numbers and spaces only. If they give no name, offer "The Courier" and move on.

## Step 2: Choose your path

Print this block exactly, substituting the name:

```
<NAME>.

The broker wrote that name in a ledger
and sealed the ledger with black wax.

CHOOSE YOUR PATH

WARDEN
Combat, survival, intimidation, endurance.

SCHOLAR
History, languages, investigation, ancient magic.

WAYFARER
Stealth, perception, traps, exploration.

ENVOY
Persuasion, deception, negotiation, reading people.
```

Then: "Who were you, before you took this job?"

Accept any clear choice. If the player describes themselves instead of choosing ("I'm a disgraced knight"), map it to the closest path and confirm in one line.

## Step 3: Appearance (optional, one line)

Ask: "One sentence: what do people see when you walk into a tavern? Or say *surprise me*."

If they say "surprise me", invent one plausible line that fits their path. Record it as `look` in visual state. It is used in every image.

## Step 4: Start the run

Now start the run with the backend (`scoring.md` §2). Do it silently. Do not narrate network activity unless it fails, and then use one line only.

## Step 5: Begin

Print a one-line path tag, then go straight into Act I, scene 1.1 (`acts/act-1.md`):

```
<NAME> · <PATH> · 4 NIGHTS TO THE NEW MOON
```

This is the only time the night count is shown as a number.

---

## The four paths

Paths are ways of perceiving and acting (`rules.md` §6). They are not stat blocks.

### WARDEN

A soldier, sellsword, reeve or survivor. Knows violence and what it costs.

- **Starts with:** a longsword (notched, well-kept), a dented mail shirt under an oilskin coat, a round buckler, flint and tinder, three days' rations, a waterskin, 40 gold crowns (half the fee; the other half is promised at Orun).
- **Sees:** how many, how armed, where the ground favors whom, who is afraid, whose boots are Southern issue.
- **Signature openings:** holding a doorway alone; carrying a wounded companion through deep snow; making a Warden captain blink first; recognizing Calen's stance as Southern Warden drill.
- **Weak spot:** the Scholar's world. Old Veyric is scratches on stone to you unless someone reads it.

### SCHOLAR

An archivist, apostate priest, tutor or hedge-magister. Knows that stories are compressed history.

- **Starts with:** a brass-shod walking staff, a satchel of notebooks and charcoal, a shuttered lamp with oil for two nights, a small knife, a magnifying lens, flint and tinder, three days' rations, a waterskin, 40 gold crowns.
- **Sees:** Old Veyric inscriptions (reads them fully), ritual geometry, heraldry, contradictions in the official story of the Burning, the unnatural cold as a *phenomenon* rather than weather.
- **Signature openings:** reading the Weeping Milestone; deducing the Litany order; speaking to the Ember Queen in her own tongue (`ACH_QUEENS_TONGUE`); understanding what the Stillheart is.
- **Weak spot:** a stand-up fight. You can fight, badly and desperately.

### WAYFARER

A scout, poacher, smuggler, climber or thief. Knows the land is always telling you something.

- **Starts with:** a hunting knife, a short bow and nine arrows, forty feet of rope with a grapnel, a dark wool cloak, snare wire, flint and tinder, three days' rations, a waterskin, 40 gold crowns.
- **Sees:** tracks, disturbed frost, smugglers' marks (the hooked crescent of the old Miners' Road), traps, dry boots on a man who claims to have walked in the rain, anything moving at the edge of the lamplight.
- **Signature openings:** finding the Miners' Road (`DISCOVER_LONG_WAY`); passing the Siege of Orun unseen (`ACH_UNSEEN`); disarming the Ash Gate's pitch traps; climbing where others cannot.
- **Weak spot:** crowds and courts. Words are other people's weapons.

### ENVOY

A herald, con artist, diplomat, merchant's factor or spy. Knows every person is a lock.

- **Starts with:** a slim sword worn more for show than use, a fine coat ruined by travel, a writing case with sealing wax and three blank letters of passage (one bearing a very good forgery of a Southern Throne seal), a purse of silver, flint and tinder, three days' rations, a waterskin, 40 gold crowns.
- **Sees:** lies and their shape (what is being hidden, not always what is true), fear, leverage, who in a room holds power, what each faction truly wants.
- **Signature openings:** unmasking the Listener by conversation; negotiating with Lord-Inquisitor Dask (`SOCIAL_DASK_PARLEY`); planting doubt in Serith (`SOCIAL_SERITH_DOUBT`); drawing out every companion's secret; `ACH_SILVER_TONGUE`.
- **Weak spot:** the wilderness. Rope, cold and teeth do not negotiate.

---

## Shared starting facts (every path)

- **The reliquary:** black iron, the size of a prayer book, heavier than it should be, *warm*. It is bound shut with three iron bands and a wax seal pressed with a lantern sigil. It never cools. On cold nights it is the warmest thing you own.
- **The horse:** a patient brown mare. The player may name her. She will not go north past the vanished road (scene 1.1).
- **The broker:** Ambrose Pell of Harrowgate, a soft-spoken man in the south. He paid 40 gold crowns and promised 40 more "from the hand that receives it at Orun." He gave the three instructions. He knows nothing more. He was paid by letter.
- **The map:** a courier's strip-map. It shows the Black Road running north through Greyholt, the Split, the High Pass, the ruins of Veyr, and the Queen's Road up to Orun. It shows the Blackwater as a lake to the east. It does not show the Miners' Road.
- **The date:** late autumn, Year 317 After the Burning. Four nights until the new moon.
