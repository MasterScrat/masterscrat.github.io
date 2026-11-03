import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

// Same URL scheme as Jekyll's default: /YYYY/MM/DD/slug.html
export function postParams(post: Post) {
  const m = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!m) throw new Error(`Post filename must be YYYY-MM-DD-slug.md: ${post.id}`);
  const [, year, month, day, slug] = m;
  return { year, month, day, slug };
}

export function postUrl(post: Post) {
  const { year, month, day, slug } = postParams(post);
  return `/${year}/${month}/${day}/${slug}.html`;
}

export async function getPosts() {
  // Drafts only show up in `npm run dev`.
  const posts = await getCollection('posts', (p) => !(import.meta.env.PROD && p.data.draft));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

// Plain-text preview of a post's Markdown, for tiles and lists.
export function excerpt(post: Post, length = 160) {
  const text = (post.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')         // code blocks
    .replace(/<[^>]+>/g, ' ')                // HTML tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')   // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > length ? text.slice(0, length).replace(/\s+\S*$/, '') + '…' : text;
}
