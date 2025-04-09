import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PortfolioGrid from "./components/PortfolioGrid"
import AboutSection from "./components/AboutSection"
import { useState } from "react"



const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div
      className={`${theme === "dark"
        ? "bg-darkModeColors-darkCyan text-darkModeColors-white"
        : "bg-lightModeColors-whiteSmoke text-lightModeColors-chineseBlack"
      } relative transition-colors duration-500`}
    >
      <Header 
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
    </div>
  )
}

export default App