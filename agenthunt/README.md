# AGENTHUNT

**Scavenger hunts judged by your AI agent.**

> AgentHunt is an independent project by Nate Lorenzen, for entertainment only. It is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc., Muse, or any Meta product, or by any city, landmark, venue or brand named in a hunt.

A player points Muse at `https://lorenzen.ai/agenthunt/agenthunt.md`, types a hunt's hashtag (`#losangeles`, `#rainyday`, …), photographs the 10 finds, and uploads each photo to the chat. The agent checks each photo's metadata (capture time after the hunt started; for city hunts, GPS inside the city), grades the find GREAT / GOOD / NO, and at `DONE` sends the finds to the leaderboard. The server recalculates the score. **Photos and locations never leave the chat**: the server only receives a name, find IDs with grades, and a metadata flag.

- Human site: https://lorenzen.ai/agenthunt/
- Agent rules (router): `agenthunt.md`
- Hunts (source of truth): `hunts.json` → generated `hunts/<slug>.md`
- Leaderboard: Cloudflare Worker `agenthunt-api` + D1 database `agenthunt` (`_worker/`)
- LINK-mode submit page: `submit/`

## Scoring

GREAT = the find's points, GOOD = half, +50 per find that shows the run's random proof detail, +500 for all 10. A hunt is **unranked** if the agent couldn't read photo metadata (`metadata: 0`), had no finds, or (API mode) finished in under 15 minutes. The leaderboard shows only rank, name and score.

## Workflow

After editing `hunts.json`, `agenthunt.md`, `index.html` or the worker:

```
python3 agenthunt/_build/build.py
node agenthunt/_worker/test/run-tests.mjs
```

If `hunts.json` changed, redeploy the worker **before** pushing, so the live server knows the new finds.

## Deploying the backend (first time)

```
cd agenthunt/_worker
npm install
npx wrangler d1 create agenthunt          # paste the database_id into wrangler.toml
npx wrangler d1 execute agenthunt --remote --file=schema.sql
npx wrangler secret put IP_SALT            # any long random string
npx wrangler deploy
```

Then set `api_base` in `agenthunt/config.json` to the worker URL, run the build (it writes the `Leaderboard API:` line into `agenthunt.md`), and push.

## Limitations

- Everything depends on the agent being able to read photo metadata. If it can't, hunts still play and score but are unranked.
- Scores are only as honest as the agent's grades, and a LINK-mode submit URL can be edited by hand; the server still rejects unknown finds and grades, caps every find at once, and never accepts a total.
