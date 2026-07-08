import { Link } from "react-router-dom";
import { Reveal } from "../site/Reveal";

const CTA = () => {
  return (
    <div>
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
    </div>
  );
};

export default CTA