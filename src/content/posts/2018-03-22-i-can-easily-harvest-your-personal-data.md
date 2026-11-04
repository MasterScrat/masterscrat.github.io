---
title: "I Can Easily Harvest Your Personal Data"
date: 2018-03-22
draft: true  # Medium import, waiting for review
image: /img/posts/i-can-easily-harvest-your-personal-data.jpg
cover: false  # the images are in the text
original: https://medium.com/@florianlaurent/i-can-easily-harvest-your-personal-data-a1c662bd94c8
---

<aside class="callout">

*Update, 2026. Rereading this eight years later: the "tying it all together" step, is now the easy part. This year, [an LLM agent re-identified](https://arxiv.org/abs/2602.16800) pseudonymous Hacker News users from their posts alone, which would require hours of human investigator work. No stylometry framework needed!*

</aside>

> “We exploited Facebook to harvest millions of people’s profiles. And built models to exploit what we knew about them and target their inner demons. That was the basis the entire company was built on.”
>
> — Christopher Wylie, Cambridge Analytica whistleblower, [to the Observer](https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election), March 2018

![](/img/posts/i-can-easily-harvest-your-personal-data/1.jpg)

This ***shouldn’t surprise you!*** This post is a reminder and demonstration that:

**If you put your data out there, be it on Facebook, Twitter, OkCupid, Reddit or wherever, it *will* get sliced and diced and analysed to profile you.**

As Sandy Parakilas, who was responsible for policing data breaches by third-party software developers at Facebook, [stated yesterday](https://www.theguardian.com/news/2018/mar/20/facebook-data-cambridge-analytica-sandy-parakilas):

> “The ease with which it was possible for anyone with relatively basic coding skills to create apps and start trawling for data was a particular concern”

## So, let’s see how easy it is

Thought experiment: I want to make you vote for Donald Trump. <br>I will gather everything I can to profile and influence you. I have no ethics.

### Target n°1: Facebook

How did Cambridge Analytica get hold of 50+ million profiles? It wasn’t a “data breach” as some publications keep repeating. They published an app and paid users a few bucks to install it. The app would then ask your permission to share data about yourself and all of your friends.

(So ultimately if your data ended up in Analytica’s hands, it’s because one of your friends sold it for a few bucks. No hack involved, no stolen passwords: simple human greed.)

**But the Facebook API was actually updated in the meantime.** The “friend permissions” that let developers suck out all the details about your friends is no longer available. Parakilas states that Cambridge Analytica’s app was “one of the very last to have access to friend permissions”.

**So is my evil plan foiled? No!**

Instead I will make a simple **Chrome Extension** pretending to “gather social behavior data for research”, then pay people to use it. Cambridge Analytica used [Mechanical Turks](https://www.mturk.com/) to find willing users : this still sounds like a good plan.

**From this Chrome Extension I can now siphon ALL of your friends’ data and even more, no problem!**

(relevant: [Browser Extensions Are a Privacy Nightmare](https://www.howtogeek.com/188346/why-browser-extensions-can-be-dangerous-and-how-to-protect-yourself/))

### Next: OkCupid

A dating website: is there a better place to find juicy, super personal info about you?

Two years ago OkCupid [had a scandal of its own](https://www.vox.com/2016/5/12/11666116/70000-okcupid-users-data-release):

> **Scott B. Weingart 🤹 on Twitter:**  
> If your OkC username is one you've used anywhere else, I now know your sexual preferences &amp; kinks, your answers to thousands of questions.

A Danish academic harvested and publicly published the profile of 70'000 users.

The scraping process took him 2 days and [his tools are still publicly available](https://github.com/Deleetdk/OKCubot).

So I will just create a few fake accounts, unleash the scrapers, and sit back.

### Next: Reddit

With Reddit things are almost too easy.

You can just download [a full data dump of all user comments since the beginning of time](https://www.reddit.com/r/datasets/comments/3bxlg7/i_have_every_publicly_available_reddit_comment/). And everything is already setup on Google’s cloud for in-place analysis. That’s just perfect.

## The fun part: Tying it all together

> But my accounts are not tied together! You don’t know who I am on Reddit from my Facebook profile.

Well that is good on principle, but it won’t save you. There are lots of ways to link these records together.

**A simple one is to look for reused pictures.** Did you use any of your Facebook profile pic on OkCupid? bam, linked.

If this doesn’t work I can take out the big guns and [use machine learning](https://github.com/ageitgey/face_recognition) to recognize your face from one site to another:

```python
import face_recognition
face_a = face_recognition.face_encodings(person_a)[0]
face_b = face_recognition.face_encodings(person_b)[0]
results = face_recognition.compare_faces([face_a], face_b)
```

Here! 4 lines of python code to run a model with [a 99.38% accuracy](https://github.com/ageitgey/face_recognition#face-recognition).

**Another elegant solution would be *stylometry.***

<aside class="callout">

Stylometry: The statistical analysis of variations in literary style between one writer or genre and another.

</aside>

By looking at your Reddit comments, and at the charming prose on your OkCupid profile, I am able to recognize your writing style and therefore to link your accounts together.

A good tool for this would be [the open-source framework JGAAP](https://github.com/evllabs/JGAAP), which was used among other things to [find the book JK Rowling had written under a pseudonym](https://www.scientificamerican.com/article/how-a-computer-program-helped-show-jk-rowling-write-a-cuckoos-calling/).

My point is that all of these things are *easy*! Sure, I would encounter scaling problems, stylometry is far from being 100% accurate, people don’t always show their face on their dating profile…

**But given how valuable this data is, do you really think no one else with proper funding, skilled researchers and lack of morals is doing this right now on a much larger scale?**
