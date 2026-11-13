import type { ConsoleMessage, Page } from "@playwright/test"
import { test as base, expect } from "@playwright/test"

type AllowedRuntimeError = {
  pattern: RegExp
  reason: string
}

type RuntimeErrorFailure = {
  kind: "pageerror" | "console.error"
  message: string
  pageUrl: string
  source: string
}

type RuntimeErrorGuard = {
  allow: (pattern: RegExp) => void
  allowedPatterns: RegExp[]
  failures: RuntimeErrorFailure[]
}

type RuntimeErrorFixtures = {
  allowRuntimeError: (pattern: RegExp) => void
  runtimeErrorGuard: RuntimeErrorGuard
}

const GLOBAL_ALLOWLIST: readonly AllowedRuntimeError[] = [
  {
    pattern:
      /ResizeObserver loop (?:completed with undelivered|limit exceeded)/,
    reason: "Benign Chromium layout notice, not an application exception.",
  },
]

const REACT_RUNTIME_ERROR_PATTERNS: readonly RegExp[] = [
  /Minified React error/,
  /Invalid hook call/,
  /Rendered (?:more|fewer) hooks than/,
  /Maximum update depth exceeded/,
  /Cannot update a component .* while rendering a different component/,
  /Each child in a (?:list|array) should have a unique "key" prop/,
  /^Warning: /,
  /Hydration failed|hydration mismatch|did not match\. Server:/i,
  /The above error occurred in the <.*> component/,
  /React will try to recreate this component tree/,
  /Objects are not valid as a React child/,
]

const NETWORK_NOISE_PATTERNS: readonly RegExp[] = [
  /^Failed to load resource/,
  /net::ERR_/,
  /\bfavicon\b/i,
]

const SCRIPT_URL_PATTERN = /\.(?:[cm]?[jt]sx?)(?:\?|$)/

const isAppModuleUrl = (url: string, pageUrl: string) => {
  const parsed = URL.parse(url)
  const parsedPage = URL.parse(pageUrl)
  return (
    parsed !== null &&
    parsedPage !== null &&
    (parsed.protocol === "http:" || parsed.protocol === "https:") &&
    parsed.host === parsedPage.host &&
    SCRIPT_URL_PATTERN.test(`${parsed.pathname}${parsed.search}`)
  )
}

const describeLocation = (message: ConsoleMessage) => {
  const { url, lineNumber, columnNumber } = message.location()
  return url === "" ? "unknown source" : `${url}:${lineNumber}:${columnNumber}`
}

const isRuntimeConsoleError = (message: ConsoleMessage, pageUrl: string) => {
  const text = message.text()
  return (
    message.type() === "error" &&
    !NETWORK_NOISE_PATTERNS.some((pattern) => pattern.test(text)) &&
    (REACT_RUNTIME_ERROR_PATTERNS.some((pattern) => pattern.test(text)) ||
      isAppModuleUrl(message.location().url, pageUrl))
  )
}

const MAX_MESSAGE_LENGTH = 600

const truncate = (message: string) =>
  message.length > MAX_MESSAGE_LENGTH
    ? `${message.slice(0, MAX_MESSAGE_LENGTH)}...`
    : message

const formatFailures = (failures: readonly RuntimeErrorFailure[]) =>
  [
    `${failures.length} browser runtime error(s) during the test:`,
    ...failures.map(
      (failure, index) =>
        `  ${index + 1}. [${failure.kind}] ${truncate(failure.message)}\n     page: ${failure.pageUrl}\n     source: ${failure.source}`,
    ),
    "Fix the error, or call allowRuntimeError(/pattern/) in a test that triggers it on purpose.",
  ].join("\n")

const watchPage = (page: Page, guard: RuntimeErrorGuard) => {
  const record = (failure: RuntimeErrorFailure) => {
    guard.failures.push(failure)
  }
  page.on("pageerror", (error) => {
    record({
      kind: "pageerror",
      message: error.stack ?? `${error.name}: ${error.message}`,
      pageUrl: page.url(),
      source: "uncaught exception",
    })
  })
  page.on("console", (message) => {
    if (isRuntimeConsoleError(message, page.url())) {
      record({
        kind: "console.error",
        message: message.text(),
        pageUrl: page.url(),
        source: describeLocation(message),
      })
    }
  })
}

export const test = base.extend<RuntimeErrorFixtures>({
  runtimeErrorGuard: [
    async ({ context }, use) => {
      const allowedPatterns: RegExp[] = []
      const guard: RuntimeErrorGuard = {
        allow: (pattern) => {
          allowedPatterns.push(pattern)
        },
        allowedPatterns,
        failures: [],
      }
      for (const page of context.pages()) {
        watchPage(page, guard)
      }
      context.on("page", (page) => watchPage(page, guard))
      await use(guard)
      const unexpected = guard.failures.filter(
        ({ message }) =>
          !GLOBAL_ALLOWLIST.some(({ pattern }) => pattern.test(message)) &&
          !guard.allowedPatterns.some((pattern) => pattern.test(message)),
      )
      if (unexpected.length > 0) {
        throw new Error(formatFailures(unexpected))
      }
    },
    { auto: true },
  ],
  allowRuntimeError: async ({ runtimeErrorGuard }, use) => {
    await use(runtimeErrorGuard.allow)
  },
})

export { expect }
