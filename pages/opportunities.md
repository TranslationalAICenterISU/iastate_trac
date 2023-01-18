---
title: "Opportunities"
layout: default
excerpt: "opportunities"
sitemap: false
permalink: /Resources/opportunities.html
---

# News

{% for opportunity in site.data.opportunities %}
  <p>{{ opportunity.date }} <br>
  <em>{{ oppotunity.position }}</em></p>
  {% endfor %}

# see news.yml for reference