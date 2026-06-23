# Reddit AI Assistant

A powerful Chrome extension designed to elevate your Reddit experience. By leveraging the power of AI, this extension filters out noise, highlights high-quality content, and assists in generating meaningful interactions for both **posts and comments** directly within your browser.

---

## 🚀 Overview

Reddit is a goldmine of information, but the constant stream of spam and low-quality content can be overwhelming. This project provides a **seamless AI-powered layer** over Reddit, allowing you to focus on high-value discussions and engage with content more effectively.

## 💡 The Problem & Solution

* **The Problem:** Manually scanning through endless threads and filtering out irrelevant noise is time-consuming and inefficient.
* **The Solution:** An intelligent assistant that filters posts based on custom AI criteria, provides instant insights for both posts and comments, and assists in crafting context-aware responses—saving you time and increasing productivity.

## ✨ Key Features

* **AI-Powered Content Filtering:** Filter subreddit posts using custom AI prompts to hide irrelevant or low-quality content.
* **Post & Comment Insights:** Get instant AI-driven summaries and analysis for both threads and specific comments.
* **Smart Interaction:** Generate relevant, context-aware responses to comments with one click.
* **Seamless Integration:** A clean, intuitive UI injected directly into the Reddit interface with a dedicated management popup.

## 🛠️ Tech Stack

This project is built using modern web development standards:

* **Framework:** [React](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Extension Framework:** [WXT (Web Extension Toolbox)](https://wxt.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **AI Engine:** Gemini API

---

## ⚙️ Installation Guide

### Prerequisites

* Node.js (v18+)
* `pnpm`

### Setup Steps

1. **Clone the repository:**
```bash
git clone [your-repo-url]
cd reddit-ai-assistant

```


2. **Install dependencies:**
```bash
pnpm install

```


3. **Run in development mode:**
```bash
pnpm dev

```

4. **Load into Chrome:**
* Open `chrome://extensions/` in your browser.
* Enable **Developer mode** in the top right.
* Click **Load unpacked** and select the `.output/chrome-mv3` directory generated after building.

---

> **Note:** This project is designed to be fully modular, allowing you to customize AI prompts and filtering logic to suit your specific Reddit browsing habits.