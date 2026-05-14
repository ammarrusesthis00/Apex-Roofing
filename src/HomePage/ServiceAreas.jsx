import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AREAS = [
  { name: "Springfield",   primary: true,  tag: "Main Office" },
  { name: "Maplewood",     primary: false, tag: "Full Coverage" },
  { name: "Riverside",     primary: false, tag: "Full Coverage" },
  { name: "Fairview",      primary: false, tag: "Full Coverage" },
  { name: "Cedarville",    primary: false, tag: "Full Coverage" },
  { name: "Lakewood",      primary: false, tag: "Full Coverage" },
  { name: "Brookside",     primary: false, tag: "Full Coverage" },
  { name: "Westfield",     primary: false, tag: "Emergency Only" },
  { name: "Northgate",     primary: false, tag: "Emergency Only" },
];

const TAG_STYLES = {
  "Main Office":     "bg-[#F97316]/15 border-[#F97316]/25 text-[#F97316]",
  "Full Coverage":   "bg-white/8 border-white/12 text-white/50",
  "Emergency Only":  "bg-[#1A3C6E]/60 border-[#1A3C6E] text-white/50",
};

export default function ServiceAreas() {
  return (
    <section className="bg-[#1A3C6E] py-24" id="service-areas">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Left — copy */}
          <div className="lg:w-80 shrink-0">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Where We Work
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.6rem)] leading-tight mb-4">
              Serving Your<br />Neighbourhood
            </h2>
            <p className="text-white/55 text-[0.95rem] leading-relaxed mb-8">
              We cover the greater [City] region and surrounding towns. Emergency response available across all listed areas.
            </p>

            {/* Legend */}
            <div className="flex flex-col gap-3 mb-10">
              {Object.entries(TAG_STYLES).map(([label, cls]) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className={`inline-flex items-center border text-[0.65rem] font-semibold
                    uppercase tracking-wider px-2.5 py-0.5 rounded-full ${cls}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+10000000000"
                className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl
                  shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 w-fit">
                <Phone size={15} strokeWidth={2.5} />
                Call for Coverage
              </a>
              <p className="text-white/35 text-[0.75rem]">
                Not on the list? Call us — we may still cover you.
              </p>
            </div>
          </div>

          {/* Right — area grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {AREAS.map((a) => (
                <div
                  key={a.name}
                  className={`group flex items-center justify-between
                    rounded-xl px-5 py-4 border transition-all duration-200
                    ${a.primary
                      ? "bg-white/10 border-white/20 hover:bg-white/15"
                      : "bg-white/4 border-white/8 hover:bg-white/8"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className={a.primary ? "text-[#F97316]" : "text-white/30"}
                      strokeWidth={2}
                    />
                    <span className={`font-display font-bold text-[0.95rem]
                      ${a.primary ? "text-white" : "text-white/70"}`}>
                      {a.name}
                    </span>
                  </div>
                  <span className={`inline-flex items-center border text-[0.62rem] font-semibold
                    uppercase tracking-wider px-2 py-0.5 rounded-full ${TAG_STYLES[a.tag]}`}>
                    {a.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-6 flex items-center gap-2 text-white/35 text-[0.78rem]">
              <MapPin size={13} />
              <span>Coverage map updated regularly. Emergency response 24/7 across all zones.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}