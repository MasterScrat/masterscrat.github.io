# Instructions for AI assistants

## Never write prose for this site

All prose on this site is written by Florian. When editing content (pages, posts, project write-ups, summaries, intros, titles, meta descriptions):

- **Only reuse existing prose, verbatim.** Moving, splitting or quoting text that already exists in the repo (or in a document Florian provides) is fine. Rewording, summarizing, shortening or "improving" it is not.
- **Where new prose is needed, insert a clear placeholder** instead: `[TODO write about xxx]`, or `[TODO one-line summary of xxx]` for short fields.
- Don't edit existing prose unless explicitly asked, and then only make the exact change requested.
- Interface labels are fine to write: navigation, buttons, link text such as "All posts →", "Project" / "Post" tags.

Research material (sources, verbatim drafts, notes on what others said) goes in a `<!-- research … -->` block at the bottom of the item's file: HTML comments are stripped from the build. Don't put `-->` inside that block.

To list remaining placeholders: `grep -rn "\[TODO" src/`
