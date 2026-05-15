import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How quickly can Apex respond to an emergency?",
    a: "For active leaks or storm damage, we dispatch same-day — often within the hour in the Austin metro. We keep crews on call specifically for emergencies, no extra charge for after-hours response.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every estimate is free, written, and itemized. We come to your property, assess the full situation, and deliver a quote within 24 hours. No pressure, no obligation to proceed.",
  },
  {
    q: "How long does a full roof replacement take?",
    a: "Most Austin homes are completed in a single day. Larger properties or complex roof lines may take two days. We show up at 7am, work straight through, and don't leave a job half-finished.",
  },
  {
    q: "What roofing materials do you install?",
    a: "We install GAF and Owens Corning architectural shingles, standing seam metal, TPO flat membranes, and more. For most Austin homes, we recommend GAF Timberline HDZ — it handles Texas heat and hail exceptionally well and carries a Lifetime limited warranty.",
  },
  {
    q: "Will you work directly with my insurance company?",
    a: "Yes — and we're experienced at it. We document all storm damage with photos, write detailed reports, and communicate directly with your adjuster if needed. We've helped hundreds of Austin homeowners get their full claim covered.",
  },
  {
    q: "What does your 10-year warranty actually cover?",
    a: "Our workmanship warranty covers any defect in our installation — if something fails because of how we installed it, we come back and fix it at no cost. This is separate from the manufacturer's material warranty, which can extend up to Lifetime depending on the product.",
  },
  {
    q: "Do you service areas outside Austin?",
    a: "Yes. We cover Round Rock, Cedar Park, Pflugerville, Buda, Kyle, Georgetown, Leander, and Manor. If you're within 40 miles of downtown Austin, call us — we likely cover your area.",
  },
  {
    q: "Is Apex licensed and insured in Texas?",
    a: "Absolutely. We're fully licensed as a roofing contractor in the state of Texas and carry both general liability insurance and workers' compensation. We'll provide proof of insurance before any work begins — never hire a roofer who won't.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200
      ${open
        ? "border-[#1A3C6E]/30 bg-[#EBF0FA]"
        : "border-[#E5E7EB] bg-white hover:border-[#1A3C6E]/20"
      }`}>
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
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-64" : "max-h-0"}`}>
        <p className="px-6 pb-6 text-[#6B7280] text-[0.88rem] leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServicesFAQ() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Questions We Hear Every Day
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
            Straight answers from the Apex team. If you don't see your question here, just call us.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

      </div>
    </section>
  );
}