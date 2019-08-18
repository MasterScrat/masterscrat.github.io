---
title: "MooFm: Last.fm data at your fingertips"
date: "2009-03-02"
---

I came accross [some](http://www.leebyron.com/what/lastfm/) [very](http://lastgraph.aeracode.org/) [neat](http://sixdegrees.hu/last.fm/index.html) Last.fm stats visualizations some times ago, and wanted to try out some ideas in JavaScript (probably with [Processing.js](http://ejohn.org/blog/processingjs/)). I couldn't find any efficient way to use their API from JS, so I made MooFm...

## What is it?

MooFm is a little (<5Ko) [MooTools](http://mootools.net/docs/) plugin making access to this data as easy as it can be. It lets you get the stats asynchronously without having to deal with query concatenation or Ajax calls.

## How do I use it?

Let's say we want to get the most popular album of _Nirvana_. Taking a look at the last.fm API guide, we find the documentation for the [artist.getTopAlbums](http://www.last.fm/api/show?service=287) method.

```javascript
// just give MooFm your API key...
var moofm = new MooFm('b25b959554ed76058ac220b7b2e0a026');

var callback = function(resp) {
   // will output "Nevermind"
   alert(resp.topalbums.album\[0\].name);
};

// methods' name and params are the same as in last.fm doc
moofm.artist.getTopAlbums({'artist':'Nirvana'}, callback);
```

Couldn't be simpler, right? All [Last.fm readonly methods](http://www.last.fm/api/intro) are accessible this way.

## Getting started

To get started you'll need a recent version of [MooTools](http://mootools.net/download) (obviously), the [MooFm.js](http://lumakey.net/labs/moofm-demo/lib/moofm.js) library and [its proxy](http://lumakey.net/labs/moofm-demo/proxy.phps). Now get an [API key](http://www.last.fm/api/account) (free), and you're good to go.

## Demo time!

Here is a [little demo](http://lumakey.net/labs/moofm-demo) I put together as an example.
