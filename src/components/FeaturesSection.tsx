import { GraduationCap, Building, Home, Video, Bus, MessageCircle, Monitor, ClipboardList, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  { icon: GraduationCap, title: "Experienced Teachers", desc: "Trained faculty members." },
  { icon: Building, title: "Day Scholar & Boarding", desc: "Flexible attendance options." },
  { icon: Home, title: "Separate Hostels", desc: "Safe accommodation for boys and girls." },
  { icon: Video, title: "CCTV Surveillance", desc: "24/7 security for student safety." },
  { icon: Bus, title: "Transport Facility", desc: "Convenient travel options available." },
  { icon: MessageCircle, title: "Spoken English", desc: "Specialized language training." },
  { icon: Monitor, title: "Computer Education", desc: "Basic and advanced IT skills." },
  { icon: ClipboardList, title: "Monthly Tests", desc: "Regular progress tracking." },
  { icon: Heart, title: "Support for Weak Students", desc: "Extra care and remedial classes." },
  { icon: Award, title: "Scholarships", desc: "Concessions for meritorious and needy." },
];

const FeaturesSection = () => {
  return (
    <section id="facilities" className="relative -mt-16 z-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group border border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <h4 className="text-base font-bold mb-1 group-hover:text-primary transition-colors">{f.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
