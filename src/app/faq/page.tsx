import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | DEVHACK IIMTU 2026",
  description: "Frequently asked questions and answers regarding DevHack IIMTU 2026.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
