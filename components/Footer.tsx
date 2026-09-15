import Link from "next/link";
import { Stethoscope, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Stethoscope size={20} />
            </div>
            <span className="text-lg font-bold">SmileCare Dental</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Delivering painless, high-precision dental procedures using modern laser technology and hospital-grade sterilization standards.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition">Treatments & Services</Link></li>
            <li><Link href="/doctors" className="hover:text-blue-400 transition">Specialist Doctors</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About Our Clinic</Link></li>
            <li><Link href="/book" className="hover:text-blue-400 transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Clinic Hours</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex justify-between py-1 border-b border-slate-800/80">
              <span>Monday - Friday:</span>
              <span className="text-slate-200">8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between py-1 border-b border-slate-800/80">
              <span>Saturday:</span>
              <span className="text-slate-200">9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Sunday:</span>
              <span className="text-blue-400 font-semibold">Emergency Only</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Emergency Contact</h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <span>742 Evergreen Terrace, Suite 100, Cityville</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-blue-400 shrink-0" />
              <span>(555) 234-5678</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-blue-400 shrink-0" />
              <span>care@smilecaredental.com</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SmileCare Dental Center. Internship Project for SYNEX AI.</p>
      </div>
    </footer>
  );
}