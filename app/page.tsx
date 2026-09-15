import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsSection from "@/components/DoctorsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorsSection />
    </div>
  );
}