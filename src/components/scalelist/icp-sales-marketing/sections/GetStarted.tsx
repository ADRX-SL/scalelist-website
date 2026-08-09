import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";
import { NumberedCircle } from "@/components/scalelist/icp-sales-marketing/site/NumberedCircle";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";

export function GetStarted() {
  const cards = [
    { n: 1, title: "Find contacts", body: "Use the Chrome extension to find emails from social profiles, upload a CSV for bulk enrichment, or describe your ICP and let Scalelist find matching companies." },
    { n: 2, title: "Sync to your tools", body: "Push contacts directly to HubSpot, Pipedrive, Salesforce, your sequencer of choice, or export to CSV." },
    { n: 3, title: "Data you can trust", body: "Every contact is verified with an under-5% bounce rate guarantee. Failed lookups don't burn your credits." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <Pill>Quick to Setup</Pill>
        <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          <span className="block">Get started driving more,</span>
          <span className="block">better pipeline.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.n} className="rounded-3xl border border-border/60 bg-white p-7 shadow-sm">
            <NumberedCircle n={c.n} />
            <h3 className="mt-5 text-xl font-bold tracking-tight">{c.title}</h3>
            <p className="mt-2 text-muted-ink">{c.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <CTAButton href={SIGNUP} variant="primary">Sign up for free</CTAButton>
        <CTAButton href={DEMO} variant="outline">Talk to sales</CTAButton>
      </div>
    </section>
  );
}
