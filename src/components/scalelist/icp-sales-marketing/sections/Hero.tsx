import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";

export function Hero() {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-gradient-to-b from-brand-soft via-white to-white p-10 shadow-sm md:p-12">
        <div className="flex flex-col items-center text-center">
          <Pill>For Sales & Marketing Teams</Pill>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            <span className="block text-ink">Build pipeline</span>
            <span className="block text-brand">with data that actually converts.</span>
          </h1>
          <p className="mt-6 max-w-[620px] text-base text-muted-ink md:text-lg">
            Find verified emails and mobile numbers for outbound and ABM, keep your CRM accurate, and stop wasting rep time on dead leads and duplicates.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href={SIGNUP} variant="primary">Sign up for free</CTAButton>
            <CTAButton href={DEMO} variant="outline">Talk to sales</CTAButton>
          </div>

        </div>
      </div>
    </section>
  );
}
