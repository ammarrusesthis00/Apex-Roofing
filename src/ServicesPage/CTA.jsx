import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const TRUST = [
  { icon: <ShieldCheck size={16} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={16} />, text: "GAF Certified" },
  { icon: <Clock       size={16} />, text: "Same-Day Available" },
];

export default function ServicesCTA() {
  return (
    <section className="bg-[#1A3C6E] py-24 relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px]
        rounded-full bg-white/4 border border-white/8" />
      <div className="absolute -left-20 -top-20 w-64 h-64
        rounded-full bg-[#F97316]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          Get Started Today
        </div>

        <h2 className="font-display font-extrabold text-white
          text-[clamp(2rem,5vw,3.4rem)] leading-tight mb-5">
          Your Roof Isn't Getting<br />
          Better on Its Own.
        </h2>

        <p className="text-white/60 text-[1rem] leading-relaxed mb-10 max-w-lg mx-auto">
          Whether it's a small leak or a full replacement, the longer you wait the more it costs.
          Call Apex today — free estimate, same-day inspection, honest advice.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="tel:+15120000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[1rem] px-8 py-4 rounded-xl
              shadow-[0_6px_24px_rgba(249,115,22,0.45)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <Link
            to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50
              text-white font-semibold text-[1rem] px-8 py-4 rounded-xl
              transition-all hover:bg-white/8 hover:-translate-y-0.5"
          >
            Request Free Estimate <ArrowRight size={16} />
          </Link>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {TRUST.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-white/50 text-[0.82rem] font-medium">
              <span className="text-[#F97316]">{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}