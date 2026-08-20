import type { TeamMember } from "../types/team";

/**
 * Eagerly picks up any photo already placed under src/assets/team/. Keyed by
 * filename, so a member below just needs `photo` to match a file name here.
 * Missing files simply resolve to undefined (no build error) and the Team
 * component falls back to an initials avatar — see resolvePhoto().
 */
const photoModules = import.meta.glob<{ default: string }>(
  "../assets/team/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

function resolvePhoto(fileName: string): string | undefined {
  const match = Object.entries(photoModules).find(([path]) =>
    path.endsWith(`/${fileName}`),
  );
  return match?.[1].default;
}

export const team: TeamMember[] = [
  {
    id: "dboli",
    name: "डि.बी. ओली",
    role: "अध्यक्ष",
    photo: resolvePhoto("db-oli.jpg"),
    phone: "+9779857822700",
  },
  {
    id: "gobinda-oli",
    name: "गोविन्द ओली",
    role: "सदस्य",
    photo: resolvePhoto("gobinda-oli.jpg"),
    // Same as the main office line (site.phone) — confirm this is intentional.
    phone: "+9779857846317",
  },
  {
    id: "tilak-oli",
    name: "तिलक ओली",
    role: "सदस्य",
    photo: resolvePhoto("tilak-oli.jpg"),
    phone: "+9779857834300",
  },
  {
    id: "koli-oli",
    name: "केवली ओली",
    role: "सदस्य",
    photo: resolvePhoto("kwoli-oli.jpg"),
    phone: "+9779857825800",
  },
];
