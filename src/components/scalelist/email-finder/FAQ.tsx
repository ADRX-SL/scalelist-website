import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "How can I find email addresses with Scalelist's Email Finder tool?",
    answer:
      "To find professional email addresses using our tool, simply provide the person's full name and the domain name or website. Scalelist's Email Finder will then find and verify contact information for the specified professional",
  },
  {
    question: "How accurate is Scalelist's Email Finder in finding email addresses?",
    answer:
      "Scalelist's Email Finder uses a sophisticated verification process that results in over 98% accuracy when identifying the status of an email address. This process ensures that email addresses marked as 'valid' have a bounce rate of less than 5%.",
  },
  {
    question: "What sets Scalelist's Email Finder ahead from other email lookup tools?",
    answer:
      "In addition to being extremely fast, easy to use, and way more affordable than competitors, Scalelist's Email Finder is able to confirm validity status on more email addresses from the same list of prospects, making it ideal for businesses operating with a limited number of prospects.",
  },
  {
    question: "Can I find email addresses from a list of people?",
    answer:
      "Yes, you can find email addresses from a list of people by using our bulk search feature. Upload a list of names and companies, and our email address finder will provide verified email addresses and their verification status in a CSV or Excel format\n\nThis email list can be easily imported in any CRM.",
  },
  {
    question: "How much does it cost to use Scalelist's Email Finder for searching email addresses?",
    answer:
      "You only use 1 credit for each verified email you unlock. Every email on Scalelist is always verified. If you've already searched that contact, you won't be charged. Our 14-days free plan includes 50 free credits. Paid plans start at $49/month for 1,500 credits, and the cost per credit drops on higher plans as you scale. You can also try the email finder on this page with 5 free searches.",
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
