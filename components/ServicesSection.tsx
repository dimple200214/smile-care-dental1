"use client";

import Link from "next/link";
import { Sparkles, Clock, ShieldCheck, ArrowRight, CheckCircle2, Zap, Smile, Activity, Stethoscope, Award } from "lucide-react";

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
    <section id="services" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Specialized Clinical Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advanced Dental Solutions Crafted for Your Comfort
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            We utilize hospital-grade sterilization and German micro-dental equipment to deliver pain-free treatment outcomes[cite: 2].
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs font-medium text-slate-400 mb-6 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 border-l border-slate-800 pl-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{service.highlight}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-300 space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/book?treatment=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold py-3 px-4 rounded-xl transition shadow-md shadow-sky-600/20"
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