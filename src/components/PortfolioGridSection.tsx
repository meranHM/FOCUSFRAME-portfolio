import { useState } from "react"
import { motion } from "framer-motion"
import { photos } from "../constants"
import Lightbox from "./Lightbox"

const tags = Array.from(new Set(photos.flatMap(p => p.tags)))


const PortfolioGrid = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [activeTag, setActiveTag] = useState<string>("All")


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
    <main 
        className="min-h-screen px-6 py-28"
        id="portfolio"
    >
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="text-center mb-8"
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}  
                className="text-3xl font-bold"
            >
                Portfolio
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}            
                className="text-gray-400 mt-2 text-lg"
            >
                Explore my favorite captures
            </motion.p>
        </motion.div>

        <motion.div 
            className="flex justify-center mb-6 gap-3 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}       
        >
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
        </motion.div>

        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}    
        >
                {filteredPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className="cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-1 shadow-lg group hover:scale-[1.015] transition-transform"
                        onClick={() => openLightbox(index)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
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
    </main>
  )
}

export default PortfolioGrid