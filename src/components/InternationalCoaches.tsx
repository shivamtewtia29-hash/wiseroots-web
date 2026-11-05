"use client";

import { motion } from "framer-motion";
import { Award, Globe, Star, Users, CheckCircle, Shield, ArrowUpRight } from "lucide-react";

const coaches = [
  {
    role: "Head of Chess & Strategy",
    name: "Grandmaster & FIDE Trainers",
    title: "International Master / Senior FIDE Coach",
    rating: "Peak FIDE 2450+",
    experience: "15+ Years Global Coaching",
    highlights: [
      "Mentored National & Asian Youth Champions",
      "Specialized in Opening Repertoires & Endgame Calculation",
      "Psychological Grit & Tournament Simulation",
    ],
    avatarGradient: "from-emerald-500/30 to-teal-800/40",
    badge: "FIDE Certified",
    icon: "♟️",
  },
  {
    role: "Head of Music & Rhythm",
    name: "Master Concert Mentors",
    title: "Trinity College London / Berklee Certified",
    rating: "Grade 8 Classical & Contemporary",
    experience: "12+ Years Performing Arts",
    highlights: [
      "Multi-instrument fluency (Keyboard, Guitar, Percussion)",
      "Cognitive Auditory Training & Ear Tuning",
      "Stage Performance & Solo/Ensemble Mastery",
    ],
    avatarGradient: "from-sky-500/30 to-blue-800/40",
    badge: "Trinity / Global Fellow",
    icon: "🎵",
  },
  {
    role: "Head of Visual Arts & Creativity",
    name: "Award-Winning Fine Arts Masters",
    title: "MFA / International Exhibitor & Mentor",
    rating: "Exhibited Across 6+ Countries",
    experience: "10+ Years Creative Education",
    highlights: [
      "Classical Drawing, Modern Acrylics & Mixed Media",
      "Lateral Thinking & Visual Problem Solving",
      "Portfolio Curation for International Art Foundations",
    ],
    avatarGradient: "from-amber-500/30 to-orange-800/40",
    badge: "International Exhibitor",
    icon: "🎨",
  },
  {
    role: "Head of Cognitive STEAM & Logic",
    name: "Speedcubing & Brain Trainers",
    title: "WCA Speedcubing Specialist & Math Lead",
    rating: "Sub-10s Rubik's Master / Mental Math",
    experience: "8+ Years Youth Cognitive Coaching",
    highlights: [
      "Advanced CFOP & Blindfolded Solving Techniques",
      "Spatial Intelligence & Rapid Pattern Recognition",
      "Foundational Logic for Future Coding & Robotics",
    ],
    avatarGradient: "from-teal-500/30 to-emerald-800/40",
    badge: "WCA Specialist",
    icon: "🎲",
  },
];

export function InternationalCoaches() {
  return (
    <section id="coaches" className="py-24 relative overflow-hidden bg-[#07111e]/90">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>World-Class Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coached Directly Under{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              International-Level
            </span>{" "}
            Mentors
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            We do not compromise with basic amateur tutoring. WiseRoots brings internationally certified masters, FIDE
            rated trainers, and seasoned artists to shape your child&apos;s analytical depth and creative confidence.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border-white/10 group relative"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {c.badge}
                  </span>
                </div>

                {/* Role & Title */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {c.role}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-emerald-400/90 font-medium mt-0.5">{c.title}</p>

                {/* Rating & Experience Tag */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">{c.rating}</span>
                  <span className="text-slate-400">{c.experience}</span>
                </div>

                {/* Highlights List */}
                <ul className="mt-5 space-y-2">
                  {c.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Batch Info */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Max 6 per batch</span>
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                  1-on-1 Available
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Standard Guarantees */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border-emerald-500/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Global Accreditation &amp; Rating</h4>
              <p className="text-xs text-slate-300 mt-1">
                Curriculums aligned with official international bodies (FIDE for Chess, Trinity for Music, WCA for Cubing).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0 text-sky-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Personalized Growth Tracking</h4>
              <p className="text-xs text-slate-300 mt-1">
                Every student receives monthly diagnostic report cards covering tactical skill, emotional composure &amp; speed.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-300">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Championship Pipeline</h4>
              <p className="text-xs text-slate-300 mt-1">
                Guaranteed exposure to district, national, and international tournament circuits with dedicated coach accompaniment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
