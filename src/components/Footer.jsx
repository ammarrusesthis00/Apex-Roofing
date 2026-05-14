import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1521] border-t border-white/8 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center">
            <Home size={15} color="white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-white text-[1rem]">
            [Company Name] Roofing
          </span>
        </div>

        <p className="text-white/30 text-[0.75rem]">
          © {new Date().getFullYear()} [Company Name] Roofing · [City Name], [State]
        </p>

        <div className="flex items-center gap-6">
          {[["Services","/services"],["Projects","/projects"],["Quote","/quote"]].map(([l,t]) => (
            <Link key={t} to={t}
              className="text-[0.8rem] text-white/50 hover:text-white transition-colors font-medium">
              {l}
            </Link>
          ))}
          <a href="tel:+10000000000"
            className="flex items-center gap-1.5 text-[#F97316] text-[0.8rem] font-semibold hover:text-[#EA6C0A] transition-colors">
            <Phone size={13} /> (000) 000-0000
          </a>
        </div>
      </div>
    </footer>
  );
}