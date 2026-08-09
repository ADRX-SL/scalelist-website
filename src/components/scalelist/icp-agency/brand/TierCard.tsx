import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";

export interface TierCardProps {
  tierNumber: string;
  name: string;
  volumeRange: string;
  benefits: string[];
  ctaLabel: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
  className?: string;
}

export function TierCard({
  tierNumber,
  name,
  volumeRange,
  benefits,
  ctaLabel,
  onCtaClick,
  highlighted,
  className,
}: TierCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border bg-surface p-7 shadow-[var(--shadow-card)] transition-all",
        highlighted ? "border-brand ring-2 ring-brand/20" : "border-border",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
          {tierNumber}
        </span>
        <h3 className="text-lg font-bold text-ink">{name}</h3>
      </div>
      <p className="mt-2 text-sm font-medium text-ink-muted">{volumeRange}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <CTAButton
        variant={highlighted ? "primary" : "outline"}
        className="mt-6 w-full"
        onClick={onCtaClick}
      >
        {ctaLabel}
      </CTAButton>
    </div>
  );
}