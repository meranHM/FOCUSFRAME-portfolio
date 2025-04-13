import { useState } from "react"
import { navLinks } from "../constants"
import { X, Menu } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"


const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }
 
  return (
    <header
        className="fixed left-0 right-0 top-0 z-40 bg-black/60"
    >
        <div
            className="fixed top-2 left-4 z-50"
        >
            <ThemeToggle />
        </div>

        {/* Hamburger Button */}
        <div
          className="md:hidden fixed top-4 right-4 z-50 overflow-hidden"
        >
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-1 rounded-lg backdrop-blur bg-white/10 dark:bg-white/5 hover:bg-white/20"
          >
            {menuOpen ? <X size={28} className="text-white"/> : <Menu size={28} className="text-white"/>}
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav
          className="hidden md:flex mx-auto justify-center gap-6 p-4 text-base text-white md:text-lg"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              href={link.href}
              className="hover:underline"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Animated Sidebar Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />

              {/* Sidebar */}
              <motion.div
                className="fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black/90 p-6 pt-20 text-white z-40 md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <motion.nav
                  className="flex flex-col gap-6 text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      onClick={toggleMenu}
                      className="hover:underline"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                </motion.nav>

              </motion.div>
            </>
          )}
        </AnimatePresence>

    </header>
  )
}

export default Header