"use client";

import React from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Globe2,
} from "lucide-react";
import { eventConfig } from "@/config/eventConfig";
import { DevTerminal } from "./DevTerminal";

export const Hero: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 md:pt-44 pb-16 md:pb-28 overflow-hidden bg-white"
    >
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400/15 rounded-full filter blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-400/15 rounded-full filter blur-3xl pointer-events-none -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Top Google Colors Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-800 w-fit max-w-full">
              <div className="flex items-center gap-1 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="truncate text-slate-700">GDG on Campus – IIMT, Meerut</span>
            </div>

            {/* Main Title & Tagline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                DEVHACK <span className="text-blue-600">IIMTU</span> 2026
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-google tracking-tight">
                “{eventConfig.tagline}”
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              {eventConfig.subtitle}
            </p>

            {/* Dates & Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-3">
              {/* Date & Location Line */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-bold text-slate-900">
                <div className="flex items-center gap-2 text-blue-600">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{eventConfig.dates.heroDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>📍 {eventConfig.location.venue}</span>
                </div>
              </div>

              {/* Format Badge Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-100/70 border border-blue-200 text-xs font-bold text-blue-900">
                  <Globe2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{eventConfig.dates.onlineBuild}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs font-bold text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{eventConfig.dates.offlineFinale}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={eventConfig.devfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-base px-8 py-4 text-center shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5"
              >
                <span>🚀 REGISTER ON DEVFOLIO</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#about"
                className="rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base px-6 py-4 text-center border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>EXPLORE DEVHACK</span>
                <ChevronDown className="w-5 h-5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Dev Terminal */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <DevTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
