"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Send, CheckCircle2, Building2, Users2, Sparkles, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export function BranchExpansion() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cityArea: "",
    studentsCount: "1",
    programs: "Chess",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.cityArea) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="expansion" className="py-24 relative overflow-hidden bg-[#0a1628]/95">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Demand-Driven Expansion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Not Just One Location.{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Expanding Where You Are.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Our vision is scalable excellence. We establish physical academy branches wherever parents and students
            express high interest. Tell us where you want WiseRoots to arrive next!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flagship Launch Branch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-emerald-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Flagship Branch #01</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">Headquarters</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Raj Nagar Extension Campus
              </h3>
              <p className="text-xs text-emerald-400 font-semibold mb-4">
                Ghaziabad, Uttar Pradesh
              </p>

              <div className="space-y-3.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Grand Plaza, Khasra No. 1207, Noor Nagar, Raj Nagar Extension, Ghaziabad, UP
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="tel:+917827590050"
                    className="hover:text-emerald-300 transition-colors font-semibold"
                  >
                    Direct Helpline: +91 7827590050
                  </a>
                </div>
              </div>

              {/* Campus Highlights */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Campus Facilities
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tournament Chess Arena</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acoustic Music Studio</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Natural Light Art Lab</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Speedcubing &amp; STEAM Zone</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex gap-3">
                <a
                  href="https://maps.google.com/?q=Grand+Plaza+Noor+Nagar+Raj+Nagar+Extension+Ghaziabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Expansion Radar Notification */}
            <div className="glass-panel p-5 rounded-2xl border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 flex items-center justify-center shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Upcoming Target Expansion Hubs</p>
                <p className="text-slate-400 mt-0.5">
                  Noida (Sec 62, 137), Indirapuram, Vasundhara, Crossing Republik &amp; Greater Noida West.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "Bring WiseRoots to Your Area" Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border-emerald-500/20 relative">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Community Voting &amp; Demand Request</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Want a WiseRoots Branch in Your Society or Sector?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  When 15–20 parents from a specific society, residential sector, or neighborhood express interest,
                  our expansion team evaluates opening a dedicated learning studio or partner hub right there.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Request Registered for {formData.cityArea}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your request for{" "}
                    <strong className="text-emerald-400">{formData.cityArea}</strong>. Our expansion team monitors these
                    entries daily to finalize our next branch location.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-400 hover:underline pt-2"
                  >
                    Submit another location request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your City, Sector or Society Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityArea}
                      onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                      placeholder="e.g. Indirapuram / Noida Sector 137 / Gaur City"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Approx. Interested Children
                      </label>
                      <select
                        value={formData.studentsCount}
                        onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1827] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="1">1 Child (My Family)</option>
                        <option value="2-4">2 to 4 Children (Friends / Relatives)</option>
                        <option value="5-10">5 to 10 Children (Society Group)</option>
                        <option value="15+">15+ Children (Large Society / RWA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primary Program of Interest
                      </label>
                      <select
                        value={formData.programs}
                        onChange={(e) => setFormData({ ...formData, programs: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1827] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="Chess">Chess</option>
                        <option value="Music">Music (Keyboard / Guitar)</option>
                        <option value="Art">Art (Drawing &amp; Painting)</option>
                        <option value="Indoor Activities">Indoor Activities (Rubik&apos;s Cube &amp; Puzzles)</option>
                        <option value="All Programs">All Programs</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Branch Expansion Request</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 No spam. We only contact you when a batch or branch is being scheduled in your area.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
