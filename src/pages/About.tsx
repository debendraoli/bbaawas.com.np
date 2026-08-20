import { Eye, HeartHandshake, Phone, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import Testimonials from "../components/Testimonials";
import { stats } from "../data/content";
import { site } from "../data/site";
import { team } from "../data/team";
import { useScrollReveal } from "../hooks/useScrollReveal";

const VALUES = [
  {
    icon: Target,
    title: "हाम्रो लक्ष्य",
    description:
      "दाङका हरेक परिवारलाई पारदर्शी, झन्झटरहित र भरपर्दो तरिकाले आफ्नो सपनाको जग्गा वा घर फेला पार्न सहयोग गर्नु।",
  },
  {
    icon: Eye,
    title: "हाम्रो दृष्टिकोण",
    description:
      "प्रदेशभरकै सबैभन्दा विश्वसनीय र ग्राहकमैत्री सम्पत्ति सल्लाहकार संस्थाका रूपमा स्थापित हुनु।",
  },
  {
    icon: HeartHandshake,
    title: "हाम्रो मूल्यमान्यता",
    description:
      "इमानदारी, पारदर्शिता र ग्राहकप्रतिको दीर्घकालीन जिम्मेवारी नै हाम्रो कामको आधार हो।",
  },
];

export default function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-navy-700),transparent_55%)] opacity-70" />
        <div className="container-page relative py-16 sm:py-20">
          <SectionHeading
            eyebrow="हाम्रो बारेमा"
            title="बुद्धभूमि आवास सेवाको परिचय"
            description={`${site.legalNameNp}, ${site.addressNp}मा आधारित एक सम्पत्ति सल्लाहकार संस्था हो, जसले व्यक्ति र परिवारहरूलाई जिल्लाभर भरपर्दो जग्गा र आवास विकल्प फेला पार्न मद्दत गर्छ।`}
            tone="dark"
          />
        </div>
      </section>

      {/* Story + stats */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
              स्थानीय अनुभव, भरपर्दो सेवा
            </h2>
            {/* PLACEHOLDER copy — replace with the real company story */}
            <div className="mt-5 space-y-4 leading-relaxed text-silver-600">
              <p>
                दाङ जिल्लामा जग्गा र घरको कारोबार गर्दा सबैभन्दा ठूलो चुनौती
                भनेको भरपर्दो जानकारी र स्पष्ट कागजात हो। हामीले यही आवश्यकतालाई
                मध्यनजर गर्दै {site.nameNp} सुरु गरेका हौं।
              </p>
              <p>
                हामी हरेक सम्पत्ति ग्राहकसमक्ष पुर्‍याउनु अघि लालपुर्जा, सिमाना
                र बाटोको पहुँच स्वयं जाँच गर्छौं। कारोबार सकिएपछि पनि नामसारी र
                मालपोत सम्बन्धी प्रक्रियामा हाम्रो सहयोग जारी रहन्छ।
              </p>
              <p>
                घोराही, तुलसीपुर, लमही लगायत दाङका प्रमुख क्षेत्रहरूमा हाम्रो
                सक्रिय उपस्थिति छ।
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                सम्पत्तिहरू हेर्नुहोस्
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-silver-300 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <dl data-reveal className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-silver-200 bg-white p-6 text-center shadow-sm"
              >
                <dt className="font-heading text-3xl font-bold text-navy-900">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-silver-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="मूल्यमान्यता"
            title="हामीलाई के कुराले डोर्‍याउँछ"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
                className="rounded-2xl border border-silver-200 bg-silver-50 p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="हाम्रो टिम"
            title="बुद्धभूमि आवास सेवा पछाडिका व्यक्तित्वहरू"
            description="वर्षौंको स्थानीय अनुभव बोकेको हाम्रो टिम तपाईंको सेवामा सधैं तत्पर छ।"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
