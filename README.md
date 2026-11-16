# VPN Control Center · design review

A static review copy of the VPN Control Center design, with a Figma-like viewer.

- **Page:** https://mithatcolakel.github.io/control-center-design/
- **Source:** branch `design-system` of the VPNProject repository: the screen canvas (`design-canvas/project/`, Claude Design format) and the Design System page (`design-system/project/`). The commit is shown at the top of the page.
- **Content:** design mock-ups only. All names, ids and numbers in the frames are examples.

## Review

- **Screens · Desktop 1440:** every frame at its place on the canvas. Scroll or drag to move, Ctrl/⌘ + scroll or pinch to zoom, double-click a frame to open it at full size.
- **Design system:** tokens, components and states, each with its notes, plus the guide.
- **Comments:** press `C` and click a spot on a frame. Comments stay in your browser. *Comments › Copy all* gives a text with the frame names and spots to paste into the task.
- **Links:** `#f=<frame>` selects a frame, `#open=<frame>` opens it, `#ds=<card>` opens a Design System card.

## Update to a new commit

```sh
tools/update.sh <VPNProject checkout> <commit>   # copies the published folders, renders the images
python3 -m http.server                          # check the page locally
git add -A && git commit -m "Update to <commit>" && git push
```

GitHub Pages publishes the `main` branch in one to two minutes. Do not copy `design-canvas/phase-2/`.

**Public page, so no names.** The page and this repository never show an app name, an app logo or a person's name (board Apple rule, 2026-11-15). Write "both brands" or "this brand's app". Brand frames and brand tokens stay on the private branch (`design-canvas/brands/`, `design-system/brands/`); reviewers get them as images in the task. `tools/check_public.py` (run by `tools/update.sh`) stops the update if any file of the site names an app or a person, holds a secret, a key, a token, an e-mail address or a real IP address, or loads from an Apple host. It keeps the names only as hashes, so it names nobody itself.

## Files

- `index.html`, `viewer/`: the viewer (no build step, no dependencies).
- `viewer/data.json`: frames, sections and notes from `canvas.json`, cards from the `@dsCard` markers.
- `shots/`: JPEG renders of each frame (0.15×, 0.5×, 1×) and each card.
- `tools/`: `update.sh`, `check_public.py`, `build_data.py`, `shoot.cjs` (Playwright).
