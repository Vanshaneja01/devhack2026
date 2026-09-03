"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 sm:py-20 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <span>SCHEDULE & MILESTONES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            EVENT <span className="text-emerald-600">TIMELINE</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Key dates and roadmap for DevHack IIMTU 2026.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (left-4 on mobile, center on sm+) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 rounded-full transform sm:-translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {eventConfig.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Circle Node */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 top-1">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xs ${
                        item.isKeyMilestone ? "bg-blue-600 scale-105" : "bg-slate-700"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Card Content Box */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 w-[calc(100%-2.5rem)] ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"
                    }`}
                  >
                    <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-xs hover:shadow-md transition-all group relative">
                      {/* Date Badge */}
                      <div
                        className={`inline-flex flex-wrap items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-black uppercase mb-2.5 ${
                          isEven ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>
                          {item.date} {item.month}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
