import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 text-black">
      <div className="max-w-xl text-center">
        {/* <p className="text-sm uppercase text-center tracking-[0.4em] text-black/50">
          Error
        </p> */}

        <h1 className="mt-1 display text-8xl font-light tracking-tight md:text-9xl">
          404
        </h1>

        <div className="mx-auto mt-3 h-px w-24 bg-black/20" />

        <h2 className="mt-2 text-3xl font-light md:text-4xl">Page Not Found</h2>

        <p className="mt-2 leading-8 text-black/60">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-2">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 border border-black/60 px-7 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black"
          >
            <BsArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
