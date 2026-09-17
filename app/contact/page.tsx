"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save contact inquiry into Supabase 'appointments' table
    const { error } = await supabase.from("appointments").insert([
      {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone || "N/A",
        treatment: `Contact Inquiry: ${formData.subject}`,
        notes: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Error sending message: " + error.message);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions or need assistance? Reach out to our expert dental team today. We’re here to help you achieve your healthiest smile.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Our Location</h3>
            <p className="text-sm text-slate-600 mt-1">
              742 Evergreen Terrace, Suite 100<br />New York, NY 10001
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Phone & Emergency</h3>
            <p className="text-sm text-slate-600 mt-1">
              Main: (555) 234-5678<br />
              Emergency: 24/7 Available
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Email Us</h3>
            <p className="text-sm text-slate-600 mt-1">
              care@smilecare.com<br />
              info@smilecare.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">Working Hours</h3>
            <p className="text-sm text-slate-600 mt-1">
              Mon - Sat: 8:00 AM - 7:00 PM<br />
              Sunday: Emergency Only
            </p>
          </div>
        </div>

        {/* Main Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Message Sent Successfully!</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for reaching out. Our support team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-4 text-sm font-medium text-green-800 underline hover:text-green-900"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="General Inquiry / Feedback"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Map Section */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
            <h2 className="text-xl font-bold text-slate-900 mb-4 px-4 pt-2">Find Our Clinic</h2>
            <div className="w-full h-[400px] lg:h-full rounded-xl overflow-hidden bg-slate-100">
              <iframe
                title="Clinic Location Map"
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

        </div>

      </div>
    </div>
  );
}