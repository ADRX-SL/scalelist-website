import { ArrowRight, Plug, MessageSquare, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./Eyebrow";
import { CopyField } from "./CopyField";

const SCALELIST_MCP_URL = "https://mcp.scalelist.com/mcp";

export function HowItWorks() {
  return (
    <section id="resources" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Up and running before your next call.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          <Step
            n={1}
            icon={Plug}
            title="Connect"
            desc="Add the Scalelist MCP server to Claude or any MCP-compatible client and sign in with your Scalelist account."
            extra={<CopyField value={SCALELIST_MCP_URL} className="mt-4" />}
          />
          <Step
            n={2}
            icon={MessageSquare}
            title="Ask"
            desc={`In plain language: "Find me all the VP Sales in the United States in the tech industry" "Enrich this CSV." "Prep my next call."`}
          />
          <Step
            n={3}
            icon={Rocket}
            title="Act"
            desc="Get verified emails, mobiles, lead lists, org charts, and sequences right in the chat; push to your CRM when ready."
          />
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="group h-12 w-full rounded-full px-8 text-base font-semibold shadow-[0_10px_28px_-12px_hsl(212_100%_50%/0.6)] sm:w-auto"
          >
            <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
              Get started for free
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full border-border bg-background px-8 text-base font-semibold text-foreground hover:bg-muted sm:w-auto"
          >
            <a href="https://form.typeform.com/to/lvQHcXGx">Talk to sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  icon: Icon,
  title,
  desc,
  extra,
}: {
  n: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  extra?: React.ReactNode;
}) {
  return (
    <li className="sl-reveal rounded-2xl border border-border bg-card p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {n}
        </span>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{desc}</p>
      {extra}
    </li>
  );
}