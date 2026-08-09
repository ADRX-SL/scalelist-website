import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";
import { FloatingContactCard } from "@/components/scalelist/icp-sales-marketing/site/mockups";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";

export function ContactsThatWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-soft via-white to-brand-soft/60 p-8 ring-1 ring-border/60 md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div className="relative h-[360px]">
            <FloatingContactCard name="Brooklyn Do" role="Web Designer" company="Studio Co."
              className="absolute right-2 top-0 rotate-[6deg]" />
            <FloatingContactCard name="Jenny Wilson" role="President of Sales" company="Vercel, Inc."
              className="absolute left-8 top-24 -rotate-[3deg]" />
            <FloatingContactCard name="James Smith" role="Production Manager" company="Netflix, Inc."
              className="absolute bottom-0 left-0 rotate-[4deg]" />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Find B2B contacts that <span className="text-brand">actually work.</span>
            </h2>
            <p className="mt-5 text-muted-ink">
              Most providers pull from stale databases, so your emails bounce and damage your sender reputation. Scalelist finds and verifies emails and phone numbers in real-time — with a guaranteed under-5% bounce rate.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href={SIGNUP} variant="primary">Sign up for free</CTAButton>
              <CTAButton href="https://calendly.com/arnaud-scalelist/30min" variant="outline">
                Talk to sales
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
