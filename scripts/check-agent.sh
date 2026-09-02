#!/usr/bin/env bash
set -uo pipefail

# Runs the quality gates and reports which passed.
# Usage: ./scripts/check-agent.sh [--json]
#
# Stops at the first failure and prints that command's output, so the result is
# actionable. This mirrors `pnpm check`, which chains with && for the same
# reason.

JSON_OUTPUT=false
if [[ "${1:-}" == "--json" ]]; then
    JSON_OUTPUT=true
fi

TASKS=(generate lint typecheck spellcheck test build)
declare -A RESULTS
FAILED_TASK=""
FAILED_LOG=""

for task in "${TASKS[@]}"; do
    if [[ -n "${FAILED_TASK}" ]]; then
        RESULTS[$task]="skipped"
        continue
    fi

    log="$(mktemp)"
    if pnpm "$task" >"${log}" 2>&1; then
        RESULTS[$task]="pass"
        rm -f "${log}"
    else
        RESULTS[$task]="fail"
        FAILED_TASK="$task"
        FAILED_LOG="${log}"
    fi
done

if $JSON_OUTPUT; then
    printf '{\n'
    printf '  "success": %s,\n' "$([[ -z "${FAILED_TASK}" ]] && echo true || echo false)"
    printf '  "failedTask": %s,\n' "$([[ -z "${FAILED_TASK}" ]] && echo null || printf '"%s"' "${FAILED_TASK}")"
    printf '  "results": {\n'
    first=true
    for task in "${TASKS[@]}"; do
        if $first; then first=false; else printf ',\n'; fi
        printf '    "%s": "%s"' "$task" "${RESULTS[$task]}"
    done
    printf '\n  }\n}\n'
else
    echo
    for task in "${TASKS[@]}"; do
        case "${RESULTS[$task]}" in
        pass) echo "  ✔ $task" ;;
        fail) echo "  ✘ $task" ;;
        *) echo "  · $task (skipped)" ;;
        esac
    done
    echo
fi

if [[ -n "${FAILED_TASK}" ]]; then
    echo "--- pnpm ${FAILED_TASK} output ---" >&2
    cat "${FAILED_LOG}" >&2
    rm -f "${FAILED_LOG}"
    exit 1
fi

$JSON_OUTPUT || echo "All ${#TASKS[@]} checks passed."
