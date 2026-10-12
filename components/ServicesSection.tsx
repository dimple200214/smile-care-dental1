"use client";

import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Smile, 
  Activity, 
  Stethoscope, 
  Award
} from "lucide-react";

const services = [
  {
    id: "laser-root-canal",
    title: "Painless Laser Root Canal",
    description: "Single-sitting microscopic RCT designed to eliminate infection without discomfort or extended recovery.",
    duration: "45 - 60 Mins",
    highlight: "Single Visit Available",
    icon: Zap,
    benefits: ["99.4% Success Rate", "Microscopic Precision", "3D Digital Scanning"],
    badge: "Most Popular",
  },
  {
    id: "dental-implants",
    title: "Keyhole Dental Implants",
    description: "Permanent, natural-looking tooth replacement using Swiss titanium implants for lifelong durability.",
    duration: "30 Mins Procedure",
    highlight: "Lifetime Warranty",
    icon: Activity,
    benefits: ["Immediate Loading", "Swiss Titanium", "Natural Bite Strength"],
    badge: "Swiss Tech",
  },
  {
    id: "invisalign",
    title: "Clear Aligners & Invisalign",
    description: "Virtually invisible, custom-molded aligners to straighten teeth discreetly without metal braces.",
    duration: "12 - 18 Months",
    highlight: "3D Smile Simulation",
    icon: Smile,
    benefits: ["100% Removable", "Zero Food Restrictions", "Virtually Invisible"],
    badge: "Cosmetic Choice",
  },
  {
    id: "cosmetic-makeover",
    title: "Hollywood Smile Makeover",
    description: "Custom ultra-thin porcelain veneers and digital smile designing for a perfect, radiant smile.",
    duration: "2 Visit Transformation",
    highlight: "Custom Porcelain",
    icon: Sparkles,
    benefits: ["Stain Resistant", "Digital Mockup First", "10+ Year Durability"],
    badge: "Premium Care",
  },
  {
    id: "teeth-whitening",
    title: "3D Laser Teeth Whitening",
    description: "Professional in-clinic whitening technology that lightens tooth enamel up to 8 shades in one session.",
    duration: "45 Mins",
    highlight: "Instant Results",
    icon: Award,
    benefits: ["Zero Enamel Damage", "Long-Lasting Brightness", "Enamel-Safe Gel"],
    badge: "Quick Care",
  },
  {
    id: "general-dentistry",
    title: "Preventive Checkup & Cleaning",
    description: "Comprehensive ultrasonic scaling, digital X-rays, and oral cancer screening for optimal oral health.",
    duration: "30 Mins",
    highlight: "Routine Maintenance",
    icon: Stethoscope,
    benefits: ["Plaque Removal", "Digital Oral Audit", "Fresh Breath Therapy"],
    badge: "Essential",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Specialized Clinical Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Dental Solutions Crafted for Your Comfort
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            We utilize hospital-grade sterilization and German micro-dental equipment to deliver pain-free treatment outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Duration & Highlights */}
                  <div className="flex items-center space-x-4 text-xs font-medium text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 border-l border-slate-200 pl-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.highlight}</span>
                    </div>
                  </div>

                  {/* Key Benefits List */}
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-700 space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action */}
                <Link
                  href={`/book?treatment=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-md"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}