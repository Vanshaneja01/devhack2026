"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Building2, Laptop, Award, ArrowUpRight, Users2, ShieldCheck } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>ABOUT DEVHACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            WHAT IS <span className="text-blue-600">DEVHACK?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            DevHack IIMTU 2026 is a developer-focused hackathon organized by{" "}
            <span className="font-bold text-slate-900">{eventConfig.organizer.community}</span>, bringing together student developers, innovators and technology enthusiasts to build meaningful solutions to real-world problems.
          </p>
        </div>

        {/* 2-Day Hybrid Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* DAY 01 CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
                  <span>DAY 01</span>
                </div>
                <div className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  {eventConfig.dates.day1Date}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 flex items-center justify-center text-blue-600">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">ONLINE BUILD</h3>
                  <div className="text-xs font-semibold text-slate-500">Remote Development & Mentorship</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Participants build their projects remotely and work on their solutions with access to online mentorship. Connect with mentors, refine your prototype, and prepare your project submission.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Format: Remote Build</span>
              </span>
              <span className="text-blue-600 font-bold">18 Sept 2026</span>
            </div>
          </motion.div>

          {/* DAY 02 CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
                  <span>DAY 02</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                  {eventConfig.dates.day2Date}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-emerald-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">OFFLINE FINALE</h3>
                  <div className="text-xs font-semibold text-slate-500">On Campus Evaluation</div>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Shortlisted teams come to <span className="font-semibold text-slate-900">IIMT University, Meerut</span> for project demonstrations, evaluation, interaction with judges, networking, and grand recognition.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Venue: IIMT University</span>
              </span>
              <span className="text-emerald-600 font-bold">19 Sept 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
