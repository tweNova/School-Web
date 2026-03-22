import { Facebook, Twitter, Linkedin } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import teacher4 from "@/assets/teacher-4.jpg";

const teachers = [
  { img: teacher1, name: "Angela T. Vigil", role: "Associate Professor" },
  { img: teacher2, name: "Frank A. Mitchell", role: "Associate Professor" },
  { img: teacher3, name: "Susan D. Lunsford", role: "CEO & Founder" },
  { img: teacher4, name: "Dennis A. Pruitt", role: "Associate Professor" },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-title">Our Teachers</span>
          <h2 className="section-heading">Meet With Our Teachers</h2>
          <p className="section-desc">
            Our dedicated faculty members bring years of experience and passion for education.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <div key={i} className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-2 pb-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
              <h5 className="font-bold text-lg">{t.name}</h5>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
