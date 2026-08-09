
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const FULLENRICH_REVIEW: ReviewContent = {
  competitorName: "Fullenrich",
  year: "2026",
  headline: "Fullenrich Review: The Ultimate Data Enrichment Tool?",
  intro: "Accurate data is the bedrock of successful outreach. Fullenrich leverages a sophisticated 'waterfall enrichment' model, querying 20+ sources sequentially to find verified contact details.",
  summaryVerdict: "Fullenrich is a robust enrichment engine that excels at 'waterfall' data acquisition. By cross-referencing over 20 providers, it maximizes find rates for both emails and phone numbers. Its triple-verification logic and unlimited user policy make it a highly scalable and reliable choice for growth teams who want to enrich existing databases with high confidence.",
  whatIsText: "Fullenrich is a dynamic data enrichment platform that sequentially queries multiple data providers until a valid contact is found. It's designed to solve data decay and scarcity by providing triple-verified emails and a multi-source approach to phone number acquisition via Chrome extension, API, and bulk file uploads.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Waterfall Enrichment: Querying 20+ providers until a match is found.",
    "Triple Email Verification: Syntax, MX, and SMTP real-time validation.",
    "Bulk Enrichment: Uploading CSVs to append emails and phones to lead lists.",
    "Workflow Automation: Native integrations with Zapier, Make, and Clay."
  ],
  howItWorks: {
    title: "The Waterfall Enrichment Engine",
    points: [
      { title: "20+ Data Sources", description: "Queries a sequence of providers, 'falling' to the next if a result isn't found." },
      { title: "Triple-Step Verification", description: "Checks syntax, MX records, and performs SMTP pings to confirm active mailboxes." },
      { title: "Real-Time Discovery", description: "Enriches data in real-time rather than relying on a single static, decaying database." }
    ]
  },
  features: {
    title: "Core Platform Capabilities",
    items: [
      { title: "Waterfall Enrichment", description: "Multi-source sequential search maximizing the probability of locating contact data.", verdict: "Verdict: Highest find rates." },
      { title: "Catch-all Validation", description: "Employs advanced techniques to provide deliverability status even for risky catch-all domains." },
      { title: "Unlimited Users", description: "Share a single credit pool across the entire organization with no per-seat costs.", verdict: "Verdict: Best for teams." },
      { title: "Credit Rollover", description: "Unused credits roll over for up to three months, providing flexibility for seasonal usage." }
    ]
  },
  accuracyData: {
    mobile: "Queries multiple providers (10 credits per successful find).",
    email: "Triple-verified (Syntax + MX + SMTP Ping).",
    decay: "Dynamic real-time queries reduce reliance on old, stale database records."
  },
  pricing: {
    minimum: "$29 - $500+ per month",
    contract: "Start plan begins at $29 for 500 credits. Scale plans available for enterprise needs.",
    hiddenCosts: [
      "Phone numbers cost 10x more than emails (10 credits)",
      "Dependent on quality of input (name/domain)",
      "No native outreach or campaign sending tools",
      "Lower utility for B2C or hyper-niche markets"
    ]
  },
  pros: [
    "Sophisticated waterfall model queries 20+ sources",
    "Triple email verification minimizes bounce rates",
    "Unlimited users on all paid plans (shared credit pool)",
    "Credits roll over for up to 3 months"
  ],
  cons: [
    "High credit consumption for phone numbers (10 credits)",
    "Requires high-quality input data for best results",
    "Not a standalone lead search tool (enrichment only)",
    "Niche data coverage can vary by industry"
  ],
  faq: [
    { question: "How many credits for a phone number?", answer: "Finding one verified mobile or direct phone number costs 10 credits." },
    { question: "Do credits roll over?", answer: "Yes, unused credits remain valid for up to three months." },
    { question: "Can I add my whole team?", answer: "Yes, Fullenrich allows unlimited users on a single account to share the same credit pool." },
    { question: "What is waterfall enrichment?", answer: "It is a process where the system queries over 20 data providers one by one until it finds a verified match for your contact." }
  ]
};
