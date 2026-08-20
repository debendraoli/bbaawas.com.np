import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-heading text-7xl font-bold text-navy-100">४०४</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
        पृष्ठ फेला परेन
      </h1>
      <p className="mt-3 max-w-md text-silver-600">
        तपाईंले खोज्नुभएको पृष्ठ हटाइएको वा ठेगाना परिवर्तन भएको हुन सक्छ।
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          गृहपृष्ठमा जानुहोस्
        </Link>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 rounded-full border border-silver-300 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-white"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          सम्पत्तिहरू हेर्नुहोस्
        </Link>
      </div>
    </section>
  );
}
