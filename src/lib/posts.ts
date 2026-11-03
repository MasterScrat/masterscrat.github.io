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
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}
