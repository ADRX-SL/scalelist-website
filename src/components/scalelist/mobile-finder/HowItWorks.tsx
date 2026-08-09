import { Globe, Scissors, Bookmark, Play, ChevronDown, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import andreaRiley from "@/assets/mobile-finder/andrea-riley.png";
import professionalCover from "@/assets/mobile-finder/professional-cover.png";
import scalelistIcon from "@/assets/mobile-finder/scalelist-icon.png";

const HowItWorks = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Get the right mobile number for any prospect, wherever they are.
        </h2>

        {/* Two Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Find mobile numbers from CSV */}
          <div className="flex flex-col rounded-2xl bg-card p-8">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Find mobile numbers from CSV
              </h3>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Upload a CSV with <span className="font-semibold text-foreground">names and companies</span> to get verified mobile numbers.
            </p>

            {/* Illustration: Data table */}
            <div className="flex-1 overflow-x-auto rounded-xl bg-background p-4">
              <table className="w-full text-xs text-foreground">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-2 pr-3 font-medium">LinkedIn URL</th>
                    <th className="pb-2 pr-3 font-medium">Job Title</th>
                    <th className="pb-2 pr-3 font-medium">Company</th>
                    <th className="pb-2 pr-3 font-medium">Email</th>
                    <th className="pb-2 font-medium">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-3">Maya Kincaid</td><td className="py-2 pr-3">CEO</td><td className="py-2 pr-3">Aivanta</td><td className="py-2 pr-3">maya@aivanta.ai</td><td className="py-2">+14125587342</td></tr>
                  <tr><td className="py-2 pr-3">Lucas Moreno</td><td className="py-2 pr-3">Managing Partner</td><td className="py-2 pr-3">RevForge Labs</td><td className="py-2 pr-3">lucas@revforge.com</td><td className="py-2">+13109764215</td></tr>
                  <tr><td className="py-2 pr-3">Matteo Ricci</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Verbyte</td><td className="py-2 pr-3">matteo@verbyte.io</td><td className="py-2">+16468952317</td></tr>
                  <tr><td className="py-2 pr-3">Rohan Patel</td><td className="py-2 pr-3">Co-Founder and CEO</td><td className="py-2 pr-3">Lumyx</td><td className="py-2 pr-3">rohan@lumyx.ai</td><td className="py-2">+12068973455</td></tr>
                  <tr><td className="py-2 pr-3">Jonas Keller</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Nordstack</td><td className="py-2 pr-3">jonas@nordstack.com</td><td className="py-2">+15123894601</td></tr>
                  <tr><td className="py-2 pr-3">Elina Petrova</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Fluxera Finance</td><td className="py-2 pr-3">elina@fluxera.ai</td><td className="py-2">+13478129564</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Find mobile numbers from social */}
          <div className="flex flex-col rounded-2xl bg-card p-8">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Find mobile numbers from social
              </h3>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Use our Chrome extension to get mobile numbers from social media and websites in one click.
            </p>

            {/* Illustration: Browser mockup with extension overlay */}
            <div className="relative flex-1 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Browser window */}
                <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden h-full">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-primary/30" />
                      <div className="h-3 w-3 rounded-full bg-primary/20" />
                      <div className="h-3 w-3 rounded-full bg-primary/15" />
                    </div>
                    <div className="ml-4 flex-1 rounded-md bg-gray-200 px-3 py-1 text-xs text-muted-foreground" />
                    <img src={scalelistIcon} alt="Scalelist" className="h-6 w-6 rounded" />
                  </div>
                  {/* Page content - LinkedIn-like profile */}
                  <div className="p-0">
                    {/* Cover area */}
                    <div className="h-20 relative">
                      <img src={professionalCover} alt="" className="h-full w-full object-cover" />
                      <div className="absolute -bottom-14 left-4">
                        <div className="h-32 w-32 rounded-full border-2 border-white overflow-hidden relative">
                          <img src={andreaRiley} alt="Andrea Riley" className="h-full w-full object-cover" />
                          <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                        </div>
                      </div>
                    </div>
                    {/* Profile info */}
                    <div className="px-4 pt-20 pb-5">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-sm text-foreground">Andrea Riley</p>
                        <span className="text-[10px] text-muted-foreground">1st</span>
                        <span className="rounded border border-border px-1.5 py-0.5 text-[8px] text-muted-foreground">Connected: 2/25/2026</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
                      <div className="flex items-center gap-3 mt-1.5 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" />San Francisco Bay Area</span>
                        <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5" />500+ connections</span>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Button size="sm" className="rounded-full px-4 text-xs gap-1">
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full px-4 text-xs border-primary text-primary gap-1">
                          <Scissors className="h-3 w-3" /> Export lead
                        </Button>
                        <span className="text-muted-foreground text-lg leading-none">···</span>
                      </div>
                      <div className="flex items-center gap-2 mt-4 text-[10px] text-muted-foreground">
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
                <div className="absolute right-0 w-56 rounded-xl border border-border bg-white shadow-2xl overflow-hidden z-10" style={{ top: '2rem' }}>
                  <div className="px-3 pt-3 pb-2">
                    <div className="flex items-start justify-between mb-2">
                      <div className="h-8 w-8 rounded-full shrink-0 overflow-hidden">
                        <img src={andreaRiley} alt="Andrea Riley" className="h-full w-full object-cover" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        <Scissors className="h-3 w-3 text-muted-foreground" />
                        <Bookmark className="h-3 w-3 text-muted-foreground" />
                        <span className="rounded bg-primary/10 px-1 text-[7px] font-bold text-primary">FREE</span>
                      </div>
                    </div>
                    <p className="font-bold text-xs text-foreground">Andrea Riley</p>
                    <p className="text-[10px] text-muted-foreground">Sales Director at n8N</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">San Francisco Bay Area</p>
                  </div>

                  <div className="px-3 py-1.5 flex items-center gap-1.5">
                    <div className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-[10px] text-muted-foreground flex-1">
                      <Scissors className="h-2.5 w-2.5" />
                      <span>Push to Hubspot</span>
                      <ChevronDown className="h-2.5 w-2.5 ml-auto" />
                    </div>
                    <Button size="sm" className="rounded-lg px-2 py-1 text-[10px] gap-1 h-auto">
                      <Play className="h-2.5 w-2.5 fill-primary-foreground" /> Add to list
                    </Button>
                  </div>

                  <div className="px-3 py-1.5">
                    <p className="text-[9px] font-semibold text-muted-foreground mb-0.5 flex items-center gap-1">
                      Contact details <ChevronDown className="h-2 w-2" />
                    </p>
                    <p className="text-[10px] font-medium text-primary">andrea@n8n.com</p>
                    <p className="text-[10px] text-foreground mt-0.5">+1 78 617 74 86</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
