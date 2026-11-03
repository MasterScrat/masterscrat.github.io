# TODO

Not published: only `src/pages/` and `public/` end up on the site.

## Writing

Placeholders show up on the live site as `[TODO …]`. To list them: `grep -rn "\[TODO" src/`

Home (`src/pages/index.astro`)
- [ ] What I'm up to right now (second intro paragraph)

Project summaries (the `summary:` line, shown on tiles)
- [ ] Cedille (`src/content/projects/cedille.md`)
- [ ] Flatland (`src/content/projects/flatland.md`)
- [ ] Battleground Engine (`src/content/projects/battleground.md`)
- [ ] Ariane (`src/content/projects/ariane.md`)

Project write-ups (page body, under the existing bio text)
- [ ] General Intuition (`src/content/projects/general-intuition.md`)
- [ ] dreamlook.ai (`src/content/projects/dreamlook.md`)
- [ ] Cedille (`src/content/projects/cedille.md`)
- [ ] Flatland (`src/content/projects/flatland.md`)
- [ ] CERN ATLAS project (`src/content/projects/cern-atlas.md`)
- [ ] Battleground Engine (`src/content/projects/battleground.md`)
- [ ] Ariane (`src/content/projects/ariane.md`)

## Fixes

- [ ] **Self-host the Asana post images.** `src/content/posts/2016-01-02-why-i-gave-up-on-asana-after-15-minutes.md` hotlinks 8 images: 7 from `lh*.googleusercontent.com` (Google Docs image links, not meant for embedding, some browsers don't show them) and 1 from `http://lumakey.net` (plain HTTP). Download them to `public/img/posts/asana/` and point the post at the local copies.
