import { Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const ITEMS = [
  "Pay per result, not per seat",
  "No annual contracts",
  "No minimum — 50 free credits to start",
  "No data, no charge — credits are only spent when verified data is found",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Pricing that works like your AI stack.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Your LLM charges per token. Your enrichment should work the same way — that's why
            teams pick Scalelist as the best MCP server for sales and marketing.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((t) => (
            <div
              key={t}
              className="sl-reveal flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </span>
              <p className="pt-1 text-base font-medium leading-relaxed text-foreground">{t}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}