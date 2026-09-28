# MUSECADE

**Games for agents. Adventures for humans.**

> **Disclaimer:** Musecade is an independent project by Nate Lorenzen, made for entertainment purposes only. It is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc., Muse, or any Meta product or service. "Muse" is mentioned only to describe which AI agents the games are written for; all trademarks belong to their respective owners. All games are works of fiction.

Musecade is an arcade where the AI agent is the console. A person points Muse at `https://lorenzen.ai/musecade/musecade.md` once, types a hashtag such as `#theblackroad`, and Muse loads the game's files and runs it as Dungeon Master in ordinary chat. At the end, the run's score goes onto a global high-score table.

- Human site: https://lorenzen.ai/musecade/
- Agent protocol (router): https://lorenzen.ai/musecade/musecade.md
- Games:

  | # | Game | Command | Genre | Rating | Built on |
  |---|---|---|---|---|---|
  | 001 | [The Black Road](https://lorenzen.ai/musecade/theblackroad/) | `#theblackroad` | Dark fantasy | PG-13 | its own complete rules (`theblackroad/rules.md`) |
  | 002 | [The Glass City](https://lorenzen.ai/musecade/theglasscity/) | `#theglasscity` | Espionage | PG-13 | shared core (`core/`) |
  | 003 | [The Sea Glass Inn](https://lorenzen.ai/musecade/theseaglassinn/) | `#theseaglassinn` | Drama · mystery | PG | shared core |
  | 004 | [Series Doom](https://lorenzen.ai/musecade/seriesdoom/) | `#seriesdoom` | Satire · comedy | PG-13 | shared core |

  New games should use the shared core: `core/dm-core.md` (agency, `[MENU]` blocks, d20, saves, cold opens), `core/image-style.md` (pixel-art style, video), and `core/scoring.md` (the leaderboard protocol). A game then only writes its world, systems and content. Art is made with `_build/pixelize.html` (add a palette) and cards with `_build/og.html` (add a card).

---

## 1. What this repository controls vs. what Muse must do

| This repository controls | Muse (or any agent) must supply |
|---|---|
| The platform protocol (`musecade.md`) and game registry (`games.json`) | Fetching web pages. **Required.** |
| Every game's world, rules, characters, puzzles, secrets, endings, image and video triggers | Reasoning, narration, improvisation, roleplay, memory of hidden state across the conversation |
| The canonical score table (`events.json`) | Reporting event IDs honestly and in order |
| The leaderboard backend (Cloudflare Worker + D1) and its validation | HTTP GET or POST to the API (RANKED mode). Without it, LINK mode or LOCAL mode (§6) |
| The website, key art, leaderboard and stats display | Image generation (strongly recommended); 5-second video (optional) |
| Instructions for persisting hashtags across conversations | Honoring a custom instruction or memory, if the user adds one |

Nothing in this repo can force an agent to behave. The files are written to be followed, and the server refuses anything that isn't a valid, canonical, in-order event. See *Limitations*.

---

## 2. Architecture

```
                       lorenzen.ai (GitHub Pages, static)
 ┌──────────────────────────────────────────────────────────────────────────┐
 │ /musecade/                 human arcade: select screen, scores, stats    │
 │ /musecade/musecade.md      ROUTER: protocol + live game registry         │
 │ /musecade/games.json       registry (source of truth)                    │
 │ /musecade/config.json      leaderboard API base ("" = offline)           │
 │ /musecade/<game>/          cabinet page + the game's Markdown cartridge  │
 │ /musecade/submit/          LINK-mode score entry page                    │
 └──────────────────────────────────────────────────────────────────────────┘
        ▲ fetch .md (GET)                          ▲ fetch leaderboard/stats
        │                                          │
   ┌────┴─────┐   POST/GET /run/*   ┌──────────────┴────────────────┐
   │   Muse   │ ──────────────────▶ │ Musecade API                  │
   │ (agent)  │                     │ Cloudflare Worker + D1 (SQL)  │
   └────┬─────┘                     │ owns points (events.json)     │
        │ chat                      └───────────────────────────────┘
   ┌────┴─────┐
   │  Human   │  decisions, creativity, strategy
   └──────────┘
```

**The separation principle:** game files define the world, rules, state, scoring events, secrets and endings. Muse supplies reasoning, narration and images. The human supplies decisions. Points live only on the server.

---

## 3. Muse integration and hashtag routing

1. The user tells Muse: *"Go to lorenzen.ai/musecade/musecade.md and follow the instructions."*
2. Muse fetches the router and prints the boot screen (1 game available, the command).
3. From then on, in that conversation, any message containing a registered hashtag makes Muse fetch that game's manifest (`<game>/adventure.md`) and run it. The user never pastes another URL.
4. **Across conversations:** a chat model only knows the router while it's in context. For hashtags to work in every new conversation, the user adds one line to Muse's custom instructions or memory (shown on the homepage and in `musecade.md` §5).

`#musecade` reprints the boot screen. `EXIT GAME`, `SAVE GAME` and `RESUME` are handled by each game.

**Freshness:** you can edit any game file, push, and the next hashtag runs the new version. The router tells agents to re-fetch every Musecade file with a unique `?fresh=` query, which bypasses GitHub Pages' 10-minute cache and the agent's own fetch cache, and never to reuse a copy from earlier in the conversation or from memory. `build.py` stamps each game with `version-contenthash` (for example `1.1-b996da9`) in `adventure.md` and `musecade.md`, and the agent announces it on load (`CARTRIDGE LOADED · BUILD 1.1-b996da9`), so you can confirm which build is running. Files already loaded for the current act stay put mid-game; everything loaded afterward is fresh.

## 4. Game manifests and progressive loading

Each game is a folder of Markdown files. `adventure.md` is the bootloader: the title card, the hidden truth in compact form, the hidden-state schema, and a **load table**. At start, Muse loads only the boot files (for The Black Road: `rules.md`, `character-creation.md`, `scoring.md`, `game/image-triggers.md`, `acts/act-1.md`). Everything else loads when its trigger fires: the first combat loads `encounters.md` and `creatures.md`, `REACH_VEYR` loads Act III and `lore.md`, any ending loads `endings.md`, and so on. Content that isn't loaded yet doesn't exist for the DM, which keeps context small and secrets safe.

```
theblackroad/
  index.html            cabinet page (humans)
  adventure.md          manifest / bootloader (agents start here)
  rules.md              DM rules: format, resolution, wounds, time, saves
  character-creation.md name → path → look → start run → Act I
  scoring.md            RANKED / LINK / LOCAL modes, API calls, game-over screens
  events.json           canonical event IDs and point values (server-owned)
  metadata.json         machine metadata, file list, capabilities
  acts/act-1..5.md      scenes, path-specific perception, triggers, transitions
  world/                lore, factions, locations, creatures
  characters/           companions (secrets, betrayal, sacrifice), NPCs
  game/                 encounters, puzzles, achievements, endings, image triggers
```

## 5. State management

Muse keeps a hidden state block (defined in `adventure.md` §5): run credentials, the player, wounds and visible injuries, inventory, the reliquary's state, nights until the new moon, each companion's status, trust and flags, faction standing and awareness, knowledge, story flags, reported and pending events, images used, and visual continuity. It is never shown, except in `SAVE GAME`.

`SAVE GAME` prints a portable block. Pasting it into any new Muse conversation with `RESUME` restores the game, loads only the files for the saved act, and continues the same run ID. The save includes the run's own token (needed to keep reporting), and never any backend configuration.

## 6. Scoring, and how any number of players reach one leaderboard

**Every agent reports to the same API, and each run is one row in one table. The leaderboard is a sorted query over that table.**

```
 Agent A ─┐   /run/start   ─▶ new row in runs (random run_id, secret token; only its hash stored)
 Agent B ─┤   /run/event   ─▶ canonical event IDs, validated, deduplicated in run_events
 Agent C ─┤   /run/complete─▶ server sums the points from events.json, locks the row
   ...    │
 Agent N ─┘   (LINK mode: the player clicks a submit link → /run/submit, same validation)
                                  │
                                  ▼
               runs table, indexed (game, status, ranked, score DESC)
                                  │
   GET /leaderboard  ─▶  SELECT … WHERE status='complete' AND ranked=1
                         ORDER BY score DESC, completed_at ASC LIMIT 10
                                  │   cached at Cloudflare's edge for 30 s
                                  ▼
               lorenzen.ai/musecade/#scores  (and the game's cabinet page)
```

- **Concurrency:** Workers scale automatically, so each request is independent and there's no shared in-memory state to contend over. D1 is SQLite underneath. Each run costs roughly 3 to 6 small writes over an hour, so even thousands of simultaneous players are a light write load. Ties go to whoever finished first.
- **Reads at scale:** any number of people watching the board costs at most one query per URL per Cloudflare data center every 30 seconds. New scores appear within 30 seconds.
- **Tested:** `_worker/test/run-tests.mjs` includes 600 concurrent submissions from 600 addresses and checks that the board shows the true top 10.

**Three modes,** chosen by the agent at run start (`scoring.md` §1):

| Mode | When | Path to the leaderboard |
|---|---|---|
| RANKED | The API is live and the agent can make web requests | The agent calls `/run/start`, `/run/event` and `/run/complete` itself. It can use GET-only URLs if it can only "fetch a page" |
| LINK | The API is live, but the agent can't make requests | The agent prints `https://lorenzen.ai/musecade/submit/#…`; the player clicks SUBMIT; the page posts to `/run/submit` |
| LOCAL | The API is offline | The agent scores locally from `events.json`; the run is marked UNRANKED |

**What the server enforces:**

- **Only canonical event IDs.** Totals are never accepted; any `score` field is ignored.
- **Duplicates:** each event counts once per run (primary key `run_id, event_id`).
- **Order sanity:** `min_act` and `max_act`, `requires`, `requires_any` and `excludes`. For example, `ENC_BRIDGE_*` and `ENC_DROWNED_*` are mutually exclusive routes, and `ACH_WHATS_IN_THE_BOX` is refused after Act II.
- **Endings:** a valid ID, a reachable act, prerequisites (`ENDING_LONG_QUIET` needs `DISCOVER_STILLHEART` and the Litany or the Queen), and fate versus the `died` flag.
- **Limits:** a maximum-score ceiling, 80 events per run, 60 per request, 8 KB bodies, and a 30-day run lifetime.
- **Rate limits:** per salted IP hash: 12 starts, 300 event calls, 30 completes and 10 link submits per hour.
- **Ranking:** runs completed in under 5 minutes are recorded but unranked. Completion is idempotent, and link submits are idempotent by nonce.
- **Names:** uppercased, A–Z, 0–9 and spaces, 12 characters maximum, with a small blocklist.

**Achievements** are `ACH_*` events with modest points. **Endings** are sent only with completion. Typical completed runs score about 3,000 to 8,500, exceptional runs 10,000 to 17,000, and early deaths a few hundred.

## 6b. Dice and magic

- **d20, light rules** (`rules.md` §4): the DM decides when to roll, and only at pivotal moments (roughly 10 to 20 per campaign). There is a DC ladder of 8, 12, 15, 18 and 20, +2 when the action fits the path, and advantage or disadvantage in place of other modifiers. A natural 20 succeeds with extra power; a natural 1 is a disaster with a twist. For effects with a size, the roll sets the power. The player can roll their own dice, and the DM never fudges. Dice never solve puzzles.
- **Words of Weight** (`game/words.md`, loaded only for Scholars): six Old Veyric Words (NER, SAEL, THARRU, ENNAR, MAELIS, ANNA VAELUN). The Scholar starts with two and recovers the rest through the story, growing from rank I (Whisper) to rank III (Command). Casting costs strain, which clears at dawn.

## 6c. Decision menus are runner-owned

Game files never tell the model to call a tool, because that pattern trips agents' prompt-injection defenses. At decision points the model ends its reply with a plain-text block:

```
[MENU]
- Hold the stair
- Fall back to the arch
- Light the oil store
[/MENU]
```

The **Musecade runner** (the client that loops turns with the model, not this repo) strips the block, renders up to 3 buttons, always appends the wildcard "Something else — type your own", sends a tapped option's exact text as the player's next message, re-prompts once if a decision-point reply is missing its block, and falls back to an A–D lettered list where buttons can't render. Without a runner, the block still reads as a plain list.

## 7. Images and video

`game/image-triggers.md` defines the style (dark fantasy × 1991 arcade pixel art: real visible pixels, a 32-color palette and dithering, with fire in orange and crimson and the Hush in electric blue), the prompt template, visual-continuity rules, a 5-to-8 image budget (the first at the first creature reveal, one always reserved for the ending), and a catalog of every `[IMAGE_TRIGGER]` in the game. Agents that can make video also get up to three 5-second `[VIDEO_TRIGGER]` clips, which animate the still just generated. Triggers carry "do not reveal undiscovered information" guards.

The **website's** key art is true pixel art: `assets/blackroad-keyart.png` is 256×192, a 30-color palette with Bayer dithering, shown with `image-rendering: pixelated`. It is rendered from `_build/keyart-src.svg` by `_build/pixelize.html` (open it through a local server and call `pixelize()`).

## 8. Deploying the backend (you must do this; nothing is live yet)

The frontend works now and honestly shows **HIGH SCORE SYSTEM OFFLINE** until these steps are done. Until then, agents play in LOCAL mode.

**You need:** a free Cloudflare account. No DNS change is required: the worker gets a `*.workers.dev` URL. A custom domain is optional.

```bash
cd musecade/_worker
npm install                                   # installs wrangler (dev dependency)
npx wrangler login                            # opens a browser to authorize your Cloudflare account
npx wrangler d1 create musecade               # prints a database_id
# paste that database_id into wrangler.toml (replace REPLACE_WITH_YOUR_D1_DATABASE_ID)
npx wrangler d1 execute musecade --remote --file=schema.sql
npx wrangler secret put IP_SALT               # any long random string; salts IP hashes for rate limiting
npx wrangler deploy                           # prints https://musecade-api.<your-subdomain>.workers.dev
```

Then point the site at it:

```bash
# in musecade/config.json set:  "api_base": "https://musecade-api.<your-subdomain>.workers.dev"
python3 musecade/_build/build.py              # regenerates the "Leaderboard API:" line in musecade.md
git add -A && git commit -m "Musecade: connect leaderboard" && git push
```

Check it: `curl https://musecade-api.<sub>.workers.dev/health` should return `{"ok":true}`, and the homepage board should change from OFFLINE to "NO RUNS RECORDED YET".

**Optional custom domain** (for example `api.lorenzen.ai`): in the Cloudflare dashboard, Workers → musecade-api → Settings → Domains & Routes. This requires lorenzen.ai's DNS to be on Cloudflare, since it's on GitHub Pages DNS today, so skip it unless you move DNS. `workers.dev` works fine.

**Environment:** `DB` (the D1 binding, in `wrangler.toml`), `PUBLIC_SITE` (a var, in `wrangler.toml`), `IP_SALT` (a secret). There are no other accounts, keys or env vars.

**After changing `events.json`** (points, new events, new endings), redeploy the worker (`npx wrangler deploy`). It bundles `events.json` at build time.

## 9. Development

```bash
python3 musecade/_build/build.py            # validate everything and regenerate musecade.md / homepage count
python3 musecade/_build/build.py --check    # CI-style: fail if invalid or stale
node musecade/_worker/test/run-tests.mjs    # 20 API tests on an in-memory SQLite D1 shim (Node 22+)
node musecade/_playtest/replay.mjs          # replay the four playtests through the real scoring rules
cd musecade/_worker && npx wrangler dev     # run the real worker locally (with --local D1)
```

The validator checks that every event or ending ID in the Markdown exists, that every scored event is mentioned somewhere the DM will read it, that endings have matching sections and images, that trigger blocks are well-formed and catalogued, and that no Liquid syntax (double curly braces, or a curly brace followed by a percent sign) has slipped into published Markdown, which would break the GitHub Pages build.

`_build/`, `_worker/` and `_playtest/` start with `_`, so Jekyll does not publish them.

## 10. Adding another game

1. Create `musecade/<slug>/` with `adventure.md` (bootloader and load table), `index.html` (a cabinet page; copy The Black Road's), `events.json` (score table: `rules`, `paths`, `events`, `endings`), `metadata.json`, and the game's Markdown files.
2. Import its `events.json` in `_worker/src/index.js` and add it to `GAMES`.
3. Replace a "coming soon" entry in `games.json` with the live entry (`status: "live"`, `command: "#<slug>"`, `manifest`).
4. On the homepage, turn a dark cabinet into a lit one (copy the Game 001 `<article>`), and add a filter tab to the high-score board.
5. Run `python3 musecade/_build/build.py` (which updates `musecade.md` and the game count), redeploy the worker, and commit.

The platform protocol doesn't change: new hashtags come from the registry.

## 11. Adding an achievement

1. Add an `ACH_*` entry to `<game>/events.json`: `category: "achievement"`, `points`, `title`, `description`, and optionally `hidden`, `requires`, `requires_any`, `excludes`, `min_act`, `max_act`.
2. Add a row with the exact condition to `game/achievements.md`. If it's visible, add it to the cabinet page's achievement list.
3. Build, then redeploy the worker.

## 12. Adding an ending

1. Add `ENDING_<ID>` to `events.json` → `endings` with `title`, `points`, `fate` (`lives`, `dies`, `sacrificed` or `either`), and prerequisites.
2. Add a `## <TITLE>` section to `game/endings.md` with the ID and fate line, the moment, the epilogue notes, and an `IMG_ENDING_<ID>` trigger.
3. Make the ending reachable: say in an act file what the player does to get there.
4. Build (it fails if the title, section and image don't line up), then redeploy the worker.

## 13. Limitations (read these)

- **No proof of play.** The server guarantees that scores come only from canonical events, in a sane order, within bounds. It cannot prove the events happened, because the agent is the only witness and the human controls the agent. Someone determined can tell their agent to report events they didn't earn. That's the same trust model as any client-reported arcade score. Leaderboard moderation (deleting a row) is a manual D1 query.
- **Agent behavior varies.** Pacing, image quality, faithful loading, honest reporting and remembering hidden state all depend on Muse. The files are explicit, but not enforceable.
- **Hashtags persist only in-conversation** unless the user adds the standing instruction.
- **Link-mode runs** skip the minimum-duration check, since there's no trusted start time. They pass every other validation.
- **The key art is pixel art rendered from an SVG** made for this project, not hand-painted. Replace `assets/blackroad-keyart.png` any time.
- **`.md` files with YAML frontmatter** are not served raw by GitHub Pages. None of the Musecade files use frontmatter. Keep it that way, or use the `.raw` passthrough pattern from MINDS.
