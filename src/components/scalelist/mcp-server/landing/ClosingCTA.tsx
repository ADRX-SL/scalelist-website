import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-muted/60 px-6 py-20 text-center md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 0%, hsl(212 100% 50% / 0.18), transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Unlock B2B emails &amp; mobile numbers for free
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="group h-14 w-full max-w-sm rounded-full px-8 text-base font-semibold shadow-[0_14px_36px_-10px_hsl(212_100%_50%/0.7)] sm:w-auto"
            >
              <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">
                Get started for free
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 w-full max-w-sm rounded-full border-border bg-background px-8 text-base font-semibold sm:w-auto"
            >
              <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com">
                Talk to sales
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}