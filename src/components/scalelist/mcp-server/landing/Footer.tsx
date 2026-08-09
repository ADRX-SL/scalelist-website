import { Linkedin, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Get Started",
    links: [
      { label: "Pricing", href: "https://scalelist.com/pricing/" },
      { label: "Log In", href: "https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard" },
      { label: "Sign up for free", href: "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard" },
      { label: "Get a demo", href: "https://calendly.com/arnaud-scalelist/30min" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Email Finder", href: "https://scalelist.com/free-email-finder/" },
      { label: "Email Verifier", href: "https://scalelist.com/email-verifier/" },
      { label: "Chrome Extension", href: "https://scalelist.com/extension/" },
      { label: "Lead Mobile Finder", href: "https://scalelist.com/lead-mobile-finder/" },
      { label: "Monitoring", href: "https://scalelist.com/monitoring/" },
      { label: "Integrations", href: "https://scalelist.com/integrations/" },
      { label: "API", href: "https://app.scalelist.com/docs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://scalelist.com/blog/" },
      { label: "Youtube", href: "https://www.youtube.com/@Scalelist" },
      { label: "Help Center", href: "https://intercom.help/scalelist/en/collections/12728118-general" },
      { label: "Scalelist Academy", href: "https://scalelist.com/academy/" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "Free Email Verifier", href: "https://scalelist.com/free-email-verifier/" },
      { label: "Free Email Finder", href: "https://scalelist.com/free-email-finder/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Partner with Scalelist", href: "https://affiliates.scalelist.com/signup" },
      { label: "Top Lead Generation Companies", href: "https://scalelist.com/top-lead-generation-companies/" },
      { label: "Public Listed Company USA", href: "https://scalelist.com/public-companies-usa/" },
      { label: "Terms of Use", href: "https://scalelist.com/terms-of-use/" },
      { label: "Privacy Policy", href: "https://scalelist.com/privacy/" },
      { label: "Contact Us", href: "https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Scalelist · hello@scalelist.com</div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/scalelist"
              aria-label="Scalelist on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@Scalelist"
              aria-label="Scalelist on YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:text-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}