"use client"

import { useState } from "react"
import * as styles from "./ContactForm.css"

interface ContactFormProps {
  translations: {
    title: string
    titlePlaceholder: string
    message: string
    messagePlaceholder: string
    phone: string
    phonePlaceholder: string
    submit: string
  }
}

export function ContactForm({ translations }: ContactFormProps) {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct mailto link with form data
    const emailAddress = "contact@marcotoniut.com"
    const subject = encodeURIComponent(title)
    const bodyParts = []

    if (message) {
      bodyParts.push(message)
    }

    if (phone) {
      bodyParts.push(`\n\n---\nPhone: ${phone}`)
    }

    const body = encodeURIComponent(bodyParts.join("\n"))
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`

    // Open mailto link
    window.location.href = mailtoLink
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          {translations.title} <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={translations.titlePlaceholder}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          {translations.message} <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={translations.messagePlaceholder}
          rows={8}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          {translations.phone}
        </label>
        <input
          type="tel"
          id="phone"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={translations.phonePlaceholder}
        />
      </div>

      <button
        type="submit"
        className={styles.button}
        disabled={!title.trim() || !message.trim()}
      >
        {translations.submit}
      </button>
    </form>
  )
}
