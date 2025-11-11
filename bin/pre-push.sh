#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

run_check() {
	echo "Running: $*"
	"$@"
}

ensure_sitemap_fresh() {
	local sitemap_path="public/sitemap.xml"

	run_check pnpm generate:sitemap

	if [[ -n "$(git status --short -- "${sitemap_path}")" ]]; then
		echo
		echo "❌ ${sitemap_path} changed after regeneration."
		echo "Please commit the updated sitemap before pushing (pnpm generate:sitemap)."
		git status --short -- "${sitemap_path}"
		exit 1
	fi
}

release_ref="refs/heads/release"
should_run=false

if [ -t 0 ]; then
	current_ref="$(git symbolic-ref --quiet HEAD 2>/dev/null || echo "")"
	if [[ "${current_ref}" == "${release_ref}" ]]; then
		should_run=true
	fi
else
	while IFS=' ' read -r _local_ref _local_sha remote_ref _remote_sha; do
		if [[ "${remote_ref}" == "${release_ref}" ]]; then
			should_run=true
		fi
	done
fi

if ! ${should_run}; then
	echo "Skipping pre-push checks (release branch not pushed)."
	exit 0
fi

run_check pnpm lint
run_check pnpm typecheck
run_check pnpm test -- --run
run_check pnpm build
ensure_sitemap_fresh

echo "All pre-push checks passed."
