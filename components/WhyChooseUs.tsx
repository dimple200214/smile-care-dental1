"use client";

import { ShieldCheck, Cpu, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Instant Digital Booking",
    description: "Choose your preferred specialist, treatment, and consultation slot online in under 60 seconds.",
  },
  {
    step: "02",
    title: "3D Scan & Digital Audit",
    description: "Experience pain-free radiation-free digital 3D oral scanning during your first appointment.",
  },
  {
    step: "03",
    title: "Painless Treatment & Support",
    description: "Receive laser precision treatment with transparent pricing and instant WhatsApp post-care support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The SmileCare Patient Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple 3-Step Path to a Healthy Smile
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            We’ve redesigned the clinic visit to be zero-stress, highly predictable, and completely transparent[cite: 2].
          </p>
        </div>

        {/* 3 Step Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 relative backdrop-blur-sm"
            >
              <div className="text-4xl font-black text-blue-500/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Pillars Grid */}
        <div className="pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">3D Scanner Technology</h4>
              <p className="text-xs text-slate-400 mt-1">Zero messy impressions, instant 3D HD oral preview.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">100% Sterile Protocol</h4>
              <p className="text-xs text-slate-400 mt-1">Class-B German autoclave sterilization for complete safety.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-amber-600/20 text-amber-400 rounded-2xl border border-amber-500/30">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Transparent Pricing</h4>
              <p className="text-xs text-slate-400 mt-1">No hidden costs, flexible 0% EMI options available.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}