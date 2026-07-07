import type { ProductTypes } from "../types/productTypes.types";
import { productTypes } from "../../../lib/product-types";

export const getTypes = async (): Promise<ProductTypes[]> => {
  return productTypes;
};

export default getTypes;
