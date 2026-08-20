import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-silver-100 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="ग्राहक अनुभव"
          title="हाम्रा ग्राहक के भन्नुहुन्छ"
          description="दाङभरका परिवारहरूले हामीमाथि गरेको विश्वास नै हाम्रो सबैभन्दा ठूलो सम्पत्ति हो।"
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              className="flex flex-col rounded-2xl border border-silver-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote
                className="h-8 w-8 shrink-0 text-gold-300"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-silver-700">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-silver-100 pt-4">
                <p className="font-heading text-sm font-semibold text-navy-900">
                  {item.name}
                </p>
                <p className="text-xs text-silver-500">{item.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
