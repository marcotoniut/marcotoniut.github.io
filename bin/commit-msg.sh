#!/usr/bin/env bash
set -euo pipefail

subject="$(grep -v '^#' "$1" | head -n 1)"
conventional='^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)\([a-z0-9-]+\)!?: [^ ]'
# Git writes these subjects itself.
generated='^(Merge |Revert "|fixup! |squash! |amend! )'

if [[ "$subject" =~ $conventional || "$subject" =~ $generated ]]; then
  exit 0
fi

{
  echo "Commit subject needs a type and scope, e.g. 'feat(cv): add PDF download button'."
  echo "Got: ${subject}"
} >&2
exit 1
