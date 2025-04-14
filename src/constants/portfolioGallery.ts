// Dynamically importing all images in the /assets/images folder
const imageModules = import.meta.glob("../assets/images/*.{webp,jpg,png}", {eager: true, import: "default"})
const imageList = Object.values(imageModules)

interface Photo {
    id: number
    src: any
    title?: string
    exif?: { camera?: string, lens?: string, iso?: number }
    tags: string[]
    description?: string
}

// Portfolio Gallery Photos
export const photos: Photo[] = [
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