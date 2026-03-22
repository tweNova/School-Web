import { BookOpen, GraduationCap, Users, Award } from "lucide-react";

const stats = [
  { icon: BookOpen, number: 267, label: "Total Courses" },
  { icon: GraduationCap, number: 1013, label: "Our Students" },
  { icon: Users, number: 400, label: "Skilled Lecturers" },
  { icon: Award, number: 16, label: "Win Awards" },
];

const StatsSection = () => {
  return (
    <section className="counter-bg py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center text-primary-foreground">
              <s.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-bold font-heading mb-1">{s.number}+</div>
              <p className="text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
