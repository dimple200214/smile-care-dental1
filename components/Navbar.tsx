"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, MapPin, Clock, Phone, Sparkles } from "lucide-react";
import AITriageModal from "@/components/AITriageModal";

export default function Navbar() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>742 Evergreen Terrace, Suite 100</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
            </span>
          </div>
          <a href="tel:5552345678" className="flex items-center space-x-1.5 text-sky-400 hover:text-sky-300 font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency: (555) 234-5678</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-600/30">
              S
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight block">SmileCare</span>
              <span className="text-[10px] font-bold text-sky-400 tracking-wider uppercase block -mt-1">
                Dental & Implant Center
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-sky-400 transition">Home</Link>
            <Link href="/services" className="hover:text-sky-400 transition">Services</Link>
            <Link href="/doctors" className="hover:text-sky-400 transition">Specialists</Link>
            <Link href="/about" className="hover:text-sky-400 transition">About Us</Link>
            <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-3">
            {/* AI Triage Modal Trigger */}
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="inline-flex items-center space-x-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3.5 py-2 rounded-xl text-xs font-semibold transition"
            >
              <Bot className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline">AI Symptom Checker</span>
            </button>

            {/* Priority Consultation Button */}
            <Link
              href="/book"
              className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-md shadow-sky-600/30"
            >
              Book Visit
            </Link>
          </div>

        </div>
      </header>

      {/* AI Triage Modal */}
      <AITriageModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
    </>
  );
}