import { Button } from "@/components/ui/button"
import { env } from "@/env"
import { useI18nContext } from "@/i18n/i18n-react"
import { setAnalyticsConsent } from "@/utils/analytics-consent"
import * as styles from "./AnalyticsConsentBanner.css"

export function AnalyticsConsentBanner() {
  const { LL } = useI18nContext()

  return (
    <section aria-label={LL.Common.analytics.label()} className={styles.banner}>
      <p className={styles.message}>{LL.Common.analytics.message()}</p>
      <div className={styles.actions}>
        {/* Equal weight: declining must be as easy as allowing. */}
        <Button
          onClick={() => setAnalyticsConsent("denied")}
          size="sm"
          variant="outline"
        >
          {LL.Common.analytics.decline()}
        </Button>
        <Button
          onClick={() => setAnalyticsConsent("granted")}
          size="sm"
          variant="outline"
        >
          {LL.Common.analytics.allow()}
        </Button>
      </div>
    </section>
  )
}

export function AnalyticsPreferencesButton({
  className,
}: {
  className: string
}) {
  const { LL } = useI18nContext()

  return env.PUBLIC_ENV__GA_MEASUREMENT_ID === undefined ? null : (
    <button
      className={className}
      onClick={() => setAnalyticsConsent("undecided")}
      type="button"
    >
      {LL.Common.analytics.preferences()}
    </button>
  )
}
