import { Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import googleIcon from "@/assets/mobile-finder/google-icon.jpg";

const WeeklyData = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-card p-10 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
              <img src={googleIcon} alt="Google" className="h-3.5 w-3.5 object-contain" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">4.8 Rating</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="font-medium">GDPR Compliant</span>
            </div>
          </div>

          <h2 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground">
            Weekly refreshed data
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard">
              <Button size="lg" className="rounded-full px-8 text-base">
                Get started for free
              </Button>
            </a>
            <a href="https://chromewebstore.google.com/detail/email-finder-by-scalelist/lgknneiodddmfbbpaklighafdocbfnme?pli=1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base text-accent-foreground">
                View all reviews
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyData;
