---
layout: default
excerpt: "Students Journal Club"
sitemap: false
permalink: /Activities/journalclub/past
---

# TrAC Student Journal Club

## What?
TrAC Journal Club will help students and researchers to stay current with the latest research works in AI applications in different domains such as Agronomy, Materials, Design and Manufacturing, Autonomy, Robotics and more. Also, this journal club can help students present their research with the group and get feedback. The topics are not just limited to core AI papers, but also with a lot of application papers and ideas.

The following past Journal Club Events.

<table>
  {% for row in site.data.journalclubschedule %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
{% endfor %}
</table>

## Contact

If you would like to be part of this group or if you would like to present a paper or your current research work, please fill this [google form](https://forms.gle/G3xhHduSG27MBB8M6). We will reach out to you as soon as possible.

