"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useMemo } from "react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  const label = useMemo(
    () => (theme === "dark" ? "Dark mode" : "Light mode"),
    [theme],
  )

  // Prevent hydration mismatch by not rendering theme-specific content until mounted
  if (!mounted) {
    return (
      <Button size="sm" variant="ghost" aria-pressed={false}>
        Theme
      </Button>
    )
  }

  return (
    <Button
      aria-label={label}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      size="sm"
      variant="ghost"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
