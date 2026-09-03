"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Target, Presentation, Cpu, CheckCircle2 } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Judging: React.FC = () => {
  const iconMap: Record<string, any> = {
    Sparkles,
    Code2,
    Target,
    Presentation,
    Cpu,
  };

  return (
    <section id="judging" className="py-20 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>EVALUATION FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            YOUR CODE. YOUR IDEA. <span className="text-blue-600">YOUR IMPACT.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Projects will be evaluated by an experienced judging panel during the Offline Finale on 19 September 2026 at IIMT University, Meerut.
          </p>
        </div>

        {/* 5 Evaluation Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventConfig.judgingCriteria.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Score bar indicator visual (no fabricated numerical weightage) */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-full"></div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">Evaluated Live</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
