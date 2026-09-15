import Link from "next/link";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

const specialists = [
  {
    name: "Dr. Sarah Jenkins, DDS",
    role: "Chief Implantologist & Cosmetic Surgeon",
    qualification: "Harvard School of Dental Medicine",
    experience: "14+ Years Clinical Experience",
    bio: "Dr. Jenkins specializes in full-mouth reconstructions and complex computer-guided dental implants with over 4,000 successful procedures.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    available: "Mon, Wed, Fri",
  },
  {
    name: "Dr. Aris Thorne, DMD",
    role: "Orthodontist & Clear Aligner Specialist",
    qualification: "UPenn School of Dental Medicine",
    experience: "10+ Years Clinical Experience",
    bio: "Certified Premier Invisalign Provider with a focus on non-extraction orthodontic alignment and facial symmetry optimization.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    available: "Tue, Thu, Sat",
  },
  {
    name: "Dr. Elena Rostova, MDS",
    role: "Endodontist & Pediatric Specialist",
    qualification: "Columbia University Dental School",
    experience: "8+ Years Clinical Experience",
    bio: "Expert in micro-endodontic root canals and anxious patient management through gentle laser techniques.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop",
    available: "Mon, Tue, Thu",
  },
];

export default function DoctorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Clinical Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Dental Specialists
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Board-certified practitioners committed to ongoing clinical research and gentle patient care.
          </p>
        </div>

        <div className="space-y-8">
          {specialists.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-4 h-72 rounded-xl overflow-hidden relative bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{doc.role}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{doc.bio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-blue-600 shrink-0" />
                    <span>{doc.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-blue-600 shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Clinic Days: {doc.available}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    <Calendar size={14} />
                    <span>Book Consultation with {doc.name.split(" ")[1]}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}