import { CTAButton } from "@/components/scalelist/icp-sales-marketing/site/CTAButton";
import { JobChangeMockup } from "@/components/scalelist/icp-sales-marketing/site/mockups";

export function MonitoringDark() {
  return (
    <section className="bg-dark-bg py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">✦ Monitoring</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="block">Keep your CRM clean</span>
            <span className="block">so your team can focus on <span className="text-brand">revenue.</span></span>
          </h2>
          <p className="mt-6 text-white/70">
            Outdated contacts, job changes, and invalid emails pile up in your CRM over time. Your reps end up emailing people who left their company months ago — wasting effort and damaging deliverability.
          </p>
          <p className="mt-4 text-white/70">
            Scalelist Monitoring automatically tracks your contacts for changes and flags outdated data before it becomes a problem, so your team always works from accurate information.
          </p>
          <div className="mt-8">
            <CTAButton href="https://scalelist.com/monitoring/" variant="primary">Learn about Monitoring</CTAButton>
          </div>
        </div>
        <div>
          <JobChangeMockup />
        </div>
      </div>
    </section>
  );
}
