/** Inline SVG/HTML mockups used as visual placeholders inside feature cards. */
import { cn } from "@/lib/utils";
import hubspotLogo from "@/assets/icp-sales-marketing/hubspot.png";
import pipedriveLogo from "@/assets/icp-sales-marketing/pipedrive.png";
import salesforceLogo from "@/assets/icp-sales-marketing/salesforce.png";

const SAMPLE_CONTACTS = [
  { name: "Caleb Drayton", email: "calebdrayton@slack.com", phone: "+1 415 556 7234" },
  { name: "Sam Cruz", email: "samcruz@salesforce.com", phone: "+1 718 543 9821" },
  { name: "Elias Granger", email: "eliasgranger@monday.com", phone: "+1 312 574 8396" },
  { name: "Daniel Ferrera", email: "danielferrera@apple.io", phone: "+1 646 782 3915" },
];

function ContactRowFull({ name, email, phone }: { name: string; email: string; phone: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-white px-3 py-2 text-[11px]">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-brand/30 to-brand/60" />
        <span className="truncate font-medium text-ink">{name}</span>
      </div>
      <span className="hidden truncate text-muted-ink sm:inline sm:w-[38%]">{email}</span>
      <span className="hidden whitespace-nowrap text-muted-ink md:inline">{phone}</span>
      <CheckIcon className="h-3.5 w-3.5 shrink-0" />
    </div>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-4 w-4 text-emerald-500", className)} fill="currentColor">
      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.3 3.3 6.7-6.7a1 1 0 011.4 0z" />
    </svg>
  );
}

export function ContactRow({
  name,
  email,
  phone,
}: {
  name: string;
  email?: string;
  phone?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-white px-3 py-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand/30 to-brand/60" />
        <span className="font-medium text-ink">{name}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-ink">
        {email && <span className="hidden sm:inline truncate max-w-[100px]">{email}</span>}
        {phone && <span className="hidden md:inline">{phone}</span>}
        <CheckIcon />
      </div>
    </div>
  );
}

export function UploadMockup() {
  return (
    <div className="rounded-xl border border-border/60 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-ink">
        <svg className="h-4 w-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
        </svg>
        Upload in Bulk · contacts.csv
      </div>
      <div className="space-y-1.5">
        {SAMPLE_CONTACTS.map((c) => <ContactRowFull key={c.name} {...c} />)}
      </div>
    </div>
  );
}

export function ICPSearchMockup() {
  return (
    <div className="rounded-xl border border-border/60 bg-white p-4 shadow-sm">
      <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-ink">
        Describe your ICP
      </label>
      <div className="mt-2 rounded-lg border border-border bg-surface/60 p-3 text-sm text-ink">
        B2B SaaS companies in the US with more than 20 employees.
      </div>
      <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground">
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
        Find Contacts
      </button>
    </div>
  );
}

export function CRMPushMockup() {
  const logos = [
    { src: hubspotLogo, alt: "HubSpot" },
    { src: pipedriveLogo, alt: "Pipedrive" },
    { src: salesforceLogo, alt: "Salesforce" },
  ];
  return (
    <div className="rounded-xl border border-border/60 bg-white p-4 shadow-sm">
      <div className="space-y-1.5">
        {SAMPLE_CONTACTS.map((c) => <ContactRowFull key={c.name} {...c} />)}
      </div>
      <div className="my-3 flex justify-center">
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
      <div className="mx-auto flex max-w-[260px] items-center justify-center gap-3">
        {logos.map((l) => (
          <div key={l.alt} className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-white shadow-sm">
            <img src={l.src} alt={l.alt} className="h-7 w-7 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EnrichedCardsMockup() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand/30 to-brand/70" />
          <div>
            <p className="text-lg font-bold tracking-tight text-ink">Sarah Chen</p>
            <p className="text-sm text-muted-ink">VP Sales</p>
          </div>
        </div>
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between border-t border-border/40 pt-3"><span className="text-muted-ink">Email</span><CheckIcon className="h-4 w-4" /></div>
          <div className="flex items-center justify-between border-t border-border/40 pt-3"><span className="text-muted-ink">Phone</span><CheckIcon className="h-4 w-4" /></div>
          <div className="flex items-center justify-between border-t border-border/40 pt-3"><span className="text-muted-ink">Company</span><CheckIcon className="h-4 w-4" /></div>
        </div>
      </div>
    </div>
  );
}

export function FloatingContactCard({
  name,
  role,
  company,
  className,
}: {
  name: string;
  role: string;
  company: string;
  className?: string;
}) {
  return (
    <div className={cn("w-64 rounded-2xl border border-border/60 bg-white p-4 shadow-xl", className)}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand/30 to-brand/70" />
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-xs text-muted-ink">{role}</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-xs">
        <div className="flex items-center justify-between"><span className="text-muted-ink">Phone</span><CheckIcon className="h-3.5 w-3.5" /></div>
        <div className="flex items-center justify-between"><span className="text-muted-ink">Email</span><CheckIcon className="h-3.5 w-3.5" /></div>
        <div className="flex items-center justify-between"><span className="text-muted-ink">Company</span><span className="font-semibold text-ink">{company}</span></div>
      </div>
    </div>
  );
}

export function JobChangeMockup() {
  return (
    <div className="rounded-2xl border border-white/10 bg-dark-card p-5 shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">Monitoring · Job change detected</p>
      <div className="mt-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand/40 to-brand/80" />
        <div>
          <p className="text-base font-bold text-white">Sara Connor</p>
          <p className="text-xs text-white/60">Head of Marketing</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="text-white/50">Before</p>
          <p className="mt-1 font-semibold text-white/80 line-through">LaunchDarkly</p>
        </div>
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        <div className="rounded-lg border border-brand/40 bg-brand/15 p-3">
          <p className="text-brand">After</p>
          <p className="mt-1 font-semibold text-white">Vercel, Inc.</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
        <CheckIcon className="h-3.5 w-3.5" />
        Auto-synced to your CRM
      </div>
    </div>
  );
}
