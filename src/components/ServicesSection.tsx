import { useState } from "react"
import { motion } from "framer-motion"
import { services } from "../constants"
import { X } from "lucide-react"

const ServicesSection = () => {
    const [active, setActive] = useState<null | number>(null)

  return (
    <section
        className="py-24 px-6 lg:px-20 relative z-10"
    >
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
        >
            Services &amp; Pricing
        </motion.h2>

        <div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    onClick={() => setActive(index)}
                    className="cursor-pointer relative bg-white/10 backdrop-blur-0-md p-6 rounded-2xl shadow-md hover:shadow-lg border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                    <div
                        className="flex justify-between items-center mb-4"
                    >
                        <h3
                            className="text-xl font-semibold text-white group-hover:text-cyan-300"
                        >
                            {service.title}
                        </h3>
                        <span
                            className="text-cyan-300 font-bold text-lg bg-cyan-900/30 px-3 py-1 rounded-full"
                        >
                            {service.price}
                        </span>
                    </div>
                    <p
                        className="text-sm text-gray-300"
                    >
                        {service.description}
                    </p>
                    <div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg" />
                </motion.div>
            ))}
        </div>

        {active !== null && (
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={() => setActive(null)}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0}}
                    className="bg-darkModeColors-gray10 text-white rounded-xl p-8 max-w-md w-full shadow-xl relative"
                >
                    <h3
                        className="text-2xl font-bold mb-2"
                    >
                        {services[active].title}
                    </h3>
                    <p
                        className="text-sm text-cyan-300 mb-4"
                    >
                        {services[active].price}
                    </p>
                    <p
                        className="text-gray-300"
                    >
                        {services[active].details}
                    </p>

                    <button
                        className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
                        onClick={() => setActive(null)}
                    >
                        <X />
                    </button>
                </motion.div>
            </div>
        )}

    </section>
  )
}

export default ServicesSection