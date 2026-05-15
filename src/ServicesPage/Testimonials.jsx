import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    location: "South Austin, TX",
    rating: 5,
    date: "March 2024",
    text: "Apex showed up within 2 hours after the hail storm. Had my roof patched that same evening and fully replaced by Friday. Professional, fast, and completely honest about what needed to be done — exactly what you want when your ceiling is leaking.",
  },
  {
    name: "Priya S.",
    location: "Round Rock, TX",
    rating: 5,
    date: "January 2024",
    text: "Got three quotes before calling Apex. They weren't the cheapest but they were by far the most transparent. The crew arrived on time, cleaned up before leaving, and the new roof looks incredible. Worth every cent.",
  },
  {
    name: "Derek & Alicia M.",
    location: "Cedar Park, TX",
    rating: 5,
    date: "November 2023",
    text: "We were nervous about the whole process — new roof is a big expense. Apex walked us through every step, handled the insurance claim themselves, and finished a day ahead of schedule. Couldn't have been easier.",
  },
  {
    name: "James O.",
    location: "Pflugerville, TX",
    rating: 5,
    date: "August 2023",
    text: "Had a leak I'd been ignoring for months. Called Apex on a Tuesday morning, they found the source by noon and sealed it same day. Turns out it was just a flashing issue — they could've told me I needed a new roof but they didn't. That's integrity.",
  },
  {
    name: "Sandra K.",
    location: "Buda, TX",
    rating: 5,
    date: "June 2023",
    text: "The crew was unbelievably respectful of our property. Laid down tarps everywhere, kept the noise to a minimum while my kids were napping, and swept the entire yard before leaving. Roof looks great too.",
  },
  {
    name: "Tony R.",
    location: "Georgetown, TX",
    rating: 5,
    date: "April 2023",
    text: "Apex replaced our 22-year-old roof in one day. The team showed up at 7am, finished by 4pm, and left the place spotless. My neighbor asked who did it the next morning — already gave him their number.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Reviews
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-extrabold text-[#111827]
                text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-2">
                What Austin Homeowners Say
              </h2>
              <p className="text-[#6B7280] text-[0.95rem]">
                200+ five-star reviews on Google. Here's what a few of them said.
              </p>
            </div>
            {/* Overall rating */}
            <div className="flex items-center gap-4 bg-[#F9FAFB] border border-[#E5E7EB]
              rounded-2xl px-6 py-4 shrink-0">
              <div>
                <p className="font-display font-black text-[#111827] text-[2.2rem] leading-none">4.9</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F97316" color="#F97316" />
                  ))}
                </div>
              </div>
              <div className="w-px h-12 bg-[#E5E7EB]" />
              <div>
                <p className="font-display font-bold text-[#111827] text-[0.95rem]">Google Rating</p>
                <p className="text-[#6B7280] text-[0.75rem]">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name}
              className="flex flex-col gap-4 p-6 border border-[#E5E7EB] rounded-2xl
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#1A3C6E]/15
                transition-all duration-200">

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#F97316" color="#F97316" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#374151] text-[0.85rem] leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
                <div>
                  <p className="font-display font-bold text-[#111827] text-[0.9rem]">{r.name}</p>
                  <p className="text-[#9CA3AF] text-[0.72rem] font-medium">{r.location}</p>
                </div>
                <p className="text-[#9CA3AF] text-[0.7rem]">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}