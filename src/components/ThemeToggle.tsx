import { useTheme } from "../context/ThemeContext"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

  return (
    <button
        onClick={toggleTheme}
        className="p-2 rounded-full backdrop-blur bg-white/10 dark:bg-white/5 hover:bg-white/20"
    >
        {theme === "dark" 
            ? <Sun className="text-white"/> 
            : <Moon className="text-black"/>
        }
    </button>
  )
}

export default ThemeToggle