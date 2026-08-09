
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const ANYMAIL_FINDER_REVIEW: ReviewContent = {
  competitorName: "AnyMailFinder",
  year: "2025",
  headline: "AnyMailFinder Review: An In-depth Analysis for Sales and Marketing Professionals",
  intro: "In the competitive landscape of sales and marketing, the quality of your outreach list is paramount. AnyMailFinder is engineered to provide verified professional email addresses with a unique 'pay-for-performance' model.",
  summaryVerdict: "AnyMailFinder prioritizes quality over quantity. Its standout feature is its commitment to only charging for verified emails—if it bounces, they refund the credit. While its find rate might be lower than tools that offer 'best guesses,' its deliverability is among the highest in the industry, making it perfect for teams that value their sender reputation.",
  whatIsText: "AnyMailFinder is a specialized B2B software tool that helps users find and verify the email addresses of professionals. It searches for emails based on a person's name and their company's domain, utilizing a multi-step validation check that includes direct server pings and public data scraping.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Targeted Account Prospecting: Finding specific decision-makers by name and domain.",
    "Bulk List Enrichment: Processing CSV files to append verified emails to lead lists.",
    "API Automation: Integrating email-finding directly into custom sales workflows.",
    "Reputation Protection: Ensuring high deliverability for cold email campaigns."
  ],
  howItWorks: {
    title: "The AnyMailFinder Verification Logic",
    points: [
      { title: "Direct Server Search", description: "Attempts to communicate directly with the recipient's mail server to check mailbox existence." },
      { title: "Pattern Recognition", description: "Analyzes and tests known email formats (e.g., first.last@domain.com) against the domain." },
      { title: "Verified-Only Charging", description: "Users are only charged for emails that pass a multi-step validation check." }
    ]
  },
  features: {
    title: "Core Platform Functionality",
    items: [
      { title: "Single Email Search", description: "Instant lookup for individuals using name and domain inputs.", verdict: "Verdict: Highly accurate." },
      { title: "Bulk Email Finder", description: "Upload CSVs to build large contact lists for ABM or SDR outreach campaigns." },
      { title: "Robust API Access", description: "Programmatically search for emails with seamless CRM and sales automation integration.", verdict: "Verdict: Developer friendly." },
      { title: "Bounce Refund Policy", description: "Credits are automatically refunded for any verified email that results in a bounce." }
    ]
  },
  accuracyData: {
    mobile: "No native mobile phone finder feature included.",
    email: "High Accuracy (Bounce rates consistently below 2-3%).",
    decay: "Verified-only model ensures data is fresh at the moment of search."
  },
  pricing: {
    minimum: "$89 - $1,719+ per year",
    contract: "Starter plan starts at $89/year for 600 credits. Yearly discounts apply.",
    hiddenCosts: [
      "No mobile phone data available",
      "Lower find rates for startups/small businesses",
      "Single-purpose tool (no native outreach/sequences)",
      "CRM integrations primarily handled via API/Zapier"
    ]
  },
  pros: [
    "Only pay for verified email addresses",
    "Extremely low bounce rates (high sender reputation protection)",
    "Generous API access included in all plans",
    "Credits refunded if a verified email bounces"
  ],
  cons: [
    "Lacks mobile phone number data",
    "Lower overall find rate compared to 'guess' tools",
    "No built-in email automation or CRM management",
    "Requires company domain for most accurate results"
  ],
  faq: [
    { question: "Do I pay for unverified results?", answer: "No, AnyMailFinder only deducts credits for email addresses that have been successfully verified." },
    { question: "What if a verified email bounces?", answer: "The platform promises to refund the credit used if a 'verified' email results in a bounce." },
    { question: "Does it work on LinkedIn?", answer: "Yes, there is a browser extension that facilitates finding emails while browsing professional profiles." },
    { question: "Is the API available on the trial?", answer: "Yes, API access is provided to all users, including those on a free trial." }
  ]
};
