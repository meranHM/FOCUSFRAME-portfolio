import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PortfolioGrid from "./components/PortfolioGridSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"
import { BookingProvider } from "./context/BookingContext"
import { Toaster } from "sonner"


const App = () => {
  return (
    <ThemeProvider>
      <BookingProvider>
        <div
          className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white"
          id="theme-container"
        >
          <Header />
          <HeroSection />
          <PortfolioGrid />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <Toaster position="top-center" />
        </div>
      </BookingProvider>
    </ThemeProvider>
  )
}

export default App