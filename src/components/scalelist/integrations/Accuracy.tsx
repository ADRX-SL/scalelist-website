import { Quote } from "lucide-react";
import chrisHackettImg from "@/assets/integrations/chris-hackett.png";
import baptisteGraffinImg from "@/assets/integrations/baptiste-graffin.png";

const BarChart = () => {
  const competitors = [
    { name: "COMP 1", value: 80 },
    { name: "COMP 2", value: 71 },
    { name: "COMP 3", value: 85 },
    { name: "COMP 4", value: 75 },
    { name: "COMP 5", value: 87 },
    { name: "SCALELIST", value: 95, highlight: true },
  ];

  return (
    <div className="flex items-end justify-between gap-3" style={{ height: 220 }}>
      {competitors.map((c) => (
        <div key={c.name} className="flex flex-1 flex-col items-center gap-2">
          <span className={`text-sm font-semibold ${c.highlight ? "text-white" : "text-gray-300"}`}>
            {c.value}%
          </span>
          <div className="relative w-full flex justify-center" style={{ height: 160 }}>
            <div
              className={`w-full max-w-[60px] rounded-t-md ${c.highlight ? "bg-primary" : "bg-white/10"}`}
              style={{ height: `${(c.value / 100) * 160}px`, marginTop: "auto" }}
            />
          </div>
          <span className={`text-[10px] font-semibold tracking-wider ${c.highlight ? "text-white" : "text-gray-500"}`}>
            {c.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}) => (
  <div className="rounded-xl bg-white/5 p-6">
    <p className="mb-4 text-sm italic text-gray-300">"{quote}"</p>
    <div className="flex items-center gap-3">
      {avatar && (
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
      )}
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const Accuracy = () => {
  return (
    <section className="bg-brand-dark-section py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Join 7,000+ companies using Scalelist
        </p>
        <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight text-white">
          The most accurate data
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Data coverage */}
          <div className="rounded-2xl bg-white/5 p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Data coverage</p>
            <div className="mb-8 flex items-baseline gap-4">
              <p className="text-4xl font-extrabold text-white">up to 95%</p>
              <p className="text-sm text-gray-400">Verified emails + direct dials</p>
            </div>
            <p className="mb-8 text-sm text-gray-400">
              See how we perform against competitors. <span className="inline-block">→</span>
            </p>
            <BarChart />
          </div>

          {/* Right - Testimonials */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Sales Teams Winning with Scalelist's Data
            </h3>
            <div className="space-y-4">
              <TestimonialCard
                quote="I love Scalelist — Cannot recommend it enough. It does EVERYTHING you need it to do really well. Easy to use/ navigate and Arnaud and colleagues are always there to lend a hand. Built by people who really care about their product."
                name="Chris Hackett"
                role="CEO & Founder @ Firm Growth"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              />
              <TestimonialCard
                quote="We use Scalelist everyday. It's a really good product that helps us find our prospects' emails and phone numbers."
                name="Baptiste Graffin"
                role="VP of Sales APAC @ Happydemics"
                avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accuracy;
