import { useState } from "react";
import { ChevronDown, Copy, Check, Download } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const SKILLS: { title: string; desc: string; slug: string }[] = [
  { title: "Define your ICP", desc: "Define and prioritize a narrow ideal customer profile for outbound.", slug: "icp-definer" },
  { title: "Define the buyer persona", desc: "Pick the exact title and seniority to reach out to.", slug: "persona-definer" },
  { title: "Identify pain points", desc: "Surface a company's likely pains from signals, hiring, and tech stack.", slug: "pain-identifier" },
  { title: "Find competitors", desc: "Map direct and indirect competitors and differentiation angles.", slug: "competitor-finder" },
  { title: "Deep company analysis", desc: "Mine a company's site, case studies, and reviews for buying triggers and language.", slug: "deep-company-analyser" },
  { title: "Market research (EDPs)", desc: "Find the Existential Data Points that make a category a must-have.", slug: "market-research-edp" },
  { title: "Find data sources", desc: "Discover B2B data sources with strong buying-intent signals.", slug: "niche-data-finder" },
  { title: "List value props", desc: "Inventory every value proposition, mapped to personas and channels.", slug: "value-prop-lister" },
  { title: "Define the offer", desc: "Turn features into an outcome-led offer for cold outreach.", slug: "offer-definer" },
  { title: "Find campaign angles", desc: "Generate 3 distinct campaign angles for a persona.", slug: "campaign-angle-finder" },
  { title: "Architect the campaign", desc: "Design the full outbound sequence, channels, and cadence.", slug: "outbound-campaign-architect" },
  { title: "Pressure-test a GTM idea", desc: "Challenge and expand any GTM idea, then give an execution plan.", slug: "gtm-action-thinker" },
  { title: "First-touch cold email", desc: "Write a high-converting first cold email.", slug: "copywriting-first-touch" },
  { title: "Follow-up email", desc: "Write a fresh follow-up after no reply, with a new angle.", slug: "copywriting-follow-up" },
  { title: "IC email sequence", desc: "3-email sequence for individual contributors (SDR/AE/etc.).", slug: "copywriting-ic-sequence" },
  { title: "Manager email sequence", desc: "3-email sequence calibrated for manager-level buyers.", slug: "copywriting-manager-sequence" },
  { title: "VP email sequence", desc: "3-email sequence calibrated for VP-level buyers.", slug: "copywriting-vp-sequence" },
  { title: "Analyze & score a cold email", desc: "Score outreach against reply-rate criteria and rewrite it.", slug: "copywriting-analyzer" },
  { title: "Refine outreach copy", desc: "Audit any email or sequence against a checklist and fix every issue.", slug: "copywriting-refiner" },
  { title: "Design a CTA", desc: "Create value-based CTAs that spark replies instead of demanding a meeting.", slug: "cta-designer" },
  { title: "LinkedIn outreach angle", desc: "Find the best attack angle from a LinkedIn profile.", slug: "linkedin-outbound-angle" },
  { title: "LinkedIn DM sequence", desc: "2-message LinkedIn sequence to send after a connection is accepted.", slug: "linkedin-sequence" },
  { title: "Cold call script", desc: "Generate a structured cold call script from a target description.", slug: "cold-call-script" },
  { title: "Handle a reply", desc: "Craft the right response to any prospect reply.", slug: "reply-handler" },
  { title: "Benchmark outbound stats", desc: "Compare your reply/open/acceptance rates against real benchmarks.", slug: "outbound-analyst" },
  { title: "Detect CRM duplicates", desc: "Find, score, and resolve duplicate contacts and accounts.", slug: "crm-duplicate-detector" },
  { title: "Scrape a website", desc: "Extract structured data from any site into a clean CSV.", slug: "website-scraper" },
  { title: "Optimize a prompt", desc: "Turn a rough prompt into a production-ready one for Claude.", slug: "prompt-engineering" },
  { title: "Build an MCP server", desc: "Guidance to build a high-quality MCP server for any API or service.", slug: "mcp-builder" },
];

