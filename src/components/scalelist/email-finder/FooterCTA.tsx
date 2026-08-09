import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/email-finder/logo-transparent-bg.png";

const FooterCTA = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-card p-12 text-center">
          <img src={logo} alt="Logo" className="mx-auto mb-6 h-14 w-14" />
          <h2 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground">
            Unlock B2B emails &amp;<br />mobile numbers for free
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">
              <Button size="lg" className="rounded-full px-8 text-base">
                Get started for free
              </Button>
            </a>
            <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com">
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 text-base">
                Talk to Sales <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;