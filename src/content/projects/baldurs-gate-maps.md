---
title: "Adding perspective to Baldur's Gate maps + upscaling them"
progress: sourced
summary: "Upscaling BG2's assets using Machine Learning"
years: "2019–2020"
draft: true
links:
  - { label: "Reddit (r/baldursgate)", url: "https://www.reddit.com/r/baldursgate/comments/aemu8u/" }
  - { label: "Reddit (r/baldursgate)", url: "https://www.reddit.com/r/baldursgate/comments/g0ftlv/" }
  - { label: "Reddit (r/GameUpscale)", url: "https://www.reddit.com/r/GameUpscale/comments/g0fr8j/" }
# Media to self-host (TODO):
#   https://imgur.com/a/iwkc1VJ
---

[TODO write about the Baldur's Gate maps project]

[TODO adapt the Reddit text below, from r/baldursgate]

I'm experimenting with the dark powers of machine learning to upscale Infinity Engine assets:

[Original](https://i.imgur.com/wI75cPc.png) - [Scaled Up](https://i.imgur.com/snsTPBd.jpg)

[Original](https://i.imgur.com/xMbqIeo.jpg) - [Scaled Up](https://i.imgur.com/nC2o1vM.jpg)

[Original](https://i.imgur.com/0HZlgiH.png) - [Scaled Up](https://i.imgur.com/PCxFn2y.jpg)

There was no cherry picking - these are literally the only images I tried it with!

Using [ESRGAN](https://github.com/xinntao/ESRGAN), more info [here](https://www.reddit.com/r/GameUpscale/comments/aemhgo/my_attempt_at_scaling_up_baldurs_gate_assets/).

[TODO adapt the Reddit text below, from r/baldursgate]

**First results: https://imgur.com/a/iwkc1VJ**

You may have heard about "3D Inpainting": it's a recent AI-powered technique to recover 3D information from still pictures. Here's a good intro: https://www.youtube.com/watch?v=ZolWxY4f9wc

I tried it out on a few Infinity Engine maps. It makes a lot of glaring mistakes, but I'm still impressed by these results. I feel that with some fixes by hand on the 3D mesh you could really get realistic animations!

Most of the animations actually use the [upscaled images I worked on last year](https://www.reddit.com/r/GameUpscale/comments/aemhgo/my_attempt_at_scaling_up_baldurs_gate_assets/). Basically, I first made the map images bigger using another AI-powered technique, before running them through this new approach to recover perspective.

Here's the paper I used for 3D inpainting: https://shihmengli.github.io/3D-Photo-Inpainting/

edit: thanks for the gold :D [a couple more](https://imgur.com/a/Mce9wTN)
