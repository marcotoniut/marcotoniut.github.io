#!/usr/bin/env node

import { spawnSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"

const repoRoot = resolve(import.meta.dirname, "..")

export function gateChain(): string[] {
  const pkg = JSON.parse(
    readFileSync(resolve(repoRoot, "package.json"), "utf8"),
  ) as { scripts: Record<string, string> }
  const check = pkg.scripts["check"]
  if (!check) throw new Error("package.json must define the check script")
  return check.split(" && ").map((step) => {
    const match = /^pnpm ([\w:-]+)$/.exec(step)
    if (!match?.[1]) throw new Error(`Unsupported check step: ${step}`)
    return match[1]
  })
}

type GateResult = {
  task: string
  status: "pass" | "fail" | "skipped"
  durationMs: number
  logFile: string | null
}

type RunGate = (task: string) => { exitCode: number; output: string }

export function runGates(tasks: string[], runGate: RunGate, reportDir: string) {
  mkdirSync(reportDir, { recursive: true })
  let failedTask: string | null = null
  const results: GateResult[] = tasks.map((task) => {
    if (failedTask) {
      return { task, status: "skipped", durationMs: 0, logFile: null }
    }
    const started = performance.now()
    const { exitCode, output } = runGate(task)
    const logFile = resolve(reportDir, `${task.replaceAll(":", "-")}.log`)
    writeFileSync(logFile, output)
    if (exitCode !== 0) failedTask = task
    return {
      task,
      status: exitCode === 0 ? "pass" : "fail",
      durationMs: Math.round(performance.now() - started),
      logFile,
    }
  })
  return { success: failedTask === null, failedTask, results }
}

function main() {
  const args = process.argv.slice(2)
  const json = args.includes("--json")
  const mode = args.find((arg) => !arg.startsWith("--")) ?? "run"
  const validModes = ["run", "list", "recommend"]
  if (args.includes("--help")) {
    console.log("Use: pnpm check:agent [run|list|recommend] [--json]")
    return
  }
  if (
    !validModes.includes(mode) ||
    args.some((arg) => arg !== mode && arg !== "--json")
  ) {
    throw new Error("Use: pnpm check:agent [run|list|recommend] [--json]")
  }
  const tasks = gateChain()
  if (mode !== "run") {
    const result = { command: "pnpm check", tasks }
    console.log(
      json ? JSON.stringify(result) : `pnpm check: ${tasks.join(" → ")}`,
    )
    return
  }
  const reportDir = resolve(repoRoot, "tmp/check-agent")
  const result = runGates(
    tasks,
    (task) => {
      if (!json) process.stderr.write(`Running pnpm ${task}…\n`)
      const child = spawnSync("pnpm", [task], {
        cwd: repoRoot,
        encoding: "utf8",
        maxBuffer: 32 * 1024 * 1024,
      })
      return {
        exitCode: child.status ?? 1,
        output: `${child.stdout ?? ""}${child.stderr ?? ""}${child.error?.message ?? ""}`,
      }
    },
    reportDir,
  )
  writeFileSync(
    resolve(reportDir, "summary.json"),
    `${JSON.stringify(result)}\n`,
  )
  if (json) {
    console.log(JSON.stringify(result))
  } else {
    for (const gate of result.results) {
      console.log(`${gate.status}: ${gate.task} (${gate.durationMs}ms)`)
    }
    console.log(`Report: ${resolve(reportDir, "summary.json")}`)
  }
  const failure = result.results.find((gate) => gate.status === "fail")
  if (failure?.logFile) {
    process.stderr.write(readFileSync(failure.logFile, "utf8"))
    process.stderr.write(`Failure log: ${failure.logFile}\n`)
    process.exitCode = 1
  }
}

if (import.meta.main) main()
