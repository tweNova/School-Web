import { GraduationCap, MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-dark-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-heading font-bold">
                Rose Merry Model <span className="text-secondary">Public School</span>
              </span>
            </a>
            <p className="text-sm text-dark-foreground/70 mb-6">
              CBSE Board Class 1-12.in. Empowering students with quality education and innovative learning experiences.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            {["About Us", "Our Courses", "Our Teachers", "Contact Us", "Latest News"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center gap-2 text-sm text-dark-foreground/70 hover:text-secondary transition-colors py-1.5"
                >
                  <ArrowRight className="w-3 h-3" /> {link}
                </a>
              )
            )}
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Courses</h4>
            {["Acting And Drama", "Art And Design", "Biology & Conservation", "Health Administration", "Accounting & Finance"].map(
              (course) => (
                <a
                  key={course}
                  href="#"
                  className="flex items-center gap-2 text-sm text-dark-foreground/70 hover:text-secondary transition-colors py-1.5"
                >
                  <ArrowRight className="w-3 h-3" /> {course}
                </a>
              )
            )}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-dark-foreground/70">Islampur, uttar dinajpur , westbengal, india</span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-dark-foreground/70">+919932239526</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-dark-foreground/70">rosemerrymodelpublicschool@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10">
        <div className="container py-5 flex flex-wrap justify-between items-center gap-4 text-sm text-dark-foreground/50">
          <p>&copy; 2024 Rose Merry Model Public School. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Terms Of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
