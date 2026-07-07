


import { useEffect, useState } from "react";
import type { ProductType } from "../../product/types/types.product";
import getTypes from "../api/getTypes";

export function useTypes() {
  const [type, setTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTypes()
      .then(setTypes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { type, loading, error };
}
