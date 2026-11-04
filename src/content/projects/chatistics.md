---
title: Chatistics
summary: Python scripts to parse Messenger, Hangouts, WhatsApp and Telegram chat logs into DataFrames.
image: /img/projects/chatistics.jpg
links:
  - { label: GitHub, url: "https://github.com/MasterScrat/Chatistics" }
  - { label: "Website", url: "https://masterscrat.github.io/Chatistics/" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/epi628/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=22069699" }
---

**💬 Python scripts to parse Messenger, Hangouts, WhatsApp and Telegram chat logs into DataFrames.**
Can also generate histograms and word clouds from the chat logs.

Chatistics can print the chat logs as raw text. It can also create histograms, showing how many messages each interlocutor sent, or generate word clouds based on word density and a base image.

![](/img/projects/chatistics/histo.jpg)

![](/img/projects/chatistics/densities.jpg)

### Support Matrix

|      Platform      | Direct Chat  | Group Chat |
|:------------------:|:-----------: |:----------:|
| Facebook Messenger |     ✔        |     ✘      |
| Google Hangouts    |     ✔        |     ✘      |
| Telegram           |     ✔        |     ✘      |
| WhatsApp           |     ✔        |     ✔      |

### Exported data

Data exported for each message regardless of the platform:

|          Column      |                                        Content                                       |
|:--------------------:|:------------------------------------------------------------------------------------:|
| timestamp            | UNIX timestamp (in seconds)                                                                       |
| conversationId       | A conversation ID, unique by platform                                                |
| conversationWithName | Name of the other people in a direct conversation, **or** name of the group conversation |
| senderName           | Name of the sender                                                                   |
| outgoing             | Boolean value whether the message is outgoing/coming from owner                      |
| text                 | Text of the message                                                                  |
| language             | Language of the conversation as inferred by [langdetect](https://pypi.python.org/pypi/langdetect) |
| platform             | Platform (see support matrix above)                                                  |

### Changelog

**10 Jan 2020:** UPDATED *ALL* THE THINGS! Thanks to [mar-muel](https://github.com/mar-muel) and [manueth](https://github.com/manueth), pretty much everything has been updated and improved, and **WhatsApp** is now supported!

**21 Oct 2018:** Updated Facebook Messenger and Google Hangouts parsers to make them work with the new exported file formats.

**9 Feb 2018:** Telegram support added thanks to [bmwant](https://github.com/bmwant).

**24 Oct 2016:** Initial release supporting Facebook Messenger and Google Hangouts.

### Projects using Chatistics

[Meet your Artificial Self: Generate text that sounds like you](https://github.com/mar-muel/artificial-self-AMLD-2020) workshop

### Credits

* Main contributors: [@MasterScrat](https://github.com/MasterScrat), [@mar-muel](https://github.com/mar-muel), [@manueth](https://github.com/manueth), [@bmwant](https://github.com/bmwant)
* Word cloud generated using https://github.com/amueller/word_cloud
* Stopwords from https://github.com/6/stopwords-json
* Code under MIT license

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
