import sandal1 from "../assets/sandal-1.jpeg";
import sandal2 from "../assets/sandal-2.jpeg";
import sandal3 from "../assets/sandal-3.jpeg";
import sandal4 from "../assets/sandal-4.jpeg";
import sandal5 from "../assets/sandal-5.jpeg";
import sandal6 from "../assets/sandal-6.jpeg";
import type { ProductColor } from "./colors";


interface Category {
  id: number;
  name: string;
}

interface ProductType {
  id: number;
  name: string;
}

export type Product = {
  id: number;
  name: string;
  category: Category;
  product_type: ProductType;
  price: string;
  description: string;
  is_featured: boolean;
  material: string;
  colors: ProductColor[];
  created_at: string;
  updated_at: string;
};

export const products: Product[] = [
  {
    id: 16,
    name: "Carnival 1704",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "359.00",
    description:
      "Design\r\nElegantly crafted with sleek metallic-accented straps and a sparkling buckle, this contemporary sandal blends minimalist style with feminine charm, making it the perfect choice for casual outings and everyday fashion.\r\n\r\nQuality\r\nMade with premium-quality materials, this sandal features a soft cushioned footbed, durable lightweight sole, and superior craftsmanship, ensuring lasting comfort, stability, and reliable everyday performance.",
    is_featured: true,
    material: "PU",
    colors: [
      {
        id: 17,
        name: "GAJARI",
        color_code: "#826855",
        sizes: [
          { id: 1, name: "5" },
          { id: 2, name: "6" },
          { id: 3, name: "7" },
          { id: 4, name: "8" },
          { id: 5, name: "9" },
        ],
        images: [
          {
            id: 19,
            image: sandal1,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T12:08:26.586153Z",
    updated_at: "2026-06-27T12:15:37.301074Z",
  },
  {
    id: 15,
    name: "Carnival 1701",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "419.00",
    description:
      "Design\r\nThis fashionable sandal features an elegant multi-strap crossover design enhanced with metallic piping and a shimmering crystal-studded strap. The toe-loop construction provides a secure fit, while the sleek silhouette adds a modern, feminine touch that complements both casual and dressy outfits.\r\n\r\nColor Pattern\r\nThe soft Gajri Pink upper is beautifully accented with luxurious gold metallic detailing and sparkling crystal embellishments. A clean white lightweight sole creates a stylish contrast, giving the sandal a fresh, premium, and contemporary appearance.\r\n\r\nQuality\r\nCrafted from high-quality materials, this sandal offers a soft cushioned footbed, lightweight flexible sole, and durable toe-loop construction for superior comfort and stability. Premium craftsmanship, fine finishing, and long-lasting materials ensure excellent durability, making it ideal for everyday wear with lasting style and performance.",
    is_featured: false,
    material: "PU",
    colors: [
      {
        id: 16,
        name: "GAJARI",
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
            id: 18,
            image:sandal2,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T11:50:19.490690Z",
    updated_at: "2026-06-27T11:50:19.490710Z",
  },
  {
    id: 14,
    name: "Carnival",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "399.00",
    description:
      "Design\r\nThis elegant black sandal features a contemporary open-toe silhouette with a stylish toe-loop, textured front strap, and secure elastic back strap. Its clean, minimalist design delivers a sophisticated look that pairs effortlessly with both casual and everyday outfits.\r\n\r\nColor Pattern\r\nFinished in an all-black color scheme, this sandal exudes timeless elegance and versatility. The subtle textured detailing on the front strap adds depth, while the monochrome design creates a sleek, premium appearance suitable for any occasion.\r\n\r\nQuality\r\nCrafted from high-quality materials, this sandal offers a soft cushioned footbed, durable elastic heel strap, and a lightweight, flexible sole for lasting comfort. Superior stitching and premium construction ensure excellent durability, stability, and reliable all-day performance.",
    is_featured: false,
    material: "PU",
    colors: [
      {
        id: 15,
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
            id: 17,
            image:sandal3,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T11:41:44.139898Z",
    updated_at: "2026-06-27T11:41:44.139914Z",
  },
  {
    id: 13,
    name: "Carnival 1699",
    category: { id: 4, name: "Kids" },
    product_type: { id: 1, name: "Sandals" },
    price: "314.00",
    description:
      "Design\r\nThis elegant black sandal features a contemporary open-toe silhouette with a stylish toe-loop, textured front strap, and secure elastic back strap. Its clean, minimalist design delivers a sophisticated look that pairs effortlessly with both casual and everyday outfits.\r\n\r\nColor Pattern\r\nFinished in an all-black color scheme, this sandal exudes timeless elegance and versatility. The subtle textured detailing on the front strap adds depth, while the monochrome design creates a sleek, premium appearance suitable for any occasion.\r\n\r\nQuality\r\nCrafted from high-quality materials, this sandal offers a soft cushioned footbed, durable elastic heel strap, and a lightweight, flexible sole for lasting comfort. Superior stitching and premium construction ensure excellent durability, stability, and reliable all-day performance.",
    is_featured: false,
    material: "PU",
    colors: [
      {
        id: 14,
        name: "BLACK",
        color_code: "#000000",
        sizes: [
          { id: 10, name: "1" },
          { id: 11, name: "2" },
          { id: 12, name: "3" },
          { id: 13, name: "4" },
        ],
        images: [
          {
            id: 16,
            image:sandal4,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T11:39:45.466805Z",
    updated_at: "2026-06-27T11:39:45.466824Z",
  },
  {
    id: 12,
    name: "Carnival 1699",
    category: { id: 2, name: "Girls" },
    product_type: { id: 1, name: "Sandals" },
    price: "314.00",
    description:
      "Design\r\nThis elegant black sandal features a contemporary open-toe silhouette with a stylish toe-loop, textured front strap, and secure elastic back strap. Its clean, minimalist design delivers a sophisticated look that pairs effortlessly with both casual and everyday outfits.\r\n\r\nColor Pattern\r\nFinished in an all-black color scheme, this sandal exudes timeless elegance and versatility. The subtle textured detailing on the front strap adds depth, while the monochrome design creates a sleek, premium appearance suitable for any occasion.\r\n\r\nQuality\r\nCrafted from high-quality materials, this sandal offers a soft cushioned footbed, durable elastic heel strap, and a lightweight, flexible sole for lasting comfort. Superior stitching and premium construction ensure excellent durability, stability, and reliable all-day performance.",
    is_featured: false,
    material: "PU",
    colors: [
      {
        id: 13,
        name: "BLACK",
        color_code: "#000000",
        sizes: [
          { id: 6, name: "10" },
          { id: 7, name: "11" },
          { id: 8, name: "12" },
          { id: 9, name: "13" },
        ],
        images: [
          {
            id: 15,
            image:sandal5,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:20:42.588464Z",
    updated_at: "2026-06-27T12:10:49.148107Z",
  },
  {
    id: 11,
    name: "Carnival 1697",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 4, name: "Slippers" },
    price: "324.00",
    description:
      "Design\r\nThis elegant toe-post sandal features a sleek V-strap silhouette enhanced with metallic accents and a sparkling crystal buckle. Its modern minimalist design delivers a perfect balance of sophistication and everyday style, making it suitable for casual, festive, and semi-formal occasions.\r\n\r\nColor Pattern\r\nThe rich Forest Green upper paired with subtle metallic trim creates a premium, eye-catching contrast. A clean white lightweight sole adds a fresh, contemporary look, while the crystal embellishment elevates the overall appearance with a touch of luxury.\r\n\r\nQuality\r\nCrafted from premium-quality materials, this sandal offers a soft cushioned footbed, durable toe-post construction, and a lightweight, slip-resistant sole for superior comfort. Designed with excellent craftsmanship, it provides long-lasting durability, stability, and all-day walking comfort.",
    is_featured: true,
    material: "324",
    colors: [
      {
        id: 12,
        name: "FOREST GREEN",
        color_code: "#228B22",
        sizes: [
          { id: 1, name: "5" },
          { id: 2, name: "6" },
          { id: 3, name: "7" },
          { id: 4, name: "8" },
          { id: 5, name: "9" },
        ],
        images: [
          {
            id: 14,
            image:sandal6,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:16:02.458282Z",
    updated_at: "2026-06-27T08:16:02.458298Z",
  },
  {
    id: 10,
    name: "Carnival 1688",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "399.00",
    description:
      "Designed for modern women, this chic embellished sandal offers superior comfort, flexible support, and a stylish finish perfect for casual outings and daily adventures.",
    is_featured: true,
    material: "399",
    colors: [
      {
        id: 11,
        name: "WOOD ROSE",
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
            id: 13,
            image:
              sandal1,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:10:34.755815Z",
    updated_at: "2026-06-27T08:10:34.755832Z",
  },
  {
    id: 9,
    name: "Carnival 1687",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "389.00",
    description:
      "Crafted for all-day comfort, this fashionable wedge sandal combines a soft footbed, secure toe-post design, and premium finish, making every step stylish and effortless.",
    is_featured: true,
    material: "PU",
    colors: [
      {
        id: 10,
        name: "GREY",
        color_code: "#808080",
        sizes: [
          { id: 1, name: "5" },
          { id: 2, name: "6" },
          { id: 3, name: "7" },
          { id: 4, name: "8" },
          { id: 5, name: "9" },
        ],
        images: [
          {
            id: 12,
            image:
              sandal2,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:08:21.703606Z",
    updated_at: "2026-06-27T08:08:21.703623Z",
  },
  {
    id: 8,
    name: "Carnival 1680",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 4, name: "Slippers" },
    price: "399.00",
    description:
      "Designed for modern women, this chic embellished sandal offers superior comfort, flexible support, and a stylish finish perfect for casual outings and daily adventures.",
    is_featured: true,
    material: "PU",
    colors: [
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
            image:
              sandal2,
            alt_text: "WOODROSE",
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:05:02.293460Z",
    updated_at: "2026-06-27T08:05:02.293481Z",
  },
  {
    id: 7,
    name: "Carnival 1649",
    category: { id: 1, name: "Ladies" },
    product_type: { id: 1, name: "Sandals" },
    price: "329.00",
    description:
      "Design \r\nElegantly crafted with sleek metallic-accented straps and a sparkling buckle, this contemporary sandal blends minimalist style with feminine charm, making it the perfect choice for casual outings and everyday fashion.\r\n\r\nQuality\r\nMade with premium-quality materials, this sandal features a soft cushioned footbed, durable lightweight sole, and superior craftsmanship, ensuring lasting comfort, stability, and reliable everyday performance.",
    is_featured: true,
    material: "PU",
    colors: [
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
            image:sandal4,
            alt_text: null,
          },
        ],
      },
    ],
    created_at: "2026-06-27T08:00:14.413892Z",
    updated_at: "2026-06-27T08:00:14.413907Z",
  },
];
