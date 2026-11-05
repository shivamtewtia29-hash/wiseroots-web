"use client";

import { useState } from "react";
import { Send, Phone, Calendar, Clock, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

export function EnquirySection() {
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "7",
    program: "Chess",
    mode: "Offline (Campus)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }

    setBooked(true);
  };

  const createWhatsAppLink = () => {
    const text = `Hello WiseRoots Academy! I want to book a Free Demo session.\nParent: ${formData.parentName}\nPhone: ${formData.phone}\nChild: ${formData.childName} (Age: ${formData.childAge})\nProgram: ${formData.program}\nMode: ${formData.mode}`;
    return `https://wa.me/917827590050?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="enquiry" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border-emerald-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Commitment • 100% Free</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Book a Free Demo &amp;{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Cognitive Assessment
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Experience our coaching firsthand. Our international-level mentors will evaluate your child&apos;s
                current skill level, strategic intuition, and provide a personalized roadmap.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-on-1 interaction with a Senior FIDE/Certified Coach</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive diagnostic assessment report</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guidance on tournament and grading roadmap</span>
                </div>
              </div>

              {/* Instant WhatsApp Support Card */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Prefer direct instant booking?</p>
                  <p className="text-sm font-bold text-white mt-0.5">+91 7827590050</p>
                </div>

                <a
                  href="https://wa.me/917827590050?text=Hello%20WiseRoots%20Academy,%20I%20want%20to%20enquire%20about%20a%20Free%20Demo%20Session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#07111e]/80 p-6 sm:p-8 rounded-2xl border border-white/10">
              {booked ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Assessment Request Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.parentName}</strong>! Our academic counselor
                    will contact you at <strong className="text-emerald-400">{formData.phone}</strong> within 2 hours
                    to confirm your child&apos;s free assessment slot.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setBooked(false)}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Contact No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 78275 90050"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Child&apos;s Name
                      </label>
                      <input
                        type="text"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder="e.g. Aarav"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Child&apos;s Age
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#07111e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400"
                      >
                        <option value="4-5">4 to 5 Years (Tiny Masters)</option>
                        <option value="6-8">6 to 8 Years (Foundation)</option>
                        <option value="9-12">9 to 12 Years (Intermediate)</option>
                        <option value="13-17">13 to 17 Years (Competitive)</option>
                        <option value="18+">18+ / Adult Enthusiast</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Interested Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#07111e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Chess">Chess</option>
                        <option value="Music">Music (Piano / Guitar)</option>
                        <option value="Art">Art (Drawing &amp; Painting)</option>
                        <option value="Indoor Activities">Indoor Activities (Speedcubing &amp; Puzzles)</option>
                        <option value="Multi-Discipline">Multi-Activity Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Learning Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#07111e] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Offline (Campus)">Offline (Campus Studio)</option>
                        <option value="Online (Live 1-on-1)">Online (Live International 1-on-1)</option>
                        <option value="Hybrid">Hybrid (Studio + Online Practice)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Free Demo Booking</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
