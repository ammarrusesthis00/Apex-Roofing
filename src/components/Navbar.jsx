import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Home } from "lucide-react";

const LINKS = [
  { label: "Services",     to: "/services" },
  { label: "Projects",     to: "/projects" },
  { label: "Service Areas",to: "/#areas" },
  { label: "Reviews",      to: "/#reviews" },
  { label: "FAQ",          to: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#1A3C6E] shadow-[0_4px_24px_rgba(26,60,110,0.35)] py-3"
        : "bg-[#1A3C6E] py-4"
      }`}>

      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center
            shadow-[0_2px_8px_rgba(249,115,22,0.4)] group-hover:bg-[#EA6C0A] transition-colors">
            <Home size={17} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-white text-[1rem] tracking-tight">
              [Company Name]
            </span>
            <span className="text-[0.62rem] text-white/50 tracking-widest uppercase font-medium">
              Roofing Co.
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to}
              className={`text-[0.82rem] font-medium px-3.5 py-2 rounded-md transition-all duration-150
                ${pathname === l.to
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/8"
                }`}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <a href="tel:+10000000000"
            className="flex items-center gap-2 text-white/90 hover:text-white
              text-[0.85rem] font-semibold transition-colors">
            <Phone size={14} strokeWidth={2.5} />
            (000) 000-0000
          </a>
          <Link to="/quote"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold
              text-[0.82rem] px-5 py-2.5 rounded-lg transition-all duration-150
              shadow-[0_2px_10px_rgba(249,115,22,0.4)] hover:-translate-y-px">
            Get Free Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          className="lg:hidden ml-auto p-2 text-white/80 hover:text-white transition-colors">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300
        bg-[#142F58] border-t border-white/10
        ${open ? "max-h-[480px]" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to}
              className="text-[0.9rem] font-medium text-white/80 hover:text-white
                py-3 border-b border-white/8 last:border-0 transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+10000000000"
              className="flex items-center justify-center gap-2 border border-white/25
                text-white font-semibold text-sm py-3 rounded-lg">
              <Phone size={15} /> (000) 000-0000
            </a>
            <Link to="/quote"
              className="bg-[#F97316] text-white font-semibold text-sm
                text-center py-3 rounded-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}