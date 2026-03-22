import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import course1 from "@/assets/course-1-indian.jpg";
import course2 from "@/assets/course-2-indian.jpg";
import course3 from "@/assets/course-3.jpg"; // Keeping unused import for safety if it was referenced

const courses = [
  { img: course1, category: "Foundation", title: "Nursery to Class IV", lessons: "All Subjects", rating: 5.0, seats: "Open", years: "CBSE Pattern", price: "Free Admission" },
  { img: course2, category: "Secondary", title: "Class V to X", lessons: "All Subjects", rating: 4.8, seats: "Limited", years: "WBBSE Board", price: "Contact Us" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-section-bg overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-title">Classes Offered</span>
          <h2 className="section-heading">Our Academic Structure</h2>
          <p className="section-desc">
            We offer a comprehensive academic progression from early childhood through secondary education, ensuring a seamless and enriching learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative">
                <img src={c.img} alt={c.title} className="w-full h-52 object-cover" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                  {c.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {c.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-secondary fill-secondary" /> ({c.rating})
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {c.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive curriculum with hands-on projects and expert mentorship following the {c.years}.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {c.seats}
                    </span>
                    <span className="font-bold text-dark">{c.years}</span>
                  </div>
                  <span className="text-base font-bold text-secondary bg-secondary/10 px-3 py-1 rounded">{c.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
