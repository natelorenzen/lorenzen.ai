#!/usr/bin/env python3
"""
AGENTHUNT build script.

Sources of truth:
  agenthunt/hunts.json     every hunt, its finds and points (also bundled by the worker)
  agenthunt/config.json    the leaderboard API base (empty = offline)

Generates:
  agenthunt/hunts/<slug>.md    one file per hunt, fetched by the agent on its hashtag
  agenthunt/agenthunt.md       GENERATED blocks: api line, AVAILABLE HUNTS, boot screen
  agenthunt/index.html         GENERATED blocks: hunt count, hunt cards, leaderboard tabs

Validates hunts.json (IDs, points, areas, commands) and that no published
Markdown contains Liquid syntax (it would break the GitHub Pages build).

Usage:
  python3 agenthunt/_build/build.py           # validate and write
  python3 agenthunt/_build/build.py --check   # validate; exit 1 if anything is stale

Standard library only.
"""

import hashlib
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
AH = ROOT / "agenthunt"
BASE_URL = "https://lorenzen.ai/agenthunt"
CHECK = "--check" in sys.argv
errors, written, stale = [], [], []

ID_RE = re.compile(r"^[A-Z0-9_]{3,48}$")
SLUG_RE = re.compile(r"^[a-z0-9]{3,24}$")


def fail(msg):
    errors.append(msg)


def write_if_changed(path, new):
    old = path.read_text(encoding="utf-8") if path.exists() else None
    if old == new:
        return
    if CHECK:
        stale.append(str(path.relative_to(ROOT)))
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(new, encoding="utf-8")
    written.append(str(path.relative_to(ROOT)))


def replace_block(text, name, body, path):
    pat = re.compile(rf"(<!-- BEGIN GENERATED:{name} -->\n)(.*?)(<!-- END GENERATED:{name} -->)", re.S)
    if not pat.search(text):
        fail(f"{path.relative_to(ROOT)}: missing GENERATED:{name} markers")
        return text
    return pat.sub(lambda m: m.group(1) + body + m.group(3), text)


def no_liquid(path, text):
    if "{{" in text or "{%" in text:
        fail(f"{path.relative_to(ROOT)}: contains Liquid syntax ({{{{ or {{%)")


# ------------------------------------------------------------------ load + validate

data = json.loads((AH / "hunts.json").read_text(encoding="utf-8"))
config = json.loads((AH / "config.json").read_text(encoding="utf-8"))
api = (config.get("api_base") or "").rstrip("/")
rules = data["rules"]
hunts = data["hunts"]

if set(rules["grades"]) != {"GREAT", "GOOD"}:
    fail("rules.grades must be exactly GREAT and GOOD")
if len({p["id"] for p in data["proofs"]}) != len(data["proofs"]) or len(data["proofs"]) < 6:
    fail("proofs: need at least 6, with unique ids")

slugs = set()
for h in hunts:
    s = h.get("slug", "")
    where = f"hunt {s or '?'}"
    if not SLUG_RE.match(s):
        fail(f"{where}: bad slug")
    if s in slugs:
        fail(f"{where}: duplicate slug")
    slugs.add(s)
    if h.get("command") != f"#{s}":
        fail(f"{where}: command must be #{s}")
    if h.get("kind") not in {"city", "theme"}:
        fail(f"{where}: kind must be city or theme")
    for k in ("title", "tagline", "window_hours", "finds"):
        if not h.get(k):
            fail(f"{where}: missing {k}")
    if h["kind"] == "city":
        a = h.get("area") or {}
        lat, lon = a.get("lat", []), a.get("lon", [])
        if not a.get("name") or len(lat) != 2 or len(lon) != 2 or not (-90 <= lat[0] < lat[1] <= 90) or not (-180 <= lon[0] < lon[1] <= 180):
            fail(f"{where}: city hunts need area.name and ordered lat/lon ranges")
    elif "area" in h:
        fail(f"{where}: themed hunts have no area")
    finds = h.get("finds", [])
    if len(finds) != 10:
        fail(f"{where}: needs exactly 10 finds (the agent's screens assume 10)")
    ids = [f.get("id", "") for f in finds]
    if len(set(ids)) != len(ids):
        fail(f"{where}: duplicate find IDs")
    for f in finds:
        if not ID_RE.match(f.get("id", "")):
            fail(f"{where}: bad find id {f.get('id')!r}")
        if not isinstance(f.get("points"), int) or f["points"] <= 0 or f["points"] % 50:
            fail(f"{where}.{f.get('id')}: points must be a positive multiple of 50")
        if not f.get("title") or not f.get("look"):
            fail(f"{where}.{f.get('id')}: needs title and look")

if errors:
    print("\n".join("ERROR: " + e for e in errors))
    sys.exit(1)


def max_score(h):
    return sum(f["points"] + rules["proof_bonus"] for f in h["finds"]) + rules["sweep_bonus"]


# ------------------------------------------------------------------ hunts/<slug>.md

