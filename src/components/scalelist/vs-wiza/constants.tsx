
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const WIZA_REVIEW: ReviewContent = {
  competitorName: "Wiza",
  year: "2025",
  headline: "Wiza Review: An In-Depth Analysis of LinkedIn Prospecting Automation",
  intro: "LinkedIn stands as the definitive professional network, but extracting contact information at scale is a challenge. Wiza aims to solve this by automating lead extraction directly from Sales Navigator.",
  summaryVerdict: "Wiza is a powerful and efficient tool specifically optimized for Sales Navigator users. It excels in real-time email verification and offers a 'pay-for-performance' model where you only pay for valid emails. It's a top-tier choice for teams whose prospecting is heavily centered on LinkedIn lists, though it requires a separate Sales Navigator subscription to unlock its full potential.",
  whatIsText: "Wiza is a cloud-based platform and browser extension that automates finding and verifying contact information for prospects on LinkedIn. It is designed to transform Sales Navigator search results or saved lists into clean, actionable contact files instantly.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Sales Navigator Extraction: Scraping entire search results or saved lead lists.",
    "Real-Time Verification: Validating business emails instantly to reduce bounce rates.",
    "Phone Enrichment: Finding direct-dial and mobile numbers for key decision-makers.",
    "CRM Integration: Pushing enriched lead lists directly to Salesforce, HubSpot, or Outreach."
  ],
  howItWorks: {
    title: "The Wiza Automation Flow",
    points: [
      { title: "Export Button", description: "Adds an 'Export with Wiza' button directly inside LinkedIn Sales Navigator interface." },
      { title: "Real-Time SMTP Check", description: "Runs multi-step verification checks on every email found during the scrape process." },
      { title: "Automated Categorization", description: "Filters emails into 'Valid', 'Risky' (catch-all), or 'Invalid' buckets for clean list management." }
    ]
  },
  features: {
    title: "Core Features Breakdown",
    items: [
      { title: "Sales Navigator Sync", description: "Direct integration that scrapes searches and lists without leaving LinkedIn.", verdict: "Verdict: Most seamless integration." },
      { title: "Email Verification", description: "Categorizes every email as Valid, Risky, or Invalid in real-time." },
      { title: "Phone Enrichment", description: "Scans databases for mobile and direct office numbers to append to profiles.", verdict: "Verdict: High-value add-on." },
      { title: "Direct CRM Export", description: "Automated syncing with major CRMs and sales engagement platforms." }
    ]
  },
  accuracyData: {
    mobile: "Mobile and direct office numbers available, though find rate varies by industry.",
    email: "High accuracy (60-80% find rate for valid emails in major markets).",
    decay: "Real-time verification prevents the use of stale or decayed data."
  },
  pricing: {
    minimum: "$83 - $166+ per user/month",
    contract: "Free plan (20 emails) available. Annual billing discounts applied.",
    hiddenCosts: [
      "LinkedIn Sales Navigator subscription is required",
      "Phone numbers charged at $0.35/each on Email plan",
      "Find rates lower for niche industries or small companies",
      "Catch-all emails (Risky) may still result in some bounces"
    ]
  },
  pros: [
    "Seamless integration with Sales Navigator",
    "Real-time verification significantly reduces bounce rates",
    "Pay-for-performance model (pay for valid emails only)",
    "Clean, modern, and highly intuitive user interface"
  ],
  cons: [
    "Strictly requires a Sales Navigator subscription",
    "Phone number accuracy is less consistent than email",
    "Lower find rates for small businesses or niche markets",
    "Team analytics restricted to higher tier plans"
  ],
  faq: [
    { question: "Is Wiza legit?", answer: "Yes, Wiza is a highly rated sales enablement tool trusted by thousands of companies for LinkedIn prospecting." },
    { question: "Does Wiza pay for bounces?", answer: "Wiza's model focuses on 'valid' emails. Users generally only pay credits for emails confirmed as deliverable." },
    { question: "Can I use Wiza without Sales Navigator?", answer: "While it can work on standard LinkedIn, Wiza is specifically optimized and most powerful when used with Sales Navigator." },
    { question: "What is a 'Risky' email in Wiza?", answer: "These are catch-all domains that accept all emails, meaning Wiza cannot 100% guarantee deliverability." }
  ]
};
