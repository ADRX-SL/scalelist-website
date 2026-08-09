export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M5 16 L11 8" />
          <path d="M13 16 L19 8" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink">Scalelist</span>
    </div>
  );
}