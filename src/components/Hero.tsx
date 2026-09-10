"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Globe2,
  Code2,
  Terminal as TerminalIcon,
  Zap,
} from "lucide-react";
import { eventConfig } from "@/config/eventConfig";
import { DevTerminal } from "./DevTerminal";

export const Hero: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 md:pt-44 pb-16 md:pb-28 overflow-hidden bg-white"
    >
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Glow Orbs */}
      <div className="absolute top-16 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full filter blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-36 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-400/20 rounded-full filter blur-3xl pointer-events-none -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Headlines & Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Top Logo Banner Lockup with Live Status */}
            <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs w-fit max-w-full">
              <div className="h-6 sm:h-7 w-auto flex items-center pl-1">
                <Image
                  src="/images/gdg-logo.png"
                  alt="Google Developer Group On Campus - IIMT, Meerut"
                  width={140}
                  height={35}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-slate-300 font-light">|</span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Registrations Open</span>
              </div>
            </div>

            {/* Official DevHack Hero Brand Image & Titles */}
            <div className="space-y-3">
              <div className="relative h-14 sm:h-20 md:h-22 w-auto max-w-xs sm:max-w-md">
                <Image
                  src="/images/devhack-logo.jpg"
                  alt="DevHack IIMT University, Meerut"
                  width={380}
                  height={100}
                  className="h-full w-auto object-contain object-left"
                  priority
                />
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                DEVHACK <span className="text-blue-600">IIMTU</span> 2026
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-google tracking-tight mt-1">
                  “{eventConfig.tagline}”
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              {eventConfig.subtitle}
            </p>

            {/* Event Dates & Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-2xs space-y-3">
              {/* Date & Location Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-900">
                <div className="flex items-center gap-2 text-blue-600">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{eventConfig.dates.heroDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="truncate">{eventConfig.location.venue}</span>
                </div>
              </div>

              {/* Format Badge Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-100/70 border border-blue-200/80 text-xs font-bold text-blue-900">
                  <Globe2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{eventConfig.dates.onlineBuild}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-100/70 border border-emerald-200/80 text-xs font-bold text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{eventConfig.dates.offlineFinale}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Unstop CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={eventConfig.unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="w-full sm:w-auto rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 text-center shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
              >
                <span>🚀 REGISTER ON UNSTOP</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto rounded-2xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-sm sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 text-center border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>EXPLORE DEVHACK</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                </a>
            </div>
          </motion.div>

          {/* Right Column: Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <DevTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
