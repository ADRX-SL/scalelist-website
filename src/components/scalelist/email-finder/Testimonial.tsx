import { Quote } from "lucide-react";
import marijaImg from "@/assets/email-finder/marija-velkovica.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-2xl bg-card p-10 lg:grid-cols-2">
          <div>
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <p className="mb-6 text-muted-foreground">
              "Scalelist is an absolutely incredible tool. It is very user-friendly, provides a high level of precision for the data obtained, and offers amazing customer support. The Scalelist team are open to feedback and strive to make the tool better every day. A huge thank you to Arnaud and his colleagues for making Scalelist possible."
            </p>
            <div>
              <p className="font-semibold text-foreground">Marija Velkovica</p>
              <p className="text-sm text-muted-foreground">
                Data Research Specialist
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-64 overflow-hidden rounded-2xl">
              <img
                src={marijaImg}
                alt="Marija Velkovica"
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
