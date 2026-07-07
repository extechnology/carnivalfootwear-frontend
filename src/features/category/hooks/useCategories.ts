

import { useEffect, useState } from "react";
import type { Category } from "../types/category.types";
import getCategories from "../api/getCategories";

export function useCategories() {
  const [category, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { category, loading, error };
}
