import { ArrowRight } from "lucide-react";

export function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1 text-xs font-medium tracking-wide text-brand ${className}`}>
      {children}
    </span>
  );
}

export function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-sm transition hover:opacity-90"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function SecondaryCTA({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        onDark
          ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          : "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-ink transition hover:bg-muted"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function CTARow({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <PrimaryCTA href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
        Sign up for free
      </PrimaryCTA>
      <SecondaryCTA href="https://calendly.com/arnaud-scalelist/30min" onDark={onDark}>
        Talk to sales
      </SecondaryCTA>
    </div>
  );
}

export function NumberCircle({ n }: { n: number }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-sm font-semibold text-brand">
      {n}
    </div>
  );
}

export function CaseStudyPill() {
  return (
    <span className="mt-1 inline-flex items-center rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
      Case study
    </span>
  );
}
