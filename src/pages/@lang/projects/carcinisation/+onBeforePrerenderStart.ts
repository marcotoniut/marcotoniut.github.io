import { localizedUrls } from "@/utils/locale"

export default function onBeforePrerenderStart(): string[] {
  return localizedUrls("projects/carcinisation")
}
