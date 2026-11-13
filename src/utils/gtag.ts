declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Google's tag snippet. Inlined in `<head>`, it queues events from the first
 * render; gtag.js drains the queue once `GoogleAnalytics` loads it.
 */
export function buildGtagBootstrapScript(measurementId: string): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config",${JSON.stringify(measurementId)});`
}

export function gtagScriptUrl(measurementId: string): string {
  return `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
}

/** No-op when analytics is not configured for the build. */
export function sendGtagEvent(
  name: string,
  params: Record<string, unknown>,
): void {
  window.gtag?.("event", name, params)
}
