"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Lightbulb, Target, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const pillars = [
  {
    title: "Critical Thinking Over Rote Memorization",
    desc: "School exams reward memorizing answers. WiseRoots trains children to formulate multiple solutions, evaluate risk-reward ratios, and think strategically under clock pressure.",
    icon: Brain,
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Emotional Resilience & Grace Under Defeat",
    desc: "In chess and performance arts, failure is instant feedback. Students learn emotional self-regulation, analyzing their blunders with calm objectivity instead of tears or frustration.",
    icon: Heart,
    accent: "text-rose-400 bg-rose-500/10 border-rose-500/30",
  },
  {
    title: "Bilateral Hemispheric Brain Balance",
    desc: "Combining the analytical rigor of Chess & STEAM with the intuitive lateral expressiveness of Music & Fine Arts synchronizes both left and right brain hemispheres.",
    icon: Lightbulb,
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Direct International Tournament Pathways",
    desc: "We don't keep learning inside 4 walls. We actively prepare and register students for official FIDE rated tournaments, Trinity College recitals, and national art competitions.",
    icon: Target,
    accent: "text-sky-400 bg-sky-500/10 border-sky-500/30",
  },
];

export function WhyWiseRoots() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#07111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>The WiseRoots Difference</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Rooted in Wisdom.{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Growing Through Learning.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Nurturing Minds. Strengthening Hearts. Inspiring Futures. Here is how our holistic cognitive environment
            reshapes young lives.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border-white/10 flex items-start gap-5"
            >
              <div
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-lg ${p.accent}`}
              >
                <p.icon className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote / Mission Banner */}
        <div className="mt-16 glass-panel p-8 sm:p-12 rounded-3xl border-emerald-500/30 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl font-medium italic text-slate-200 leading-relaxed">
              &ldquo;Starting with engaging chess classes, WiseRoots helps children build cognitive skills,
              resilience, and decision-making abilities—qualities that traditional schooling often overlooks.
              We&apos;re reshaping the future of learning, one skill at a time.&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                WiseRoots Academy Vision
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Think Smart. Grow Strong. • Educate. Empower. Elevate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
