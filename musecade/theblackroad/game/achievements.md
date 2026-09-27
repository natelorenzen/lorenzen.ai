# THE BLACK ROAD: Achievements

Evaluate every achievement at game over, before sending the completion batch. The only exception is `ACH_WHATS_IN_THE_BOX`, which is reported when it happens. Never announce achievements during play. They appear on the game-over screen.

Visible achievements are listed on the Musecade website. Hidden ones are not, and are discovered by earning them.

| ID | Title | Condition | Visibility |
|---|---|---|---|
| `ACH_NO_SWORD_DRAWN` | NO SWORD DRAWN | Complete the adventure (reach Act IV or later) without intentionally killing anyone: Hushed, Wardens, Choir or otherwise. Driving off, disabling, escaping and freeing Bram at Hedda's request all count as not killing. Companions' kills don't count against the courier unless the courier ordered them. | Visible |
| `ACH_OLD_BLOOD` | OLD BLOOD | Discover the complete history of Veyr: `DISCOVER_MILESTONE_VERSE`, `DISCOVER_MINERS_TALLY`, `DISCOVER_CRYPT`, `DISCOVER_BURNING_TRUTH`, `DISCOVER_STILLHEART` and `QUEEN_SPOKEN`. | Visible |
| `ACH_EVERYBODY_LIVES` | EVERYBODY LIVES | Finish (Act IV or later) with every recruited companion alive and not Hushed. At least one must have been recruited. A companion on the throne (The Borrowed Fire) does not count as alive for this. | Visible |
| `ACH_WHATS_IN_THE_BOX` | WHAT'S IN THE BOX? | Open the reliquary in Act I or Act II. Report it immediately. | Visible |
| `ACH_THE_LONG_WAY` | THE LONG WAY | Discover **and travel** the Miners' Road. | Visible |
| `ACH_BEFORE_THE_MOON` | BEFORE THE MOON | Reach Orun with **2 or more** nights left. | Hidden |
| `ACH_UNSCARRED` | UNSCARRED | Finish (Act IV or later) without the courier ever being wounded (`ever_wounded` is n). Numbness that never became a wound doesn't count. | Hidden |
| `ACH_SILVER_TONGUE` | SILVER TONGUE | End three would-be fights with words alone (`words_resolved` ≥ 3). Examples: talking down the Wardens, calming the Cinder Guard with Veyric, turning Tam, persuading Dask to stand aside, calling Wren back, Serith standing down. | Hidden |
| `ACH_LONE_ROAD` | THE LONE ROAD | Reach the Ember Throne without ever recruiting a companion. | Hidden |
| `ACH_THREE_INSTRUCTIONS` | THREE INSTRUCTIONS | Reach the Ember Throne having never opened the box, never surrendered it (even briefly, even to a companion to hold), and never been late (the night count never fell below 0). | Hidden |
| `ACH_OATHBREAKER` | OATHBREAKER | Break all three instructions in one run: open it, surrender it (to anyone, at any point), and be late (the night count falls below 0) or abandon the road to Orun entirely. | Hidden |
| `ACH_UNSEEN` | UNSEEN | Pass through the Siege of Orun from the courtyard to the Lantern Door without being seen by any enemy. | Hidden |
| `ACH_QUEENS_TONGUE` | THE QUEEN'S TONGUE | Address Queen Maelis in Old Veyric. | Hidden |
| `ACH_LAST_SPEAKER` | THE LAST SPEAKER | A Scholar who recovers all six Words of Weight (`game/words.md`). | Hidden |

Achievements may carry modest points (the server decides). Several can be earned in one run. A few are mutually exclusive (`THE LONE ROAD` vs. `EVERYBODY LIVES`; `THREE INSTRUCTIONS` vs. `OATHBREAKER` and `WHAT'S IN THE BOX?`).

## Adding an achievement

1. Add an `ACH_*` entry to `events.json` with `category: "achievement"`, `points`, `title`, `description`, and any `requires`, `excludes`, `min_act` or `max_act`.
2. Add a row to the table above with the exact condition.
3. If it depends on a new state flag, add the flag to `adventure.md` §5.
4. Run `python3 musecade/_build/build.py`, then redeploy the worker so the server knows the new ID.
