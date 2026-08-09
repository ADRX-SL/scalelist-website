
export interface ReviewContent {
  competitorName: string;
  year: string;
  headline: string;
  intro: string;
  summaryVerdict: string;
  whatIsText: string;
  useCases: string[];
  landingScreenshot: string;
  reviewScreenshot: string;
  howItWorks: {
    title: string;
    points: { title: string; description: string }[];
  };
  features: {
    title: string;
    items: { title: string; description: string; verdict?: string }[];
  };
  accuracyData: {
    mobile: string;
    email: string;
    decay: string;
  };
  pricing: {
    minimum: string;
    contract: string;
    hiddenCosts: string[];
  };
  pros: string[];
  cons: string[];
  faq: { question: string; answer: string }[];
}
