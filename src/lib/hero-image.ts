
export interface HeroImage {
  id: number;
  image: string;
  alt_text: string;
  order: number;
}

export const heroImage: HeroImage[] = [
  {
    id: 5,
    image: "/1920 X 1080 pixel-01.jpg.jpeg",
    alt_text: "Carnival Footwear Hero",
    order: 1,
  },
  {
    id: 6,
    image: "/1920 X 1080 pixel-02.jpg.jpeg",

    alt_text: "Carnival Sandal 01",
    order: 2,
  },
  {
    id: 7,
    image: "/1920 X 1080 pixel-03.jpg.jpeg",

    alt_text: "Carnival Sandal 02",
    order: 3,
  },
];
