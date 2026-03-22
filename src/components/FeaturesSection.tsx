import { GraduationCap, Users, BookOpen, DollarSign } from "lucide-react";

const features = [
  { icon: DollarSign, number: "01", title: "Scholarship Facility", desc: "Providing financial assistance to deserving students for their academic journey." },
  { icon: Users, number: "02", title: "Skilled Lecturers", desc: "Learn from experienced and highly qualified professors and mentors." },
  { icon: BookOpen, number: "03", title: "Book Library Facility", desc: "Access thousands of books and digital resources in our modern library." },
  { icon: DollarSign, number: "04", title: "Affordable Price", desc: "Quality education at competitive prices with flexible payment options." },
];

const FeaturesSection = () => {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 font-heading">
                  {f.number}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-2">{f.title}</h4>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
