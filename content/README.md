# content/ — pages authored in git, published to WordPress

Every file here is a WordPress page. Editing a file and merging the PR updates that
page on scalelist.com. Creating a file creates the page.

## Format

```markdown
---
title: Lead Enrichment API
slug: lead-enrichment-api
status: draft          # draft | publish  (draft is the safe default)
description: One-line SEO meta description.
---

## Your heading

Body content in Markdown. Headings, lists, links, bold, images.
```

## Rules

- **`slug` is the live URL.** `slug: pricing` publishes to `scalelist.com/pricing/`.
  Never change the slug of a page that already ranks — create a redirect instead.
- **`status: draft`** means the page is created/updated in WordPress but stays invisible
  to the public until someone clicks Publish in wp-admin. Use this until you trust the flow.
- **The filename is irrelevant**; `slug` decides the URL. Keep them the same to stay sane.
- **First deploy of a page records its WordPress ID** in `content/.page-ids.json`. That file is
  committed and is how later edits update the same page instead of creating duplicates.
  Do not hand-edit it.

## What this does NOT do

It does not touch pages built in Elementor. Those live in the WordPress database and are
edited in wp-admin. Pages published from here render through the theme template
`page-git-content.php`, not Elementor.
