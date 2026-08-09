import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "How can I find someone's phone number for free?",
    answer:
      "Our 14-days free plan includes 50 free credits, which you can use to find mobile numbers of decision-makers for free. Just upload a CSV or use our Chrome extension to find contact numbers instantly.",
  },
  {
    question: "How can I build a list of Mobile Numbers?",
    answer:
      "To build a cold calling list, start by defining your ideal prospects—like role, seniority, or company size. Then use Scalelist to find and verify mobile numbers from a range of B2B data sources, including social networks. You can search inside the platform, enrich existing lead lists, or pull numbers directly from profiles with our extension. Every number is export-ready and perfect for outreach.",
  },
  {
    question: "What's the best way to find a business phone number?",
    answer: (
      <div>
        <p className="mb-2">Use Scalelist's business phone search in three ways:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Upload a CSV with names and companies to enrich it with verified mobile numbers.</li>
          <li>Use our Chrome extension on Social Networks to get contact numbers in one click.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How accurate is Scalelist's phone finder?",
    answer:
      "Scalelist's contact number finder by name uses live data sources and verification layers to deliver accurate mobile numbers. We consistently hit high match rates on mobile enrichment—especially for sales, growth, and outbound teams who need reliable cold calling numbers.",
  },
  {
    question: "How much does it cost to use Scalelist's phone finder?",
    answer: (
      <div>
        <p className="mb-2">Scalelist runs on a credit system. Each mobile number found costs 20 credits. You get:</p>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li>Our 14-days free plan includes 50 free credits.</li>
          <li>Paid plans with higher volumes and team features</li>
          <li>Custom pricing for high-volume B2B sales teams</li>
        </ul>
        <p>You only pay when data is found—no fluff, no filler.</p>
      </div>
    ),
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
        <Accordion type="single" collapsible>
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
