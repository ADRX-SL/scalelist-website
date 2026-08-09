import { User, Link, Globe, FileSpreadsheet, CheckCircle } from "lucide-react";

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
          <div className="rounded-2xl bg-card p-8">
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

            {/* Illustration: CSV flow diagram */}
            <div className="flex items-center justify-center rounded-xl bg-background p-6">
              <div className="flex items-center gap-6">
                {/* CSV file icon */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-14 w-12 items-center justify-center rounded-lg border border-border bg-primary/5">
                    <FileSpreadsheet className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">CSV, XLS, TXT</span>
                </div>

                {/* Dashed connector */}
                <div className="flex flex-col items-center gap-3">
                  {/* Row 1 */}
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 border-t border-dashed border-border" />
                    <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">John Doe</span>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 border-t border-dashed border-border" />
                    <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
                      <Link className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">monday.com</span>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 border-t border-dashed border-border" />
                    <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">facebook.com/john</span>
                    </div>
                  </div>
                </div>

                {/* Arrow + Result */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 border-t border-dashed border-border" />
                  <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">+1 (312) 555-0198</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Find mobile numbers from social */}
          <div className="rounded-2xl bg-card p-8">
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

            {/* Illustration: Chrome extension popup */}
            <div className="flex items-center justify-center rounded-xl bg-background p-6">
              <div className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
                  <div className="flex gap-1">
                    <span className="text-muted-foreground">←</span>
                    <span className="text-muted-foreground">→</span>
                  </div>
                  <div className="flex-1 rounded-full bg-white px-3 py-1 text-xs text-muted-foreground">
                    Search Google or type a URL
                  </div>
                </div>
                {/* Extension popup content */}
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Daniel Scott</p>
                      <p className="text-xs text-muted-foreground">Support Advisor at Zapier</p>
                      <p className="text-xs text-muted-foreground">Los Angeles, California</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>📧</span>
                      <span>danielscott@zapier.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>📱</span>
                      <span>+41 78 617 74 86</span>
                    </div>
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
