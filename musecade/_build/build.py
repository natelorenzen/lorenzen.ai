#!/usr/bin/env python3
"""
MUSECADE build script.

Sources of truth:
  musecade/games.json            the game registry
  musecade/config.json           the leaderboard API base (empty = offline)
  musecade/<slug>/events.json    each game's canonical score table (also bundled by the worker)

Generates (between <!-- BEGIN GENERATED:x --> / <!-- END GENERATED:x --> markers):
  musecade/musecade.md           api line, AVAILABLE GAMES, boot screen
  musecade/index.html            "N GAME(S) AVAILABLE" in the status bar

Validates, for every live game:
  - registry fields, manifest and metadata files exist
  - events.json integrity (categories, requires/excludes/requires_any point at real IDs)
  - every event/ending ID mentioned in the game's Markdown exists in events.json
  - every event and ending in events.json is mentioned somewhere in the Markdown (no orphans)
  - ending titles in game/endings.md match events.json
  - [IMAGE_TRIGGER] / [VIDEO_TRIGGER] blocks are well-formed, unique, and catalogued
  - no Liquid syntax in published Markdown (it would break the GitHub Pages build)

Usage:
  python3 musecade/_build/build.py           # validate and write
  python3 musecade/_build/build.py --check   # validate; exit 1 if anything is stale

Standard library only.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MC = ROOT / "musecade"
BASE_URL = "https://lorenzen.ai/musecade"

CATEGORIES = {"progress", "discovery", "puzzle", "encounter", "social", "companion", "achievement"}
FATES = {"lives", "dies", "sacrificed", "either"}
ID_RE = re.compile(r"\b((?:REACH|DISCOVER|PUZZLE|ENC|SOCIAL|RECRUIT|CALEN|WREN|OSWIN|LISS|COMPANION|ACH|ENDING|QUEEN)_[A-Z0-9_]*[A-Z0-9])(_?\*|\b)")
# Names that look like event IDs but are encounter/section names, not scored events.
NON_EVENT_TOKENS = {"ENC_ROAD", "ENC_BRIDGE", "ENC_DROWNED", "ENC_CINDER", "ENC_ORUN", "ENC_THRONE"}

errors, warnings, written, stale = [], [], [], []
CHECK = "--check" in sys.argv


def fail(msg):
    errors.append(msg)


def replace_block(text, name, body, path):
    pat = re.compile(rf"(<!-- BEGIN GENERATED:{name} -->\n)(.*?)(<!-- END GENERATED:{name} -->)", re.S)
    if not pat.search(text):
        fail(f"{path.relative_to(ROOT)}: missing GENERATED:{name} markers")
        return text
    return pat.sub(lambda m: m.group(1) + body + m.group(3), text)


def write_if_changed(path, new):
    old = path.read_text(encoding="utf-8")
    if old == new:
        return
    if CHECK:
        stale.append(str(path.relative_to(ROOT)))
    else:
        path.write_text(new, encoding="utf-8")
        written.append(str(path.relative_to(ROOT)))


def no_liquid(path):
    t = path.read_text(encoding="utf-8")
    if "{{" in t or "{%" in t:
        fail(f"{path.relative_to(ROOT)}: contains Liquid syntax ({{{{ or {{%) which breaks Jekyll")


# ------------------------------------------------------------------ registry

games = json.loads((MC / "games.json").read_text())
config = json.loads((MC / "config.json").read_text())
live = [g for g in games if g.get("status") == "live"]
ids = [g["id"] for g in games]
if len(ids) != len(set(ids)):
    fail("games.json: duplicate game ids")
for g in live:
    for k in ("id", "title", "slug", "command", "genre", "duration", "version", "manifest"):
        if not g.get(k):
            fail(f"games.json {g.get('id')}: live game missing '{k}'")
    if g.get("command") != "#" + str(g.get("slug")):
        fail(f"games.json {g['id']}: command must be '#<slug>'")
    if g.get("manifest") != f"{BASE_URL}/{g['slug']}/adventure.md":
        fail(f"games.json {g['id']}: manifest must be {BASE_URL}/{g['slug']}/adventure.md")


# ------------------------------------------------------------------ per game

def check_game(g):
    slug = g["slug"]
    gdir = MC / slug
    for f in ("adventure.md", "index.html", "metadata.json", "events.json"):
        if not (gdir / f).exists():
            fail(f"{slug}: missing {f}")
    if errors:
        return None
    meta = json.loads((gdir / "metadata.json").read_text())
    for f in meta.get("files", []):
        if not (gdir / f).exists():
            fail(f"{slug}/metadata.json lists missing file {f}")
    adventure = (gdir / "adventure.md").read_text()
    for f in meta.get("boot_files", []):
        if f"`{f}`" not in adventure:
            fail(f"{slug}: boot file {f} is not named in adventure.md's load table")

    ev = json.loads((gdir / "events.json").read_text())
    events, endings = ev["events"], ev["endings"]
    known = set(events) | set(endings)
    for eid, e in events.items():
        if e.get("category") not in CATEGORIES:
            fail(f"{slug} {eid}: bad category {e.get('category')}")
        if not isinstance(e.get("points"), int) or e["points"] < 0:
            fail(f"{slug} {eid}: points must be a non-negative integer")
        for key in ("requires", "requires_any", "excludes"):
            for ref in e.get(key, []):
                if ref not in events:
                    fail(f"{slug} {eid}: {key} references unknown event {ref}")
    for eid, e in endings.items():
        if e.get("fate") not in FATES:
            fail(f"{slug} {eid}: bad fate")
        for key in ("requires", "requires_any"):
            for ref in e.get(key, []):
                if ref not in events:
                    fail(f"{slug} {eid}: {key} references unknown event {ref}")

    md_files = sorted(gdir.rglob("*.md"))
    mentioned = set()
    image_ids, video_ids = {}, {}
    for p in md_files:
        no_liquid(p)
        text = p.read_text(encoding="utf-8")
        for m in ID_RE.finditer(text):
            token, wildcard = m.group(1), m.group(2)
            if wildcard:
                mentioned.update(k for k in known if k.startswith(token + "_") or k.startswith(token))
                continue
            if token in NON_EVENT_TOKENS:
                continue
            if token not in known:
                fail(f"{p.relative_to(ROOT)}: unknown event/ending ID {token}")
            mentioned.add(token)
        for block in re.findall(r"\[IMAGE_TRIGGER\](.*?)\[/IMAGE_TRIGGER\]", text, re.S):
            mid = re.search(r"^ID:\s*(\S+)", block, re.M)
            mtype = re.search(r"^TYPE:\s*(\S+)", block, re.M)
            if not mid or not mtype or "SCENE:" not in block:
                fail(f"{p.relative_to(ROOT)}: IMAGE_TRIGGER missing ID, TYPE or SCENE")
                continue
            if mid.group(1) in image_ids:
                fail(f"{slug}: duplicate IMAGE_TRIGGER {mid.group(1)}")
            image_ids[mid.group(1)] = p
            if "Do not reveal" not in block and mtype.group(1) not in ("ENDING", "DEATH"):
                warnings.append(f"{mid.group(1)}: no 'Do not reveal undiscovered information' line")
        for block in re.findall(r"\[VIDEO_TRIGGER\](.*?)\[/VIDEO_TRIGGER\]", text, re.S):
            mid = re.search(r"^ID:\s*(\S+)", block, re.M)
            pair = re.search(r"^PAIRED WITH:\s*(\S+)", block, re.M)
            if not mid or not pair or "MOTION:" not in block:
                fail(f"{p.relative_to(ROOT)}: VIDEO_TRIGGER missing ID, PAIRED WITH or MOTION")
                continue
            video_ids[mid.group(1)] = pair.group(1)

    for k in sorted(known - mentioned):
        fail(f"{slug}: {k} is in events.json but never mentioned in the game files (the DM would never report it)")

    catalog = (gdir / "game" / "image-triggers.md").read_text()
    for iid in image_ids:
        if f"`{iid}`" not in catalog and not (iid.startswith("IMG_ENDING_") and "`IMG_ENDING_*`" in catalog):
            fail(f"{slug}: {iid} missing from the trigger catalog in image-triggers.md")
    for vid, pair in video_ids.items():
        if pair not in image_ids:
            fail(f"{slug}: {vid} is paired with unknown image {pair}")
        if f"`{vid}`" not in catalog:
            fail(f"{slug}: {vid} missing from the clip catalog in image-triggers.md")

    endings_md = (gdir / "game" / "endings.md").read_text()
    headings = set(re.findall(r"^## (.+)$", endings_md, re.M))
    for eid, e in endings.items():
        if e["title"] not in headings:
            fail(f"{slug}: ending {eid} title '{e['title']}' has no '## {e['title']}' section in endings.md")
        img = "IMG_DEATH" if e["fate"] == "dies" and eid.endswith("SNOW") else "IMG_" + eid
        if img not in image_ids:
            fail(f"{slug}: ending {eid} has no image trigger {img}")

    ceiling = sum(e["points"] for e in events.values()) + max(e["points"] for e in endings.values()) + ev["rules"]["survival_bonus"]
    secrets = sum(1 for e in events.values() if e.get("secret"))
    return {"slug": slug, "events": len(events), "endings": len(endings), "secrets": secrets,
            "images": len(image_ids), "videos": len(video_ids), "ceiling": ceiling}


summaries = [s for s in (check_game(g) for g in live) if s]

# ------------------------------------------------------------------ generate musecade.md + index.html

api = (config.get("api_base") or "").rstrip("/")
api_line = (f"Leaderboard API: {api}\n" if api
            else "Leaderboard API: OFFLINE (not yet connected; runs are scored locally and not ranked)\n")
games_md = "".join(
    f"### {g['command']}\n\nTitle: {g['title']}\nGenre: {g['genre']}\n"
    f"Duration: {g['duration'].replace(' min', ' minutes')}\nManifest:\n{g['manifest']}\n"
    + ("\n" if i < len(live) - 1 else "")
    for i, g in enumerate(live)
)
n = len(live)
boot = "```\nMUSECADE loaded.\n\n" + f"{n} game{'s' if n != 1 else ''} available.\n\n"
boot += "\n".join(f"{g['id']} — {g['title'].upper()}\n{g['genre']} · {g['duration']}\n" for g in live)
boot += "\nTo play, type:\n\n" + "\n".join(g["command"] for g in live) + "\n```\n"

router = MC / "musecade.md"
t = router.read_text(encoding="utf-8")
t = replace_block(t, "api", api_line, router)
t = replace_block(t, "games", games_md, router)
t = replace_block(t, "boot", boot, router)
write_if_changed(router, t)

home = MC / "index.html"
h = home.read_text(encoding="utf-8")
h = replace_block(h, "count", f'      <span class="live"><span class="led" aria-hidden="true"></span>{n} GAME{"S" if n != 1 else ""} AVAILABLE</span>\n      ', home)
write_if_changed(home, h)

for p in [router, MC / "README.md"]:
    if p.exists():
        no_liquid(p)

# ------------------------------------------------------------------ report

for s in summaries:
    print(f"  {s['slug']}: {s['events']} events, {s['endings']} endings, {s['secrets']} secrets, "
          f"{s['images']} image triggers, {s['videos']} video triggers, score ceiling {s['ceiling']:,}")
print(f"  leaderboard API: {api or 'OFFLINE'}")
for w in warnings:
    print("  warning:", w)
if errors:
    print("\nFAILED:")
    for e in errors:
        print("  -", e)
    sys.exit(1)
if stale:
    print("\nSTALE (run without --check):")
    for s in stale:
        print("  -", s)
    sys.exit(1)
print("  wrote: " + (", ".join(written) if written else "nothing (up to date)"))
print("OK")
