const REVIEWS = [
  {
    quote:
      "I love Scalelist — cannot recommend it enough. It does EVERYTHING you need it to do really well. Easy to use and navigate, and Arnaud and the team are always there to lend a hand. Built by people who really care about their product.",
    name: "Chris Hackett",
    title: "CEO & Founder @ Firm Growth",
  },
  {
    quote:
      "We use Scalelist every day. It's a really good product that helps us find our prospects' emails and phone numbers.",
    name: "Baptiste Graffin",
    title: "VP of Sales APAC @ Happydemics",
  },
  {
    quote:
      "Perfect for small to medium teams who want to start quickly. Verification is prioritised over volume, so it's also strong for protecting data and domains.",
    name: "James Donaldson",
    title: "Founder & Director @ Stakki",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#FAF7F1] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Loved by sales teams that ship.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="sl-reveal flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-7 shadow-sm"
            >
              <blockquote className="text-base leading-relaxed text-foreground/85">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                >
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-bold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}