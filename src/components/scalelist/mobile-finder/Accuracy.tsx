import chrisHackettImg from "@/assets/mobile-finder/chris-hackett.webp";
import baptisteGraffinImg from "@/assets/mobile-finder/baptiste-graffin.webp";
import iconApollo from "@/assets/mobile-finder/icon-apollo.png";
import iconZoomInfo from "@/assets/mobile-finder/icon-zoominfo.png";
import iconLusha from "@/assets/mobile-finder/icon-lusha.png";
import iconProspeo from "@/assets/mobile-finder/icon-prospeo.png";
import iconFullenrich from "@/assets/mobile-finder/icon-fullenrich.png";
import iconScalelist from "@/assets/mobile-finder/icon-scalelist.png";

const competitors = [
  { name: "Apollo", value: 78, logo: iconApollo },
  { name: "ZoomInfo", value: 69, logo: iconZoomInfo },
  { name: "Lusha", value: 83, logo: iconLusha },
  { name: "Prospeo", value: 72, logo: iconProspeo },
  { name: "Fullenrich", value: 84, logo: iconFullenrich },
  { name: "Scalelist", value: 95, highlight: true, logo: iconScalelist },
];

const MAX_BAR_HEIGHT = 220;

const DataCoverageChart = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold">
        Data Coverage
      </p>
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-white">up to 95%</span>
        <span className="text-sm text-gray-400">Verified emails + direct dials</span>
      </div>
      <button
        className="text-sm font-bold text-chart-link hover:underline cursor-pointer bg-transparent border-none p-0 transition-colors hover:text-chart-link-hover"
        onClick={() => {}}
      >
        See how we perform against competitors
      </button>

      <div className="flex items-end gap-6 mt-6">
        {competitors.map((c) => {
          const barHeight = (c.value / 100) * MAX_BAR_HEIGHT;
          const isHighlight = !!c.highlight;

          return (
            <div key={c.name} className="flex flex-col items-center" style={{ width: isHighlight ? 56 : 48 }}>
              <img src={c.logo} alt={c.name} className="object-contain mb-2" style={{ width: isHighlight ? 40 : 34, height: isHighlight ? 40 : 34 }} />
              <span
                className={`text-xs mb-1 ${
                  isHighlight ? "text-white font-bold" : "text-gray-400 font-semibold"
                }`}
              >
                {c.value}%
              </span>
              <div
                className={`w-full rounded-sm ${isHighlight ? "bg-chart-bar-highlight" : "bg-chart-bar"}`}
                style={{ height: `${barHeight}px` }}
              />
            </div>
          );
        })}
      </div>
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
            <DataCoverageChart />
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
                avatar={chrisHackettImg}
              />
              <TestimonialCard
                quote="We use Scalelist everyday. It's a really good product that helps us find our prospects' emails and phone numbers."
                name="Baptiste Graffin"
                role="VP of Sales APAC @ Happydemics"
                avatar={baptisteGraffinImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accuracy;
