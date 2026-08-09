---
title: Pipeline test — git to WordPress
slug: zz-pipeline-test-20260808
status: draft
description: Non-public page proving the git-to-WordPress publishing pipeline.
---

## This page was published from GitHub

This page exists as a file at `content/pages/zz-pipeline-test.md` in the
**scalelist-website** repository. Editing that file and merging the pull request
updates this page automatically.

### What that proves

- A page can be **created** from a file in git
- The same file can **update** the page later, without creating a duplicate
- Nothing goes public until `status` is changed to `publish`

Pages published this way render through the theme, not Elementor. Existing
Elementor pages are untouched by this pipeline.

### Live pipeline run

This paragraph was added in a pull request and published to WordPress by GitHub
Actions on merge — no developer, no manual step, no copy-paste. Published over SSH + WP-CLI,
because SiteGround's Anti-Bot AI blocks REST calls from CI runners.
