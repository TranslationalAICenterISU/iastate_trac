---
title: "Events"
layout: default
excerpt: "events"
sitemap: false
permalink: /events.html
---

# Events
To be announced.
{% for event in site.data.events %}
  <p>{{ event.date }} <br>
  <em>{{ event.description }}</em></p>
  {% endfor %}
