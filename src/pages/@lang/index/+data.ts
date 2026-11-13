import { contentRev } from "@/utils/content-rev"

export type HomeData = {
  contentRev: string | undefined
}

export default function data(): HomeData {
  return { contentRev }
}
