
import { Link, useLocation } from "react-router";
import { ArrowLeft, Home, SearchX } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  const pageName =
    location.pathname === "/login"
      ? "Login"
      : location.pathname === "/register"
        ? "Get Started"
        : "Page";

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#10110f] px-5 py-16 text-white">
      <div className="w-full max-w-lg text-center">

        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-lime-400/20 bg-lime-400/10">
          <SearchX size={38} className="text-lime-400" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          Coming Soon
        </p>

        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          {pageName} Page
        </h1>

        <p className="mx-auto mb-8 max-w-md leading-7 text-gray-400">
          This page is not available yet. We are working on it and will make
          it available soon. Please return to the home page to explore our
          Gym Management System.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-lime-400 hover:text-lime-400"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-xs tracking-wide text-gray-600">
          GYMFLOW · GYM MANAGEMENT SYSTEM
        </p>

      </div>
    </section>
  );
};

export default NotFound;
