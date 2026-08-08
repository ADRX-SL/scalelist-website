import { Eyebrow } from "./Eyebrow";

type Row = {
  videoSrc: string;
  videoTitle: string;
  title: string;
  paragraph: string;
  bullets: string[];
  videoLeft?: boolean;
};

const ROWS: Row[] = [
  {
    videoSrc: "https://www.youtube-nocookie.com/embed/4ZZ2qZ6BJZw",
    videoTitle: "Find phone numbers for leads with Claude",
    title: "Find direct phone numbers for your leads in Claude",
    paragraph:
      "Connect the Scalelist MCP to Claude, build a target list in the chat, then ask Claude to find direct, verified phone numbers for every contact — no exports, no second tool.",
    bullets: [
      "Build a company and decision-maker list straight from Claude",
      "Pull direct, verified mobile numbers in bulk, right in the chat",
      "Only spend credits on numbers that are actually found",
    ],
  },
  {
    videoSrc: "https://www.youtube-nocookie.com/embed/I-o2zLIkkao",
    videoTitle: "Find verified emails for leads with Claude",
    title: "Find verified work emails for your leads in Claude",
    paragraph:
      "Ask Claude to enrich your list with verified work emails — flagged valid, risky, or not found — then export to CSV or Google Drive without leaving the conversation.",
    bullets: [
      "Turn a company list into a clean contact spreadsheet",
      "Get verified emails flagged valid or risky; misses cost nothing",
      "Export to CSV or Google Drive in one step",
    ],
  },
  {
    videoSrc: "https://www.youtube-nocookie.com/embed/2mO-Pqvsdx8",
    videoTitle: "Enrich a CSV with emails and phones in Claude",
    title: "Enrich a whole CSV with emails and phones in Claude",
    paragraph:
      "Drop a CSV of names and companies into Claude and ask Scalelist to find verified work emails and direct phone numbers for the entire list in one run. No manual lookups, no enterprise tool.",
    bullets: [
      "Upload a CSV; get verified emails and mobiles back in one pass",
      "Every contact flagged valid, risky, or not found; misses cost nothing",
      "Download as CSV or Excel, or push to Google Drive or your CRM",
    ],
    videoLeft: false,
  },
];

export function HowYouCanUseIt() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>In Claude</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            How you can use Scalelist in Claude
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Find phone numbers and verified emails for your leads — without leaving the chat.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10 md:gap-16">
          {ROWS.map((row, i) => {
            const videoLeft = row.videoLeft ?? (i % 2 === 1);
            const textBlock = (
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {row.paragraph}
                </p>
                <ul className="mt-6 space-y-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
            const videoBlock = (
              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                <div className="relative aspect-video w-full">
                  <iframe
                    src={row.videoSrc}
                    title={row.videoTitle}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            );
            return (
              <div
                key={row.videoSrc}
                className="sl-reveal grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-12 md:p-10"
              >
                {videoLeft ? (
                  <>
                    {videoBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {videoBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}