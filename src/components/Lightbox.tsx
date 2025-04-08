import { motion, AnimatePresence } from "framer-motion"
import { Fragment } from "react/jsx-runtime"
import { Dialog, Transition } from "@headlessui/react"
import { useState } from "react"

interface LightboxProps {
    isOpen: boolean
    photo: any
    onClose: () => void
    onPrev: () => void
    onNext: () => void
}


const Lightbox: React.FC<LightboxProps> = ({ isOpen, photo, onClose, onPrev, onNext }) => {
    if (!photo) {
        return null
    }

    const [hovered, setHovered] = useState<boolean>(false)

  return (
    <Transition
        appear
        show={isOpen}
        as={Fragment}
    >
        <Dialog
            as="div"
            className="relative z-50"
            onClose={onClose}
        >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm"/>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel
                    className="w-full max-w-5xl mx-auto"
                >
                    <AnimatePresence>
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="relative bg-black rounded-xl overflow-hidden shadow-lg"
                        >
                            <img 
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-[80vh] object-contain"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-sm space-y-1"
                            >
                                <h3 className="text-lg font-semibold">{photo.title}</h3>
                                <p>{photo.description}</p>
                                <div className="text-xs opacity-80">
                                    Camera: {photo.exif.camera} | Lens: {photo.exif.lens} | ISO: {photo.exif.iso}
                                </div>
                            </div>

                            {hovered && (
                            <>   
                                <button
                                    onClick={onPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                                >
                                    &lt;                               
                                </button>
                                <button
                                    onClick={onNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                                >
                                    &gt;
                                </button>
                            </> )}
                        </motion.div>
                    </AnimatePresence>
                </Dialog.Panel>
            </div>
        </Dialog>
    </Transition>
  )
}

export default Lightbox