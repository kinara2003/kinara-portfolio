# Kinara Hemachandra: Portfolio
React + TypeScript + Tailwind + Lucide. All content is in `src/data.ts`.

Run: `npm install && npm run dev` · Build: `npm run build` (output in `dist/`)

Connect in `src/data.ts`: `email`, `cvPath` (PDF in `/public`), `photo` (image in `/public`), `formEndpoint` (e.g. Formspree), and replace every `[Add ...]` placeholder.

Deploy (GitHub Pages): push `dist/` to a `gh-pages` branch, or use a GitHub Action. Case-study pages use hash routes (`#/project/...`), so no server config is needed.
