// One canonical form per page, used by <link rel="canonical"> and the sitemap.
// Matches the URLs the site links to: posts keep .html (old Jekyll URLs),
// sections end with "/", other pages have no extension.
export function canonicalPath(pathname) {
  let p = pathname.replace(/index\.html$/, '');
  if (/^\/\d{4}\/\d{2}\/\d{2}\/[^/]+$/.test(p) && !p.endsWith('.html')) p += '.html';
  else if (!/^\/\d{4}\//.test(p)) p = p.replace(/\.html$/, '');
  if (p === '/blog' || p === '/projects') p += '/';
  return p;
}
