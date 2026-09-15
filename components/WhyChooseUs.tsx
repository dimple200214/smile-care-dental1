import { Award, Clock, DollarSign, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Board-Certified Specialists",
    desc: "Our doctors average 15+ years of clinical experience in advanced implantology and oral surgery.",
  },
  {
    icon: Sparkles,
    title: "100% Painless Laser Tech",
    desc: "We use dental lasers for drills and soft-tissue procedures, eliminating noise, heat, and discomfort.",
  },
  {
    icon: DollarSign,
    title: "Transparent & Upfront Pricing",
    desc: "Zero hidden fees. Detailed cost breakdowns provided prior to beginning any treatment plan.",
  },
  {
    icon: Clock,
    title: "Zero Waiting-Time Policy",
    desc: "We respect your busy schedule with guaranteed on-time consultations and extended evening hours.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-2">
            The SmileCare Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Patients Choose Our Dental Practice
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            We combine high-end hospital safety standards with personal care to ensure your clinic visits are stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}