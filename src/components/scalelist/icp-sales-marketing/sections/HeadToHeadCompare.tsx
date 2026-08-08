import { useState } from "react";

type Row = { name: string; email: number | null; phone: number | null; color: string; mark: string };

const DATA: Record<string, Row[]> = {
  "NORTH AMERICA": [
    { name: "Scalelist", email: 92, phone: 87, color: "bg-brand", mark: "✦" },
    { name: "Apollo", email: 77, phone: 50, color: "bg-yellow-400", mark: "A" },
    { name: "Lead Magic", email: 46, phone: 64, color: "bg-purple-400", mark: "L" },
    { name: "Prospeo", email: 42, phone: 75, color: "bg-rose-400", mark: "P" },
    { name: "Findymail", email: 87, phone: 32, color: "bg-emerald-400", mark: "F" },
    { name: "Hunter", email: 57, phone: null, color: "bg-orange-400", mark: "H" },
    { name: "PDL", email: 54, phone: 48, color: "bg-fuchsia-400", mark: "P" },
    { name: "Icypeas", email: 76, phone: null, color: "bg-sky-400", mark: "I" },
  ],
  EMEA: [
    { name: "Scalelist", email: 89, phone: 82, color: "bg-brand", mark: "✦" },
    { name: "Apollo", email: 64, phone: 41, color: "bg-yellow-400", mark: "A" },
    { name: "Lead Magic", email: 52, phone: 58, color: "bg-purple-400", mark: "L" },
    { name: "Prospeo", email: 48, phone: 69, color: "bg-rose-400", mark: "P" },
    { name: "Findymail", email: 79, phone: 28, color: "bg-emerald-400", mark: "F" },
    { name: "Hunter", email: 61, phone: null, color: "bg-orange-400", mark: "H" },
    { name: "PDL", email: 47, phone: 39, color: "bg-fuchsia-400", mark: "P" },
    { name: "Icypeas", email: 81, phone: null, color: "bg-sky-400", mark: "I" },
  ],
  APAC: [
    { name: "Scalelist", email: 84, phone: 71, color: "bg-brand", mark: "✦" },
    { name: "Apollo", email: 58, phone: 33, color: "bg-yellow-400", mark: "A" },
    { name: "Lead Magic", email: 39, phone: 47, color: "bg-purple-400", mark: "L" },
    { name: "Prospeo", email: 36, phone: 52, color: "bg-rose-400", mark: "P" },
    { name: "Findymail", email: 68, phone: 22, color: "bg-emerald-400", mark: "F" },
    { name: "Hunter", email: 49, phone: null, color: "bg-orange-400", mark: "H" },
    { name: "PDL", email: 51, phone: 41, color: "bg-fuchsia-400", mark: "P" },
    { name: "Icypeas", email: 64, phone: null, color: "bg-sky-400", mark: "I" },
  ],
};

const REGIONS = ["NORTH AMERICA", "EMEA", "APAC"] as const;

export function HeadToHeadCompare() {
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("NORTH AMERICA");
  const rows = DATA[region];

  return (
    <section className="bg-dark-bg py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">The most accurate data</h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Comparison table */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Head-to-head comparison</p>
            <h3 className="mt-2 text-3xl font-black tracking-tight">PICK A REGION</h3>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex rounded-full bg-white/5 p-1 ring-1 ring-white/10">
                {REGIONS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition ${
                      region === r ? "bg-brand text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <a href="#" className="text-xs text-brand underline-offset-2 hover:underline">
                See how we perform against competitors
              </a>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="grid grid-cols-[1.4fr_1.4fr_1.4fr] gap-2 border-b border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                <span>Provider</span>
                <span>Email coverage</span>
                <span>Phone coverage</span>
              </div>
              {rows.map((row, i) => {
                const active = row.name === "Scalelist";
                return (
                  <div
                    key={row.name}
                    className={`grid grid-cols-[1.4fr_1.4fr_1.4fr] items-center gap-2 px-5 py-3 text-sm ${
                      active ? "bg-brand/15" : i % 2 ? "" : "bg-white/[0.015]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-md ${row.color} text-[10px] font-black text-white/90`}>
                        {row.mark}
                      </span>
                      <span className={active ? "font-bold text-brand" : "text-white/85"}>{row.name}</span>
                    </div>
                    <Bar value={row.email} color={row.color} />
                    <Bar value={row.phone} color={row.color} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <p className="text-sm font-semibold text-white/90">Sales Teams Winning with Scalelist's Data</p>
            <div className="mt-4 space-y-4">
              <Testimonial
                quote="I love Scalelist — Cannot recommend it enough. It does EVERYTHING you need it to do really well. Easy to use/navigate and Arnaud and colleagues are always there to lend a hand. Built by people who really care about their product."
                name="Chris Hackett"
                role="CEO & Founder @ Firm Growth"
              />
              <Testimonial
                quote="We use Scalelist everyday. It's a really good product that helps us find our prospects' emails and phone numbers."
                name="Baptiste Graffin"
                role="VP of Sales APAC @ Happydemics"
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
    return (
      <div className="flex items-center">
        <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        <span className="ml-3 w-10 text-right text-xs italic text-white/40">N/A</span>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <div className="h-1.5 flex-1 rounded-full bg-white/10">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="ml-3 w-10 text-right text-xs font-semibold text-white/85">{value}%</span>
    </div>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs italic leading-relaxed text-white/75">"{quote}"</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand/40 to-brand/80" />
        <div>
          <p className="text-xs font-bold text-white">{name}</p>
          <p className="text-[10px] text-white/50">{role}</p>
        </div>
      </div>
    </div>
  );
}
