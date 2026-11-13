import { afterEach, describe, expect, it, vi } from "vitest"

const execSync = vi.fn<() => string>()
vi.mock("node:child_process", () => ({ execSync }))

async function loadContentRev() {
  vi.resetModules()
  const module = await import("@/utils/content-rev")
  return module.contentRev
}

afterEach(() => {
  execSync.mockReset()
})

describe("contentRev", () => {
  it("shows the last commit's year and month", async () => {
    execSync.mockReturnValue("2026-11-13\n")
    expect(await loadContentRev()).toBe("2026.11")
  })

  it("is unset when git prints something other than a date", async () => {
    execSync.mockReturnValue("fatal: not a git repository\n")
    expect(await loadContentRev()).toBeUndefined()
  })

  it("is unset when git fails", async () => {
    execSync.mockImplementation(() => {
      throw new Error("git: command not found")
    })
    expect(await loadContentRev()).toBeUndefined()
  })
})
