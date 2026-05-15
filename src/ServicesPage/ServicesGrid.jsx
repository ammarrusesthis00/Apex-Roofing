import { Link } from "react-router-dom";
import {
  Wrench, Home, Droplets, CloudLightning,
  Pipette, Search, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench size={26} />,
    title: "Roof Repair",
    slug: "roof-repair",
    price: "From $250",
    time: "Same day",
    desc: "Missing shingles, cracked flashing, storm punctures — we diagnose the actual source and fix it properly the first time. No patchwork that fails in the next rain.",
    points: ["Shingle replacement", "Flashing repair", "Ridge cap fixes", "Leak sealing"],
  },
  {
    icon: <Home size={26} />,
    title: "Roof Replacement",
    slug: "roof-replacement",
    price: "From $6,500",
    time: "1–2 days",
    desc: "Full tear-off and installation of a new roof system using GAF or Owens Corning materials. Built to handle Austin summers, hail seasons, and everything in between.",
    points: ["Full tear-off & disposal", "Decking inspection", "GAF/OC shingles", "10-year warranty"],
  },
  {
    icon: <Droplets size={26} />,
    title: "Leak Detection",
    slug: "leak-detection",
    price: "From $150",
    time: "Same day",
    desc: "We trace the source of your leak fast — no guessing, no unnecessary tear-out. Using moisture mapping and visual inspection to find exactly where water is getting in.",
    points: ["Moisture mapping", "Attic inspection", "Full written report", "No unnecessary work"],
  },
  {
    icon: <CloudLightning size={26} />,
    title: "Storm Damage Repair",
    slug: "storm-damage",
    price: "Insurance covered",
    time: "Emergency dispatch",
    desc: "Austin gets hit hard every hail season. We document all damage thoroughly, communicate with your insurance adjuster, and restore your roof to pre-storm condition.",
    points: ["Insurance documentation", "Adjuster coordination", "Emergency tarping", "Full restoration"],
  },
  {
    icon: <Pipette size={26} />,
    title: "Gutter Installation",
    slug: "gutters",
    price: "From $800",
    time: "1 day",
    desc: "Properly fitted seamless gutters protect your foundation, siding, and landscaping. We install K-style and half-round profiles in aluminum, steel, and copper.",
    points: ["Seamless aluminum gutters", "Downspout placement", "Gutter guards available", "Fascia repair"],
  },
  {
    icon: <Search size={26} />,
    title: "Roof Inspection",
    slug: "inspection",
    price: "From $99",
    time: "Same day",
    desc: "A full written inspection report with photos — ideal before buying or selling a home, after any storm, or if you haven't had your roof checked in the last 3 years.",
    points: ["Photo documentation", "Written condition report", "Estimated remaining life", "Insurance-ready format"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24" id="services-grid">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Everything Your Roof Needs
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Whether it's a $200 repair or a full replacement, every Apex job comes
            with honest pricing, certified labor, and a crew that cleans up after itself.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.slug}
              className="group flex flex-col border border-[#E5E7EB] rounded-2xl overflow-hidden
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#1A3C6E]/20
                transition-all duration-250">

              {/* Card top */}
              <div className="bg-[#F9FAFB] p-6 border-b border-[#E5E7EB]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1A3C6E]/8 border border-[#1A3C6E]/12
                    group-hover:bg-[#1A3C6E]/14 rounded-xl
                    flex items-center justify-center text-[#1A3C6E] transition-colors">
                    {s.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-[#F97316] text-[0.85rem]">{s.price}</p>
                    <p className="text-[#9CA3AF] text-[0.7rem] font-medium">{s.time}</p>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[#111827] text-[1.15rem] mb-2">
                  {s.title}
                </h3>
                <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Card bottom */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <ul className="flex flex-col gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[0.82rem] text-[#374151]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/quote"
                  className="mt-auto flex items-center gap-1.5 text-[#1A3C6E] font-semibold
                    text-[0.82rem] hover:gap-3 transition-all group-hover:text-[#F97316]">
                  Get a Quote <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}