import { siteConfig } from "@/config/site"
import type { Seo } from "@/utils/seo"

export default function seo(): Seo {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    indexable: false,
  }
}
