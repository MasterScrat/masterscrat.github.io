---
title: Chatistics
summary: Python 3 scripts to convert chat logs from various messaging platforms into Pandas DataFrames.
image: /img/projects/chatistics.jpg
links:
  - { label: GitHub, url: "https://github.com/MasterScrat/Chatistics" }
  - { label: "Website", url: "https://masterscrat.github.io/Chatistics/" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/epi628/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=22069699" }
---

**Python 3 scripts to convert chat logs from various messaging platforms into Pandas DataFrames.**
Can also generate histograms and word clouds from the chat logs.

<!-- research

## More Reddit material (from the 2026 backup)

### 2018-02-07 · r/datascience · 97 pts, 7 comments
Title: Chatistics: Python scripts to turn your Messenger and Hangouts chat logs into DataFrames
Thread: https://www.reddit.com/r/datascience/comments/7vvpbl/
Links to: https://github.com/MasterScrat/Chatistics

## Your own comments in those threads

### Your comments in "Chatistics: Python scripts to turn your Messenger and Hangouts chat logs into DataFrames" (https://www.reddit.com/r/datascience/comments/7vvpbl/)

- 2018-02-07 · 10 pts:

  If you need support for more platforms, feel free to follow/comment on the relevant issue: https://github.com/MasterScrat/Chatistics/issues
  
  I'll probably implement WhatsApp support next.

- 2018-02-07 · 2 pts:

  Someone volunteered to work on it! So maybe soon. 
  
  https://github.com/MasterScrat/Chatistics/issues/12

- 2018-02-09 · 1 pts:

  It is now available!

## Hacker News: Show HN: Chatistics – Turn Telegram, WhatsApp, Messenger Chatlogs to DataFrames
119 pts, 25 comments, 2020-01-16: https://news.ycombinator.com/item?id=22069699

Your comments (4, verbatim):

- Direct link to repo: https://github.com/MasterScrat/Chatistics
  
  I started this project years ago just to create word clouds - but it turned out it to be useful for many more things!
  
  If you are interested in support for other platforms (Discord, Slack...), just create or subscribe to the relevant issue, we'll use them as a simple voting system: https://github.com/MasterScrat/Chatistics/issues
- I don't understand what you mean?
- I wasn't aware of that! We will investigate, although since there's already a way to export from that platform this won't be a priority...
  
  > The other way is actually risking your account being taken down for flooding the API.
  
  Have you heard about such problems? Are there published API limits?
  
  I don't use Telegram so much, but for what it's worth I know people who used Chatistics to export 10s of thousands of messages without a problem.
- The problem is that Chatistics needs to establish who you are ("you" as in "the person whose chat logs were exported") before it can parse anything.
  
  This is because for fields such as `conversationWithName`, it needs to know which of the parties is "you" vs who is an interlocutor.
  
  In general, this is easy enough to figure out: look at multiple conversations, and find out who is always part of them. However if you export a single discussion, then this can't be inferred!
  
  In that situation as eecom pointed out (and as indicated by the script output) you need to specify your username using the `--own-name` argument, using the precise same name that appears in your WhatsApp account.

What others said (analysis):

- Telegram: users pointed to the official desktop export (JSON/HTML) instead of the API, and warned about API rate limits; you hadn't known about it.
- Similar tools: telegram_backup, karlicoss' personal-data package (HPI); one person had built the same thing and also called it "Chatistics".
- Feature wishes: email threads, a cross-platform personal CRM.
- Support: a WhatsApp "Cannot infer own-name" error → your explanation of `--own-name`.
- Fun: "find out you text more about poop than you thought", interjections dominating a WhatsApp word cloud.

-->
