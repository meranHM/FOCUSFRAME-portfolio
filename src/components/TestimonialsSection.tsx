import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { testimonials } from "../constants"


const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
            }, 4000)
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isHovered])


  return (
    <section
        className="relative py-24 px-6 sm:px-12 md:px-20 bg-transparent"
        id="testimonials"
        role="region"
        aria-label="Customer testimonials"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <motion.h2
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center"
        >
            Testimonials
        </motion.h2>

        <div
            className="overflow-hidden relative max-w-3xl mx-auto"
        >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {testimonials.map((test, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="min-w-full px-4"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Testimonial from ${test.name}`}
                    >
                        <figure
                            className="bg-black/10 dark:bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl mx-auto relative border border-black/20 dark:border-white/20"
                        >
                            <figcaption
                                className="flex items-center mb-4"
                            >
                                <img 
                                    src={test.avatar} 
                                    alt={`Portrait of ${test.name}`}
                                    className="w-10 h-10 rounded-full object-cover mr-4 border border-black dark:border-white"
                                />
                                <p 
                                    className="text-base font-bold"
                                >
                                    {test.name}
                                </p>
                            </figcaption>
                            <blockquote>
                                <p
                                    className="text-base font-semibold leading-relaxed"
                                >
                                    “{test.quote}”
                                </p>
                            </blockquote>
                        </figure>
                    </motion.div>
                ))}
            </div>

            {/* Carousel Dots */}    
            <div
                className="flex justify-center gap-2 mt-6 py-4"
                role="tablist"
                aria-label="Testimonials carousel navigation"
            >
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${ index === activeIndex ? "bg-cyan-400" : "bg-gray-500/30" }`}
                        aria-label={`Show testimonial ${index + 1}`}
                        aria-selected={index === activeIndex}
                        role="tab"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection