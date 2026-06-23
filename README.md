# DIMTEX Website

Static bilingual company website for DIMTEX LTD, a garment manufacturing company based in Blagoevgrad, Bulgaria.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- React islands for selective interactivity
- Netlify Forms
- Netlify static deployment

## Local Setup

```bash
npm install
npm run dev
```

Open the local Astro dev server URL shown in the terminal.

## Available Scripts

- `npm run dev` starts the development server
- `npm run check` runs Astro type and content validation
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the built site locally

## Project Structure

```text
public/
  robots.txt
  images/DimtexLogos/
  images/Partners/
  images/factory/
  images/machinery/
src/
  components/
  components/react/
  data/
  layouts/
  pages/
  styles/
astro.config.mjs
netlify.toml
tailwind.config.mjs
tsconfig.json
```

## How To Edit Content

- Company details, image references, partner logos, and localized page content live in `src/data/company.ts`
- Navigation routes live in `src/data/navigation.ts`
- Shared localized labels and metadata live in `src/data/translations.ts`

Page templates are intentionally thin and pull from these data files.

## How To Replace Images

- Factory and machinery imagery lives under `public/images/factory/` and `public/images/machinery/`
- Partner and brand assets live under `public/images/Partners/` and `public/images/DimtexLogos/`
- Keep the same filenames if you want existing references in `src/data/company.ts` to continue working
- If you add new files, update the matching image entries in `src/data/company.ts` or direct page references
- Preserve clear, descriptive `alt` text for every image

## Forms

- English and Bulgarian contact pages use standard HTML forms with Netlify Forms attributes
- Hidden `form-name` and honeypot fields are included for the `contact` form
- Configure the Netlify `contact` form notification recipient in Netlify
- No backend or file upload flow is implemented in version one
- Success routes are static confirmation pages:
  - `/contact-success`
  - `/bg/contact-success`

## Deployment On Netlify

1. Connect the repository to Netlify
2. Use the build command `npm run build`
3. Use the publish directory `dist`
4. Enable form handling in Netlify so the static forms are collected
5. In Netlify, open Forms -> `contact` -> Notifications and add the desired recipient
6. Security headers are defined in `netlify.toml`
7. Replace placeholder company contact details and images before production launch
