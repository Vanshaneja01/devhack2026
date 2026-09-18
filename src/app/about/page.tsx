import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { ThemeSection } from "@/components/ThemeSection";
import { Ecosystem } from "@/components/Ecosystem";
import { Venue } from "@/components/Venue";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | DEVHACK IIMTU 2026",
  description: "Learn about DevHack IIMTU 2026, the developer-focused hackathon organized by GDG on Campus IIMT University.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <About />
      <ThemeSection />
      <Ecosystem />
      <Venue />
      <FinalCTA />
      <Footer />
    </main>
  );
}
