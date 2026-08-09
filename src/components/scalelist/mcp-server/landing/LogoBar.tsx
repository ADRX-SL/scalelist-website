type Logo = {
  name: string;
  src: string;
  caseStudy?: string;
};

const LOGOS: Logo[] = [
  { name: "Cloudera", src: "https://scalelist.com/wp-content/uploads/2026/03/cloudera-grayscale.webp" },
  { name: "HLTH", src: "https://scalelist.com/wp-content/uploads/2026/04/hlth-logo.png", caseStudy: "https://scalelist.com/hlth/" },
  { name: "Eleven Labs", src: "https://scalelist.com/wp-content/uploads/2026/03/elevenlab-grayscale.webp" },
  { name: "Lemlist", src: "https://scalelist.com/wp-content/uploads/2026/04/lemlist-logo.jpg" },
  { name: "BD", src: "https://scalelist.com/wp-content/uploads/2026/03/bd-grayscale.webp", caseStudy: "https://scalelist.com/becton-dickinson/" },
  { name: "Deloitte", src: "https://scalelist.com/wp-content/uploads/2026/04/deloitte-logo.png" },
  { name: "MongoDB", src: "https://scalelist.com/wp-content/uploads/2026/04/mongodb-logo.png" },
  { name: "Cyngn", src: "https://scalelist.com/wp-content/uploads/2026/04/cyngn-logo.png" },
  { name: "Oracle NetSuite", src: "https://scalelist.com/wp-content/uploads/2026/03/nesuite-grayscale.webp" },
  { name: "Tangentia", src: "https://scalelist.com/wp-content/uploads/2026/04/tangentia-logo.png" },
  { name: "Barbri", src: "https://scalelist.com/wp-content/uploads/2026/04/barbari-logo.png" },
  { name: "Fluentbe", src: "https://scalelist.com/wp-content/uploads/2026/04/fluentbe-logo.png" },
  { name: "Qlerify", src: "https://scalelist.com/wp-content/uploads/2026/04/qlerify-logo.png" },
  { name: "Growth Labz", src: "https://scalelist.com/wp-content/uploads/2026/04/growth-labz-logo.jpg", caseStudy: "https://scalelist.com/growth-labz/" },
  { name: "Lumin.ai", src: "https://scalelist.com/wp-content/uploads/2026/04/luminai-logo.png" },
  { name: "WeatherShield", src: "https://scalelist.com/wp-content/uploads/2026/04/weathershield-logo.png" },
];

export function LogoBar() {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by Ops/Sales teams at leading B2B companies
        </p>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS.map((l) => (
            <div key={l.name} className="relative flex h-16 items-center justify-center">
              <img
                src={l.src}
                alt={`${l.name} logo — Scalelist customer`}
                loading="lazy"
                className="max-h-10 w-auto max-w-[120px] object-contain opacity-70 grayscale transition hover:opacity-100"
              />
              {l.caseStudy && (
                <a
                  href={l.caseStudy}
                  className="absolute -top-2 right-0 inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Case Study
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}