import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Venue } from "@/components/Venue";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Organizers | DEVHACK IIMTU 2026",
  description: "Get in touch with the student organizers and faculty coordinators of DevHack IIMTU 2026.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] text-slate-900 pt-16">
      <Navbar />
      <Contact />
      <Venue />
      <Footer />
    </main>
  );
}
