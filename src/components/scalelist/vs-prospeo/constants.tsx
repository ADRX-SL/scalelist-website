
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const PROSPEO_REVIEW: ReviewContent = {
  competitorName: "Prospeo",
  year: "2025",
  headline: "Prospeo Review 2025: Is It the Best Prospecting Tool?",
  intro: "Quality contact data is the foundation of B2B success. Prospeo offers a multi-layered verification system and a unique Mobile Finder designed to help sales teams reach decision-makers directly.",
  summaryVerdict: "Prospeo is a powerful and reliable B2B prospecting tool. Its strengths lie in high-accuracy email verification, a versatile Chrome extension for LinkedIn, and a rare Mobile Finder for direct dials. With a transparent credit-based system and all features available on all paid tiers, it's a strong contender for teams that value data quality and multi-channel outreach.",
  whatIsText: "Prospeo is a B2B contact data provider that offers a suite of tools for lead generation and data enrichment. It helps professionals find and verify professional email addresses and mobile phone numbers through a web app, a Chrome extension, and a robust API for automated workflows.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Real-Time Prospecting: Finding emails and phones directly on LinkedIn profiles.",
    "Mobile Finding: Acquiring direct-dial numbers to bypass company switchboards.",
    "Email Verification: Real-time SMTP and syntax checks to protect sender reputation.",
    "Domain Search: Mapping out organizational structures by company domain."
  ],
  howItWorks: {
    title: "The Prospeo Discovery Engine",
    points: [
      { title: "Triple-Check Verification", description: "Performs syntax, MX record, and SMTP pings to categorize emails as Valid, Risky, or Invalid." },
      { title: "Mobile Sourcing", description: "Leverages proprietary databases to find direct mobile numbers for multi-channel engagement." },
      { title: "Browser Integration", description: "Enables one-click prospecting directly inside the LinkedIn interface via Chrome extension." }
    ]
  },
  features: {
    title: "Key Platform Features",
    items: [
      { title: "Email Finder", description: "Find professional emails using a prospect's name and company domain.", verdict: "Verdict: High-accuracy lookup." },
      { title: "Mobile Finder", description: "Direct access to mobile numbers for SMS or cold calling outreach.", verdict: "Verdict: Top-tier multi-channel tool." },
      { title: "Domain Search", description: "Uncover every verified email associated with a specific company URL." },
      { title: "Email Verifier", description: "Cleans existing lists by verifying mailboxes exist without sending a message." }
    ]
  },
  accuracyData: {
    mobile: "Variable by region, but offers a unique direct-dial advantage over email-only tools.",
    email: "High accuracy (multi-layered verification minimizes bounce rates).",
    decay: "Transparent 'Risky' categorization handles catch-all servers effectively."
  },
  pricing: {
    minimum: "$39 - $369+ per month",
    contract: "75 free credits available. Paid plans range from 1,000 to 50,000 monthly credits.",
    hiddenCosts: [
      "Mobile number finds cost 3 credits each",
      "Email verification costs 0.5 credits per check",
      "Finding + Verifying an email costs 1 full credit",
      "No native outreach (sending) tools included"
    ]
  },
  pros: [
    "High data accuracy with transparent verification logic",
    "Unique Mobile Finder feature for direct-dial access",
    "Seamless real-time LinkedIn Chrome extension",
    "All features unlocked on all paid plans"
  ],
  cons: [
    "Higher credit cost for mobile data (3 credits per lookup)",
    "Mobile accuracy is inherently more variable than email",
    "No built-in email sequencing or automation",
    "Credit-based system can be costly for massive bulk enrichment"
  ],
  faq: [
    { question: "Is Prospeo legit?", answer: "Yes, Prospeo is a professional B2B data provider trusted by sales development teams globally." },
    { question: "What does a 'Risky' email mean?", answer: "It typically indicates a catch-all server where the mailbox cannot be 100% verified, though it may still be valid." },
    { question: "How many credits for a phone number?", answer: "Finding one verified mobile number costs 3 credits." },
    { question: "Does it work with LinkedIn?", answer: "Yes, the Chrome extension is specifically optimized for LinkedIn and Sales Navigator prospecting." }
  ]
};
