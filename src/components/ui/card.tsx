"use client"

import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react"

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

export const Card = ({
  className,
  ref,
  ...props
}: CardProps & { ref?: RefObject<ElementRef<"div"> | null> }) => {
  return (
    <div {...props} className={mergeClassNames(card, className)} ref={ref} />
  )
}
Card.displayName = "Card"

export type CardHeaderProps = ComponentPropsWithoutRef<"div">

export const CardHeader = ({
  className,
  ref,
  ...props
}: CardHeaderProps & { ref?: RefObject<ElementRef<"div"> | null> }) => {
  return (
    <div
      {...props}
      className={mergeClassNames(cardHeader, className)}
      ref={ref}
    />
  )
}
CardHeader.displayName = "CardHeader"

export type CardTitleProps = ComponentPropsWithoutRef<"h3">

export const CardTitle = ({
  className,
  ref,
  ...props
}: CardTitleProps & { ref?: RefObject<ElementRef<"h3"> | null> }) => {
  return (
    <h3
      {...props}
      className={mergeClassNames(cardTitle, className)}
      ref={ref}
    />
  )
}
CardTitle.displayName = "CardTitle"

export type CardSubtitleProps = ComponentPropsWithoutRef<"p">

export const CardSubtitle = ({
  className,
  ref,
  ...props
}: CardSubtitleProps & { ref?: RefObject<ElementRef<"p"> | null> }) => {
  return (
    <p
      {...props}
      className={mergeClassNames(cardSubtitle, className)}
      ref={ref}
    />
  )
}
CardSubtitle.displayName = "CardSubtitle"

export type CardContentProps = ComponentPropsWithoutRef<"div">

export const CardContent = ({
  className,
  ref,
  ...props
}: CardContentProps & { ref?: RefObject<ElementRef<"div"> | null> }) => {
  return (
    <div
      {...props}
      className={mergeClassNames(cardContent, className)}
      ref={ref}
    />
  )
}
CardContent.displayName = "CardContent"
