import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop&q=80",
    type: "Full Replacement",
    location: "South Austin, TX",
    material: "GAF Timberline HDZ",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    type: "Storm Damage Repair",
    location: "Round Rock, TX",
    material: "Owens Corning Duration",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    type: "Roof Repair",
    location: "Cedar Park, TX",
    material: "Architectural Shingles",
  },
  {
    img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop&q=80",
    type: "Full Replacement",
    location: "Pflugerville, TX",
    material: "Metal Standing Seam",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    type: "Leak Detection & Repair",
    location: "Buda, TX",
    material: "GAF Timberline",
  },
  {
    img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&auto=format&fit=crop&q=80",
    type: "Gutter Installation",
    location: "Georgetown, TX",
    material: "Seamless Aluminum K-Style",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#F9FAFB] py-24" id="gallery">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Our Work
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Recent Projects Across Austin
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Every project below was completed by our Austin crew. Click any image to see the details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(p)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer
                shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-250"
            >
              <img
                src={p.img}
                alt={`${p.type} in ${p.location}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/80 via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full
                    flex items-center justify-center">
                    <ZoomIn size={16} color="white" />
                  </div>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-[1rem] mb-0.5">{p.type}</p>
                  <p className="text-white/70 text-[0.75rem]">{p.location}</p>
                </div>
              </div>

              {/* Always visible tag */}
              <div className="absolute top-3 left-3 bg-[#1A3C6E]/90 backdrop-blur-sm
                text-white text-[0.65rem] font-semibold uppercase tracking-widest
                px-2.5 py-1 rounded-full">
                {p.type}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
            flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={active.img} alt={active.type} className="w-full h-72 object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white
                  rounded-full flex items-center justify-center shadow-md transition-colors"
              >
                <X size={16} color="#111827" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-[#111827] text-[1.2rem] mb-1">{active.type}</h3>
              <p className="text-[#6B7280] text-[0.85rem] mb-1">{active.location}</p>
              <p className="text-[#F97316] text-[0.8rem] font-semibold">{active.material}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}