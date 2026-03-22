import { Users, BookOpen, Monitor, DollarSign } from "lucide-react";
import chooseBg from "@/assets/choose-bg.jpg";

const reasons = [
  { icon: Users, title: "Expert Teachers", desc: "Highly qualified faculty with industry experience." },
  { icon: BookOpen, title: "Course Materials", desc: "Comprehensive study resources and digital tools." },
  { icon: Monitor, title: "Online Courses", desc: "Flexible learning options anytime, anywhere." },
  { icon: DollarSign, title: "Affordable Price", desc: "Quality education within everyone's reach." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-title">Why Choose Us</span>
            <h2 className="section-heading">We Are Expert & Do Our Best For Your Goal</h2>
            <p className="text-muted-foreground mb-8">
              With decades of experience in education, we provide the tools, knowledge,
              and support you need to achieve your academic and professional goals.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">{r.title}</h5>
                    <p className="text-muted-foreground text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={chooseBg} alt="Campus" className="rounded-lg w-full h-[450px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
