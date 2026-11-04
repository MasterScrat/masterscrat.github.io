---
title: "Meet your Artificial Self: Generate text that sounds like you"
summary: "Train a language model to talk like you using your chat logs (notebook)"
draft: true
links:
  - { label: "GitHub", url: "https://github.com/mar-muel/artificial-self-AMLD-2020" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/erkz6l/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=22107144" }
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

<!-- research

## Hacker News: Show HN: Train a language model to talk like you
209 pts, 32 comments, 2020-01-21: https://news.ycombinator.com/item?id=22107144

Your comments (4, verbatim):

- You may have seen my recent post about [Chatistics: a Python tool to parse your Messenger/Hangouts/WhatsApp/Telegram chat logs into DataFrames](https://news.ycombinator.com/item?id=22069699).
  
  This notebook uses the exported chat logs to train a simple GPT/GPT2 conversational model! It uses Google Colab, a notebook platform that allows you to train complex models online for free.
  
  The approach is super simple: it takes all your chat logs, turns them into this format:
  
  > <speaker1> Hi
  
  > <speaker2> Hey - how are you?
  
  > <speaker1> Great, thanks!
  
  > ...
  
  ...then simply trains a GPT model on this corpus. In practice, I found that the default parameters (including using GPT and not GPT2) give the best resources for this setup.
  
  This notebook will be part of our workshop "Meet your Artificial Self" happening this Saturday at AMLD 2020 in Lausanne, Switzerland: https://appliedmldays.org/workshops/meet-your-artificial-self-generate-text-that-sounds-like-you
  
  Feedback is welcome! :D
- We don't have any plan to record it currently.
  
  But we will release the two other notebooks used during the workshop, and plan to write a blog post detailing the full content.
- I would be very curious to see your notebook - while this simple approach works well with GPT, we are not getting the results we'd want with a more complex question/answer model that uses GPT2. So I'd love to see your implementation details!
  
  > Having said that you seem to train here on very little.
  
  The datasets provided in the notebook are really meant to be fallbacks for people who are not willing to use their own chat log data. When training on my own data, I have about 500k messages, which starts being enough to get interesting results.
  
  edit: wow, I see you're training on "14M facebook messages", that's impressive - do you actually chat that much?!
- Awesome :D
  
  We've published the third notebook: https://colab.research.google.com/drive/1XYNef9zcHhTjt6kM6ydL9oXTshoRknIV
  
  We would gladly have your feedback on our approach

What others said (analysis):

- Privacy: does uploading chat logs to Colab send data to Google? (answer from another user: yes, run it locally if worried).
- Black Mirror comparisons ("Be Right Back", "White Christmas"), cyborg jokes.
- Several expected *voice* cloning from "talk like you" and suggested "write" instead; links to voice-cloning work.
- Ideas: Q&A/FAQ bots, PPLM to steer generation, Fred Rogers.
- Tenoke had trained GPT-2 1.5B on 14 MB of his own Messenger history; you compared notes and shared the third workshop notebook. You mention your own ~500k messages.
- The AMLD 2020 workshop wasn't going to be recorded; you planned to release the two other notebooks and a blog post.

-->
