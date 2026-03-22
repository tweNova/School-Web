import { Clock, Users, Star, ArrowRight } from "lucide-react";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";

const courses = [
  { img: course1, category: "Drama", title: "Acting And Drama", lessons: 10, rating: 4.0, seats: 75, years: 4, price: 750 },
  { img: course2, category: "Design", title: "Art And Design", lessons: 10, rating: 4.0, seats: 75, years: 4, price: 750 },
  { img: course3, category: "Science", title: "Biology And Conservation", lessons: 10, rating: 4.0, seats: 75, years: 4, price: 750 },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-section-bg">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-title">Our Courses</span>
          <h2 className="section-heading">Let's Check Our Courses</h2>
          <p className="section-desc">
            Explore our wide range of courses designed to help you achieve your academic
            and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={i} className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
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
                  Comprehensive curriculum with hands-on projects and expert mentorship.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {c.seats} Seats
                    </span>
                    <span>0{c.years} Years</span>
                  </div>
                  <span className="text-lg font-bold text-primary">${c.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
