import * as React from "react";
import { cn } from "@/lib/utils";

export interface ComparisonBarRowProps {
  logo?: React.ReactNode;
  name: string;
  emailPct: number | null;
  phonePct: number | null;
  color: string; // tailwind bg-* class for the bar
  highlighted?: boolean;
}

function Bar({ pct, color }: { pct: number | null; color: string }) {
  if (pct === null) {
    return <span className="text-sm text-dark-fg-muted/60">N/A</span>;
  }
  return (
    <div className="flex items-center gap-3">
      <div className="h-2.5 w-40 overflow-hidden rounded-full bg-white/10 md:w-56">
        <div className={cn("h-full rounded-full", color)} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 text-sm font-semibold text-dark-fg">{pct}%</span>
    </div>
  );
}

export function ComparisonBarRow({
  logo,
  name,
  emailPct,
  phonePct,
  color,
  highlighted,
}: ComparisonBarRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_auto_auto] items-center gap-6 rounded-xl px-4 py-3",
        highlighted && "bg-brand/15 ring-1 ring-brand/40",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-dark-fg">
          {logo ?? name.charAt(0)}
        </div>
        <span className={cn("font-semibold", highlighted ? "text-brand" : "text-dark-fg")}>
          {name}
        </span>
      </div>
      <Bar pct={emailPct} color={color} />
      <Bar pct={phonePct} color={color} />
    </div>
  );
}