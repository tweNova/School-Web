import { BookOpen, Globe, ArrowRight, Phone } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={about1} alt="Library" className="rounded-lg w-full h-64 object-cover" />
                <div className="bg-primary rounded-lg p-4 text-center text-primary-foreground">
                  <span className="text-3xl font-bold font-heading">30</span>
                  <p className="text-sm font-medium">Years Of Quality Service</p>
                </div>
              </div>
              <div className="pt-8">
                <img src={about2} alt="Students" className="rounded-lg w-full h-80 object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-title">About Us</span>
            <h2 className="section-heading">Our Education System Inspires You More.</h2>
            <p className="text-muted-foreground mb-6">
              We provide comprehensive education programs designed to nurture talent,
              build character, and prepare students for a successful future in an
              ever-changing world.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Education Services</h5>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive curriculum designed by industry experts for real-world success.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold mb-1">International Hubs</h5>
                  <p className="text-muted-foreground text-sm">
                    Global network of partner institutions for exchange programs and collaborations.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Our dedicated faculty and modern facilities create the perfect environment
              for academic excellence and personal growth. Under the leadership of our
              honorable Director, <strong>Mr. Md. Sabbil</strong>, we continuously strive
              for educational innovation and holistic student development.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Discover More <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Call Now</span>
                  <p className="font-bold text-sm">+919932239526</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
