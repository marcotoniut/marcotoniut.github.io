import { execSync } from "node:child_process"

/**
 * Content revision for the hero's REV annotation. Build metadata, not
 * configuration: computed from the last commit while server modules evaluate
 * during the static export, so it states when the content last changed and a
 * rebuild of unchanged content cannot alter it. Undefined on failure so the
 * annotation disappears instead of showing a stale or fake value (design
 * lock: no pseudo-metadata).
 */
export const contentRev: string | undefined = (() => {
  try {
    const isoDate = execSync("git log -1 --format=%cs", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim()
    return /^\d{4}-\d{2}-\d{2}$/.test(isoDate)
      ? `${isoDate.slice(0, 4)}.${isoDate.slice(5, 7)}`
      : undefined
  } catch {
    return undefined
  }
})()
