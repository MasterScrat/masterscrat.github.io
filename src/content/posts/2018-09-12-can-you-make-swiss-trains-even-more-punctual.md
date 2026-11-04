---
title: "Can You Make Swiss Trains Even More Punctual?"
date: 2018-09-12
image: /img/posts/can-you-make-swiss-trains-even-more-punctual.jpg
cover: false  # the images are in the text
links:
  - { label: "Reddit (r/datascience)", url: "https://www.reddit.com/r/datascience/comments/9f77k7/" }
  - { label: "Medium (original)", url: "https://medium.com/crowdai/can-you-make-swiss-trains-even-more-punctual-ec9aa73d6e35" }
---

**crowdAI is running a [data science challenge](https://www.crowdai.org/challenges/train-schedule-optimisation-challenge) in collaboration with [SBB](http://sbb.ch), the Swiss national railway company, to optimize the scheduling of their trains.**

> Ever complained about late or too infrequent trains? Now is your chance to improve things!

![](/img/posts/can-you-make-swiss-trains-even-more-punctual/1.jpg)

Over 1.2 million people are transported every day on the Swiss railway network in over 10'000 trains with world-leading punctuality.

But traffic is expected to increase even further. As more trains are added, the scheduling complexity quickly explodes.

Your goal is to come up with ingenious ways to tackle this problem. Can you find a suitable algorithm? A powerful heuristic? A promising AI-approach?

## Let’s get started!

**You are given nine problems of increasing complexity describing a railway system, a list of trains and functional requirements. You need to come up with a viable schedule for each of them.**

You can find the full documentation in the [Starter Kit here](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/tree/master). There’s a lot of information in there, but don’t get intimidated! We will start with an intuitive explanation of the problem, expose the requirements, and show how to submit a first simple submission.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/2.jpg" alt="By the end of this article you’ll be getting your first graded results">
  <figcaption>By the end of this article you’ll be getting your first graded results</figcaption>
</figure>

## Trains & Rails

Each problem comes with 4 inputs:

- a railway system,
- a list of trains that run on it,
- timing constraints, eg “this train needs to reach this place by this time”,
- resource constraints, eg “only one of these sections can be used at the same time”.

**Your goal is to find a schedule for all of the trains that will comply with all of the constraints.** In some case it will be easy, in others it may be impossible.

> **Isn’t this backward?**

> It may be surprising to try to schedule trains while ***already*** having timing constraints. This is because we are considering cases where we want to make ***small modifications*** to a pre-existing schedule.

> For example if a major football match starts at 20:00, it would make sense to modify the usual schedule to have a train arrive close to the stadium no later than 19:00. Similarly, the departure of the train that brings the spectators back should have an earliest departure of maybe 22:30.

### The Railway Network

The network is modelled as a graph, in the [graph theory](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) sense of the word.<br>It is made of *routes*, themselves consisting of route *sections*. Each section is represented as an edge of the graph.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/3.jpg" alt="Our example railway network">
  <figcaption>Our example railway network</figcaption>
</figure>

We assume that each section can only be crossed in a *single direction*. We also assume that there are *no loops* in the network. As such, the resulting graph is a [***directed acyclic graph (DAG)***](https://en.wikipedia.org/wiki/Directed_acyclic_graph).

### Requirements

Trains are subject to different kind of timing requirements:

- *Earliest/latest arrival time*, *earliest/latest departure time* and *minimum stopping time*, which allow passengers to get in and out of the train.
- *Connections* to other trains, meaning that two trains must coordinate so passengers can pass from one to the other.

## A Simple Scenario

Let’s take a look at a sample problem: sample_scenario.json.

It contains two *service intentions*, which is a fancy name for “train including all its requirements”:

![](/img/posts/can-you-make-swiss-trains-even-more-punctual/4.jpg)

> The JSON files describing the problems get very large. An extension such as [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) can help you understand the simpler files. Beyond that a good way to visualise them is as tables: the one above was rendered using [http://json2table.com/](http://json2table.com/).

Each train runs on a given *route* and must go through a number of *route sections*, referenced by their *section markers*. In this specific case there are no connections to deal with, but you can see examples of 3 other types of requirements: latest arrival time, earliest departure time and minimum stopping time.

> Durations are expressed [per ISO_8601 standard](https://en.wikipedia.org/wiki/ISO_8601#Durations). The “P” in "PT3M" is the duration designator, which stands for *period.* The "T" stands for *time*, and "M" for *minutes*.

Easy so far! Let’s look at the first route.

![](/img/posts/can-you-make-swiss-trains-even-more-punctual/5.jpg)

This is actually a simple route, but representing a graph as a JSON structure makes it look cumbersome.

So this is route 111, on which our first train runs. Each of the five *route paths* represents a sequence of sections that follow each other. You can for example follow the sections of the first and longest route path, labelled 1, 4, 5, 6, 10, 13 and 14.

The other route paths are then “glued” on top of this first one using route_alternative_marker_at_entry and route_alternative_marker_at_exit as points of reference. For example the second path adds a single section that ends at marker *M1*, while the fourth path adds 3 sections that fork from *M2* and reach another end.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/6.jpg" alt="Route 111 from sample_scenario.json">
  <figcaption>Route 111 from sample_scenario.json</figcaption>
</figure>

The red labels show the *section markers* that some sections bear. These are the markers referenced in the *section requirements* of each train. (The marker is shown attached to the end of the section it applies to.)

The second route in this problem looks exactly the same. It uses the same sections markers, as you can see below:

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/7.jpg" alt="Section markers shown in red">
  <figcaption>Section markers shown in red</figcaption>
</figure>

Some markers are shared between the two routes. We would care about them if we had train connections to handle, as they would be of the form “this train should meet that train at this marker”. But in the current case we have no connections.

What we *do* care about are the ***resources*** shared between these routes, shown below in red circles (again the resources are shown attached to the end of the sections they apply to):

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/8.jpg" alt="Resources shown in red">
  <figcaption>Resources shown in red</figcaption>
</figure>

It is now obvious that these routes are tightly coupled together. In fact in the “real world” these tracks are running next to each other.

Resources are “locks” that prevent groups of sections from being used at the same time. Each resource also needs some *release time:* an amount of time that must pass between their release by one train and the following occupation by the next train.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/9.jpg" alt="Release time for each resource">
  <figcaption>Release time for each resource</figcaption>
</figure>

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/10.jpg" alt="01_dummy.json routes and resources">
  <figcaption>01_dummy.json routes and resources</figcaption>
</figure>

Now that we have an intuition of how basic routes look like, let’s check out a less trivial problem: 01_dummy.json.

We see that in a lot of cases a resource is used by consecutive sections and shared by adjacent routes. This corresponds to the fact that trains typically need a wave of several “green signals” ahead of them.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/11.jpg" alt="01_dummy.json close-up">
  <figcaption>01_dummy.json close-up</figcaption>
</figure>

![](/img/posts/can-you-make-swiss-trains-even-more-punctual/12.jpg)

**These graphs are real samples from the Swiss network!**

You can look up the names of the markers to figure out where the tracks are running in the real world.

In the case above, we can recognize the tracks between the cities of Zürich, Zug and Pfäffikon.

## Implementing your own solution

To implement a concrete solution [follow this document](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/blob/master/documentation/a_worked_example.md#building-a-solution) that will guide you through solving the sample_scenario.json problem by hand.

<figure>
  <img src="/img/posts/can-you-make-swiss-trains-even-more-punctual/13.jpg" alt="The worked out solution">
  <figcaption>The worked out solution</figcaption>
</figure>

Note that there are a few extra rules you will need to read about that we omitted so far to focus on the big picture. The [*business rules* document](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/blob/master/documentation/business_rules.md) contains an exhaustive list.

You don’t need to have solutions for all the problems in order to submit. <br>You will be penalized for missing solutions, but you can still check the correctness of your work so far. [Read here for details on how to submit.](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/blob/master/documentation/what_to_submit.md)

### How should I approach the problem?

There are many ways to solve this challenge programmatically. We don’t want to describe them in details as the goal is to come up with new and innovative solutions!

One hint though: a possible starting point would be to express the problems as a [*mixed-integer programming problem (MILP)*](https://en.wikipedia.org/wiki/Integer_programming).

Last but not least: there is no known solution for [problem 9](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/blob/master/documentation/instance_description.md#the-official-nine-problem-instances) that doesn’t incur delays. It is probable that such a solution exists, but the solver used by SBB couldn’t find one yet.

> **So if you DO find such a solution, you will have effectively improved the efficiency of Swiss train scheduling! *😎***

> **Challenge Links**

> Challenge page: [https://www.crowdai.org/challenges/train-schedule-optimisation-challenge](https://www.crowdai.org/challenges/train-schedule-optimisation-challenge)

> Starter kit: [https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/](https://gitlab.crowdai.org/SBB/train-schedule-optimisation-challenge-starter-kit/)

> Gitter channel: [https://gitter.im/crowdAI/sbb-challenges](https://gitter.im/crowdAI/sbb-challenges)
