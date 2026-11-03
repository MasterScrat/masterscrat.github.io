---
title: Flatland
summary: "Reinforcement Learning for railway planning, with the national railway companies of Switzerland, Germany and France."
image: /img/projects/flatland.jpg
role: Lead researcher, AIcrowd
links:
  - { label: "Flatland", url: "https://flatland.aicrowd.com/intro.html" }
  - { label: "NeurIPS 2020 Challenge", url: "https://www.aicrowd.com/challenges/flatland" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/jbn147/r_flatland_challenge_multiagent_reinforcement/" }
---

I was the lead researcher of the [Flatland project](https://flatland.aicrowd.com/intro.html). We investigated the use of Reinforcement Learning for railway planning, in partnership with the national railway companies from Switzerland, Germany and France (SBB, Deutsche Bahn, SNCF). As part of this project I co-organized the [Flatland 2020 NeurIPS Challenge](https://www.aicrowd.com/challenges/flatland).

I also organized the workshop "Flatland: Multi-Agent Reinforcement Learning on Trains" at TheWebConference 2021.

<!-- research

## More Reddit material (from the 2026 backup)

### 2020-10-15 · r/reinforcementlearning · 44 pts, 12 comments
Title: Flatland challenge: Multi-Agent Reinforcement Learning on Trains
Thread: https://www.reddit.com/r/reinforcementlearning/comments/jbkz39/
Links to: https://www.aicrowd.com/challenges/neurips-2020-flatland-challenge

## Your own comments in those threads

### Your comments in "Flatland challenge: Multi-Agent Reinforcement Learning on Trains" (https://www.reddit.com/r/reinforcementlearning/comments/jbkz39/)

- 2020-10-15 · 6 pts:

  Hello everyone,
  
  **We are running a NeurIPS challenge where the goal is to schedule trains using RL.**
  
  It tackles a real-world problem: railway networks are growing fast, but the classical decision-making methods used today don’t scale well. This is becoming problematic! Can RL save the day?
  
  Our goal is to foster research in RL around this problem, and to establish a benchmark showing the progress of RL against other (currently better!) methods.
  
  We are hoping for an "AlphaGo moment" where reinforcement learning will take over. Planning train schedules has many similarities with the game of Go!
  
  We provide strong baselines and "getting started" guides to help you hit the ground running, even if you're just starting with RL. For example you can run [this Colab notebook](https://colab.research.google.com/drive/1GbPwZNQU7KJIJtilcGBTtpOAD3EabAzJ?usp=sharing) to train a DQN policy that you can then submit to the leaderboard.
  
  This challenge is made in partnership with SBB (the Swiss national railway company) and Deutsche Bahn (the German one).

- 2020-10-15 · 3 pts:

  I can't resist listing some more cool links about the project:
  
  - The [DQN baseline](https://gitlab.aicrowd.com/flatland/neurips2020-flatland-starter-kit) is implemented from scratch with PyTorch. It's easy to understand and extend. It logs metrics to either Tensorboard or [Weights & Biases](https://www.wandb.com/) out of the box. You can easily run hyper-parameter sweeps, resulting in [cool reports like that](https://wandb.ai/masterscrat/flatland-examples-reinforcement_learning/reports/Flatland-Starter-Kit-Training-in-environments-of-various-sizes--VmlldzoxNjgxMTk)
  
  - We also provide advanced **RLlib baselines** ready to be used: [Centralized Critic PPO](https://flatland.aicrowd.com/research/baselines/centralized_critic.html), [Ape-X, DQfD](https://flatland.aicrowd.com/research/baselines/imitation_learning.html), ... You can run those [in Colab](https://colab.research.google.com/drive/1oK8yaTSVYH4Av_NwmhEC9ZNBS_Wwhi18?usp=sharing) as well.
  
  - Multiple Master Thesis have been written about this environment, providing nice introductions and many unexplored ideas. The solutions from last year's challenge are also public now, along with videos from their authors explaining them: https://flatland.aicrowd.com/research/top-challenge-solutions.html
  
  - Yannic Kilcher covered the challenge in a video: https://www.youtube.com/watch?v=cvkeWwDQr0A
  
  - There's currently an additional 500chf (= $500) prize pool for people who contribute resources around this challenge eg new baselines, exploratory notebooks, introductory YouTube videos... [See here](https://discourse.aicrowd.com/t/flatland-community-prize-500-chf-additional-prize-pool/3750/5). This ends in a week!

- 2020-10-15 · 1 pts:

  If you want to team up, it's not very active but you have a thread for this here: https://discourse.aicrowd.com/t/looking-for-team-member/3167

- 2020-10-15 · 2 pts:

  Check out the top solutions from last year: https://flatland.aicrowd.com/research/top-challenge-solutions.html
  
  I'm a RL researcher myself so I'm not familiar with that field. From what I've seen, it looks like clever use of shortest path algos eg A*/Dijkstra more than published methods as we would have in RL.

- 2020-10-16 · 2 pts:

  OR still dominates RL, as can be clearly seen from the leaderboard: https://www.aicrowd.com/challenges/neurips-2020-flatland-challenge/leaderboards
  
  The goal is to find either a superior RL method, or to find a smart combination or OR + RL which beats OR alone!

- 2020-10-16 · 2 pts:

  Awesome :D
  
  One of the baseline we provide is a mix of reinforcement learning + imitation learning. Basically the agent learns sometimes with standard PPO, and sometimes using supervised learning from an "expert" episode performed by a strong OR agent (the winner from last years' challenge).
  
  You an check this notebook for code and results: https://colab.research.google.com/drive/1oK8yaTSVYH4Av_NwmhEC9ZNBS_Wwhi18#scrollTo=zoMOkumKcNTS
  
  Currently our "PPO + Online IL(50%)" baseline, which uses expert demonstrations for 50% of the episodes, gives pretty unconvincing results. But I'm sure there would be a large margin of progression by tweaking it a bit.

-->
