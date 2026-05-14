import { Link } from "react-router-dom";
import {
  Wrench, Home, Droplets, CloudLightning,
  Pipette, Search, ArrowRight, CheckCircle2, Phone
} from "lucide-react";

const SERVICES = [
  { icon: <Wrench size={22} />,          title: "Roof Repair",           desc: "Shingles, flashing, leaks — fixed fast before small issues become big bills." },
  { icon: <Home size={22} />,            title: "Roof Replacement",      desc: "Full tear-off and premium installation. Built to last 30+ years." },
  { icon: <Droplets size={22} />,        title: "Leak Detection",        desc: "We trace the source fast and seal it — no repeat visits, no guessing." },
  { icon: <CloudLightning size={22} />,  title: "Storm Damage Repair",   desc: "Emergency hail and wind damage. We handle the job and the insurance claim." },
  { icon: <Pipette size={22} />,         title: "Gutter Installation",   desc: "Protect your foundation with properly fitted gutters and downspouts." },
  { icon: <Search size={22} />,          title: "Roof Inspection",       desc: "Full written report — ideal before buying, selling, or after any storm." },
];

const CHECKS = [
  "Clear pricing before any work starts",
  "Professional tools and quality materials only",
  "Respectful, clean crews on every job",
  "No surprises — ever",
];

export default function Services() {
  return (
    <section className="bg-[#111827] py-24" id="services">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/25
              text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3 py-1.5 rounded-full mb-4">
              What We Do
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              Services We Offer
            </h2>
            <p className="text-white/50 mt-3 max-w-md text-[0.95rem] leading-relaxed">
              Urgent or routine — we focus on fast response, honest pricing, and getting it right the first time.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link to="/services"
              className="flex items-center gap-2 border border-white/15 hover:border-white/35
                text-white/80 hover:text-white font-semibold text-[0.82rem]
                px-5 py-2.5 rounded-lg transition-all">
              All Services <ArrowRight size={14} />
            </Link>
            <a href="tel:+10000000000"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-semibold text-[0.82rem]
                px-5 py-2.5 rounded-lg transition-all
                shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>

        {/* Body: checklist left + cards right */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left checklist */}
          <div className="lg:w-52 shrink-0 flex flex-col gap-5 justify-center
            bg-white/4 border border-white/8 rounded-2xl p-7">
            <p className="font-display font-bold text-white text-[1rem] mb-1">Why Choose Us</p>
            {CHECKS.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#F97316] mt-0.5 shrink-0" />
                <p className="text-white/65 text-[0.82rem] leading-snug">{c}</p>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <div key={s.title}
                className="group bg-white/4 hover:bg-[#1A3C6E]/60
                  border border-white/8 hover:border-[#1A3C6E]
                  rounded-2xl p-6 transition-all duration-250 cursor-pointer">

                {/* Icon */}
                <div className="w-11 h-11 bg-[#F97316]/15 group-hover:bg-[#F97316]/25
                  border border-[#F97316]/20 rounded-xl
                  flex items-center justify-center text-[#F97316] mb-5
                  transition-colors duration-200">
                  {s.icon}
                </div>

                <h3 className="font-display font-bold text-white text-[1rem] mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 text-[0.82rem] leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link to="/services"
                  className="flex items-center gap-1.5 text-[#F97316] text-[0.8rem] font-semibold
                    hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}