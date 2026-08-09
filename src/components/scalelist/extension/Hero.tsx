import { Star, ArrowRight, Play, ChevronDown, Bookmark, Scissors, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import scalelistIcon from "@/assets/extension/scalelist-icon.png";
import andreaRiley from "@/assets/extension/andrea-riley.png";
import sarahWestwood from "@/assets/extension/sarah-westwood.png";
import professionalCover from "@/assets/extension/professional-cover.png";
import logoElevenlabs from "@/assets/extension/logo-elevenlabs.avif";
import logoCloudera from "@/assets/extension/logo-cloudera.webp";
import logoStripe from "@/assets/extension/logo-stripe.png";
import logoJpmorgan from "@/assets/extension/logo-jpmorgan.webp";
import logoNetsuite from "@/assets/extension/logo-netsuite.webp";
import logoBd from "@/assets/extension/logo-bd.png";
import googleRating from "@/assets/extension/google-rating.png";
import capterraIcon from "@/assets/extension/capterra.png";
const RatingBadge = ({ rating, platform, icon }: { rating: string; platform: string; icon: "google" | "capterra" }) => (
  <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
    {icon === "google" ? (
      <img src={googleRating} alt="Google" className="h-4 w-4 object-contain" />
    ) : (
      <img src={capterraIcon} alt="Capterra" className="h-4 w-4 object-contain" />
    )}
    <span className="font-medium text-foreground">{rating} on {platform}</span>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="relative w-full max-w-md">
    {/* Browser window */}
    <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-primary/30" />
          <div className="h-3 w-3 rounded-full bg-primary/20" />
          <div className="h-3 w-3 rounded-full bg-primary/15" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-gray-200 px-3 py-1 text-xs text-muted-foreground" />
        {/* Scalelist logo in toolbar */}
        <img src={scalelistIcon} alt="Scalelist" className="h-6 w-6 rounded" />
      </div>
      {/* Page content - LinkedIn-like profile */}
      <div className="p-0">
        {/* Cover area */}
        <div className="h-20 relative">
          <img src={professionalCover} alt="" className="h-full w-full object-cover" />
          {/* Profile avatar */}
          <div className="absolute -bottom-14 left-4">
            <div className="h-32 w-32 rounded-full border-2 border-white overflow-hidden relative">
              <img src={andreaRiley} alt="Andrea Riley" className="h-full w-full object-cover" />
              <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            </div>
          </div>
        </div>
        {/* Profile info */}
        <div className="px-4 pt-20 pb-3">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="font-bold text-sm text-foreground">Andrea Riley</p>
            <span className="text-[10px] text-muted-foreground">1st</span>
            <span className="rounded border border-border px-1.5 py-0.5 text-[8px] text-muted-foreground">Connected: 2/25/2026</span>
          </div>
          <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
          <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" />San Francisco Bay Area</span>
            <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5" />500+ connections</span>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-2 mt-2">
            <Button size="sm" className="rounded-full px-4 text-xs gap-1">
              Message
            </Button>
            <Button size="sm" variant="outline" className="rounded-full px-4 text-xs border-primary text-primary gap-1">
              <Scissors className="h-3 w-3" /> Export lead
            </Button>
            <span className="text-muted-foreground text-lg leading-none">···</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-[10px] text-muted-foreground">
            <div className="flex -space-x-1">
              <div className="h-4 w-4 rounded-full bg-primary/20 border border-white" />
              <div className="h-4 w-4 rounded-full bg-primary/30 border border-white" />
            </div>
            <span>82 mutual connections</span>
            <span>·</span>
            <span>2 recent posts on Linkedin</span>
          </div>
        </div>
      </div>
    </div>

    {/* Extension panel - overlaid on right */}
    <div className="absolute top-12 -right-16 w-64 rounded-xl border border-border bg-white shadow-2xl overflow-hidden">
      {/* Profile header with avatar and icons */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="h-10 w-10 rounded-full shrink-0 overflow-hidden">
            <img src={andreaRiley} alt="Andrea Riley" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center gap-1">
            <img src={googleRating} alt="Google" className="h-3.5 w-3.5 object-contain" />
            <Scissors className="h-3.5 w-3.5 text-muted-foreground" />
            <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="rounded bg-primary/10 px-1 text-[8px] font-bold text-primary">FREE</span>
          </div>
        </div>
        <p className="font-bold text-sm text-foreground">Andrea Riley</p>
        <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">San Francisco Bay Area</p>
      </div>

      {/* Push to Hubspot + Add to list */}
      <div className="px-4 py-2 flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground flex-1">
          <Scissors className="h-3 w-3" />
          <span>Push to Hubspot</span>
          <ChevronDown className="h-3 w-3 ml-auto" />
        </div>
        <Button size="sm" className="rounded-lg px-3 py-1.5 text-xs gap-1">
          <Play className="h-3 w-3 fill-primary-foreground" /> Add to list
        </Button>
      </div>

      {/* Contact details */}
      <div className="px-4 py-2">
        <p className="text-[10px] font-semibold text-muted-foreground mb-1 flex items-center gap-1">
          Contact details <ChevronDown className="h-2.5 w-2.5" />
        </p>
        <p className="text-xs font-medium text-primary">andrea@n8n.com</p>
        <p className="text-xs text-foreground mt-0.5">+1 78 617 74 86</p>
      </div>

    </div>
  </div>
);

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
      <section className="relative overflow-hidden pb-16 pt-8">
        <div className="mx-auto max-w-6xl px-6">
          {/* Rating badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <RatingBadge rating="4.8 / 5" platform="Google" icon="google" />
            <RatingBadge rating="4.9 / 5" platform="Capterra" icon="capterra" />
          </div>

          <div className="grid items-start gap-16 lg:grid-cols-[1fr,auto]">
            {/* Left content */}
            <div className="pt-4">
              <h1 className="mb-6 text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-foreground">
                <span className="whitespace-nowrap">Get the best emails and</span><br />
                mobile numbers,<br />
                Anywhere
              </h1>
              <p className="mb-10 max-w-lg text-lg text-muted-foreground">
                Find verified professional emails and phone numbers from professional profiles and any website.
              </p>
              <div className="mb-10 flex flex-wrap items-center gap-4">
                <a href="https://chromewebstore.google.com/detail/email-finder-by-scalelist/lgknneiodddmfbbpaklighafdocbfnme?pli=1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 rounded-full px-8 text-base">
                    Download Chrome Extension <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                    Talk to Sales
                  </Button>
                </a>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/50">
                7000+ companies save time using Scalelist
              </p>
            </div>

            {/* Right - Browser mockup */}
            <div className="flex justify-center lg:justify-end">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero;
