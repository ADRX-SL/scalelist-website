import { MailCheck, PhoneCall, Filter } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const FEATURES = [
  {
    icon: MailCheck,
    title: "Verified work emails",
    desc: "Triple-checked, <5% bounce rate.",
  },
  {
    icon: PhoneCall,
    title: "Confirmed mobile numbers",
    desc: "Validated against real line ownership.",
  },
  {
    icon: Filter,
    title: "Bad data filtered out",
    desc: "Before it reaches your agent's output.",
  },
];

export function DataQuality() {
  return (
    <section id="product" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sl-reveal">
        <Eyebrow>Data quality</Eyebrow>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Your AI agent is only as good as its data.
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Scalelist finds verified professional emails and mobiles, so fill rates stay high
            where single-database tools have coverage gaps.
          </p>
          <p>
            Every result is verified and the junk is filtered out before it ever reaches your
            agent's output — so your AI sales assistant acts on data you can actually use.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <h3 className="text-center text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
          Feed your agent good data only.
        </h3>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="sl-reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-5 text-lg font-bold text-foreground">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}