"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Are dental procedures at SmileCare painless?",
    a: "Yes. We utilize modern laser dentistry techniques and computerized local anesthesia delivery systems to ensure procedures like root canals and fillings are virtually painless."
  },
  {
    q: "How much do dental implants cost?",
    a: "Costs vary based on single-tooth replacement versus full-mouth restoration. We provide full transparent pricing up front with zero hidden fees, along with 0% interest flexible financing plans."
  },
  {
    q: "What should I do in case of a dental emergency?",
    a: "Call our emergency hotline directly at (555) 234-5678. We reserve daily emergency slots to handle severe toothaches, chipped teeth, or lost crowns on the same day."
  },
  {
    q: "How long does an Invisalign treatment usually take?",
    a: "Most Invisalign aligner treatments take between 6 to 18 months depending on complexity. You will receive custom 3D digital simulation previews before starting."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Patient Hesitancy & Guidance
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-bold text-slate-900 text-base transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-500 transition-transform ${openIndex === idx ? "rotate-180 text-blue-600" : ""}`}
                />
              </button>

              {openIndex === idx && (
                <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}