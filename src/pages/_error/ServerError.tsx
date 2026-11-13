import { pressStartFont } from "@/styles/fonts.css"
import * as styles from "./error.css"

export function ServerError() {
  return (
    <div className={styles.page}>
      <p className={styles.kicker}>Something went wrong</p>
      <h1 className={`${pressStartFont} ${styles.code}`}>500</h1>
      <p className={styles.subtitle}>An unexpected error occurred</p>
      <a href="/" className={styles.homeLink}>
        ← Return home
      </a>
    </div>
  )
}
