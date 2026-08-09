import { useEffect, useState } from "react";
import { Zap, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV: { label: string; href?: string; dropdown?: boolean }[] = [
  { label: "Platform", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "Customers", href: "https://scalelist.com/customers/" },
  { label: "Pricing", href: "https://scalelist.com/pricing/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="https://scalelist.com" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">Scalelist</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            n.dropdown ? (
              <button
                key={n.label}
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            ) : (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://chromewebstore.google.com/detail/scalelist-email-phone-fin/anaccdhbkiogfkgiajemghahklnkofmc"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Chrome Extension
          </a>
          <a
            href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Login
          </a>
          <a
            href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com"
            className="inline-flex h-10 items-center rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Get a demo
          </a>
          <Button
            asChild
            className="group h-10 rounded-full px-5 shadow-[0_8px_24px_-8px_hsl(212_100%_50%/0.6)]"
          >
            <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
              Sign up for free
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) =>
              n.dropdown ? (
                <div
                  key={n.label}
                  className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-foreground"
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </a>
              ),
            )}
            <a
              href="https://chromewebstore.google.com/detail/scalelist-email-phone-fin/anaccdhbkiogfkgiajemghahklnkofmc"
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Chrome Extension
            </a>
            <a
              href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard"
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Login
            </a>
            <a
              href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold text-foreground"
            >
              Get a demo
            </a>
            <Button asChild className="mt-2 h-11 w-full rounded-full">
              <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
                Sign up for free
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}