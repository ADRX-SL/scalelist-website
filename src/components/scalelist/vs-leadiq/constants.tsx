
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const LEADIQ_REVIEW: ReviewContent = {
  competitorName: "LeadIQ",
  year: "2025",
  headline: "LeadIQ Review: Is It the Ultimate Prospecting Tool for 2025?",
  intro: "In the competitive landscape of B2B sales, your prospecting data makes or breaks your outreach. LeadIQ promises to eliminate manual data entry and help you build a better pipeline faster. But is it worth the investment for your sales team?",
  summaryVerdict: "LeadIQ is a top-tier solution for teams whose prospecting motion is heavily centered on LinkedIn. Its strengths lie in its intuitive browser extension, deep CRM sync, and AI-powered 'Scribe' automation. However, its credit-based pricing can feel restrictive for high-volume users.",
  whatIsText: "LeadIQ is a sales prospecting and intelligence platform designed to find, capture, and manage contact information. It operates primarily through a browser extension, allowing users to capture verified emails and direct-dials directly from LinkedIn and Sales Navigator into their CRM.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "LinkedIn Capture: Find emails and direct dials while browsing profiles.",
    "CRM Sync: One-click export to Salesforce, HubSpot, and SalesLoft.",
    "Activity Logging: Using Scribe to automate meeting briefs and call summaries.",
    "Lead Management: Managing prospecting credits and preventing duplicates."
  ],
  howItWorks: {
    title: "The LeadIQ Prospecting Workflow",
    points: [
      { title: "Browser Extension", description: "Captures data in real-time from LinkedIn and Sales Navigator profiles." },
      { title: "Real-Time Verification", description: "Color-coded indicators (Verified, Best Guess, Invalid) show deliverability confidence." },
      { title: "Scribe AI", description: "Transcribes calls and summarizes takeaways directly into CRM records." }
    ]
  },
  features: {
    title: "Key Functionality Audit",
    items: [
      { title: "LinkedIn Extension", description: "One-click data capture with real-time verification status indicators.", verdict: "Verdict: Best for LinkedIn-heavy teams." },
      { title: "Scribe Automation", description: "Automated meeting briefs and call transcriptions synced to CRM opportunities." },
      { title: "Native Integrations", description: "Deep, multi-way sync with Salesforce, HubSpot, Outreach, and SalesLoft." },
      { title: "Team Analytics", description: "Centralized dashboard for credit allocation and prospecting performance tracking." }
    ]
  },
  accuracyData: {
    mobile: "Millions of direct-dial and mobile numbers available in-platform.",
    email: "Real-time color-coded verification (Green = 100% Verified).",
    decay: "No credits charged for contacts already existing in your CRM."
  },
  pricing: {
    minimum: "$0 - Custom (Pro is most popular)",
    contract: "Free Plan available for testing. Pro/Enterprise for teams. Credit-based usage.",
    hiddenCosts: [
      "Unlocking personal emails may cost extra credits",
      "Credits for phone numbers are often a separate pool",
      "Running out of credits mid-month halts prospecting momentum",
      "Scribe automation limited on basic plans"
    ]
  },
  pros: [
    "Seamless LinkedIn & Sales Navigator integration",
    "Powerful Scribe AI for meeting & call automation",
    "Doesn't charge credits for existing CRM records",
    "Deeply intuitive one-click workflow"
  ],
  cons: [
    "Credit-based pricing can feel restrictive",
    "Niche industry data may be less exhaustive",
    "Learning curve for mastering Scribe settings",
    "Mobile data accuracy varies by region"
  ],
  faq: [
    { question: "Is LeadIQ legit?", answer: "Yes. It is a highly reputable platform used by sales teams at companies like Salesforce, Oracle, and Segment." },
    { question: "Does LeadIQ find personal emails?", answer: "Yes, it provides access to both work and personal emails, though personal ones may require additional credits." },
    { question: "How does the CRM sync work?", answer: "It identifies existing records to prevent duplicates and pushes new leads directly to Salesforce, HubSpot, or Sales Engagement tools." },
    { question: "What is Scribe?", answer: "An AI feature that automates pre-meeting briefs and call notes, syncing them directly to your CRM to save reps time." }
  ]
};