def hunt_md(h):
    lines = [
        f"# AGENTHUNT · {h['title'].upper()}",
        "",
        f"Hunt file for `{h['command']}`. The judging rules are in `{BASE_URL}/agenthunt.md`; follow them. This file gives the hunt's finds, window and area.",
        "",
        f"- **Slug:** `{h['slug']}`",
        f"- **Kind:** {'City hunt' if h['kind'] == 'city' else 'Themed day'}",
        f"- **Tagline:** {h['tagline']}",
        f"- **Hunt window:** {h['window_hours']} hours from the start time",
    ]
    if h["kind"] == "city":
        a = h["area"]
        lines += [
            f"- **Area:** {a['name']}",
            f"- **Place check:** latitude between {a['lat'][0]} and {a['lat'][1]}, and longitude between {a['lon'][0]} and {a['lon'][1]}. Say only `inside {a['name']}` or `outside {a['name']}`.",
        ]
    else:
        lines.append("- **Place check:** none. This is a themed day, playable anywhere. Never mention where a photo was taken.")
    lines += [
        f"- **Best possible score:** {max_score(h):,}",
        "",
        "## Finds",
        "",
        "| # | ID | Points | Find | What counts |",
        "|---|---|---|---|---|",
    ]
    for i, f in enumerate(h["finds"], 1):
        lines.append(f"| {i} | `{f['id']}` | {f['points']} | {f['title']} | {f['look']} |")
    lines += [
        "",
        f"GREAT earns the full points, GOOD earns half. +{rules['proof_bonus']} on a find that also shows the run's proof detail. +{rules['sweep_bonus']} for all 10 finds.",
        "",
    ]
    if h["slug"] == "roadtrip":
        lines += ["**Safety:** the driver never takes photos. Only passengers, or the driver when parked. If a photo looks like it was taken from the driver's seat while moving, don't count it, and say why in one friendly line.", ""]
    if h["slug"] == "beachday":
        lines += ["**Safety:** remind the player once to look, not take, with tide-pool creatures, and to watch the tide.", ""]
    lines.append("Show the player the finds as a numbered list (title and points only, no IDs), then continue with §3 of the judging rules.")
    return "\n".join(lines) + "\n"


stamps = {}
for h in hunts:
    body = hunt_md(h)
    path = AH / "hunts" / f"{h['slug']}.md"
    no_liquid(path, body)
    write_if_changed(path, body)
    stamps[h["slug"]] = hashlib.sha256(body.encode()).hexdigest()[:7]

# ------------------------------------------------------------------ agenthunt.md

router = AH / "agenthunt.md"
text = router.read_text(encoding="utf-8")
text = replace_block(text, "api", f"Leaderboard API: {api or 'OFFLINE'}\n", router)

blocks = []
for h in hunts:
    blocks.append(
        f"### {h['command']}\n\nTitle: {h['title']}\nKind: {'City' if h['kind'] == 'city' else 'Themed day'}\n"
        f"Hunt:\n{BASE_URL}/hunts/{h['slug']}.md?v={stamps[h['slug']]}\n"
    )
text = replace_block(text, "hunts", "\n".join(blocks), router)

cities = [h for h in hunts if h["kind"] == "city"]
themes = [h for h in hunts if h["kind"] == "theme"]
width = max(len(h["command"]) for h in hunts)
boot = ["```", "AGENTHUNT loaded. I'm your judge.", "", f"{len(hunts)} hunts available.", "", "CITIES"]
boot += [f"{h['command'].ljust(width)}  {h['title']}" for h in cities]
boot += ["", "THEMED DAYS"]
boot += [f"{h['command'].ljust(width)}  {h['title']}" for h in themes]
boot += ["", "Type a hashtag to start a hunt. Example: #losangeles", "```", ""]
text = replace_block(text, "boot", "\n".join(boot), router)
no_liquid(router, text)
write_if_changed(router, text)

# ------------------------------------------------------------------ index.html

page = AH / "index.html"
if page.exists():
    ht = page.read_text(encoding="utf-8")
    ht = replace_block(
        ht, "count",
        f'      <span class="live"><span class="led" aria-hidden="true"></span>{len(hunts)} HUNTS OPEN</span>\n', page)

    def card(h, n):
        e = html.escape
        facts = [f"10 FINDS", f"{h['window_hours']}-HOUR WINDOW", "AREA: " + h["area"]["name"].upper() if h["kind"] == "city" else "PLAY ANYWHERE"]
        finds = "\n".join(f'              <li><span>{e(f["title"])}</span><b>{f["points"]}</b></li>' for f in h["finds"])
        return f'''      <article class="hunt {h['kind']}" aria-labelledby="h-{h['slug']}">
        <div class="hunt-top">
          <div class="hunt-no">{'CITY' if h['kind'] == 'city' else 'THEMED DAY'} {n:02d}</div>
          <h3 class="hunt-title" id="h-{h['slug']}">{e(h['title'].upper())}</h3>
        </div>
        <div class="hunt-art"><canvas data-art="{h['slug']}" width="80" height="50" role="img" aria-label="Pixel art: {e(h['title'])}"></canvas></div>
        <div class="hunt-panel">
          <p class="hunt-tag">{e(h['tagline'])}</p>
          <ul class="hunt-facts">
{chr(10).join(f"            <li>{e(x)}</li>" for x in facts)}
          </ul>
          <span class="cmd">{h['command']}</span>
          <button type="button" class="btn" data-summon="{h['command']}">START HUNT</button>
          <details class="finds">
            <summary>SEE THE 10 FINDS</summary>
            <ol>
{finds}
            </ol>
          </details>
        </div>
      </article>
'''

    ht = replace_block(ht, "cities", "".join(card(h, i) for i, h in enumerate(cities, 1)), page)
    ht = replace_block(ht, "themes", "".join(card(h, i) for i, h in enumerate(themes, 1)), page)
    tabs = "".join(
        f'          <button type="button" class="tab" data-hunt="{h["slug"]}" aria-pressed="false">{html.escape(h["title"].upper())}</button>\n'
        for h in hunts)
    ht = replace_block(ht, "tabs", tabs, page)
    write_if_changed(page, ht)

# ------------------------------------------------------------------ report

if errors:
    print("\n".join("ERROR: " + e for e in errors))
    sys.exit(1)
if CHECK and stale:
    print("STALE (run build.py):\n  " + "\n  ".join(stale))
    sys.exit(1)
print(f"AgentHunt: {len(hunts)} hunts OK · API {api or 'OFFLINE'}")
for w in written:
    print("  wrote", w)
