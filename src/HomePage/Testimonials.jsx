import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    city: "Springfield",
    rating: 5,
    text: "Called after a hailstorm and they were on-site same day. Roof fixed, insurance claim handled — I didn't have to do a thing. Truly impressive.",
    service: "Storm Damage Repair",
    initials: "MT",
  },
  {
    name: "Linda Reyes",
    city: "Maplewood",
    rating: 5,
    text: "Full roof replacement done in under two days. The crew was clean, respectful, and the final walkthrough gave me total confidence. Worth every penny.",
    service: "Roof Replacement",
    initials: "LR",
  },
  {
    name: "Derek S.",
    city: "Fairview",
    rating: 5,
    text: "Had a persistent leak two other companies couldn't trace. These guys found it in an hour and sealed it properly. Zero issues since.",
    service: "Leak Detection",
    initials: "DS",
  },
  {
    name: "Angela Kim",
    city: "Riverside",
    rating: 5,
    text: "Needed an inspection before closing on a house. Got a detailed written report the same day. Professional, fast, and no upselling.",
    service: "Roof Inspection",
    initials: "AK",
  },
  {
    name: "Tom Vasquez",
    city: "Cedarville",
    rating: 5,
    text: "Emergency call at 9pm after wind ripped off flashing. They showed up within two hours. Temporary seal that night, full repair next morning.",
    service: "Emergency Repair",
    initials: "TV",
  },
  {
    name: "Sandra B.",
    city: "Lakewood",
    rating: 5,
    text: "Clear quote upfront, no surprise charges at the end. The gutters look great and the whole job was done faster than expected.",
    service: "Gutter Installation",
    initials: "SB",
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} fill="#F97316" color="#F97316" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#111827] py-24" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/25
              text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3 py-1.5 rounded-full mb-4">
              Real Reviews
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              What Homeowners<br />Are Saying
            </h2>
            <p className="text-white/50 mt-3 max-w-md text-[0.95rem] leading-relaxed">
              Hundreds of satisfied homeowners across the region. Here's what a few of them had to say.
            </p>
          </div>

          {/* Aggregate score */}
          <div className="shrink-0 bg-white/4 border border-white/8 rounded-2xl px-7 py-5 flex items-center gap-5">
            <div>
              <p className="font-display font-extrabold text-white text-[2.8rem] leading-none">4.9</p>
              <Stars count={5} />
              <p className="text-white/40 text-[0.68rem] font-medium mt-1.5 uppercase tracking-wide">200+ Google Reviews</p>
            </div>
            <div className="w-px h-14 bg-white/10" />
            <div className="flex flex-col gap-2">
              {[5, 4, 3].map((stars, i) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-white/40 text-[0.7rem] font-medium w-3">{stars}</span>
                  <div className="w-24 h-1.5 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F97316] rounded-full"
                      style={{ width: i === 0 ? "92%" : i === 1 ? "6%" : "2%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="group bg-white/4 hover:bg-[#1A3C6E]/50
                border border-white/8 hover:border-[#1A3C6E]
                rounded-2xl p-6 transition-all duration-200 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-xl bg-[#1A3C6E] border border-[#1A3C6E]/60
                    flex items-center justify-center
                    font-display font-bold text-white text-[0.78rem] shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-[0.9rem] leading-tight">{r.name}</p>
                    <p className="text-white/40 text-[0.72rem]">{r.city}</p>
                  </div>
                </div>
                <Quote size={18} className="text-[#F97316]/40 shrink-0" />
              </div>

              {/* Stars */}
              <Stars count={r.rating} />

              {/* Review text */}
              <p className="text-white/60 text-[0.83rem] leading-relaxed mt-3 flex-1">
                "{r.text}"
              </p>

              {/* Service pill */}
              <div className="mt-4 pt-4 border-t border-white/8">
                <span className="inline-flex items-center bg-[#F97316]/10 border border-[#F97316]/20
                  text-[#F97316] text-[0.68rem] font-semibold uppercase tracking-wider
                  px-2.5 py-1 rounded-full">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}