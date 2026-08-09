const STATS = [
  { v: "up to 95%", l: "B2B email & mobile coverage worldwide" },
  { v: "99%", l: "email accuracy" },
  { v: "Weekly", l: "data refresh" },
];

export function StatsBand() {
  return (
    <section className="bg-[#0b1220] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.l} className="sl-reveal text-center">
              <div className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                {s.v}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-widest text-white/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-white/40">[CONFIRM_STATS]</p>
      </div>
    </section>
  );
}