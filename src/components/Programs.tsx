"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Clock, Users, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "chess",
    title: "Chess",
    tagline: "From First Moves to FIDE Tournament Mastery",
    icon: "♟️",
    color: "emerald",
    accent: "from-emerald-400 to-teal-500",
    bgBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    overview:
      "Crafted by International Masters to build spatial visualization, anticipatory thinking, resilience, and calm decision-making under clock pressure.",
    levels: [
      {
        name: "Foundation (Age 4–7)",
        focus: "Piece geometry, basic checkmates, board vision, chess etiquette.",
      },
      {
        name: "Intermediate (Tactical)",
        focus: "Forks, pins, skewers, opening principles, middle-game attacking plans.",
      },
      {
        name: "Elite / Tournament (FIDE Prep)",
        focus: "Deep calculation trees, endgame technique, dynamic defense, official ratings.",
      },
    ],
    skills: [
      "Calculation Depth",
      "Patience & Concentration",
      "Emotional Control",
      "Pattern Recognition",
    ],
  },
  {
    id: "music",
    title: "Music",
    tagline: "Harmonic Auditory Intelligence & Stage Poise",
    icon: "🎵",
    color: "sky",
    accent: "from-sky-400 to-blue-500",
    bgBadge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    overview:
      "A structured curriculum blending classical keyboard, acoustic guitar, and rhythm ear-training to stimulate neuroplasticity and emotional poise.",
    levels: [
      {
        name: "Melody Starters (Age 5+)",
        focus: "Finger dexterity, rhythm claps, basic solfège, keyboard exploration.",
      },
      {
        name: "Applied Instrumentalist",
        focus: "Two-hand coordination, staff notation reading, dynamic phrasing.",
      },
      {
        name: "Trinity / Performance Track",
        focus: "Classical & contemporary exam syllabuses, stage solo recitals.",
      },
    ],
    skills: [
      "Bilateral Brain Coordination",
      "Auditory Memory",
      "Expressive Confidence",
      "Discipline & Practice Habit",
    ],
  },
  {
    id: "art",
    title: "Art",
    tagline: "Unlocking Creative Lateral Thinking & Fine Arts",
    icon: "🎨",
    color: "amber",
    accent: "from-amber-400 to-orange-500",
    bgBadge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    overview:
      "Transcend boring coloring books. Students learn perspective, color psychology, character design, and fine arts techniques under master exhibitors.",
    levels: [
      {
        name: "Visual Explorer (Age 4–8)",
        focus: "Color discovery, finger sculpting, texture mixed media, motor control.",
      },
      {
        name: "Studio Techniques (Age 9–14)",
        focus: "Perspective drawing, light & shadow hatching, acrylic blending.",
      },
      {
        name: "Mastery & Portfolio",
        focus: "Concept design, abstract expressionism, exhibition curation.",
      },
    ],
    skills: [
      "Visual-Spatial Reasoning",
      "Lateral Thinking",
      "Fine Motor Control",
      "Aesthetic Originality",
    ],
  },
  {
    id: "steam",
    title: "Indoor Activities",
    tagline: "Speedcubing, Logic Puzzles & Brain Games",
    icon: "🎲",
    color: "teal",
    accent: "from-teal-400 to-emerald-500",
    bgBadge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    overview:
      "A fast-paced brain gym featuring Rubik's cube speed solving, logic deduction matrices, and fun interactive cognitive puzzles.",
    levels: [
      {
        name: "Cube Novice (Age 6+)",
        focus: "3x3 Layer-by-layer solving, notation literacy, muscle memory.",
      },
      {
        name: "Speedcubing (CFOP)",
        focus: "Cross efficiency, F2L lookahead, OLL/PLL algorithms, timer practice.",
      },
      {
        name: "Logic & Code Pre-requisites",
        focus: "Deductive matrices, spatial rotation, algorithmic thinking for future STEAM.",
      },
    ],
    skills: [
      "Algorithmic Thinking",
      "Sub-20s Reaction Speed",
      "Spatial Memory",
      "Frustration Tolerance",
    ],
  },
];

export function Programs() {
  const [activeTab, setActiveTab] = useState("chess");
  const activeProgram = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Structured Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Programs Built for{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Lifelong Excellence
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Every program features structured grading, progress tracking, and regular evaluation milestones.
            Choose a pillar to explore our curriculum.
          </p>
        </div>

        {/* Program Selectors / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeTab === p.id
                  ? "bg-white/10 text-white border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-105"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <span className="text-xl">{p.icon}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Active Program Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border-emerald-500/20 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Info & Overview */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-slate-300">
                  <span>{activeProgram.icon}</span>
                  <span>{activeProgram.tagline}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {activeProgram.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeProgram.overview}
                </p>

                {/* Cognitive Skills Gained */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                    Cognitive Skills Developed
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeProgram.skills.map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#enquiry"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Enrol in {activeProgram.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/917827590050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-emerald-500/40"
                  >
                    <span>Speak to Counselor</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Progressive Levels */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Progressive Learning Levels
                </h4>

                {activeProgram.levels.map((lvl, index) => (
                  <div
                    key={lvl.name}
                    className="glass-panel p-5 sm:p-6 rounded-2xl border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold flex items-center justify-center">
                          0{index + 1}
                        </span>
                        <h5 className="text-base font-bold text-white">{lvl.name}</h5>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Structured Tier
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 pl-10 leading-relaxed">
                      {lvl.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
