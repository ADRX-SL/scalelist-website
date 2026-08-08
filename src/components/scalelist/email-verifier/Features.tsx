import { Star, Code, Filter, Waypoints, AlertTriangle, Trash2, AtSign, Flag, Hand } from "lucide-react";

const features = [
  { icon: Star, title: "SMTP validation", desc: "Remove dead, invalid, and unresponsive emails from your list." },
  { icon: Code, title: "MX record check", desc: "An MX record check lets us confirm the email is in use and able to accept mail." },
  { icon: Filter, title: "Catch-all check", desc: "We check against known catch-all email and domain databases." },
  { icon: Waypoints, title: "Domain check", desc: "Our algorithm checks whether the email's domain is real." },
  { icon: AlertTriangle, title: "Spam traps", desc: "Use our smart spamtrap indicators to remove honeypots." },
  { icon: Trash2, title: "Disposable check", desc: "We can detect temporary, disposable, and questionable emails." },
  { icon: AtSign, title: "Syntax check", desc: "We check that the email is typed correctly and all symbols are in place." },
  { icon: Flag, title: "Graylist-proof", desc: "We are able to verify some of the most hard to check ESPs." },
  { icon: Hand, title: "Risk Validation", desc: "Get rid of emails containing high risk keywords and TLDs." },
];

const Features = () => {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
          99% deliverability on safe emails
        </h2>
        <p className="mb-16 text-center text-lg text-primary-foreground/80">
          Scalelist uses different verification methods to guarantee the best deliverability.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <f.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground" />
              <h3 className="mb-2 text-lg font-bold text-primary-foreground">{f.title}</h3>
              <p className="text-sm text-primary-foreground/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
