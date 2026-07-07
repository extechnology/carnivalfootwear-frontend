import lifestyle1 from "../assets/lifestyle-1.jpeg";

export interface SectionImage {
  id: number;
  image: string;
  alt_text: string;
  section: string;
}

export const sectionImage: SectionImage[] = [
  {
    id: 1,
    image: lifestyle1,
    alt_text: "Carnival Footwear lifestyle",
    section: "stats",
  },
];
