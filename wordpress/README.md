# scalelist.com — WordPress layer

Version control for the production site: **WordPress on SiteGround**, built with Elementor Pro + JetEngine + ACF Pro.

**This repo is private and must stay private.** It tracks server configuration; a public copy would expose site internals.

---

## What can and cannot live in git

This site is not a codebase in the way a React app is. Elementor, JetEngine, and ACF store page layouts and field values **in the MySQL database**, not in files. So git cannot be the rollback mechanism for page design the way it is for the `scalelist-website` design repo.

### Tracked here (code + config)

| What | Where | How it gets here |
|---|---|---|
| Child theme (PHP templates, functions.php, CSS/JS) | `theme/` | rsync over SSH |
| Must-use plugins / custom snippets | `mu-plugins/` | rsync over SSH |
| WPCode snippets | `exports/wpcode/` | plugin export → JSON |
| ACF field group definitions | `exports/acf/` | ACF → Tools → Export as JSON |
| Elementor global kit + saved templates | `exports/elementor/` | Templates → Export |
| JetEngine post types, meta boxes, listings | `exports/jetengine/` | JetEngine → Export |
| Redirection rules | `exports/redirects/` | Redirection → Import/Export |
| Plugin + version manifest | `manifest/plugins.json` | generated |

### Deliberately NOT tracked

| What | Why | Where it lives instead |
|---|---|---|
| Page/post content (~35k programmatic pages, ~150 posts, 61 pages) | Database rows. Git is the wrong tool; diffs are meaningless and the repo would balloon. | WPvivid backups + SiteGround daily backups |
| Media library / uploads | Large binaries, regenerated thumbnails | SiteGround backups + ShortPixel |
| WordPress core | Managed by SiteGround updates | — |
| Third-party plugin code | 35 plugins, several paid with licence keys | Pinned by version in `manifest/plugins.json` |
| `wp-config.php`, `.htaccess` secrets, licence keys, salts | Credentials. Never commit. | SiteGround Site Tools |

---

## Rollback story (the honest version)

- **Design/config changes** (theme, ACF fields, snippets) → git revert, then redeploy.
- **Page content and Elementor layouts** → Elementor keeps per-page revision history; site-wide rollback is a database restore from WPvivid or SiteGround backup. Git will not do this.
- **Safe experimentation** → use SiteGround's staging environment (Site Tools → Dev → Staging), which clones files *and* database. That is the real "staging" for this site.

---

## Status

Scaffold only. `theme/` and the `exports/` folders are empty until SSH access to SiteGround is configured — see `docs/SETUP.md`.
