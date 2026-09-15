"use client";

import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, Calendar, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50/50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Value Proposition Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm border border-blue-200">
            <Star size={16} className="fill-blue-600 text-blue-600" />
            <span>Trusted by 10,000+ Happy Patients across the City</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Advanced, Gentle & <span className="text-blue-600">Painless Dental Care</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            From precision cosmetic procedures to complete laser tooth replacement, our board-certified specialists ensure comfort at every step.
          </p>

          {/* Specific Conversion CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/book"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-blue-200 transition-all text-center flex items-center justify-center gap-2 group"
            >
              <Calendar size={18} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/15552345678"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-blue-600 shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Sterile Environment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-blue-600 shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">Board Certified Specialists</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-blue-600 shrink-0" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Right Conversion Lead Card */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Request a Callback</h3>
            <p className="text-slate-500 text-sm mt-1">
              Leave your details below and an oral care coordinator will call you within 15 minutes.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white placeholder:text-slate-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white placeholder:text-slate-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Select Treatment
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 bg-white">
                <option>General Checkup & Cleaning</option>
                <option>Dental Implants</option>
                <option>Invisalign & Braces</option>
                <option>Root Canal Therapy</option>
                <option>Teeth Whitening</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-lg transition-all text-sm shadow-md"
            >
              Request Quick Callback
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}