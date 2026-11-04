import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(), // path under public/, shown on the tile and at the top of the post
    imageAnimated: z.string().optional(), // animated version of `image` for the tile (still image kept for reduced motion and social previews)
    cover: z.boolean().default(true), // false: don't repeat the image at the top of the post
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]), // buttons under the title
    original: z.string().optional(), // where the post first appeared, e.g. a Medium URL
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    image: z.string().optional(),    // path under public/, shown on the tile and at the top of the page
    imageAnimated: z.string().optional(), // animated version of `image` for the tile (still image kept for reduced motion and social previews)
    cover: z.boolean().default(true), // false: don't repeat the image at the top of the page
    label: z.string().default('Project'), // tile tag, e.g. "Work" for an employer
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
  }),
});

export const collections = { posts, projects };
