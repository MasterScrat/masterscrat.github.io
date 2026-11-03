---
title: Ariane pathfinder
summary: A* pathfinding in JavaScript, with parallel processing and path priorities.
years: "2009"
role: Side project
links:
  - { label: Demo post, url: "/2009/05/16/ariane-pathfinder-first-demo.html" }
---

Ariane was a JavaScript pathfinding tool I built for a browser game, so that dozens of characters could find their way across a large map.

It uses an efficient implementation of the A\* algorithm, and adds two features: parallel processing, so several characters can "think" at the same time, and path priorities, so that nearby enemies react faster than distant ones. Paths are computed on a scaled-down map, then scaled back up to the real map size.

More in [the original demo post](/2009/05/16/ariane-pathfinder-first-demo.html).
