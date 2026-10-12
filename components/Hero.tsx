"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Clock, 
  PhoneCall
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackData, setCallbackData] = useState({
    full_name: "",
    phone: "",
    treatment: "General Checkup & Cleaning",
  });

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackLoading(true);

    const { error } = await supabase.from("callback_requests").insert([
      {
        full_name: callbackData.full_name,
        phone: callbackData.phone,
        treatment: callbackData.treatment,
      },
    ]);

    setCallbackLoading(false);
    if (!error) {
      setCallbackSubmitted(true);
    } else {
      alert("Error submitting request: " + error.message);
    }
  };

  return (
    <section className="relative bg-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-sky-200">
                NABH Accredited & Premium Dental Care Center
              </span>
            </div>

            {/* Crisp Clean Headline (No text ghosting) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Experience Painless, <br />
              <span className="text-sky-400">
                Precision Dentistry
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From laser root canals to instant cosmetic smile makeovers—our board-certified specialists utilize 3D digital scanner technology for a fast, pain-free consultation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-sky-600/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/15552345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <div className="flex items-center text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold text-white">4.9/5</p>
                <p className="text-[11px] text-slate-400">1,200+ Reviews</p>
              </div>

              <div className="border-l border-slate-800 pl-4">
                <p className="text-lg font-bold text-white">15+ Yrs</p>
                <p className="text-[11px] text-slate-400">Clinical Practice</p>
              </div>

              <div className="border-l border-slate-800 pl-4">
                <p className="text-lg font-bold text-emerald-400">0% EMI</p>
                <p className="text-[11px] text-slate-400">Flexible Options</p>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
              
              <div className="absolute -top-3.5 right-6 bg-emerald-500 text-slate-950 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                <Clock className="w-3 h-3" />
                <span>15-Min Response Time</span>
              </div>

              <h2 className="text-2xl font-bold text-white">Request Urgent Callback</h2>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Fill in your contact details for immediate assistance from our care team.
              </p>

              {callbackSubmitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 p-6 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-base text-white">Callback Scheduled!</h4>
                    <p className="text-xs text-emerald-300 mt-1">
                      Our team will reach out to <strong>{callbackData.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setCallbackSubmitted(false);
                        setCallbackData({ full_name: "", phone: "", treatment: "General Checkup & Cleaning" });
                      }}
                      className="mt-3 text-xs font-semibold text-emerald-400 underline block"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={callbackData.full_name}
                      onChange={(e) => setCallbackData({ ...callbackData, full_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-500 text-white placeholder-slate-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={callbackData.phone}
                      onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-500 text-white placeholder-slate-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Select Required Treatment
                    </label>
                    <select
                      value={callbackData.treatment}
                      onChange={(e) => setCallbackData({ ...callbackData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-500 text-white text-xs"
                    >
                      <option value="General Checkup & Cleaning">General Checkup & Cleaning</option>
                      <option value="Teeth Whitening">Teeth Whitening & Veneers</option>
                      <option value="Dental Implants">Dental Implants & Fixed Teeth</option>
                      <option value="Orthodontics & Braces">Invisalign & Clear Aligners</option>
                      <option value="Root Canal Treatment">Painless Laser Root Canal</option>
                      <option value="Emergency Care">Emergency Tooth Pain</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={callbackLoading}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-sky-600/20 disabled:opacity-50 text-xs flex items-center justify-center space-x-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{callbackLoading ? "Submitting..." : "Get Instant Callback"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}