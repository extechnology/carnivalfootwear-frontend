import type { HeroImage } from "../../../lib/hero-image";
import { heroImage } from "../../../lib/hero-image";

const getHeroImages = async (): Promise<HeroImage[]> => {
  return heroImage;
};

export default getHeroImages;