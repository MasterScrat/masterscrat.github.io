---
title: "MIRA"
summary: "Multiplayer Interactive World Models trained on Rocket League"
role: "General Intuition"
draft: true
links:
  - { label: "Demo", url: "https://mira-wm.com" }
  - { label: "Technical report", url: "https://mira-wm.com/paper" }
  - { label: "GitHub", url: "https://github.com/mira-wm/mira" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/1upofuw/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=48839355" }
---

[TODO write about MIRA]

[TODO adapt the Reddit text below, from r/MachineLearning]

We're happy to release MIRA, a collaboration between General Intuition, Kyutai, and Epic Games.

Mira was trained on 10k hours of synthetic Rocket League data. The model has 5B parameters and runs for 4 players at 20 fps on a single B200.

We've released a playable online demo, an in-depth technical report as well as a 1k hour dataset of 4-players gameplay:

**Demo: https://mira-wm.com**
Technical report: https://mira-wm.com/paper
Repo: https://github.com/mira-wm/mira

If you're at ICML, we're also running an interactive demo (booth 111) where you can play it with us using proper PlayStation controllers!

<!-- research

## Hacker News: MIRA: Multiplayer Interactive World Models Trained on Rocket League
99 pts, 31 comments, 2026-07-09: https://news.ycombinator.com/item?id=48839355

Your comments (5, verbatim):

- The checkpoint also weights half less than the game install! ;-)
- We're happy to release MIRA, a collaboration between General Intuition, Kyutai, and Epic Games.
  
  Mira was trained on 10k hours of Rocket League data. The model has 5B parameters and runs 4-player games at 20 fps on a single B200 GPU.
  
  We've released a playable online demo, an in-depth technical report as well as a 1k hour dataset of 4-players gameplay:
  
  Technical report: https://mira-wm.com/paper
  Repo: https://github.com/mira-wm/mira
- Playing backward is actually a great idea for testing generalization
- Hey all, happy to see this here! This was a colab between General Intuition (that I’m part of), Kyutai and Epic Games.
  
  You can read plenty of details in the blog post and tech report but the TLDR is that we trained a multiplayer world model on 10k hours of Rocket League data. We optimized it to be playable at 20fps on a single GPU.
  
  So what you see in the demo is fully generated: there’s no graphics or physics engine. Instead it’s a 5b neural network that takes actions in and gives pixels out.
- Would be a great idea to see how much we could manipulate the latent space and whether it has some internal structure w.r.t the physical state. I guess the only unknown is how the world model would show robustness to latent states that are transformed through this network

What others said (analysis):

Your Show HN (12 pts) was merged into ethanlipson's front-page post (99 pts, 31 comments): https://news.ycombinator.com/item?id=48839355
- Amazement that it's a model *simulating* Rocket League rather than an AI playing it; "feels just like the real game".
- Control feel: inputs sometimes ignored, the model "doing what the bot would do" (training data from a predictable policy), random flips; generalization tests like driving backwards (you: "a great idea for testing generalization").
- Requests to release the 5B weights since data and code are public; compute used for training.
- Teammates answering: Václav (vvolhejn) on auto-recovery after going off-distribution and the four-view setup removing "theory of mind" needs.
- Jokes: "easiest way to play Rocket League on Linux" (you: the checkpoint weighs less than the game install), "What a save!", "Calculated." 

-->
