"use client";

import Link from "next/link";
import { Award, Calendar, ShieldCheck, Stethoscope, GraduationCap, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Jenkins, DDS",
    title: "Chief Implantologist & Cosmetic Surgeon",
    qualification: "Harvard School of Dental Medicine",
    experience: "14+ Years Experience",
    bio: "Dr. Jenkins specializes in full-mouth reconstructions and complex computer-guided dental implants with over 4,000 successful procedures.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    available: "Mon, Wed, Fri",
  },
  {
    name: "Dr. Aris Thorne, DMD",
    title: "Orthodontist & Clear Aligner Specialist",
    qualification: "UPenn School of Dental Medicine",
    experience: "10+ Years Experience",
    bio: "Certified Premier Invisalign Provider with a focus on non-extraction orthodontic alignment and facial symmetry optimization.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    available: "Tue, Thu, Sat",
  },
  {
    name: "Dr. Elena Rostova, MDS",
    title: "Endodontist & Pediatric Specialist",
    qualification: "Columbia University Dental School",
    experience: "8+ Years Experience",
    bio: "Expert in micro-endodontic root canals and anxious patient management through gentle laser techniques.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop",
    available: "Mon, Tue, Thu",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
            <span>Clinical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Dental Specialists
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Board-certified practitioners committed to ongoing clinical research and gentle patient care.
          </p>
        </div>

        {/* Doctors Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                {/* Doctor Photo */}
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 border border-slate-800 bg-slate-950 relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/80 text-[10px] font-bold text-emerald-400 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-xs font-semibold text-sky-400 mt-0.5 mb-1">{doctor.title}</p>
                
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mb-4">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{doctor.qualification}</span>
                </div>

                {/* Unified Badges Row */}
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold bg-slate-950 px-2.5 py-1 rounded-lg text-amber-400 border border-slate-800">
                    <Award className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{doctor.experience}</span>
                  </span>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {doctor.bio}
                </p>
              </div>

              {/* Bottom Actions */}
              <div>
                <div className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 mb-5 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-[11px]">Clinic Days: <strong>{doctor.available}</strong></span>
                </div>

                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 active:scale-95 text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-sky-600/20 group-hover:shadow-sky-500/40"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {doctor.name.split(" ")[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}