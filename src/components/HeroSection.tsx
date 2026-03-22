import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-indian.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-[2px] mb-4 px-4 py-1.5 rounded-full shadow-lg">
            🎉 Session starts from January 2026 - Free Admission!
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading drop-shadow-lg">
            Welcome To Rose Merry Model <span className="text-secondary italic">Public School</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-medium mb-8 max-w-xl bg-dark/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl">
            Free admission for Nursery, LKG, and UKG! Empowering minds and shaping futures through quality CBSE & WB Board education.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              APPLY NOW <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-bold shadow-lg hover:bg-white/90 hover:scale-105 transition-all"
            >
              ABOUT US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
