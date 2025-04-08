import { motion } from "framer-motion"
import heroVideo from "../assets/hero-video.webm"

const HeroSection = () => {
  return (
    <section
        className="relative w-full h-screen overflow-hidden"
    >
        <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
        >
            <source src={heroVideo} type="video/webm"/>
        </video>
        <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center"
        >
            <motion.h1
                className="text-6xl md:text-8xl font"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Your Name
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl italic underline underline-offset-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Capturing moments that matter
            </motion.p>
            <motion.button
                className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Enter Gallery
            </motion.button>
        </div>

    </section>
  )
}

export default HeroSection