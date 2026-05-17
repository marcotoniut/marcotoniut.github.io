#!/usr/bin/env bash
set -euo pipefail

# Lightweight agent-check runner.
# Runs all quality gates and outputs JSON summary.
# Usage: ./scripts/check-agent.sh [--json]

JSON_OUTPUT=false
if [[ "${1:-}" == "--json" ]]; then
  JSON_OUTPUT=true
fi

declare -A RESULTS
TASKS=("lint" "typecheck" "spellcheck" "test" "build")
FAILED=0

for task in "${TASKS[@]}"; do
  if pnpm "$task" > /dev/null 2>&1; then
    RESULTS[$task]="pass"
  else
    RESULTS[$task]="fail"
    FAILED=$((FAILED + 1))
  fi
done

if $JSON_OUTPUT; then
  echo "{"
  echo "  \"success\": $([ $FAILED -eq 0 ] && echo true || echo false),"
  echo "  \"failed\": $FAILED,"
  echo "  \"total\": ${#TASKS[@]},"
  echo "  \"results\": {"
  FIRST=true
  for task in "${TASKS[@]}"; do
    if $FIRST; then FIRST=false; else echo ","; fi
    printf "    \"%s\": \"%s\"" "$task" "${RESULTS[$task]}"
  done
  echo ""
  echo "  }"
  echo "}"
else
  echo ""
  for task in "${TASKS[@]}"; do
    if [[ "${RESULTS[$task]}" == "pass" ]]; then
      echo "  ✔ $task"
    else
      echo "  ✘ $task"
    fi
  done
  echo ""
  if [ $FAILED -eq 0 ]; then
    echo "All ${#TASKS[@]} checks passed."
  else
    echo "$FAILED/${#TASKS[@]} checks failed."
    exit 1
  fi
fi
