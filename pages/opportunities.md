---
title: "Opportunities"
layout: default
excerpt: "opportunities"
sitemap: false
permalink: /Resources/opportunities/
---

# Opportunities
To be announced
{% for opportunity in site.data.opportunities %}
  <p>{{ opportunity.date }} <br>
  <em>{{ oppotunity.position }}</em></p>
  {% endfor %}