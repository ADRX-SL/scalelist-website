# Setup — connecting this repo to SiteGround

## 1. Grant SSH access (one time)

A keypair has been generated on Arnaud's Mac at `~/.ssh/scalelist_siteground`.
The **private** key never leaves the machine. Only the public key below is installed on the server.

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIA1LeIzlHVffTkrjPujDRir5JFsnqkyBF726EsTE6RAw claude-code-scalelist
```

Install it: SiteGround **Site Tools → Devs → SSH Keys Manager → Import** → paste the key above →
then note the SSH hostname, port, and username shown under **Manage SSH Keys / SSH Credentials**.

## 2. Verify

```bash
ssh -i ~/.ssh/scalelist_siteground -p <port> <user>@<host> "ls -la ~/www"
```

## 3. Pull the theme and custom code

```bash
rsync -avz -e "ssh -i ~/.ssh/scalelist_siteground -p <port>" \
  <user>@<host>:~/www/scalelist.com/public_html/wp-content/themes/ ./theme/
rsync -avz -e "ssh -i ~/.ssh/scalelist_siteground -p <port>" \
  <user>@<host>:~/www/scalelist.com/public_html/wp-content/mu-plugins/ ./mu-plugins/
```

Then review for secrets before the first commit — child themes sometimes hardcode API keys.

## 4. Config exports (done from wp-admin, saved into `exports/`)

| Plugin | Path in wp-admin | Save to |
|---|---|---|
| ACF Pro | Custom Fields → Tools → Export Field Groups (JSON) | `exports/acf/` |
| Elementor | Templates → Saved Templates → Export; Site Settings → Export Kit | `exports/elementor/` |
| JetEngine | JetEngine → Post Types / Meta Boxes / Listings → Export | `exports/jetengine/` |
| Redirection | Tools → Redirection → Import/Export → Export JSON | `exports/redirects/` |
| WPCode | Code Snippets → Tools → Export | `exports/wpcode/` |

Re-export after any structural change and commit it — that is what makes config changes reviewable and revertable.

## 5. Enable staging (the real safety net)

SiteGround **Site Tools → Dev → Staging** clones files *and* database. Test plugin updates,
Elementor changes, and ACF restructures there before touching production. Git does not
replace this for a database-driven site.
