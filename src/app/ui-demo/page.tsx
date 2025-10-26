import type { Metadata } from "next"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
  LinkButton,
} from "@/components/ui"
import { baseLocale } from "@/i18n/i18n-util"
import {
  buttonGrid,
  cardShowcase,
  heading,
  lead,
  page,
  section,
  surface,
} from "./page.css"

export const metadata: Metadata = {
  title: "Interface primitives demo | Marco Toniut",
  description:
    "Preview of the reusable Button, LinkButton, and Card components that power the new UI language.",
}

export default function UIDemoPage() {
  return (
    <main className={page}>
      <section className={section}>
        <h1 className={heading}>Interface primitives</h1>
        <p className={lead}>
          A minimal, slightly retro interface language built with
          vanilla-extract tokens and Radix primitives. These controls are
          available to reuse throughout the site and remain friendly to static
          exports.
        </p>
        <div className={buttonGrid}>
          <Button size="sm">Primary sm</Button>
          <Button>Primary md</Button>
          <Button size="lg">Primary lg</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button asChild variant="ghost">
            <a href={`/${baseLocale}/cv/`}>Ghost link</a>
          </Button>
        </div>
      </section>

      <section className={section}>
        <div className={surface}>
          <h2 className={heading}>Link buttons</h2>
          <p className={lead}>
            Link buttons wrap anchors (internal or external) with the same
            affordance, keeping focus and hover states consistent.
          </p>
          <div className={buttonGrid}>
            <LinkButton
              href={`/${baseLocale}/`}
              variant="outline"
              size="md"
              fullWidth={false}
            >
              Internal link
            </LinkButton>
            <LinkButton
              href="https://github.com/marcotoniut"
              external
              variant="primary"
              size="md"
              fullWidth={false}
            >
              External link
            </LinkButton>
          </div>
        </div>
      </section>

      <section className={section}>
        <h2 className={heading}>Cards</h2>
        <p className={lead}>
          Cards bundle related content with a distinct elevated surface, perfect
          for timelines, project highlights, or contact panels.
        </p>
        <div className={cardShowcase}>
          <Card>
            <CardHeader>
              <CardTitle>Signal Monitor</CardTitle>
              <CardSubtitle>Build status • 21 Oct 2025</CardSubtitle>
            </CardHeader>
            <CardContent>
              Telemetry stream looks healthy. No anomalies detected in the last
              deploy. Hook this component into any status view to reuse the same
              spacings and type ramp.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact pulse</CardTitle>
              <CardSubtitle>Where to find Marco</CardSubtitle>
            </CardHeader>
            <CardContent>
              Need the long-form CV? Use the button below to open the localized
              version, or jump straight to GitHub to scan the latest
              experiments.
              <br />
              <br />
              <LinkButton
                href={`/${baseLocale}/cv/`}
                size="sm"
                variant="primary"
                fullWidth={false}
              >
                View CV
              </LinkButton>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
