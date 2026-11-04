---
title: "This Food Does Not Exist"
summary: "[TODO one-line summary of This Food Does Not Exist]"
draft: true
links:
  - { label: "Website", url: "https://nyx-ai.github.io/stylegan2-flax-tpu" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/w5e4we/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=32167704" }
---

[TODO write about This Food Does Not Exist]

[TODO adapt the Reddit text below, from r/MachineLearning]

**2018 called, they want their StyleGANs back! 👴**

/u/da_mulle and me have trained StyleGAN2 models and released checkpoints and training code. We are exploring how to improve/scale up StyleGAN training, particularly when leveraging TPUs.

**🔗 https://nyx-ai.github.io/stylegan2-flax-tpu**

Cherry-picked samples:

[🍪 Cookies](https://user-images.githubusercontent.com/140592/179369671-32cf8c67-a3d5-43a4-a200-1ba91e736ae2.png)
/
[🍰 Cheesecakes](https://user-images.githubusercontent.com/140592/179959973-df75351d-db07-4ff9-8f9f-97334bab20a8.png)
/
[🍹 Cocktails](https://user-images.githubusercontent.com/140592/179956003-8db513d2-b0b1-4a1f-8f15-827b56bedb25.png)
/
[🍣 Sushis](https://user-images.githubusercontent.com/140592/179958220-45324fe7-90d8-49dd-94be-877b03201160.png)

<!-- research

## Hacker News: Show HN: This Food Does Not Exist
248 pts, 172 comments, 2022-07-20: https://news.ycombinator.com/item?id=32167704

Your comments (3, verbatim):

- We currently train each model independently, ie we first gather a cookie dataset, train a cookie model then restart from scratch for the next one.
  
  That's actually something we're investigating: can we train a single class-conditional model for multiple types of food? Or, can we finetune cheesecakes from cookies?
- We have trained four StyleGAN2 image generation models and are releasing checkpoints and training code. We are exploring how to improve/scale up StyleGAN training, particularly when leveraging TPUs.
  
  While everyone is excited about DALL·E/diffusion models, training those is currently out of reach for most practitioners. Craiyon (formerly DALL·E mega) has been training for months on a huge TPU 256 machine. In comparison our models were each trained in less than 10h on a machine 32x smaller. StyleGAN models also still offer unrivaled photorealism when trained on narrow domains (eg thispersondoesnotexist.com), even though diffusion models are catching up due to massive cash investments in that direction.
- We haven't experimented much with Imagen, but our initial conclusions were that:
  
  - It's hard to train to a photorealistic quality (we'd be happy to be proven wrong!)
  
  - There is no strong pretrained model available yet
  
  Checking the LAION Discord, the situation doesn't seem to have considerably evolved.

What others said (analysis):

- Technical questions: one model per food or a single class-conditional one (you answered: one per food, investigating class-conditional/finetuning), dataset size, training from scratch vs finetuning, converting checkpoints to PyTorch, why StyleGAN rather than Imagen (you answered: hard to reach photorealism, no strong pretrained model yet). Help running the Colab; abidlabs (Hugging Face) posted a Gradio demo of the model.
- Disappointment that it's realistic photos of *existing* food rather than invented dishes or recipes ("cookiecake", "Eigencookie", "strawraspcherries").
- The big debate (most of the thread): the end of stock photography and food-blog/Instagram imagery, deepfakes and whether liberal democracy survives cheap fake media, creativity vs "remixing", photographers' rights and training-data licensing (US Copyright Office: generated images lack human authorship).
- Memorization / originality: "how close is the nearest training image?", "a lossy image database"; tells for fakes (wobbly plates and glasses).
- Jokes: "DeepCakes", "the cake is a lie", "This computer has pretty poor taste in cocktails".

-->
