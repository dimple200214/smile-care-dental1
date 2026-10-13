"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, Loader2, Bot } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    treatment: "General Checkup & Consultation",
    preferred_date: "",
    preferred_time: "Morning (9:00 AM - 12:00 PM)",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("appointments").insert([formData]);

    setLoading(false);

    if (!error) {
      setSubmitted(true);
    } else {
      alert("Failed to submit appointment. Please check your Supabase setup or try again.");
      console.error("Supabase submission error:", error);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
          <div>
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest block mb-1">
              Priority Consultation
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Schedule Your Dental Visit
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Select your preferred treatment date and time. Our team will contact you within 15 minutes.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 px-5 py-2.5 rounded-xl text-xs font-bold transition shrink-0"
          >
            <Bot className="w-4 h-4 text-sky-400" />
            <span>Emergency Triage</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Clinic Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-l-4 border-sky-500 pl-3">
                Clinic Information
              </h3>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Location</strong>
                    742 Evergreen Terrace, Suite 100, Cityville
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Phone Support</strong>
                    (555) 234-5678 / (555) 987-6543
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Direct Email</strong>
                    care@smilecaredental.com
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Working Hours</strong>
                    Mon - Sat: 8:00 AM - 7:00 PM<br />
                    Sunday: Emergency Appointments Only
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="rounded-2xl h-52 border border-slate-800 overflow-hidden shadow-xl bg-slate-900">
              <iframe
                title="SmileCare Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2151562584283!2d-73.9878441234241!3d40.75797473483984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Appointment Request Sent!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for booking with SmileCare. Our coordinator will call you shortly to confirm your slot.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      full_name: "",
                      phone: "",
                      email: "",
                      treatment: "General Checkup & Consultation",
                      preferred_date: "",
                      preferred_time: "Morning (9:00 AM - 12:00 PM)",
                      notes: "",
                    });
                  }}
                  className="mt-4 bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-2.5 rounded-lg text-xs transition-colors shadow-md shadow-sky-600/20"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-sky-500 pl-3">
                  Patient Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Select Treatment *
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950"
                    >
                      <option>General Checkup & Consultation</option>
                      <option>Dental Implants</option>
                      <option>Invisalign / Braces</option>
                      <option>Root Canal Therapy</option>
                      <option>Cosmetic Veneers</option>
                      <option>Teeth Whitening</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    {/* Dark Theme Native Calendar Input with showPicker on click */}
                    <input
                      type="date"
                      name="preferred_date"
                      required
                      value={formData.preferred_date}
                      onChange={handleChange}
                      onClick={(e) => {
                        try {
                          e.currentTarget.showPicker();
                        } catch (err) {}
                      }}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950 cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950"
                    >
                      <option>Morning (9:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 4:00 PM)</option>
                      <option>Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Special Notes / Medical History
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Mention any dental anxiety, ongoing medication, or specific concerns..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500 text-sm text-white bg-slate-950 placeholder:text-slate-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sky-600 hover:bg-sky-500 disabled:bg-sky-800 text-white font-bold py-3.5 px-6 rounded-lg transition-all text-sm shadow-lg shadow-sky-600/20 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Confirm Priority Appointment</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}