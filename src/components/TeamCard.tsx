import { Phone } from "lucide-react";
import type { TeamMember } from "../types/team";
import { toNepaliDigits } from "../utils/nepaliDigits";

function formatPhone(phone: string): string {
  // "+9779857822700" -> "+977 9857822700" -> Devanagari digits
  const local = phone.replace(/^\+977/, "");
  return toNepaliDigits(`+977 ${local}`);
}

function getInitials(name: string): string {
  // Devanagari has no case, so toUpperCase() is a no-op here — it only
  // matters if a name is ever entered in Latin script.
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface TeamCardProps {
  member: TeamMember;
  /** Stagger index for the scroll-reveal transition delay */
  index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${index * 80}ms` }}
      className="group flex flex-col items-center overflow-hidden rounded-2xl border border-silver-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <span
          className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-300 to-navy-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-60"
          aria-hidden="true"
        />
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white"
          />
        ) : (
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full bg-navy-900 font-heading text-2xl font-bold text-gold-300 ring-4 ring-white"
            aria-label={`${member.name} (तस्बिर छिट्टै थपिनेछ)`}
          >
            {getInitials(member.name)}
          </div>
        )}
      </div>

      <h3 className="mt-5 font-heading text-base font-semibold text-navy-900">
        {member.name}
      </h3>
      <p className="mt-1 inline-flex rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700">
        {member.role}
      </p>

      {member.phone && (
        <a
          href={`tel:${member.phone}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-silver-600 transition-colors hover:text-navy-900"
        >
          <Phone className="h-3.5 w-3.5 text-navy-700" aria-hidden="true" />
          {formatPhone(member.phone)}
        </a>
      )}
    </div>
  );
}
