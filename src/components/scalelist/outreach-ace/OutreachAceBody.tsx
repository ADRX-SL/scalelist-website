import { Quote } from "lucide-react";

const OutreachAceBody = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* SECTION 1 — HERO */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* radial accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--accent) / 0.55), transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[860px] px-6 pb-20 pt-24 sm:pt-28">
          <p className="eyebrow">Customer story</p>

          <div className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
            {/* Logomark */}
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-semibold tracking-tight text-accent-foreground shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.4)]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(6 90% 48%) 100%)",
                fontFamily: "Inter, sans-serif",
              }}
              aria-hidden
            >
              HL
            </div>
            <div>
              <p
                className="font-display text-sm font-medium text-primary-foreground/70"
              >
                HLTH
              </p>
              <h1 className="font-display mt-2 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                How HLTH turns Sales Navigator leads into{" "}
                <span style={{ color: "hsl(var(--accent))" }}>
                  3,000 enriched contacts
                </span>{" "}
                a month with Scalelist
              </h1>
            </div>
          </div>

          <p className="font-display mt-8 text-sm text-primary-foreground/60">
            Health Events · 100 employees · New York &amp; London
          </p>
        </div>
      </header>

      {/* SECTION 2 — HEADER PANEL */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-[860px] px-6 -mt-10 sm:-mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="bg-surface p-6">
              <p className="font-serif-body text-[14px] leading-[1.7] text-foreground/80">
                HLTH is a global health events company producing three major
                conferences each year for the most influential people in
                healthcare.
              </p>

              <dl className="mt-7 space-y-5">
                <div>
                  <dt className="meta-label">Industry</dt>
                  <dd className="font-display mt-1 text-[13px] text-foreground">
                    Health Events
                  </dd>
                </div>
                <div>
                  <dt className="meta-label">Company size</dt>
                  <dd className="font-display mt-1 text-[13px] text-foreground">
                    100 employees
                  </dd>
                </div>
                <div>
                  <dt className="meta-label">Headquarters</dt>
                  <dd className="font-display mt-1 text-[13px] text-foreground">
                    New York &amp; London
                  </dd>
                </div>
              </dl>

              <div className="mt-7">
                <p className="meta-label">Features</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Lead extraction", "Email enrichment"].map((f) => (
                    <span
                      key={f}
                      className="font-display rounded-[20px] border px-3 py-1 text-[11px] font-medium"
                      style={{
                        background: "hsl(var(--accent) / 0.08)",
                        borderColor: "hsl(var(--accent) / 0.25)",
                        color: "hsl(var(--accent))",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right panel */}
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              <div className="bg-card p-6">
                <p className="meta-label">Challenge</p>
                <p className="font-serif-body mt-3 text-[14.5px] leading-[1.7] text-foreground/85">
                  HLTH had thousands of high-value prospects on Sales Navigator,
                  but no contact data beyond LinkedIn URLs. Outreach was capped
                  at LinkedIn messages — limiting reach, channels, and
                  conversion into paid event delegates.
                </p>
              </div>
              <div className="bg-card p-6">
                <p className="meta-label">Solution</p>
                <p className="font-serif-body mt-3 text-[14.5px] leading-[1.7] text-foreground/85">
                  Scalelist unlocks verified emails from any Sales Navigator
                  search, turning passive lists into multi-channel campaigns
                  that bring delegates to HLTH events.
                </p>
              </div>

              <div className="col-span-full bg-card p-6">
                <p className="meta-label">Results</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    {
                      metric: "3,000",
                      desc: "leads enriched every month",
                    },
                    {
                      metric: "~70%+",
                      desc: "valid contact info on extracted lists",
                    },
                    {
                      metric: "Days saved",
                      desc: "of manual list-building work",
                    },
                    {
                      metric: "Higher conversion",
                      desc: "via multi-channel sequences",
                    },
                  ].map((r) => (
                    <div
                      key={r.metric}
                      className="rounded-[10px] border border-border p-4"
                    >
                      <p
                        className="font-display text-2xl font-semibold tracking-[-0.03em]"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        {r.metric}
                      </p>
                      <p className="font-serif-body mt-1 text-[13px] leading-[1.6] text-muted-foreground">
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="mx-auto w-full max-w-[860px] px-6">
        {/* SECTION 3 — Background */}
        <Section label="Background" title="Bringing the world of healthcare into one room">
          <p>
            HLTH was founded to create the most important meeting place in
            healthcare — a stage where payers, providers, founders, investors
            and policymakers can finally find each other in the same room. What
            began as a single flagship event has grown into three global
            conferences a year, each drawing tens of thousands of senior
            healthcare leaders.
          </p>
          <p>
            The company exists to turn an industry famous for fragmentation
            into something genuinely connected. To do that, every event has to
            be filled with the right people — and that means continuous,
            high-volume outbound that targets very specific roles inside very
            specific organisations across the US and Europe.
          </p>
          <p>
            That work falls to Matt Williams, Audience &amp; Growth Insights
            Manager at HLTH, whose team is responsible for sourcing, enriching
            and converting the audiences behind every show.
          </p>
        </Section>

        {/* SECTION 4 — The problem */}
        <Section
          label="The problem"
          title="Great leads, locked behind LinkedIn"
        >
          <p>
            HLTH had quietly built one of the most valuable Sales Navigator
            estates in the events industry. Saved searches. Curated lists.
            Thousands of senior healthcare buyers identified and tagged every
            month. The targeting was excellent.
          </p>
          <p>
            The problem was what happened next. Sales Navigator gives you a
            person and a profile URL — and not much else. No verified email.
            No way to plug those leads into a proper marketing sequence. The
            entire pipeline funnelled into a single channel: LinkedIn
            messages.
          </p>
          <p>
            For an outreach motion processing roughly 3,000 leads a month,
            that ceiling was costly. Campaigns could not be properly sequenced,
            audiences could not be re-engaged across channels, and a
            meaningful share of qualified prospects were never converted into
            delegates simply because there was no email to write to.
          </p>

          <blockquote className="pull-quote my-10">
            “We had all of these great leads on Sales Nav that we could only
            contact via LinkedIn. Scalelist solves this by giving us the
            emails — making sequence builds far more impactful.”
            <footer className="font-display mt-3 text-[12px] not-italic text-muted-foreground">
              — Matt Williams, HLTH
            </footer>
          </blockquote>
        </Section>

        {/* SECTION 5 — Discovery */}
        <Section label="Discovery" title="The Scalelist moment">
          <p>
            Matt had been hunting for a fix for months. He had tried other
            enrichment tools and workarounds, but nothing cleanly bridged the
            gap between a Sales Navigator list and a usable email file —
            certainly not at the volume HLTH needed.
          </p>
          <p>
            The first Scalelist demo changed that. Within minutes, an entire
            saved search came back as a clean, verified, ready-to-send list.
            No CSV gymnastics, no half-broken integrations, no second-guessing
            the data.
          </p>

          <blockquote className="pull-quote my-10">
            “When I first saw a demo, Scalelist solved a problem I had for
            months with no clear solution.”
            <footer className="font-display mt-3 text-[12px] not-italic text-muted-foreground">
              — Matt Williams, HLTH
            </footer>
          </blockquote>
        </Section>

        {/* SECTION 6 — How they use it */}
        <Section
          label="How they use it"
          title="How HLTH uses Scalelist"
        >
          <p>
            Scalelist now sits at the very top of HLTH&rsquo;s outbound
            funnel. Almost every campaign — across all three global events —
            starts with a list pulled and enriched through it.
          </p>

          <UseCase
            title="Audience sourcing for global events"
            body="Matt&rsquo;s team builds tightly targeted Sales Navigator searches per event, persona and region, then runs them through Scalelist to surface the verified email behind each profile. What used to be a LinkedIn-only audience becomes a true multi-channel one."
          />
          <UseCase
            title="Campaign-ready enrichment at volume"
            body="Around 3,000 leads are enriched every month, with roughly 70% returning valid contact info. Those enriched lists drop straight into HLTH&rsquo;s sequencing tools — no manual cleanup, no broken rows."
          />
          <UseCase
            title="Higher-converting delegate funnels"
            body="With email in hand, the team can layer LinkedIn outreach with email sequences, retargeting and nurture flows. The result: more registered delegates, better-attended sessions, and a stronger event."
          />

          <blockquote className="pull-quote my-10">
            “It is our go-to lead generation tool. Almost every list build
            comes from Scalelist — meaning almost every conversion we make
            stems from there.”
            <footer className="font-display mt-3 text-[12px] not-italic text-muted-foreground">
              — Matt Williams, HLTH
            </footer>
          </blockquote>
        </Section>
      </article>

      {/* SECTION 7 — Pull quote dark block */}
      <section className="relative my-[52px] overflow-hidden bg-primary py-20 text-primary-foreground">
        <Quote
          aria-hidden
          className="pointer-events-none absolute -left-4 top-4 h-48 w-48"
          style={{ color: "hsl(var(--accent) / 0.12)" }}
          strokeWidth={1}
        />
        <div className="relative mx-auto w-full max-w-[760px] px-6">
          <p className="font-serif-body text-2xl italic leading-[1.45] sm:text-[28px]">
            “Scalelist is the one tool I tell people in lead generation roles
            to use. It is a game changer.”
          </p>
          <p className="font-display mt-6 text-[12px] uppercase tracking-[0.12em] text-primary-foreground/60">
            — Matt Williams · Audience &amp; Growth Insights Manager, HLTH
          </p>
        </div>
      </section>

      {/* SECTION 8 — Closing */}
      <article className="mx-auto w-full max-w-[860px] px-6 pb-28">
        <Section label="Looking ahead" title="Scaling outreach without scaling headcount">
          <p>
            What used to be a manual, LinkedIn-bottlenecked operation is now a
            repeatable system. HLTH can spin up a new campaign for a new
            persona in a fraction of the time, pull verified contacts at the
            volume the events demand, and send through whatever channel makes
            sense for that audience.
          </p>
          <p>
            Operationally, that has saved Matt&rsquo;s team hours — sometimes
            days — every single week. Strategically, it means HLTH can run
            more campaigns, reach more of the right people, and convert more
            of them into delegates without growing the team behind it.
          </p>
          <p>
            With Scalelist as the foundation, the next chapter is about
            depth: smarter segmentation, more sophisticated multi-channel
            plays, and ultimately better events for the healthcare industry
            HLTH was built to bring together.
          </p>
        </Section>
      </article>
    </main>
  );
};

/* ------- Local subcomponents ------- */

const Section = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="py-[52px]">
    <p className="eyebrow">{label}</p>
    <h2 className="font-display mt-4 text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-[34px]">
      {title}
    </h2>
    <div className="font-serif-body mt-7 space-y-5 text-[15px] leading-[1.75] text-foreground/85">
      {children}
    </div>
  </section>
);

const UseCase = ({ title, body }: { title: string; body: string }) => (
  <div className="mt-8">
    <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em] text-foreground">
      {title}
    </h3>
    <p
      className="font-serif-body mt-2 text-[15px] leading-[1.75] text-foreground/85"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);


export default OutreachAceBody;
