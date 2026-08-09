import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyField({ value, className = "" }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-border bg-background p-1.5 pl-4 ${className}`}
    >
      <code className="flex-1 truncate font-mono text-sm text-foreground">{value}</code>
      <Button
        type="button"
        onClick={onCopy}
        size="sm"
        className="h-9 rounded-full px-4"
        aria-label="Copy URL"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}