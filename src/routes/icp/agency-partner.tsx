import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/scalelist/icp-agency/site/SiteHeader";
import { SiteFooter } from "@/components/scalelist/icp-agency/site/SiteFooter";
import { PillBadge } from "@/components/scalelist/icp-agency/brand/PillBadge";
import { CTAButton } from "@/components/scalelist/icp-agency/brand/CTAButton";
import { Check, BadgeCheck, Sparkles, Crown, DollarSign, Mail, CheckCircle2, AlertTriangle } from "lucide-react";

const SIGNUP_URL = "https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard";
const DEMO_URL = "https://calendly.com/arnaud-scalelist/30min";

import accuraleadLogo from "@/assets/icp-agency/agency-logos/accuralead.png";
import leadlinkzLogo from "@/assets/icp-agency/agency-logos/leadlinkz.png";
import mysalescoachLogo from "@/assets/icp-agency/agency-logos/mysalescoach.png";
import konsygLogo from "@/assets/icp-agency/agency-logos/konsyg.png";
import nexaLogo from "@/assets/icp-agency/agency-logos/nexa.png";
import accelerasiaLogo from "@/assets/icp-agency/agency-logos/accelerasia.png";
import growthlabzLogo from "@/assets/icp-agency/agency-logos/growthlabz.png";
import growthlabLogo from "@/assets/icp-agency/agency-logos/growthlab.png";
import smresolveLogo from "@/assets/icp-agency/agency-logos/smresolve.png";

export const Route = createFileRoute("/icp/agency-partner")({
  head: () => ({
    meta: [
      { title: "Scalelist for Outbound Agencies — Higher match rates, every client" },
      {
        name: "description",
        content:
          "Scalelist's multi-provider waterfall delivers higher email and mobile match rates for outbound agencies — across NA, EMEA, and APAC, at any volume.",
      },
      { property: "og:title", content: "Scalelist for Outbound Agencies" },
      {
        property: "og:description",
        content: "Higher match rates. Stronger results for every client.",
      },
    ],
  }),
  component: AgencyPartnersPage,
});

export function AgencyPartnersPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <LogoStrip />
        <Tiers />
        <Pricing />
        <HowItWorks />
        <ComparisonDark />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="bg-surface px-6 pt-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-brand-soft/40 via-surface to-surface px-6 py-10 text-center md:px-12 md:py-14">
          <div className="flex justify-center">
            <PillBadge tone="blue" icon={<Sparkles className="h-3.5 w-3.5" />}>
              For Outbound Agencies
            </PillBadge>
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Higher coverage.
            <br />
            <span className="bg-gradient-to-r from-[#2474EF] to-[#1A5BC8] bg-clip-text text-transparent">
              Stronger results for every client.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">
            Scalelist powers every lookup with the best email and mobile data sources, so your agency finds more verified contacts, wins better coverage worldwide, and scales without limits.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={SIGNUP_URL}>
              <CTAButton variant="primary" size="lg" withArrow>
                Sign up for free
              </CTAButton>
            </a>
            <a href={DEMO_URL}>
              <CTAButton variant="outline" size="lg" withArrow>
                Talk to sales
              </CTAButton>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Email + phone enrichment", "Agency pricing available"].map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-soft">
                  <Check className="h-3 w-3 text-brand" />
                </span>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- LOGO STRIP ----------------------------- */
