import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SectionHeading from "../components/SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { PropertyType } from "../types/property";

type TypeFilter = "all" | PropertyType;
type SortOrder = "default" | "priceAsc" | "priceDesc";

const TYPE_FILTERS: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "सबै" },
  { value: "land", label: "जग्गा" },
  { value: "house", label: "घरहरू" },
];

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "default", label: "पूर्वनिर्धारित" },
  { value: "priceAsc", label: "मूल्य: कमदेखि बढी" },
  { value: "priceDesc", label: "मूल्य: बढीदेखि कम" },
];

/** Distinct locations, derived from the listings themselves. */
const LOCATIONS = Array.from(new Set(properties.map((p) => p.location))).sort();

export default function Properties() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [location, setLocation] = useState("all");
  const [sort, setSort] = useState<SortOrder>("default");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = properties.filter((property) => {
      if (typeFilter !== "all" && property.type !== typeFilter) return false;
      if (location !== "all" && property.location !== location) return false;
      if (normalizedQuery) {
        const haystack =
          `${property.title} ${property.location} ${property.description}`.toLowerCase();
        if (!haystack.includes(normalizedQuery)) return false;
      }
      return true;
    });

    if (sort === "priceAsc") {
      return [...result].sort((a, b) => a.priceValue - b.priceValue);
    }
    if (sort === "priceDesc") {
      return [...result].sort((a, b) => b.priceValue - a.priceValue);
    }
    return result;
  }, [typeFilter, location, sort, query]);

  const hasActiveFilters =
    typeFilter !== "all" || location !== "all" || sort !== "default" || query !== "";

  const resetFilters = () => {
    setTypeFilter("all");
    setLocation("all");
    setSort("default");
    setQuery("");
  };

  return (
    <div ref={revealRef}>
      {/* Page header */}
      <section className="border-b border-silver-200 bg-white">
        <div className="container-page py-12 sm:py-16">
          <SectionHeading
            eyebrow="सूची"
            title="उपलब्ध सम्पत्तिहरू"
            description="दाङ जिल्लाभरि हाल उपलब्ध जग्गा र घरहरू हेर्नुहोस्। साइट भ्रमण वा थप विवरणका लागि सम्पर्क गर्नुहोस्।"
          />
        </div>
      </section>

      <section className="container-page py-10">
        {/* Filter bar */}
        <div
          data-reveal
          className="rounded-2xl border border-silver-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-silver-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ठाउँ वा सम्पत्तिको नामले खोज्नुहोस्…"
                aria-label="सम्पत्ति खोज्नुहोस्"
                className="w-full rounded-full border border-silver-300 py-2.5 pl-10 pr-4 text-sm transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="sr-only" htmlFor="location">
                स्थान
              </label>
              <select
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="rounded-full border border-silver-300 px-4 py-2.5 text-sm text-navy-800 transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
              >
                <option value="all">सबै स्थान</option>
                {LOCATIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="sr-only" htmlFor="sort">
                क्रमबद्ध
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortOrder)}
                className="rounded-full border border-silver-300 px-4 py-2.5 text-sm text-navy-800 transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-silver-100 pt-4">
            <SlidersHorizontal
              className="h-4 w-4 text-silver-500"
              aria-hidden="true"
            />
            {TYPE_FILTERS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setTypeFilter(item.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  typeFilter === item.value
                    ? "bg-navy-900 text-white"
                    : "bg-silver-50 text-navy-700 ring-1 ring-inset ring-silver-200 hover:bg-silver-100"
                }`}
              >
                {item.label}
              </button>
            ))}

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-silver-600 transition-colors hover:text-navy-900"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                फिल्टर हटाउनुहोस्
              </button>
            )}
          </div>
        </div>

        <p data-reveal className="mt-6 text-sm text-silver-600">
          <span className="font-semibold text-navy-900">{filtered.length}</span>{" "}
          वटा सम्पत्ति फेला पर्‍यो
        </p>

        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div
            data-reveal
            className="mt-10 rounded-2xl border border-dashed border-silver-300 bg-white py-16 text-center"
          >
            <p className="font-heading text-lg font-semibold text-navy-900">
              कुनै सम्पत्ति फेला परेन
            </p>
            <p className="mt-2 text-sm text-silver-600">
              फरक खोज शब्द वा फिल्टर प्रयोग गरी पुनः प्रयास गर्नुहोस्।
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              सबै सम्पत्ति हेर्नुहोस्
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
