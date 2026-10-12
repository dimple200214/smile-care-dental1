"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  X, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Stethoscope, 
  Clock, 
  ShieldAlert 
} from "lucide-react";

interface AITriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commonSymptoms = [
  { id: "pain-cold", label: "Sharp Pain on Hot/Cold Food", urgency: "Moderate", specialist: "Dr. Ananya Deshmukh (Endodontist)", treatment: "Painless Laser Root Canal" },
  { id: "bleeding-gums", label: "Bleeding or Swollen Gums", urgency: "Low", specialist: "Dr. Ananya Deshmukh", treatment: "Preventive Checkup & Cleaning" },
  { id: "missing-tooth", label: "Missing / Broken Tooth", urgency: "Moderate", specialist: "Dr. Vikramaditya Mehta (Implantologist)", treatment: "Keyhole Dental Implants" },
  { id: "crooked-teeth", label: "Crooked or Gapped Teeth", urgency: "Low", specialist: "Dr. Ritu Oberoi (Orthodontist)", treatment: "Clear Aligners & Invisalign" },
  { id: "severe-night-pain", label: "Severe Throbbing Night Pain", urgency: "Emergency", specialist: "Dr. Ananya Deshmukh (Endodontist)", treatment: "Emergency Dental Care" },
  { id: "yellow-discoloration", label: "Stains or Yellow Discoloration", urgency: "Low", specialist: "Dr. Vikramaditya Mehta", treatment: "Hollywood Smile Makeover" },
];

export default function AITriageModal({ isOpen, onClose }: AITriageModalProps) {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [customQuery, setCustomQuery] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleAnalyze = (symptomObj?: typeof commonSymptoms[0]) => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setAnalyzing(false);

      if (symptomObj) {
        setResult(symptomObj);
      } else if (customQuery.trim().length > 0) {
        // Fallback smart match for custom typed input
        const lower = customQuery.toLowerCase();
        let matched = commonSymptoms[0];

        if (lower.includes("bleed") || lower.includes("gum")) matched = commonSymptoms[1];
        else if (lower.includes("missing") || lower.includes("clip") || lower.includes("broken")) matched = commonSymptoms[2];
        else if (lower.includes("align") || lower.includes("gap") || lower.includes("crooked")) matched = commonSymptoms[3];
        else if (lower.includes("night") || lower.includes("severe") || lower.includes("throbbing")) matched = commonSymptoms[4];
        else if (lower.includes("stain") || lower.includes("yellow") || lower.includes("white")) matched = commonSymptoms[5];

        setResult(matched);
      }
    }, 1200);
  };

  const resetAll = () => {
    setSelectedSymptom(null);
    setCustomQuery("");
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
        
        {/* Background Accent Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-brand-600/20 text-brand-400 rounded-2xl border border-brand-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold">AI Dental Triage Assistant</h3>
                <span className="bg-brand-500/20 text-brand-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-500/30 flex items-center space-x-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>AI v2.4</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">Instant preliminary symptom assessment & specialist routing</p>
            </div>
          </div>

          <button
            onClick={() => {
              resetAll();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-6">
          {!result && !analyzing && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Select What You Are Experiencing:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {commonSymptoms.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedSymptom(item.id);
                        handleAnalyze(item);
                      }}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition flex items-center justify-between ${
                        selectedSymptom === item.id
                          ? "bg-brand-600 border-brand-400 text-white"
                          : "bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-500 uppercase">Or Describe Your Issue</span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* Custom Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. My tooth hurts when I drink cold water..."
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                  className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
                <button
                  onClick={() => handleAnalyze()}
                  disabled={!customQuery.trim()}
                  className="bg-brand-600 hover:bg-brand-500 disabled:opacity-40 text-white px-5 py-3 rounded-xl text-xs font-bold transition flex items-center space-x-1"
                >
                  <span>Analyze</span>
                </button>
              </div>
            </div>
          )}

          {/* Analyzing State */}
          {analyzing && (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-200">AI is evaluating clinical urgency & matching specialists...</p>
              <p className="text-xs text-slate-500">Cross-referencing symptoms with SmileCare protocol database</p>
            </div>
          )}

          {/* AI Result Output Card */}
          {result && !analyzing && (
            <div className="space-y-6">
              {/* Urgency Header */}
              <div className={`p-4 rounded-2xl border flex items-center space-x-3 ${
                result.urgency === "Emergency"
                  ? "bg-rose-950/60 border-rose-600/50 text-rose-200"
                  : result.urgency === "Moderate"
                  ? "bg-amber-950/60 border-amber-600/50 text-amber-200"
                  : "bg-emerald-950/60 border-emerald-600/50 text-emerald-200"
              }`}>
                {result.urgency === "Emergency" ? (
                  <ShieldAlert className="w-6 h-6 text-rose-400 flex-shrink-0" />
                ) : result.urgency === "Moderate" ? (
                  <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Clinical Urgency:</span>
                    <span className="text-xs font-black uppercase px-2 py-0.5 rounded-md bg-black/30">
                      {result.urgency}
                    </span>
                  </div>
                  <p className="text-xs mt-0.5 opacity-90">
                    {result.urgency === "Emergency" 
                      ? "Immediate clinical evaluation recommended today." 
                      : "Schedule a consultation within 24–48 hours for optimal prevention."}
                  </p>
                </div>
              </div>

              {/* Specialist & Treatment Recommendation */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-start space-x-3">
                  <Stethoscope className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Recommended Specialist</span>
                    <p className="text-sm font-bold text-white">{result.specialist}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-slate-800/80">
                  <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Recommended Procedure</span>
                    <p className="text-sm font-bold text-white">{result.treatment}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={resetAll}
                  className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  Check Another Symptom
                </button>

                <Link
                  href={`/book?treatment=${encodeURIComponent(result.treatment)}`}
                  onClick={() => onClose()}
                  className="flex-[1.5] py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-600/30 transition flex items-center justify-center space-x-2"
                >
                  <span>Book Recommended Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-500 text-center mt-6 pt-4 border-t border-slate-800/80">
          *Disclaimer: AI Triage provides preliminary informational advice and does not replace formal clinical diagnosis.
        </p>

      </div>
    </div>
  );
}