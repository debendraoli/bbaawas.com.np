export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Path to a photo import, or undefined to render an initials avatar */
  photo?: string;
  /** Direct line, E.164 format e.g. "+9779857822700" */
  phone?: string;
}
