"use client"

import { Slot } from "@radix-ui/react-slot"
import type { RecipeVariants } from "@vanilla-extract/recipes"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import { buttonRecipe } from "./button.css"

type ButtonVariants = RecipeVariants<typeof buttonRecipe>
type ButtonBaseProps = Omit<ComponentPropsWithoutRef<"button">, "color">

export type ButtonProps = ButtonBaseProps &
  ButtonVariants & {
    asChild?: boolean
  }

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  (
    { asChild = false, className, variant, size, fullWidth, type, ...props },
    ref,
  ) => {
    const composedClassName = className
      ? `${buttonRecipe({ variant, size, fullWidth })} ${className}`
      : buttonRecipe({ variant, size, fullWidth })

    if (asChild) {
      return (
        <Slot {...props} className={composedClassName} ref={ref as never} />
      )
    }

    return (
      <button
        {...props}
        ref={ref}
        className={composedClassName}
        type={type ?? "button"}
      />
    )
  },
)

Button.displayName = "Button"
