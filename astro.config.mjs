import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { externalLinks } from './src/lib/external-links.mjs';

export default defineConfig({
  site: 'https://florianlau.rent',
  // Mirror src/pages: blog.astro -> /blog.html (old Jekyll URLs keep working),
  // projects/index.astro -> /projects/index.html.
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: { theme: 'github-light' },
    // External links in posts/pages open in a new tab, so visitors keep the site open.
    processor: satteri({ hastPlugins: [externalLinks] }),
  },
});
