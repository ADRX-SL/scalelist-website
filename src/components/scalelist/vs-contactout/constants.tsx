
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const CONTACTOUT_REVIEW: ReviewContent = {
  competitorName: "ContactOut",
  year: "2025",
  headline: "ContactOut Review (2025): Is It Worth Your Money?",
  intro: "Sales professionals and recruiters are constantly searching for tools that can provide accurate contact information. ContactOut has emerged as a prominent player, promising high-accuracy emails directly from LinkedIn.",
  summaryVerdict: "ContactOut excels at finding verified emails directly from LinkedIn via its Chrome extension. With a triple-verification process boasting up to 99% accuracy, it's a top-tier choice for accuracy-focused recruiters. However, its 'unlimited' plans have hidden caps that high-volume users must watch out for.",
  whatIsText: "ContactOut is a lead intelligence platform designed to help sales and recruiting professionals find verified email addresses and phone numbers. It operates primarily through a Chrome extension that integrates with LinkedIn, and offers access to over 350 million professional profiles.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "LinkedIn Prospecting: Finding verified emails directly from profiles.",
    "Bulk Enrichment: Appending details to existing lead lists.",
    "Email Campaigns: Sending automated, multi-step sequences.",
    "AI Personalization: Crafting outreach with AI-based draft suggestions."
  ],
  howItWorks: {
    title: "How ContactOut Works",
    points: [
      { title: "Chrome Extension", description: "Overlays contact data directly onto LinkedIn profiles for instant access." },
      { title: "Triple-Verification", description: "Uses a multi-stage system to ensure email deliverability is near 99%." },
      { title: "Search Portal", description: "A web platform to query a database of 350M+ professionals using 20+ filters." }
    ]
  },
  features: {
    title: "Core Platform Features",
    items: [
      { title: "LinkedIn Extension", description: "The cornerstone tool that finds emails and phones directly on LinkedIn.", verdict: "Verdict: Best for recruiters." },
      { title: "Data Enrichment", description: "Upload CSVs and append missing contact details automatically." },
      { title: "AI Personalizer", description: "Generates outreach emails based on a prospect's profile data.", verdict: "Verdict: Great efficiency booster." },
      { title: "ATS/CRM Sync", description: "Connects with Salesforce, HubSpot, Greenhouse, and Lever." }
    ]
  },
  accuracyData: {
    mobile: "Inconsistent availability compared to email data.",
    email: "97-99% Accuracy (Triple-verification system).",
    decay: "Access to 350M+ profiles with global coverage."
  },
  pricing: {
    minimum: "$49 - $99+ per month",
    contract: "Free plan available. Paid plans have caps (e.g., 2,000 emails/month).",
    hiddenCosts: [
      "'Unlimited' plans are capped by fair use policies",
      "Phone credits limited to 1,000/month on standard plans",
      "Single user per plan licenses",
      "50% higher cost for US/UK data if selected"
    ]
  },
  pros: [
    "High data accuracy for emails (triple-verified)",
    "Seamless integration with LinkedIn and GitHub",
    "Helpful AI-powered outreach tools",
    "Comprehensive search portal with 20+ filters"
  ],
  cons: [
    "Misleading 'unlimited' caps (2,000 emails/month)",
    "Inconsistent phone number data accuracy",
    "Restrictive export limits on standard plans",
    "Expensive to scale across large teams"
  ],
  faq: [
    { question: "Is ContactOut legit?", answer: "Yes, it is used by over 500,000 recruiters and sales reps at companies like Google, Microsoft, and Netflix." },
    { question: "Does ContactOut work with LinkedIn Sales Navigator?", answer: "Yes, the extension is fully compatible with LinkedIn, Sales Navigator, and Recruiter." },
    { question: "What is the 'Fair Use Policy'?", answer: "Despite being labeled as unlimited, plans are capped at 2,000 emails and 1,000 phone numbers per month." },
    { question: "Is it GDPR compliant?", answer: "Yes, ContactOut is fully GDPR and CCPA compliant." }
  ]
};
