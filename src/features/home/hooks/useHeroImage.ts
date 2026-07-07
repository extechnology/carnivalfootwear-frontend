import { useEffect, useState } from "react";
import type { HeroImage } from "../section.types";
import getHeroImages from "../api/getHeroImages";

export function useHeroImage() {
  const [heroImage, setHeroImages] = useState<HeroImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHeroImages()
      .then(setHeroImages)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { heroImage, loading, error };
}
