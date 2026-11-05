import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050c15] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/5 p-1 border border-emerald-500/30">
                <Image
                  src="/logo.png"
                  alt="WiseRoots Global Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-['Cinzel',serif] text-xl font-bold tracking-wide text-white">
                    Wise
                  </span>
                  <span className="font-['Cinzel',serif] text-xl font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    Roots
                  </span>
                </div>
                <p className="text-[9px] tracking-[0.25em] uppercase font-semibold text-emerald-400">
                  Global Academy
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Rooted in Wisdom. Growing Through Learning. India&apos;s premier multi-activity development academy
              providing international-standard coaching in Chess, Music, Creative Arts, and Cognitive STEAM.
            </p>

            <p className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              ✦ Educate. Empower. Elevate. ✦
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#programs" className="hover:text-emerald-400 transition-colors">
                  Chess
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-emerald-400 transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-emerald-400 transition-colors">
                  Art
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-emerald-400 transition-colors">
                  Indoor Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Academy
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {/* <li>
                <Link href="#coaches" className="hover:text-emerald-400 transition-colors">
                  International Mentors
                </Link>
              </li> */}
              <li>
                <Link href="#why-us" className="hover:text-emerald-400 transition-colors">
                  Why WiseRoots
                </Link>
              </li>
              <li>
                <Link href="#expansion" className="hover:text-emerald-400 transition-colors">
                  Request a Branch
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="hover:text-emerald-400 transition-colors">
                  Book Free Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus &amp; Helpline
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Grand Plaza, Khasra No. 1207, Noor Nagar, Raj Nagar Extension, Ghaziabad, UP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+917827590050" className="hover:text-emerald-400 font-semibold text-slate-200">
                  +91 7827590050
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>wiserootsglobalacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 WiseRoots Global Academy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Next-Generation Leaders</span>
            <span className="text-emerald-400 font-semibold">• Think Smart. Grow Strong.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
