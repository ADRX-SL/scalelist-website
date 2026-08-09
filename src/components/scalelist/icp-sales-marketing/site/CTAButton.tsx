import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineDark";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  const styles: Record<Variant, string> = {
    primary: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-sm",
    outline: "bg-white text-ink border border-border hover:bg-brand-soft/40",
    outlineDark:
      "bg-transparent text-white border border-white/20 hover:bg-white/10",
  };
  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
