
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const SEAMLESS_REVIEW: ReviewContent = {
  competitorName: "Seamless.AI",
  year: "2025",
  headline: "Seamless.AI Review: Is It the Ultimate Sales Intelligence Platform?",
  intro: "In the competitive landscape of B2B sales, your lead data determines your success. Seamless.AI uses artificial intelligence to crawl the web and validate contact details at the exact moment of search.",
  summaryVerdict: "Seamless.AI is a powerful real-time search engine for B2B data, standing out with its 'Social Selling Assistant' Chrome extension and AI-powered 10-step verification. It is an excellent choice for teams needing high-volume prospecting directly from LinkedIn or the web, though its credit-based system on lower tiers and variable phone accuracy are key considerations.",
  whatIsText: "Seamless.AI is a B2B sales intelligence platform that functions as a real-time search engine. Unlike static databases that decay quickly, Seamless uses AI to validate email addresses and direct-dial numbers at the moment of search, aiming to eliminate the 30% annual decay rate common in B2B data.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Contact & Company Search: Pinpointing decision-makers with granular ICP filters.",
    "Social Selling Assistant: Finding verified data directly from LinkedIn profiles.",
    "Autopilot: Automatically building lists based on predefined criteria.",
    "Job Change Tracking: Alerts when key contacts move to new organizations."
  ],
  howItWorks: {
    title: "The Seamless Real-Time Engine",
    points: [
      { title: "AI Web Crawling", description: "Scans the internet in real-time to find the most current contact details." },
      { title: "10-Step Verification", description: "A multi-stage validation engine designed to ensure high confidence in emails and phones." },
      { title: "Direct CRM Sync", description: "One-click export to Salesforce, HubSpot, and other major sales stacks." }
    ]
  },
  features: {
    title: "Key Platform Functionality",
    items: [
      { title: "Social Selling Assistant", description: "Chrome extension that works on LinkedIn, company sites, and CRMs.", verdict: "Verdict: Best-in-class workflow." },
      { title: "Writer AI", description: "Integrated AI assistant to generate personalized outreach messages instantly." },
      { title: "Autopilot", description: "Set up recurring cadences to have new leads delivered to your lists automatically.", verdict: "Verdict: Passive lead gen." },
      { title: "Data Enrichment", description: "Appends technographics and buyer intent signals to every prospect profile." }
    ]
  },
  accuracyData: {
    mobile: "AI-sourced direct dials, mobile numbers, and switchboards available.",
    email: "Real-time 10-step verification engine to minimize bounce rates.",
    decay: "Real-time search bypasses the typical 30% annual B2B data decay."
  },
  pricing: {
    minimum: "Free - Custom Enterprise",
    contract: "Pro for growing teams; Enterprise for unlimited credits. Annual subscriptions required.",
    hiddenCosts: [
      "Credit limits on Pro plan can be restrictive for high-volume teams",
      "Direct dial accuracy can be variable for enterprise executives",
      "Annual commitment required for all paid tiers",
      "Advanced 'Intel' (Intent data) restricted to higher plans"
    ]
  },
  pros: [
    "Real-time data verification vs static databases",
    "Superior Social Selling Assistant extension",
    "Highly intuitive and user-friendly interface",
    "Generous free plan for evaluation credits",
    "One-click sync with major CRM platforms"
  ],
  cons: [
    "Credit-based constraints on entry-level paid tiers",
    "Variability in direct-dial phone accuracy",
    "Annual contract lock-ins for paid subscriptions",
    "Lower depth of firmographic data than enterprise competitors"
  ],
  faq: [
    { question: "Is Seamless.AI accurate?", answer: "Its real-time AI validation engine is designed to minimize bounce rates, though users report variable accuracy for direct-dial phone numbers." },
    { question: "What is the Social Selling Assistant?", answer: "It's a Chrome extension that allows you to reveal contact info on LinkedIn or any website while browsing." },
    { question: "How does Autopilot work?", answer: "You define your ICP, and Autopilot builds your prospect lists automatically on a daily or weekly basis." },
    { question: "Does it integrate with Salesforce?", answer: "Yes, Seamless.AI offers native integrations with Salesforce, HubSpot, Zoho, Outreach, and Salesloft." }
  ]
};
