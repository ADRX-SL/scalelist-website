import { Mail, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/scalelist/icp-agency/brand/Logo";

const columns = [
  {
    title: "Get Started",
    links: ["Pricing", "Log In", "Sign up for free", "Get a demo"],
  },
  {
    title: "Product",
    links: ["Email Finder", "Email Verifier", "Chrome Extension", "Lead Mobile Finder", "Monitoring", "Integrations", "API"],
  },
  {
    title: "Resources",
    links: ["Blog", "Youtube", "Help Center", "Scalelist Academy"],
  },
  {
    title: "Free Tools",
    links: ["Free Email Verifier", "Free Email Finder"],
  },
  {
    title: "Company",
    links: ["Partner with Scalelist", "Top Lead Generation Companies", "Public Listed Company USA", "Terms of Use", "Privacy Policy", "Contact Us"],
  },
  {
    title: "Alternatives",
    links: ["Scalelist vs Amplemarket", "Scalelist vs Apollo.io", "Scalelist vs Cognism", "View All Alternatives"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink-muted transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="space-y-1 text-sm text-ink-muted">
            <div>© {new Date().getFullYear()} Scalelist</div>
            <a href="mailto:hello@scalelist.com" className="inline-flex items-center gap-2 hover:text-brand">
              <Mail className="h-4 w-4" /> hello@scalelist.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-ink">Social</span>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground hover:bg-brand/90">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground hover:bg-brand/90">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}