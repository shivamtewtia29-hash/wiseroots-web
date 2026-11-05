"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Trophy, ArrowRight, ShieldCheck, MapPin, Star, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-sky-500/15 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Grand Opening Soon • Admissions Open
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Ghaziabad Launch
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Nurturing Young Minds with{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              International-Level
            </span>{" "}
            Mastery &amp; Wisdom.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Starting with high-performance <strong className="text-emerald-400 font-semibold">Chess</strong>,{" "}
            <strong className="text-sky-400 font-semibold">Music</strong>,{" "}
            <strong className="text-amber-400 font-semibold">Art</strong> &amp;{" "}
            <strong className="text-teal-400 font-semibold">Indoor Activities</strong>. Guided directly under certified
            Grandmasters and global trainers.
          </p>

          <p className="mt-3 text-sm font-semibold tracking-wide text-emerald-400/90 italic">
            ✦ Educate. Empower. Elevate. ✦
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#enquiry"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-[0_0_35px_rgba(52,211,153,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Book Free Assessment Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#programs"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span>Explore Programs</span>
          </Link>
        </motion.div>

        {/* Trust Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <div className="glass-panel p-4 rounded-2xl text-center border-emerald-500/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">FIDE / Global</div>
            <p className="text-xs text-slate-400 font-medium mt-1">Certified Coaches</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center border-sky-500/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1 : 6 Max</div>
            <p className="text-xs text-slate-400 font-medium mt-1">Coach-to-Student Ratio</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center border-amber-500/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Multi-City</div>
            <p className="text-xs text-slate-400 font-medium mt-1">Expanding Branch Model</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center border-teal-500/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Age 4 to 18+</div>
            <p className="text-xs text-slate-400 font-medium mt-1">Tailored Age Curriculums</p>
          </div>
        </motion.div>

        {/* Multi-discipline Feature Showcase Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5"
        >
          {/* Card 1: Chess */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-700/20 border border-emerald-400/40 flex items-center justify-center mb-4 text-2xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              ♟️
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
              Chess
            </h3>
            <p className="text-xs text-emerald-400/90 font-semibold mb-2">Tactical Thinking &amp; Tournament Prep</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Openings, middle-game tactics, endgame calculation, and official tournament preparation under rated coaches.
            </p>
          </div>

          {/* Card 2: Music */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/30 to-blue-700/20 border border-sky-400/40 flex items-center justify-center mb-4 text-2xl shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              🎵
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
              Music
            </h3>
            <p className="text-xs text-sky-400/90 font-semibold mb-2">Keyboard, Guitar &amp; Vocals</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instrument mastery, staff notation, rhythm ear-training, and vocal guidance to build stage performance confidence.
            </p>
          </div>

          {/* Card 3: Art */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-700/20 border border-amber-400/40 flex items-center justify-center mb-4 text-2xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              🎨
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
              Art
            </h3>
            <p className="text-xs text-amber-400/90 font-semibold mb-2">Sketching, Painting &amp; Design</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pencil sketching, acrylics, watercolor blending, color theory, and creative visual fine arts for all ages.
            </p>
          </div>

          {/* Card 4: Indoor Activities */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/30 to-emerald-700/20 border border-teal-400/40 flex items-center justify-center mb-4 text-2xl shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              🎲
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
              Indoor Activities
            </h3>
            <p className="text-xs text-teal-400/90 font-semibold mb-2">Speedcubing, Puzzles &amp; Brain Games</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rubik&apos;s cube speed solving, memory challenges, logic deduction puzzles, and interactive mind development games.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
