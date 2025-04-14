import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { services } from "../constants"
import { X} from "lucide-react"
import { useBooking } from "../context/BookingContext"

const ServicesSection = () => {
    const [active, setActive] = useState<null | number>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    const { setService } = useBooking()

    // Book Now Button functionality
    const handleBookNow = (type: string) => {
        setService(`Hey! I'm intrested in booking a ${type.toLocaleLowerCase()} photoshoot.`)
        const element = document.getElementById("contact")
        element?.scrollIntoView({ behavior: "smooth" })
        setActive(null)
    }

    // Escape key to close modals
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActive(null)
            }
        }

        if (active !== null) {
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [active])

    // Focus trap on open modals
    useEffect(() => {
        if (active !== null && modalRef.current) {
            const focusable = modalRef.current.querySelector("button")
            ;(focusable as HTMLElement)?.focus()
        }
    }, [active])

  return (
    <section
        className="py-24 px-6 mb-10 lg:px-20 relative z-10"
        id="services"
        role="region"
        aria-labelledby="services-heading"
    >
        <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
        >
            Services &amp; Pricing
        </motion.h2>

        <div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    onClick={() => setActive(index)}
                    onKeyDown={(e) => e.key === "Enter" && setActive(index)}
                    tabIndex={0}
                    className="cursor-pointer relative h-64 flex flex-col justify-center bg-black/10 dark:bg-white/10 backdrop-blur-0-md p-6 rounded-2xl shadow-md hover:shadow-lg border border-black/20 dark:border-white/20 hover:border-cyan-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    role="button"
                    aria-label={`Learn more about ${service.title} service for ${service.price}`}
                >
                    <div
                        className="flex justify-between items-center mb-4"
                    >
                        <div
                            className="flex items-center gap-2"
                        >
                            {service.icon && <service.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-300"/>}
                            <h3
                                className="text-xl md:text-2xl font-semibold text-black dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                            >
                                {service.title}
                            </h3>
                        </div>
                        <span
                            className="text-cyan-600 dark:text-cyan-300 font-bold text-lg md:text-xl bg-cyan-900/30 px-3 py-1 md:px-4 md:py-2 rounded-full"
                        >
                            {service.price}
                        </span>
                    </div>
                    <p
                        className="text-sm font-bold md:text-lg text-gray-900 dark:text-gray-300"
                    >
                        {service.description}
                    </p>
                    <div
                        className="absolute top-2 right-2 w-3 h-3 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg" />
                </motion.div>
            ))}
        </div>

        {active !== null && (
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                onClick={() => setActive(null)}
            >
                <motion.div
                    ref={modalRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-darkModeColors-gray10 text-white rounded-xl p-8 max-w-md w-full shadow-xl "
                >
                    <h3
                        id="modal-title"
                        className="text-2xl font-bold mb-2"
                    >
                        {services[active].title}
                    </h3>
                    <p
                        className="text-base md:text-xl tracking-wide text-cyan-300 mb-4"
                    >
                        {services[active].price}
                    </p>
                    <p
                        className="text-gray-200 md:text-lg tracking"
                        id="modal-description"
                    >
                        {services[active].details}
                    </p>

                    <button
                        className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition mt-4"
                        onClick={() => handleBookNow(services[active].title)}
                    >
                        Book Now
                    </button>

                    <button
                        className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
                        onClick={() => setActive(null)}
                        aria-label="Close modal"
                    >
                        <X aria-hidden="true"/>
                    </button>
                </motion.div>
            </div>
        )}

    </section>
  )
}

export default ServicesSection