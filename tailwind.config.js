/** @type {import('tailwindcss').Config} */


export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "var(--font-cormorant)",
        playFair: "var(--font-playfair)"
      },
      animation: {
        stamp: "stamp 0.6s ease-out forwards" 
      },
      keyframes: {
        stamp: {
          "0%": { transform: "scale(2) rotate(-45deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}