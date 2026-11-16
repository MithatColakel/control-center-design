#!/usr/bin/env bash
# Refresh this review copy from a commit on the design-system branch of VPNProject.
#   tools/update.sh <VPNProject checkout> <commit>
# Copies only the published folders (design-canvas/project, design-system/project), never design-canvas/phase-2
# or the brand folders. Stops if a file of the site names an app or a person, holds a secret or personal data,
# or loads from an Apple host (tools/check_public.py).
set -euo pipefail
SRC="$1"; COMMIT="$2"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
rm -rf "$ROOT/design-canvas" "$ROOT/design-system" "$ROOT/shots"
git -C "$SRC" archive "$COMMIT" design-canvas/project design-system/project | tar -x -C "$ROOT"
# Apple rule (board, 2026-11-15): this page is public, so it never names an app or a person.
# Brand frames and brand tokens stay on the private branch (design-canvas/brands/, design-system/brands/).
python3 "$ROOT/tools/check_public.py" "$ROOT"
# Claude Design supplies support.js on claude.ai; a normal browser needs no script.
printf '/* Placeholder: Claude Design provides support.js on claude.ai. The frames need no script in a normal browser. */\n' > "$ROOT/design-canvas/project/support.js"
# Keep the review copy out of search engines.
find "$ROOT/design-canvas" "$ROOT/design-system" -name '*.html' -exec sed -i '0,/<meta charset="utf-8">/s//<meta charset="utf-8">\n<meta name="robots" content="noindex,nofollow">/' {} +
python3 "$ROOT/tools/build_data.py" "$(git -C "$SRC" rev-parse --short "$COMMIT")"
PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-/opt/ms-playwright}" node "$ROOT/tools/shoot.cjs"
echo "Done. Check the page locally (python3 -m http.server), then commit and push to main."
