---
title: "News"
layout: default
excerpt: "all news"
sitemap: false
permalink: /allnews/
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
