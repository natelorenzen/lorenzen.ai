#!/usr/bin/env python3
"""
MINDS build script.

Single source of truth: minds/registry.json

Generates (between <!-- BEGIN GENERATED:x --> / <!-- END GENERATED:x --> markers):
  - minds/router.md           problem patterns, lens index, mind registry (served at /minds.md)
  - minds/index.html          plain roster of Minds on the one human page

Generates (whole files):
  - **/SKILL.raw              GitHub Pages passthrough so SKILL.md is served raw

Validates:
  - registry integrity (slugs, lenses, filters, groups, statuses, wildcards)
  - AVAILABLE requires SKILL.md + SOURCES.md with matching frontmatter
  - no PLANNED/RESEARCHING Mind ships a SKILL.md that claims to be available
  - no Liquid syntax in any published Markdown (it would break the Jekyll build)

Usage:
  python3 minds/_build/build.py           # validate and write
  python3 minds/_build/build.py --check   # validate; fail if anything is stale

Standard library only. The site itself is static; this runs locally before commit.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MINDS_DIR = ROOT / "minds"
REGISTRY = MINDS_DIR / "registry.json"
ROUTER = MINDS_DIR / "router.md"          # served at /minds.md via /minds.raw
PAGE = MINDS_DIR / "index.html"
SKILL_DIRS_EXTRA = [ROOT / "council"]

STATUSES = ("available", "researching", "planned")

errors = []
written = []
stale = []


def fail(msg):
    errors.append(msg)


def esc(s):
    return html.escape(str(s), quote=True)


# ---------------------------------------------------------------- load

def load():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    lenses = data["lenses"]
    groups = data["groups"]
    filters = data["filters"]
    minds = data["minds"]
    by_slug = {}

    for m in minds:
        slug = m.get("slug", "")
        where = f"mind '{slug or m.get('name')}'"
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", slug):
            fail(f"{where}: slug must be kebab-case")
        if slug in by_slug:
            fail(f"{where}: duplicate slug")
        by_slug[slug] = m
        for key in ("name", "dates", "group", "filters", "domains", "lenses",
                    "core_question", "questions", "best_used_for",
                    "may_underweight", "status"):
            if key not in m or m[key] in ("", []):
                fail(f"{where}: missing '{key}'")
        m.setdefault("provenance_note", "")
        m.setdefault("research_seeds", [])
        if m.get("status") not in STATUSES:
            fail(f"{where}: status must be one of {STATUSES}")
        if m.get("group") not in groups:
            fail(f"{where}: unknown group '{m.get('group')}'")
        for f in m.get("filters", []):
            if f not in filters:
                fail(f"{where}: unknown filter '{f}'")
        for lens in m.get("lenses", []):
            if lens not in lenses:
                fail(f"{where}: unknown lens '{lens}'")

    carried = {lens for m in minds for lens in m["lenses"]}
    for lens in lenses:
        if lens not in carried:
            fail(f"lens '{lens}' is not carried by any Mind")

    for p in data["problems"]:
        where = f"problem '{p['id']}'"
        for lens in p["lenses"]:
            if lens not in lenses:
                fail(f"{where}: unknown lens '{lens}'")
        w = p.get("wildcard")
        if w:
            wm = by_slug.get(w["mind"])
            if not wm:
                fail(f"{where}: wildcard mind '{w['mind']}' not in registry")
            elif w["lens"] not in wm["lenses"]:
                fail(f"{where}: wildcard lens '{w['lens']}' not carried by {w['mind']}")
            elif set(wm["lenses"]) & set(p["lenses"]):
                fail(f"{where}: wildcard {w['mind']} already carries a primary lens; it is not a wildcard")

    return data, by_slug


def check_skill_files(data):
    """Enforce: status AVAILABLE <=> a published, sourced SKILL.md."""
    for m in data["minds"]:
        d = MINDS_DIR / m["slug"]
        skill, sources = d / "SKILL.md", d / "SOURCES.md"
        fm = frontmatter(skill) if skill.exists() else None
        m["_has_skill"] = skill.exists()
        m["_has_sources"] = sources.exists()
        m["_skill_version"] = (fm or {}).get("version", "")
        if m["status"] == "available":
            if not skill.exists():
                fail(f"{m['slug']}: AVAILABLE but minds/{m['slug']}/SKILL.md is missing")
            if not sources.exists():
                fail(f"{m['slug']}: AVAILABLE but minds/{m['slug']}/SOURCES.md is missing")
        if fm is not None:
            if fm.get("name") != m["slug"]:
                fail(f"{m['slug']}: SKILL.md frontmatter name must be '{m['slug']}'")
            if fm.get("status") != m["status"]:
                fail(f"{m['slug']}: SKILL.md status '{fm.get('status')}' != registry status '{m['status']}'")


def frontmatter(path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\n(.*?)\n---\n", text, re.S)
    if not match:
        fail(f"{path.relative_to(ROOT)}: missing YAML frontmatter")
        return {}
    out = {}
    for line in match.group(1).splitlines():
        kv = re.match(r"^([a-z_]+):\s*(.*)$", line)
        if kv:
            out[kv.group(1)] = kv.group(2).strip().strip("'\"")
    return out


def check_liquid():
    """GitHub Pages renders every .md through Liquid; '{{' or '{%' breaks the build."""
    for path in ROOT.rglob("*.md"):
        rel = path.relative_to(ROOT)
        if rel.parts[0].startswith((".", "_")) or any(p.startswith("_") for p in rel.parts[:-1]):
            continue
        if rel.parts[0] not in ("minds", "council"):
            continue
        text = path.read_text(encoding="utf-8")
        if "{{" in text or "{%" in text:
            fail(f"{rel}: contains Liquid syntax ('{{{{' or '{{%'), which breaks GitHub Pages")


# ---------------------------------------------------------------- write helpers

def write(path, content):
    old = path.read_text(encoding="utf-8") if path.exists() else None
    if old == content:
        return
    stale.append(str(path.relative_to(ROOT)))
    if "--check" not in sys.argv:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        written.append(str(path.relative_to(ROOT)))


def replace_block(text, name, body, path):
    pattern = re.compile(
        r"(<!-- BEGIN GENERATED:%s -->\n).*?(<!-- END GENERATED:%s -->)" % (name, name), re.S)
    if not pattern.search(text):
        fail(f"{path.name}: missing GENERATED:{name} markers")
        return text
    return pattern.sub(lambda m: m.group(1) + body + m.group(2), text)


# ---------------------------------------------------------------- derived data

def lens_index(data):
    idx = {k: [] for k in data["lenses"]}
    for m in data["minds"]:
        for lens in m["lenses"]:
            idx[lens].append(m)
    return idx


def skill_url(data, m):
    return f"{data['base_url']}/minds/{m['slug']}/SKILL.md"


# ---------------------------------------------------------------- minds.md

def md_problem_patterns(data):
    L = data["lenses"]
    rows = ["| Problem pattern | Lenses usually required | Possible wildcard lens |",
            "|---|---|---|"]
    for p in data["problems"]:
        lenses = ", ".join(f"`{l}`" for l in p["lenses"])
        w = p.get("wildcard")
        wc = f"`{w['lens']}` ({w['mind']})" if w else ""
        rows.append(f"| {p['label']} | {lenses} | {wc} |")
    return "\n".join(rows) + "\n"


def md_lens_index(data):
    idx = lens_index(data)
    rows = ["| Lens | The question it asks | Minds carrying it |", "|---|---|---|"]
    for key, lens in data["lenses"].items():
        names = ", ".join(
            f"`{m['slug']}`" + (" **AVAILABLE**" if m["status"] == "available" else "")
            for m in idx[key])
        rows.append(f"| `{key}` | {lens['question']} | {names} |")
    return "\n".join(rows) + "\n"


def md_registry(data):
    """One row per Mind: compact enough that fetch tools will not truncate it."""
    counts = {s: sum(1 for m in data["minds"] if m["status"] == s) for s in STATUSES}
    out = [
        f"{len(data['minds'])} Minds. "
        f"AVAILABLE: {counts['available']} · RESEARCHING: {counts['researching']} · "
        f"PLANNED: {counts['planned']}. "
        f"Skill path for every Mind: `{data['base_url']}/minds/{{slug}}/SKILL.md` "
        f"(it exists only when the status is AVAILABLE). "
        f"Further questions and source seeds for each Mind: {data['base_url']}/minds/registry.json\n",
        "| Mind | Status | Lenses | Core question | Best used for | May underweight |",
        "|---|---|---|---|---|---|",
    ]
    for group in data["groups"]:
        for m in (m for m in data["minds"] if m["group"] == group):
            flag = " ⚠" if m["provenance_note"] else ""
            out.append(
                f"| {m['name']} `{m['slug']}`{flag} | {m['status'].upper()} | "
                f"{', '.join('`%s`' % l for l in m['lenses'])} | {m['core_question']} | "
                f"{'; '.join(m['best_used_for'])} | {'; '.join(m['may_underweight'])} |")
    cautions = [m for m in data["minds"] if m["provenance_note"]]
    if cautions:
        out.append("\n**⚠ Provenance cautions.** Heed these, especially in registry-lens mode:\n")
        for m in cautions:
            out.append(f"- `{m['slug']}`: {m['provenance_note']}")
    return "\n".join(out) + "\n"


def build_router(data):
    text = ROUTER.read_text(encoding="utf-8")
    text = replace_block(text, "problem-patterns", md_problem_patterns(data), ROUTER)
    text = replace_block(text, "lens-index", md_lens_index(data), ROUTER)
    text = replace_block(text, "registry", md_registry(data), ROUTER)
    write(ROUTER, text)


# ---------------------------------------------------------------- minds/index.html

def html_roster(data):
    out = []
    for group in data["groups"]:
        members = [m for m in data["minds"] if m["group"] == group]
        if not members:
            continue
        items = "".join(
            f'<li>{esc(m["name"])}'
            + ("" if m["status"] == "planned" else f' <span class="status">{esc(m["status"].upper())}</span>')
            + "</li>" for m in members)
        out.append(f'      <div class="group"><h3>{esc(group)}</h3><ul>{items}</ul></div>')
    c = {s: sum(1 for m in data["minds"] if m["status"] == s) for s in STATUSES}
    out.append(f'      <p class="fine">{len(data["minds"])} Minds · {c["available"]} available · '
               f'{c["researching"]} researching · {c["planned"]} planned. Planned Minds have no published '
               f'skill yet; agents use them in labeled registry-lens mode.</p>')
    return "\n".join(out) + "\n"


def build_page(data):
    text = PAGE.read_text(encoding="utf-8")
    text = replace_block(text, "roster", html_roster(data), PAGE)
    write(PAGE, text)


# ---------------------------------------------------------------- SKILL.md passthrough

PASSTHROUGH = """---
# GitHub Pages passthrough. Do not edit; generated by minds/_build/build.py.
# Jekyll converts any .md file with YAML frontmatter to HTML and drops the
# original, so SKILL.md would 404. This file re-publishes SKILL.md byte-for-byte
# at the URL below.
layout: null
sitemap: false
permalink: %s
---
{%% include_relative SKILL.md %%}"""


def build_passthroughs(data):
    dirs = [MINDS_DIR / m["slug"] for m in data["minds"]] + SKILL_DIRS_EXTRA
    for d in dirs:
        raw = d / "SKILL.raw"
        if (d / "SKILL.md").exists():
            url = "/" + str((d / "SKILL.md").relative_to(ROOT))
            write(raw, PASSTHROUGH % url)
        elif raw.exists():
            stale.append(str(raw.relative_to(ROOT)))
            if "--check" not in sys.argv:
                raw.unlink()
                written.append(f"(removed) {raw.relative_to(ROOT)}")


# ---------------------------------------------------------------- main

def main():
    data, by_slug = load()
    check_skill_files(data)
    check_liquid()
    if not (ROOT / "minds.raw").exists():
        fail("minds.raw (the /minds.md passthrough) is missing")
    if (ROOT / "minds.md").exists():
        fail("minds.md must not exist at the repo root; edit minds/router.md (see minds/README.md)")
    if not (ROOT / "council" / "SKILL.md").exists():
        fail("council/SKILL.md is missing")
    if errors:
        print("MINDS registry has errors:\n  - " + "\n  - ".join(errors))
        sys.exit(1)

    build_router(data)
    build_page(data)
    build_passthroughs(data)

    if errors:
        print("MINDS build errors:\n  - " + "\n  - ".join(errors))
        sys.exit(1)
    if "--check" in sys.argv:
        if stale:
            print("Generated files are stale. Run: python3 minds/_build/build.py\n  - " + "\n  - ".join(stale))
            sys.exit(1)
        print(f"OK. {len(data['minds'])} Minds, {len(data['lenses'])} lenses, all generated files current.")
        return
    print(f"OK. {len(data['minds'])} Minds, {len(data['lenses'])} lenses.")
    for w in written:
        print(f"  wrote {w}")


if __name__ == "__main__":
    main()
