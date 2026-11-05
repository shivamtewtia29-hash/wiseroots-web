import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
// import { InternationalCoaches } from "@/components/InternationalCoaches";
import { Programs } from "@/components/Programs";
import { WhyWiseRoots } from "@/components/WhyWiseRoots";
import { BranchExpansion } from "@/components/BranchExpansion";
import { EnquirySection } from "@/components/EnquirySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07111e] text-slate-100 flex flex-col">
      <Navbar />
      <Hero />
      {/* <InternationalCoaches /> (Hidden for now) */}
      <Programs />
      <WhyWiseRoots />
      <BranchExpansion />
      <EnquirySection />
      <Footer />
    </main>
  );
}
