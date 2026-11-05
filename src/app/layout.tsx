import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wiserootsglobalacademy.com"),
  title: "WiseRoots Global Academy | Educate. Empower. Elevate.",
  description:
    "India's premier next-generation multi-activity academy offering International-level mentorship in Chess, Music, Art, and Cognitive STEAM. Think Smart. Grow Strong.",
  keywords: [
    "WiseRoots Global Academy",
    "WiseRoots Academy",
    "Chess Academy",
    "International Chess Coaches",
    "Music Classes Ghaziabad",
    "Creative Arts Academy",
    "Brain Development",
    "Raj Nagar Extension",
    "Ghaziabad",
    "FIDE Rated Mentors",
  ],
  authors: [{ name: "WiseRoots Global Academy" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "WiseRoots Global Academy | Rooted in Wisdom. Growing Through Learning.",
    description:
      "A next-generation space that empowers young minds with International-level coaching in Chess, Music, Art, and Cognitive Development.",
    url: "https://wiserootsglobalacademy.com",
    siteName: "WiseRoots Global Academy",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable} dark`}>
      <body className="min-h-screen bg-[#07111e] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
