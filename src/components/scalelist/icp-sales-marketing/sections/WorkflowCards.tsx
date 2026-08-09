import { CRMPushMockup, EnrichedCardsMockup } from "@/components/scalelist/icp-sales-marketing/site/mockups";

export function WorkflowCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <Card mockup={<CRMPushMockup />} title="Skip the manual CRM data entry"
          body="Copying contact info into spreadsheets and uploading to your CRM steals time from selling. Push contacts directly to HubSpot, Pipedrive, Salesforce, or export to CSV in one click." />
        <Card mockup={<EnrichedCardsMockup />} title="Enterprise-grade data without the enterprise price"
          body="Most enterprise data tools cost $15K–$30K per year, but small teams still need reliable contacts. Scalelist gives you the same data quality with no per-seat pricing — built for teams that need to move fast." />
      </div>
    </section>
  );
}

function Card({ mockup, title, body }: { mockup: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-brand-soft to-white p-8 ring-1 ring-border/60">
      <div className="rounded-2xl">{mockup}</div>
      <h3 className="mt-8 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-ink">{body}</p>
    </div>
  );
}
