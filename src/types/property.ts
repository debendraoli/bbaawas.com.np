export type PropertyType = "land" | "house";

export type PropertyStatus = "available" | "pending" | "sold";

export interface Property {
  /** Unique, URL-safe identifier — also used as the detail-page route param */
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  /** e.g. "घोराही–५, दाङ" */
  location: string;
  /** Price already formatted for display, e.g. "रु. ४५,००,०००" */
  price: string;
  /** Numeric price in NPR, used for sorting and range filtering */
  priceValue: number;
  /** e.g. "४ आना" or "१८०० वर्ग फिट" */
  area: string;
  /** Short summary shown on the card */
  description: string;
  /** Longer copy shown on the detail page */
  longDescription: string;
  /** Card thumbnail — also the first gallery image */
  image: string;
  /** Additional detail-page gallery images (thumbnail is prepended automatically) */
  gallery?: string[];
  /** Key/value spec rows shown on the detail page, e.g. { label: "मोहडा", value: "पूर्व" } */
  specs: { label: string; value: string }[];
  /** Bullet highlights shown on the detail page */
  highlights: string[];
  featured?: boolean;
}
