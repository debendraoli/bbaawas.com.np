import { Link } from "react-router-dom";
import { MapPin, Maximize, ArrowUpRight } from "lucide-react";
import type { Property } from "../types/property";

const TYPE_LABEL: Record<Property["type"], string> = {
  land: "जग्गा",
  house: "घर",
};

const STATUS_STYLE: Record<
  Property["status"],
  { label: string; className: string }
> = {
  available: { label: "उपलब्ध", className: "bg-forest-600 text-white" },
  pending: { label: "कुरा भइरहेको", className: "bg-gold-400 text-navy-950" },
  sold: { label: "बिक्री भइसकेको", className: "bg-silver-600 text-white" },
};

export default function PropertyCard({ property }: { property: Property }) {
  const status = STATUS_STYLE[property.status];

  return (
    <article
      data-reveal
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-silver-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-silver-100">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-70" />

        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
            {TYPE_LABEL[property.type]}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        {property.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950 shadow">
            विशेष
          </span>
        )}

        <p className="absolute bottom-3 left-3 font-heading text-xl font-bold text-white drop-shadow">
          {property.price}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-semibold text-navy-900 transition-colors group-hover:text-navy-700">
          {property.title}
        </h3>

        <p className="flex items-center gap-1.5 text-sm text-silver-600">
          <MapPin className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
          {property.location}
        </p>

        <p className="line-clamp-2 text-sm leading-relaxed text-silver-600">
          {property.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-silver-100 pt-4">
          <span className="flex items-center gap-1.5 text-sm font-medium text-navy-800">
            <Maximize className="h-4 w-4 text-silver-500" aria-hidden="true" />
            {property.area}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
            विवरण हेर्नुहोस्
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      {/* Stretched link keeps the whole card clickable without nesting anchors */}
      <Link
        to={`/properties/${property.id}`}
        className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
      >
        <span className="sr-only">{property.title} को विवरण हेर्नुहोस्</span>
      </Link>
    </article>
  );
}
