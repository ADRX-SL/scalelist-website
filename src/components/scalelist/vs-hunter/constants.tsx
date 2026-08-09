
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const HUNTER_REVIEW: ReviewContent = {
  competitorName: "Hunter.io",
  year: "2026",
  headline: "Hunter.io Review 2026: The OG Email Finder or Just an Expensive Scraper?",
  intro: "If you have ever tried to find an email address online, you have probably stumbled upon the orange fox icon. Hunter.io is one of the oldest names in the game. But in 2026, is scraping public sites enough to protect your sender reputation?",
  summaryVerdict: "Hunter.io is a reputable tool for finding generic or publicly listed emails. However, its lack of LinkedIn integration and mobile numbers—combined with a reliance on 'confidence scores' over strict real-time verification—makes it less ideal for high-performance sales teams compared to Scalelist.",
  whatIsText: "Hunter is a web-based email search and verification tool. Unlike database giants that maintain massive static directories, Hunter primarily acts as a web scraper, indexing billions of web pages to find email addresses publicly listed on the internet.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Domain Search: Finding all emails associated with a company domain.",
    "Email Finding: Locating specific emails via name and company input.",
    "Email Verification: Checking validity to prevent bounces.",
    "Cold Campaigns: Sending simple sequences to found leads."
  ],
  howItWorks: {
    title: "How Hunter Finds Data",
    points: [
      { title: "Public Web Scraping", description: "Crawling billions of pages to index publicly listed addresses." },
      { title: "Pattern Prediction", description: "Analyzing domain data to guess the most likely email format." },
      { title: "Source Transparency", description: "Providing direct links to where the data was found on the web." }
    ]
  },
  features: {
    title: "Core Features Breakdown",
    items: [
      { title: "Domain Search", description: "Flagship tool to see who works at a company. Shows public sources for every email.", verdict: "Verdict: Great transparency." },
      { title: "Email Finder & Verifier", description: "Predicts patterns with a confidence score. Real-time check for validity." },
      { title: "Hunter Campaigns", description: "Basic sequencing tool for Gmail/Outlook.", verdict: "Verdict: Inadequate for large teams." },
      { title: "Browser Extension", description: "Find emails while browsing company sites. (No longer works on LinkedIn).", verdict: "Verdict: Major workflow break." }
    ]
  },
  accuracyData: {
    mobile: "Not Available (Email Only Platform)",
    email: "Variable (Relies on public scraping & confidence scores)",
    decay: "Fast decay on public bios (No automated lead monitoring)"
  },
  pricing: {
    minimum: "$49 - $299 per month",
    contract: "Free tier available (50 credits). Paid plans for scale.",
    hiddenCosts: [
      "Search Costs (1 credit per lead)",
      "Verification (0.5 credit per lead)",
      "Multi-account caps",
      "No Mobile numbers included"
    ]
  },
  pros: [
    "Extremely clean and simple UI",
    "Source transparency (see where data came from)",
    "Reputable and established brand",
    "Useful free tier for small tasks"
  ],
  cons: [
    "No LinkedIn integration (Major deal-breaker)",
    "No mobile numbers or direct dials",
    "Email 'Confidence Scores' lead to bounces",
    "Restricted outreach features"
  ],
  faq: [
    { question: "Is Hunter.io legit?", answer: "Yes, it is used by over 6 million professionals and is a trusted name in the industry." },
    { question: "How accurate is Hunter.io?", answer: "It is accurate for public emails. For specific decision-makers, it relies on pattern guessing, which is less reliable than Scalelist's 98% verification." },
    { question: "What is Hunter.io used for?", answer: "Finding business emails at scale from domain names and verifying email validity." },
    { question: "Does Hunter.io have a LinkedIn extension?", answer: "No. They removed it years ago. You cannot find emails directly on LinkedIn profiles with Hunter. You need Scalelist for that." }
  ]
};
