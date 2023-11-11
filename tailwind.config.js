/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/bg-intro-desktop.png')",
        'hero-pattern-mb': "url('/src/images/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
