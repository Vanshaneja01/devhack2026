import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Tracks } from "@/components/Tracks";
import { ThemeSection } from "@/components/ThemeSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tracks & Domains | DEVHACK IIMTU 2026",
  description: "Explore the 4 hackathon tracks at DevHack IIMTU 2026: AI, Web, App, and Cloud.",
};

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <Tracks />
      <ThemeSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
