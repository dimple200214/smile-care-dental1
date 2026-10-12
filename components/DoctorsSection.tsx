"use client";

import Link from "next/link";
import { Award, Calendar, ShieldCheck, Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ananya Deshmukh",
    title: "Chief Endodontist & Micro-Surgeon",
    degree: "BDS, MDS (Endodontics - Gold Medalist)",
    experience: "14+ Years Experience",
    specialization: "Root Canal Micro-Surgery & Laser Dentistry",
    bio: "Ex-Senior Registrar at AIIMS with over 8,000+ successful laser root canal procedures completed.",
    availability: "Mon - Sat (10:00 AM - 5:00 PM)",
    imageBg: "bg-gradient-to-br from-sky-600 to-blue-800",
    initials: "AD",
  },
  {
    name: "Dr. Vikramaditya Mehta",
    title: "Senior Implantologist & Cosmetic Surgeon",
    degree: "BDS, MDS (Prosthodontics), Fellow (ICOI USA)",
    experience: "16+ Years Experience",
    specialization: "Keyhole Dental Implants & Full Mouth Rehab",
    bio: "International fellow trained in Zurich, specializing in immediate loading implants and smile designing.",
    availability: "Tue - Sun (11:00 AM - 7:00 PM)",
    imageBg: "bg-gradient-to-br from-slate-700 to-slate-900",
    initials: "VM",
  },
  {
    name: "Dr. Ritu Oberoi",
    title: "Consultant Orthodontist & Invisalign Specialist",
    degree: "BDS, MDS (Orthodontics), Invisalign Certified",
    experience: "11+ Years Experience",
    specialization: "Clear Aligners, Braces & Pediatric Dentistry",
    bio: "Certified Diamond Provider for Invisalign aligners with specialized care for teens and adults.",
    availability: "Mon - Fri (2:00 PM - 8:00 PM)",
    imageBg: "bg-gradient-to-br from-sky-500 to-indigo-900",
    initials: "RO",
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            <span>Board-Certified Medical Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet Our Senior Oral Care Specialists
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Our specialists hold master’s degrees and international fellowships, delivering research-backed clinical precision[cite: 2].
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 flex flex-col justify-between hover:shadow-2xl transition duration-300"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${doctor.imageBg} text-white font-black text-xl flex items-center justify-center shadow-lg border border-slate-600`}>
                    {doctor.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
                    <p className="text-xs font-semibold text-sky-400">{doctor.title}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{doctor.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold bg-slate-900 px-2.5 py-1 rounded-md text-amber-400 border border-slate-700">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>{doctor.experience}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-800/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified Specialist</span>
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Specialty Focus</span>
                    <p className="text-sm font-semibold text-slate-200">{doctor.specialization}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                <div className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800 mb-6 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>OPD Schedule: {doctor.availability}</span>
                </div>
              </div>

              <Link
                href={`/book?doctor=${encodeURIComponent(doctor.name)}`}
                className="w-full inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-md shadow-sky-600/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Consultation</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}