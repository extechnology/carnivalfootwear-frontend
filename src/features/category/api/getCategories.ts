import type { Category } from "../types/category.types";
import { categories } from "../../../lib/category";

const getCategories = async (): Promise<Category[]> => {
  return categories;
};

export default getCategories;
