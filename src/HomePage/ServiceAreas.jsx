import { MapPin, Phone } from "lucide-react";

const AREAS = [
  { name: "Austin",        primary: true,  tag: "Main Office" },
  { name: "Round Rock",    primary: false, tag: "Full Coverage" },
  { name: "Cedar Park",    primary: false, tag: "Full Coverage" },
  { name: "Pflugerville",  primary: false, tag: "Full Coverage" },
  { name: "Buda",          primary: false, tag: "Full Coverage" },
  { name: "Kyle",          primary: false, tag: "Full Coverage" },
  { name: "Georgetown",    primary: false, tag: "Full Coverage" },
  { name: "Leander",       primary: false, tag: "Emergency Only" },
  { name: "Manor",         primary: false, tag: "Emergency Only" },
];

const TAG_STYLES = {
  "Main Office":    "bg-[#F97316]/15 border-[#F97316]/25 text-[#F97316]",
  "Full Coverage":  "bg-white/8 border-white/12 text-white/50",
  "Emergency Only": "bg-[#1A3C6E]/60 border-[#1A3C6E] text-white/50",
};

export default function ServiceAreas() {
  return (
    <section className="bg-[#1A3C6E] py-24" id="service-areas">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-start">

          {/* Left — copy */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Where We Work
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.6rem)] leading-tight mb-4">
              Roofing Austin<br />& Surrounding Areas
            </h2>
            <p className="text-white/55 text-[0.95rem] leading-relaxed mb-8">
              Apex covers all of Austin and the greater metro — from Cedar Park down to Buda.
              Emergency response available across every listed area, day or night.
            </p>

            {/* Legend */}
            <div className="flex flex-col gap-3 mb-10">
              {Object.entries(TAG_STYLES).map(([label, cls]) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className={`inline-flex items-center border text-[0.65rem] font-semibold
                    uppercase tracking-wider px-2.5 py-0.5 rounded-full ${cls}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+15120000000"
                className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl
                  shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 w-fit">
                <Phone size={15} strokeWidth={2.5} />
                Call (512) 000-0000
              </a>
              <p className="text-white/35 text-[0.75rem]">
                Not on the list? Call us — we likely cover you.
              </p>
            </div>
          </div>

          {/* Right — map + grid */}
          <div className="flex-1 w-full flex flex-col gap-5">

            {/* Google Maps Embed — Austin, TX */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl w-full h-72">
              <iframe
                title="Apex Roofing Service Area — Austin, TX"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220975.39697374294!2d-97.87640313749998!3d30.307801899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
              />
            </div>

            {/* Area cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {AREAS.map((a) => (
                <div
                  key={a.name}
                  className={`group flex items-center justify-between
                    rounded-xl px-5 py-4 border transition-all duration-200
                    ${a.primary
                      ? "bg-white/10 border-white/20 hover:bg-white/15"
                      : "bg-white/4 border-white/8 hover:bg-white/8"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className={a.primary ? "text-[#F97316]" : "text-white/30"}
                      strokeWidth={2}
                    />
                    <span className={`font-display font-bold text-[0.95rem]
                      ${a.primary ? "text-white" : "text-white/70"}`}>
                      {a.name}
                    </span>
                  </div>
                  <span className={`inline-flex items-center border text-[0.62rem] font-semibold
                    uppercase tracking-wider px-2 py-0.5 rounded-full ${TAG_STYLES[a.tag]}`}>
                    {a.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/35 text-[0.78rem]">
              <MapPin size={13} />
              <span>Coverage map updated regularly. Emergency response 24/7 across all zones.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}