import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Collaborators } from "@/components/Collaborators";
import { Ecosystem } from "@/components/Ecosystem";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Collaborators & Partners | DEVHACK IIMTU 2026",
  description: "Official partners, platforms, and student developer communities collaborating with DevHack IIMTU 2026.",
};

export default function CollaboratorsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <Collaborators />
      <Ecosystem />
      <FinalCTA />
      <Footer />
    </main>
  );
}
