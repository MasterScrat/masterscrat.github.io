import { getCollection, type CollectionEntry } from 'astro:content';
import { isVisible } from './drafts';

export type Project = CollectionEntry<'projects'>;

export const projectUrl = (project: Project) => `/projects/${project.id}`;

// Order of the Projects page (file names in src/content/projects/). Projects not listed come last, A–Z.
const ORDER = [
  'mira',
  'general-intuition',
  'dreamlook',
  'this-food-does-not-exist',
  'cedille',
  'meet-your-artificial-self',
  'baldurs-gate-maps',
  'flatland',
  'arbiter',
  'chatistics',
  'cern-atlas',
  'timelapses',
  'battleground',
  'ariane',
  'xkcd-r',
];

const rank = (p: Project) => {
  const i = ORDER.indexOf(p.id);
  return i === -1 ? ORDER.length : i;
};

export async function getProjects() {
  const projects = await getCollection('projects', isVisible);
  return projects.sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
}
