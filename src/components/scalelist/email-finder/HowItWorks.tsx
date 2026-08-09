import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import featureProfilesImg from "@/assets/email-finder/professional-email.jpg";
import featureBulkImg from "@/assets/email-finder/feature-bulk.webp";
import featureApiImg from "@/assets/email-finder/feature-api.jpg";

type Step = 1 | 2 | 3;

const steps: {
  step: Step;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}[] = [
  {
    step: 1,
    label: "Search on Professional Profiles",
    title: "Search on Professional Profiles",
    description:
      "Find verified emails on Professional profiles instantly. Push leads to your CRM, CSV, or the tool of your choice in one-click.",
    bullets: [
      "Find verified emails and mobile numbers instantly",
      "Export or sync to CRM, CSV, or any tool in one click",
    ],
    image: featureProfilesImg,
  },
  {
    step: 2,
    label: "Bulk Email Search",
    title: "Bulk Email Search",
    description:
      "Upload a list of names and companies to find verified email addresses in bulk. Export clean, structured contact information with one click, ready for your outreach or CRM.",
    bullets: [
      "Find emails in bulk",
      "Export to CSV or Excel",
      "Get verified professional email data",
    ],
    image: featureBulkImg,
  },
  {
    step: 3,
    label: "API",
    title: "API",
    description:
      "Power your workflow with Scalelist's robust API. Find and verify email addresses from any data, discover new contacts, and sync information at scale with seamless integration.",
    bullets: [
      "Enrich any data source",
      "Scale effortlessly with automation",
      "Get fast and reliable results",
    ],
    image: featureApiImg,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<Step>(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((s) => (s === 3 ? 1 : ((s + 1) as Step)));
          return 0;
        }
        return prev + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [activeStep]);

  const handleStepClick = (step: Step) => {
    setActiveStep(step);
    setProgress(0);
  };

  const current = steps.find((s) => s.step === activeStep)!;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Email Finder: How You Can Use It
        </h2>

        {/* Tab Navigation */}
        <div className="mb-10 grid grid-cols-3 gap-0">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => handleStepClick(s.step)}
              className="relative flex items-center gap-2 pb-3 pt-1 text-left"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${
                  activeStep === s.step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s.step}
              </span>
              <span
                className={`text-sm font-medium ${
                  activeStep === s.step ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
                {activeStep === s.step && (
                  <div
                    className="h-full bg-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="rounded-2xl bg-card p-8 md:p-12">
          <div className="grid items-start gap-8 md:grid-cols-2">
            {/* Left: Text */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {current.title}
              </h3>
              <p className="mb-8 text-muted-foreground">{current.description}</p>

              {/* Bullets */}
              <ul className="space-y-3">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="rounded-2xl bg-white p-4">
              <img
                src={current.image}
                alt={current.title}
                className="w-full rounded-xl block"
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">
            <Button size="lg" className="gap-2 rounded-full px-8">
              Try for free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com">
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-white text-foreground border border-border">
              Talk to sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;