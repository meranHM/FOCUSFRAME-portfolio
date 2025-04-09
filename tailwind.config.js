/** @type {import('tailwindcss').Config} */

export default {
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
      colors: {
        darkModeColors: {
          darkCyan: "#111418",
          white: "#ffffff",
          gray10: "#1a1a1a",
          ivory: "#0f0f0f",
        },
        lightModeColors: {
          whiteSmoke: "#f4f4f4",
          chineseBlack: "#111111",
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}