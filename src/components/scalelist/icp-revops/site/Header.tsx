import { Link } from "@tanstack/react-router";
import { PrimaryCTA } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground font-bold">S</div>
          <span className="text-base font-semibold tracking-tight text-ink">Scalelist</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#" className="hover:text-ink">Product</a>
          <a href="#" className="hover:text-ink">Solutions</a>
          <a href="#" className="hover:text-ink">Integrations</a>
          <a href="#" className="hover:text-ink">Pricing</a>
          <a href="#" className="hover:text-ink">Customers</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://app.scalelist.com" className="hidden text-sm text-ink-soft hover:text-ink sm:block">Login</a>
          <PrimaryCTA href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
            Sign up
          </PrimaryCTA>
        </div>
      </div>
    </header>
  );
}
