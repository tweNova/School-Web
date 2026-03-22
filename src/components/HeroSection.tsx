import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-secondary text-sm font-semibold uppercase tracking-[3px] mb-4 border-b-2 border-secondary pb-1">
            Welcome To Rose Merry Model Public School!
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
            Start Your Beautiful And{" "}
            <span className="text-secondary italic">Bright</span> Future
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
            CBSE Board Class 1-12.in. Empowering minds and shaping futures through quality education,
            innovative teaching, and a supportive learning environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
            >
              ABOUT MORE <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
