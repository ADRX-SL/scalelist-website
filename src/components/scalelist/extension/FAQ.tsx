import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "What is Scalelist?",
    answer:
      "Scalelist is a Chrome extension and data platform that helps sales teams find verified email addresses and mobile phone numbers from any website or social profile. It integrates directly into your browser workflow so you can build targeted lead lists without switching between tools.",
  },
  {
    question: "How accurate is the data?",
    answer:
      "Scalelist delivers up to 95% data accuracy across email addresses and phone numbers. Our data is refreshed weekly and verified using multiple validation methods to ensure you're always working with the most reliable contact information available.",
  },
  {
    question: "Does Scalelist integrate with my CRM?",
    answer:
      "Yes, Scalelist integrates with all major CRMs including Salesforce, HubSpot, and Pipedrive. You can also export your lead lists to CSV or sync them directly with your existing sales tools and workflows.",
  },
  {
    question: "Is Scalelist GDPR compliant?",
    answer:
      "Absolutely. Scalelist is fully GDPR compliant. We only surface publicly available business contact information and follow strict data privacy protocols. You can learn more about our data practices in our privacy policy.",
  },
];

const FAQ = () => {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-4 flex justify-center">
          <Badge variant="secondary" className="text-sm">FAQ</Badge>
        </div>
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
