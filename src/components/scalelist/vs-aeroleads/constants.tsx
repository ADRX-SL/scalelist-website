import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const AEROLEADS_REVIEW: ReviewContent = {
  competitorName: "AeroLeads",
  year: "2026",
  headline: "AeroLeads Review: Comprehensive Analysis for 2026",
  intro: "Effective lead generation is the lifeblood of any B2B organization. AeroLeads has carved out a significant space for itself as a powerful, LinkedIn-integrated email and phone number finder.",
  summaryVerdict: "AeroLeads is a versatile, user-friendly prospecting tool that excels due to its deep integration with LinkedIn. While phone number success rates vary, its real-time email verification and rich data capture make it a solid choice for SDRs and recruiters looking for a tactical, entry-level solution to accelerate their outreach.",
  whatIsText: "AeroLeads is a cloud-based B2B prospecting and lead generation software designed to help businesses find verified email addresses and phone numbers of key individuals. It primarily functions via a Chrome extension that captures data from LinkedIn, Crunchbase, and AngelList.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "LinkedIn Prospecting: One-click lead capture directly from professional profiles.",
    "Email & Phone Finding: Automated discovery of verified contact points in real-time.",
    "Bulk List Building: Adding multiple prospects from search results pages instantly.",
    "CRM Integration: Pushing verified leads directly into HubSpot, Salesforce, or Zoho."
  ],
  howItWorks: {
    title: "The AeroLeads Prospecting Workflow",
    points: [
      { title: "Browser Extension Integration", description: "Overlay a prospecting widget on LinkedIn and Sales Navigator to capture profiles on-the-fly." },
      { title: "Real-Time Verification", description: "Searches multiple email patterns and verifies them against the domain to ensure deliverability." },
      { title: "One-Click Data Export", description: "Easily push leads to your CRM or download them as a CSV for external campaign use." }
    ]
  },
  features: {
    title: "Key Platform Functionalities",
    items: [
      { title: "Chrome Extension", description: "The central nervous system of AeroLeads, allowing data capture without switching tabs.", verdict: "Verdict: Top-tier efficiency." },
      { title: "Data Richness", description: "Captures job titles, company info, locations, and LinkedIn URLs alongside emails." },
      { title: "Bulk Prospecting", description: "Select multiple profiles from search results to build large lists quickly." },
      { title: "Email Verifier", description: "Standalone tool to validate existing email lists and protect sender reputation.", verdict: "Verdict: Reputation shield." }
    ]
  },
  accuracyData: {
    mobile: "Variable success rate (better for business lines than personal mobiles).",
    email: "High accuracy (Real-time verification minimizes bounce rates).",
    decay: "Credits used for verification ensure data is checked at the moment of addition."
  },
  pricing: {
    minimum: "$39 - $249 per month",
    contract: "Take Off plan starts at $39 for 2,000 monthly credits. Support included on all tiers.",
    hiddenCosts: [
      "Credits consumed even if verification fails",
      "Noticeable processing delay for large bulk lists",
      "Personal mobile coverage is not guaranteed",
      "Heavily dependent on LinkedIn site stability"
    ]
  },
  pros: [
    "Seamless integration with LinkedIn and Sales Navigator",
    "Rich data capture with over a dozen relevant points",
    "Transparent pricing with no feature-gating between tiers",
    "Direct support via email, chat, and call on all plans"
  ],
  cons: [
    "Credits used regardless of verification success",
    "Dependency on third-party platform (LinkedIn) stability",
    "Processing time can be slow for large bulk operations",
    "Phone number hit rate is lower than email accuracy"
  ],
  faq: [
    { question: "Does one credit equal one lead?", answer: "Typically yes, one credit is used to find the verified details of one prospect." },
    { question: "Does it work with Sales Navigator?", answer: "Yes, the Chrome extension is specifically designed to work with all LinkedIn versions, including Sales Navigator." },
    { question: "Can I export my leads?", answer: "Yes, you can export your prospect lists as a .CSV file or sync them directly to your CRM." },
    { question: "What sites are supported?", answer: "Primarily LinkedIn, but it also works on platforms like Crunchbase, AngelList, and Xing." }
  ]
};