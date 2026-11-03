import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    years: z.string(),               // e.g. "2021–2022", "2025–present"
    role: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    image: z.string().optional(),    // path under public/, shown on the tile
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
  }),
});

export const collections = { posts, projects };
