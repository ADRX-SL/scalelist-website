# lovable-archive — backup of Lovable-only designs

36 Lovable projects are **published** but have **no GitHub repository**. Their design existed
in exactly one place: inside Lovable. If a project were deleted, the design was gone.

This folder is the backup.

## What is here

| Folder | What it holds | Coverage |
|---|---|---|
| `screenshots/` | Full-page 1920×1080 PNG of every published design | **36 of 36** |
| `manifest.json` | Name, project ID, editor URL, preview URL, last edited, tech stack, description | **36 of 36** |
| `source/` | Actual React source of the distinctive page files | **1 of 36** — see below |

## Why source coverage is partial

Each Lovable project holds ~88 files, but roughly 70 of those are regenerable shadcn/ui
boilerplate. Only ~10 per project are distinctive. Pulling those through the API costs several
calls per project — around 400 calls for all 36 — so source extraction is being done in
batches, highest-value first.

**A faster route to 100%:** Lovable can push a project straight to GitHub from its own UI
(project → GitHub → Connect). That gives complete source *and* commit history for a project in
one click, with no extraction. For 36 projects that is 36 clicks, but it is the only way to get
genuinely complete coverage including binaries and lockfiles.

## What was tried and rejected

Fetching each project's `preview_url` returned an identical ~19 KB Lovable interstitial for all
36 — the preview URLs are authentication-gated, so the captured HTML was a login page, not the
design. Those files were discarded rather than committed, because a backup that looks complete
but is empty is worse than none.

## Notable designs with no repo

`scalelist-vs-apollo`, `scalelist-vs-findymail` (competitor pages), `pseo-yc-directory`,
`usa-public-listed-companies`, `yc-founders`, `clutch-lead-generation-agencies`,
`clay-g2-lead-generation-agencies` (programmatic SEO directories), and a set of glossary pages
(`what-is-a-sales-qualified-lead`, `difference-between-lead-prospect`, `what-does-bcc-means`,
`whats-an-email-address`).
