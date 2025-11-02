"use client"

import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import {
  card,
  cardContent,
  cardHeader,
  cardSubtitle,
  cardTitle,
} from "./card.css"

function mergeClassNames(baseClass: string, className?: string) {
  return className ? `${baseClass} ${className}` : baseClass
}

export type CardProps = ComponentPropsWithoutRef<"div">

export const Card = forwardRef<ElementRef<"div">, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div {...props} className={mergeClassNames(card, className)} ref={ref} />
    )
  },
)
Card.displayName = "Card"

export type CardHeaderProps = ComponentPropsWithoutRef<"div">

export const CardHeader = forwardRef<ElementRef<"div">, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        className={mergeClassNames(cardHeader, className)}
        ref={ref}
      />
    )
  },
)
CardHeader.displayName = "CardHeader"

export type CardTitleProps = ComponentPropsWithoutRef<"h3">

export const CardTitle = forwardRef<ElementRef<"h3">, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        {...props}
        className={mergeClassNames(cardTitle, className)}
        ref={ref}
      />
    )
  },
)
CardTitle.displayName = "CardTitle"

export type CardSubtitleProps = ComponentPropsWithoutRef<"p">

export const CardSubtitle = forwardRef<ElementRef<"p">, CardSubtitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        {...props}
        className={mergeClassNames(cardSubtitle, className)}
        ref={ref}
      />
    )
  },
)
CardSubtitle.displayName = "CardSubtitle"

export type CardContentProps = ComponentPropsWithoutRef<"div">

export const CardContent = forwardRef<ElementRef<"div">, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        className={mergeClassNames(cardContent, className)}
        ref={ref}
      />
    )
  },
)
CardContent.displayName = "CardContent"
