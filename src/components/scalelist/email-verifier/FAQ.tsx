import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "How does Scalelist verify emails?",
    answer:
      "We do SMTP validation, MX record check, Catch-all check, Domain check, Spam traps, Disposable check, Syntax check, Graylist-proof.",
  },
  {
    question: "How does Scalelist email finder perform?",
    answer:
      "We guarantee a 3% maximum bounce rate on safe emails. Risky emails can bounce up to 17%.",
  },
  {
    question: "How much does a verification cost?",
    answer:
      "Email verification are included",
  },
  {
    question: "Is Scalelist GDPR - CCPA compliant?",
    answer:
      "Yes. Scalelist only provides professional emails usable for prospecting.",
  },
  {
    question: "Can I cancel or change my plan at any time?",
    answer:
      "You can cancel your monthly subscription at any time and continue using your credits until the end of your billing period.",
  },
  {
    question: "What happens if I don't use all my credits?",
    answer:
      "Unused credits will roll over to the next billing period as long as you have an active subscription.",
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
