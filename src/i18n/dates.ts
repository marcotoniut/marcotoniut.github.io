import { createLocaleCopy } from "./helpers"
import type { Locales } from "./i18n-types"

// Spelled out instead of taken from Intl: the prerender (Node's ICU) and the
// visitor's browser must render identical text, or hydration fails.
const getShortMonths = createLocaleCopy<readonly string[]>({
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  es: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sept",
    "oct",
    "nov",
    "dic",
  ],
})

/** A month and year such as `Oct 2023`, in the page's locale. */
export function formatMonthYear(date: Date, locale: Locales): string {
  const month = getShortMonths(locale)[date.getMonth()]
  if (month === undefined) {
    throw new Error(`Cannot format an invalid date: ${String(date)}`)
  }
  return `${month} ${date.getFullYear()}`
}
