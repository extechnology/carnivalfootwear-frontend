import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";

import { useHeroImage } from "../../features/home/hooks/useHeroImage";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { heroImage } = useHeroImage();

  console.log(heroImage, "heroimage");
  const total = heroImage?.length ?? 0;

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

  return (
    <div>
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

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            {/* Left Content */}
            <motion.div
              style={{ y, opacity }}
              className="relative z-20 flex h-full items-center"
            >
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="md:mt-8 mt-4 max-w-3xl text-5xl font-medium leading-[0.99] tracking-tight text-white md:text-5xl xl:text-7xl"
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
          </>
        ) : (
          <div className="h-screen animate-pulse bg-neutral-900" />
        )}
      </section>
    </div>
  );
};

export default Hero;
