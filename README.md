# Manasvini — portfolio (Astro)

Converted from static HTML/CSS/JS to Astro. Dark theme kept as the default aesthetic;
a few real bugs from the original site are fixed along the way, and the knowledge map
on the homepage has been rebuilt as a live, physics-based graph.

## Run it

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## What changed vs. the old static site

**Bugs fixed**
- `projects.html` linked to `projects-data.js`, but the uploaded file was named
  `projectsdata.js` — the projects grid would 404 silently and never render. Now
  imported directly as a module, so this class of bug can't happen.
- `writing.html` linked to `writing-data.js`, which didn't exist at all anywhere in
  the upload — the writing page was completely broken. Rebuilt `src/data/writing.js`
  with placeholder entries (marked `PLACEHOLDER`) matching the essay titles already
  referenced inside the knowledge graph data, ready for real content.
- `blog.html` / `journey.html` used a different nav ("sidebar shell") than
  `index.html` / `about.html` / `projects.html` / `writing.html` (which used a fixed
  header), and linked to a nonexistent `interests.html`. Every page now shares one
  header nav: Map · Writing · Projects · Journey · Blog · About.
- Theme flash on load: `theme-init.js` is now an inline, blocking script in
  `<head>` (via `is:inline`) so the dark theme applies before first paint, instead
  of relying on a separately-fetched script tag.
- The About page's résumé link was a dead `href="#"`. It now points at
  `/resume.pdf` (the PDF you uploaded, copied into `public/`).
- Third "hobby" placeholder card replaced with a real one (IEEE WIE) pulled from
  your resume.

**The knowledge map**
The old version was a static SVG with fixed `x`/`y` coordinates and straight lines —
no motion, no sense of a "network." It's rebuilt from scratch in
`src/components/KnowledgeGraph.astro` as a canvas-based, physics-driven force graph:

- Real force simulation (repulsion between all nodes, spring-tension edges, light
  centering gravity) — nodes settle into position instead of sitting at fixed
  coordinates, and you can drag them.
- Nodes are colored/glow-tinted by which of the four lenses (CS / AI / Math /
  Econ) they belong to — same four accent colors used in the venn hero above it,
  so the two visualizations read as one system.
- Small glowing "signal" particles randomly travel along edges on a loop, so the
  graph feels alive rather than static (a synapse-firing effect).
- Hovering a node dims everything not connected to it and shows a floating
  title + description; clicking opens the existing slide-out panel with that
  node's linked projects/writing/reading.
- Respects `prefers-reduced-motion`: the simulation runs once to settle the
  layout, then stops — no continuous animation or particles, but drag/hover/click
  still work.
- The animation loop only starts once the graph scrolls into view
  (`IntersectionObserver`), so it isn't burning CPU on page load.

**Content filled in**
- About page bio, resume link, and one hobby card.
- Projects: all the deployed projects from your resume added (Gridlock, medical
  RAG, drug classification, facial emotion detection, gold-nanoparticle synthesis,
  RC car vision, Safe Chat, drug-recommendation chatbot) with proper category tags
  so they cross-link to the right knowledge-map lens.

## Still needs you
- `src/data/writing.js` — every entry is a placeholder; drop in your real essays/notes.
- GitHub project links in `src/data/projects.js` all point at your GitHub profile
  root (`github.com/vini-ai2`) — swap in the actual repo URLs per project.
- `astro.config.mjs` has `site: 'https://vini-ai2.github.io'` — update if you're
  deploying somewhere else (Vercel/Netlify/custom domain).
