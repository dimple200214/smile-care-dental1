"use client";

import Link from "next/link";
import { Stethoscope, Phone, Clock, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-400" />
            742 Evergreen Terrace, Suite 100
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Clock size={14} className="text-blue-400" />
            Mon - Sat: 8:00 AM - 7:00 PM
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-blue-400">
          <Phone size={14} />
          <span>Emergency: (555) 234-5678</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md">
            <Stethoscope size={24} />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
              SmileCare
            </span>
            <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase block">
              Dental & Implant Center
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Treatments</Link>
          <Link href="/doctors" className="hover:text-blue-600 transition">Specialists</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Action-Oriented CTA Button */}
        <Link
          href="/book"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}