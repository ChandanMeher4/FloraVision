module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flora: {
          dark: '#1B2316',
          darker: '#1A2217',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        indie: ['"Indie Flower"', 'cursive'],
      },
      backdropBlur: {
        'glass': '25px',
        'glass-lg': '40px',
      },
      borderRadius: {
        'card': '77px',
        'pill': '151px',
        'section': '92px',
      },
    },
  },
  plugins: [],
};