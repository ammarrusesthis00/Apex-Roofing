import { Link } from "react-router-dom";
import { ClipboardList, Calculator, HardHat, BadgeCheck, ArrowRight, Phone } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <ClipboardList size={24} />,
    title: "Free Roof Inspection",
    tag: "Same day available",
    desc: "We come out to your Austin property, assess the full roof — not just the obvious damage. You get a written report with photos, no pressure, no obligation.",
    detail: "Takes 30–45 minutes on-site.",
  },
  {
    num: "02",
    icon: <Calculator size={24} />,
    title: "Clear Written Estimate",
    tag: "No hidden costs",
    desc: "You receive a detailed, itemized quote within 24 hours. Every material, every hour of labor — spelled out clearly so you know exactly what you're paying for and why.",
    detail: "Most estimates delivered same day.",
  },
  {
    num: "03",
    icon: <HardHat size={24} />,
    title: "Professional Installation",
    tag: "GAF certified crew",
    desc: "Our certified crew arrives on time, works efficiently, and keeps your property clean throughout. Most Austin repairs are finished same-day. Replacements typically take 1–2 days.",
    detail: "Full cleanup included, always.",
  },
  {
    num: "04",
    icon: <BadgeCheck size={24} />,
    title: "Walkthrough & Warranty",
    tag: "10-year guarantee",
    desc: "Before we leave, we walk the job with you — show you everything we did and answer any questions. Your 10-year workmanship warranty starts the moment we sign off.",
    detail: "Warranty documentation provided on-site.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="process">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            How It Works
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-[#111827]
                text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
                From First Call to<br />Final Sign-Off
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
                Four straightforward steps. No surprises, no runaround — just a clear process
                that gets your roof fixed fast and done right.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="tel:+15120000000"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.85rem] px-5 py-2.5 rounded-xl
                  shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5">
                <Phone size={14} /> Call Now
              </a>
              <Link to="/quote"
                className="flex items-center gap-2 border border-[#E5E7EB] hover:border-[#1A3C6E]/30
                  text-[#111827] font-semibold text-[0.85rem] px-5 py-2.5 rounded-xl
                  transition-all hover:bg-white">
                Get Estimate <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.num}
              className="relative bg-white border border-[#E5E7EB] rounded-2xl p-6
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-[#1A3C6E]/20
                transition-all duration-200">

              {/* Step number + icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#1A3C6E] rounded-xl
                  flex items-center justify-center text-white">
                  {s.icon}
                </div>
                <span className="font-display font-black text-[#E5E7EB] text-[2.5rem] leading-none">
                  {s.num}
                </span>
              </div>

              {/* Tag */}
              <div className="inline-flex items-center bg-[#F97316]/10 border border-[#F97316]/20
                text-[#F97316] text-[0.62rem] font-semibold tracking-widest uppercase
                px-2.5 py-0.5 rounded-full mb-3">
                {s.tag}
              </div>

              <h3 className="font-display font-bold text-[#111827] text-[1.05rem] mb-2">
                {s.title}
              </h3>
              <p className="text-[#6B7280] text-[0.82rem] leading-relaxed mb-4">
                {s.desc}
              </p>

              {/* Detail note */}
              <p className="text-[#9CA3AF] text-[0.72rem] font-medium border-t border-[#F3F4F6] pt-3">
                {s.detail}
              </p>

              {/* Connector arrow (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10
                  w-6 h-6 bg-white border border-[#E5E7EB] rounded-full
                  items-center justify-center text-[#9CA3AF]">
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}