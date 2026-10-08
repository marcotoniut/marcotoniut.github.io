#!/usr/bin/env node

/**
 * Serves the `out/` static export the same way GitHub Pages does. This lets e2e tests
 * verify the shipped artifact, not a `next dev` render.
 *
 * Key GitHub Pages behaviours to replicate: directory URLs resolve to
 * `index.html`, and unknown paths return `404.html` with a 404 status.
 */
import { createReadStream, existsSync, statSync } from "node:fs"
import { createServer } from "node:http"
import { extname, join, normalize, resolve } from "node:path"

const DIST_DIR = resolve(import.meta.dirname, "../../out")
const port = Number.parseInt(process.env["PLAYWRIGHT_PORT"] ?? "8540", 10)
const host = process.env["PLAYWRIGHT_HOST"] ?? "127.0.0.1"

if (!existsSync(DIST_DIR)) {
  console.error(
    `No static export at ${DIST_DIR}.\nRun \`pnpm build\` before the e2e suites.`,
  )
  process.exit(1)
}

const CONTENT_TYPES: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
}

/** Resolve a URL path to a file inside DIST_DIR, or undefined if there is none. */
function resolveFile(urlPath: string): string | undefined {
  // normalize() collapses `..` before we join, so a crafted path cannot escape.
  const candidate = join(DIST_DIR, normalize(decodeURIComponent(urlPath)))
  if (!candidate.startsWith(DIST_DIR)) {
    return undefined
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate
  }

  const indexFile = join(candidate, "index.html")
  return existsSync(indexFile) ? indexFile : undefined
}

const server = createServer((req, res) => {
  const urlPath = new URL(req.url ?? "/", `http://${host}:${port}`).pathname
  const file = resolveFile(urlPath)

  if (file) {
    res.writeHead(200, {
      "content-type":
        CONTENT_TYPES[extname(file)] ?? "application/octet-stream",
    })
    createReadStream(file).pipe(res)
    return
  }

  const notFoundPage = join(DIST_DIR, "404.html")
  if (existsSync(notFoundPage)) {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" })
    createReadStream(notFoundPage).pipe(res)
    return
  }

  res.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
  res.end("Not found")
})

server.listen(port, host, () => {
  console.log(`Serving ${DIST_DIR} at http://${host}:${port}`)
})
