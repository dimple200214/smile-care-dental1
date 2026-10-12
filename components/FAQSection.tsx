"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is root canal treatment completely pain-free?",
    answer: "Yes. We use micro-laser dentistry and localized computerized anesthesia, making the treatment virtually pain-free.",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper oral hygiene and regular checkups, Swiss titanium implants are designed to last a lifetime.",
  },
  {
    question: "Do you accept health insurance or offer EMI?",
    answer: "Yes, we support instant health insurance claims and offer 0% interest EMI options for all major treatments.",
  },
  {
    question: "What safety protocols are followed in the clinic?",
    answer: "We follow German Class-B autoclave sterilization standards for every instrument to ensure 100% patient safety.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between text-sm font-bold text-white hover:text-sky-400 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              {openIdx === idx && (
                <div className="p-5 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-900">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}