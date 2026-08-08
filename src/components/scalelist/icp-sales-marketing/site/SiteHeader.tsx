import { CTAButton } from "./CTAButton";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5 18 L11 6" /><path d="M11 18 L17 6" /><path d="M17 18 L19 14" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink">Scalelist</span>
    </a>
  );
}

export function SiteHeader() {
  const links = [
    { label: "Product", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-muted-ink hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a href={DEMO} className="hidden text-sm font-semibold text-ink hover:text-brand md:inline">
            Talk to sales
          </a>
          <CTAButton href={SIGNUP} variant="primary" className="px-4 py-2 text-sm">
            Sign up for free
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
