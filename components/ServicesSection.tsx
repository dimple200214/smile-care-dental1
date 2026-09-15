import Link from "next/link";
import { Sparkles, ArrowRight, Activity, Smile, ShieldAlert, Sparkle, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements engineered with precision titanium post technology.",
    perk: "Lifetime Warranty Available",
    link: "/services#implants",
  },
  {
    icon: Smile,
    title: "Invisalign & Orthodontics",
    description: "Clear, removable aligners designed to straighten your smile discreetly without traditional metal braces.",
    perk: "3D Digital Scanning",
    link: "/services#invisalign",
  },
  {
    icon: Activity,
    title: "Root Canal Therapy",
    description: "Single-visit, virtually painless endodontic treatment designed to save infected or damaged teeth.",
    perk: "Laser Micro-Technology",
    link: "/services#root-canal",
  },
  {
    icon: Sparkle,
    title: "Cosmetic Veneers",
    description: "Ultra-thin porcelain shells crafted to fix gaps, chips, and discoloration for a red-carpet smile.",
    perk: "Custom Shade Matching",
    link: "/services#veneers",
  },
  {
    icon: HeartPulse,
    title: "Pediatric Dentistry",
    description: "Gentle, anxiety-free dental care designed specifically for toddlers, children, and young teens.",
    perk: "Child-Friendly Environment",
    link: "/services#pediatric",
  },
  {
    icon: ShieldAlert,
    title: "24/7 Emergency Care",
    description: "Immediate relief and emergency treatment for sudden toothaches, trauma, or broken crowns.",
    perk: "Same-Day Appointments",
    link: "/services#emergency",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Oral Health
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Treatments Designed for You
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            We utilize hospital-grade sterilization and advanced 3D imaging technology to deliver precise, pain-free treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 inline-block mb-3">
                    {service.perk}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 pt-4 border-t border-slate-200/60"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}