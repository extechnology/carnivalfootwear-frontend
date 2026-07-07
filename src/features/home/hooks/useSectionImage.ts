


import { useEffect, useState } from "react";
import type { Section } from "../section.types";
import getSectionImage from "../api/getSectionImages";

export function useSectionImage() {
  const [sectionImage, setSectionImages] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSectionImage()
      .then(setSectionImages)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { sectionImage, loading, error };
}
