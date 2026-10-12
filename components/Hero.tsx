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
  Sparkles,
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
    <section className="relative bg-gradient-to-b from-slate-900 via-navy-900 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span className="text-xs sm:text-sm font-medium text-brand-200">
                NABH Accredited & Premium Dental Care Center
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Experience Painless, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-200 via-brand-500 to-sky-300">
                Precision Dentistry
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From laser root canals to instant cosmetic smile makeovers—our board-certified specialists utilize 3D digital scanner technology for a fast, pain-free consultation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/30 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Priority Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/15552345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium px-7 py-4 rounded-xl transition backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>

            {/* Social Proof & Trust Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xl font-bold text-white">4.9/5</p>
                <p className="text-xs text-slate-400">1,200+ Patient Reviews</p>
              </div>

              <div className="text-center lg:text-left border-l border-slate-800 pl-4">
                <p className="text-xl font-bold text-white">15+ Yrs</p>
                <p className="text-xs text-slate-400">Clinical Expertise</p>
              </div>

              <div className="text-center lg:text-left border-l border-slate-800 pl-4">
                <p className="text-xl font-bold text-emerald-400">0% EMI</p>
                <p className="text-xs text-slate-400">Flexible Payment Options</p>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/70 shadow-2xl relative">
              
              {/* Badge */}
              <div className="absolute -top-3.5 right-6 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                <Clock className="w-3 h-3" />
                <span>15-Min Response Time</span>
              </div>

              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>Request Urgent Callback</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Fill in your contact details for immediate assistance from our care team.
              </p>

              {callbackSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 p-6 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-base text-white">Callback Scheduled!</h4>
                    <p className="text-xs text-emerald-300 mt-1">
                      Our coordinator will reach out to <strong>{callbackData.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setCallbackSubmitted(false);
                        setCallbackData({ full_name: "", phone: "", treatment: "General Checkup & Cleaning" });
                      }}
                      className="mt-3 text-xs font-semibold text-emerald-400 underline"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={callbackData.full_name}
                      onChange={(e) => setCallbackData({ ...callbackData, full_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder-slate-500 text-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={callbackData.phone}
                      onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder-slate-500 text-sm transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Select Required Treatment
                    </label>
                    <select
                      value={callbackData.treatment}
                      onChange={(e) => setCallbackData({ ...callbackData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-white text-sm transition"
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
                    className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-brand-600/30 disabled:opacity-50 text-sm flex items-center justify-center space-x-2"
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