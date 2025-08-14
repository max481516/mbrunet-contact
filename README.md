# My Contact — React + TypeScript + Vite

A small, polished contact/portfolio app built with React 19 + TypeScript + Vite, Tailwind CSS v4, and shadcn/ui. It features a Netlify-backed contact form, internationalization (EN/FR/RU) with localStorage persistence, and language-specific fonts and sizes (including Cyrillic) using the HTML lang attribute and a custom Tailwind variant.

## Features
- __Internationalization (i18n)__: EN/FR/RU via `react-i18next` with localStorage persistence and `<html lang>` kept in sync. See `src/i18n.ts`.
- __Language-specific fonts__: Latin (default) uses `Aldrich` (body) + `Bebas Neue` (headings). Russian uses `Play` (body) + `Nata Sans` (headings, 800, uppercase). Implemented in `src/index.css` using `html[lang="ru"]`.
- __RU-only Tailwind variant__: Use `ru:` to tweak per-language sizes, declared as `@custom-variant ru (&:lang(ru));` in `src/index.css`.
- __Contact modal with Netlify Forms__: Dialog form posts to Netlify; success/error UI states and mobile-friendly focus management. Hidden detection form in `index.html`.
- __shadcn/ui components__: Accessible primitives (e.g., `Dialog`) with Tailwind styling. Components added via CLI.
- __Toasts__: Sonner for modern feedback UX.
- __Favicons + manifest__: Multi-size icons under `public/favicon/` and wired in `index.html`.

## Tech stack
- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (via `@import`), custom variant `ru:`
- shadcn/ui (Radix + Tailwind components)
- i18next + react-i18next
- Sonner (toasts)
- Netlify Forms

## Quick start
Prerequisites: Node 18+ (Vite requires Node >= 18)

```bash
npm install
npm run dev     # start in dev with HMR
npm run build   # production build to dist/
npm run preview # preview the built app locally
```

Open http://localhost:5173 (default) after `npm run dev`.

## Project structure (selected)
```
src/
  components/
    AppShell.tsx
    Accordion.tsx
    ContactDialog.tsx
    ProfileCard.tsx
    ProjectsCarousel.tsx
    ui/
      dialog.tsx
  i18n.ts
  index.css
public/
  favicon/
    android-chrome-192x192.png
    android-chrome-512x512.png
    apple-touch-icon.png
    favicon-16x16.png
    favicon-32x32.png
    favicon.ico
    site.webmanifest
index.html
```

## Internationalization
- Initialization is in `src/i18n.ts`. Language is persisted to `localStorage` under `lng`.
- The app updates `<html lang>` on startup and on each language change.
- Use in components:
  ```tsx
  import { useTranslation } from 'react-i18next'
  const { t, i18n } = useTranslation()
  t('some.key')
  i18n.changeLanguage('fr')
  ```

## Language-specific fonts and sizes
- Base fonts in `src/index.css`:
  - Default (Latin): body `Aldrich`, headings `Bebas Neue`.
  - Russian: `html[lang="ru"] body { font-family: Play }` and `html[lang="ru"] h1..h6 { font-family: Nata Sans; font-weight: 800; text-transform: uppercase }`.
- Tailwind custom variant for fine-tuning per element:
  ```css
  /* src/index.css */
  @custom-variant ru (&:lang(ru));
  ```
  Example:
  ```tsx
  <h2 className="text-3xl ru:text-2xl">{t('accordion.title')}</h2>
  ```

## Contact form (Netlify Forms)
- The dialog form posts to Netlify. Hidden detection form lives in `index.html`.
- After deploying on Netlify, enable email notifications in Dashboard → Forms → contact → Notifications.

## Favicons
- Files are under `public/favicon/` and linked in `index.html` (including `site.webmanifest`). Vite serves `public/` from root, so paths start with `/favicon/...`.

## Tailwind v4 notes
- Uses `@import "tailwindcss"` instead of `@tailwind` directives.
- If your editor warns about `@apply` ("Unknown at rule @apply"), configure your CSS linter or install the Tailwind CSS IntelliSense extension. Builds are unaffected.

## shadcn/ui usage
- Always add components via the CLI to match your Tailwind setup:
  ```bash
  npx shadcn@latest add dialog input label textarea button
  ```
- Example customizations live in `src/components/ui/`.

## Deployment (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Netlify Forms will auto-detect via the hidden form in `index.html`.

## Troubleshooting
- __Fonts not changing in RU__: ensure `<html lang="ru">` is set (handled by `i18n.ts`).
- __RU sizing not applying__: verify `@custom-variant ru` exists in `src/index.css` and your classes use the `ru:` prefix.
- __Favicons not updating__: browsers cache aggressively; hard refresh or try a private window.

---

If you want me to tailor this app further (more languages, new sections, different fonts, or a backend), open an issue or reach out.
