import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "GAF Certified" },
  { icon: <Clock       size={13} />, text: "24/7 Emergency" },
];

export default function ServicesHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-32 pb-24 overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=900&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.78rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Services</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          What We Offer
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(2.4rem,5vw,3.8rem)] mb-5 max-w-2xl">
          Every Roofing Service<br />
          Austin Homeowners Need —<br />
          <span className="text-[#F97316]">Done Right, Every Time.</span>
        </h1>

        <p className="text-white/60 text-[1rem] leading-relaxed mb-10 max-w-xl">
          From a single shingle repair to a full tear-off and replacement, Apex handles it all.
          Honest quotes, certified crews, and work that's backed by a 10-year warranty.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a href="tel:+15120000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
              shadow-[0_6px_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
            <Phone size={16} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <Link to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50
              text-white font-semibold text-[0.9rem] px-6 py-3.5 rounded-xl
              transition-all hover:bg-white/8 hover:-translate-y-0.5">
            Get Free Estimate <ArrowRight size={15} />
          </Link>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-5">
          {PILLS.map((p) => (
            <div key={p.text} className="flex items-center gap-1.5 text-white/50 text-[0.8rem] font-medium">
              <span className="text-[#F97316]">{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}