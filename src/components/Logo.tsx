import { logoSrc } from "../assets/logo";

interface LogoProps {
  /** "on-light" for the header (light background), "on-dark" for the footer (navy background) */
  variant?: "on-light" | "on-dark";
  className?: string;
}

/**
 * Renders the real logo once src/assets/logo.png exists. Until then, falls
 * back to a branded initials badge so the header/footer still look
 * intentional rather than broken.
 */
export default function Logo({ variant = "on-light", className = "" }: LogoProps) {
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt="बुद्धभूमिसेवा प्रा.लि. — बुढा भूमि आवास सेवा"
        className={`h-12 w-12 shrink-0 object-contain ${className}`}
      />
    );
  }

  const badgeClasses =
    variant === "on-dark"
      ? "bg-gold-400 text-navy-950"
      : "bg-navy-800 text-gold-300";

  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-sm ${badgeClasses} ${className}`}
      aria-label="बुद्धभूमिसेवा प्रा.लि. लोगो"
    >
      BBAS
    </span>
  );
}
