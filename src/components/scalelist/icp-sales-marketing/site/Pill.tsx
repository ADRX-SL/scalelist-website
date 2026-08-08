import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  withStar = true,
}: {
  children: React.ReactNode;
  className?: string;
  withStar?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand",
        className,
      )}
    >
      {withStar && <span aria-hidden>✦</span>}
      {children}
    </span>
  );
}
