import color1 from "../assets/CL 0023, 7-12, BLACK, 449.jpg.jpeg";
import color2 from "../assets/CL 0023, CHIKU, 7-12, 449.jpg.jpeg";
import color3 from "../assets/CL 0024, CREAM, 7-12, 499.jpg.jpeg";
import color4 from "../assets/CL 0025, W.ROSE, 7-12, 499.jpg.jpeg";
import color5 from "../assets/CL 0026, BEIGE, 7-12, 499.jpg.jpeg";
import color6 from "../assets/CL 0029, 7-12, BLACK, 599.jpg.jpeg";
import color7 from "../assets/CL 0025, W.ROSE, 7-12, 499.jpg.jpeg";
import color8 from "../assets/CL 0025, W.ROSE, 7-12, 499.jpg.jpeg";


export interface Size {
  id: number;
  name: string;
}

export interface ProductImage {
  id: number;
  image: string;
  alt_text: string | null;
}

export interface ProductColor {
  id: number;
  name: string;
  color_code: string;
  sizes: Size[];
  images: ProductImage[];
}

export const colors = [
  {
    id: 2,
    name: "BLACK",
    color_code: "#000000",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 2,
        image: color1,
        alt_text: null,
      },
    ],
  },
  {
    id: 3,
    name: "BROWN",
    color_code: "#654321",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 4,
        image: color2,
        alt_text: null,
      },
    ],
  },
  {
    id: 4,
    name: "WINE",
    color_code: "#722F37",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 5,
        image: color3,
        alt_text: "1676",
      },
    ],
  },
  {
    id: 5,
    name: "BLACK",
    color_code: "#000000",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 6,
        image: color4,
        alt_text: null,
      },
    ],
  },
  {
    id: 6,
    name: "COPPER",
    color_code: "#B87333",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 11,
        image:color5,
        alt_text: null,
      },
    ],
  },
  {
    id: 7,
    name: "COPPER",
    color_code: "#B87333",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 8,
        image:color6,
        alt_text: "COPPER",
      },
    ],
  },
  {
    id: 8,
    name: "GAJARI",
    color_code: "#E5679B",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 9,
        image: color7,
        alt_text: null,
      },
    ],
  },
  {
    id: 9,
    name: "WOOD ROSE",
    color_code: "#AF8E90",
    sizes: [
      { id: 1, name: "5" },
      { id: 2, name: "6" },
      { id: 3, name: "7" },
      { id: 4, name: "8" },
      { id: 5, name: "9" },
    ],
    images: [
      {
        id: 10,
        image:color8,
        alt_text: "WOODROSE",
      },
    ],
  },
];
