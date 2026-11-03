# TODO

Not published: only `src/pages/` and `public/` end up on the site.

Placeholders show up as `[TODO …]`. To list them: `grep -rn "\[TODO" src/`

**Drafts:** files with `draft: true` show up in `npm run dev` (marked DRAFT in the lists) but are left out of the live site. Remove the line to publish.

Draft files already contain your original Reddit text verbatim, under a `[TODO adapt the Reddit text below]` marker, and list their sources and media in YAML comments at the top. Reddit titles and dates came from the [Arctic Shift](https://arctic-shift.photon-reddit.com) archive.

## Writing: published pages

Project summaries (the `summary:` line, shown on tiles)
- [ ] Battleground Engine (`src/content/projects/battleground.md`)
- [ ] Ariane (`src/content/projects/ariane.md`)

Project write-ups (page body, under the existing bio text)
- [ ] General Intuition (`general-intuition.md`)
- [ ] dreamlook.ai (`dreamlook.md`): link to the dreamlook post once written
- [ ] Cedille (`cedille.md`): reuse the r/MachineLearning post text (linked on the page)
- [ ] Flatland (`flatland.md`): reuse the r/MachineLearning and r/datascience post texts (linked on the page)
- [ ] CERN ATLAS project (`cern-atlas.md`)
- [ ] Battleground Engine (`battleground.md`)
- [ ] Ariane (`ariane.md`)
- [ ] **Chatistics (`chatistics.md`): make it a proper page.** Lots of material on https://masterscrat.github.io/Chatistics/ (incl. the social media posts), the r/MachineLearning 2020 post and the r/dataisbeautiful word clouds post.

## Writing: draft projects (`src/content/projects/`)

- [ ] Arbiter (`arbiter.md`): add the product screenshot from r/ArbiterApp
- [ ] XKCD+R (`xkcd-r.md`): summary and years (the 2014 Reddit posts aren't in the archive)
- [ ] MIRA (`mira.md`): not featured, small role
- [ ] This Food Does Not Exist (`this-food-does-not-exist.md`): summary
- [ ] Baldur's Gate maps: perspective + upscaling (`baldurs-gate-maps.md`)
- [ ] Meet your Artificial Self, AMLD 2020 workshop (`meet-your-artificial-self.md`)
- [ ] Timelapses (`timelapses.md`): summary, write-up, embed the timelapses (Snowy Fribourg is here rather than its own post)

## Writing: draft posts (`src/content/posts/`)

- [ ] First attempt at photogrammetry for game maps (`2025-12-08-photogrammetry-game-maps.md`)
- [ ] dreamlook custom models, one consolidated post (`2023-04-02-dreamlook-custom-models.md`): title; Baldur's Gate maps, Sin City, Rick & Morty, origami guide, Realistic Vision comparison; **showcase Promptly** (internal tool, never released: add screenshots). Date is the first related Reddit post: adjust if you like.
- [ ] 500 Realistic Vision portraits (`2023-04-22-500-realistic-vision-portraits.md`): add the tweet link
- [ ] Strava + Spotify lyrics map (`2026-03-23-strava-spotify-lyrics.md`): two Reddit texts to merge
- [ ] Running pace vs songs BPM (`2026-03-23-running-pace-and-songs-bpm.md`)
- [ ] QR codes drawn with post-its and on a whiteboard (`2011-05-10-qr-codes.md`)

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

- [ ] **Self-host images and media.** Draft files list their media URLs (imgur, i.redd.it, Reddit galleries, lumakey.net) in YAML comments; download them to `public/img/` and embed.
- [ ] **Self-host the Asana post images.** `src/content/posts/2016-01-02-why-i-gave-up-on-asana-after-15-minutes.md` hotlinks 8 images: 7 from `lh*.googleusercontent.com` (Google Docs image links, not meant for embedding, some browsers don't show them) and 1 from `http://lumakey.net` (plain HTTP). Download them to `public/img/posts/asana/` and point the post at the local copies.
