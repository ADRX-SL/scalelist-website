# Security findings — 2026-08-08

Found while pulling the theme from SiteGround for version control. Both are pre-existing
production issues, not caused by this work.

---

## 1. Live HubSpot tokens hardcoded in the active theme — HIGH

**Where:** `wp-content/themes/pr-templatev2/functions.php`, lines **2200** and **2471**
(two different HubSpot private-app tokens, prefix `pat-eu1-`).

**Why it matters:** a HubSpot private-app token grants API access to the CRM under whatever
scopes it was issued. Anyone who obtains the file — a file-read vulnerability, a leaked
backup, a contractor with server access, or a future public repo — can read and write CRM data.

**Because of this, `theme/pr-templatev2/` is deliberately NOT committed yet.** Committing it
would write both tokens permanently into git history, where deleting them later requires a
history rewrite.

**Recommended fix**

1. **Rotate both tokens** in HubSpot (Settings → Integrations → Private Apps). Rotation is the
   only action that actually revokes exposure; everything else just hides it.
2. Move the new values into `wp-config.php` (never committed):
   ```php
   define( 'SCALELIST_HUBSPOT_TOKEN', 'pat-eu1-...' );
   ```
3. Change both call sites in `functions.php` to read the constant:
   ```php
   $token = defined( 'SCALELIST_HUBSPOT_TOKEN' ) ? SCALELIST_HUBSPOT_TOKEN : '';
   ```
4. Test on **staging3.scalelist.com** first — these tokens drive live HubSpot calls.
5. Then the theme can be committed safely.

---

## 2. Theme source publicly downloadable — MEDIUM

**Where:** `https://scalelist.com/wp-content/themes/pr-template.zip`

**Confirmed:** returns `HTTP 200`, `application/zip`, 2,113,544 bytes. Anyone on the internet
can download it — no authentication.

**Why it matters:** it exposes the full source of the previous theme, letting an attacker read
the code offline to hunt for vulnerabilities. Verified it does **not** contain the HubSpot
tokens, so this is information disclosure rather than credential leakage.

**Recommended fix:** delete the file from the server. It is a leftover build artifact; the live
site does not use it (active theme is `pr-templatev2`). Keep a copy locally first if the old
theme has any value.

```bash
rm ~/www/scalelist.com/public_html/wp-content/themes/pr-template.zip
```

Also worth reviewing whether `pr-template/` (the unpacked older theme, 6.4 MB) and
`twentytwentyfive/` are still needed — unused themes still receive security scrutiny and
should be removed rather than left dormant.
