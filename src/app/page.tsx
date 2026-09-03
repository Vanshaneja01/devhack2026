import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ThemeSection } from "@/components/ThemeSection";
import { Tracks } from "@/components/Tracks";
import { Timeline } from "@/components/Timeline";
import { Prizes } from "@/components/Prizes";
import { Judging } from "@/components/Judging";
import { Participants } from "@/components/Participants";
import { WhyDevHack } from "@/components/WhyDevHack";
import { Ecosystem } from "@/components/Ecosystem";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { Venue } from "@/components/Venue";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DevCatWidget } from "@/components/DevCatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-blue-600 selection:text-white relative">
      <Navbar />
      <Hero />
      <About />
      <ThemeSection />
      <Tracks />
      <Timeline />
      <Prizes />
      <Judging />
      <Participants />
      <WhyDevHack />
      <Ecosystem />
      <Stats />
      <FinalCTA />
      <FAQ />
      <Venue />
      <Contact />
      <Footer />
      <DevCatWidget />
    </main>
  );
}
