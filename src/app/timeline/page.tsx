import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schedule & Timeline | DEVHACK IIMTU 2026",
  description: "Roadmap and event timeline for DevHack IIMTU 2026: 18 Sept (Online Build) & 19 Sept (Offline Finale).",
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <Timeline />
      <FinalCTA />
      <Footer />
    </main>
  );
}
