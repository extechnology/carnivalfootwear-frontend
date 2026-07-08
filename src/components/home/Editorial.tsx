import { Reveal } from "../site/Reveal";
import { useSectionImage } from "../../features/home/hooks/useSectionImage";
import { motion } from "framer-motion";
const Editorial = () => {
  const { sectionImage } = useSectionImage();

  // FIX: Derive safely — never undefined at render time
  const sectionImg = sectionImage?.[0]?.image ?? null;
  return (
    <div>
      {/* EDITORIAL SPLIT */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 py-10 md:grid-cols-12 md:gap-0 md:px-12 md:py-40">
          <div className="md:col-span-7">
            <div className="overflow-hidden ">
              {/* FIX: Render single image (first), not a mapped list */}
              {sectionImg && (
                <motion.img
                  src={sectionImg}
                  alt="Woman walking in Carnival Footwear nude strap sandals on marble"
                  loading="lazy"
                  className="w-160 aspect-square object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </div>
          </div>

          <div className="md:col-span-5 md:pt-2 content-center">
            <Reveal>
              <p className="eyebrow">Confidence</p>
              <h2 className="display mt-3 font-medium text-3xl leading-[1.05] md:text-5xl">
                An Uncompromising Standard of <br />
                <span className=" text-accent">Comfort and Style.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Experience the perfect blend of comfort and style with premium
                footwear designed for everyday confidence. Every step feels
                effortless and looks exceptional.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-6 grid grid-cols-2 gap-y-8 border-t border-border pt-8">
                {[
                  ["1000+", "Unique Articles"],
                  ["15+", "Color Patterns"],
                  ["25Lk+", "Pair Deliver"],
                  ["500+", "Trusted Distributors"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="display text-3xl text-ink">{k}</dt>
                    <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Editorial;
