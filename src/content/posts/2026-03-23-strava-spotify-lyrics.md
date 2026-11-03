---
title: "Using Strava + Spotify data to map the lyrics I heard on my runs"
date: 2026-03-23
image: /img/posts/strava-spotify-lyrics.jpg
links:
  - { label: "Reddit (r/dataisbeautiful)", url: "https://www.reddit.com/r/dataisbeautiful/comments/1s11ns2/" }
  - { label: "Reddit (r/Strava)", url: "https://www.reddit.com/r/Strava/comments/1s1vuqn/" }
---

I extracted data from Strava and Spotify to figure out what lyrics I heard during my runs. Each line appears precisely where I heard it!

Words are placed at the GPS coordinates where I heard them, stacked vertically if they don't all fit.

How it works:

* I extracted the GPS data from my runs from Strava, giving me coordinates at each second
* I downloaded my listening history from [Last.fm](http://Last.fm), giving me timestamped beginning of tracks
* The lyrics are from LRCLIB, with precise timestamps per line

Each track's timestamp is then matched to the GPS stream, then each lyric line is interpolated within that window. Words change color based on the song, and the line changes color with running pace.

![](/img/posts/strava-lyrics/1.jpg)

![](/img/posts/strava-lyrics/2.jpg)

![](/img/posts/strava-lyrics/3.jpg)

![](/img/posts/strava-lyrics/4.jpg)

<!-- research

Sources:
  https://www.reddit.com/r/Strava/comments/1s1vuqn/
  https://www.reddit.com/r/dataisbeautiful/comments/1s11ns2/

-->
