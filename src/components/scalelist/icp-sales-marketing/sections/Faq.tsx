import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const items = [
  { q: "How fast can I start finding contacts?", a: "You can sign up and run your first enrichment within minutes. The free plan gives you sandbox credits to test — no credit card required." },
  { q: "Do I need to integrate with my CRM or can I just export contacts?", a: "Both. Push contacts directly to HubSpot, Pipedrive, Salesforce, or your sequencer with one click — or export to CSV and Excel if you prefer to work offline." },
  { q: "What happens if an email bounces?", a: "You don't pay for it. Failed lookups and invalid emails don't burn your credits. We guarantee an under-5% bounce rate." },
  { q: "Can my whole team use one account?", a: "Yes. We don't charge per seat. Your entire sales and marketing team can use Scalelist on one shared account." },
  { q: "How does Scalelist compare to Apollo or ZoomInfo?", a: "We find and verify emails in one step, so you don't need a separate verification tool. Most providers pull from old databases and deliver 15–25% bounce rates. We verify in real-time and guarantee under 5%." },
  { q: "What if I already have a list from Apollo or Sales Navigator?", a: "Upload your existing CSV and Scalelist will enrich it with verified emails and mobile numbers — typically recovering 80%+ of contacts your current tool missed." },
  { q: "What's included in the free plan?", a: "A sandbox of 10,000 credits to run your first enrichment, full access to the Chrome extension, CRM integrations, and the email verifier. No card required." },
  { q: "What if I don't use all my credits in a month?", a: "Credits roll over up to 2× your monthly plan. No 'use it or lose it' pressure." },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          <Pill>FAQs</Pill>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Common questions from sales and marketing teams
          </h2>
          <p className="mt-4 text-muted-ink">Here are the most common ones we get.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/60 bg-white px-5 mb-3 data-[state=open]:bg-brand-soft/30">
              <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-ink">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
