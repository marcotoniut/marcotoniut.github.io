"use client"

import type { ComponentPropsWithoutRef, ElementRef, RefObject } from "react"

import {
  card,
  cardContent,
  cardHeader,
  cardSubtitle,
  cardTitle,
} from "./card.css"

export type CardProps = ComponentPropsWithoutRef<"div">

export const Card = ({
  className,
  ref,
  ...props
}: CardProps & { ref?: RefObject<ElementRef<"div"> | null> }) => {
  return (
    <div
      {...props}
      className={className ? `${card} ${className}` : card}
      ref={ref}
    />
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
      className={className ? `${cardHeader} ${className}` : cardHeader}
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
      className={className ? `${cardTitle} ${className}` : cardTitle}
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
      className={className ? `${cardSubtitle} ${className}` : cardSubtitle}
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
      className={className ? `${cardContent} ${className}` : cardContent}
      ref={ref}
    />
  )
}
CardContent.displayName = "CardContent"
