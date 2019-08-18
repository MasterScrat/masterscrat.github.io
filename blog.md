---
layout: default
permalink: /blog/
---

<div class="header-bar">
    <h1>blog</h1>
    <br/>
</div>

<ul class="post-list">
    {% for post in site.posts %}
    
    {% assign wordCount = post.content | number_of_words %}
    
    <li>
        <h2><a class="poem-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }} - {{wordCount}} words</p>
    </li>
    {% endfor %}
</ul>