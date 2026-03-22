import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="cta-gradient py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading">
          Our 20% Offer Running - Join Today For Your Course
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Take advantage of our limited-time offer and start your educational
          journey today with significant savings on all programs.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
