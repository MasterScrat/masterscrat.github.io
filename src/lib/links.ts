// Attributes for a link: external http(s) URLs open in a new tab, like links inside posts.
export const linkAttrs = (url: string) =>
  /^https?:\/\//.test(url) ? { target: '_blank', rel: 'noopener' } : {};
