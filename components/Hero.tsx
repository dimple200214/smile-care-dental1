"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
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

    // Save callback request into 'callback_requests' table in Supabase
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
    <section className="relative bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Text Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted by 10,000+ Happy Patients across the City</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Advanced, Gentle & <br />
            <span className="text-blue-600">Painless Dental Care</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            From precision cosmetic procedures to complete laser tooth replacement, our board-certified specialists ensure comfort at every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/25"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/15552345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 transition"
            >
              <MessageSquare className="w-5 h-5 text-green-600" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>
        </div>

        {/* Right Form Section connected to 'callback_requests' */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900">Request a Callback</h2>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              Leave your details below and an oral care coordinator will call you within 15 minutes.
            </p>

            {callbackSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-base">Request Received!</h4>
                  <p className="text-xs text-green-700 mt-1">
                    Our team will call you shortly on <strong>{callbackData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setCallbackSubmitted(false);
                      setCallbackData({ full_name: "", phone: "", treatment: "General Checkup & Cleaning" });
                    }}
                    className="mt-3 text-xs font-semibold text-green-800 underline"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={callbackData.full_name}
                    onChange={(e) => setCallbackData({ ...callbackData, full_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1 tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={callbackData.phone}
                    onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1 tracking-wider">
                    Select Treatment
                  </label>
                  <select
                    value={callbackData.treatment}
                    onChange={(e) => setCallbackData({ ...callbackData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm bg-white"
                  >
                    <option value="General Checkup & Cleaning">General Checkup & Cleaning</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Orthodontics & Braces">Orthodontics & Braces</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={callbackLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition shadow-md shadow-blue-500/20 disabled:opacity-50 text-sm"
                >
                  {callbackLoading ? "Submitting..." : "Request Callback Now"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}