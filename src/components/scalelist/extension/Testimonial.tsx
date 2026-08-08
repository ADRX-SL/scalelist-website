import { Quote } from "lucide-react";
import joshBrunschImg from "@/assets/extension/josh-brunsch.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-2xl bg-card p-10 lg:grid-cols-2">
          <div>
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <p className="mb-6 text-muted-foreground">
              "Scalelist has made creating prospect list and outreach easy. It's extremely user friendly and the team behind it is awesome. Can't recommend it enough."
            </p>
            <div>
              <p className="font-semibold text-foreground">Josh Brunsch</p>
              <p className="text-sm text-muted-foreground">
                Business Development Representative
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-64 overflow-hidden rounded-2xl">
              <img
                src={joshBrunschImg}
                alt="Josh Brunsch"
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
