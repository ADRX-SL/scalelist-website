
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const ROCKETREACH_REVIEW: ReviewContent = {
  competitorName: "RocketReach",
  year: "2025",
  headline: "RocketReach Review 2025: Is It the Best Contact Finder?",
  intro: "In the high-stakes world of sales, marketing, and recruitment, accurate contact info is a requirement for success. RocketReach claims to be the world's largest database, with information on 700M+ professionals. But does it live up to the ambitious claims?",
  summaryVerdict: "RocketReach is one of the best tools for finding accurate B2B email addresses at scale. Its massive database and seamless LinkedIn extension make it a powerhouse for prospecting. However, phone number accuracy is less consistent, and its strict 'use-it-or-lose-it' credit model requires careful management.",
  whatIsText: "RocketReach is a powerful B2B contact intelligence platform designed to find email addresses, phone numbers, and social profiles. It operates as a real-time data engine, crawling public records and company websites to build comprehensive professional profiles across 35 million companies.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Sales Development: Building targeted outbound prospecting lists.",
    "Recruitment: Sourcing and contacting passive candidates.",
    "ABM Marketing: Segmenting audiences for targeted campaigns.",
    "Data Enrichment: Appending contact info to existing CRM records."
  ],
  howItWorks: {
    title: "The RocketReach Data Engine",
    points: [
      { title: "Real-Time Aggregation", description: "Crawling public data from hundreds of sources to build fragmented profiles into full identities." },
      { title: "AI Pattern Prediction", description: "Advanced algorithms analyze domain data to infer likely email formats with confidence scores." },
      { title: "Live Server Verification", description: "Pinging mail servers in real-time to confirm addresses are active before presentation." }
    ]
  },
  features: {
    title: "Core Functionality Audit",
    items: [
      { title: "Advanced Search", description: "Filter by name, company, title, revenue, and location with Boolean support.", verdict: "Verdict: Industry-leading search depth." },
      { title: "Chrome Extension", description: "Find contacts directly from LinkedIn, Sales Navigator, or corporate websites." },
      { title: "Bulk Lookups", description: "Upload a list of names or LinkedIn URLs to append verified contact data instantly.", verdict: "Verdict: High efficiency for large lists." },
      { title: "API & Integrations", description: "Programmatic access and native sync with Salesforce, HubSpot, and Zapier." }
    ]
  },
  accuracyData: {
    mobile: "Variable (Consistently cited as less accurate than email)",
    email: "85% (Backed by real-time SMTP verification pings)",
    decay: "Dynamic Database (Real-time indexing reduces typical static decay)"
  },
  pricing: {
    minimum: "$39 - $249 per month",
    contract: "Essentials (1,200 exports/yr) to Ultimate (20,000 exports/yr). Credit-based system.",
    hiddenCosts: [
      "Use-it-or-lose-it monthly credits",
      "Expensive extra credit bundles",
      "Phone numbers often hit-or-miss",
      "Highly limited free trial (only a few lookups)"
    ]
  },
  pros: [
    "Massive database (700M+ profiles)",
    "Top-tier email accuracy (85%)",
    "Indispensable browser extension for LinkedIn",
    "User-friendly and intuitive interface"
  ],
  cons: [
    "Phone number reliability is inconsistent",
    "Credits expire every month (No rollover)",
    "Significant financial commitment for team plans",
    "Limited free trial makes evaluation difficult"
  ],
  faq: [
    { question: "Is RocketReach legit?", answer: "Yes. It is a highly reputable platform used by professionals at Google, Amazon, and Adobe." },
    { question: "How accurate is RocketReach?", answer: "They claim 85% accuracy for emails. Phone numbers are less reliable but still among the best available for broad searches." },
    { question: "Does RocketReach find phone numbers?", answer: "Yes, it provides mobile and direct dial numbers, though accuracy is lower than their email data." },
    { question: "Is there a free trial?", answer: "Yes, but it is very limited, offering only a few lookups to test the platform before committing." }
  ]
};
