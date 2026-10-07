# BLACK FRIDAY READINESS

A Black Friday diagnostic that the user's own AI agent runs on their brand.

The user prompts their agent (Muse or any agent that can browse) with `lorenzen.ai/blackfriday` and a domain. The agent follows `blackfriday.md`: it works out the days left, reviews the brand's public site, its Meta Ad Library and Google Ads Transparency results, its "brand + black friday" search results, and 3 to 5 competitors, then returns a Black Friday Readiness Report in chat: a score out of 100, what's going well, gaps (top three FIX FIRST), a paid media read, competitor watch, strategic questions (tied to MINDS lenses), a dated action plan, and what it couldn't see.

Every finding is labeled SEEN / TOLD / INFERRED / NOT CHECKED. The agent never invents ads, offers, prices or scores, and never logs in, buys, or submits forms.

## Usage

```
lorenzen.ai/blackfriday: run a Black Friday readiness report for yourbrand.com
```

Or as a standing instruction with the `#bfcm` trigger (`#blackfriday` is taken by the Musecade game):

```
Whenever a message from me includes #bfcm, read https://lorenzen.ai/blackfriday.md and run the Black Friday Readiness Report on the brand or domain in that message.
```

## Files

```
/blackfriday.raw            Passthrough that publishes blackfriday/router.md at /blackfriday.md
/blackfriday/
  router.md                 THE PROTOCOL (served at /blackfriday.md)
  index.html                Human page; also carries a short "For AI agents" summary,
                            since agents given lorenzen.ai/blackfriday land here first
  assets/                   CSS + copy-button JS
  README.md                 This file
```

Same layout as MINDS, for the same reason: a root `blackfriday.md` would make Jekyll also render `/blackfriday.html`, which GitHub Pages would serve at `/blackfriday` instead of the human page. Never add a `blackfriday.md` at the root.

## Editing

- The protocol is plain Markdown with no frontmatter. Never use Liquid syntax (`{{` or `{%`) in it; it breaks the Pages build.
- Keep the protocol free of tool-call instructions (describe what to look at, not which tool to call); Muse flags those as injection.
- Dates: §2 of `router.md` and the "For AI agents" box and countdown in `index.html` hardcode Black Friday 2026 (Nov 27). Update all three each year.
