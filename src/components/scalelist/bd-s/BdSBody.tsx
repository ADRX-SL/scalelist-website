const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-[20px] bg-[hsl(var(--accent-blue)/0.08)] text-[hsl(var(--accent-blue))] px-3 py-1 text-[12px] font-display font-medium">
    {children}
  </span>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-[10px] border border-[hsl(var(--hairline))] bg-white p-6">
    <div className="font-display text-[36px] leading-none font-semibold text-[hsl(var(--ink))] tracking-[-0.04em]">
      {value}
    </div>
    <div className="mt-3 text-[14px] leading-snug text-[hsl(var(--muted-foreground))] font-serif-body">
      {label}
    </div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow mb-4">{children}</div>
);

const BdSBody = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SECTION 1 — HERO */}
      <header className="relative overflow-hidden bg-[hsl(var(--ink))] text-white">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-[860px] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="eyebrow mb-8">Customer story</div>

          <div className="flex items-center gap-4 mb-10">
            <div className="bd-tile h-14 w-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-[20px] tracking-tight shadow-[0_0_0_1px_hsl(var(--accent-blue)/0.4)]">
              BD
            </div>
            <div className="font-display text-[15px] text-white/70 tracking-tight">
              Becton Dickinson
            </div>
          </div>

          <h1 className="font-display text-[40px] md:text-[54px] leading-[1.05] font-semibold text-white tracking-[-0.035em]">
            How BD enriches thousands of B2B leads per quarter — with 98% email coverage
          </h1>

          <p className="mt-8 font-display text-[14px] text-white/55 tracking-wide">
            MedTech · 72,000 employees · Franklin Lakes, NJ
          </p>
        </div>
      </header>

      {/* SECTION 2 — HEADER PANEL */}
      <section className="mx-auto max-w-[860px] px-6 -mt-10 md:-mt-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0 rounded-[16px] border border-[hsl(var(--hairline))] bg-white overflow-hidden">
          {/* Sidebar */}
          <aside className="bg-[hsl(var(--surface))] p-6 md:border-r border-[hsl(var(--hairline))]">
            <p className="font-serif-body text-[14px] leading-relaxed text-[hsl(var(--foreground))]">
              Becton Dickinson is one of the world's largest medical technology companies, supporting healthcare delivery across more than 190 countries.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="eyebrow-muted mb-1">Industry</div>
                <div className="font-display text-[13px] text-[hsl(var(--ink))]">MedTech</div>
              </div>
              <div>
                <div className="eyebrow-muted mb-1">Company size</div>
                <div className="font-display text-[13px] text-[hsl(var(--ink))]">72,000 employees</div>
              </div>
              <div>
                <div className="eyebrow-muted mb-1">Headquarters</div>
                <div className="font-display text-[13px] text-[hsl(var(--ink))]">Franklin Lakes, NJ</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Lead extraction</Pill>
              <Pill>Email enrichment</Pill>
              <Pill>Phone enrichment</Pill>
            </div>
          </aside>

          {/* Right panel */}
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:border-r border-b border-[hsl(var(--hairline))]">
                <div className="eyebrow-muted mb-3">Challenge</div>
                <p className="font-serif-body text-[14.5px] leading-relaxed text-[hsl(var(--foreground))]">
                  BD's manual lead extraction from LinkedIn Sales Navigator was slow and unscalable. A significant share of leads lacked valid emails or phone data, creating dead ends across the sales cycle.
                </p>
              </div>
              <div className="p-6 border-b border-[hsl(var(--hairline))]">
                <div className="eyebrow-muted mb-3">Solution</div>
                <p className="font-serif-body text-[14.5px] leading-relaxed text-[hsl(var(--foreground))]">
                  Scalelist replaced the manual workflow with direct extraction from Sales Navigator, enriching every lead with verified emails and phone numbers in one uninterrupted flow.
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="eyebrow-muted mb-4">Results</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Stat value=">98%" label="Valid email addresses on enriched leads" />
                <Stat value=">86%" label="Phone number coverage for multi-channel outreach" />
                <Stat value="Zero" label="Manual extraction steps in the workflow" />
                <Stat value="Faster" label="Time-to-first-contact across quarterly pipeline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="mx-auto max-w-[860px] px-6 mt-[52px]">
        {/* SECTION 3 — Background */}
        <section>
          <SectionLabel>Background</SectionLabel>
          <h2 className="text-[28px] md:text-[34px] mb-6">
            One of the world's oldest MedTech companies, operating at modern scale
          </h2>
          <div className="space-y-5 text-[hsl(var(--foreground))]">
            <p>
              Founded in 1897, Becton Dickinson has spent more than a century shaping the tools and instruments that healthcare systems rely on every day. From early surgical equipment to today's diagnostic and medication-delivery platforms, BD has grown into one of the most established medical technology companies in the world.
            </p>
            <p>
              With more than 72,000 employees serving customers in over 190 countries, BD operates at a scale where small inefficiencies in commercial workflows compound quickly. The company's B2B sales motion supports a global network of healthcare providers, distributors, research institutions, and enterprise accounts.
            </p>
            <p>
              Karlo Svrze leads B2B sales enrichment for one of BD's commercial divisions, where his team is responsible for sourcing, qualifying, and enriching the pipeline that downstream sales teams rely on. The mandate is straightforward — get accurate, contactable decision-makers in front of reps, faster.
            </p>
          </div>
        </section>

        {/* SECTION 4 — Problem */}
        <section className="mt-[52px]">
          <SectionLabel>The problem</SectionLabel>
          <h2 className="text-[28px] md:text-[34px] mb-6">
            Manual, brittle, and increasingly unsustainable
          </h2>
          <div className="space-y-5 text-[hsl(var(--foreground))]">
            <p>
              Before adopting Scalelist, BD's lead generation and enrichment process was almost entirely manual. The team worked through several thousand leads per quarter, primarily sourced from LinkedIn Sales Navigator, with each step in extraction requiring human effort and constant context switching.
            </p>
            <p>
              The bigger problem wasn't volume — it was data quality. A significant proportion of leads lacked valid email addresses, and phone number coverage was inconsistent or missing entirely. That meant wasted SDR effort, lower contact rates, and friction at every stage of the sales process.
            </p>
            <p>
              The team had tested other platforms, including Apollo, but they weren't intuitive, didn't fit smoothly into the LinkedIn-driven workflow the team already used, and didn't materially improve enrichment quality. Tooling overhead grew without a corresponding lift in pipeline performance.
            </p>
            <blockquote className="pull-quote my-8">
              "The process was inefficient, difficult to scale, and was limiting both pipeline velocity and deal throughput."
              <footer className="mt-3 not-italic font-display text-[12px] text-[hsl(var(--muted-foreground))] tracking-wide">
                — Karlo Svrze, BD
              </footer>
            </blockquote>
            <p>
              The compounding effect was clear: slower prospecting cycles, longer time-to-first-contact, and a pipeline that couldn't keep pace with the commercial targets BD's B2B division was being asked to hit.
            </p>
          </div>
        </section>

        {/* SECTION 5 — Discovery */}
        <section className="mt-[52px]">
          <SectionLabel>Discovery</SectionLabel>
          <h2 className="text-[28px] md:text-[34px] mb-6">The Scalelist moment</h2>
          <div className="space-y-5 text-[hsl(var(--foreground))]">
            <p>
              The team didn't find Scalelist through a vendor pitch or a long evaluation cycle. They came across it almost by accident — a YouTube walkthrough demonstrating end-to-end extraction and enrichment from inside Sales Navigator.
            </p>
            <p>
              Within minutes of testing it themselves, the difference was obvious. Extraction was seamless, enrichment was reliable, and the workflow looked exactly like what the team was already trying to do manually — only faster, cleaner, and without broken steps in between.
            </p>
            <blockquote className="pull-quote my-8">
              "We discovered Scalelist somewhat unexpectedly through a YouTube walkthrough, tested it, and immediately saw a step change in both usability and output quality."
              <footer className="mt-3 not-italic font-display text-[12px] text-[hsl(var(--muted-foreground))] tracking-wide">
                — Karlo Svrze, BD
              </footer>
            </blockquote>
            <p>
              The decision to switch was fast. There was no heavy onboarding, no internal change management overhead — just a tool that fit naturally into the way the team already worked.
            </p>
          </div>
        </section>

        {/* SECTION 6 — How they use it */}
        <section className="mt-[52px]">
          <SectionLabel>How they use it</SectionLabel>
          <h2 className="text-[28px] md:text-[34px] mb-8">How BD uses Scalelist</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-[20px] mb-3">Extracting leads directly from Sales Navigator</h3>
              <p className="text-[hsl(var(--foreground))] mb-4">
                BD's prospecting still starts where it always has — inside LinkedIn Sales Navigator. Scalelist sits on top of that workflow, so reps can extract entire lead lists without leaving the tool, copying and pasting between tabs, or running brittle scrapers.
              </p>
              <blockquote className="pull-quote">
                "It became a natural extension of how our team already works in Sales Navigator, rather than an additional tool creating overhead."
                <footer className="mt-3 not-italic font-display text-[12px] text-[hsl(var(--muted-foreground))] tracking-wide">
                  — Karlo Svrze, BD
                </footer>
              </blockquote>
            </div>

            <div>
              <h3 className="text-[20px] mb-3">Enriching at scale with emails and phone numbers</h3>
              <p className="text-[hsl(var(--foreground))] mb-4">
                Every extracted lead is enriched with verified business email addresses and phone numbers in the same flow. For BD, the phone coverage is a particular differentiator — it unlocks multi-channel outreach in segments where email alone wouldn't be enough.
              </p>
              <blockquote className="pull-quote">
                "We're now seeing more than 98% valid emails and over 86% phone coverage across thousands of leads per quarter."
                <footer className="mt-3 not-italic font-display text-[12px] text-[hsl(var(--muted-foreground))] tracking-wide">
                  — Karlo Svrze, BD
                </footer>
              </blockquote>
            </div>

            <div>
              <h3 className="text-[20px] mb-3">Running a faster, cleaner outreach cycle</h3>
              <p className="text-[hsl(var(--foreground))] mb-4">
                With clean lists landing in the hands of reps the same day, prospecting cycles compressed sharply. The team books more meetings, works better-qualified pipeline, and does it without adding headcount on the operations side.
              </p>
              <blockquote className="pull-quote">
                "Shorter prospecting cycles, better pipeline quality, and no added operational burden — that's the change."
                <footer className="mt-3 not-italic font-display text-[12px] text-[hsl(var(--muted-foreground))] tracking-wide">
                  — Karlo Svrze, BD
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </article>

      {/* SECTION 7 — Pull quote block */}
      <section className="mt-[52px] bg-[hsl(var(--ink))] text-white relative overflow-hidden">
        <div className="absolute bottom-[-60px] left-[-20px] font-serif-body text-[320px] leading-none text-[hsl(var(--accent-blue))] opacity-10 select-none pointer-events-none">
          “
        </div>
        <div className="relative mx-auto max-w-[860px] px-6 py-20 md:py-24">
          <p className="font-serif-body italic text-[24px] md:text-[30px] leading-[1.45] tracking-[-0.01em] text-white">
            "The impact was immediate and measurable across efficiency, data quality, and commercial outcomes. We're engaging decision-makers faster, with better data, and spending less time on the process that gets us there."
          </p>
          <footer className="mt-8 font-display text-[12px] uppercase tracking-[0.12em] text-white/60">
            Karlo Svrze · Becton Dickinson
          </footer>
        </div>
      </section>

      {/* SECTION 8 — Closing */}
      <section className="mx-auto max-w-[860px] px-6 mt-[52px] mb-[80px]">
        <SectionLabel>Looking ahead</SectionLabel>
        <h2 className="text-[28px] md:text-[34px] mb-6">
          Scaling pipeline without scaling overhead
        </h2>
        <div className="space-y-5 text-[hsl(var(--foreground))]">
          <p>
            For a commercial organization the size of BD's, the value of Scalelist isn't just in the data — it's in what the data unlocks. Faster outreach, cleaner targeting, and a measurable lift in pipeline velocity have translated into shorter time-to-close and improved deal quality across the division.
          </p>
          <p>
            Internally, the shift has changed how the team thinks about prospecting. Instead of building processes around the limitations of their tools, they're building around opportunities — running more focused campaigns, testing new segments, and putting reps in front of decision-makers with the right context from the first touch.
          </p>
          <p>
            With clean enrichment now a baseline rather than a bottleneck, BD's B2B team is positioned to keep scaling pipeline output without scaling operational overhead alongside it — a structural advantage in a market where most teams are still doing it by hand.
          </p>
        </div>
      </section>
    </main>
  );
};


export default BdSBody;
