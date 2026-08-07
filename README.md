# Scalelist Website — Design Source of Truth

This repository consolidates the ~56 individual Lovable page repos into **one repo**. It is the single source of truth for the design of every marketing page on scalelist.com.

## How this fits production

Production is WordPress on SiteGround. Pages are implemented there with ACF (Advanced Custom Fields). **This repo is not deployed to production** — it is the reference implementation the frontend dev ports from, plus the staging/preview environment where designs are reviewed and approved before any WP work starts.

```
design change (branch + PR here) → preview build → approval → dev ports to WP/ACF → live
```

## Structure

- `src/routes/` — one route per page, mirroring live scalelist.com slugs (e.g. `/extension`, `/email-verifier`, `/revops`)
- `src/components/ui/` — shadcn/ui primitives (the design system's component layer)
- `src/components/scalelist/` — shared branded sections: NavBar, Footer, heroes, feature rows, testimonials, CTAs
- `src/styles.css` — design tokens (colors, type, spacing). Change the brand here, every page updates.
- `docs/MIGRATION.md` — inventory of all legacy repos and their porting status

## Stack

TanStack Start · React 19 · Tailwind CSS v4 · shadcn/ui · Vite

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

## Workflow rules

1. `main` is protected — no direct pushes. Every change is a branch + PR.
2. One page or one design-system change per PR.
3. Design rollback = `git revert` the PR (or redeploy an earlier tag).
4. The legacy Lovable repos are frozen and archived. Do not edit them.
