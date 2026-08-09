
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const ZOOMINFO_REVIEW: ReviewContent = {
  competitorName: "ZoomInfo",
  year: "2026",
  headline: "ZoomInfo Reviews 2026: Is the 'Gold Standard' Worth the Hype?",
  intro: "If you are in B2B sales, you have heard the name. In fact, if you are reading this, you are likely deep in the research phase, scouring ZoomInfo reviews to answer one burning question: Is this platform actually worth the massive price tag?",
  summaryVerdict: "For years, ZoomInfo has held the crown as the undisputed heavyweight of sales intelligence. But in 2026, the landscape has shifted. Budgets are tighter, efficiency is paramount, and specialized tools like Scalelist are offering better ROI for email-focused teams.",
  whatIsText: "At its core, ZoomInfo is a cloud-based market intelligence platform designed to help B2B companies find, target, and close new customers. It's evolved through aggressive acquisitions into a massive data ecosystem focused primarily on North American markets.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Prospecting: finding emails and direct dial phone numbers.",
    "Enrichment: Cleaning up incomplete data inside CRM (Salesforce/HubSpot).",
    "Intent Tracking: Identifying which companies are researching solutions.",
    "Sales Engagement: Automated email sequences and cold calls."
  ],
  howItWorks: {
    title: "How Does ZoomInfo Work Under the Hood?",
    points: [
      { title: "Web Crawling", description: "Scanning millions of corporate websites and news articles." },
      { title: "Contributor Network", description: "Scraping email headers from users of their free community edition." },
      { title: "Third-Party Data", description: "Purchasing data to fill gaps in hierarchies." },
      { title: "Machine Learning", description: "Predicting patterns and verifying against SMTP servers." }
    ]
  },
  features: {
    title: "Deep Dive: SalesOS Features",
    items: [
      { title: "Advanced Search", description: "Filter by Firmographics, Technographics, and 'Scoops'. High utility for targeted lists." },
      { title: "Streaming Intent Data", description: "Tracks 'buying signals' at the company level. Powerful but requires manual detective work to find the actual buyer.", verdict: "Verdict: Company-level only." },
      { title: "Sales Engagement (Engage)", description: "Native sequencer for calls/emails. Convenient but basic compared to specialized tools like Outreach or Smartlead.", verdict: "Verdict: Clunky interface." },
      { title: "WebSights", description: "Matches IP addresses to domains to see who visits your site. Slightly outdated compared to person-level identity resolution." }
    ]
  },
  accuracyData: {
    mobile: "80%+ (Strongest in North America)",
    email: "75-85% (Risky without secondary verification)",
    decay: "10-20% Job Title decay within typical static exports"
  },
  pricing: {
    minimum: "$15,000 - $25,000 per year",
    contract: "Annual or Multi-year lock-ins. No monthly options.",
    hiddenCosts: [
      "Export Credit caps (unlimited views != unlimited exports)",
      "Add-ons (Intent, WebSights, Chorus)",
      "Predatory auto-renewal (60-day notice required)"
    ]
  },
  pros: [
    "Unmatched mobile number density in US/Canada",
    "Deep native integrations with top CRMs",
    "Publicly traded, highly compliant brand",
    "Powerful intent signal prioritization"
  ],
  cons: [
    "Extremely high price floor ($15k+)",
    "Frequent 'ghost' profiles due to data decay",
    "Priority support gated behind expensive tiers",
    "Weak data coverage outside North America",
    "Steep learning curve and complex interface"
  ],
  faq: [
    { question: "Is ZoomInfo legit?", answer: "Yes. It is a publicly traded company (NASDAQ: ZI) with rigorous compliance standards (GDPR, CCPA). However, legitimacy does not always equal cost-effectiveness." },
    { question: "Is ZoomInfo safe for email deliverability?", answer: "Sending to unverified ZoomInfo leads can harm your domain reputation. We recommend secondary verification or a monitoring tool like Scalelist." },
    { question: "How accurate is ZoomInfo really?", answer: "User reviews typically report a 75-85% validity rate for emails. Mobile dials are much higher (80%+) in the US market." },
    { question: "What is the minimum contract for ZoomInfo?", answer: "Expect a minimum commitment of $15,000/year. There are no month-to-month options available." }
  ]
};
