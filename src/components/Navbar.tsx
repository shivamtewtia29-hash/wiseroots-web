"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Sparkles, MapPin, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07111e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Brand Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white/5 p-1 border border-emerald-500/30 group-hover:border-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Image
                src="/logo.png"
                alt="WiseRoots Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-['Cinzel',serif] text-2xl sm:text-2xl font-black tracking-wide text-white">
                  Wise
                </span>
                <span className="font-['Cinzel',serif] text-2xl sm:text-2xl font-black tracking-wide bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  Roots
                </span>
              </div>
              <p className="text-[10px] tracking-[0.28em] uppercase font-semibold text-emerald-400/90 -mt-0.5">
                Global Academy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="#programs"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Programs
            </Link>
            {/* <Link
              href="#coaches"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>International Coaches</span>
              <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                FIDE/Master
              </span>
            </Link> */}
            <Link
              href="#why-us"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Why WiseRoots
            </Link>
            <Link
              href="#expansion"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Branches &amp; Expansion</span>
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917827590050?text=Hi%20WiseRoots%20Academy,%20I%20would%20like%20to%20enquire%20about%20admissions%20and%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 7827590050</span>
            </a>

            <Link
              href="#enquiry"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 shadow-[0_0_25px_rgba(52,211,153,0.35)] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span>Book Free Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <Link
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Programs
            </Link>
            {/* <Link
              href="#coaches"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg flex items-center justify-between"
            >
              <span>International Coaches</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-300">
                FIDE/Master
              </span>
            </Link> */}
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Why WiseRoots
            </Link>
            <Link
              href="#expansion"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Branches &amp; Expansion
            </Link>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/917827590050"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-white/5 border border-white/10 text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call / WhatsApp: +91 7827590050</span>
              </a>
              <Link
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-bold"
              >
                <span>Book Free Demo Session</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
