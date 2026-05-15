import {
  Clock, BadgeCheck, DollarSign, ShieldCheck,
  ThumbsUp, Headphones, Wrench, FileText
} from "lucide-react";

const BENEFITS = [
  {
    icon: <Clock size={22} />,
    title: "Same-Day Response",
    desc: "Call before noon and we're on-site the same day in most Austin zip codes. Emergencies dispatched within the hour.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Upfront, Flat Pricing",
    desc: "You get a detailed written quote before we start. No surprise charges, no 'we found extra damage' upsells mid-job.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "GAF Certified Installation",
    desc: "Our certification means manufacturer-backed warranties on materials — not just our word, but GAF's guarantee behind every install.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "10-Year Workmanship Warranty",
    desc: "Every job we complete is covered for 10 years. If something goes wrong with our work, we come back and fix it. Period.",
  },
  {
    icon: <FileText size={22} />,
    title: "Insurance Claim Assistance",
    desc: "We've helped hundreds of Austin homeowners navigate hail and storm claims. We document everything and work directly with your adjuster.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Premium Materials Only",
    desc: "We stock GAF and Owens Corning shingles, Firestone flat membranes, and standing seam metal — materials built for Texas weather.",
  },
  {
    icon: <ThumbsUp size={22} />,
    title: "Clean, Respectful Crews",
    desc: "Our teams clean up completely before leaving. No nails in the driveway, no debris in the yard. We treat your home like it's ours.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Real People, Real Support",
    desc: "You talk to the same crew member from first call to final walkthrough. No call centers, no handoffs, no confusion.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24" id="benefits">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Why Apex
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            What You Get With Every Job
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            We don't just fix roofs. We back our work, communicate clearly, and make the whole
            experience as painless as possible — from first call to final inspection.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, i) => (
            <div key={b.title}
              className="group flex flex-col gap-4 p-6
                border border-[#E5E7EB] rounded-2xl
                hover:border-[#1A3C6E]/25 hover:shadow-[0_8px_30px_rgba(26,60,110,0.08)]
                transition-all duration-200">

              <div className="w-11 h-11 bg-[#1A3C6E]/6 border border-[#1A3C6E]/12
                group-hover:bg-[#1A3C6E]/10 rounded-xl
                flex items-center justify-center text-[#1A3C6E] transition-colors">
                {b.icon}
              </div>

              <div>
                <h3 className="font-display font-bold text-[#111827] text-[1rem] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                  {b.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}