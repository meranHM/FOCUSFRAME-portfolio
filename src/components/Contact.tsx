import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section
        className="min-h-screen bg-slate-800 text-white p-16"
        id="contact"
    >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300">Let's work together!</p>
        </motion.div>
    </section>
  )
}

export default Contact