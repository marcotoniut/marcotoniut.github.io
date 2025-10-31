# 🧑‍💻 Marco Toniut — Personal Website

This repository contains the source code for my personal website — a space to showcase my work, projects, and professional CV, as well as to experiment with various ideas and technologies.

---

## 🚀 Overview

The website is built with **Next.js** and deployed via **GitHub Pages**.  
It includes:

- A multilingual, interactive CV.
- Links to personal and professional projects.
- Experimental features and design prototypes.

---

## 🧠 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Vanilla Extract
- **Translations:** typesafe-i18n
- **PDF Generation:** Puppeteer
- **Deployment:** GitHub Pages (`gh-pages`)

---

## ⚙️ Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/marcotoniut/marcotoniut.github.io.git
cd marcotoniut.github.io
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:8825](http://localhost:8825).

---

## 🧾 Generating the CV PDF

The `/cv` page is designed to generate a printable, styled PDF version of the CV using **Puppeteer**.

### 1. Install Chrome for Puppeteer (if not already available)

```bash
npx puppeteer browsers install chrome
```

### 2. Run the CV print script

```bash
pnpm print-cv
```

This script will:

- Start a local development server on port `8829`
- Open the `/cv` page in Puppeteer
- Export it as a PDF located at:

`./local/Marco Toniut (CV).pdf`

If you encounter an error about missing Chrome, re-run the install command above.

---

## 🌍 Deployment

Build and deploy the website to GitHub Pages:

```bash
pnpm deploy
```

The deployment script will:

- Clear any build caches
- Run a fresh production build
- Push the compiled output to the `gh-pages` branch
- Disable Jekyll with a `.nojekyll` marker

---

## 🔤 Translations

The site uses [`typesafe-i18n`](https://github.com/ivanhofer/typesafe-i18n) for multilingual support.

### To regenerate translation files:

```bash
pnpm typesafe-i18n
```

### To watch and rebuild translations automatically during development:

```bash
pnpm dev
```

---

## 🧩 Project Structure

```text
src/
├── app/ # Next.js app directory (routing, layouts, pages)
├── i18n/ # Translations and generated locale files
├── components/ # UI components
├── styles/ # Styling via Vanilla Extract
└── scripts/ # Utility scripts (e.g. print-cv.js)
```

---

## 📬 Contact

**Marco Toniut**  
📧 [marco.toniut@gmail.com](mailto:marco.toniut@gmail.com)
🌍 [marcotoniut.github.io](https://marcotoniut.github.io)
📍 London, UK
