import { Quote } from "lucide-react";
import aaronImg from "@/assets/email-verifier/aaron-gilin.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-2xl bg-card p-10 lg:grid-cols-2">
          <div>
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <p className="mb-6 text-muted-foreground">
              "Scalelist has been essential to my success in prospecting for work. Ownership is incredibly helpful and kind. 10/10 recommend utilizing their system."
            </p>
            <div>
              <p className="font-semibold text-foreground">Aaron Gilin</p>
              <p className="text-sm text-muted-foreground">
                Account Executive
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-64 overflow-hidden rounded-2xl">
              <img
                src={aaronImg}
                alt="Aaron Gilin"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
