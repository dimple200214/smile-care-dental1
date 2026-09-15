import Link from "next/link";
import { Sparkles, Smile, Activity, Sparkle, HeartPulse, ShieldAlert, CheckCircle, ArrowRight } from "lucide-react";

const detailedServices = [
  {
    id: "implants",
    icon: Sparkles,
    title: "Dental Implants & Restoration",
    tagline: "Permanent, bio-compatible root replacements with 98.7% success rate.",
    details: [
      "Titanium & Zirconia posts for maximum durability",
      "Computer-guided 3D flapless surgical placement",
      "Same-day temporary crown placement available",
      "Lifetime structural warranty on implant posts",
    ],
    price: "From $1,200 / tooth",
  },
  {
    id: "invisalign",
    icon: Smile,
    title: "Invisalign & Clear Aligners",
    tagline: "Discreet orthodontic alignment without brackets or wires.",
    details: [
      "iTero 3D digital scan—no messy physical impressions",
      "Predictable treatment planning preview",
      "Removable aligners for easy eating & brushing",
      "Average treatment duration: 6 - 12 months",
    ],
    price: "From $2,800 full case",
  },
  {
    id: "root-canal",
    icon: Activity,
    title: "Painless Root Canal Therapy",
    tagline: "Single-visit endodontic care using precision micro-lasers.",
    details: [
      "Rotary endodontics for faster, quieter cleaning",
      "Computerized localized anesthesia delivery",
      "Protective porcelain crown fitting included",
      "Immediate relief from acute toothache",
    ],
    price: "From $650 / tooth",
  },
  {
    id: "veneers",
    icon: Sparkle,
    title: "Cosmetic Porcelain Veneers",
    tagline: "Custom-crafted ceramic shells for a flawless smile makeover.",
    details: [
      "Ultra-thin ceramic design with minimal enamel reduction",
      "Stain-resistant high-lustre finish",
      "Custom shade-matching to natural tooth tone",
      "Corrects gaps, chips, and stubborn discoloration",
    ],
    price: "From $850 / tooth",
  },
  {
    id: "pediatric",
    icon: HeartPulse,
    title: "Pediatric & Family Dentistry",
    tagline: "Gentle, anxiety-free dental visits for children and teens.",
    details: [
      "Preventative fluoridation and cavity sealants",
      "Child-friendly sensory-optimized procedure rooms",
      "Habit correction guidance (thumb sucking, grinding)",
      "Interactive oral hygiene education",
    ],
    price: "From $120 / checkup",
  },
  {
    id: "emergency",
    icon: ShieldAlert,
    title: "24/7 Emergency Dental Care",
    tagline: "Immediate response for urgent dental trauma and acute pain.",
    details: [
      "Reserved daily open slots for urgent cases",
      "Emergency tooth extractions and trauma stabilization",
      "Broken crown or bridge repair on the same day",
      "Direct line to on-call surgeon",
    ],
    price: "Priority triage standard rate",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Clinical Procedures
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Dental Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Transparent pricing, advanced technology, and board-certified specialists for every treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {service.price}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">{service.tagline}</p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/book"
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors text-xs text-center flex items-center justify-center gap-2 mt-4"
                >
                  <span>Book This Treatment</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}