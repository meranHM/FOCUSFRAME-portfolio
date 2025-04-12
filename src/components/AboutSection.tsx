import { motion } from "framer-motion"
import PolaroidImg from "../assets/polaroid-image.webp"
import Signature from "../assets/signature.webp"
import { timeline } from "../constants"



const AboutSection = () => {

  return (
    <motion.section
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-24"
        id="about"
    >
        <div
            className="relative z-10 lg:w-1/2 w-full flex justify-center items-center mb-12 lg:mb-0"
        >
            <div
                className="p-4 rounded-lg shadow-lg max-w-xs rotate-[-3deg]"
            >
                <img 
                    src={PolaroidImg}
                    alt="Selife"
                    className="w-full h-auto object-cover rounded-md"
                />
                <p 
                    className="text-center text-black mt-2 text-sm italic"
                >
                    Me at 20 📸
                </p>
                {Signature && (
                <img 
                    src={Signature}
                    alt="Signature"
                    className="absolute rounded-md bottom-[-2rem] right-[-1rem] w-24 opacity-80"
                />
            )}
            </div>

        </div>

        <div
            className="z-10 lg:w-1/2 w-full space-y-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold"
            >
                About the Artist
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-900 dark:text-gray-300"            
            >
                Started with a Nikon at 14. Fell in love with chasing light. Each photo I take is a
                fragment of a bigger story — <span className="text-nowrap">mine, yours, ours.</span>
            </motion.p>

            <div
                className="mt-6 border-l border-gray-600 pl-6 space-y-4"
            >
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className="relative"
                    >
                        <span
                            className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-cyan-400"
                        />
                        <p className="text-base font-bold text-gray-800 dark:text-gray-400">{item.year}</p>
                        <p className="text-base md:text-lg text-black dark:text-white">{item.text}</p>

                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}

export default AboutSection