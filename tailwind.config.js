/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Aldrich"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
