import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  hint?: string;
}

export function StatCard({ value, label, hint, className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]",
        className,
      )}
      {...props}
    >
      <div className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{value}</div>
      <div className="mt-2 text-sm font-medium text-ink-muted">{label}</div>
      {hint && <div className="mt-1 text-xs text-ink-muted">{hint}</div>}
    </div>
  );
}