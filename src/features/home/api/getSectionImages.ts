import type { Section } from "../section.types";
import { sectionImage } from "../../../lib/section-image";

const getSectionImage = async (): Promise<Section[]> => {
  return sectionImage;
};

export default getSectionImage;
