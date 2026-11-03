# masterscrat.github.io

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

- Homepage: `src/pages/index.md`
- Blog posts: `src/content/posts/YYYY-MM-DD-slug.md` (served at `/YYYY/MM/DD/slug.html`)
- Static files (images, PDFs): `public/`
