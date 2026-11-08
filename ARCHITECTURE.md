# Architecture

The site is a static Astro 4 application deployed to GitHub Pages. It has no server runtime, API, database, authentication, or client state framework. Astro renders the pages at build time; small browser scripts provide project filtering, theme selection, the Venn diagram, and the knowledge graph.

## Structure

- `src/pages/` — primary destinations are About (`/`, with `/about/` retained as an alias), Projects, and Journey. Older map and blog routes remain outside the primary navigation and were not part of this iteration.
- `src/layouts/BaseLayout.astro` — shared document metadata, navigation, theme control, footer, and details panel.
- `src/components/AboutContent.astro` — About page content and right-aligned social links.
- `src/data/projects.js` — current project groups, historical project catalogue, topic classifications, language classifications, and repository URLs.
- `src/data/journey.js` — year-grouped timeline content and verified external references.
- `src/data/knowledge.js` and `src/components/` — legacy map data and visualizations, not exposed in the primary navigation.
- `src/content/blog/` — legacy Markdown blog collection; drafts are hidden.
- `src/styles/global.css` — shared responsive styles, theme tokens, and reduced-motion rules.
- `public/` — resume and static SVG assets.
- `.github/workflows/deploy.yml` — build and GitHub Pages deployment.

`npm run build` produces the static site in `dist/`. Astro is the only direct runtime dependency. The `/about/` alias has a canonical URL pointing to `/`. The public repository catalogue is intentionally curated; the Projects page links to the complete GitHub profile for discovery.
