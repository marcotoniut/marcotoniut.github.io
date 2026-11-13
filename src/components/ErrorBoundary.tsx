import type { ReactNode } from "react"
import { Component } from "react"

type ErrorBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
}

type ErrorBoundaryState = {
  failed: boolean
}

/** Renders `fallback` instead of an empty page when the browser fails to render. */
// biome-ignore lint/style/useReactFunctionComponents: React has no function-component error boundary
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  override state: ErrorBoundaryState = { failed: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { failed: true }
  }

  override render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
