import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { photos } from "../constants"
import Lightbox from "./Lightbox"

const tags = Array.from(new Set(photos.flatMap(p => p.tags)))


const PortfolioGrid = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [activeTag, setActiveTag] = useState<string>("All")

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    const filteredPhotos = 
        activeTag === "All"
        ? photos
        : photos.filter((photo) => photo.tags.includes(activeTag))

    const openLightbox = (index: number) => {
        const globalIndex = photos.findIndex(photo => photo.src === filteredPhotos[index].src)
        setCurrentIndex(globalIndex)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length )
    }

  return (
    <section 
        className="px-4 py-12 bg-color-darkCyan text-white"
        ref={ref}
    >
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
        >
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="text-gray-400 mt-2">Explore my favorite captures</p>
        </motion.div>

        <div className="flex justify-center mb-6 gap-3 flex-wrap">
            {["All", ...tags].map(tag => (
                <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-1 rounded-full border ${
                        activeTag === tag
                        ? "bg-white text-black border-white"
                        : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
                    } transition`}
                >
                    {tag}
                </button>
            ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
                {filteredPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className="cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-1 shadow-lg group hover:scale-[1.015] transition-transform"
                        onClick={() => openLightbox(index)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <img 
                            src={photo.src}
                            alt={photo.title}
                            className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                        <div className="mt-2 text-lg text-center text-gray-300">{photo.title}</div>
                    </motion.div>
                ))}
        </motion.div>
        <Lightbox 
            isOpen={isOpen}
            photo={photos[currentIndex]}
            onClose={closeLightbox}    
            onPrev={prev}
            onNext={next}
        />
    </section>
  )
}

export default PortfolioGrid