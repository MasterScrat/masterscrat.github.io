---
title: "First attempt at photogrammetry for game maps"
date: 2025-12-08
image: /img/posts/photogrammetry-game-maps.jpg
# Sources:
#   https://www.reddit.com/r/photogrammetry/comments/1pgxwf9/
---

This was much trickier than expected!

My goal is to make a 3D model of a nearby chapel, to create game maps in the style of the 1998 Baldur's Gate games.

I captured \~900 pictures: \~100 from a Mavic Mini drone and the rest from the ground on iPhone.

I initially started with RealityScan on Windows, but it really struggled to build a model in a single component (despite painstakingly creating a dozen control points).

I moved to Metashape on macOS and it immediately got almost all images, and built a solid mesh on first try. The UI is also much more intuitive imo. I quickly realised I lacked a number of pictures, specifically the front part of the roof, and the last staircase step.

My goal is to build maps by importing the meshes into Unreal Engine, creating foliage etc then export pre-rendered isometric map tiles from there. 

But I'm still very much figuring out the basics with UE, so I gave a first shot at styling the maps using Google's Nano Banana AI model. It doesn't look exactly as I'd want, and writing prompts feels like a terrible way to create images, but it still gives me hope a more deliberate UE workflow could give me good final results!

![](/img/posts/photogrammetry/1.jpg)

![](/img/posts/photogrammetry/2.jpg)

![](/img/posts/photogrammetry/3.jpg)

![](/img/posts/photogrammetry/4.jpg)

![](/img/posts/photogrammetry/5.jpg)

![](/img/posts/photogrammetry/6.jpg)