const CASES = [
  {
    title: "Build a lead list from a description",
    desc: "Describe who you want; the AI finds them and returns a clean table with verified emails and phones.",
    prompt: `Goal: a verified, deduped lead list, one decision-maker per company.

Target: exactly 25 people whose current title is one of ["VP Marketing","Head of Marketing","CMO"] (fall back to "Marketing Director" only if none exist at that company), at B2B SaaS companies, HQ country = United States, headcount 50–200, founded 2015 or later.

Process:
1. Build a 30-company shortlist (over-fetch to cover misses) and print it as a numbered list with company + employee count. STOP and wait for my "go".
2. After "go", pick the single best-fit person per company (one per company, no duplicates).
3. Enrich with Scalelist: verified work email + direct mobile. Cap spend at 60 credits; if you'd exceed it, stop and ask.

Output table, columns in this exact order: Rank | First name | Last name | Title | Company | Employees | HQ city | Website | LinkedIn URL | Email (lowercase) | Email status (valid/risky) | Mobile (E.164).
Rules: include ONLY rows with a valid email; drop risky/not-found; sort by Employees descending; never fabricate a value (leave blank + note). Finish with: rows returned, emails found, mobiles found, credits used.`,
  },
  {
    title: "Enrich a CSV without leaving the chat",
    desc: "Drop a CSV of LinkedIn URLs, names, or domains; the AI enriches every row.",
    prompt: `I'm attaching a CSV. Identifier per row is either (Full name + Company domain) OR a LinkedIn URL.

Process:
1. Tell me the row count detected and which identifier you'll use. If >200 rows, process in batches of 100 and confirm after each batch.
2. Enrich every row with Scalelist: verified work email + direct mobile. Verify each email and label it exactly valid / risky / not_found.

Output: return my ORIGINAL columns and row order unchanged, then append, in this order: Email (lowercase) | Email_status | Mobile (E.164) | Mobile_status (found/not_found) | Reachable (Yes if Email_status=valid OR Mobile_status=found, else No) | Note (short reason when not reachable).
Then print a summary: rows processed, valid emails, risky, not_found, mobiles found, reachable %, credits used. Misses cost 0 credits — never delete unreachable rows, only flag them. Finally export as "enriched_<original-filename>.csv".`,
  },
  {
    title: "Write outreach that doesn't look like outreach",
    desc: "The AI pulls career history and company context, then writes tailored emails, DMs, or call scripts.",
    prompt: `Write a personalized cold email for each of these 10 enriched contacts.

My context: I sell [product] to [audience]. Primary outcome: [metric/result]. Proof point: [1 customer + result]. CTA: interest-based, not a meeting ask.

For each contact, mine their Scalelist profile for ONE concrete, verifiable hook, in this priority: (1) job change in last 6 months, (2) company signal [hiring/funding/launch], (3) specific role scope. If none exist, mark "needs manual review" and skip — never fabricate a hook.

Hard rules: subject ≤ 42 characters, no emoji; body 50–90 words; ≤ 9th-grade reading level; plain text; exactly one CTA phrased as a question; banned phrases: "hope this finds you well", "quick question", "I noticed you're the [title]", "synergy", "circle back", "game-changer".
Output table: # | Name | Company | Hook type used | Subject | Body | Word count.`,
  },
  {
    title: "Map an org before your first call",
    desc: "Company or domain in; org chart, hierarchy, and who to contact first out.",
    prompt: `Map the GTM org at [company.com] so I know exactly who to open with. My offer: [what I sell + outcome + who owns it].

Process:
1. Use Scalelist to find current employees in Sales, Marketing, and RevOps/Operations at this domain.
2. Group by function; within each, rank by seniority: C-level > VP > Senior Director > Director > Senior Manager > Manager > IC.
3. Recommend a Primary and Backup first-contact for my offer, each with a one-line reason tied to budget or problem ownership (not just seniority).
4. Enrich ONLY the Primary and Backup with verified email + mobile (max 2 credits).

Output: (A) org chart as an indented list grouped by function, each person = Name — Title — tier; (B) "Contact first" block with Primary {name, title, why, email, mobile} and Backup {same}.
Edge case: if the company has <10 employees or no GTM titles, say so and name the founder/CEO as the entry point. End with credits used.`,
  },
  {
    title: "Build a sequence from scratch",
    desc: "The AI designs timing, channel mix, branches, and a breakup message.",
    prompt: `Build a 5-touch outbound sequence for these 20 enriched leads. I sell [product]; outcome [result]; proof [stat]; CTA style = soft/interest-based.

Exact cadence (business days): Day 1 Email, Day 2 LinkedIn DM, Day 4 Email, Day 6 LinkedIn DM, Day 9 Email (breakup).
Angle per touch (no repeats): T1 problem hook → T2 one-line credibility → T3 new proof/use case → T4 light social-proof nudge → T5 breakup with an easy out.
Personalize every touch from each lead's Scalelist profile (role, company, signal); the T1 opening line must be unique per lead. Emails 50–90 words, DMs ≤ 45 words, one CTA each.

Output: one master table — Lead | Company | Touch | Channel | Send day | Subject (emails only) | Message | Word count.
Then: (a) the 1 variable I should A/B test first and why; (b) any lead with too little data flagged "generic — needs review" rather than guessed.`,
  },
  {
    title: "Prep for a meeting in 30 seconds",
    desc: "LinkedIn URL or name in; a full brief out.",
    prompt: `I have a call with [name] at [company] in 10 minutes. Pull their profile + company via Scalelist and brief me in EXACTLY this structure, total ≤ 220 words, no fluff:

1) Who they are — title, seniority tier, time in current role, previous role/company (1 line).
2) Company — what they sell, segment, employee band, and 1 recent signal with rough date.
3) Their likely top 2 priorities + 1 pain for this exact seat.
4) Fit — one sentence mapping [my product] to point 3.
5) Opener — one tailored line referencing point 1 or 2 (not generic).
6) Discovery — 3 questions ordered easy → hard, each ≤ 20 words.
7) Landmine — 1 objection/sensitivity common to this persona + a one-line counter.

If any field is unknown, write "unknown — not in data" rather than guessing. Don't enrich email/mobile.`,
  },
  {
    title: "Push to CRM in one prompt",
    desc: "The AI detects your CRM, maps fields, checks duplicates, and pushes.",
    prompt: `Push these 20 enriched contacts to my [HubSpot/Salesforce/Pipedrive].

Process (do NOT write anything until step 3 is approved):
1. Dedupe: match existing records on email (exact, case-insensitive); if no email, match on (Last name + Company domain).
2. Show me a preview: New (n), Duplicate (n, with matched record name+ID), Conflict (n, where my data differs). Wait for my approval.
3. On approval: create New; for Duplicates only fill BLANK fields (never overwrite); skip Conflicts and list them.

Field mapping: First name, Last name, Title, Company, Email (lowercase), Mobile (E.164), LinkedIn URL, Lead source = "Scalelist MCP". Apply tag/list "Scalelist – Q2 2026". Add a note per record: "[industry], [employees], fit: [one line]".
Output: summary table — Created | Updated (blanks filled) | Skipped duplicate | Skipped conflict | Failed (with reason).`,
  },
  {
    title: "Source candidates like a headhunter",
    desc: "Describe a role; the AI searches, enriches, and tiers candidates.",
    prompt: `Source 15 candidates for: [Senior Backend Engineer]. Must-have: [Python] + [5+ yrs backend]. Nice-to-have: [AWS, Kubernetes]. Location: [remote, France or CET ±2h]. Hard exclude: anyone currently at [our company] or [competitors].

Process:
1. Build a 20-name shortlist (over-fetch); print Name | Current title | Company | Location; wait for my approval.
2. On approval, enrich each with Scalelist (verified email + mobile; cap 30 credits).
3. Score fit 1–3 (1 = best) against must-haves only; nice-to-haves break ties.

Output table, sorted Tier 1→3 then years desc: Tier | Name | Current title | Company | Location | Years relevant | Must-haves met (y/n) | Why (≤15 words) | Email | Email status | Mobile (E.164).
Flag candidates with an "open to work"/recent-departure signal as "⚡ priority". End with count per tier + credits used. Never include an excluded company.`,
  },
  {
    title: "Find contacts that look like your best customers",
    desc: "Share a converted contact; the AI reverse-engineers the ICP and finds lookalikes.",
    prompt: `Seed (a customer who converted last month): [LinkedIn URL or Name + Company].

Process:
1. Profile the seed + company via Scalelist and output a 1-line ICP: industry | employee band | role+seniority | region | 1–2 buying signals.
2. Wait for my "go" / edits on that ICP.
3. Find 10 lookalike contacts at OTHER companies (exclude the seed's company and [my company]); one per company.
4. Score each 0–100 on ICP fit, weighting: role/seniority 40, industry 25, company size 20, region 15. Enrich ONLY contacts scoring ≥ 60 (top 5 max) with verified email + mobile.

Output: (A) the final ICP line; (B) ranked table sorted by score desc: Rank | Name | Title | Company | Employees | Region | Match score | Score reason (≤15 words) | Email | Mobile (E.164).
Rules: don't enrich anyone < 60; if fewer than 10 hit the bar, return only those and say why. End with credits used.`,
  },
];

