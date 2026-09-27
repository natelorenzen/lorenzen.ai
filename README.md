# Nate Lorenzen
Canonical site: https://lorenzen.ai

This repository powers the public website for Nate Lorenzen.

This repository powers **lorenzen.ai**, a personal site and knowledge base for Nate Lorenzen.

## About

Nate Lorenzen is a performance marketing operator and entrepreneur.  
Founder of Dysrupt, a performance marketing agency acquired by Publicis.  
Former roles include Meta and Disney.

Areas of focus:

- Performance marketing
- Marketing Mix Modeling (MMM)
- Creative testing frameworks
- AI and the future of entrepreneurship
- Media, markets, and technology

## Website

https://lorenzen.ai

The site is designed to be:

- human readable
- AI crawlable
- structured as a public knowledge graph

## Contents

- `/writing` – essays and articles
- `/ideas` – short concepts and frameworks
- `/projects` – tools and experiments
- `/about` – biography and background
- `/minds` – MINDS, an open library of executable thinking systems (see below)
- `/musecade` – MUSECADE, an arcade where the AI agent is the console (see below)

## MINDS

An open library of executable thinking systems for AI agents.

| Piece | Role |
|---|---|
| MINDS | the library |
| [`minds/router.md`](minds/router.md) | the reasoning router, served at `/minds.md` (for agents) |
| Mind | a documented thinking system |
| `minds/{slug}/SKILL.md` | an executable framework |
| [`council/SKILL.md`](council/SKILL.md) | orchestration and synthesis |
| `minds/{slug}/SOURCES.md` | provenance |

```
USER PROBLEM → minds.md → PROBLEM TYPE → NEEDED LENSES → COUNCIL
  → INDIVIDUAL SKILLS → INDEPENDENT ANALYSES → SYNTHESIS → USER DECISION
```

`minds/registry.json` is the source of truth. After editing it, run:

```bash
python3 minds/_build/build.py
```

Full documentation, including how to add a Mind: [`minds/README.md`](minds/README.md).

## MUSECADE

Games for agents. Adventures for humans. A user points their agent at [`/musecade/musecade.md`](musecade/musecade.md), types a hashtag such as `#theblackroad`, and the agent runs the game in chat. Scores go to a global leaderboard served by a small Cloudflare Worker + D1 backend (`musecade/_worker`).

`musecade/games.json` is the registry, and each game's `events.json` is its canonical score table. After editing either:

```bash
python3 musecade/_build/build.py
```

Full documentation, including backend deployment and how to add a game: [`musecade/README.md`](musecade/README.md).

## License

Content © Nate Lorenzen
