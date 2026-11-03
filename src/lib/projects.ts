import { getCollection, type CollectionEntry } from 'astro:content';
import { isVisible } from './drafts';

export type Project = CollectionEntry<'projects'>;

export const projectUrl = (project: Project) => `/projects/${project.id}`;

const startYear = (p: Project) => Number(p.data.years.match(/\d{4}/)?.[0] ?? 0);

// Most recent first.
export async function getProjects() {
  const projects = await getCollection('projects', isVisible);
  return projects.sort((a, b) => startYear(b) - startYear(a));
}
