import React from "react"
import Navbar from "./Navbar"
import { Sun, Moon } from "lucide-react"

interface HeaderProps {
    toggleTheme: () => void
    theme: "dark" | "light"
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <header
        className="fixed left-0 right-0 top-0 z-40 bg-black/70 backdrop-blur"
    >
        <div
            className="fixed top-2 right-4 z-50"
        >
            <button
            className="p-2 rounded-full backdrop-blur bg-white/10 dark:bg-white/5 hover:bg-white/20"
            onClick={toggleTheme}
            >
                {theme === "dark" 
                    ? <Sun className="text-white"/> 
                    : <Moon className="text-black"/>
                }
            </button>
        </div>
        <Navbar />
    </header>
  )
}

export default Header