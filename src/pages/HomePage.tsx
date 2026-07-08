import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";

import { useHeroImage } from "../features/home/hooks/useHeroImage";
import { useProducts } from "../features/product/hooks/useProducts";
import { useSectionImage } from "../features/home/hooks/useSectionImage";

import { Reveal } from "../components/site/Reveal";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { ProductCard } from "../components/site/ProductCard";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { heroImage } = useHeroImage();
  const { sectionImage } = useSectionImage();

  console.log(heroImage, "heroimage");

  // FIX: Derive safely — never undefined at render time
  const sectionImg = sectionImage?.[0]?.image ?? null;
  const total = heroImage?.length ?? 0;
  const { products: apiProducts } = useProducts();

  // Carousel state
  const [active, setActive] = useState(0);
  const [paused] = useState(false);
  const [dir, setDir] = useState(1);

  // FIX: Guard go() so modulo is never called on 0 or undefined
  const go = useCallback(
    (next: number, direction: number) => {
      if (!total) return;
      setDir(direction);
      setActive(((next % total) + total) % total);
    },
    [total],
  );

  // FIX: Skip interval entirely when images aren't loaded yet
  useEffect(() => {
    if (paused || total === 0) return;
    const id = setInterval(() => go(active + 1, 1), 4000);
    return () => clearInterval(id);
  }, [active, paused, go, total]);

  // Reset active index if heroImage reloads with fewer slides
  // useEffect(() => {
  //   if (total > 0 && active >= total) {
  //     setActive(0);
  //   }
  // }, [total, active]);

  const featured = apiProducts
    ? apiProducts.filter((p) => p.is_featured).slice(0, 9)
    : [];

  // FIX: reference apiProducts (was missing from original — keep your existing hook)

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-black"
      >
        {total > 0 && heroImage ? (
          <>
            {/* Slides */}
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                className="absolute inset-0"
                variants={{
                  enter: (d: number) => ({
                    opacity: 0,
                    scale: 1.08,
                    x: d > 0 ? 80 : -80,
                  }),
                  center: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  },
                  exit: (d: number) => ({
                    opacity: 0,
                    scale: 1.08,
                    x: d > 0 ? -80 : 80,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.img
                  src={heroImage[active].image}
                  alt={heroImage[active].alt_text ?? ""}
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={{
                    scale: [1, 1.08],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" /> */}

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            {/* Left Content */}
            <motion.div
              style={{ y, opacity }}
              className="relative z-20 flex h-full items-center"
            >
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <Breadcrumbs
                  items={[
                    { label: "Carnival Footwear", to: "/" },
                    { label: "Elegant Collection" },
                  ]}
                />

                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="md:mt-8 mt-4 max-w-3xl text-5xl font-medium leading-[0.88] tracking-tight text-white md:text-5xl xl:text-7xl"
                >
                  Every Step Deserves the Best. <br />
                  <span className=" font-normal text-white/90">
                    Discover Footwear That Fits Your Life.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                  }}
                  className="md:mt-8 mt-4 max-w-xl text-xs md:text-lg md:leading-8 text-white/75"
                >
                  Step into comfort, style, and confidence with premium footwear
                  designed to fit your lifestyle.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="md:mt-12 mt-6 flex flex-wrap gap-4"
                >
                  <Link
                    to="/products"
                    className="group rounded-full bg-white px-4 py-2 text-xs md:px-8 md:py-4 md:text-sm font-medium text-black transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-3">
                      Explore Collection
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Vertical Progress */}
            <div className="absolute right-10 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col gap-4">
              {heroImage.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "h-16 w-[3px] bg-white"
                      : "h-8 w-[2px] bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            {/* <div className="absolute bottom-10 right-10 z-30">
              <div className="text-5xl font-light text-white">
                {String(active + 1).padStart(2, "0")}

                <span className="ml-2 text-lg text-white/40">
                  / {heroImage.length}
                </span>
              </div>
            </div> */}

            {/* Arrows */}
            {/* <div className="absolute bottom-10 left-10 z-30 flex gap-3">
              <button
                onClick={() => go(active - 1, -1)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black"
              >
                ←
              </button>

              <button
                onClick={() => go(active + 1, 1)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black"
              >
                →
              </button>
            </div> */}

            {/* Scroll */}
            {/* <div className="absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2 md:flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Scroll
              </span>

              <div className="h-12 w-px bg-white/40" />
            </div> */}
          </>
        ) : (
          <div className="h-screen animate-pulse bg-neutral-900" />
        )}
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-12 md:py-40">
        <div className="md:mb-16 mb-8 flex flex-col md:gap-8 gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Prime Edition — Quiet Comfortable</p>
            <h2 className="display mt-4 max-w-3xl font-medium text-3xl leading-none md:text-5xl">
              Walk Into Every Moment with .{" "}
              <span className=" text-accent">Confidence</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/shop"
              className="link-underline text-[11px] uppercase tracking-[0.25em]"
            >
              See the full collection →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 py-10 md:grid-cols-12 md:gap-0 md:px-12 md:py-40">
          <div className="md:col-span-7">
            <div className="overflow-hidden ">
              {/* FIX: Render single image (first), not a mapped list */}
              {sectionImg && (
                <motion.img
                  src={sectionImg}
                  alt="Woman walking in Cyber Lady nude strap sandals on marble"
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

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-8 text-center md:px-12 md:py-20">
        <Reveal>
          <h2 className="display mx-auto mt-3 max-w-4xl font-medium text-4xl leading-none md:text-6xl">
            Your Forever <span className=" text-accent">Favourite</span>
            <br />
            Starts Here
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border-b border-ink pb-2 text-[12px] uppercase tracking-[0.3em] transition-colors hover:text-accent hover:border-accent"
            >
              Enter the shop →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
