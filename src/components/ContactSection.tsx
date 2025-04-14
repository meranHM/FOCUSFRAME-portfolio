import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useBooking } from "../context/BookingContext"
import { toast } from "sonner"



const ContactSection = () => {
    const [form, setForm] = useState<{
        name: string
        email: string
        message: string
        date: Date | null
    }>({
        name: "",
        email: "",
        message: "",
        date: null,
    })
    const [submitted, setSubmitted] = useState<boolean>(false)
    const { service, clearPrefillMessage } = useBooking()
    const [errors, setErrors] = useState<{
        name?: string
        email?: string
        message?: string
        date?: string
    }>({})


    // Form Validation
    const validate = () => {
        const newErrors: typeof errors = {}

        if (form.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.email.trim())) {
            newErrors.email = "Enter a valid email address"
        }

        if (form.message.trim().length === 0) {
            newErrors.message = "Message is required"
        }

        if (form.date && form.date < new Date()) {
            newErrors.date = "Date must be in the future"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }


    useEffect(() => {
        if (service && !form.message) {
            setForm(prev => ({...prev, message: service}))
        }
    }, [service])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validate()) {
            return
        }

        // Detecting bots
        const honeypot = (e.target as HTMLFormElement)["_gotcha"].value
        if (honeypot) {
            setSubmitted(false)
            return
        }

        setSubmitted(true)

        const formData = {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            date: form.date?.toISOString() || "",
        }

        // To enable form submissions, sign up at https://formspree.io or any other form provider
        // and replace the endpoint below with your own.
        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setForm({name: "", email: "", message: "", date: null})
                toast.success("Message sent successfully! 🎉")
                clearPrefillMessage()
            } else {
                toast.error("Something went wrong. Try again.")
            }
        } catch (error) {
            toast.error("Network error. try again later.")
        } finally {
            setSubmitted(false)
        }
    }

  return (
    <section
        className="py-20 px-6 sm:px-12 md:px-24 relative"
        id="contact"
        role="region"
        aria-label="Contact form"
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
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 px-2 focus:outline-none focus:border-cyan-400 placeholder-transparent"
                    placeholder="Name"
                    autoComplete="name"
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
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border-b border-gray-900 dark:border-gray-400 py-2 px-2 focus:outline-none focus:border-cyan-400 placeholder-transparent"
                    placeholder="Email"
                    autoComplete="email"
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
                    id="message"
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
                        selected={form.date}
                        onChange={(date) => setForm({...form, date})}
                        onKeyDown={(e) => e.preventDefault()}
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

            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off"/>

            <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
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
        {submitted && (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-green-500 mt-4 text-xl font-semibold"
            >
                Thanks for reaching out. We'll get back to you shortly. 🙌
            </motion.p>
        )}

        <p
            className="text-center text-base text-gray-900 dark:text-gray-400 mt-6 italic"
        >
            Available for shoots in: NYC • Toronto • Paris
        </p>
    </section>
  )
}

export default ContactSection