import Link from "next/link";
import { GraduationCap, Award, Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Jenkins, DDS",
    role: "Chief Implantologist & Cosmetic Surgeon",
    qualification: "Harvard School of Dental Medicine",
    experience: "14+ Years Experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    speciality: "Dental Implants & Full Mouth Rehab",
  },
  {
    name: "Dr. Aris Thorne, DMD",
    role: "Orthodontics & Invisalign Specialist",
    qualification: "UPenn School of Dental Medicine",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    speciality: "Invisalign & Facial Aesthetics",
  },
  {
    name: "Dr. Elena Rostova, MDS",
    role: "Pediatric & Endodontic Specialist",
    qualification: "Columbia University Dental School",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop",
    speciality: "Painless Root Canals & Child Care",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Expert Dental Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Board-Certified Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Our clinical team regularly trains with global dental leaders to bring advanced, painless techniques to your care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all group">
              <div className="h-64 overflow-hidden relative bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {doc.speciality}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 text-xs font-semibold mt-0.5">{doc.role}</p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-blue-600 shrink-0" />
                    <span>{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-blue-600 shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                <Link
                  href="/book"
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Book Direct Appointment</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}