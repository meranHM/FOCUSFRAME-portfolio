import firstImage from "../assets/image-1.webp"
import secondImage from "../assets/image-2.webp"
import thirdImage from "../assets/image-3.webp"
import fourthImage from "../assets/image-4.webp"
import { 
    CameraIcon,
    UserCircle,
    PackageSearch,
} from "lucide-react"


export const photos = [
    {
        id: 1,
        src: firstImage,
        title: "Through the Camera Lens",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["Nature", "Forest"],
        description: "Shot while sunrise in Central Park, New York.",
    },
    {
        id: 2,
        src: secondImage,
        title: "Travel Memories",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW", "Minimal"],
        description: "Vintage Camera and Polaroids on Antique World Map - A Photographer's Journey",
    },
    {
        id: 3,
        src: thirdImage,
        title: "Analog Meets Modern",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW", "Minimal"],
        description: "Vintage Camera - Shot using natural light",
    },
    {
        id: 4,
        src: fourthImage,
        title: "Capturing Another Professional",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["Portrait", "Nature"],
        description: "Shot during sunset in Arizona",
    },
    // Add more photo objects...
  ];


export const timeline = [
      { year: "2012", text: "Took my first photo with a Nikon D3100" },
      { year: "2016", text: "First solo exhibition — 'Shadows of Light'" },
      { year: "2019", text: "Started traveling for freelance gigs" },
      { year: "2023", text: "Launched this online portfolio" },
    ]


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