---
title: "500 Realistic Vision portraits, eyes aligned, sorted by happiness"
date: 2023-04-22
image: /img/posts/500-realistic-vision-portraits.jpg
cover: false
links:
  - { label: "Reddit (r/StableDiffusion)", url: "https://www.reddit.com/r/StableDiffusion/comments/12v6af7/" }
  - { label: "Slow-motion cut (Twitter)", url: "https://twitter.com/MasterScrat/status/1649899260438036480" }
draft: true
---

[TODO write about the 500 faces project]

<figure>
  <video src="/img/posts/500-realistic-vision-portraits/500-portraits.mp4" poster="/img/posts/500-realistic-vision-portraits/poster.jpg" width="584" height="720" controls muted playsinline preload="metadata"></video>
</figure>

## Workflow!

**Create 4 batches of 256 images**

I generated them on [dreamlook.ai](https://dreamlook.ai/) where we offer 1024x1024 generation w/ high-res fix through our API. 

It took 12 minutes and cost $3.2 for each batch of 256 such images.

- I used variants of the following prompt with variants "of a woman"/"of a woman mildly smiling"/"of a woman smiling"/"of a woman laughing"

> portrait photo of a woman, color, Martin Schoeller, serious eyes, perfect eyes, cinematic, 80mm portrait photography, dramatic lighting photography, national geographic, portrait, photo, photography, Stoic, cinematic, 4k, epic, detailed photograph, shot on kodak detailed, bokeh, cinematic, hbo, dark moody, volumetric fog

- Negative prompt:

> amputee, bad anatomy, blurry, fuzzy, disfigured, misshaped, mutant, deformed, bad art, out of frame, off center

- Other params: dpm++ 2m, 20 steps, 512x1024, realistic-vision-v1-3, denoising strength 0.7

**Align the images and sort by smile**

- I first went through the 1024 images by hand to remove faces looking away from the camera, alien teeth and nipples. Fun times.
- I then detected expression using https://github.com/justinshenk/fer, and sorted by `happy` score.
- Then I used https://github.com/1adrianb/face-alignment to align the images based on eye position. The eyes move slowly further and further apart as the video goes.
- I then cropped 100px for top and bottom and 50px from left and right to limit black portions 

<!-- research

Sources:
  https://www.reddit.com/r/StableDiffusion/comments/12v6af7/
    Posted 2023-04-22, score 501, 44 comments. Link post to the video (https://v.redd.it/hvobalvasfva1), no text.
    The "Workflow!" section above is Florian's own top comment there (verbatim).
  https://twitter.com/MasterScrat/status/1649899260438036480 (2023-04-22), tweet text:
    SLO-MO cut of the "500 portraits" video
    This is actually an earlier version with lower framerate, less aggressive border cropping and music. Unsure which version was better.
  https://www.tiktok.com/@masterscrat/video/7224839522960280858 (version with music)

Florian's other comments in the Reddit thread (verbatim):
  - Need obnoxious music to maintain your attention? Here you go!
    https://www.tiktok.com/@masterscrat/video/7224839522960280858
  - (reply) Realistic Vision definitely has a type yes
  - (reply, about TikTok) That was my assumption but given this TikTok video is at 17 views I clearly understand nothing about that platform
  - (reply) I used this: https://github.com/justinshenk/fer
  - (reply) I used this to detect face landmarks: https://github.com/1adrianb/face-alignment
  - I've posted a version with lower framerate and less aggressive border cropping as some people with motion sensitivity found this one overwhelming.
    Linking to Twitter as I can't seem to post video comments on Reddit:
    https://twitter.com/MasterScrat/status/1649899260438036480
  - (reply) The image generation part is still very early (added a couple of days ago) so you'd have to script it yourself for now!
  - (reply) Nope no need with realistic vision!

Media:
  Self-hosted: /img/posts/500-realistic-vision-portraits/500-portraits.mp4 (Reddit video re-encoded, 584x720, 30 s, no audio);
    video poster is a frame at 27 s (500-realistic-vision-portraits/poster.jpg); tile image is a 9x4 grid of 36 faces sampled evenly through the video.
  Originals saved outside the repo in ~/Projects/reddit-history-masterscrat/media/500-portraits/:
    hvobalvasfva1-720p.mp4 (Reddit original) and tweet-1649899260438036480-slomo-720x960.mp4 (slow-motion cut, with music).

-->
