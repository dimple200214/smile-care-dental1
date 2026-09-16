import Link from "next/link";
import { ShieldCheck, Award, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Our Mission & Clinic
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Redefining Dental Care Comfort
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Combining surgical precision with high-end hospital safety standards since 2012.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              State-of-the-Art Care Without Dental Anxiety
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              SmileCare Dental Center was established with a singular mission: to eliminate dental anxiety through technology and patient-first clinical empathy.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our clinic features private, sound-dampened procedure suites equipped with soft ambient lighting, low-noise laser instruments, and digital impression scanners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <span className="text-3xl font-extrabold text-blue-600 block">10k+</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Happy Patients</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <span className="text-3xl font-extrabold text-blue-600 block">15+</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Years Experience</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <span className="text-3xl font-extrabold text-blue-600 block">99.2%</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Satisfaction Score</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <span className="text-3xl font-extrabold text-blue-600 block">100%</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">Sterile Safety</span>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <ShieldCheck size={32} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Hospital-Grade Sterilization</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Multi-tier autoclave serialization protocols for every single clinical instrument prior to patient entry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <Sparkles size={32} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Advanced Laser Equipment</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Drill-free laser cavity treatments and soft tissue shaping reduce healing time by over 50%.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <Heart size={32} className="text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Transparent & Ethical Care</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Clear diagnostic explanations and upfront cost estimates with zero surprise medical billing.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to Experience Gentle Dental Care?</h3>
            <p className="text-slate-400 text-sm mt-1">Book your initial oral consultation in under 2 minutes.</p>
          </div>
          <Link
            href="/book"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all text-sm shrink-0 flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}