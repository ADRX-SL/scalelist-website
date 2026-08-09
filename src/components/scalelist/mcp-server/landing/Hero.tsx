import { ArrowRight, Star, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./Eyebrow";
import { CopyField } from "./CopyField";

const SCALELIST_MCP_URL = "https://mcp.scalelist.com/mcp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* faint hero wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[600px] max-w-5xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(212 100% 50% / 0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <Eyebrow>MCP Server for Sales</Eyebrow>
            <span className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" aria-label="Claude logo" role="img" className="h-5 w-5 text-foreground" fill="currentColor">
                <path d="M4.709 15.955l4.72-2.647.079-.23-.079-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.146-.103.018-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.243.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/>
              </svg>
              <svg viewBox="0 0 24 24" aria-label="OpenAI logo" role="img" className="h-5 w-5 text-foreground" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
            </span>
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Your AI agent just learned
            <br />
            <span className="text-primary">how to prospect.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Scalelist is the MCP server for sales — connect it to Claude, ChatGPT, or any MCP
            client and turn your AI assistant into an AI sales assistant that finds, verifies, and
            enriches B2B contacts without leaving the chat.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="group h-14 w-full rounded-full px-8 text-base font-semibold shadow-[0_12px_30px_-10px_hsl(212_100%_50%/0.65)] sm:w-auto"
            >
              <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
                Get started for free
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* connector card */}
          <div className="mt-10 w-full max-w-2xl rounded-2xl border border-border bg-card p-5 text-left shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Paste this URL into your AI connector:
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                <span>How to use</span>
                <a
                  href="https://intercom.help/scalelist/en/articles/15337359-connect-claude-to-scalelist"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect Claude to Scalelist"
                  className="inline-flex items-center justify-center rounded-md p-1 text-foreground transition hover:bg-muted"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M4.709 15.955l4.72-2.647.079-.23-.079-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.146-.103.018-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.243.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/>
                  </svg>
                </a>
                <a
                  href="https://intercom.help/scalelist/en/articles/15338166-connect-chatgpt-to-scalelist"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect ChatGPT to Scalelist"
                  className="inline-flex items-center justify-center rounded-md p-1 text-foreground transition hover:bg-muted"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-3">
              <CopyField value={SCALELIST_MCP_URL} />
            </div>
          </div>

          {/* trust badges */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> 50 free credits
            </li>
            <li className="inline-flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> No credit card
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> GDPR &amp; CCPA compliant
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
              <span className="inline-flex items-center gap-1">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF492C] text-[10px] font-bold text-white">G2</span>
                <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
              </span>
              <span className="font-semibold text-foreground">4.9</span>
              <span className="inline-flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </span>
              <span className="mx-1 h-4 w-px bg-border" />
              <span className="text-muted-foreground">35,000+ users</span>
            </span>
          </div>
        </div>

        {/* hero screenshot placeholder */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -top-10 bottom-10 -z-10 rounded-[3rem]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, hsl(212 100% 50% / 0.15), transparent 70%)",
            }}
          />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/oo_tRgfm7j8"
                title="Scalelist MCP demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}