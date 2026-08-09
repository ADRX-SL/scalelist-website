# How this repository is organised

```
scalelist-website/
├── README.md                     what this repo is and the rules for changing it
├── docs/
│   ├── STRUCTURE.md              this file
│   ├── WORKFLOW.md               Lovable → GitHub → WordPress, step by step
│   ├── MIGRATION.md              every legacy repo and its porting status
│   └── AUDIT-2026-08-08.md       full infrastructure audit + repo inventory
├── docs/ci/                      CI pipeline awaiting `workflow` token scope
│   └── (pending) see docs/ci/deploy-cloudflare.yml
├── package.json                  ONE dependency set for the whole site (was 56)
└── src/
    ├── styles.css                DESIGN TOKENS — colours, type, spacing. Change the brand here.
    ├── routes/                   ONE FILE PER PAGE. Filename = live URL slug.
    │   ├── index.tsx                     → /
    │   ├── free-email-finder.tsx         → /free-email-finder
    │   ├── email-verifier.tsx            → /email-verifier
    │   ├── lead-mobile-finder.tsx        → /lead-mobile-finder
    │   ├── extension.tsx                 → /extension
    │   ├── integrations.tsx              → /integrations
    │   ├── mcp-server.tsx                → /mcp-server
    │   ├── monitoring.tsx                → /monitoring
    │   ├── sales-marketing.tsx           → /sales-marketing
    │   ├── revops.tsx                    → /revops
    │   ├── customers.tsx                 → /customers
    │   ├── customers/                    → /customers/growth-labz, /outreach-ace, /bd-s
    │   └── icp/                          → /icp/saas-b2b-reseller, /icp/agency-partner
    ├── components/
    │   ├── ui/                   shared shadcn/ui primitives — the design system's building blocks
    │   └── scalelist/            branded sections
    │       ├── NavBar.tsx        SHARED — every page uses this one
    │       ├── Footer.tsx        SHARED — every page uses this one
    │       ├── HeroSection.tsx, FeatureRows.tsx, Testimonial.tsx, …  shared sections
    │       └── <page-slug>/      sections belonging to a single page
    ├── assets/
    │   ├── logos/                shared brand/customer logos
    │   └── <page-slug>/          images belonging to a single page
    ├── hooks/                    shared React hooks
    └── lib/                      utilities (cn, error handling)
```

## The three rules

1. **One page = one file in `src/routes/`,** named after its live URL slug.
2. **Anything used twice lives in `src/components/scalelist/` at the top level.** Anything used by
   exactly one page lives in that page's `<page-slug>/` folder.
3. **Colours and type come from `src/styles.css`.** No hardcoded hex values — that is what made 56
   separate repos impossible to restyle.

## Where the rest of the site lives

This repo holds the **design**. It is not what serves scalelist.com today.

- Production WordPress code — theme, mu-plugins, config exports, plugin manifest — is in the
  private repo **`ADRX-SL/scalelist-wordpress`**.
- Page content and Elementor layouts live in the WordPress **database** and are backed up by
  WPvivid and SiteGround, not by git.
