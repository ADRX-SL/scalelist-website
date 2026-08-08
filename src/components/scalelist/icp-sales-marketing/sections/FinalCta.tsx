import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";


export function FinalCta() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-soft via-white to-brand-soft p-12 text-center ring-1 ring-border/60 md:p-16">
          <div className="flex flex-col items-center">
            <Pill>Start free trial</Pill>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="block text-ink">Start reaching</span>
              <span className="block text-brand">decision-makers today.</span>
            </h2>
            <p className="mt-5 max-w-[600px] text-muted-ink">
              Get verified contacts at SMB pricing and keep your CRM clean automatically — so your team can focus on revenue, not data quality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CTAButton href={SIGNUP} variant="primary">Sign up for free</CTAButton>
              <CTAButton href={DEMO} variant="outline">Talk to sales</CTAButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
