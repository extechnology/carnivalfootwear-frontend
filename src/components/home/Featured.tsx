import { Link } from "react-router-dom";

import { useProducts } from "../../features/product/hooks/useProducts";
import { ProductCard } from "../site/ProductCard";

import { Reveal } from "../site/Reveal";

const Featured = () => {
  const { products: apiProducts } = useProducts();

  const featured = apiProducts
    ? apiProducts.filter((p) => p.is_featured).slice(0, 9)
    : [];
  return (
    <div>
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
              to="/products"
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
    </div>
  );
};

export default Featured;
