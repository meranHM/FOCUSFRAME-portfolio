import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PortfolioGrid from "./components/PortfolioGridSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import { ThemeProvider } from "./context/ThemeContext"



const App = () => {
  return (
    <ThemeProvider>
      <div
        className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white"
      >
        <Header />
        <HeroSection />
        <PortfolioGrid />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  )
}

export default App