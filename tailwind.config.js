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
        color: {
          darkCyan: "#111418",
        }
      }
    },
  },
  plugins: [],
}