export function UseCases() {
  const [tab, setTab] = useState<"prompts" | "skills">("prompts");
  return (
    <section id="solutions" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>Use cases</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            One conversation. Your entire prospecting stack.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real prompts and skills your team can paste today. Use Scalelist as an AI prospecting
            tool — or wire it into your AI SDR agent.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setTab("prompts")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                tab === "prompts"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Prompts
            </button>
            <button
              type="button"
              onClick={() => setTab("skills")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                tab === "skills"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Skills
            </button>
            </div>
            {tab === "skills" && (
              <a
                href="/skills/all-skills.zip"
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Download className="h-4 w-4" />
                Download all skills
              </a>
            )}
          </div>
        </div>

        {tab === "prompts" ? (
          <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <UseCaseCard key={i} {...c} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <SkillCard key={i} {...s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkillCard({ title, desc, slug }: { title: string; desc: string; slug: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>

      <div className="mt-4">
        <a
          href={`/skills/${slug}.skill`}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <Download className="h-4 w-4" />
          Download Skill
        </a>
      </div>
    </div>
  );
}

function UseCaseCard({
  title,
  desc,
  prompt,
}: {
  title: string;
  desc: string;
  prompt: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex-1">
        <h3 className="min-h-[3.5rem] text-lg font-bold leading-tight text-foreground">{title}</h3>
        <p className="mt-2 min-h-[5.25rem] text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {open ? "Hide prompt" : "Show prompt"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copy prompt"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-48 overflow-y-auto whitespace-pre-wrap rounded-xl border border-border bg-muted/50 p-4 font-mono text-sm leading-relaxed text-foreground">
            {prompt}
          </div>
        </div>
      </div>
    </div>
  );
}