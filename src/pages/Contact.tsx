import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { site, whatsappLink } from "../data/site";
import SectionHeading from "../components/SectionHeading";
import FaqAccordion from "../components/FaqAccordion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CONTACT_CARDS = [
  {
    icon: MapPin,
    label: "ठेगाना",
    value: site.addressNp,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`,
    external: true,
  },
  {
    icon: Phone,
    label: "फोन",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    external: false,
  },
  {
    icon: Mail,
    label: "इमेल",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "ह्वाट्सएप",
    value: "सन्देश पठाउनुहोस्",
    href: whatsappLink(),
    external: true,
  },
];

export default function Contact() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  /**
   * No backend on a static site — hand the enquiry to WhatsApp with the form
   * contents prefilled. Swap for a form service or Pages Function if you'd
   * rather collect submissions server-side.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `नमस्ते, मेरो नाम ${form.name || "—"} हो।\nसम्पर्क नम्बर: ${
      form.phone || "—"
    }\n\n${form.message}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={revealRef}>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-navy-700),transparent_55%)] opacity-70" />
        <div className="container-page relative py-16 sm:py-20">
          <SectionHeading
            eyebrow="सम्पर्क"
            title="हामीसँग सम्पर्क गर्नुहोस्"
            description="कुनै सूचीको बारेमा प्रश्न छ, वा आफ्नो जग्गा वा घर बेच्न चाहनुहुन्छ? हामी सधैं सहयोगका लागि तयार छौं।"
            tone="dark"
          />
        </div>
      </section>

      {/* Contact cards */}
      <section className="container-page py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card, index) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className="group rounded-2xl border border-silver-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-gold-300">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-600">
                {card.label}
              </p>
              <p className="mt-1 break-words text-sm font-medium text-navy-900">
                {card.value}
              </p>
            </a>
          ))}
        </div>

        {/* Form + map */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div data-reveal className="rounded-2xl border border-silver-200 bg-white p-7 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-navy-900">
              सोधपुछ फारम
            </h2>
            <p className="mt-2 text-sm text-silver-600">
              फारम भरेपछि तपाईंको सन्देश ह्वाट्सएपमार्फत हामीकहाँ पुग्नेछ।
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-navy-900"
                >
                  नाम
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="mt-1.5 w-full rounded-lg border border-silver-300 px-3.5 py-2.5 text-sm transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="तपाईंको नाम"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-navy-900"
                >
                  सम्पर्क नम्बर
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, phone: event.target.value }))
                  }
                  className="mt-1.5 w-full rounded-lg border border-silver-300 px-3.5 py-2.5 text-sm transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="९८XXXXXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-navy-900"
                >
                  सन्देश
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="mt-1.5 w-full rounded-lg border border-silver-300 px-3.5 py-2.5 text-sm transition-colors focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="हामी कसरी मद्दत गर्न सक्छौं?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                सन्देश पठाउनुहोस्
              </button>
            </form>
          </div>

          <div data-reveal className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-silver-200 bg-white shadow-sm">
              <iframe
                title={`${site.nameNp} — नक्सा`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="rounded-2xl border border-silver-200 bg-white p-6 shadow-sm">
              <h3 className="inline-flex items-center gap-2 font-heading text-base font-semibold text-navy-900">
                <Clock className="h-5 w-5 text-gold-600" aria-hidden="true" />
                कार्यालय समय
              </h3>
              {/* PLACEHOLDER — confirm the real office hours */}
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-silver-600">आइतबार – शुक्रबार</dt>
                  <dd className="font-medium text-navy-900">
                    बिहान १० — साँझ ६
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-silver-600">शनिबार</dt>
                  <dd className="font-medium text-navy-900">बन्द</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="जिज्ञासा"
            title="बारम्बार सोधिने प्रश्नहरू"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
