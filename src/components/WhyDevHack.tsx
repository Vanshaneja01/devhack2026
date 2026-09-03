"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, BookOpen, Users, Trophy, MonitorPlay, Zap } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const WhyDevHack: React.FC = () => {
  const iconMap: Record<string, any> = {
    Hammer,
    BookOpen,
    Users,
    Trophy,
    MonitorPlay,
    Zap,
  };

  const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
    yellow: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
  };

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            WHY <span className="text-blue-600">DEVHACK?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            6 core reasons to participate, build, and level up your software engineering journey.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventConfig.whyJoin.map((item) => {
            const IconComp = iconMap[item.icon] || Hammer;
            const style = colorStyles[item.color] || colorStyles.blue;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>DevHack Pillar</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
