import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Prizes } from "@/components/Prizes";
import { Judging } from "@/components/Judging";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prizes & Judging | DEVHACK IIMTU 2026",
  description: "Exciting prizes, recognition categories, and evaluation criteria for DevHack IIMTU 2026.",
};

export default function PrizesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <Prizes />
      <Judging />
      <FinalCTA />
      <Footer />
    </main>
  );
}
