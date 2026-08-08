import { CaseStudyPill } from "./CaseStudyPill";
import { Wordmark } from "./Wordmark";

type Logo = { name: string; caseStudy?: boolean; style?: string };

const ROW1: Logo[] = [
  { name: "CLOUDERA", style: "font-black tracking-wider" },
  { name: "hlth", caseStudy: true, style: "font-black lowercase text-lg" },
  { name: "Eleven Labs", style: "font-bold" },
  { name: "lemlist", style: "font-bold lowercase" },
  { name: "BD", caseStudy: true, style: "font-black text-xl tracking-tight" },
  { name: "Deloitte.", style: "font-bold" },
  { name: "MongoDB.", style: "font-bold" },
  { name: "CYNGN", style: "font-black tracking-widest" },
];

const ROW2: Logo[] = [
  { name: "NetSuite", style: "font-bold" },
  { name: "Tangentia", style: "font-semibold italic" },
  { name: "barbri", style: "font-black lowercase" },
  { name: "fluentbe.com", style: "font-semibold" },
  { name: "Qlerify", style: "font-bold" },
  { name: "Growth Labz", caseStudy: true, style: "font-semibold" },
  { name: "Lumin.ai", style: "font-semibold" },
  { name: "WeatherShield", style: "font-semibold tracking-wide" },
];

function LogoCell({ logo }: { logo: Logo }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Wordmark name={logo.name} className={`opacity-70 ${logo.style ?? ""}`} />
      {logo.caseStudy && <CaseStudyPill />}
    </div>
  );
}

export function LogoStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-center text-sm font-medium text-muted-ink">
        Trusted by Sales and Marketing teams at leading B2B companies
      </p>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-8">
        {ROW1.map((l) => <LogoCell key={l.name} logo={l} />)}
        {ROW2.map((l) => <LogoCell key={l.name} logo={l} />)}
      </div>
    </section>
  );
}
