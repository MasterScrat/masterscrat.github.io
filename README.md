# masterscrat.github.io

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/ (fails if a [TODO] placeholder is on a published page)
```

- Home: `src/pages/index.astro` (intro text + the `featured` list of project/post tiles)
- About: `src/pages/about.md`
- Projects: `src/content/projects/<slug>.md` (served at `/projects/<slug>`)
- Blog posts: `src/content/posts/YYYY-MM-DD-slug.md` (served at `/YYYY/MM/DD/slug.html`)
- Research: anything inside an HTML comment, e.g. a `<!-- research … -->` block at the bottom of a post/project, stays in the file but never reaches the built site
- Drafts: `draft: true` in a post or project's frontmatter shows it in `npm run dev` only, not on the live site. `npm run dev:published` hides drafts to preview the live site.
- Progress: `progress: stub | sourced | writing | done` (default `done`) shows a colored badge on tiles in `npm run dev` only: stub = placeholder, sourced = material gathered (verbatim draft + notes), writing = being edited.
- Static files (images, PDFs): `public/`
- Styling: `src/styles/global.css` (Montserrat + Lato, self-hosted via Fontsource)
- No lockfile is committed: each build installs the latest Astro matching `package.json`.

AI assistants working on this repo must follow [`CLAUDE.md`](CLAUDE.md): no AI-written prose, only verbatim reuse or `[TODO …]` placeholders.
