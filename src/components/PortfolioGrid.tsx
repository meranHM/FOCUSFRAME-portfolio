import { useState } from "react"
import { photos } from "../constants"
import Lightbox from "./Lightbox"


const PortfolioGrid = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-8">
            {photos.map((photo, index) => (
                <div
                    key={photo.id}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md group"
                    onClick={() => openLightbox(index)}
                >
                    <img 
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="mt-2 text-lg text-center text-gray-900">{photo.title}</div>
                </div>
            ))}

        <Lightbox 
            isOpen={isOpen}
            photo={photos[currentIndex]}
            onClose={closeLightbox}    
            onPrev={prev}
            onNext={next}
        />
    </div>
  )
}

export default PortfolioGrid