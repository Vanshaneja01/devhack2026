import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { JudgesAndSpeakers } from "@/components/JudgesAndSpeakers";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Judges | DEVHACK IIMTU 2026",
  description: "Meet the distinguished judges and technical leaders evaluating projects at DevHack IIMTU 2026.",
};

export default function JudgesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <JudgesAndSpeakers />
      <FinalCTA />
      <Footer />
    </main>
  );
}
