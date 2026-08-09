export function SiteFooter() {
  const cols = [
    {
      title: "Product",
      links: ["Email Finder", "Mobile Number Finder", "Email Verifier", "Chrome Extension", "API"],
    },
    {
      title: "Solutions",
      links: ["For Sales & Marketing", "For Agencies", "For Founders", "Monitoring"],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Blog", "Help Center", "Compare", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Privacy", "Terms"],
    },
  ];
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 18 L11 6" /><path d="M11 18 L17 6" /><path d="M17 18 L19 14" />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-ink">Scalelist</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-ink">
              Verified B2B emails and mobile numbers for sales teams that actually want to close.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-ink hover:text-ink">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-ink md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Scalelist. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
