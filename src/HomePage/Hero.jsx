import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck, Star } from "lucide-react";

const STATS = [
  { num: "500+",  label: "Roofs Done" },
  { num: "15+",   label: "Years Active" },
  { num: "4.9",   label: "Google Stars" },
  { num: "24/7",  label: "Emergency" },
];

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "10-Year Warranty" },
  { icon: <Clock       size={13} />, text: "Same-Day Response" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden pt-[72px]">

      {/* LEFT — blue panel */}
      <div className="relative z-10 flex flex-col justify-center
        w-full lg:w-[52%] bg-[#1A3C6E] px-8 md:px-14 py-20
        before:absolute before:top-0 before:right-[-80px] before:w-[160px]
        before:h-full before:bg-[#1A3C6E] before:skew-x-[-6deg] before:z-10 before:hidden lg:before:block">

        {/* Badge */}
        <div className="anim-1 inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/90 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full w-fit mb-6">
          <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
          Available Now — 24/7 Emergency
        </div>

        {/* Headline */}
        <h1 className="anim-2 font-display font-extrabold text-white leading-[1.08]
          text-[clamp(2.6rem,5vw,4rem)] mb-5">
          Your Roof.<br />
          Our <span className="text-[#F97316]">Responsibility.</span>
        </h1>

        {/* Sub */}
        <p className="anim-3 text-white/65 text-[1rem] leading-relaxed mb-8 max-w-sm">
          Storm damage, leaks, or full replacement — [City Name]'s most trusted roofers are one call away.
        </p>

        {/* CTAs */}
        <div className="anim-4 flex flex-wrap gap-3 mb-8">
          <a href="tel:+10000000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
              shadow-[0_6px_20px_rgba(249,115,22,0.45)] transition-all hover:-translate-y-0.5">
            <Phone size={16} strokeWidth={2.5} />
            Call Now — Free Quote
          </a>
          <Link to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/60
              text-white font-semibold text-[0.9rem] px-6 py-3.5 rounded-xl
              transition-all hover:bg-white/8 hover:-translate-y-0.5">
            Get Estimate <ArrowRight size={15} />
          </Link>
        </div>

        {/* Pills */}
        <div className="anim-5 flex flex-wrap gap-4 mb-12">
          {PILLS.map((p) => (
            <div key={p.text} className="flex items-center gap-1.5 text-white/60 text-[0.78rem] font-medium">
              <span className="text-[#F97316]">{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="anim-5 grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
          {STATS.map((s) => (
            <div key={s.num}>
              <p className="font-display font-extrabold text-white text-[1.6rem] leading-none mb-0.5">{s.num}</p>
              <p className="text-white/45 text-[0.65rem] font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — image */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80"
          alt="Roofing professionals at work"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient on left edge to blend with blue panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] via-transparent to-transparent" />

        {/* Floating rating card */}
        <div className="absolute bottom-10 right-8 bg-white rounded-2xl px-5 py-4 shadow-2xl">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#F97316" color="#F97316" />
            ))}
          </div>
          <p className="font-display font-extrabold text-[#111827] text-[1.5rem] leading-none">4.9</p>
          <p className="text-[#6B7280] text-[0.7rem] font-medium mt-0.5">200+ Google Reviews</p>
        </div>

        {/* Floating emergency card */}
        <div className="absolute top-12 right-8 bg-[#1A3C6E] text-white rounded-2xl px-5 py-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={14} color="#F97316" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/60">Emergency</p>
          </div>
          <p className="font-display font-bold text-[0.95rem]">24/7 Response</p>
          <p className="text-white/50 text-[0.68rem] mt-0.5">We're always available</p>
        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden w-full h-52 absolute bottom-0 left-0 right-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
          alt="Roofing"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
}