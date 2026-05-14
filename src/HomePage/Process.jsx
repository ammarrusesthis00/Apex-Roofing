import { Link } from "react-router-dom";
import { ClipboardList, Calculator, HardHat, BadgeCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <ClipboardList size={24} />,
    title: "Inspection",
    desc: "We come to you — same day when possible. Full roof assessment, no pressure, no commitment.",
  },
  {
    num: "02",
    icon: <Calculator size={24} />,
    title: "Free Estimate",
    desc: "Clear, itemized quote delivered fast. You know exactly what you're paying before we touch anything.",
  },
  {
    num: "03",
    icon: <HardHat size={24} />,
    title: "Repair or Install",
    desc: "Our certified crew gets to work. Clean, efficient, respectful of your home and your time.",
  },
  {
    num: "04",
    icon: <BadgeCheck size={24} />,
    title: "Final Sign-Off",
    desc: "We walk you through everything before we leave. Backed by our 10-year workmanship warranty.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#1A3C6E] py-24" id="process">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-4">
              Our Process
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              Simple Steps,<br />From Call to Completion
            </h2>
            <p className="text-white/55 mt-3 max-w-md text-[0.95rem] leading-relaxed">
              A clear, straightforward process from your first contact to the final inspection — so you always know what to expect.
            </p>
          </div>
          <Link to="/quote"
            className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.88rem] px-7 py-3.5 rounded-xl
              shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 shrink-0 w-fit">
            Start Now <ArrowRight size={15} />
          </Link>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative">

              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[calc(100%_-_10px)] w-full h-px
                  border-t-2 border-dashed border-white/15 z-0" />
              )}

              <div className="relative z-10 bg-white/6 hover:bg-white/10 border border-white/10
                hover:border-white/20 rounded-2xl p-6 transition-all duration-200">

                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-[#F97316]/15 border border-[#F97316]/25
                    rounded-xl flex items-center justify-center text-[#F97316]">
                    {s.icon}
                  </div>
                  <span className="font-display font-black text-white/15 text-[2rem] leading-none">
                    {s.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-[1.05rem] mb-2">
                  {s.title}
                </h3>
                <p className="text-white/50 text-[0.82rem] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}