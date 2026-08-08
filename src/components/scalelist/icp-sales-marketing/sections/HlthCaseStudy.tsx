import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";
import { Wordmark } from "@/components/scalelist/icp-sales-marketing/site/Wordmark";
import mattPortrait from "@/assets/icp-sales-marketing/matt-williams.png";

export function HlthCaseStudy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl bg-white p-8 ring-1 ring-border/60 md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Pill>Case Study</Pill>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-brand md:text-5xl">
              How HLTH transformed lead generation with Scalelist
            </h2>
            <div className="mt-7">
              <CTAButton href="https://scalelist.com/hlth/" variant="primary">Read how they did it</CTAButton>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                  Before
                </div>
                <p className="mt-2 text-sm text-muted-ink">
                  Hours of manual research, fragmented lead sources, and bounced emails hurting outbound performance.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                  After
                </div>
                <p className="mt-2 text-sm text-muted-ink">
                  Lead generation runs 10× faster, outbound deliverability improved, and the team books more meetings every week.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-brand/25 blur-3xl" aria-hidden />
              <div className="h-64 w-64 overflow-hidden rounded-3xl bg-gradient-to-b from-brand-soft to-white ring-1 ring-border/60">
                <img
                  src={mattPortrait}
                  alt="Matt Williams, Audience & Growth Insights Manager at HLTH"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-6">
              <Wordmark name="hlth" className="text-3xl font-black lowercase text-ink/80" />
            </div>
          </div>
        </div>

        <blockquote className="mt-12 border-t border-border/60 pt-8 text-center">
          <p className="mx-auto max-w-2xl text-lg italic text-ink">
            "Scalelist is the one tool I tell people in lead generation roles to use. It is a game changer."
          </p>
          <footer className="mt-3 text-sm text-muted-ink">
            — Matt Williams, Audience & Growth Insights Manager, HLTH
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
