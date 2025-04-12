import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"


const Header = () => {
  return (
    <header
        className="fixed left-0 right-0 top-0 z-40 bg-black/70 backdrop-blur"
    >
        <div
            className="fixed top-2 right-4 z-50"
        >
            <ThemeToggle />
        </div>
        <Navbar />
    </header>
  )
}

export default Header