"use client";

import Link from "next/link";
import { Award, Calendar, ShieldCheck, Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Jenkins, DDS",
    title: "Chief Implantologist & Cosmetic Surgeon",
    degree: "Harvard School of Dental Medicine",
    experience: "14+ Years Clinical Experience",
    specialization: "Full-mouth reconstructions & complex computer-guided dental implants",
    bio: "Dr. Jenkins specializes in computer-guided keyhole implants with over 4,000+ successful procedures completed.",
    availability: "Clinic Days: Mon, Wed, Fri",
    imageBg: "bg-gradient-to-br from-sky-600 to-blue-800",
    initials: "SJ",
  },
  {
    name: "Dr. Ananya Deshmukh",
    title: "Chief Endodontist & Micro-Surgeon",
    degree: "BDS, MDS (Endodontics - Gold Medalist)",
    experience: "12+ Years Experience",
    specialization: "Painless Laser Root Canal & Micro-Surgeries",
    bio: "Ex-Senior Registrar at AIIMS specializing in single-sitting microscopic root canal therapy.",
    availability: "Clinic Days: Tue, Thu, Sat",
    imageBg: "bg-gradient-to-br from-indigo-600 to-slate-900",
    initials: "AD",
  },
  {
    name: "Dr. Vikramaditya Mehta",
    title: "Senior Orthodontist & Invisalign Specialist",
    degree: "BDS, MDS (Orthodontics), Invisalign Certified",
    experience: "15+ Years Experience",
    specialization: "Clear Aligners, Braces & Digital Smile Designing",
    bio: "Certified Diamond Provider for Invisalign aligners with specialized care for teens and adults.",
    availability: "Clinic Days: Mon - Sat",
    imageBg: "bg-gradient-to-br from-sky-500 to-slate-800",
    initials: "VM",
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
            Board-certified practitioners committed to ongoing clinical research and gentle patient care[cite: 2].
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${doctor.imageBg} text-white font-black text-xl flex items-center justify-center shadow-lg border border-slate-700`}>
                    {doctor.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
                    <p className="text-xs font-semibold text-sky-400">{doctor.title}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{doctor.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold bg-slate-950 px-2.5 py-1 rounded-md text-amber-400 border border-slate-800">
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
                    <p className="text-xs font-semibold text-slate-200 mt-0.5">{doctor.specialization}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                <div className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 mb-6 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{doctor.availability}</span>
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