
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const SNOV_REVIEW: ReviewContent = {
  competitorName: "Snov.io",
  year: "2025",
  headline: "Snov.io Review 2025: Is It the Best All-in-One Sales Tool?",
  intro: "Selecting the right platform impacts every stage of your outreach. Snov.io promises to streamline everything from prospecting to campaign management. But is an all-in-one suite truly better than specialized tools focused on data hygiene?",
  summaryVerdict: "Snov.io is a top-tier choice for SMBs looking to consolidate their sales stack. Its strength lies in the seamless integration of prospecting and outreach automation. However, its CRM is basic, and teams prioritizing 98% email accuracy and automated job-change monitoring often find Scalelist superior.",
  whatIsText: "Snov.io is a multifaceted SaaS platform designed to support sales and marketing professionals throughout the entire outreach process. It combines prospecting, verification, automated outreach, and a built-in CRM into a single, unified ecosystem.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Prospecting: Finding emails via domain search or LinkedIn extension.",
    "Verification: Multi-tier cleaning to reduce bounce rates.",
    "Outreach: Creating automated, multi-channel drip campaigns.",
    "Sales CRM: Managing pipelines and tracking deals in one place."
  ],
  howItWorks: {
    title: "The Snov.io All-in-One Engine",
    points: [
      { title: "Prospect Finder", description: "Scraping emails from domains and social profiles." },
      { title: "7-Tier Verification", description: "Checking syntax, domain existence, and mail server response." },
      { title: "Visual Campaign Builder", description: "Drag-and-drop editor for personalized outreach sequences." }
    ]
  },
  features: {
    title: "Platform Capability Audit",
    items: [
      { title: "LinkedIn Prospect Finder", description: "Integrates with LinkedIn to save emails while browsing profiles.", verdict: "Verdict: Major SDR time-saver." },
      { title: "Email Drip Campaigns", description: "Visual builder with personalization and A/B testing triggers." },
      { title: "Email Warm-up", description: "Mimics human behavior to build sender reputation.", verdict: "Verdict: Critical for deliverability." },
      { title: "Built-in Sales CRM", description: "Essential deal tracking and pipeline management.", verdict: "Verdict: Basic for larger teams." }
    ]
  },
  accuracyData: {
    mobile: "Available (But secondary to email focus)",
    email: "75-90% (Dependent on the 7-tier verifier results)",
    decay: "Static database decay (Requires manual re-verification)"
  },
  pricing: {
    minimum: "$39 - $99 per month",
    contract: "Starter (1k credits) vs Pro (5k credits). Monthly billing available.",
    hiddenCosts: [
      "Bulk search consumes 2 credits per lead",
      "No automated job-change monitoring after export",
      "Advanced A/B testing gated behind Pro tier",
      "Credit-based search vs verification costs"
    ]
  },
  pros: [
    "Integrated all-in-one workflow",
    "Excellent value for money (Pro plan)",
    "Robust email deliverability suite",
    "User-friendly visual campaign builder"
  ],
  cons: [
    "Credit system can be limiting for power users",
    "CRM lacks advanced automation of Pipedrive/HubSpot",
    "Email finding accuracy is not 100% (Manual verification needed)",
    "Learning curve for advanced deliverability settings"
  ],
  faq: [
    { question: "Is Snov.io legit?", answer: "Yes. It is a reputable, well-established platform used by professionals at companies like Google and Amazon." },
    { question: "How does Snov.io compare to Scalelist?", answer: "Snov.io is an all-in-one suite including outreach. Scalelist focuses on superior data hygiene, 95%+ accuracy, and automated job-change monitoring." },
    { question: "Does Snov.io offer a free trial?", answer: "Yes, they have a trial plan with a limited number of credits to test the core features." },
    { question: "What is the best feature of Snov.io?", answer: "The LinkedIn Prospect Finder extension and the integrated Email Drip Campaigns are its strongest assets." }
  ]
};
