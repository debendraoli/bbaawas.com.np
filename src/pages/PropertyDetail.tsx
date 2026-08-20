import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Maximize,
  Phone,
  MessageCircle,
  Check,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import {
  getPropertyById,
  galleryImages,
  properties,
} from "../data/properties";
import { site, whatsappLink } from "../data/site";
import PropertyCard from "../components/PropertyCard";
import NotFound from "./NotFound";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TYPE_LABEL = { land: "जग्गा", house: "घर" } as const;

const STATUS_LABEL = {
  available: "उपलब्ध",
  pending: "कुरा भइरहेको",
  sold: "बिक्री भइसकेको",
} as const;

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = id ? getPropertyById(id) : undefined;
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return <NotFound />;

  const images = galleryImages(property);
  const related = properties
    .filter((item) => item.id !== property.id && item.type === property.type)
    .slice(0, 3);

  const enquiryMessage = `नमस्ते, म "${property.title}" (${property.location}) को बारेमा जानकारी लिन चाहन्छु।`;

  return (
    <div ref={revealRef}>
      {/* Breadcrumb */}
      <nav
        aria-label="ब्रेडक्रम"
        className="border-b border-silver-200 bg-white"
      >
        <div className="container-page flex items-center gap-1.5 py-3 text-sm text-silver-600">
          <Link to="/" className="transition-colors hover:text-navy-900">
            गृहपृष्ठ
          </Link>
          <ChevronRight className="h-4 w-4 text-silver-400" aria-hidden="true" />
          <Link to="/properties" className="transition-colors hover:text-navy-900">
            सम्पत्तिहरू
          </Link>
          <ChevronRight className="h-4 w-4 text-silver-400" aria-hidden="true" />
          <span className="truncate font-medium text-navy-900">
            {property.title}
          </span>
        </div>
      </nav>

      <section className="container-page py-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Gallery + content */}
          <div>
            <div data-reveal className="overflow-hidden rounded-2xl bg-silver-100">
              <img
                src={images[activeImage]}
                alt={`${property.title} — तस्बिर ${activeImage + 1}`}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <div data-reveal className="mt-3 flex gap-3">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`तस्बिर ${index + 1} हेर्नुहोस्`}
                    aria-current={index === activeImage}
                    className={`overflow-hidden rounded-lg border-2 transition-all ${
                      index === activeImage
                        ? "border-gold-500"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-20 w-28 object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            <div data-reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
                  {TYPE_LABEL[property.type]}
                </span>
                <span className="rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700">
                  {STATUS_LABEL[property.status]}
                </span>
                {property.featured && (
                  <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-navy-950">
                    विशेष
                  </span>
                )}
              </div>

              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {property.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-silver-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  {property.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Maximize className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  {property.area}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-silver-700">
                {property.longDescription}
              </p>
            </div>

            {/* Specs */}
            <div data-reveal className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-navy-900">
                विवरण
              </h2>
              <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {property.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-silver-200 bg-white p-4"
                  >
                    <dt className="text-xs uppercase tracking-wide text-silver-500">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 font-heading font-semibold text-navy-900">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Highlights */}
            <div data-reveal className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-navy-900">
                विशेषताहरू
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-silver-700"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky enquiry card */}
          <aside data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-silver-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-silver-500">
                मूल्य
              </p>
              <p className="mt-1 font-heading text-3xl font-bold text-forest-700">
                {property.price}
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={whatsappLink(enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  ह्वाट्सएपमा सोध्नुहोस्
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-silver-300 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-silver-50"
                >
                  सम्पर्क फारम भर्नुहोस्
                </Link>
              </div>

              <p className="mt-5 border-t border-silver-100 pt-4 text-xs leading-relaxed text-silver-500">
                स्थलगत भ्रमण निःशुल्क छ। कागजात र नामसारी सम्बन्धी सम्पूर्ण
                सहयोग हामी गर्छौं।
              </p>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2
                data-reveal
                className="font-heading text-2xl font-bold text-navy-900"
              >
                यस्तै अन्य सम्पत्तिहरू
              </h2>
              <Link
                data-reveal
                to="/properties"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                सबै सम्पत्तिहरू
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
