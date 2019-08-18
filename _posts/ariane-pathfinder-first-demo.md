---
title: "First demo of Ariane, a JS pathfinder"
date: "2009-05-16"
---

Here is the **[first demo of Ariane](http://lumakey.net/labs/ariane/)**, my JavaScript pathfinding tool.

## What's a pathfinder?

Well, I'm currently making an awesome JavaScript game. In this game, the engine will have to handle the movements of dozens of characters on a map. Now, if I want these creatures to act in a realistic way, there is a bunch of thing I need to simulate to make them believable.

First, they should be able to think, or at least give the impression that they are thinking. This includes the ability to solve philosophical questions such as: should I run frantically to the player and try to eat his brain, _or_ should I not? (spoiler: yes. zombies.)

But now that the decision has been taken, our creature needs to actually find a way to the player. This is trickier than it looks, and this is Ariane's job, called pathfinding (another tool is under construction for the decision-making part).

The simplest way to solve this problem would be for our creature to move directly toward the player, and to try to go around any eventual obstacle. While this solution could be adequate for an undead, there are situations where a bit more intelligence is expected.

## So how do we solve this problem?

We're going to use what is called [the A\* algorithm](http://en.wikipedia.org/wiki/A*_search_algorithm) (pronounced "A star"). This magic formula allows us to find a shortest path from point A to point B on our map, avoiding any obstacles in the way.

Below is a cool animation from Wikipedia on this subject. ![a* algorithm](http://upload.wikimedia.org/wikipedia/commons/5/5d/AstarExample.gif)

Ok, I didn't understand it either.

More seriously, Ariane uses an efficient implementation of this algorithm to quickly compute any reasonably-long path. I've also implemented two useful features: parallel processing (multiple characters can "think" at the same time) and path priorities (eg to make enemies on the player field of view more reactive than the one far away).

## What am I seeing in [the demo](http://lumakey.net/labs/ariane/)?

Here we ask Ariane to compute two paths: from the top left to bottom right (in blue), and from the bottom left to the top right (in green). The points appearing on the map are the locations being analyzed.

The paths are avoidings both the red walls and the grey noise to simulate a life-like situation (the noise could represents eg trees in a forest).

The computation may seem slow, but the map displayed is a scaled down version of the actual game map. The idea is to find a path on a smaller map - which is faster, and then to scale it up to the real size. The scale being x15, the game map in the demo would be 6000x6000 px.

## More info on pathfinding

If you're interested in learning more about pathfinding, here are the two main resources from which I've learned everything: [this article from GameDev.net](http://www.gamedev.net/reference/articles/article2003.asp) is an excellent introduction, and [Amit's A\* pages](http://theory.stanford.edu/~amitp/GameProgramming/) are also a very good reference, although more advanced.
