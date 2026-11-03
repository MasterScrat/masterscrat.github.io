import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const projectUrl = (project: Project) => `/projects/${project.id}`;

const startYear = (p: Project) => Number(p.data.years.match(/\d{4}/)?.[0] ?? 0);

// Most recent first. Drafts only show up in `npm run dev`.
export async function getProjects() {
  const projects = await getCollection('projects', (p) => !(import.meta.env.PROD && p.data.draft));
  return projects.sort((a, b) => startYear(b) - startYear(a));
}
