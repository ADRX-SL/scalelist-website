# Legacy repo migration inventory

All 56 repos on github.com/ADRX-SL, their disposition, and porting status.
Live URLs verified against the scalelist.com sitemap on 2026-08-07.

Status legend: ✅ ported · 🔜 to port · 🗄️ archive (do not port) · ❓ awaiting decision

## Foundation (already in this repo)

| Legacy repo | Route here | Live URL | Status |
|---|---|---|---|
| scalelist-homepage-showcase | `/` | `/` | ✅ base of this repo |

## To port — product pages

| Legacy repo | Route here | Live URL | Status |
|---|---|---|---|
| scalelist-mega-menu-revamp | NavBar component | site-wide | 🔜 (older Vite stack) |
| 022026-scalelist-email-finder-page | `/free-email-finder` | `/free-email-finder/` | 🔜 |
| 022026-scalelist-email-verifier-page | `/email-verifier` | `/email-verifier/` | 🔜 |
| 022026-scalelist-mobile-number-finder-page | `/lead-mobile-finder` | `/lead-mobile-finder/` | 🔜 |
| 022026-Scalelist-Chrome-extension-page | `/extension` | `/extension/` | ✅ |
| 022026-scalelist-integration-page | `/integrations` | (nav) | 🔜 |
| scalelist-mcp-server | `/mcp-server` | `/mcp-server/` | 🔜 |
| Scalelist---Lead-Monitoring | `/monitoring` | `/monitoring/` | 🔜 |

## To port — ICP / persona pages

| Legacy repo | Route here | Live URL | Status |
|---|---|---|---|
| icp-page-sales-and-marketing-page | `/sales-marketing` | `/sales-marketing/` | 🔜 |
| icp-page-revops-page. | `/revops` | `/revops/` | 🔜 |
| icp-page-saas-b2b-reseller | `/icp/saas-b2b-reseller` | never shipped | 🔜 |
| agency-partner-page | `/icp/agency-partner` | never shipped | 🔜 |

## To port — social proof

| Legacy repo | Route here | Live URL | Status |
|---|---|---|---|
| scalelist-customers-showcase | `/customers` | `/customers/` | 🔜 |
| growth-labz-story | `/customers/growth-labz` | `/growth-labz/` | 🔜 |
| outreach-ace-studio | `/customers/outreach-ace` | never shipped | ❓ |
| bd-s-success-story | `/customers/bd-s` | never shipped | ❓ |

## Competitor pages — awaiting decision

Live production has 28 WordPress-native pages at `/blogs/scalelist-vs-*/`, including 12
competitors with no Lovable repo. The 20 Dec-2025 landing-page repos below appear to be a
parallel effort that never replaced them. Decide: replace WP vs-pages with these designs
(port them), or archive all 20.

Zoominfo, Apollo.io, Lusha, hunter.io, Snov.io, Rocket-Reach, Lead-IQ, Kaspr, UpLead,
Seam-Less, Contactout, Wiza, Evaboot, Findymail, Prospeo, Anymail-finder, Fullenrich,
AeroLeads, Lead411, Skrapp.io — all `*-Landing-Page` repos. Status: ❓

## Archive — duplicates, experiments, retired

| Legacy repo | Reason |
|---|---|
| 022026---Scalelist-Architectural-Blueprint | homepage duplicate |
| scalelist-home-page-5747a686 | homepage duplicate |
| 20262502---Landing-page- | homepage duplicate |
| 02026---Chrome-extension-product-page | duplicate of 022026 extension page |
| product-page-email-finder / -email-verifier / -mobile-number-finder | superseded by 022026 versions |
| Scalelist---Integration-page | superseded by 022026 integration page |
| scalelist-november-sale | seasonal, retired |
| hero-sub-hero, trust-reach-sparkle, verified-list-pro, ai-artisan-automator, region-spotlight-compare, logo-showdown-comparison, scalelist-onboard-buddy | experiments, no live counterpart |
| blog-widget, seotopicalmap, lovabletest, Skrapp.io-Landing-Page- (empty), 022026-scalelist-homepage duplicates | misc / test |

## Porting checklist (per page)

1. Branch `port/<page-slug>` off `main`.
2. Copy the legacy repo's page sections into `src/components/scalelist/<page>/`.
3. Replace its local `components/ui/*` imports with this repo's shared ones.
4. Replace hardcoded colors/fonts with tokens from `src/styles.css`.
5. Create the route file in `src/routes/`.
6. Wire NavBar + Footer from shared components.
7. PR, preview, approve, merge. Then mark ✅ here in the same PR.
