import weathershield from "@/assets/customers/logos/weathershield.png";
import casestudyPortrait from "@/assets/customers/casestudy-bd-portrait.jpg";
import growthlabz from "@/assets/customers/logos/growthlabz.jpg";
import mongodb from "@/assets/customers/logos/mongodb.png";
import cyngn from "@/assets/customers/logos/cyngn.png";
import deloitte from "@/assets/customers/logos/deloitte.png";
import hlth from "@/assets/customers/logos/hlth.png";
import luminai from "@/assets/customers/logos/luminai.png";
import elevenlabs from "@/assets/customers/logos/elevenlabs.png";
import cloudera from "@/assets/customers/logos/cloudera.png";
import netsuite from "@/assets/customers/logos/netsuite.png";
import bd from "@/assets/customers/logos/bd.png";
import tangentia from "@/assets/customers/logos/tangentia.png";
import barbri from "@/assets/customers/logos/barbri.jpg";
import fluentbe from "@/assets/customers/logos/fluentbe.avif";
import qlerify from "@/assets/customers/logos/qlerify.png";

type Logo = { name: string; src?: string; wordmark?: string };

const logos: Logo[] = [
  { name: "MongoDB", src: mongodb },
  { name: "Deloitte", src: deloitte },
  { name: "CYNGN", src: cyngn },
  { name: "hlth", src: hlth },
  { name: "ElevenLabs", src: elevenlabs },
  { name: "Cloudera", src: cloudera },
  { name: "Oracle NetSuite", src: netsuite },
  { name: "BD", src: bd },
  { name: "Lumin.ai", src: luminai },
  { name: "WeatherShield Roofing Group", src: weathershield },
  { name: "Tangentia", src: tangentia },
  { name: "Barbri", src: barbri },
  { name: "Fluentbe", src: fluentbe },
  { name: "Qlerify", src: qlerify },
  { name: "Growthlabz", src: growthlabz },
];

const CustomersBody = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm">
            Customers
          </span>

          <h1 className="mt-10 max-w-5xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The <span style={{ color: "#3C73E7" }}>email/phone finder</span> behind the next generation of B2B Sales
          </h1>

          <p className="mt-8 max-w-xl text-balance text-base text-foreground/70 sm:text-lg">
            Discover how thousands of companies use Scalelist to scale their business.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-6xl md:mt-28">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {logos.map((logo) =>
              logo.src ? (
                <div
                  key={logo.name}
                  className="flex h-16 items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className="max-h-12 w-auto max-w-[160px] object-contain opacity-90 grayscale transition hover:opacity-100"
                  />
                </div>
              ) : (
                <div
                  key={logo.name}
                  className="flex h-16 items-center justify-center"
                >
                  <span className="text-2xl font-bold tracking-tight text-foreground/80">
                    {logo.wordmark}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left content */}
            <div className="flex flex-col justify-center gap-6 p-10 md:p-14 lg:p-16">
              <img
                src={bd}
                alt="BD logo"
                className="h-10 w-auto max-w-[100px] object-contain opacity-70 grayscale"
              />

              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                125 years of Medical expertise / 72k employees worldwide
              </span>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  98% of leads come with valid, usable email addresses
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  How BD enriches thousands of leads per quarter with consistent quality
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
              >
                Read case study <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right image */}
            <div className="flex items-center justify-center p-6 md:p-10">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={casestudyPortrait}
                  alt="BD case study portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-card case studies (HLTH + Growthlabz) */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {/* Card 1 — HLTH */}
            <div className="flex flex-col gap-8 bg-background p-10 md:p-12 lg:p-14">
              <img
                src={hlth}
                alt="HLTH logo"
                className="h-8 w-auto max-w-[110px] object-contain"
              />

              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Leading community for Global Health Innovation
              </span>

              <div className="space-y-3">
                <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  Saved countless days prospecting for 3 global events.
                </p>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  How HLTH uses Scalelist to deliver better events
                </p>
              </div>

              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
              >
                Read case study <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Card 2 — Growthlabz */}
            <div className="flex flex-col gap-8 bg-background p-10 md:p-12 lg:p-14">
              <img
                src={growthlabz}
                alt="Growthlabz logo"
                className="h-10 w-auto max-w-[80px] object-contain"
              />

              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Leading B2B lead generation agency in Europe
              </span>

              <div className="space-y-3">
                <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  A single source of truth for email/phone finding.
                </p>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  How Growthlabz uses Scalelist to change their lists' quality overnight
                </p>
              </div>

              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
              >
                Read case study <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-sm border border-border">
            <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="10" width="14" height="3.5" rx="1.75" transform="rotate(20 4 10)" fill="#3C73E7" />
              <rect x="12" y="18" width="14" height="3.5" rx="1.75" transform="rotate(20 12 18)" fill="#3C73E7" />
            </svg>
          </div>

          <h2 className="mt-10 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Unlock B2B emails & mobile numbers for free
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: "#3C73E7" }}
            >
              Get started for free
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground shadow-sm transition hover:bg-muted"
            >
              Talk to sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};


export default CustomersBody;
