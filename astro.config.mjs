import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://masterscrat.github.io',
  // Emit /blog.html and /2016/01/02/slug.html, matching the old Jekyll URLs.
  build: { format: 'file' },
  trailingSlash: 'never',
});
