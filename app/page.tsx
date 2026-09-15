import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsSection from "@/components/DoctorsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorsSection />
      <FAQSection />
    </div>
  );
}