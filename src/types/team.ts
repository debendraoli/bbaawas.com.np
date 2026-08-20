export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Path to a photo import, or undefined to render an initials avatar */
  photo?: string;
}
