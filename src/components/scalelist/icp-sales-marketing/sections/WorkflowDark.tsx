import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";

const SIGNUP = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO = "https://calendly.com/arnaud-scalelist/30min";

export function WorkflowDark() {
  return (
    <section className="bg-dark-bg py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Fits your <span className="text-brand">exact workflow</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Card
            title="CRM Integrations"
            body="One-click setup with HubSpot, Pipedrive, Salesforce, or export to CSV."
            mockup={<CRMIntegrationsVisual />}
          />
          <Card
            title="Simple Automation"
            body="Connect with Zapier, Make, n8n or use our API to build custom workflows."
            mockup={<AutomationVisual />}
          />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CTAButton href={SIGNUP} variant="primary">Try for free</CTAButton>
          <CTAButton href={DEMO} variant="outlineDark">Schedule a demo</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Card({ title, body, mockup }: { title: string; body: string; mockup: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-card p-8"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 14px)",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20 text-brand">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5L20 7"/></svg>
        </span>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-white/70">{body}</p>
      <div className="mt-6">{mockup}</div>
    </div>
  );
}

function PlatformIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/80" title={label}>
      {children}
    </div>
  );
}

function CRMIntegrationsVisual() {
  const emails = [
    "sara.connor@scalelist.com",
    "jane.doe@acmecorp.com",
    "mike.smith@acmecorp.com",
    "sarah.johnson@acmecorp.com",
    "ben.smith@innovation.ai",
  ];
  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-4">
        <div className="flex flex-col gap-3">
          <PlatformIcon label="Pipedrive">
            <span className="text-sm font-black text-white">P</span>
          </PlatformIcon>
          <PlatformIcon label="Zapier">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
          </PlatformIcon>
          <PlatformIcon label="HubSpot">
            <span className="text-sm font-black text-white">h</span>
          </PlatformIcon>
        </div>
        <div className="relative h-32 w-10">
          <svg viewBox="0 0 40 130" className="absolute inset-0 h-full w-full" fill="none" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3">
            <path d="M0 20 Q 30 20 30 65" />
            <path d="M0 65 H 30" />
            <path d="M0 110 Q 30 110 30 65" />
          </svg>
          <div className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-brand bg-brand/30 text-xs font-bold text-white">+</div>
        </div>
        <div className="space-y-1.5">
          {emails.map((e) => (
            <div key={e} className="flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.03] px-2 py-1.5 text-[11px] text-white/75">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-emerald-400" fill="currentColor">
                <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.3 3.3 6.7-6.7a1 1 0 011.4 0z" />
              </svg>
              <span className="truncate">{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="relative h-48 rounded-2xl border border-white/10 bg-black/30">
      {/* Concentric glow circles */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      {/* Center Scalelist mark */}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/60 shadow-[0_0_40px_rgba(80,110,255,0.5)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h6l-2 8h6l-10 8 2-8H4z" fill="currentColor" />
        </svg>
      </div>
      {/* Floating icons */}
      <div className="absolute left-6 top-10">
        <PlatformIcon label="Make">
          <span className="text-xs font-black italic text-purple-300">M</span>
        </PlatformIcon>
      </div>
      <div className="absolute right-6 top-8">
        <PlatformIcon label="n8n">
          <span className="text-[10px] font-black text-pink-300">n8n</span>
        </PlatformIcon>
      </div>
      <div className="absolute bottom-8 right-10">
        <PlatformIcon label="API">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>
        </PlatformIcon>
      </div>
      <div className="absolute bottom-10 left-12">
        <PlatformIcon label="Zapier">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-300" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
        </PlatformIcon>
      </div>
    </div>
  );
}
