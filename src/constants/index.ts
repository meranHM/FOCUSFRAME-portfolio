import avatar from "../assets/avatars/avatar.png"
import { 
    CameraIcon,
    UserCircle,
    PackageSearch,
} from "lucide-react"
import { 
    FaLinkedin, 
    FaInstagram, 
    FaEnvelope } from "react-icons/fa"
    

// Dynamically importing all images in the /assets/images folder
const imageModules = import.meta.glob("../assets/images/*.{webp,jpg,png}", {eager: true, import: "default"})

const imageList = Object.values(imageModules)


// Navbar Links
export const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
]



// Portfolio Gallery Photos
export const photos = [
    {
        id: 1,
        src: imageList[0],
        title: "Through the Camera Lens",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["Nature", "Forest"],
        description: "Shot while sunrise in Central Park, New York.",
    },
    {
        id: 2,
        src: imageList[1],
        title: "Travel Memories",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW", "Minimal"],
        description: "Vintage Camera and Polaroids on Antique World Map - A Photographer's Journey",
    },
    {
        id: 3,
        src: imageList[2],
        title: "Analog Meets Modern",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW", "Minimal"],
        description: "Vintage Camera - Shot using natural light",
    },
    {
        id: 4,
        src: imageList[3],
        title: "Capturing Another Professional",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["Portrait", "Nature"],
        description: "Shot during sunset in Arizona",
    },
    // Add more photo objects...
  ];


// Career Timeline  
export const timeline = [
      { year: "2012", text: "Took my first photo with a Nikon D3100" },
      { year: "2016", text: "First solo exhibition — 'Shadows of Light'" },
      { year: "2019", text: "Started traveling for freelance gigs" },
      { year: "2023", text: "Launched this online portfolio" },
    ]



// Services and Pricing    
export const services = [
    {
        title: "Event Shoot",
        price: "$400+",
        description: "4 hours coverage • Edited high-res shots • Online gallery",
        details: "Up to 100 edited images. Travel included within city limits. Extra hours: $100/hour.",
        icon: CameraIcon
    },
    {
        title: "Portrait Session",
        price: "$200+",
        description: "1.5 hours • Outdoor or Studio • 15 retouched shots",
        details: "Includes wardrobe guidance. Studio cost not included. Extra edits: $10/image.",
        icon: UserCircle
    },
    {
        title: "Product Photography",
        price: "$250+",
        description: "20 product shots • Clean background • Lighting setup",
        details: "Perfect for ecommerce. Includes transparent background options and web optimization.",
        icon: PackageSearch
    }
]


// Testimonials
export const testimonials = [
    {
        name: "Emily R.",
        quote: "Working with Alex was pure magic. He captured every moment so perfectly — like he read my mind.",
        avatar: avatar,
    },
    {
        name: "Marcus L.",
        quote: "Best photo experience I've ever had. Professional, fast, and the shots? Chef's kiss.",
        avatar: avatar,
    },
    {
        name: "Sophie K.",
        quote: "I usually hate being photographed… but Alex made me feel so comfortable and confident. Love the results!",
        avatar: avatar,
    },
    {
        name: "Ethan J.",
        quote: "From first contact to final delivery - everything was seamless and beautiful.",
        avatar: avatar,
    },
    // Add more as needed
  ]

  // Footer Icons
  export const footerIcons = [
    {icon: FaInstagram, link: "https://instagram.com", name: "Instagram"},
    {icon: FaLinkedin, link: "https://linkedin.com", name: "Linkedin"},
    {icon: FaEnvelope, link: "mailto:you@example.com", name: "Email"},
  ]

