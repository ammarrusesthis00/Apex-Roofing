const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    label: "Full Replacement",
    location: "Springfield",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
    label: "Shingle Repair",
    location: "Maplewood",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=80",
    label: "Storm Damage",
    location: "Fairview",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    label: "New Installation",
    location: "Riverside",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=80",
    label: "Gutter Install",
    location: "Cedarville",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&auto=format&fit=crop&q=80",
    label: "Leak Repair",
    location: "Lakewood",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#111827] py-24" id="gallery">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/25
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3 py-1.5 rounded-full mb-4">
            Our Work
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              Recent Projects
            </h2>
            <p className="text-white/40 text-[0.85rem] max-w-xs leading-relaxed">
              Every job completed to the same standard — whether it's a single repair or a full replacement.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4
                translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-300">
                <p className="font-display font-bold text-white text-[0.95rem] leading-tight">{p.label}</p>
                <p className="text-white/60 text-[0.75rem] mt-0.5">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}