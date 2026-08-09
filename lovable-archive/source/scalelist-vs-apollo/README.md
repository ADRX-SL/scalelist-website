# scalelist-vs-apollo — source backup

Lovable project `b75be290-7062-4e17-aaec-0b2faad259cd`, published, no GitHub repo.

The page component below is the whole design — this project keeps everything in one file
rather than composed sections. The remaining files in the Lovable project are standard
shadcn/ui boilerplate and Vite config, regenerable from `package.json` and `components.json`.

- `src/pages/ScalelistVsApollo.tsx` — the complete page

## Assets referenced but not backed up here

The page loads images from Lovable's CDN paths, which will not resolve outside the project:

- `/lovable-uploads/bbb3a087-089d-425c-a651-37d10ed3c3a9.png` — Scalelist logo
- `/lovable-uploads/937691b6-4cec-411f-8c2f-4edd58963b96.png` — Apollo logo
- `/lovable-uploads/baptiste-graffin-profile.jpg` — testimonial headshot

Substitute equivalents from `src/assets/logos/` when porting.

## Note before reusing this page

Both CTA links are placeholders (`signupUrl: "#"`, `demoUrl: "#"`), and the footer reads
"© 2024". The live WordPress comparison page at `/blogs/scalelist-vs-apollo-io/` is the
version currently serving traffic.
