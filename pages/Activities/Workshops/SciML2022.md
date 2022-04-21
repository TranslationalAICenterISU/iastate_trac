---
layout: default
excerpt: "Workshops"
sitemap: false
permalink: /Activities/workshops/SciML2022/
---

# TrAC Workshop on Scientific Machine Learning: Foundations and Applications -- April 22-23, 2022

[TrAC @ Iowa State University](/) is organizing a technical workshop on Scientific Machine Learning: Foundations and Applications on **April 22-23, 2022**. 

## About This Workshop:
This workshop seeks to bring together top experts from areas of scientific machine learning to discuss progress that has been made on scientific machine learning research, and to identify promising avenues where theory is possible and useful. There will be several invited talks each day, a poster session and spotlight talks by young researchers. This meeting will expose participants to some of the main current trends and recently developed tools in scientific machine learning research and applications. The workshop will be for one and a half-day meeting comprising of 1 plenary talk, 7 invited talks, a poster session, a session on lightning talks and a tutorial on Scientific Machine Learning.

<!-- ## Submissions:
We invite your contributions in any of the following (and related) topics:
- New theory and fundamentals of scientific machine learning
- Applications of scientific machine learning to Translational AI
- Development of software, libraries, or benchmark datasets
- Identification of key challenges and opportunities for future research

**One-page extended abstract (in PDF)** should be submitted by **April 1, 2022 (23:59, CST)** to [this link](mailto:SciML_2.s4q69if80l49ckgz@u.box.com). The abstract will be peer-reviewed and selected for a lightning talk and/or a poster presentation.

We look forward to your contribution! -->

## Registration

~~Register by Tuesday, April 19th EOD here: [https://forms.gle/6qoYCSmek1vDLA1N8](https://forms.gle/6qoYCSmek1vDLA1N8).~~

Registration for in-person attendees is closed. The workshop will be conducted in hybrid mode. Please register here for online attendance :  [https://iastate.zoom.us/meeting/register/tJIlcuGorTkrHNZZmZs7-x6-hb1GN_8gZX_I](https://iastate.zoom.us/meeting/register/tJIlcuGorTkrHNZZmZs7-x6-hb1GN_8gZX_I)

## Schedule

### Day 1 - Pre-lunch

Day 1 pre-lunch sessions are going to happen at **2206 Student Innovation Center**

<div class = "post-content">
	<table>
		{% for scheduleitem in site.data.workshops.sciml2022.day1-1 %}
	    <tr>
	        <td>
	            <p align="center">
	                {{ scheduleitem.time }}
	            </p>
	        </td>
	        <td>
	            <div class="col-xs-12">
	                <p align="center">
	                	{% if scheduleitem.img %}
	                    	<img class="people-pic" src="{{ scheduleitem.img | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% else %}
	                    	<img class="people-pic" src="{{ 'avatar.jpg' | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% endif %}
	                </p>
	            </div>
	        </td>
	        <td align="center">
	        	<div class="col-xs-12">
		        	<b>{{ scheduleitem.title }}</b>
	        	</div>
	        </td>
	        <td>
	            <div class="people-name text-center">
	            	<!-- scheduleitem name (link to webpage if provided) -->
	            	{% if scheduleitem.webpage %}
	            		<a href="{{ scheduleitem.webpage }}" target="_blank">{{ scheduleitem.speaker }}</a>
	            	{% else %}
	            		{{ scheduleitem.speaker }}
	            	{% endif %}
	                <br>
	                <!-- scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil_link %}
	                	<a href="{{ scheduleitem.affil_link }}" target="_blank">{{ scheduleitem.affil }}</a>
	                {% else %}
	                	{{ scheduleitem.affil }}
	                {% endif %}
	                <!-- Additional scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil2_link %}
	                	<br>
	                	<a href="{{ scheduleitem.affil2_link }}" target="_blank">{{ scheduleitem.affil2 }}</a>
	                {% elsif scheduleitem.affil2 %}
	                	<br>
	                	{{ scheduleitem.affil2 }}
	                {% endif %}
	            </div>
	        </td>
	    </tr>
	{% endfor %}
	</table>
</div>

### Day 1 - Lunch and Posters

The lunch and posters are arranged in the lobby area near the main enterance of Student Innovation Center (near the registration desk and Room 1118 Student Innovation Center).

### Day 1 - Post-lunch

Day 1 post-lunch sessions are going to happen at **4202 Student Innovation Center**

