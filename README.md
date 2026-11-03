# masterscrat.github.io

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

- Home: `src/pages/index.astro` (intro text + featured projects and recent posts)
- About: `src/pages/about.md`
- Projects: `src/content/projects/<slug>.md` (served at `/projects/<slug>`; set `featured: true` to show on Home)
- Blog posts: `src/content/posts/YYYY-MM-DD-slug.md` (served at `/YYYY/MM/DD/slug.html`)
- Static files (images, PDFs): `public/`
- Styling: [Pico CSS](https://picocss.com) + `src/styles/global.css`
- No lockfile is committed: each build installs the latest Astro matching `package.json`.

AI assistants working on this repo must follow [`CLAUDE.md`](CLAUDE.md): no AI-written prose, only verbatim reuse or `[TODO …]` placeholders.
