
import { ReviewContent } from './types';

export const COLORS = {
  blue: '#3477E4',
  black: '#121212',
  white: '#FFFFFF',
};

export const LUSHA_REVIEW: ReviewContent = {
  competitorName: "Lusha",
  year: "2026",
  headline: "Lusha Review 2026: The 'Direct Dial' King or Just Another Expensive Database?",
  intro: "In the cutthroat world of B2B sales, a direct dial is worth its weight in gold. Bypassing the gatekeeper is the difference between a booked meeting and a dead lead. But is Lusha still the secret weapon, or just an expensive plugin trying to do too much?",
  summaryVerdict: "Lusha is widely considered top-tier for direct mobile numbers, particularly in the US and EMEA. However, the restrictive credit system and inconsistent email validity mean it's often better used as a secondary tool alongside a high-accuracy finder like Scalelist.",
  whatIsText: "Lusha is a go-to-market intelligence platform designed to help sales, marketing, and recruitment teams find accurate B2B contact information. It leverages a 'Community Edition' model to crowdsource data directly from user email headers and signatures.",
  landingScreenshot: "input_file_0.png",
  reviewScreenshot: "input_file_1.png",
  useCases: [
    "Headhunting: Recruiters finding candidates on LinkedIn.",
    "Cold Calling: Sales reps unlocking direct mobile numbers.",
    "Enrichment: Marketers updating incomplete CRM records.",
    "Sales Engagement: Sending basic email sequences via 'Engage'."
  ],
  howItWorks: {
    title: "How Lusha Gathers Data",
    points: [
      { title: "Community Network", description: "Crowdsourcing from user email headers and signatures." },
      { title: "Public Web Data", description: "Aggregating publicly available professional information." },
      { title: "Machine Learning", description: "Verifying and cross-referencing datasets for accuracy." }
    ]
  },
  features: {
    title: "Core Features Breakdown",
    items: [
      { title: "Chrome Extension", description: "Glows blue on LinkedIn/Salesforce to reveal contacts instantly.", verdict: "Verdict: Best-in-class UI/UX." },
      { title: "Prospecting Platform", description: "Searchable database with Firmographic, Technographic, and Intent filters." },
      { title: "Lusha Engage", description: "Lightweight sequencing tool for basic email cadences.", verdict: "Verdict: Basic deliverability." },
      { title: "CRM Integrations", description: "Native 'one-click' exports to Salesforce, HubSpot, and Pipedrive." }
    ]
  },
  accuracyData: {
    mobile: "80%+ (Strongest for US/EMEA Mobiles)",
    email: "70-85% (Common issues with Catch-Alls)",
    decay: "Standard static database decay (Needs manual re-enrichment)"
  },
  pricing: {
    minimum: "$29.90 - $69.90 per month",
    contract: "Monthly or Annual available. Credit-based usage.",
    hiddenCosts: [
      "Mobile Reveals (5 credits each)",
      "Email Reveals (1 credit each)",
      "CSV Exports (1 credit up to 25 rows)",
      "CRM Sync (1 credit per contact)"
    ]
  },
  pros: [
    "Excellent mobile number accuracy",
    "Highly intuitive Chrome extension",
    "GDPR and CCPA compliant (Safe to use)",
    "Fast one-click CRM synchronization"
  ],
  cons: [
    "Anxiety-inducing credit limits",
    "High bounce rates on 'Catch-All' emails",
    "Expensive for high-volume lead building",
    "No automated job change monitoring"
  ],
  faq: [
    { question: "Is Lusha legit?", answer: "Yes. It is a reputable company used by Google and Amazon. It is fully compliant with privacy laws like GDPR and CCPA." },
    { question: "How accurate is Lusha?", answer: "Highly accurate for mobile numbers (80%+). For emails, it often provides catch-alls which may bounce. Scalelist offers 98% email accuracy by comparison." },
    { question: "What is Lusha used for?", answer: "Finding direct dial phone numbers, enriching CRM data, and building prospect lists from LinkedIn." },
    { question: "Does Lusha offer a free trial?", answer: "Yes, they have a 'Free Forever' plan with 40 credits per month to test the tool." }
  ]
};
