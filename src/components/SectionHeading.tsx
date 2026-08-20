interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      data-reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            tone === "dark" ? "text-gold-400" : "text-gold-600"
          }`}
        >
          <span
            className={`h-px w-6 ${tone === "dark" ? "bg-gold-400" : "bg-gold-500"}`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "dark" ? "text-silver-300" : "text-silver-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
