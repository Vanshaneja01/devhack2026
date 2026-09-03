"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Layers, ArrowUpRight } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>TRACKS & DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            BUILD <span className="text-blue-600">YOUR WAY</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose your focus area or combine multiple domains to build innovative solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventConfig.tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-white flex items-center justify-center text-3xl shadow-xs transition-colors">
                    {track.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {track.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {track.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1 text-slate-700">
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  <span>Open Domain</span>
                </span>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Non-restrictive Note Badge */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
            💡
          </div>
          <p className="text-sm font-medium text-slate-700 text-left">
            <span className="font-bold text-slate-900">Flexible & Open Exploration:</span>{" "}
            Participants are free to explore emerging technologies and combine multiple technologies in their projects without domain restrictions.
          </p>
        </div>
      </div>
    </section>
  );
};
