# Publishing without a developer

Aqeel is out of the workflow. Everything he did by hand is now a command.

## What he used to do, and what replaced it

| His task | Replaced by | Verified |
|---|---|---|
| Build an approved page in WordPress | `./scripts/wp.sh page <file.md>` | page 93905 updated, 93910 created |
| Publish a blog post from a Notion card | `./scripts/wp.sh post <file.md>` | post 93912 created as draft |
| Screenshot HTML visuals and upload to the media library | `./scripts/wp.sh visual <file.html>` | rendered 1200x1600 PNG, uploaded, returns 200 live |
| Set up redirects | `./scripts/wp.sh redirect <from> <to>` | uses the Redirection plugin already installed |
| Report back that it shipped | `./scripts/wp.sh status <slug>` | prints id, status, live URL |

## The commands

```bash
./scripts/wp.sh page    content/pages/my-page.md      # create or update a page
./scripts/wp.sh post    content/posts/my-post.md      # create or update a blog post
./scripts/wp.sh visual  visuals/chart.html            # render to PNG, upload, print the URL
./scripts/wp.sh render  visuals/chart.html out.png    # render only
./scripts/wp.sh media   image.png                     # upload only
./scripts/wp.sh redirect /old-url /new-url            # 301
./scripts/wp.sh status  my-slug                       # where is it, what state
DRY_RUN=1 ./scripts/wp.sh page content/pages/x.md     # validate, no writes
```

Content files carry front-matter:

```markdown
---
title: Lead Enrichment API
slug: lead-enrichment-api
status: draft          # draft | publish. draft is the default and the safe one.
category: Outbound     # posts only, optional
---

## Body in Markdown
```

## Who does what now

**Claude (automatic, no approval needed)**
- Write the content and the visuals
- Render visuals to PNG and upload them
- Create or update pages and posts **as drafts**
- Add redirects, report status, verify the live site is unbroken
- Create the Notion card, assigned to Arnaud

**Arnaud (the only human step)**
- Read the draft in wp-admin and click **Publish**
- Approve anything that sends outward: emails, social posts, messages to people
- Rotate credentials

**Automatic on merge**
- `.github/workflows/publish-wordpress.yml` publishes everything in `content/` to WordPress over SSH when a PR merges to `main`

## Why SSH and not the REST API

SiteGround's Anti-Bot AI serves an `sgcaptcha` challenge to datacenter IPs. REST publishing from GitHub Actions fails, confirmed from two different runner IPs; adding a User-Agent did not help. SSH is not subject to that challenge. Do not "fix" this by switching back to REST.

## Gotchas that cost time once already

- `wp post list --name=<slug>` silently ignores drafts. Use `get_page_by_path()`, which the script does. Getting this wrong creates duplicate pages on every run.
- Everything defaults to `draft`. If a page needs to go live, that is a deliberate `status: publish` or a human clicking Publish.
- The skills in `~/.claude/skills/` are read-only vendor files and still say "hand off to Aqeel". The memory `aqeel-removed-publish-directly` overrides them.
