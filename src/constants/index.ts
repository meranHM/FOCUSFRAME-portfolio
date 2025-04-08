import firstImage from "../assets/image-1.webp"
import secondImage from "../assets/image-2.webp"
import thirdImage from "../assets/image-3.webp"
import fourthImage from "../assets/image-4.webp"

export const photos = [
    {
      id: 1,
      src: firstImage,
      title: "Through the Camera Lens",
      exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
      tags: ["Nature"],
      description: "Shot while sunrise in Central Park, New York.",
    },
    {
        id: 2,
        src: secondImage,
        title: "Travel Memories",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW"],
        description: "Vintage Camera and Polaroids on Antique World Map - A Photographer's Journey",
    },
    {
        id: 3,
        src: thirdImage,
        title: "Analog Meets Modern",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["BW"],
        description: "Vintage Camera - Shot using natural light",
    },
    {
        id: 4,
        src: fourthImage,
        title: "Capturing Another Professional",
        exif: { camera: "Canon R6", lens: "50mm f/1.2", iso: 400 },
        tags: ["Portrait"],
        description: "Shot during sunset in Arizona",
    },
    // Add more photo objects...
  ];