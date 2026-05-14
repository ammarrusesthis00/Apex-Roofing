import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

const PAIRS = [
  {
    label: "Storm Damage → Full Repair",
    location: "[City Name], [State]",
    before: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Old Shingles → New Roof",
    location: "[City Name], [State]",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
  },
];

function Slider({ before, after }) {
  const [pos, setPos]       = useState(50);
  const dragging            = useRef(false);
  const containerRef        = useRef(null);

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const raw  = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(raw, 2), 98);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    setPos(getPos(e.clientX));
  }, [getPos]);

  const onTouchMove = useCallback((e) => {
    if (!dragging.current) return;
    setPos(getPos(e.touches[0].clientX));
  }, [getPos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={onMouseMove}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={onTouchMove}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After image (full width background) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before"
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth ?? "100%" }} />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 text-white text-[0.68rem]
        font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-[#F97316] text-white text-[0.68rem]
        font-bold uppercase tracking-widest px-3 py-1 rounded-full">
        After
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ left: `${pos}%` }} />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
          w-10 h-10 bg-white rounded-full shadow-xl
          flex items-center justify-center cursor-grab active:cursor-grabbing
          border-2 border-[#F97316]"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => { e.preventDefault(); dragging.current = true; }}
        onTouchStart={() => { dragging.current = true; }}
      >
        <MoveHorizontal size={16} color="#F97316" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Real Results
          </div>
          <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            Before &amp; After
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-md mx-auto text-[0.95rem] leading-relaxed">
            Drag the slider to see the transformation. Real jobs, real results — right here in [City Name].
          </p>
        </div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIRS.map((p) => (
            <div key={p.label}>
              <Slider before={p.before} after={p.after} />
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display font-bold text-[#111827] text-[0.95rem]">{p.label}</p>
                <p className="text-[#6B7280] text-[0.75rem] font-medium">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}