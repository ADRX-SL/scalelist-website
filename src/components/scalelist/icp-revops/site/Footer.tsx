export function Footer() {
  const cols = [
    { title: "Product", links: ["Email Finder", "Mobile Finder", "CRM Integrations", "Chrome Extension", "API"] },
    { title: "Solutions", links: ["For RevOps", "For Sales & Marketing", "For Agencies"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Help Center", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Contact", "Security"] },
  ];
  return (
    <footer className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground font-bold">S</div>
              <span className="text-base font-semibold tracking-tight text-ink">Scalelist</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Verified emails and mobile numbers, pushed directly into your CRM.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-ink">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-soft md:flex-row">
          <p>© {new Date().getFullYear()} Scalelist. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">SOC 2</a>
            <a href="#" className="hover:text-ink">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
