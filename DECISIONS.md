# Decisions

- Keep Astro and static generation: this portfolio does not need a server, database, or heavier application framework.
- Keep content in data modules and Astro Markdown collections so presentation changes do not require duplicating copy across components.
- Keep the primary navigation to About, Projects, and Journey; leave map routes outside this iteration.
- Use warm charcoal and brown tones by default, with a restrained light theme, matching the requested typography and visual direction.
- Escape interpolated catalogue content before placing it in generated HTML; static data is still a future content boundary.
- Retain `/about/` for compatibility while using `/` as its canonical URL.
- Link the complete GitHub profile for repository discovery and feature only projects with enough public evidence to describe accurately.
- Use GitHub’s detected language metadata for language filters; omit repositories with no detected language from language-based classification.
