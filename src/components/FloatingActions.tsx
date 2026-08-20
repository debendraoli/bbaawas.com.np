import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { site, whatsappLink } from "../data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="सिरानमा फर्कनुहोस्"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg ring-1 ring-silver-200 transition-transform hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}

      <a
        href={`tel:${site.phone}`}
        aria-label="फोन गर्नुहोस्"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition-transform hover:scale-105 sm:h-11 sm:w-11"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ह्वाट्सएपमा हामीसँग कुरा गर्नुहोस्"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.36.687 4.56 1.875 6.41L4 29l7.79-1.837A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.994 17.13c-.29.816-1.44 1.5-2.363 1.694-.63.13-1.454.234-4.22-.905-3.542-1.457-5.823-5.05-6.001-5.284-.176-.234-1.44-1.912-1.44-3.647 0-1.735.91-2.587 1.234-2.94.324-.353.71-.44.946-.44.235 0 .47.002.676.012.216.01.507-.082.793.605.29.7.985 2.416 1.07 2.59.088.176.147.382.03.617-.117.234-.176.382-.352.588-.176.206-.37.46-.53.617-.176.176-.36.367-.155.72.206.352.914 1.508 1.963 2.442 1.35 1.204 2.487 1.577 2.84 1.753.352.176.558.147.764-.088.206-.234.882-1.03 1.117-1.383.235-.353.47-.294.793-.176.324.117 2.04.964 2.393 1.14.352.176.587.264.675.41.088.147.088.85-.203 1.665Z" />
        </svg>
      </a>
    </div>
  );
}
