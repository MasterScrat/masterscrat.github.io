---
layout: default
permalink: /blog/
---

<ul class="post-list">
    {% for post in site.posts %}
    <li>
        <h2><a class="poem-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
        <p>{{ post.description }}</p>
        <hr/>
    </li>
    {% endfor %}
</ul>