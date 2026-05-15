import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How do I know if my roof needs a repair or a full replacement?",
    a: "If your roof is under 15 years old and the damage is isolated — a few missing shingles, a small leak, cracked flashing — a repair is usually the right call. If it's over 20 years old, has widespread damage, or you're seeing sagging or daylight through the decking, replacement is almost always more cost-effective long term. Apex gives you an honest assessment, not the most expensive option.",
  },
  {
    q: "Do you work with homeowner insurance for storm damage?",
    a: "Yes — and we're experienced at it. We document all storm damage thoroughly, communicate directly with your adjuster if needed, and make sure nothing gets missed in the claim. Austin homeowners have seen a lot of hail the past few years. We know the process and we'll walk you through every step.",
  },
  {
    q: "How long does a full roof replacement take?",
    a: "Most standard Austin homes are done in a single day. Larger properties or complex roof lines may take two days. We show up on time, work clean, and don't leave a job half-finished.",
  },
  {
    q: "What roofing materials do you use?",
    a: "We install architectural shingles, metal roofing, flat TPO membranes, and more. For most Austin homes, we recommend GAF or Owens Corning architectural shingles — they handle Texas heat well and carry strong manufacturer warranties. We'll recommend the right material for your home's style, budget, and long-term needs.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer 0% financing options for qualified homeowners. A new roof is a significant investment — we don't think you should have to drain savings to protect your home. Ask us about financing when you call for your free estimate.",
  },
  {
    q: "Is Apex Roofing licensed and insured in Texas?",
    a: "Absolutely. We're fully licensed as a roofing contractor in Texas, carry general liability insurance, and all our crews are covered under workers' compensation. Never hire a roofer without verifying this — it protects you as the homeowner.",
  },
  {
    q: "What areas around Austin do you serve?",
    a: "We serve all of Austin and the surrounding areas including Round Rock, Cedar Park, Pflugerville, Buda, Kyle, Georgetown, Leander, and Manor. If you're within 40 miles of downtown Austin, we've got you covered.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200
        ${open ? "border-[#1A3C6E]/40 bg-[#EBF0FA]" : "border-[#E5E7EB] bg-white hover:border-[#1A3C6E]/25"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-display font-bold text-[0.98rem] leading-snug transition-colors
          ${open ? "text-[#1A3C6E]" : "text-[#111827]"}`}>
          {q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors
          ${open ? "bg-[#1A3C6E] text-white" : "bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div className={`transition-all duration-300 ${open ? "max-h-96" : "max-h-0"} overflow-hidden`}>
        <p className="px-6 pb-6 text-[#6B7280] text-[0.88rem] leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            What People Ask
          </h2>
          <p className="text-[#6B7280] mt-3 text-[0.95rem] leading-relaxed max-w-lg mx-auto">
            Austin homeowners ask us these questions every day. Straight answers — no fluff.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

      </div>
    </section>
  );
}