import { denyGtagConsent, grantGtagConsent } from "./gtag"

export const ANALYTICS_CONSENT_KEY = "marcotoniut-analytics-consent"

export type AnalyticsConsent = "granted" | "denied" | "undecided"

const listeners = new Set<() => void>()
let current: AnalyticsConsent | undefined

function readStoredConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
    return stored === "granted" || stored === "denied" ? stored : "undecided"
  } catch {
    return "undecided"
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  current ??= readStoredConsent()
  return current
}

export function subscribeToAnalyticsConsent(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent): void {
  current = consent
  try {
    if (consent === "undecided") {
      window.localStorage.removeItem(ANALYTICS_CONSENT_KEY)
    } else {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent)
    }
  } catch {
    // Without storage, the answer resets on the next page load.
  }
  if (consent === "granted") {
    grantGtagConsent()
  } else {
    denyGtagConsent()
  }
  for (const listener of listeners) {
    listener()
  }
}
