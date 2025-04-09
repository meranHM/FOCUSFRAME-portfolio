import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { testimonials } from "../constants"


const TestimonialsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null)


    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) {
            return
        }

        const amount = dir === "left" ? -300 : 300
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }

  return (
    <section
        className="py-24 px-6 lg:px-20 bg-darkModeColors-ivory text-white"
        id="testimonials"
    >
        <motion.h2
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
        >
            Testimonials
        </motion.h2>

        <div
            className="relative"
        >
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full hover:bg-black/70"
            >
                <ChevronLeft className="text-white w-6 h-6"/>
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full hover:bg-black/70"
            >
                <ChevronRight className="text-white w-6 h-6"/>
            </button>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-1"
            >
                {testimonials.map((test, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-darkModeColors-ivory border border-white/10 rounded 2xl px-6 py-5 min-w-[300px] md:min-w-[350px] snap-center shadow-lg relative"
                    >
                        <div
                            className="flex items-center gap-3 mb-4"
                        >
                            <img 
                                src={test.avatar} 
                                alt={test.name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500"
                            />
                            <p className="test-sm text-gray-300"></p>
                        </div>
                        <motion.p
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-cyan-900/20 p-4 rounded-xl text-gray-20 text-sm font-light shadow-inner"
                        >
                            “{test.quote}”
                        </motion.p>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default TestimonialsSection