import { usePageContext } from "@/renderer/page-context"
import { NotFound } from "./NotFound"
import { ServerError } from "./ServerError"

export default function Page() {
  const { is404 } = usePageContext()
  return is404 === true ? <NotFound /> : <ServerError />
}
