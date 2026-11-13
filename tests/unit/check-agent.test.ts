import { mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { afterEach, describe, expect, it } from "vitest"
import { gateChain, runGates } from "../../scripts/check-agent.mts"

const reportDirs: string[] = []
const reportDir = () => {
  const directory = mkdtempSync(join(tmpdir(), "check-agent-"))
  reportDirs.push(directory)
  return directory
}

afterEach(() => {
  for (const directory of reportDirs.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe("agent checks", () => {
  it("uses the complete documented gate", () => {
    expect(gateChain()).toEqual([
      "generate",
      "lint",
      "typecheck",
      "spellcheck",
      "test:coverage",
      "build",
    ])
  })

  it("stops on failure, saves its output and reports remaining gates as skipped", () => {
    const called: string[] = []
    const result = runGates(
      ["generate", "lint", "build"],
      (task) => {
        called.push(task)
        return { exitCode: task === "lint" ? 1 : 0, output: `${task} output` }
      },
      reportDir(),
    )
    expect(result.success).toBe(false)
    expect(result.failedTask).toBe("lint")
    expect(called).toEqual(["generate", "lint"])
    expect(result.results.map((gate) => gate.status)).toEqual([
      "pass",
      "fail",
      "skipped",
    ])
    const logFile = result.results[1]?.logFile
    if (!logFile) throw new Error("Expected a failure log")
    expect(readFileSync(logFile, "utf8")).toBe("lint output")
    expect(result.results[2]?.logFile).toBeNull()
  })
})
