import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  MapPinned,
  Handshake,
  LandPlot,
  Home as HomeIcon,
  FileText,
  TrendingUp,
  Ruler,
} from "lucide-react";
import { properties } from "../data/properties";
import { stats, services, processSteps } from "../data/content";
import { site } from "../data/site";
import PropertyCard from "../components/PropertyCard";
import SectionHeading from "../components/SectionHeading";
import Testimonials from "../components/Testimonials";
import FaqAccordion from "../components/FaqAccordion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import heroImage from "../assets/properties/1.jpg";

const SERVICE_ICONS = {
  landPlot: LandPlot,
  home: HomeIcon,
  fileText: FileText,
  trendingUp: TrendingUp,
  ruler: Ruler,
  shieldCheck: ShieldCheck,
} as const;

const TRUST_POINTS = [
  {
    icon: MapPinned,
    title: "स्थानीय विशेषज्ञता",
    description:
      "घोराही र सम्पूर्ण दाङ जिल्लाभरिको जग्गा तथा सम्पत्तिको गहिरो, स्थानीय जानकारी।",
  },
  {
    icon: ShieldCheck,
    title: "प्रमाणित सूचीहरू",
    description:
      "हामीले सूचीकृत गरेको प्रत्येक जग्गा र घरको स्वामित्व र कागजात राम्ररी जाँच गरिएको हुन्छ।",
  },
  {
    icon: Handshake,
    title: "सम्पूर्ण सहयोग",
    description:
      "साइट भ्रमणदेखि कागजी प्रक्रियासम्म, हामी तपाईंलाई हरेक कदममा मार्गदर्शन गर्छौं।",
  },
];

export default function Home() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const featuredProperties = properties.filter((property) => property.featured);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-navy-700),transparent_55%)] opacity-60" />

        <div className="container-page relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <span
              data-reveal
              className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300 ring-1 ring-inset ring-gold-400/30"
            >
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              {site.addressNp}
            </span>

            <h1
              data-reveal
              style={{ transitionDelay: "80ms" }}
              className="mt-6 font-heading text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              दाङमा भरपर्दो{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                जग्गा र घर
              </span>{" "}
              फेला पार्नुहोस्
            </h1>

            <p
              data-reveal
              style={{ transitionDelay: "160ms" }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-silver-300"
            >
              {site.legalNameNp}ले तपाईंलाई दाङ जिल्लाभरिका प्रमाणित जग्गा र
              घरहरूसँग जोड्छ — स्थानीय विशेषज्ञता र इमानदार मार्गदर्शनका साथ।
            </p>

            <div
              data-reveal
              style={{ transitionDelay: "240ms" }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-400/25 transition-all hover:bg-gold-300 hover:shadow-xl"
              >
                सम्पत्तिहरू हेर्नुहोस्
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Stats band */}
          <dl
            data-reveal
            style={{ transitionDelay: "320ms" }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl font-bold text-gold-400 sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-silver-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Trust points */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={point.title}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="group rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-gold-300">
                <point.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy-900">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-silver-100 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="सम्पत्तिहरू"
              title="विशेष सम्पत्तिहरू"
              description="हाल उपलब्ध सम्पत्तिहरूको झलक — सबै प्रमाणित कागजातसहित।"
            />
            <Link
              data-reveal
              to="/properties"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600"
            >
              सबै हेर्नुहोस्
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="हाम्रा सेवाहरू"
          title="हामीले के के गर्छौं"
          description="जग्गा खोज्नेदेखि नामसारी सम्पन्न गर्नेसम्म — सम्पत्ति सम्बन्धी सम्पूर्ण सेवा एकै ठाउँमा।"
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <div
                key={service.title}
                data-reveal
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
                className="group relative overflow-hidden rounded-2xl border border-silver-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold-100/60 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 font-heading text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-silver-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="प्रक्रिया"
            title="कसरी काम गर्छौं"
            description="सरल र पारदर्शी चार चरणमा तपाईंको सम्पत्ति कारोबार सम्पन्न हुन्छ।"
            align="center"
            tone="dark"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-gold-400/40"
              >
                <span className="font-heading text-4xl font-bold text-gold-400/40">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="जिज्ञासा"
          title="बारम्बार सोधिने प्रश्नहरू"
          description="धेरै ग्राहकले सोध्नुहुने प्रश्नहरूको उत्तर यहाँ छ। थप जिज्ञासा भए सम्पर्क गर्नुहोस्।"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-forest-500),transparent_60%)] opacity-50" />
        <div className="container-page relative py-16 text-center">
          <h2
            data-reveal
            className="font-heading text-2xl font-bold text-white sm:text-3xl"
          >
            आफ्नो अर्को सम्पत्ति खोज्न तयार हुनुहुन्छ?
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: "80ms" }}
            className="mx-auto mt-3 max-w-xl leading-relaxed text-forest-100"
          >
            आज नै सम्पर्क गर्नुहोस् — हाम्रो टिमले दाङमा उपयुक्त जग्गा वा घर
            फेला पार्न सहयोग गर्नेछ।
          </p>
          <div
            data-reveal
            style={{ transitionDelay: "160ms" }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-colors hover:bg-gold-100"
            >
              सम्पर्क गर्नुहोस्
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
