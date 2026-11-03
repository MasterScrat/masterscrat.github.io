---
title: Battleground Engine
summary: "Early demo of my upcoming isometric HTML5 game engine"
image: /img/screenshot-demo1.png
links:
  - { label: "Demo", url: "http://lumakey.net/labs/battleground/demo1/" }
  - { label: "Reddit (r/javascript)", url: "https://www.reddit.com/r/javascript/comments/13y0ad/" }
  - { label: "Reddit (r/isometric)", url: "https://www.reddit.com/r/isometric/comments/1nqrzn/early_demo_of_my_upcoming_isometric_html5_game/" }
# NOTES (YAML comments: never part of the built site): what people said in the Reddit threads
# (r/javascript 2012: 61 points, 38 comments; r/isometric 2013: 54 points, 17 comments)
# 
# 1. Instant Baldur's Gate recognition: commenters named the exact map ("That's the bottom floor of the
#    Tanner's house of BGII", "one of the basements from the Bridge District… The skinner case?").
#    "Great, now I want to play Baldur's gate." Several Dink Smallwood nostalgia replies.
# 2. Browser reports: works on Chrome, Safari, iPad (iOS 6, "Seems to work great on safari for iPad"),
#    Opera, IE10, FF17 on Linux; FF16 initially stuck on "Loading Map Loader"; bottom cut off at 1366x768;
#    graphical glitches at the map's extreme corners in fullscreen.
# 3. Detailed technical feedback: Fullscreen API / CSS transitions suggestions, FPS observations,
#    "Nice pathfinding! No lag on my crummy netbook!", "Animations are a bit fast".
# 4. Developers wanting the engine: "any idea how/when you plan to release this?", "Do you have a github
#    repo…?", "I'd love to peek inside when you release it"; comparisons with ImpactJS, melonJS, BrowserQuest.
#    In 2022 someone found it by searching "Javascript Diablo" while looking for a JS isometric multiplayer framework.
# 5. Playful: "The dog seems a tad nervous :D", "Hai doggie!", "I tried to get the cat stuck. Could not get cat stuck."
#    Also: "You should consider making it touch-friendly!"
# 6. Naming: "The name battleground engine seems to be overloaded… came across a different battleground engine,
#    also for RPGs." (possible reason for the later "ForgotEngine" name)
---

[TODO edit: first draft assembled verbatim from my own words: the 2012 blog post and my Reddit comments, 2012–2022]

<!-- 2012 blog post -->
Here is the first public demo of my JavaScript game engine. Special thanks to the Reddit community for their great feedback.

<!-- r/isometric, 2013 -->
I'm using assets from Baldur's Gate II, but the engine uses its own file formats so it won't be limited to those.

<!-- r/javascript, 2012 -->
FYI it uses [Ariane](/2009/05/16/ariane-pathfinder-first-demo.html), a custom pathfinding library developed for the engine.

<!-- r/isometric, 2013 -->
I'm using Mootools and that's pretty much it.

<!-- r/javascript, 2012 -->
I'm working hard to have it run well on iPad, but it's unusable on anything smaller than a tablet.

<!-- r/javascript, 2012 -->
Regarding multiplayer, it should be doable using WebSockets. However I'll work toward a nice and deep single player experience first, as well as a capable browser-based editor to let people write their own adventures.

<!-- r/javascript, 2012 -->
For now you can press "f" to go fullscreen.

<!-- r/javascript, 2012 -->
Press shift to make it even faster :-)

<!-- r/isometric, 2013 -->
Ultimately I plan on releasing it as an open source engine.

<!-- r/javascript, 2022 -->
I spent a bit of time on it through the years, it's kind of my "side-side-project". I'd love to find enough time to clean it up and open-source it at some point.

In retrospect I should have pushed it much more back then when I was a student - this type of advanced web-based apps weren't so common at that point...
