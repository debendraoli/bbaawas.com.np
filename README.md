# Budha Bhumi Aawash Sewa — Website

Marketing site for **Buddhabhumisewa Private Limited** (बुढा भूमि आवास सेवा), a
property consultancy based in Ghorahi-15, Dang, Nepal. Static single-page app
built with Vite + React + TypeScript + Tailwind CSS v4, deployed to Cloudflare
Pages at **bbawas.com.np**.

## Contact details

Edit these in one place — `src/data/site.ts`. Every component reads from it.

| Field | Value |
|---|---|
| Phone | `+9779857846317` |
| Email | `buddhabhumiaawashsewa@gmail.com` |
| Address | Ghorahi-15, Dang, Nepal (घोराही–१५, दाङ, नेपाल) |
| WhatsApp | same as phone, `wa.me/9779857846317` |
| Domain | `bbawas.com.np` |

## Tech stack

- [Vite](https://vite.dev/) — build tool
- [React 19](https://react.dev/) + [React Router v7](https://reactrouter.com/) — client-side routing (`BrowserRouter`)
- [Tailwind CSS v4](https://tailwindcss.com/) — via the `@tailwindcss/vite` plugin
- [lucide-react](https://lucide.dev/) — icon set
- TypeScript

This is a pure static build (`vite build` → `dist/`). There is no server-side
rendering and no backend — it's designed to be hosted entirely on Cloudflare
Pages' static CDN.

## Project structure

```
src/
  assets/        Logo + other images (see "Dropping in real assets" below)
    properties/   Local property photos (1.jpg in use; more can be added)
    team/         Team member photos
  components/     Reusable UI: Header, Footer, Layout, PropertyCard, TeamCard,
                  Testimonials, FaqAccordion, FloatingActions, SectionHeading
  pages/          Home, Properties, PropertyDetail, About, Contact, NotFound
  data/           site.ts (contact details), properties.ts, team.ts, content.ts
  hooks/          useScrollReveal — IntersectionObserver reveal-on-scroll
  utils/          nepaliDigits — ASCII → Devanagari numeral conversion
  types/          Shared TypeScript types
public/
  _redirects      Cloudflare Pages SPA fallback (routes all paths to index.html)
  robots.txt      Points crawlers at the sitemap
  sitemap.xml     All routes incl. per-property detail pages
  favicon.png     Generated from the logo
  og-image.png    Social share card (1200x630, logo on navy)
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, stats, services, process, featured listings, testimonials, FAQ |
| `/properties` | Listing grid with search, type filter, location filter, price sort |
| `/properties/:id` | Detail page — gallery, specs, highlights, sticky enquiry card, related |
| `/about` | Story, values, **team grid**, testimonials |
| `/contact` | Contact cards, WhatsApp-backed form, Google Map, office hours, FAQ |
| any other | 404 page |

## Language

All user-facing site copy (nav, headings, buttons, card labels, form fields,
footer, etc.) is written in Nepali (Devanagari script), including numerals
(`रु. ४५,००,०००`). `index.html` sets `<html lang="ne">`, and the font stack is
**Inter** (Latin) + **Noto Sans Devanagari** (Devanagari), loaded from Google
Fonts — see `--font-sans` / `--font-heading` in `src/index.css`.

> **Do not add Poppins back to the font stack.** Poppins ships a Devanagari
> subset whose digits (U+0966–096F) are drawn as *Latin* numerals, so `४५`
> renders as `45`. That made headings disagree with body text on the same
> number. Any replacement display font must be checked against Devanagari
> digits before use.

Code identifiers, comments, route paths (`/properties`, `/about`, etc.), and
this README stay in English, since they're developer-facing rather than
site content.

## Local setup

Requires Node.js 18+ (developed against Node 26).

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

### Other scripts

```bash
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the dist/ build locally, to sanity-check before deploying
npm run lint      # oxlint
```

## Dropping in real assets

The logo and team photos are intentionally not hardcoded as static imports.
The code uses `import.meta.glob` to pick them up automatically **the moment
a file exists at the expected path** — no code changes needed, and the build
stays green even if a file is temporarily missing.

| Asset | Path | Fallback while missing |
|---|---|---|
| Company logo | `src/assets/logo.png` | "BBAS" badge in brand colors (header & footer) — currently unused, the real logo is in place |
| डि.बी. ओली (Chairman) | `src/assets/team/db-oli.jpg` | Initials avatar ("डओ") |
| गोविन्द ओली | `src/assets/team/gobinda-oli.jpg` | Initials avatar ("गओ") |
| तिलक ओली | `src/assets/team/tilak-oli.jpg` | Initials avatar ("तओ") |
| कोली ओली | `src/assets/team/kwoli-oli.jpg` | Initials avatar ("कओ") |

All five files above are already in place. Team photos were resized/converted
to JPEG (from the original multi-MB phone photos) with macOS `sips` to keep
page weight reasonable — see git history if you need the originals.

Five of the six mock listings still use placeholder images from
`picsum.photos` (see `src/data/properties.ts`); only the first ("उत्कृष्ट
आवासीय जग्गा") uses a real photo (`src/assets/properties/1.jpg`). To swap in
more real photos, drop files into `src/assets/properties/`, import them at
the top of `properties.ts`, and set each listing's `image` field to the
imported variable.

## Known placeholders to review before launch

Real phone, email, address, and domain are all wired in via `src/data/site.ts`.
What's still invented content (search the code for `PLACEHOLDER`):

- **Marketing statistics** — `src/data/content.ts` `stats`: "१५०+ सन्तुष्ट ग्राहक",
  "८०+ सम्पन्न कारोबार", "१०+ वर्षको अनुभव". **These are made-up numbers** shown
  prominently on the homepage — replace with real figures or remove the section.
- **Testimonials** — `src/data/content.ts` `testimonials`: three fictional
  customer quotes with invented names. Replace with real, permitted quotes or
  drop the section.
- **FAQ answers** — `src/data/content.ts` `faqs`: plausible but unverified
  claims about your fees ("सुरुको परामर्श निःशुल्क"), timelines, and service
  area. Confirm each is accurate.
- **Property listings** — `src/data/properties.ts`: all six are mock listings
  with invented prices, areas, and specs. Only listing #1 uses a real photo.
- **Office hours** — `src/pages/Contact.tsx`: currently आइतबार–शुक्रबार १०–६,
  शनिबार बन्द. Confirm.
- **About Us story copy** — `src/pages/About.tsx`.
- **Contact form** — submits by opening WhatsApp with the message prefilled
  (no backend on a static site). Swap for Formspree / Web3Forms / a Cloudflare
  Pages Function if you'd rather collect submissions server-side.

## Deploying to Cloudflare Pages

The build output is a fully static `dist/` folder — no server runtime,
no edge functions required.

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (repo root)

### Option A — Cloudflare dashboard (Git integration)

1. Push this project to a GitHub or GitLab repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to
   **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Set the build configuration:
   - **Framework preset:** Vite (or "None" — the settings below work either way)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. Cloudflare will install dependencies, run the
   build, and deploy `dist/` to a `*.pages.dev` URL.
6. Every subsequent push to the connected branch triggers an automatic
   redeploy. (Optional: add a custom domain under **Custom domains** once
   the site is ready.)

### Option B — Wrangler CLI

```bash
npm install -g wrangler   # or use `npx wrangler ...` without a global install
wrangler login             # authenticate with your Cloudflare account

npm run build               # produces dist/

wrangler pages deploy dist --project-name=bbawas
```

The first deploy creates the Pages project if it doesn't already exist.
Subsequent deploys reuse the same command. Wrangler prints the live
`*.pages.dev` URL when the deploy finishes.

### SPA routing note

This app uses `react-router-dom`'s `BrowserRouter`, which relies on real
URL paths (e.g. `/properties`, `/about`). `public/_redirects` (copied into
`dist/` on build) tells Cloudflare Pages to serve `index.html` for any path
that doesn't match a static file, so deep links and page refreshes on routes
like `/about` work correctly instead of 404ing.
