import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://masterscrat.github.io',
  // Mirror src/pages: blog.astro -> /blog.html (old Jekyll URLs keep working),
  // projects/index.astro -> /projects/index.html.
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
