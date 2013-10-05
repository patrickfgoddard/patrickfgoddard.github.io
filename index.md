---
layout: page
title: "Blog for Patrick F. Goddard"
description: "home page"
category: rebuild
---
<!-- <div class="jumbotron">
  <div class="container">
    <h1>Patrick F. Goddard</h1>
    <p>Web development, Drupal, skateboarding.</p>
    <p><a class="btn btn-primary btn-lg">Learn more &raquo;</a></p>
  </div>
</div>
-->
<div class="blog-list">
  {% for post in site.posts %}
    <div class="blog-post">
      <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
      <div class="blog-date"><em>{{ post.date | date_to_long_string }}</em></div>
      {% unless post.tags == empty %}
        Tags:
        <ul class="tag_box list-inline">
          {% for tag in post.tags %}
            <li><i class="icon-tags">{{ tag }}</i></li>
          {% endfor %}
        </ul>
      {% endunless %}

      <p>{{ post.content }}</p>
    </div>
  {% endfor %}
</div>