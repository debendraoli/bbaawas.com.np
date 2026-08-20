import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
            className={`overflow-hidden rounded-xl border bg-white transition-colors ${
              isOpen ? "border-navy-200 shadow-sm" : "border-silver-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-base font-semibold text-navy-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-silver-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
