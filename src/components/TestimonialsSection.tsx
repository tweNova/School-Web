import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Richard Lock", role: "Student", text: "The quality of education and the support from faculty have been exceptional. I feel well-prepared for my career." },
  { name: "Randal Grand", role: "Student", text: "The campus facilities and learning resources are world-class. My experience here has been truly transformative." },
  { name: "Edward Miles", role: "Student", text: "The professors go above and beyond to ensure every student succeeds. I highly recommend this institution." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-title">Testimonials</span>
          <h2 className="section-heading">What Our Students Say</h2>
          <p className="section-desc">
            Hear from our students about their experiences and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-section-bg rounded-lg p-8 relative group hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary-foreground/20 mb-4" />
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 transition-colors">
                {t.text}
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <div>
                <h5 className="font-bold">{t.name}</h5>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
