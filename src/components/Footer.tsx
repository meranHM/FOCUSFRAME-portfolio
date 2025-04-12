import { footerIcons } from "../constants"
import { motion } from "framer-motion"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const year = new Date().getFullYear()

  return (
    <footer
        className="w-full py-10 px-6 md:px-20 mt-16 bg-white text-black dark:bg-black dark:text-white border-t border-slate-800 dark:border-white/30"
    >
        <div
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div
                className="flex gap-4 text-slate-500 dark:text-slate-400"
            >
                {footerIcons.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        className="hover:text-cyan-400 transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.2 }}
                    >
                        <item.icon className="w-5 h-5"/>
                    </motion.a>
                ))}
            </div>

            <button
                onClick={scrollToTop}
                className="text-slate-900 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-200 transition"
            >
                Back to Top ↑
            </button>
        </div>

        <div
            className="mt-6 border-t border-slate-700 pt-4 text-center text-base text-slate-900 dark:text-slate-400"
        >
            &copy; {year} Mehran Shahani. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer