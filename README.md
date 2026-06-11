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
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the built site locally

## Project Structure

```text
public/
  favicon.svg
  robots.txt
  images/placeholders/
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

- Company placeholders and identifiers live in `src/data/company.ts`
- Navigation routes live in `src/data/navigation.ts`
- Services and capability copy live in `src/data/services.ts`
- Gallery placeholder entries live in `src/data/gallery.ts`
- Shared localized labels and metadata live in `src/data/translations.ts`

Page templates are intentionally thin and pull from these data files.

## How To Replace Images

- Replace SVG placeholders in `public/images/placeholders/` with real approved factory imagery
- Keep the same filenames if you want existing references to continue working
- If you add new files, update the matching entries in `src/data/gallery.ts` or direct page image references
- Preserve clear, descriptive `alt` text for every image

## Forms

- `contact` and `careers` use standard HTML forms with Netlify Forms attributes
- Hidden `form-name` fields are included for both forms
- Configure the Netlify `contact` form to send email notifications to `n.d.pugyov@gmail.com`
- No backend or file upload flow is implemented in version one
- Success routes are static confirmation pages:
  - `/contact-success`
  - `/careers-success`
  - `/bg/contact-success`
  - `/bg/careers-success`

## Deployment On Netlify

1. Connect the repository to Netlify
2. Use the build command `npm run build`
3. Use the publish directory `dist`
4. Enable form handling in Netlify so the static forms are collected
5. In Netlify, open Forms -> `contact` -> Notifications and add `n.d.pugyov@gmail.com`
6. Replace placeholder company contact details and images before production launch
