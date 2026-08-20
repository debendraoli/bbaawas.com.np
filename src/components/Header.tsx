import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { site } from "../data/site";

const NAV_LINKS = [
  { to: "/", label: "गृहपृष्ठ" },
  { to: "/properties", label: "सम्पत्तिहरू" },
  { to: "/about", label: "हाम्रो बारेमा" },
  { to: "/contact", label: "सम्पर्क" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-silver-300 md:block">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
            {site.addressNp}
          </span>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Phone className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Mail className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-silver-200 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-page flex items-center justify-between py-3">
          <NavLink
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
            <span className="leading-tight">
              <span className="block font-heading text-base font-bold text-navy-900 sm:text-lg">
                {site.nameNp}
              </span>
              <span className="block text-xs text-silver-600">
                {site.shortLegalNameNp}
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors hover:text-gold-600 ${
                    isActive
                      ? "text-gold-600 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gold-500"
                      : "text-navy-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-800 hover:shadow-md"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              फोन गर्नुहोस्
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 transition-colors hover:bg-silver-100 md:hidden"
            aria-label={isMenuOpen ? "मेनु बन्द गर्नुहोस्" : "मेनु खोल्नुहोस्"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <nav className="border-b border-silver-200 bg-white shadow-lg md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-navy-50 text-gold-600"
                      : "text-navy-900 hover:bg-silver-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-2 space-y-2 border-t border-silver-200 pt-3 text-sm">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-3 font-semibold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 px-1 py-1 text-silver-600"
              >
                <Mail className="h-4 w-4 text-gold-600" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