function LogoStrip() {
  const logos: { name: string; src: string; caseStudy?: boolean }[] = [
    { name: "AccuraLead", src: accuraleadLogo },
    { name: "Leadlinkz", src: leadlinkzLogo },
    { name: "My Sales Coach", src: mysalescoachLogo },
    { name: "Konsyg", src: konsygLogo },
    { name: "Growth Lab", src: growthlabLogo, caseStudy: true },
    { name: "Nexa LeadFlow AI", src: nexaLogo },
    { name: "SM Resolve", src: smresolveLogo },
    { name: "Accelerasia", src: accelerasiaLogo },
    { name: "Growth Labz", src: growthlabzLogo },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 pb-6 pt-2 text-center">
        <p className="text-sm text-ink-muted">
          Trusted by leading outbound agencies building with Scalelist
        </p>
        <div className="mt-12 flex flex-row flex-wrap items-start justify-center gap-x-8 gap-y-6">
          {logos.map((l) => (
            <div key={l.name} className="flex flex-col items-center gap-2">
              <img
                src={l.src}
                alt={l.name}
                className="h-10 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
              {l.caseStudy ? (
                <span className="inline-flex items-center rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-medium text-brand">
                  Case Study
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TIERS --------------------------------- */
type Tier = {
  num: string;
  name: string;
  icon?: React.ReactNode;
  range: string;
  benefits: string[];
  cta: string;
  ctaVariant: "primary" | "black";
  highlighted?: boolean;
};

function Tiers() {
  const tiers: Tier[] = [
    {
      num: "Tier 04",
      name: "Listed",
      range: "From ~25K credits/mo",
      benefits: ["Agency directory listing", "Volume-based pricing", "Onboarding session", "Sandbox credits on sign-up"],
      cta: "Get listed",
      ctaVariant: "primary",
    },
    {
      num: "Tier 03",
      name: "Verified",
      icon: <BadgeCheck className="h-5 w-5 text-brand" />,
      range: "25K–50K credits/mo",
      benefits: ["Verified badge on directory profile", "Higher directory ranking", "Scalelist Certified status", "Volume pricing discounts"],
      cta: "Get verified",
      ctaVariant: "primary",
    },
    {
      num: "Tier 02",
      name: "Certified",
      icon: <Sparkles className="h-5 w-5 text-brand" />,
      range: "50K – 150K credits/mo",
      benefits: ["Featured in directory", "Co-marketing partnership", "Early access to new providers", "Co-authored case studies"],
      cta: "Get certified",
      ctaVariant: "primary",
      highlighted: true,
    },
    {
      num: "Tier 01",
      name: "Elite",
      icon: <Crown className="h-5 w-5 text-amber-500" />,
      range: "150K+ credits/mo",
      benefits: ["Pinned top of directory", "Dedicated partner manager", "Co-branded landing pages", "Agency of the Year eligible"],
      cta: "Talk to us",
      ctaVariant: "black",
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Run more enrichment,
            <br />
            <span className="bg-gradient-to-r from-[#2474EF] to-[#1A5BC8] bg-clip-text text-transparent">
              unlock more benefits.
            </span>
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-gradient-to-b from-surface-muted to-surface p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border bg-surface p-6 shadow-[var(--shadow-card)] transition-all ${
                  t.highlighted ? "border-brand/40 bg-brand-soft/30 ring-1 ring-brand/20" : "border-border"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{t.num}</div>
                <div className="mt-2 flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-ink">{t.name}</h3>
                  {t.icon}
                </div>
                <div className="mt-1 text-sm text-ink-muted">{t.range}</div>
                <div className="my-5 h-px bg-border" />
                <ul className="flex-1 space-y-3">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                        <Check className="h-3 w-3 text-brand" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                    t.ctaVariant === "black"
                      ? "bg-ink text-surface hover:bg-ink/90"
                      : "bg-brand text-brand-foreground hover:bg-brand/90"
                  }`}
                >
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PRICING ------------------------------- */
function Pricing() {
  const cards = [
    {
      label: "Monthly",
      payments: "12 payments",
      body: "Maximum flexibility — built for agencies testing the platform, onboarding new clients, or running shorter cycles.",
      highlighted: false,
    },
    {
      label: "Quarterly",
      payments: "4 payments",
      body: "Stronger rates for agencies with steady volume — without locking in for a full year.",
      highlighted: true,
    },
    {
      label: "Annual",
      payments: "1 payment",
      body: "Lowest rates for agencies running enrichment at scale — built for long-term efficiency and margin.",
      highlighted: false,
    },
  ];
  return (
    <section className="bg-surface-muted">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <PillBadge tone="blue" icon={<DollarSign className="h-3.5 w-3.5" />}>
            Pricing
          </PillBadge>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-[#2474EF] to-[#1A5BC8] bg-clip-text text-transparent">
              Flexible pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Pick the billing cycle that matches your agency — with better rates as you scale.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.label}
                className={`rounded-2xl border p-7 ${
                  c.highlighted
                    ? "border-brand/40 bg-gradient-to-b from-brand-soft/40 to-brand-soft/30 ring-1 ring-brand/20"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    c.highlighted ? "bg-brand text-brand-foreground" : "bg-surface-muted text-ink"
                  }`}>
                    {c.label}
                  </span>
                  <span className="text-sm text-ink-muted">{c.payments}</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- HOW IT WORKS ----------------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Sign up for free",
      copy: "Create your Scalelist account and get sandbox credits to run your first enrichment. No card required.",
    },
    {
      n: "2",
      title: "Enrich a real list",
      copy: "Upload a contact list and watch Scalelist's waterfall pull verified emails and mobile numbers from across our provider network.",
    },
    {
      n: "3",
      title: "Get agency pricing",
      copy: "Ready to scale? Switch to agency credits and unlock tier benefits automatically.",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Try it before you scale.
            <br />
            <span className="bg-gradient-to-r from-[#2474EF] to-[#1A5BC8] bg-clip-text text-transparent">
              No contract required.
            </span>
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-gradient-to-b from-surface-muted to-surface p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-base font-bold text-brand">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- COMPARISON (DARK) -------------------------- */
type Row = { name: string; email: number | null; phone: number | null };

const REGION_DATA: Record<string, Row[]> = {
  "North America": [
    { name: "Scalelist", email: 92, phone: 87 },
    { name: "Apollo", email: 77, phone: 50 },
    { name: "Lead Magic", email: 46, phone: 64 },
    { name: "Prospeo", email: 42, phone: 75 },
    { name: "Findymail", email: 87, phone: 32 },
    { name: "Hunter", email: 57, phone: null },
    { name: "PDL", email: 54, phone: 48 },
    { name: "Icypeas", email: 76, phone: null },
  ],
  EMEA: [
    { name: "Scalelist", email: 89, phone: 72 },
    { name: "Apollo", email: 70, phone: 35 },
    { name: "Lead Magic", email: 50, phone: 8 },
    { name: "Prospeo", email: 55, phone: 39 },
    { name: "Findymail", email: 85, phone: null },
    { name: "Hunter", email: 60, phone: null },
    { name: "PDL", email: 50, phone: 17 },
    { name: "Icypeas", email: 65, phone: null },
  ],
  APAC: [
    { name: "Scalelist", email: 76, phone: 72 },
    { name: "Apollo", email: 55, phone: 8 },
    { name: "Lead Magic", email: 35, phone: 16 },
    { name: "Prospeo", email: 38, phone: 44 },
    { name: "Findymail", email: 30, phone: null },
    { name: "Hunter", email: 40, phone: null },
    { name: "PDL", email: 45, phone: 13 },
    { name: "Icypeas", email: 50, phone: null },
  ],
};

const BAR_COLORS: Record<string, string> = {
  Scalelist: "bg-brand",
  Apollo: "bg-amber-300",
  "Lead Magic": "bg-violet-400",
  Prospeo: "bg-rose-400",
  Findymail: "bg-emerald-400",
  Hunter: "bg-orange-400",
  PDL: "bg-fuchsia-400",
  Icypeas: "bg-cyan-400",
};

function Bar({ pct, color }: { pct: number | null; color: string }) {
  if (pct === null) return <span className="text-xs text-dark-fg-muted/60">N/A</span>;
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10 sm:w-44 md:w-56">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 text-sm font-semibold text-dark-fg">{pct}%</span>
    </div>
  );
}

function ComparisonDark() {
  const [region, setRegion] = useState<keyof typeof REGION_DATA>("North America");
  const rows = REGION_DATA[region];

  return (
    <section className="bg-[#0A0E1A] text-dark-fg">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-fg-muted">
            8 Providers Tested · 3 Regions · 2 Data Types
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            The most accurate data, in every region
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
          {[
            { v: "85%", l: "Avg email coverage — all 3 regions" },
            { v: "77%", l: "Avg phone coverage — all 3 regions" },
            { v: "9×", l: "More phones than Apollo in APAC" },
            { v: "3/3", l: "Regions where Scalelist is #1 on phones" },
          ].map((s, i) => (
            <div key={i} className="px-6 text-center">
              <div className="text-5xl font-bold text-dark-fg md:text-6xl">{s.v}</div>
              <div className="mt-2 text-sm text-dark-fg-muted">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Head-to-Head Comparison
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl font-extrabold uppercase tracking-tight">Pick a region</h3>
              <a
                href="https://scalelist.com/scalelist-the-field/"
                className="text-sm font-medium text-brand hover:underline"
              >
                See full data →
              </a>
            </div>

            <div className="mt-5 -mx-1 flex gap-2 overflow-x-auto pb-1">
              {(Object.keys(REGION_DATA) as Array<keyof typeof REGION_DATA>).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    region === r
                      ? "bg-brand text-brand-foreground"
                      : "bg-white/5 text-dark-fg-muted hover:text-dark-fg"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="mt-8 hidden grid-cols-[1fr_auto_auto] items-center gap-6 px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-fg-muted md:grid">
              <span>Provider</span>
              <span className="w-44 md:w-56">Email coverage</span>
              <span className="w-44 md:w-56">Phone coverage</span>
            </div>
            <div className="space-y-1">
              {rows.map((r) => {
                const highlighted = r.name === "Scalelist";
                const color = BAR_COLORS[r.name] ?? "bg-white/40";
                return (
                  <div
                    key={r.name}
                    className={`grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-xl px-3 py-3 sm:gap-6 ${
                      highlighted ? "bg-brand/15 ring-1 ring-brand/40" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-dark-fg ${highlighted ? "bg-brand/30" : "bg-white/10"}`}>
                        {r.name.charAt(0)}
                      </div>
                      <span className={`font-semibold ${highlighted ? "text-brand" : "text-dark-fg"}`}>
                        {r.name}
                      </span>
                    </div>
                    <Bar pct={r.email} color={color} />
                    <Bar pct={r.phone} color={color} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-bold">Sales Teams Winning with Scalelist's Data</h3>
            {[
              {
                quote:
                  "I love Scalelist — cannot recommend it enough. It does everything you need it to do really well. Easy to use, easy to navigate, and Arnaud and the team are always there to help. Built by people who actually care about their product.",
                name: "Chris Hackett",
                role: "CEO & Founder @ Firm Growth",
              },
              {
                quote:
                  "We use Scalelist every day. Genuinely a great product that helps us find our prospects' emails and phone numbers.",
                name: "Baptiste Graffin",
                role: "VP of Sales APAC @ Happydemics",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <p className="text-sm leading-relaxed text-dark-fg-muted">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#2474EF] to-[#1A5BC8]" />
                  <div>
                    <div className="text-sm font-semibold text-dark-fg">{t.name}</div>
                    <div className="text-xs text-dark-fg-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={SIGNUP_URL}>
            <CTAButton variant="primary" size="lg" withArrow>Sign up for free</CTAButton>
          </a>
          <a href={DEMO_URL}>
            <CTAButton variant="outline-light" size="lg" withArrow>Get a demo</CTAButton>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FINAL CTA ----------------------------- */
function FinalCTA() {
  return (
    <section className="bg-surface py-14">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-muted via-brand-soft/30 to-brand-soft/30 p-8 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
                If we can't find their
                <br />
                contact data,{" "}
                <span className="bg-gradient-to-r from-[#2474EF] to-[#1A5BC8] bg-clip-text text-transparent">
                  no one will.
                </span>
              </h2>
              <ul className="mt-7 space-y-3">
                {["10,000 sandbox credits free", "Access to all agency events", "Dedicated Slack support"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-base text-ink">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft">
                      <Check className="h-3.5 w-3.5 text-brand" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={SIGNUP_URL} className="mt-8 inline-block">
                <button className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-surface transition-colors hover:bg-ink/90">
                  Join the Program →
                </button>
              </a>
            </div>
            <div className="relative">
              <div className="ml-0 w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] md:-mr-20 md:w-[120%]">
                <div className="flex h-9 items-center gap-1.5 border-b border-border bg-surface-muted px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-2 bg-surface-muted/50 p-4">
                  {[
                    { first: "Jordan", last: "Mitchell", email: "jordan.mitchell@synthetica.ai", status: "valid", phone: "+14157829364" },
                    { first: "Avery", last: "Caldwell", email: "acaldwell@nexflow.com", status: "valid", phone: "+17183624859" },
                    { first: "Marcus", last: "Ellison", email: "marcus@dataforge.ai", status: "valid", phone: "+13129475813" },
                    { first: "Tessa", last: "Hawkins", email: "tessa.hawkins@orbitra.com", status: "risky", phone: "+16468253971" },
                    { first: "Blake", last: "Navarro", email: "bnavarro@clearpath.ai", status: "valid", phone: "+12135987246" },
                    { first: "Sierra", last: "Pemberton", email: "sierra@autostack.com", status: "valid", phone: "+14699317528" },
                    { first: "Cole", last: "Whitfield", email: "cole.whitfield@pulsehq.ai", status: "valid", phone: "+17328641093" },
                  ].map((c) => (
                    <div key={c.email} className="grid grid-cols-[0.7fr_0.8fr_1.6fr_0.9fr_1fr] items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink">
                      <span>{c.first}</span>
                      <span>{c.last}</span>
                      <span className="flex items-center gap-2 truncate">
                        <Mail className="h-4 w-4 shrink-0 text-ink-muted/60" strokeWidth={1.5} />
                        <span className="truncate">{c.email}</span>
                      </span>
                      {c.status === "valid" ? (
                        <span className="flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">Valid</span>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Risky</span>
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                        </span>
                      )}
                      <span className="text-right tabular-nums">{c.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
