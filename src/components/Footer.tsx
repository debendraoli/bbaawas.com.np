import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { site, whatsappLink } from "../data/site";
import { toNepaliDigits } from "../utils/nepaliDigits";

const QUICK_LINKS = [
  { to: "/", label: "गृहपृष्ठ" },
  { to: "/properties", label: "सम्पत्तिहरू" },
  { to: "/about", label: "हाम्रो बारेमा" },
  { to: "/contact", label: "सम्पर्क" },
];

const SERVICE_LINKS = [
  "जग्गा खरिद बिक्री",
  "घर खरिद बिक्री",
  "कागजी प्रक्रिया",
  "लगानी परामर्श",
];

export default function Footer() {
  const year = toNepaliDigits(new Date().getFullYear());

  return (
    <footer className="bg-navy-950 text-silver-200">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo variant="on-dark" />
              <span className="font-heading text-lg font-bold text-white">
                {site.nameNp}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-silver-400">
              {site.legalNameNp} — दाङमा जग्गा र घरका लागि तपाईंको भरपर्दो
              सम्पत्ति सल्लाहकार।
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
              छिटो लिङ्कहरू
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-silver-300 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
              हाम्रा सेवाहरू
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-silver-300">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
              सम्पर्क गर्नुहोस्
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-silver-300">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                  aria-hidden="true"
                />
                {site.addressNp}
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-gold-400"
                    aria-hidden="true"
                  />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all text-xs transition-colors hover:text-gold-300"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-gold-400"
                    aria-hidden="true"
                  />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-gold-400"
                    aria-hidden="true"
                  />
                  ह्वाट्सएप
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-800 pt-6 text-xs text-silver-500 sm:flex-row">
          <p>
            &copy; {year} {site.legalNameNp}। सर्वाधिकार सुरक्षित।
          </p>
          <a
            href="https://apexinfratech.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-500 transition-colors hover:text-silver-300"
          >
            Powered by Apex Infratech Private Limited
          </a>
        </div>
      </div>
    </footer>
  );
}
