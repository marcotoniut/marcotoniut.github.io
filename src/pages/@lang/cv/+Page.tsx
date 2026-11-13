import { env } from "@/env"
import { CVContent } from "./content"

export default function CVPage() {
  return <CVContent isPdfPrinting={env.PUBLIC_ENV__PDF_PRINTING} />
}
