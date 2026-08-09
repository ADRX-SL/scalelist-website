import { Check, AlertTriangle, ShieldCheck, Network, Slack, Users, Sparkles, ArrowRight, Mail, Phone, Linkedin } from "lucide-react";
import { CaseStudyPill } from "./ui";

/* ----------------- LOGO STRIP ----------------- */
const LOGOS_ROW1 = [
  { name: "CLOUDERA" },
  { name: "hlth", caseStudy: true },
  { name: "ElevenLabs" },
  { name: "lemlist" },
  { name: "BD", caseStudy: true },
  { name: "Deloitte." },
  { name: "MongoDB." },
  { name: "CYNGN" },
];
const LOGOS_ROW2 = [
  { name: "NetSuite" },
  { name: "Tangentia" },
  { name: "barbri" },
  { name: "fluentbe.com" },
  { name: "Qlerify" },
  { name: "Growth Labz", caseStudy: true },
  { name: "Lumin.ai" },
  { name: "WeatherShield" },
];

export function LogoStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-center text-sm text-ink-soft">
        Trusted by RevOps teams at leading B2B companies
      </p>
      <div className="mt-8 space-y-6">
        {[LOGOS_ROW1, LOGOS_ROW2].map((row, idx) => (
          <div key={idx} className="grid grid-cols-4 items-start gap-x-6 gap-y-6 sm:grid-cols-8">
            {row.map((l) => (
              <div key={l.name} className="flex flex-col items-center justify-start opacity-70 transition hover:opacity-100">
                <span className="text-sm font-semibold tracking-tight text-ink-soft">{l.name}</span>
                {l.caseStudy && <CaseStudyPill />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------- CRM RECORD MOCKUPS ----------------- */
export function CrmEnrichMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-brand">Updates Preview</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand/30 to-brand/10" />
        <div>
          <p className="text-sm font-semibold text-ink">Sarah Chen</p>
          <p className="text-xs text-ink-soft">Production Manager</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-xs">
        <Row icon={<Phone className="h-3 w-3" />} text="(415) 555-0188" />
        <Row icon={<Mail className="h-3 w-3" />} text="sarah.chen@stripe.com" verified strike="sarah.c@oldmail.com" />
        <Row icon={<Linkedin className="h-3 w-3" />} text="linkedin.com/in/schen" verified />
      </div>
      <div className="mt-4 flex justify-end gap-2 text-[11px]">
        <span className="rounded-full border border-border px-2.5 py-1 text-ink-soft">Undo</span>
        <span className="rounded-full bg-brand-tint px-2.5 py-1 font-medium text-brand">Accept changes</span>
      </div>
    </div>
  );
}

export function CrmVerifyMockup() {
  return <div className="h-32 rounded-2xl bg-brand-tint/60" />;
}

function Row({ icon, text, verified, strike }: { icon: React.ReactNode; text: string; verified?: boolean; strike?: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
      <div className="flex items-center gap-2 text-ink">
        <span className="text-ink-soft">{icon}</span>
        <span className="flex flex-wrap items-center gap-2">
          {strike && <span className="text-ink-soft line-through">{strike}</span>}
          <span>{text}</span>
        </span>
      </div>
      {verified && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success/20 text-success">
          <Check className="h-2.5 w-2.5" />
        </span>
      )}
    </div>
  );
}

/* ----------------- ROI MOCKUP ----------------- */
export function RoiMockup() {
  return (
    <div className="flex w-full items-center justify-center gap-6 px-2">
      <Ring label="Bounces" value={28} color="oklch(0.65 0.22 25)" />
      <ArrowRight className="h-7 w-7 shrink-0 text-brand" />
      <Ring label="Delivered" value={97} color="oklch(0.65 0.16 150)" />
    </div>
  );
}

function Ring({ label, value, color }: { label: string; value: number; color: string }) {
  const dash = (value / 100) * 100;
  return (
    <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
      <svg viewBox="0 0 36 36" className="mx-auto h-32 w-32">
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="oklch(0.94 0.01 255)" strokeWidth="3.5" />
        <circle
          cx="18" cy="18" r="15.9" fill="none" stroke={color} strokeWidth="3.5"
          strokeDasharray={`${dash} ${100 - dash}`} strokeDashoffset="25" strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
        <text x="18" y="20.5" textAnchor="middle" fontSize="7" fontWeight="600" fill="oklch(0.16 0.02 260)">{value}%</text>
      </svg>
      <p className="mt-3 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}

/* ----------------- DEAD LEADS MOCKUP ----------------- */
export function DeadLeadsMockup() {
  return <div className="h-32 rounded-2xl bg-brand-tint/60" />;
}

function ContactCard({ name, title, email, phone, old }: { name: string; title: string; email: string; phone?: string; old?: boolean }) {
  return (
    <div className={`flex-1 rounded-xl border bg-white p-3 text-xs shadow-card ${old ? "border-border opacity-70" : "border-brand/30"}`}>
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand/30 to-brand/10" />
        <div>
          <p className="text-xs font-semibold text-ink">{name}</p>
          <p className="text-[10px] text-ink-soft">{title}</p>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between rounded bg-muted/60 px-2 py-1">
          <span className={old ? "line-through" : ""}>{email}</span>
          {!old && <Check className="h-3 w-3 text-success" />}
        </div>
        {phone && (
          <div className="flex items-center justify-between rounded bg-muted/60 px-2 py-1">
            <span>{phone}</span>
            <Check className="h-3 w-3 text-success" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------- ALL-IN-ONE PIPELINE MOCKUP ----------------- */
const SAMPLE_CONTACTS = [
  { email: "cdrayton@northwindlabs.com", phone: "+1 415 552 7890" },
  { email: "mvasquez@brightpath.io", phone: "+1 718 549 3621" },
  { email: "dokafor@helixworks.com", phone: "+1 312 587 4129" },
  { email: "pshankar@meridianstack.ai", phone: "+1 646 781 5034" },
  { email: "tberglund@orbitra.co", phone: "+1 408 552 8917" },
  { email: "rholloway@clearpath.ai", phone: "+1 213 549 6182" },
  { email: "mellison@dataforge.ai", phone: "+1 617 583 4072" },
  { email: "spark@nimbusflow.com", phone: "+1 510 587 3402" },
];

const PIPELINE_STEPS = ["Verify contacts", "Enrich contacts"];

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-brand shadow-card";

export function PipelineMockup() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-center gap-2">
        {PIPELINE_STEPS.map((label) => (
          <span key={label} className={pillClass}>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {label}
          </span>
        ))}
      </div>
      <div className="flex justify-center pt-1 text-brand">
        <ArrowRight className="h-5 w-5 rotate-90" />
      </div>
      <div className="rounded-2xl border border-border bg-white p-4 shadow-card">
        <ul className="space-y-1.5 text-[11px]">
          {SAMPLE_CONTACTS.map((c) => (
            <li key={c.email} className="flex items-center justify-between gap-3 rounded bg-muted/50 px-2.5 py-1.5">
              <span className="flex min-w-0 items-center gap-2 text-ink">
                <Check className="h-3 w-3 shrink-0 text-success" />
                <span className="truncate">{c.email}</span>
                <span className="hidden text-ink-soft sm:inline">·</span>
                <span className="hidden whitespace-nowrap text-ink-soft sm:inline">{c.phone}</span>
              </span>
              <span className="shrink-0 text-[10px] font-medium text-success">Valid</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
            <Check className="h-3 w-3" /> Bounce rate: 0.8%
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
            <Check className="h-3 w-3" /> Domain reputation safe
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------- DARK INTEGRATIONS MOCKUPS ----------------- */
export function CrmIntegrationsDarkMockup() {
  const contacts = [
    "sara.connor@launchdarkly.com",
    "jane.doe@acmecorp.com",
    "mike.smith@acmecorp.com",
    "sarah.johnson@acmecorp.com",
    "ben.smith@innovation.ai",
  ];
  return (
    <div className="grid grid-cols-[auto_auto_1fr] items-center gap-3">
      <div className="space-y-2">
        {["P", "h", "S"].map((l) => (
          <div key={l} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white">
            {l}
          </div>
        ))}
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_24px_oklch(0.55_0.22_262_/_0.5)]">
        +
      </div>
      <ul className="space-y-1.5 text-[10px]">
        {contacts.map((c) => (
          <li key={c} className="flex items-center gap-2 rounded bg-white/5 px-2 py-1.5 text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComplianceMockup() {
  return (
    <div className="relative flex h-40 items-center justify-center">
      <div className="absolute h-32 w-32 rounded-full bg-brand/20 blur-2xl" />
      <ShieldCheck className="relative h-20 w-20 text-brand" strokeWidth={1.5} />
      <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/80">SOC 2</span>
      <span className="absolute right-2 top-4 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/80">GDPR</span>
      <span className="absolute bottom-2 left-6 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/80">EU</span>
    </div>
  );
}

/* ----------------- ICON HELPERS for built-for-revops ----------------- */
export const RevOpsIcons = {
  Sandbox: () => <Sparkles className="h-5 w-5 text-brand" />,
  Onboarding: () => <Users className="h-5 w-5 text-brand" />,
  Slack: () => <Slack className="h-5 w-5 text-brand" />,
  Network: () => <Network className="h-5 w-5 text-brand" />,
  Alert: () => <AlertTriangle className="h-5 w-5 text-amber-500" />,
  Check: () => <Check className="h-5 w-5 text-success" />,
};
