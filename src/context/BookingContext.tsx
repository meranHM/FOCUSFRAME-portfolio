import { createContext, useContext, useState } from "react"

interface BookingContextProps {
    service: string
    setService: (msg: string) => void
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined)

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [service, setService] = useState("")

    return (
        <BookingContext.Provider value={{ service, setService }}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBooking = () => {
    const context = useContext(BookingContext)
    if (!context) {
        throw new Error("useBooking must be used within BookingProvider")
    }
    return context
}