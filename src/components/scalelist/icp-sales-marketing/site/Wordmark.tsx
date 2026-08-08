import { cn } from "@/lib/utils";

/** Simple text wordmark used as a placeholder for real logo SVGs. */
export function Wordmark({
  name,
  className,
  italic = false,
  weight = "font-semibold",
}: {
  name: string;
  className?: string;
  italic?: boolean;
  weight?: string;
}) {
  return (
    <span
      className={cn(
        "text-base tracking-tight text-muted-ink/80",
        weight,
        italic && "italic",
        className,
      )}
    >
      {name}
    </span>
  );
}
