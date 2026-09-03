"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Gift, CheckCircle, Sparkles } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Prizes: React.FC = () => {
  const { prizeConfig } = eventConfig;

  return (
    <section id="prizes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <span>RECOGNITION & AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            BUILD. COMPETE. <span className="text-gradient-google">GET RECOGNIZED.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Showcase your skills and take home top honors across multiple categories.
          </p>

          {/* Configurable Prize Pool Alert Banner (Only shown if showPrizePool === true) */}
          {prizeConfig.showPrizePool && prizeConfig.prizePoolAmount && (
            <div className="inline-block p-4 rounded-2xl bg-amber-500/10 border border-amber-400 text-amber-900 font-extrabold text-xl mt-4">
              🎉 Total Prize Pool: {prizeConfig.prizePoolAmount}
            </div>
          )}
        </div>

        {/* Prize Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {prizeConfig.categories.slice(0, 3).map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border border-slate-200 p-8 bg-gradient-to-b from-slate-50 to-white shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between ${
                idx === 0 ? "md:-translate-y-3 border-amber-300 ring-2 ring-amber-400/30" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl shadow-inner">
                    {cat.icon}
                  </div>
                  {idx === 0 && (
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-xs">
                      Grand Champion
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-blue-600">
                  <Trophy className="w-4 h-4" />
                  <span>Official Trophy & Certificate</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Track Awards Grid (Best AI & Best Innovation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {prizeConfig.categories.slice(3).map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200/90 p-6 bg-slate-50/50 hover:bg-white shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shrink-0 shadow-xs">
                {cat.icon}
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-1">
                  {cat.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Recognition Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>SPECIAL RECOGNITION</span>
            </div>
            <h3 className="text-2xl font-bold">Certificates & Community Honors</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              {prizeConfig.specialRecognitionText}
            </p>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-sm text-slate-200">
            Participation & Merit Certificates
          </div>
        </div>
      </div>
    </section>
  );
};
