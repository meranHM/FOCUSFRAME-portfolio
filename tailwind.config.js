/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "var(--font-cormorant)",
      },
      colors: {
        darkModeColors: {
          darkCyan: "#111418",
          white: "#ffffff",
        },
        lightModeColors: {
          whiteSmoke: "#f4f4f4",
          chineseBlack: "#111111",
        }
      },
    },
  },
  plugins: [],
}