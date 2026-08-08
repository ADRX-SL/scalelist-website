import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "outline-light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-sm",
  outline: "bg-surface text-ink border border-border hover:bg-surface-muted",
  "outline-light": "bg-transparent text-dark-fg border border-white/20 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  asChild?: boolean;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ variant = "primary", size = "md", withArrow, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" />}
      </button>
    );
  },
);
CTAButton.displayName = "CTAButton";