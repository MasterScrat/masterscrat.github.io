# TODO

Not published: only `src/pages/` and `public/` end up on the site.

Placeholders show up as `[TODO …]`. To list them: `grep -rn "\[TODO" src/`

**Drafts:** files with `draft: true` show up in `npm run dev` (marked DRAFT in the lists) but are left out of the live site. Remove the line to publish.

Draft files already contain your original Reddit text verbatim, under a `[TODO adapt the Reddit text below]` marker; sources and media lists are in the `<!-- research … -->` block at the bottom. Reddit titles and dates came from the [Arctic Shift](https://arctic-shift.photon-reddit.com) archive.

## Writing: published pages

Media saved from Reddit (videos, GIFs, images, too big for this repo) lives in `~/Projects/reddit-history-masterscrat/media/<item>/`; each item's research block lists what's there.

Research (sources, reply analysis, full verbatim drafts) lives at the bottom of each file, in a `<!-- research … -->` block that never reaches the site.

Project summaries (the `summary:` line, shown on tiles)
- [ ] Battleground Engine (`src/content/projects/battleground.md`)

Project write-ups (page body, under the existing bio text)
- [ ] General Intuition (`general-intuition.md`)
- [ ] dreamlook.ai (`dreamlook.md`): link to the dreamlook post once written
- [ ] Cedille (`cedille.md`): reuse the r/MachineLearning post text (linked on the page)
- [ ] Flatland (`flatland.md`): reuse the r/MachineLearning and r/datascience post texts (linked on the page)
- [ ] CERN ATLAS project (`cern-atlas.md`)
- [ ] Battleground Engine (`battleground.md`)
- [ ] **Chatistics (`chatistics.md`): make it a proper page.** Lots of material on https://masterscrat.github.io/Chatistics/ (incl. the social media posts), the r/MachineLearning 2020 post and the r/dataisbeautiful word clouds post.

## Writing: draft projects (`src/content/projects/`)

- [ ] Arbiter (`arbiter.md`): add the product screenshot from r/ArbiterApp
- [ ] XKCD+R (`xkcd-r.md`): summary (the 2014 Reddit posts aren't in the archive)
- [ ] MIRA (`mira.md`): not featured, small role
- [ ] This Food Does Not Exist (`this-food-does-not-exist.md`): summary
- [ ] Meet your Artificial Self, AMLD 2020 workshop (`meet-your-artificial-self.md`)
- [ ] Timelapses (`timelapses.md`): summary, write-up, embed the timelapses (Snowy Fribourg is here rather than its own post)

## Writing: draft posts (`src/content/posts/`)

- [ ] Adding perspective to Baldur's Gate maps + upscaling them (`2020-04-13-baldurs-gate-maps.md`): moved from projects
- [ ] dreamlook custom models, one consolidated post (`2023-04-02-dreamlook-custom-models.md`): title; Baldur's Gate maps, Sin City, Rick & Morty, origami guide, Realistic Vision comparison; **showcase Promptly** (internal tool, never released: add screenshots). Date is the first related Reddit post: adjust if you like.
- [ ] 500 Realistic Vision portraits (`2023-04-22-500-realistic-vision-portraits.md`): add the tweet link
- [ ] Running pace vs songs BPM (`2026-03-23-running-pace-and-songs-bpm.md`)
- [ ] QR codes drawn with post-its and on a whiteboard (`2011-05-10-qr-codes.md`)

## To review: more material

- [ ] **RL Insights** (https://masterscrat.github.io/rl-insights/): turn the few completed pages into blog posts, perhaps with a header explaining the overall RL-Insights project started when the COVID lockdown began.
- [ ] **Top tweets** (https://twitter.com/MasterScrat): go through the most popular ones for projects or posts worth featuring.
- [x] **Old Medium articles**: all 5 from the RSS feed are now self-hosted posts (originals + images backed up in `~/Projects/medium-masterscrat/`). The feed only lists your latest stories, so check your Medium profile for any older ones.

- [ ] **Dementia + Farandole** (canvas experiments, 2011–2012): make them a project or post. Code saved and self-hosted, working: `/labs/dementia/index.html` and `/labs/farandole/index.html` (each links to the other; originals at lumakey.net/labs/…, first hosted on gravytea.com, now a parked domain). Both credit Jonas Wagner (29a.ch).
  - Dementia, "Blood Effect in <canvas>": https://www.reddit.com/r/javascript/comments/mb3dw/ (2011-11-13, 16 pts, 7 comments). Your explanation: "It's basically a texture with a normal map, where a light of increasing intensity is added. Except instead of regular color the light has negative green and blue components, so it kind of "sucks" every color except the red. I thought it gave a nice bloody effect." Based on 29a.ch's normal-mapping demo: http://29a.ch/2010/3/24/normal-mapping-with-javascript-and-canvas-tag
  - Farandole, "Water Effect in <canvas>": https://www.reddit.com/r/javascript/comments/130vtr/ (2012-11-11, 6 comments). Your comment: "Based on the latest experiment from Jonas Wagner (http://29a.ch/2012/11/5/html-5-canvas-fluid-simulation); I couldn't resist playing with it!" Replies: "Looks like a lava lamp that someone forgot to turn the light on for", ~10 fps on Firefox ("much smoother on Chrome and Safari").
  - Bubblator (2010) is lost (only the Wayback title page survives): not worth it.
- [ ] **Reprocess the old timelapses (2013–2016) from the original RAWs**, now that tools and hardware are far better than in 2014: higher resolution (4K), proper deflicker, 10-bit video instead of 600px GIFs. Then use them for the Timelapses project.
  - Scripted pipeline (Claude can build and run it): `exiftool` to read exposure per frame → RAW decode + grade with `darktable-cli` (XMP/style) or `rawpy` → interpolate 3–5 graded keyframes across the sequence (like LRTimelapse) → deflicker (smooth per-frame brightness, apply exposure correction) → `ffmpeg` to H.265 10-bit / ProRes (`hevc_videotoolbox` on Mac). Optional: `vidstab`, RIFE frame interpolation, Topaz Video AI upscaling.
  - Alternative for holy-grail sequences (day↔night exposure changes): LRTimelapse + Lightroom, still the most polished.
  - First step: find the original RAW folders (Nikon `DSC_*.NEF`), start with one Léman sunrise and compare against the old GIF in `~/Projects/reddit-history-masterscrat/media/timelapses/`.

## To review: projects on martinmuller.me/projects

Not added yet. Tell me which ones you were involved in (descriptions there are Martin's words):
- [ ] DroneRL: https://github.com/nyx-ai/droneRL
- [ ] nyx.gallery: https://nyx.gallery
- [ ] TPU-powered StyleGAN2: https://nyx-ai.github.io/stylegan2-flax-tpu (already linked from This Food Does Not Exist)
- [ ] Crowdbreaks: https://github.com/digitalepidemiologylab/crowdbreaks
- [ ] Conversational AI workshop, TheWebConference 2021 + AMLD 2021: https://utanashati.github.io/conversational-ai-workshop/
- [ ] COVID-Twitter-BERT: https://github.com/digitalepidemiologylab/covid-twitter-bert
- [ ] Local-geocode: https://github.com/mar-muel/local-geocode
- [ ] Summer School on Reproducibility in Computational Sciences (ETH Zurich + EPFL)

## Fixes

- [ ] **Self-host images and media.** Draft files list their media URLs (imgur, i.redd.it, Reddit galleries, lumakey.net) in their research block; download them to `public/img/` and embed. Reddit galleries have per-image captions (`gallery_data.items[].caption` in `~/Projects/reddit-history-masterscrat/posts.jsonl`): show them as `<figure>` + `<figcaption>`.
