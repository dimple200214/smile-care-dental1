"use client";

import Link from "next/link";
import { Phone, Calendar, MessageSquare } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 z-50 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href="tel:+15552345678"
        className="flex-1 flex items-center justify-center space-x-2 bg-slate-800 text-slate-200 py-2.5 rounded-lg text-xs font-semibold border border-slate-700"
      >
        <Phone className="w-4 h-4 text-brand-500" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/15552345678"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 bg-emerald-950/80 text-emerald-300 py-2.5 rounded-lg text-xs font-semibold border border-emerald-800/60"
      >
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/book"
        className="flex-[1.4] flex items-center justify-center space-x-2 bg-brand-600 text-white py-2.5 rounded-lg text-xs font-semibold shadow-md shadow-brand-600/30"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Visit</span>
      </Link>
    </div>
  );
}