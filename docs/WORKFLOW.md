# Lovable → GitHub → WordPress: how to ship a page

## The short version

```
1. Design      Lovable project  ──▶  2. Save      branch + PR in this repo
                                              │
                                      3. Review  PR (+ preview URL once deploys are on)
                                              │
                                      4. Publish  page created/updated in WordPress
```

Steps 1, 2 and 4 are automatable today. Step 3's preview URL needs the Cloudflare deploy
switched on (see *Blockers*).

---

## Step 1 — Design in Lovable

Build or edit the page in the Lovable project. Lovable is the drawing board; nothing there is
authoritative until it lands in this repo.

## Step 2 — Save the approved code to GitHub

Lovable can push to GitHub itself (its GitHub app is installed on this account). For a new page:

```bash
cd ~/Desktop/scalelist-website
git checkout main && git pull
git checkout -b page/<slug>
# add src/routes/<slug>.tsx and src/components/scalelist/<slug>/…
npm run build          # must pass
git add -A && git commit -m "Add <slug> page"
git push -u origin page/<slug>
gh pr create --base main
```

`main` is protected — a PR is the only way in. Merging is your approval; reverting the merge is
your rollback.

**Rules that keep the design system intact**

- Never copy a legacy repo's `components/ui/*` — use this repo's shared ones.
- Never add a second NavBar or Footer — import the shared `NavBar` and `Footer`.
- Colours and type come from `src/styles.css` tokens, not hardcoded hex values.
- Route filename must match the intended live slug.

## Step 3 — Review

Read the diff, and (once deploys are enabled) open the PR's preview URL.

## Step 4 — Publish to WordPress

Production is WordPress. A page reaches the public in one of two ways:

**(a) WordPress-native — works today.** The page is created or updated through the WordPress API
as a **draft**, you review it in wp-admin, then hit Publish. Updating an existing page is the same
call with the page ID, so copy edits need no developer. Verified end-to-end on 2026-08-08:
page `93905` created and then updated programmatically, staying non-public throughout.

**(b) Served by Cloudflare from this repo — needs enabling.** Deploy this repo as a Worker and add
a Workers route for that path only. WordPress keeps serving everything else. This is the route that
makes "merge → live" literal, and it is the only way the React design ships pixel-identical.

---

## Which route should a page take?

| Situation | Route |
|---|---|
| Copy change on an existing page | (a) WordPress update — seconds, no build |
| New page reusing an existing Elementor layout | (a) build in WP directly |
| New page with a genuinely new design | (b) once enabled — otherwise (a) plus a developer rebuilding it |
| Anything SEO-critical and already ranking | (a) — do not move a ranking URL between origins |

---

## Blockers before step 4(b) works

1. **Cloudflare deploy credential.** `.github/workflows/deploy-cloudflare.yml` is committed and
   ready; it needs a `CLOUDFLARE_API_TOKEN` repository secret (Workers Scripts: Edit). Add it in
   GitHub → Settings → Secrets → Actions. The workflow deploys on merge to `main` and posts a
   preview URL on each PR.
2. **A Workers route on `scalelist.com`** — this changes what production serves for that path and
   must be a deliberate decision, one path at a time. Not created.

## Safety rails

- `main` is protected: PR required, no force-push, no deletion.
- The WordPress publish step always creates **drafts** — nothing goes public without a human click.
- Legacy repos are archived, never deleted, and are restorable from repo settings.
