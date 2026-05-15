import { ShieldCheck, Users, Award, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const STATS = [
  { num: "15+",  label: "Years in Austin" },
  { num: "500+", label: "Roofs Completed" },
  { num: "4.9★", label: "Google Rating" },
  { num: "100%", label: "Licensed & Insured" },
];

const VALUES = [
  {
    icon: <ShieldCheck size={20} />,
    title: "No Shortcuts",
    desc: "Every job is done to code, with quality materials, by trained crews. We don't cut corners on your most important asset.",
  },
  {
    icon: <Users size={20} />,
    title: "Local, Not Corporate",
    desc: "Apex is Austin-based and Austin-focused. You're not talking to a call center — you're talking to the people doing the work.",
  },
  {
    icon: <Award size={20} />,
    title: "GAF Certified",
    desc: "We're certified by one of North America's top roofing manufacturers. That means better warranties and higher installation standards.",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Straight Answers",
    desc: "We tell you what your roof actually needs — not the most expensive option. If a repair will do the job, we'll say so.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: image stack */}
          <div className="w-full lg:w-[45%] relative shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Apex Roofing crew working on an Austin home"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1A3C6E] text-white
              rounded-2xl px-6 py-5 shadow-2xl">
              <p className="font-display font-black text-[2.2rem] leading-none text-[#F97316]">15+</p>
              <p className="text-white/70 text-[0.75rem] font-semibold uppercase tracking-widest mt-1">
                Years Roofing Austin
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-[#F97316] text-white
              rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-display font-bold text-[0.85rem]">GAF Certified</p>
              <p className="text-white/75 text-[0.68rem]">Master Elite Contractor</p>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1">

            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              About Apex Roofing
            </div>

            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-5">
              Austin's Roofing Crew.<br />
              <span className="text-[#1A3C6E]">Built on Trust.</span>
            </h2>

            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-4 max-w-lg">
              Apex Roofing has been protecting Austin homes since 2009. We started as a two-man crew
              doing repairs in South Austin — today we're one of the most reviewed roofing companies
              in the city, with a team of 20+ certified installers across the metro area.
            </p>

            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-8 max-w-lg">
              We built this company on a simple belief: homeowners deserve honest advice, quality
              work, and a crew that shows up when they say they will. Every job we take — from a
              $400 repair to a full replacement — gets the same level of attention.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10 py-7
              border-y border-[#E5E7EB]">
              {STATS.map((s) => (
                <div key={s.num}>
                  <p className="font-display font-extrabold text-[#111827] text-[1.8rem] leading-none mb-1">
                    {s.num}
                  </p>
                  <p className="text-[#6B7280] text-[0.72rem] font-medium uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#F97316]/10 border border-[#F97316]/20
                    rounded-lg flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#111827] text-[0.95rem] mb-0.5">
                      {v.title}
                    </p>
                    <p className="text-[#6B7280] text-[0.8rem] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#142F58]
                text-white font-bold text-[0.88rem] px-7 py-3.5 rounded-xl
                transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(26,60,110,0.25)]"
            >
              Meet the Apex Team →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}