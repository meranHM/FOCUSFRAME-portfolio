import { useState } from "react"
import { motion } from "framer-motion"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"



const ContactSection = () => {
    const [form, setForm] = useState<{name: string, email: string, message: string}>({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)

        setTimeout(() => {
            setForm({ name: "", email: "", message: "" })
            setSubmitted(false)
        }, 2000)
    }

  return (
    <section
        className="py-20 px-6 sm:px-12 md:px-24 relative"
        id="contact"
    >
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
        >
            Get in Touch
        </motion.h2>

        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-8 bg-black/5 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-black/10 dark:border-white/10"
        >
            <div
                className="relative"
            >
                <input 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 px-2 focus:outline-none focus:border-cyan-400 placeholder-transparent"
                    placeholder="Name"
                />
                <label
                    htmlFor="name"
                    className="absolute left-0 top-2 text-gray-900/10 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-900 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-lg peer-focus:text-cyan-700 peer-focus:font-bold dark:peer-focus:text-cyan-400 transition-all"
                >
                    Name
                </label>
            </div>

            <div
                className="relative"
            >
                <input 
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 px-2 focus:outline-none focus:border-cyan-400 placeholder-transparent"
                    placeholder="Email"
                />
                <label 
                    htmlFor="email"
                    className="absolute left-0 top-2 text-gray-900/10 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-900 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-lg peer-focus:text-cyan-700 peer-focus:font-bold dark:peer-focus:text-cyan-400 transition-all"
                >
                    Email
                </label>
            </div>

            <div
                className="relative"
            >
                <textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 px-2 focus:outline-none focus:border-cyan-400 placeholder-transparent resize-none"
                    placeholder="Your Message"
                />
                <label 
                    htmlFor="message"
                    className="absolute left-0 top-2 text-gray-900/10 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-900 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-lg peer-focus:text-cyan-700 peer-focus:font-bold dark:peer-focus:text-cyan-400 transition-all"
                >
                    Message
                </label>
            </div>

            <div
                className="relative"
            >
                <label
                    className="block text-xl  text-gray-900 dark:text-gray-300 mb-2  mt-10"
                >
                    Preferred Shoot Date
                </label>
                    <DatePicker 
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select a date and time"
                        className="w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 focus:outline-none focus:border-cyan-400 placeholder-gray-900 dark:placeholder-gray-300"
                        wrapperClassName="w-full"
                    />
            </div>

            <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={submitted}
                className="relative overflow-hidden bg-cyan-500 text-white px-6 py-2 rounded-md text-lg shadow-md hover:bg-cyan-600 transition-colors"
            >
                <span
                    className={`transition-all duration-300 ${submitted ? "opacity-0" : "opacity-100"}`}
                >
                    Send
                </span>

                {submitted && (
                    <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold"
                    >
                        <span className="animate-stamp">📬</span>
                    </motion.span>)}
            </motion.button>
        </form>

        <p
            className="text-center text-base text-gray-900 dark:text-gray-400 mt-6 italic"
        >
            Available for shoots in: NYC • Toronto • Paris
        </p>
    </section>
  )
}

export default ContactSection