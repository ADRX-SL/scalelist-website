import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";

const cards = [
  {
    title: "Credits roll over up to 2× your monthly plan",
    body: "No 'use it or lose it' pressure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>
    ),
  },
  {
    title: "No per-seat pricing",
    body: "Your whole team uses one account.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Only pay for results",
    body: "Failed lookups don't burn your credits.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5L20 7"/></svg>
    ),
  },
  {
    title: "Built for your workflow",
    body: "Contact-by-contact or up to 5,000 companies at once.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M21 6h-6c-2 0-3 1-3 3v6c0 2 1 3 3 3h6"/></svg>
    ),
  },
];

export function GrowWithoutBreaking() {
  return (
    <section className="bg-brand-soft/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Pill>Built for Growth</Pill>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="block text-brand">Grow without</span>
            <span className="block text-ink">breaking the bank.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border/60 bg-white p-7 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">{c.icon}</span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-muted-ink">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CTAButton href={SIGNUP} variant="primary">Sign up for free</CTAButton>
          <CTAButton href={DEMO} variant="outline">Talk to sales</CTAButton>
        </div>
      </div>
    </section>
  );
}
