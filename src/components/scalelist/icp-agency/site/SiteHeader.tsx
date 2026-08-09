import { Link } from "@tanstack/react-router";
import { ChevronDown, Chrome } from "lucide-react";
import { Logo } from "@/components/scalelist/icp-agency/brand/Logo";
import { CTAButton } from "@/components/scalelist/icp-agency/brand/CTAButton";

const navItems = [
  { label: "Platform", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "Customers", hasMenu: false },
  { label: "Pricing", hasMenu: false },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="/">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-brand"
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 text-sm font-medium text-ink hover:text-brand md:inline-flex">
            <Chrome className="h-4 w-4" /> Chrome Extension
          </button>
          <button className="hidden text-sm font-medium text-ink hover:text-brand md:inline-block">
            Login
          </button>
          <CTAButton variant="outline">Get a demo</CTAButton>
          <CTAButton variant="primary" withArrow>Sign up for free</CTAButton>
        </div>
      </div>
    </header>
  );
}