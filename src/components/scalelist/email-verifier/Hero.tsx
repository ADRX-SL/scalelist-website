import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoElevenlabs from "@/assets/email-verifier/logo-elevenlabs.avif";
import logoCloudera from "@/assets/email-verifier/logo-cloudera.webp";
import logoStripe from "@/assets/email-verifier/logo-stripe.png";
import logoJpmorgan from "@/assets/email-verifier/logo-jpmorgan.webp";
import logoNetsuite from "@/assets/email-verifier/logo-netsuite.webp";
import logoBd from "@/assets/email-verifier/logo-bd.png";

const TrustBar = () => {
  const logos = [
    { name: "ElevenLabs", src: logoElevenlabs, height: "h-8" },
    { name: "Cloudera", src: logoCloudera, height: "h-5" },
    { name: "Stripe", src: logoStripe, height: "h-7" },
    { name: "J.P.Morgan", src: logoJpmorgan, height: "h-7" },
    { name: "Oracle NetSuite", src: logoNetsuite, height: "h-8" },
    { name: "BD", src: logoBd, height: "h-7" },
  ];
  return (
    <div className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className={`${logo.height} w-auto object-contain opacity-60 grayscale`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          {/* Icon + Title */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
              Email Verifier
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
            Clean, validate, and optimize your email lists, including catch-alls.
          </p>

          {/* Email Verifier Form */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
            <div className="mb-1 text-center">
              <h2 className="text-xl font-bold text-foreground">Email Verifier</h2>
              <p className="text-sm text-muted-foreground">Check if an email is deliverable</p>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-left text-sm font-semibold text-foreground">Email</p>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="rounded-lg bg-primary px-8 text-base">
                  Verify Email
                </Button>
              </div>
            </div>
          </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">
              <Button size="lg" className="rounded-full px-8 text-base">
                Try for free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com" className="rounded-full border border-border bg-white px-8 py-2.5 text-base font-medium text-accent-foreground hover:bg-muted transition-colors">
              Talk to sales
            </a>
          </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero;
