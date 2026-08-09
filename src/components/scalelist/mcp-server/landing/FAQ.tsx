import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./Eyebrow";

type FAQItem = {
  q: string;
  a: string;
  link?: { label: string; href: string };
};

export const FAQS: FAQItem[] = [
  {
    q: "Which AI clients does the Scalelist MCP server work with?",
    a: "Scalelist works with any MCP-compatible client: Claude (Desktop and web), ChatGPT via its MCP connector, Cursor, and any other AI assistant or agent that supports the Model Context Protocol. Add the Scalelist MCP server once by pasting the connector URL (https://mcp.scalelist.com/mcp) and it's live everywhere you work.",
  },
  {
    q: "What can my AI agent actually do with Scalelist?",
    a: "Once connected, your AI assistant runs your whole prospecting stack from chat: find verified work emails and direct mobile numbers, enrich a CSV or a list of LinkedIn URLs, build lead lists from a plain-English description, map a company's org chart, write personalized outreach, prep meeting briefs, and push enriched contacts to your CRM. It turns Claude or ChatGPT into an AI sales assistant on top of verified B2B data.",
  },
  {
    q: "How accurate is the data?",
    a: "Scalelist verifies every professional email and mobile number before it reaches your agent. Email accuracy is around 99%, bounce rates stay under 5%, and coverage reaches up to 95% of B2B emails and mobiles worldwide. The database is refreshed weekly, so you act on current contacts, not stale ones.",
  },
  {
    q: "How do credits work, and do I pay for misses?",
    a: "You never pay for misses. Credits are only spent when Scalelist returns verified data. If we can't find a valid email or mobile for a contact, that contact is free. Verification is included in the credit, so a valid result is already checked for deliverability.",
  },
  {
    q: "Is my data and my prospects' data handled compliantly?",
    a: "Yes. Scalelist is GDPR and CCPA aligned. Your queries and lists stay private to your workspace, we honor data subject and Do Not Sell requests, and we never sell your prospecting activity. Compliant data is a big part of why teams trust Scalelist as their MCP server for sales.",
  },
  {
    q: "Can it push to my CRM?",
    a: "Yes. From the same chat, your agent pushes enriched contacts straight to your CRM (HubSpot, Salesforce, Pipedrive and others), checks for duplicates first, maps fields, and tags records. No exports, no copy-paste.",
  },
  {
    q: "How do I get set up?",
    a: "Create a free account (50 credits, no credit card), copy your Scalelist MCP URL (https://mcp.scalelist.com/mcp), and paste it into your AI client's connector settings. Authorize, then start asking. Most teams are live in under five minutes.",
  },
  {
    q: "Is Scalelist a good MCP server for sales and marketing?",
    a: "Yes. Scalelist is purpose-built as the MCP server for sales and marketing teams. It verifies every professional email and mobile number before it reaches your AI assistant, coverage reaches up to 95% worldwide where single-database tools fall short, and you only spend credits on verified hits. That combination makes it a strong fit for outbound, ABM, and RevOps.",
  },
  {
    q: "Can I use Scalelist as an AI sales assistant?",
    a: "That's exactly the point. Connect Scalelist to Claude, ChatGPT, or any MCP client and it becomes an AI sales assistant that can prospect, enrich, write outreach, prep meetings, and push to your CRM, all from chat and all on top of verified, weekly-refreshed B2B data.",
  },
  {
    q: "How do I use Scalelist for sales in ChatGPT?",
    a: "In ChatGPT's connector settings, add a new MCP connector and paste your Scalelist MCP URL (https://mcp.scalelist.com/mcp), then authorize. ChatGPT can now find verified emails and mobiles, enrich contacts, and draft outreach inside the chat. You only pay for verified results, and the data is GDPR and CCPA aligned.",
    link: {
      label: "Read the step-by-step ChatGPT guide",
      href: "https://intercom.help/scalelist/en/articles/15338166-connect-chatgpt-to-scalelist",
    },
  },
  {
    q: "How do I use Scalelist for sales in Claude?",
    a: "Open Claude (Desktop or web), go to connectors, add a custom MCP server, and paste https://mcp.scalelist.com/mcp. Claude becomes a sales-ready assistant: ask it to build a lead list, enrich a CSV, or prep your next meeting, and Scalelist verifies every email and mobile behind the scenes.",
    link: {
      label: "Read the step-by-step Claude guide",
      href: "https://intercom.help/scalelist/en/articles/15337359-connect-claude-to-scalelist",
    },
  },
  {
    q: "Can Scalelist power an AI SDR agent?",
    a: "Yes. Scalelist is built for MCP for sales AI agents, so any AI SDR agent or autonomous workflow that speaks MCP can plug in. The agent sources prospects, spends credits only on verified hits, and pushes clean records to your CRM, without the bad-data tax that breaks most SDR automations.",
  },
];

export function FAQ() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center sl-reveal">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
                {f.link && (
                  <a
                    href={f.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-primary font-semibold hover:underline"
                  >
                    {f.link.label}
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}