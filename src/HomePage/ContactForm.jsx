import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const ISSUE_TYPES = [
  "Roof Leak",
  "Storm / Hail Damage",
  "Full Roof Replacement",
  "Roof Inspection",
  "Gutter Installation",
  "Other",
];

const URGENCY = ["Not Urgent", "Within a Week", "ASAP", "Emergency — Today"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "",
    issue: "", urgency: "", message: "",
  });

  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-24" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            Request Your Free Estimate
          </h2>
          <p className="text-[#6B7280] mt-3 text-[0.95rem] max-w-md mx-auto leading-relaxed">
            Fill out the form and an Apex crew member will call you back within the hour.
            No pressure, no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <div className="bg-[#1A3C6E] rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-[1.2rem] mb-6">
                Contact Apex Roofing
              </h3>

              <div className="flex flex-col gap-5">
                <a href="tel:+15120000000"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-[#F97316]/20 border border-[#F97316]/30
                    rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={17} color="#F97316" />
                  </div>
                  <div>
                    <p className="text-white/50 text-[0.68rem] font-semibold uppercase tracking-widest mb-0.5">Call Us</p>
                    <p className="font-display font-bold text-[1rem] group-hover:text-[#F97316] transition-colors">
                      (512) 000-0000
                    </p>
                  </div>
                </a>

                <a href="mailto:info@apexroofingaustin.com"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 border border-white/15
                    rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={17} color="white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-[0.68rem] font-semibold uppercase tracking-widest mb-0.5">Email</p>
                    <p className="font-display font-bold text-[0.9rem] group-hover:text-[#F97316] transition-colors">
                      info@apexroofingaustin.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/15
                    rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={17} color="white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-[0.68rem] font-semibold uppercase tracking-widest mb-0.5">Service Area</p>
                    <p className="font-display font-bold text-[0.9rem]">
                      Austin &amp; surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-[0.75rem] leading-relaxed">
                  Mon–Sat: 7am – 7pm<br />
                  Sunday: Emergency calls only<br />
                  <span className="text-[#F97316] font-semibold">24/7 Emergency Line always open</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center
                bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-14 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={32} color="#16a34a" />
                </div>
                <h3 className="font-display font-extrabold text-[#111827] text-[1.5rem]">
                  We'll Call You Shortly
                </h3>
                <p className="text-[#6B7280] text-[0.9rem] max-w-sm leading-relaxed">
                  Thanks for reaching out. An Apex team member will contact you within the hour to schedule your free inspection.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-8 flex flex-col gap-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="John Smith"
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input name="phone" required value={form.phone} onChange={handle}
                      placeholder="(512) 000-0000" type="tel"
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all" />
                  </div>
                </div>

                {/* Email + Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Email
                    </label>
                    <input name="email" value={form.email} onChange={handle}
                      placeholder="john@email.com" type="email"
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Property Address
                    </label>
                    <input name="address" value={form.address} onChange={handle}
                      placeholder="123 Main St, Austin, TX"
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all" />
                  </div>
                </div>

                {/* Issue type + Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Roof Issue *
                    </label>
                    <select name="issue" required value={form.issue} onChange={handle}
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all appearance-none">
                      <option value="" disabled>Select issue type</option>
                      {ISSUE_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                      Urgency *
                    </label>
                    <select name="urgency" required value={form.urgency} onChange={handle}
                      className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                        text-[0.9rem] text-[#111827]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all appearance-none">
                      <option value="" disabled>How urgent?</option>
                      {URGENCY.map((u) => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide">
                    Tell Us More
                  </label>
                  <textarea name="message" value={form.message} onChange={handle}
                    rows={4} placeholder="Describe the issue, when it started, anything else we should know..."
                    className="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3
                      text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF] resize-none
                      focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                      transition-all" />
                </div>

                {/* Submit */}
                <button type="submit"
                  className="flex items-center justify-center gap-2.5
                    bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.95rem]
                    py-4 rounded-xl transition-all hover:-translate-y-0.5
                    shadow-[0_4px_16px_rgba(249,115,22,0.35)] mt-1">
                  <Send size={16} />
                  Send Request — We'll Call Within the Hour
                </button>

                <p className="text-[#9CA3AF] text-[0.72rem] text-center">
                  No spam. No obligation. Just a straight answer from a real roofer.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}