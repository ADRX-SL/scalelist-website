import { Pill } from "@/components/scalelist/icp-sales-marketing/site/Pill";
import { UploadMockup } from "@/components/scalelist/icp-sales-marketing/site/mockups";

export function WhyScalelist() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <Pill>Why Scalelist</Pill>
        <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          <span className="block">From hours of manual research</span>
          <span className="block">to verified contact lists in minutes.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-ink">
          Scalelist helps you build verified prospect lists fast and push contacts directly to your CRM.
        </p>
      </div>

      <div className="mt-14 flex justify-center">
        <div className="w-full max-w-[720px]">
          <Card mockup={<UploadMockup />} title="Reach decision-makers faster"
            body="Manually copying contact info from social profiles wastes hours your team could spend selling. Scalelist finds verified emails and direct mobile numbers in one step so reps can start conversations the same day." />
        </div>
      </div>
    </section>
  );
}

function Card({ mockup, title, body }: { mockup: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-brand-soft to-white p-8 ring-1 ring-border/60">
      <div className="rounded-2xl">{mockup}</div>
      <h3 className="mt-8 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-ink">{body}</p>
    </div>
  );
}
