import { useState } from "react";

type Row = { name: string; color: string; email: number | null; phone: number | null };

const DATA: Record<string, Row[]> = {
  "NORTH AMERICA": [
    { name: "Scalelist", color: "bg-brand", email: 92, phone: 87 },
    { name: "Apollo", color: "bg-amber-400", email: 77, phone: 50 },
    { name: "Lead Magic", color: "bg-fuchsia-400", email: 46, phone: 64 },
    { name: "Prospeo", color: "bg-rose-400", email: 42, phone: 75 },
    { name: "Findymail", color: "bg-emerald-400", email: 87, phone: 32 },
    { name: "Hunter", color: "bg-orange-400", email: 57, phone: null },
    { name: "PDL", color: "bg-pink-400", email: 54, phone: 48 },
    { name: "Icypeas", color: "bg-sky-400", email: 76, phone: null },
  ],
  EMEA: [
    { name: "Scalelist", color: "bg-brand", email: 89, phone: 81 },
    { name: "Apollo", color: "bg-amber-400", email: 68, phone: 41 },
    { name: "Lead Magic", color: "bg-fuchsia-400", email: 41, phone: 55 },
    { name: "Prospeo", color: "bg-rose-400", email: 38, phone: 68 },
    { name: "Findymail", color: "bg-emerald-400", email: 79, phone: 28 },
    { name: "Hunter", color: "bg-orange-400", email: 52, phone: null },
    { name: "PDL", color: "bg-pink-400", email: 47, phone: 39 },
    { name: "Icypeas", color: "bg-sky-400", email: 71, phone: null },
  ],
  APAC: [
    { name: "Scalelist", color: "bg-brand", email: 84, phone: 73 },
    { name: "Apollo", color: "bg-amber-400", email: 61, phone: 34 },
    { name: "Lead Magic", color: "bg-fuchsia-400", email: 35, phone: 47 },
    { name: "Prospeo", color: "bg-rose-400", email: 31, phone: 58 },
    { name: "Findymail", color: "bg-emerald-400", email: 72, phone: 21 },
    { name: "Hunter", color: "bg-orange-400", email: 44, phone: null },
    { name: "PDL", color: "bg-pink-400", email: 39, phone: 32 },
    { name: "Icypeas", color: "bg-sky-400", email: 64, phone: null },
  ],
};

export function ComparisonSection() {
  const [region, setRegion] = useState<keyof typeof DATA>("NORTH AMERICA");
  const rows = DATA[region];

  return (
    <section className="bg-dark-bg py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-semibold md:text-5xl">The most accurate data</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-dark-border bg-white/[0.02] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Head-to-head comparison</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">PICK A REGION</h3>

            <div className="mt-5 flex items-center justify-between">
              <div className="inline-flex rounded-full bg-white/5 p-1 text-xs">
                {(Object.keys(DATA) as Array<keyof typeof DATA>).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`rounded-full px-3 py-1.5 font-medium transition ${
                      region === r ? "bg-brand text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <a href="#" className="text-xs text-brand hover:underline">See how we perform against competitors</a>
            </div>

            <div className="mt-6 grid grid-cols-[1.2fr_1fr_1fr] gap-3 border-b border-dark-border pb-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
              <div>Provider</div>
              <div>Email coverage</div>
              <div>Phone coverage</div>
            </div>

            <ul className="divide-y divide-dark-border">
              {rows.map((row) => (
                <li key={row.name} className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-black ${row.color}`}>
                      {row.name[0]}
                    </span>
                    <span className={`text-sm ${row.name === "Scalelist" ? "font-semibold text-brand" : "text-white/85"}`}>
                      {row.name}
                    </span>
                  </div>
                  <Bar value={row.email} color={row.color} />
                  <Bar value={row.phone} color={row.color} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Sales Teams Winning with Scalelist's Data</h4>
            <div className="mt-4 space-y-4">
              <Testimonial
                quote="I love Scalelist — cannot recommend it enough. It does everything you need it to do really well. Easy to use and navigate, and the team is always there to lend a hand."
                name="Chris Hackett"
                title="CEO & Founder @ Firm Growth"
              />
              <Testimonial
                quote="We use Scalelist every day. It's a really good product that helps us find our prospects' emails and phone numbers."
                name="Baptiste Graffin"
                title="VP of Sales APAC @ Happydemics"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar({ value, color }: { value: number | null; color: string }) {
  if (value === null) {
    return <div className="text-xs text-white/40">N/A</div>;
  }
  return (
    <div className="flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="w-9 text-right text-xs text-white/80">{value}%</span>
    </div>
  );
}

function Testimonial({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="rounded-xl border border-dark-border bg-white/[0.03] p-5">
      <p className="text-sm leading-relaxed text-white/80 italic">"{quote}"</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-brand/30" />
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/60">{title}</p>
        </div>
      </div>
    </div>
  );
}
