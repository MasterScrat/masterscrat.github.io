// Whether draft posts/projects (`draft: true`) are shown.
// - `npm run dev`: shown (marked DRAFT)
// - `npm run dev:published`: hidden, to preview the site as visitors will see it
// - production build: always hidden
export const showDrafts = import.meta.env.DEV && process.env.HIDE_DRAFTS !== '1';

export const isVisible = (entry: { data: { draft?: boolean } }) => showDrafts || !entry.data.draft;
