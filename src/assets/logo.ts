/**
 * Resolves the company logo if it has been placed at src/assets/logo.png.
 *
 * Uses import.meta.glob instead of a static `import logo from "./logo.png"`
 * so the app keeps building even before the real file exists — Vite simply
 * returns an empty match set rather than a resolve error. Drop the real
 * logo in at this exact path and it's picked up automatically, no code
 * changes required. Components using this should render a branded
 * fallback (see <Logo />) when it's undefined.
 */
const logoModules = import.meta.glob<{ default: string }>("./logo.png", {
  eager: true,
});

export const logoSrc = Object.values(logoModules)[0]?.default;
