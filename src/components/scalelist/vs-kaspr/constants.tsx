
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const KASPR_REVIEW: ReviewContent = {
  competitorName: "Kaspr",
  year: "2025",
  headline: "Kaspr Review: An In-Depth Analysis for Sales Professionals",
  intro: "In B2B sales, speed is everything. Kaspr has carved out a niche as a specialized solution for extracting contact information directly from LinkedIn. But is its database of 500M+ contacts reliable enough for your pipeline?",
  summaryVerdict: "Kaspr is an excellent choice for SDRs and recruiters who live on LinkedIn and prioritize finding direct-dial phone numbers. Its Chrome extension is one of the most intuitive on the market. However, email quality can be inconsistent, and the credit system is less flexible than competitors like Scalelist.",
  whatIsText: "Kaspr is a B2B sales prospecting tool specifically designed to integrate with LinkedIn. It operates primarily through a Chrome extension that reveals verified email addresses and phone numbers directly on LinkedIn profiles, Sales Navigator, and Recruiter Lite.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "LinkedIn Prospecting: Instant retrieval of emails and phones from profiles.",
    "List Building: Organizing revealed contacts into targeted segments.",
    "Workflow Automation: Automatically enriching members of LinkedIn groups or events.",
    "CRM Integration: Syncing enriched leads directly to HubSpot, Salesforce, or Pipedrive."
  ],
  howItWorks: {
    title: "The Kaspr Prospecting Motion",
    points: [
      { title: "One-Click Extension", description: "Overlay widget on LinkedIn profiles for instant real-time data retrieval." },
      { title: "Multi-Source Validation", description: "Checks multiple data sources to validate phone and email details before presentation." },
      { title: "Centralized Dashboard", description: "Intermediate storage for managing leads before exporting to CRM." }
    ]
  },
  features: {
    title: "Key Functionality Audit",
    items: [
      { title: "Chrome Extension", description: "Works on profiles, searches, groups, and events for maximum coverage.", verdict: "Verdict: Most intuitive in class." },
      { title: "Mobile Data Focus", description: "Highly regarded for the accuracy of direct-dial and mobile numbers." },
      { title: "Automated Workflows", description: "Enrich entire LinkedIn search results or event attendee lists automatically.", verdict: "Verdict: Great for scaling." },
      { title: "Native Integrations", description: "Connects with Salesloft, Outreach, Lemlist, and major CRMs." }
    ]
  },
  accuracyData: {
    mobile: "Robust and highly accurate (Their core differentiator).",
    email: "Variable (Some reports of outdated addresses and bounce risks).",
    decay: "Real-time verification helps, but static database gaps exist."
  },
  pricing: {
    minimum: "$49 - $99+ per user/month",
    contract: "Free Plan available. Starter (credits/month) to Enterprise (Unlimited).",
    hiddenCosts: [
      "Unused credits are forfeited upon cancellation",
      "Email and phone data consume separate credits",
      "Buggy performance in certain geographic regions",
      "Credit system feels rigid for fluctuating outreach needs"
    ]
  },
  pros: [
    "Exceptional ease of use and UI simplicity",
    "Highly efficient for LinkedIn-heavy workflows",
    "Superior mobile and direct-dial data quality",
    "Strong automation for group/event enrichment"
  ],
  cons: [
    "Occasional email data quality inconsistencies",
    "Credit system does not allow rollover upon cancellation",
    "Extension can be glitchy or slow at times",
    "Customer support response times vary"
  ],
  faq: [
    { question: "Is Kaspr legit and GDPR compliant?", answer: "Yes. Kaspr provides verified data and asserts full compliance with GDPR and CCPA regulations." },
    { question: "How does Kaspr compare to Skrapp.io?", answer: "Kaspr is often favored for phone numbers, while Skrapp.io is known for high-volume email exports from LinkedIn searches." },
    { question: "Does Kaspr work with Sales Navigator?", answer: "Yes, the Chrome extension fully integrates with LinkedIn Sales Navigator and Recruiter Lite." },
    { question: "Can I try Kaspr for free?", answer: "Yes, Kaspr offers a free-forever plan with a limited number of monthly credits." }
  ]
};
