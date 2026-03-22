import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import TeachersSection from "@/components/TeachersSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <TeachersSection />
      <WhyChooseSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
