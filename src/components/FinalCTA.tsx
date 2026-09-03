"use client";

import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const FinalCTA: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-10 sm:p-16 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center space-y-6">
          {/* Background Decorative Rings */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>JOIN DEVHACK IIMTU 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-3xl leading-tight">
            READY TO <span className="text-amber-300">BUILD FOR IMPACT?</span>
          </h2>

          <p className="text-base sm:text-xl text-blue-100 max-w-2xl font-medium">
            Your next idea could become someone's solution.
          </p>

          <div className="pt-4">
            <a
              href={eventConfig.devfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="inline-flex items-center gap-3 rounded-2xl bg-white hover:bg-slate-100 text-blue-700 font-extrabold text-lg sm:text-xl px-10 py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>🚀 REGISTER ON DEVFOLIO</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-blue-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>18–19 SEPTEMBER 2026</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>IIMT UNIVERSITY, MEERUT</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
