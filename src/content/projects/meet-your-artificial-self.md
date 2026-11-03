---
title: "Meet your Artificial Self: Generate text that sounds like you"
summary: "Train a language model to talk like you using your chat logs (notebook)"
years: "2020"
draft: true
links:
  - { label: "GitHub", url: "https://github.com/mar-muel/artificial-self-AMLD-2020" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/erkz6l/" }
---

[TODO write about the AMLD 2020 workshop]

[TODO adapt the Reddit text below, from r/MachineLearning]

**Colab notebook: https://colab.research.google.com/drive/1iHcQ8_K0cfRE3v8QX6FMKAzdSSGtf5IX**

You may have seen my recent post about [Chatistics: a Python tool to parse your Messenger/Hangouts/WhatsApp/Telegram chat logs into DataFrames](https://www.reddit.com/r/MachineLearning/comments/epi628/p_chatistics_python_scripts_to_turn_your/).

This notebook uses the exported chat logs to train a simple GPT/GPT2 conversational model!

The approach is super simple: it takes all the chat logs, turns them into this format:

> <speaker1> Hi

> <speaker2> Hey - how are you?

> <speaker1> Great, thanks!

> ...

...then simply trains a GPT model on this corpus. In practice, I found that the default parameters (including using GPT and not GPT2) give the best resources for this setup.

This notebook will be part of our workshop [**"Meet your Artificial Self"**](https://appliedmldays.org/workshops/meet-your-artificial-self-generate-text-that-sounds-like-you) happening this Saturday at [AMLD 2020](https://appliedmldays.org/) in Lausanne, Switzerland.

Feedback is welcome! :D
