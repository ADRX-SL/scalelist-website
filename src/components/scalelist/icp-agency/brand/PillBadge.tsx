import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "blue" | "purple" | "green" | "neutral";

const toneStyles: Record<Tone, string> = {
  blue: "bg-brand-soft text-brand",
  purple: "bg-accent-purple-soft text-accent-purple",
  green: "bg-emerald-50 text-emerald-700",
  neutral: "bg-surface-muted text-ink-muted",
};

export interface PillBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  icon?: React.ReactNode;
}

export function PillBadge({ tone = "blue", icon, className, children, ...props }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}