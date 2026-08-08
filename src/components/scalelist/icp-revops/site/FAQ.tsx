import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What CRMs do you integrate with?",
    a: "Scalelist offers native integrations with HubSpot, Salesforce, and Pipedrive. You can also connect via API or Zapier for other tools, or export verified data to CSV.",
  },
  {
    q: "How does Scalelist enrich CRM records?",
    a: "Trigger Scalelist directly from your CRM to enrich a contact, a list, or a full segment. We find and verify the email and mobile number, then push it back into the record — without leaving HubSpot, Salesforce, or Pipedrive.",
  },
  {
    q: "Can I undo changes if something unexpected happens?",
    a: "Yes. Scalelist enrichments are tracked, and you can roll back any enrichment event from your dashboard. No silent overwrites — your team stays in control.",
  },
  {
    q: "What's the bounce rate guarantee?",
    a: "Under 5%. Every email we deliver is verified in real-time, and failed lookups don't burn your credits.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Scalelist is SOC 2 compliant and GDPR compliant, with webhook notifications for every enrichment event so your security team has full audit visibility.",
  },
  {
    q: "How long does implementation take?",
    a: "Self-serve setup takes minutes. Larger teams running annual contracts get a dedicated onboarding manager and are typically fully live within 2 weeks.",
  },
  {
    q: "What's included in the free plan?",
    a: "A sandbox of 10,000 credits to test Scalelist against your real CRM data, full access to the Chrome extension, native CRM integrations, and the email verifier. No card required.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-background">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-brand-tint/40"
            >
              <span className="text-sm font-semibold text-ink md:text-base">{item.q}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{item.a}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
