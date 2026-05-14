import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#1A3C6E] py-20" id="contact">
      <div className="max-w-3xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <p className="text-white/50 text-[0.75rem] font-semibold uppercase tracking-widest mb-2">
              Free Quote · No Obligation
            </p>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.6rem,4vw,2.2rem)] leading-tight">
              Need Roofing Help Today?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+10000000000"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl
                shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call Now
            </a>
            <Link
              to="/quote"
              className="flex items-center gap-2 border border-white/25 hover:border-white/50
                text-white font-semibold text-[0.88rem] px-6 py-3 rounded-xl
                transition-all hover:bg-white/6"
            >
              Get Estimate <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row
          items-center justify-between gap-3 text-white/25 text-[0.75rem]">
          <p>© {new Date().getFullYear()} [Company Name]. All rights reserved.</p>
          <p>[City], [State]</p>
        </div>

      </div>
    </section>
  );
}