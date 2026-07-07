import heroSandal from "../assets/hero-sandal.jpeg";
import sandal1 from "../assets/sandal-1.jpeg";
import sandal2 from "../assets/sandal-2.jpeg";
import sandal3 from "../assets/sandal-3.jpeg";

export interface HeroImage {
    id: number;
    image: string;
    alt_text: string;
    order: number;
}


export const heroImage: HeroImage[] = [
  {
    id: 5,
    image: heroSandal,
    alt_text: "Carnival Footwear Hero",
    order: 1,
  },
  {
    id: 6,
    image: sandal1,
    alt_text: "Carnival Sandal 01",
    order: 2,
  },
  {
    id: 7,
    image: sandal2,
    alt_text: "Carnival Sandal 02",
    order: 3,
  },
  {
    id: 8,
    image: sandal3,
    alt_text: "Carnival Sandal 03",
    order: 4,
  },
];