<div class = "post-content">
	<table>
		{% for scheduleitem in site.data.workshops.sciml2022.day1-2 %}
	    <tr>
	        <td>
	            <p align="center">
	                {{ scheduleitem.time }}
	            </p>
	        </td>
	        <td>
	            <div class="col-xs-12">
	                <p align="center">
	                	{% if scheduleitem.img %}
	                    	<img class="people-pic" src="{{ scheduleitem.img | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% else %}
	                    	<img class="people-pic" src="{{ 'avatar.jpg' | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% endif %}
	                </p>
	            </div>
	        </td>
	        <td align="center">
	        	<div class="col-xs-12">
		        	<b>{{ scheduleitem.title }}</b>
	        	</div>
	        </td>
	        <td>
	            <div class="people-name text-center">
	            	<!-- scheduleitem name (link to webpage if provided) -->
	            	{% if scheduleitem.webpage %}
	            		<a href="{{ scheduleitem.webpage }}" target="_blank">{{ scheduleitem.speaker }}</a>
	            	{% else %}
	            		{{ scheduleitem.speaker }}
	            	{% endif %}
	                <br>
	                <!-- scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil_link %}
	                	<a href="{{ scheduleitem.affil_link }}" target="_blank">{{ scheduleitem.affil }}</a>
	                {% else %}
	                	{{ scheduleitem.affil }}
	                {% endif %}
	                <!-- Additional scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil2_link %}
	                	<br>
	                	<a href="{{ scheduleitem.affil2_link }}" target="_blank">{{ scheduleitem.affil2 }}</a>
	                {% elsif scheduleitem.affil2 %}
	                	<br>
	                	{{ scheduleitem.affil2 }}
	                {% endif %}
	            </div>
	        </td>
	    </tr>
	{% endfor %}
	</table>
</div>

### Day 2 

Day 2 sessions are going to happen at **0114 Student Innovation Center**

<div class = "post-content">
	<table>
		{% for scheduleitem in site.data.workshops.sciml2022.day2 %}
	    <tr>
	        <td>
	            <p align="center">
	                {{ scheduleitem.time }}
	            </p>
	        </td>
	        <td>
	            <div class="col-xs-12">
	                <p align="center">
	                	{% if scheduleitem.img %}
	                    	<img class="people-pic" src="{{ scheduleitem.img | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% else %}
	                    	<img class="people-pic" src="{{ 'avatar.jpg' | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% endif %}
	                </p>
	            </div>
	        </td>
	        <td align="center">
	        	<div class="col-xs-12">
		        	<b>{{ scheduleitem.title }}</b>
	        	</div>
	        </td>
	        <td>
	            <div class="people-name text-center">
	            	<!-- scheduleitem name (link to webpage if provided) -->
	            	{% if scheduleitem.webpage %}
	            		<a href="{{ scheduleitem.webpage }}" target="_blank">{{ scheduleitem.speaker }}</a>
	            	{% else %}
	            		{{ scheduleitem.speaker }}
	            	{% endif %}
	                <br>
	                <!-- scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil_link %}
	                	<a href="{{ scheduleitem.affil_link }}" target="_blank">{{ scheduleitem.affil }}</a>
	                {% else %}
	                	{{ scheduleitem.affil }}
	                {% endif %}
	                <!-- Additional scheduleitem affiliation (if provided) -->
	                {% if scheduleitem.affil2_link %}
	                	<br>
	                	<a href="{{ scheduleitem.affil2_link }}" target="_blank">{{ scheduleitem.affil2 }}</a>
	                {% elsif scheduleitem.affil2 %}
	                	<br>
	                	{{ scheduleitem.affil2 }}
	                {% endif %}
	            </div>
	        </td>
	    </tr>
	{% endfor %}
	</table>
</div>


## Speakers


<div class = "post-content">
	<table style="border-collapse: collapse; border: none;">
		{% for speaker in site.data.workshops.sciml2022.speakers %}
	    <tr style="border: none;">
	        <td style="border: none;">
	            <div class="col-xs-6">
	                <p align="center">
	                	{% if speaker.img %}
	                    	<img class="people-pic" src="{{ speaker.img | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% else %}
	                    	<img class="people-pic" src="{{ 'avatar.jpg' | prepend: '/images/workshops/sciml2022/' | prepend: site.baseurl | prepend: site.url }}" target="_blank">
	                    {% endif %}
	                </p>
	            </div>
	        </td>
	        <td style="border: none;">
	            <div class="people-name text-center">
	            	<!-- Speaker name (link to webpage if provided) -->
	            	{% if speaker.webpage %}
	            		<b><a href="{{ speaker.webpage }}" target="_blank">{{ speaker.name }}</a></b>
	            	{% else %}
	            		<b>{{ speaker.name }}</b>
	            	{% endif %}
	                <br>
	                <!-- Speaker affiliation (if provided) -->
	                {% if speaker.affil_link %}
	                	<a href="{{ speaker.affil_link }}" target="_blank">{{ speaker.affil }}</a>
	                {% else %}
	                	{{ speaker.affil }}
	                {% endif %}
	                <!-- Additional speaker affiliation (if provided) -->
	                {% if speaker.affil2_link %}
	                	<br>
	                	<a href="{{ speaker.affil2_link }}" target="_blank">{{ speaker.affil2 }}</a>
	                {% elsif speaker.affil2 %}
	                	<br>
	                	{{ speaker.affil2 }}
	                {% endif %}
	            </div>
	        </td>
	        <td style="border: none;">
	        	<div class="people-name text-justified">
	        		<b> {{speaker.title}}</b>
	        		<br>
	        		<em>{{ speaker.abstract }}</em>
	        	</div>
	        </td>
	    </tr>
	{% endfor %}
	</table>
</div>


### Contributed Papers

<table>
  {% for row in site.data.workshops.sciml2022.posters %}
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

**PS:** Paper ID 2,4,6,10,11 have been selected for lightning talks. 