import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { externalLinks } from './src/lib/external-links.mjs';
import { stripComments } from './src/lib/strip-comments.mjs';
import sitemap from '@astrojs/sitemap';
import { canonicalPath } from './src/lib/canonical.mjs';

export default defineConfig({
  site: 'https://florianlau.rent',
  // Mirror src/pages: blog.astro -> /blog.html (old Jekyll URLs keep working),
  // projects/index.astro -> /projects/index.html.
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
  // sitemap-index.xml + sitemap-0.xml (drafts aren't built, so they're never listed).
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
    serialize: (item) => ({ ...item, url: new URL(canonicalPath(new URL(item.url).pathname), item.url).href }),
  })],
  markdown: {
    shikiConfig: { theme: 'github-light' },
    // External links in posts/pages open in a new tab, so visitors keep the site open.
    // HTML comments (incl. `<!-- research … -->` notes) are dropped from the output.
    processor: satteri({ hastPlugins: [externalLinks, stripComments] }),
  },
});
