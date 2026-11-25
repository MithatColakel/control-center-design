#!/usr/bin/env python3
"""Build viewer/data.json from the Claude Design files in this folder.

Reads design-canvas/project/canvas.json (boards, section titles, sticky notes) and the
@dsCard markers of design-system/project/components/*/preview.html.

  python3 tools/build_data.py <commit> [<branch>]
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
commit = sys.argv[1] if len(sys.argv) > 1 else "unknown"
branch = sys.argv[2] if len(sys.argv) > 2 else "design-system"

canvas = json.load(open(os.path.join(ROOT, "design-canvas/project/canvas.json")))
notes = canvas.get("notes", {})
sections = sorted(
    ({"title": n["text"], "x": n["x"], "y": n["y"], "maxW": n.get("maxW")} for n in notes.values() if n.get("kind") == "title1"),
    key=lambda s: s["y"],
)
stickies = [
    {"x": n["x"], "y": n["y"], "w": n.get("w", 640), "text": n["text"], "fill": n.get("fill", "blue")}
    for n in notes.values() if n.get("kind") is None and "text" in n
]


def section_of(y):
    cur = None
    for s in sections:
        if s["y"] <= y:
            cur = s["title"]
    return cur or "Index"


boards = []
for name in canvas["order"]:
    b = canvas["boards"][name]
    bid = re.sub(r"\.dc\.html$", "", name)
    boards.append({
        "id": bid, "file": "design-canvas/project/" + name, "title": b.get("title", bid),
        "x": b["x"], "y": b["y"], "w": b["w"], "h": b["h"], "section": section_of(b["y"]),
    })

comp_dir = os.path.join(ROOT, "design-system/project/components")
cards = []
for d in sorted(os.listdir(comp_dir)):
    prev = os.path.join(comp_dir, d, "preview.html")
    if not os.path.exists(prev):
        continue
    first = open(prev, encoding="utf-8").readline()
    group = re.search(r'group="([^"]*)"', first)
    sub = re.search(r'subtitle="([^"]*)"', first)
    status = re.search(r'status="([^"]*)"', first)
    h = re.search(r"height=(\d+)", first)
    readme = os.path.join(comp_dir, d, "README.md")
    cards.append({
        "id": d, "title": d, "group": group.group(1) if group else "Cover",
        "subtitle": (status.group(1) + " · " if status else "") + (sub.group(1) if sub else ""),
        "status": status.group(1) if status else None, "w": 960, "h": int(h.group(1)) if h else 600,
        "file": f"design-system/project/components/{d}/preview.html",
        "readme": f"design-system/project/components/{d}/README.md" if os.path.exists(readme) else None,
    })
group_order = ["Cover", "Foundations", "Navigation", "Layout", "Controls", "Data display", "Tables", "Charts", "Overlays", "States", "Ladder"]
groups = []
for g in group_order + sorted({c["group"] for c in cards} - set(group_order)):
    items = [c for c in cards if c["group"] == g]
    if items:
        groups.append({"name": g, "cards": items})

data = {
    "title": canvas.get("title", "Screens"),
    "page": canvas["pages"][0]["name"] if canvas.get("pages") else "Desktop",
    "source": {"repo": "MithatColakel/VPNProject", "branch": branch, "commit": commit},
    "boards": boards, "sections": sections, "notes": stickies,
    "ds": {"readme": "design-system/project/README.md", "groups": groups},
}
os.makedirs(os.path.join(ROOT, "viewer"), exist_ok=True)
with open(os.path.join(ROOT, "viewer/data.json"), "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
print(f"{len(boards)} boards, {len(sections)} sections, {len(stickies)} notes, {len(cards)} cards")
