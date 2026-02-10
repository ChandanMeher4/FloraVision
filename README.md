# 🌿 Dr. Maya Reynolds, PsyD | Clinical Practice Redesign

A high-performance, responsive clinical website redesigned for **Dr. Maya Reynolds**, a licensed clinical psychologist based in **Santa Monica, CA**. This project demonstrates UI cloning accuracy, bespoke theme development, and local SEO optimization.

---

## 🚀 Project Overview

This project involved a transition from a generic template to a specialized, professional platform tailored to high-achieving clients navigating anxiety and burnout.

### Key Deliverables:

- **UI Reconstruction**: Cloned the "Lilac" template with pixel-perfect accuracy before applying a custom redesign.
- **Smart Navigation**: Implemented a "Smart Sticky" Navbar using **Framer Motion** that hides on scroll-down and reappears on scroll-up to improve readability.
- **Intentional Branding**: Developed a "Santa Monica Grounded" theme using a palette of Sand, Terra, and Olive to reflect Dr. Maya's coastal practice.

---

## 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Handling**: Next.js `<Image />` component with `fill` and `object-cover` for responsive layout
- **Deployment**: Vercel

---

## 🎨 Design Rationale

As a developer with a background in building business portfolios like **"Skyline Construction"**, I focused on creating a "visual narrative" for the user:

1.  **Grounded Textures**: Integrated exposed brick and natural light imagery to match the "private space" mentioned in the doctor's profile.
2.  **Abstract Wellness**: Used coastal abstracts (Pacific ocean, mist) in the **Specialties** and **FAQ** sections to symbolize mental clarity and resilience.
3.  **Visual Hierarchy**: Utilized a deep `maya-olive` section before the footer to create a strong Call-to-Action (CTA) anchor.

---

## 🔍 SEO Strategy

Implemented best practices to ensure the practice ranks well in the local Santa Monica region:

- **Semantic HTML**: Proper use of H1 and H2 tags containing clinical keywords like "Trauma Recovery" and "Burnout & Perfectionism".
- **Optimized Alt Text**: Every image includes descriptive, keyword-rich alt tags.
  - _Example_: `alt="Dr. Maya Reynolds PsyD - Licensed Clinical Psychologist specializing in Trauma and Anxiety in Santa Monica"`.

---

## 📂 Repository Structure

```text
├── public/              # High-res assets (Dr. Maya Portrait, Office JPGs)
├── src/
│   ├── components/      # Modular React Components
│   │   ├── Reveal.jsx   # Scroll animation wrapper
│   │   ├── Office.jsx   # Custom-built grid for practice space
│   │   └── Navbar.jsx   # Smart-hide logic
│   └── tailwind.config  # Custom theme colors (Sand, Terra, Olive)

## 🚀 Getting Started

### Setup Instructions

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📄 License

All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.
