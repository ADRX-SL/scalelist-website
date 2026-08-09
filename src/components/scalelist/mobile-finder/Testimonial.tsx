import { Quote } from "lucide-react";
import andreasImg from "@/assets/mobile-finder/andreas-martis.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 rounded-2xl bg-card p-10 lg:grid-cols-2">
          <div>
            <Quote className="mb-4 h-10 w-10 text-primary" />
            <p className="mb-6 text-muted-foreground">
              "Absolutely amazing piece of software. Did multiple comparisons for similar software and this one came out on top by a long shot. The plug in was so easy to install, the end to end process of setting up a list and extracting was so smooth. Could not recommend this enough to anyone looking. Will be upgrading to an even bigger subscription soon!!"
            </p>
            <div>
              <p className="font-semibold text-foreground">Andreas Martis</p>
              <p className="text-sm text-muted-foreground">
                Owner
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-64 overflow-hidden rounded-2xl">
              <img
                src={andreasImg}
                alt="Andreas Martis"
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
