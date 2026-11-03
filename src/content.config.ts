import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(), // path under public/, shown on the tile and at the top of the post
    cover: z.boolean().default(true), // false: don't repeat the image at the top of the post
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
    // How far along the content is (shown in `npm run dev` only): stub -> sourced -> writing -> done.
    progress: z.enum(['stub', 'sourced', 'writing', 'done']).default('done'),
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
    image: z.string().optional(),    // path under public/, shown on the tile and at the top of the page
    cover: z.boolean().default(true), // false: don't repeat the image at the top of the page
    label: z.string().default('Project'), // tile tag, e.g. "Work" for an employer
    draft: z.boolean().default(false), // shown in `npm run dev` only, not on the live site
    // How far along the content is (shown in `npm run dev` only): stub -> sourced -> writing -> done.
    progress: z.enum(['stub', 'sourced', 'writing', 'done']).default('done'),
  }),
});

export const collections = { posts, projects };
