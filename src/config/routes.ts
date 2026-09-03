export type ChangeFreq = "daily" | "weekly" | "monthly" | "yearly"

export type Route = {
  path: string
  changefreq: ChangeFreq
  priority: number
}

/** Routes that exist once, outside the `[lang]` segment. */
export const UNLOCALIZED_ROUTES = [
  { path: "", changefreq: "monthly", priority: 0.5 },
  { path: "cv", changefreq: "monthly", priority: 0.6 },
] as const satisfies readonly Route[]

/** Routes rendered once per locale under `/{locale}/`. */
export const LOCALIZED_ROUTES = [
  { path: "", changefreq: "monthly", priority: 1.0 },
  { path: "cv", changefreq: "monthly", priority: 0.9 },
  { path: "contact", changefreq: "yearly", priority: 0.5 },
  { path: "projects/carcinisation", changefreq: "yearly", priority: 0.7 },
  { path: "projects/sonicthames", changefreq: "yearly", priority: 0.7 },
] as const satisfies readonly Route[]
