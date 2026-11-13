/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ENV__GA_MEASUREMENT_ID?: string
  readonly PUBLIC_ENV__PDF_PRINTING?: string
  readonly PUBLIC_ENV__PRINT_SCALE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
