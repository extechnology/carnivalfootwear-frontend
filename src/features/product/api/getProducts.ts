import type { Product } from "../types/types.product";
import { products } from "../../../lib/products";

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getProduct = async (id: number): Promise<Product> => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};