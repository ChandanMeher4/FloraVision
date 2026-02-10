/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maya: {
          sand: '#F9F7F2',      // The warm wall color
          text: '#2D2A26',      // Deep charcoal (Professional)
          terra: '#A87664',     // Brick Red (Accent)
          sage: '#8FA89B',      // Plant Green (Secondary)
          olive: '#747946',
          muted: '#E5E0D8',     // Taupe for backgrounds
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'], // Ideally, swap this for 'Playfair Display' if you know how to add fonts
        sans: ['Arial', 'sans-serif'],       // Clean sans-serif
      },
      borderRadius: {
        'arch': '50% 50% 0 0', 
      }
    },
  },
  plugins: [],
};