# FloraVision – Product Listing Page

A pixel-perfect, responsive recreation of the FloraVision landing page built with **Next.js** and **Tailwind CSS**, based on the provided Figma design.

## Tech Stack

- **Next.js 16** – React framework with App Router
- **Tailwind CSS 3** – Utility-first styling
- **Framer Motion** – Scroll-triggered animations
- **Google Fonts** – Inter & Indie Flower

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
git clone https://github.com/ChandanMeher4/floravision.git
cd floravision
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & glassmorphism utilities
│   ├── layout.jsx         # Root layout with font imports
│   └── page.jsx           # Main page assembly
├── components/
│   ├── Header.jsx         # Navbar with mobile drawer
│   ├── HeroSection.jsx    # Hero banner with CTA & product card
│   ├── TrendyPlants.jsx   # Trending plants pill cards
│   ├── TopSelling.jsx     # Product grid (6 cards)
│   ├── CustomerReviews.jsx # Testimonial cards
│   ├── BestO2.jsx         # O₂ featured section
│   ├── FooterSection.jsx  # Footer with newsletter
│   └── SectionTitle.jsx   # Reusable section heading
public/
└── assets/                # All images and icons
```

## Features

- Glassmorphism card effects using CSS mask-composite for gradient borders with border-radius support
- Fully responsive across 320px to 1440px+
- Scroll-triggered entrance animations
- Mobile hamburger menu with backdrop blur overlay
- Semantic HTML with proper alt text and aria labels

## Deployment

Deployed on Vercel: [Live URL]
