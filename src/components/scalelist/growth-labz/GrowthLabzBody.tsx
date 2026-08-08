const Logo = () => (
  <div className="relative h-14 w-14 rounded-2xl overflow-hidden flex items-center justify-center font-display font-bold text-[18px] text-primary-dark"
    style={{
      background: "linear-gradient(135deg, hsl(var(--accent-brand)) 0%, hsl(12 100% 78%) 100%)",
    }}>
    GL
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow mb-4">{children}</div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-[34px] leading-[1.15] text-primary-dark mb-8">{children}</h2>
);

const GrowthLabzBody = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden bg-primary-dark text-primary-dark-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--accent-brand) / 0.35), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[860px] px-6 pt-24 pb-20">
          <div className="eyebrow">Customer story</div>
          <div className="mt-10 flex items-center gap-5">
            <Logo />
            <span className="font-display text-[15px] tracking-tight text-primary-dark-foreground/80">
              Growth Labz
            </span>
          </div>
          <h1 className="mt-10 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] tracking-[-0.035em] max-w-[760px]">
            How Growth Labz turned messy lead lists into campaign-ready pipelines with{" "}
            <span className="text-accent-brand">80% less cleanup time</span>.
          </h1>
          <p className="mt-8 font-display text-[14px] tracking-wide text-primary-dark-foreground/70">
            Lead Generation · 6 employees · Amsterdam &amp; Sydney
          </p>
        </div>
      </header>

      {/* HEADER PANEL */}
      <section className="mx-auto max-w-[860px] px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] rounded-2xl border border-border-soft bg-background overflow-hidden">
          {/* Sidebar */}
          <aside
            className="p-6 border-b md:border-b-0 md:border-r border-border-soft"
            style={{ background: "hsl(var(--accent-brand) / 0.05)" }}
          >
            <p className="font-serif text-[14px] leading-[1.7] text-foreground">
              Growth Labz is a B2B lead generation agency helping companies book qualified meetings
              through cold email and outbound systems.
            </p>
            <dl className="mt-7 space-y-5">
              {[
                ["Industry", "Lead Generation"],
                ["Company size", "6 employees"],
                ["Headquarters", "Amsterdam · Sydney"],
                ["Founded", "2021"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow-muted">{k}</dt>
                  <dd className="font-display text-[13px] mt-1.5 text-primary-dark">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7">
              <div className="eyebrow-muted mb-3">Features</div>
              <div className="flex flex-wrap gap-2">
                {["Email enrichment", "List verification", "Bulk export"].map((t) => (
                  <span
                    key={t}
                    className="rounded-[20px] px-3 py-1 text-[11px] font-display font-medium text-accent-brand"
                    style={{ background: "hsl(var(--accent-brand) / 0.1)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right panel */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 border-b border-border-soft md:border-r">
              <div className="eyebrow-muted mb-3">Challenge</div>
              <p className="font-serif text-[14px] leading-[1.7]">
                Growth Labz handled 15K–25K leads per month, but only 50–60% had usable email
                addresses. Bounce rates were climbing and campaign performance suffered while the
                team manually cleaned data instead of launching outbound.
              </p>
            </div>
            <div className="p-6 border-b border-border-soft">
              <div className="eyebrow-muted mb-3">Solution</div>
              <p className="font-serif text-[14px] leading-[1.7]">
                Scalelist became their dedicated email enrichment and verification layer — turning
                raw lists into verified, high-confidence prospects ready for outreach.
              </p>
            </div>
            <div className="md:col-span-2 p-6">
              <div className="eyebrow-muted mb-4">Results</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["25K", "Leads enriched per month"],
                  ["20K", "Verified emails per month"],
                  ["~80%", "Less time on list cleanup"],
                  ["2×", "More campaigns launched"],
                ].map(([n, d]) => (
                  <div
                    key={d}
                    className="rounded-[10px] border border-border-soft p-4"
                    style={{ background: "hsl(var(--accent-brand) / 0.04)" }}
                  >
                    <div className="font-display text-[28px] tracking-[-0.04em] text-primary-dark">
                      {n}
                    </div>
                    <div className="font-display text-[11px] mt-1 text-muted-ink">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <article className="mx-auto max-w-[860px] px-6 py-[52px] mt-[52px]">
        <Label>Background</Label>
        <SectionTitle>Built to make outbound work — at any scale.</SectionTitle>
        <div className="space-y-6 font-serif text-[15px] leading-[1.75]">
          <p>
            Growth Labz was founded with a simple mission: help B2B companies book qualified
            meetings through cold email and outbound systems that actually perform. From a small
            distributed team across Amsterdam and Sydney, the agency has grown into a trusted
            partner for clients who need predictable pipeline, not just more lists.
          </p>
          <p>
            Their service combines outbound strategy, copy, infrastructure, and list-building into a
            single managed engine. Most clients come to Growth Labz after burning out on tools that
            promised volume but delivered noise — so the bar for data quality is non-negotiable.
          </p>
          <p>
            Arin Ohandjanian, Director EMEA, leads the European operation and oversees the systems
            that keep campaigns running cleanly across hundreds of inboxes every month.
          </p>
          <p className="font-display text-[13px] text-muted-ink pt-2">
            Arin Ohandjanian — Director EMEA, Growth Labz
          </p>
        </div>
      </article>

      <hr className="mx-auto max-w-[860px] border-border-soft" />

      {/* THE PROBLEM */}
      <article className="mx-auto max-w-[860px] px-6 py-[52px]">
        <Label>The problem</Label>
        <SectionTitle>Manual, brittle, and increasingly unsustainable.</SectionTitle>
        <div className="space-y-6 font-serif text-[15px] leading-[1.75]">
          <p>
            Before Scalelist, Growth Labz was pulling lead data from multiple sources — scrapers,
            exports, partner lists — and stitching it together by hand. The volume was real (15K–25K
            leads per month), but the quality was not. Roughly half of every list was unusable.
          </p>
          <p>
            They tried the obvious players — Apollo for sourcing, NeverBounce and ZeroBounce for
            verification, plus a rotating cast of enrichment tools layered on top. Each closed one
            gap and opened two more. Costs stacked up. Workflows fragmented. And bounce rates kept
            creeping past safe thresholds.
          </p>
          <p>
            The cost wasn't just time. Poor deliverability was quietly capping how many campaigns
            the team could safely run, which capped how many meetings they could book, which capped
            growth for both Growth Labz and their clients.
          </p>
          <blockquote className="pull-quote my-8">
            "We were spending more time cleaning data than actually launching campaigns. Half of
            every list was effectively dead weight."
            <footer className="mt-3 not-italic font-display text-[12px] text-muted-ink">
              — Arin Ohandjanian, Growth Labz
            </footer>
          </blockquote>
        </div>
      </article>

      <hr className="mx-auto max-w-[860px] border-border-soft" />

      {/* DISCOVERY */}
      <article className="mx-auto max-w-[860px] px-6 py-[52px]">
        <Label>Discovery</Label>
        <SectionTitle>The Scalelist moment.</SectionTitle>
        <div className="space-y-6 font-serif text-[15px] leading-[1.75]">
          <p>
            The shift happened when the team stopped treating data quality as a downstream cleanup
            task and started treating it as the foundation. Scalelist came in on a single test list
            — one of the messy ones — and the team expected modest improvement.
          </p>
          <p>
            What they got back was a list they could actually send to. Higher match rates, cleaner
            verification, and a noticeable drop in bounces on the very first campaign run against
            it. Within days, Scalelist moved from "tool we're trialling" to "step that runs before
            anything ships."
          </p>
          <blockquote className="pull-quote my-8">
            "We quickly realised that the issue wasn't our campaigns — it was the data. Scalelist
            completely changed the quality of our lists overnight."
            <footer className="mt-3 not-italic font-display text-[12px] text-muted-ink">
              — Arin Ohandjanian, Growth Labz
            </footer>
          </blockquote>
        </div>
      </article>

      <hr className="mx-auto max-w-[860px] border-border-soft" />

      {/* HOW THEY USE IT */}
      <article className="mx-auto max-w-[860px] px-6 py-[52px]">
        <Label>How they use it</Label>
        <SectionTitle>How Growth Labz uses Scalelist.</SectionTitle>

        <div className="space-y-10">
          <div>
            <h3 className="font-display text-[19px] text-primary-dark mb-3">
              1. Pre-campaign enrichment
            </h3>
            <p className="font-serif text-[15px] leading-[1.75]">
              Every raw list — regardless of source — is uploaded to Scalelist before anything else
              happens. Email enrichment runs across the full dataset, then results are filtered down
              to verified, high-confidence contacts only.
            </p>
          </div>
          <div>
            <h3 className="font-display text-[19px] text-primary-dark mb-3">
              2. Weekly verification cadence
            </h3>
            <p className="font-serif text-[15px] leading-[1.75]">
              On a weekly rhythm, the team sources new lead data, enriches and verifies through
              Scalelist, then segments and distributes lists across active campaigns. Quality stays
              consistent even as volume scales.
            </p>
          </div>
          <div>
            <h3 className="font-display text-[19px] text-primary-dark mb-3">
              3. Direct hand-off to outreach
            </h3>
            <p className="font-serif text-[15px] leading-[1.75]">
              Verified lists export straight into the team's outreach stack. No intermediate
              cleanup, no second-guessing deliverability, no babysitting bounce rates after launch.
            </p>
          </div>

          <blockquote className="pull-quote">
            "It's now an important step in our workflow — every lead list goes through Scalelist
            before we even think about launching a campaign."
            <footer className="mt-3 not-italic font-display text-[12px] text-muted-ink">
              — Arin Ohandjanian, Growth Labz
            </footer>
          </blockquote>
        </div>
      </article>

      {/* PULL QUOTE */}
      <section className="relative bg-primary-dark text-primary-dark-foreground overflow-hidden mt-[52px]">
        <span
          aria-hidden
          className="absolute top-2 left-6 font-serif text-[260px] leading-none select-none"
          style={{ color: "hsl(var(--accent-brand) / 0.12)" }}
        >
          “
        </span>
        <div className="relative mx-auto max-w-[860px] px-6 py-24">
          <p className="font-serif italic text-[clamp(24px,3.4vw,34px)] leading-[1.35] tracking-[-0.01em]">
            Scalelist has allowed us to scale faster, improve performance, and focus on what
            actually matters — booking meetings and driving results for our clients.
          </p>
          <p className="mt-8 font-display text-[12px] tracking-wide text-primary-dark-foreground/70">
            ARIN OHANDJANIAN — DIRECTOR EMEA, GROWTH LABZ
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <article className="mx-auto max-w-[860px] px-6 py-[52px] mt-[52px]">
        <Label>Looking ahead</Label>
        <SectionTitle>Scaling output without scaling overhead.</SectionTitle>
        <div className="space-y-6 font-serif text-[15px] leading-[1.75]">
          <p>
            With Scalelist embedded in the workflow, Growth Labz no longer treats data quality as a
            constraint. The team runs more campaigns in parallel, lands in more inboxes, and
            protects sender reputation across an expanding portfolio of clients.
          </p>
          <p>
            Operationally, what used to consume the bulk of a week — cleaning, deduping, verifying,
            re-verifying — now happens in a single automated step. The bottleneck that defined the
            old way of working has effectively disappeared.
          </p>
          <p>
            Next, the team is doubling down on volume: more verticals, larger lists, and tighter
            segmentation, all without adding headcount on the data side. What was once a bottleneck
            is now a competitive advantage.
          </p>
        </div>
      </article>

      <footer className="border-t border-border-soft">
        <div className="mx-auto max-w-[860px] px-6 py-10 flex items-center justify-between">
          <span className="font-display text-[12px] tracking-wide text-muted-ink">
            © Growth Labz × Scalelist
          </span>
          <span className="eyebrow">Customer story</span>
        </div>
      </footer>
    </div>
  );
};


export default GrowthLabzBody;
