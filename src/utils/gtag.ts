declare global {
  interface Window {
    dataLayer?: IArguments[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Google tag snippet. Inlined in `<head>`, it queues events from the first
 * render; gtag.js drains the queue once `GoogleAnalytics` loads it. Consent
 * remains denied, and the page view waits, unless the visitor allowed
 * analytics on an earlier page.
 */
export function buildGtagBootstrapScript(
  measurementId: string,
  consentKey: string,
): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}(function(){var granted=false;try{granted=localStorage.getItem(${JSON.stringify(consentKey)})==="granted"}catch(e){}gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:granted?"granted":"denied"});gtag("js",new Date());gtag("config",${JSON.stringify(measurementId)},{send_page_view:granted})})();`
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

export function grantGtagConsent(): void {
  window.gtag?.("consent", "update", { analytics_storage: "granted" })
  // The head snippet held this page's view back until consent.
  window.gtag?.("event", "page_view")
}

export function denyGtagConsent(): void {
  window.gtag?.("consent", "update", { analytics_storage: "denied" })
  clearGtagCookies()
}

function expireCookie(name: string, domain?: string): void {
  const scope = domain === undefined ? "" : `; domain=${domain}`
  // biome-ignore lint/suspicious/noDocumentCookie: synchronous and available in every browser, unlike the newer Cookie Store API
  document.cookie = `${name}=; Max-Age=0; path=/${scope}`
}

function clearGtagCookies(): void {
  const labels = window.location.hostname.split(".")
  const parentDomains = labels
    .slice(0, -1)
    .map((_, index) => labels.slice(index).join("."))
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim()
    if (name?.startsWith("_ga")) {
      expireCookie(name)
      // gtag.js sets cookies on the highest domain the browser accepts, so try
      // each parent domain; browsers ignore attempts on public suffixes like
      // github.io.
      for (const domain of parentDomains) {
        expireCookie(name, domain)
      }
    }
  }
}
