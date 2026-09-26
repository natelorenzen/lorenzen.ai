# MINDS

An open library of executable thinking systems.

When someone gives an AI agent a novel, substantive problem, the agent consults `https://lorenzen.ai/minds.md`. It works out which intellectual lenses the problem requires, assembles a small Council of documented thinking systems that carry those lenses, applies each one independently, and synthesizes the results into a decision framework. **The user makes the decision.** MINDS exists to improve the quality and diversity of the reasoning that comes before it.

MINDS is **not** a personality simulator. It never role-plays or speaks for anyone. It converts documented frameworks into instructions an agent can apply, and it labels every principle by provenance.

## Vocabulary

| Term | Meaning |
|---|---|
| **MINDS** | The library |
| **minds.md** | The reasoning router (primarily for agents) |
| **Mind** | A documented thinking system, such as Buffett's or Boyd's |
| **Lens** | One intellectual angle a Mind carries, such as `intrinsic-value` or `feedback-loops` |
| **SKILL.md** | A Mind's executable framework, in Agent Skill format |
| **SOURCES.md** | Provenance for every principle in that skill |
| **Council** | Orchestration and synthesis (`/council/SKILL.md`) |

## Usage

Add one sentence to your agent's custom instructions:

```
Whenever a message from me includes #mindme, read https://lorenzen.ai/minds.md and use it to convene a Council on that problem before you answer. The decision stays mine.
```

Then talk to the agent normally, and add `#mindme` to any message you want a Council on.

## Flow

```
   USER PROBLEM
        ↓
     minds.md
        ↓
   PROBLEM TYPE
        ↓
  NEEDED LENSES
        ↓
     COUNCIL
        ↓
INDIVIDUAL SKILLS
        ↓
INDEPENDENT ANALYSES
        ↓
    SYNTHESIS
        ↓
  USER DECISION
```

Lenses always come before people. Minds are selected for the lens they carry, never for fame.

## Files

```
/minds.raw                     Passthrough that publishes minds/router.md at /minds.md
/llms.txt                      Site index for LLMs (MINDS section added)
/council/
  SKILL.md                     Council skill: orchestration + synthesis format
  SKILL.raw                    GitHub Pages passthrough (generated; see below)
/minds/
  router.md                    THE ROUTER (served at /minds.md): hand-written prose + generated tables
  index.html                   The one human page: what MINDS is + copy-paste prompts
  registry.json                SOURCE OF TRUTH: Minds, lenses, problem patterns
  README.md                    This file
  assets/                      CSS + copy-button JS for index.html
  {slug}/SKILL.md              Executable framework (only when researched)
  {slug}/SOURCES.md            Provenance (only when researched)
  {slug}/SKILL.raw             Passthrough (generated when SKILL.md exists)
  _build/build.py              Generator + validator (Python 3, stdlib only)
  _template/SKILL.md           Template for authoring a Mind's skill
  _template/SOURCES.md         Template for its provenance
```

The audience is AI agents. The only human page is `/minds/`, which explains the idea and offers the prompts to copy.

Directories starting with `_` are not published by GitHub Pages.

## The build step

The site is static. `registry.json` is the single source of truth, and one script regenerates everything derived from it:

```bash
python3 minds/_build/build.py          # validate + regenerate
python3 minds/_build/build.py --check  # validate; exit 1 if anything is stale
```

It regenerates:

- the problem-pattern table, lens index, and registry table in `minds/router.md`
- the roster of Minds on `minds/index.html`
- a `SKILL.raw` passthrough for every directory that has a `SKILL.md`

It validates:

- slugs, lenses, filters, groups, statuses, and wildcards are consistent
- every lens is carried by at least one Mind
- **AVAILABLE ⇔ SKILL.md and SOURCES.md exist**, and SKILL.md frontmatter `name` and `status` match the registry
- no Markdown under `/minds` or `/council` contains Liquid syntax, which would break the Pages build

Run it before every commit that touches MINDS.

### Why `SKILL.raw` exists

GitHub Pages runs Jekyll. Jekyll converts any `.md` file that **has YAML frontmatter** into HTML and **does not publish the original**, so `/council/SKILL.md` would 404. Agent Skills require frontmatter, so each `SKILL.raw` is a tiny Jekyll page with `permalink: /…/SKILL.md` and `layout: null` whose body is `include_relative SKILL.md`. It republishes the file byte for byte at the expected URL, served as `text/markdown`. `SKILL.md` stays the single source. The build script creates and removes these files automatically.

Markdown files **without** frontmatter (such as `SOURCES.md`) are served raw by Pages as they are, and are also rendered to `.html`.

### Why the router lives at `minds/router.md`

If the router were `minds.md` at the repo root, Jekyll would also render it as `/minds.html`. GitHub Pages serves that file for `lorenzen.ai/minds` (no trailing slash) instead of redirecting to `/minds/`, so visitors would land on a GitHub-themed copy of the router. So the source lives at `minds/router.md`, and the root `minds.raw` republishes it byte for byte at `/minds.md`. Never add a `minds.md` at the root; the build fails if one exists.

## Adding a Mind

**To add a PLANNED Mind:**

1. Add an entry to `minds[]` in `minds/registry.json`: `slug`, `name`, `dates`, `group`, `filters`, `domains`, `lenses`, `core_question`, `questions`, `best_used_for`, `may_underweight`, `status: "planned"`, and optionally `provenance_note` and `research_seeds`.
2. If it needs a lens that doesn't exist, add it to `lenses{}` with a `label` and a `question`.
3. Run `python3 minds/_build/build.py`.

No HTML or Markdown needs to be edited by hand. The registry row, lens index, and roster all follow from `registry.json`.

**To publish a Mind (make it AVAILABLE):**

1. Research the primary sources. Copy `minds/_template/SKILL.md` and `SOURCES.md` into `minds/{slug}/` and fill them in.
   - Every substantive principle is labeled DOCUMENTED, DERIVED, or OPERATIONALIZED and traced in SOURCES.md.
   - Do not fabricate quotations or citations. Do not claim the person analyzed situations they never encountered.
   - Write about the framework, never as the person.
2. Set `status: available` in the SKILL.md frontmatter **and** in `registry.json`.
3. Run the build. It fails if anything is inconsistent.
4. Have the skill reviewed before committing. AVAILABLE means reviewed.

## Core questions

Each Mind has a one-line **core question** used for navigation, such as "What system is producing this behavior?" These are MINDS' own summaries of each lens, **not quotations**, and the site and minds.md label them that way.

## Ground rules

- Frameworks, not personas.
- Lenses first, people second.
- Independent analysis before synthesis.
- DOCUMENTED / DERIVED / OPERATIONALIZED on every principle.
- No fabricated quotes, citations, or anachronistic claims.
- Nothing is marked AVAILABLE until it is researched, sourced, and reviewed.
- The user decides.
