"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, MapPin, Code2 } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Stats: React.FC = () => {
  const statItems = [
    {
      value: eventConfig.stats.studentsOnCampus,
      label: "Students on Campus",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      value: eventConfig.stats.digitalReach,
      label: "Digital Reach",
      icon: Globe,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      value: eventConfig.stats.regionalReach,
      label: "Regional Reach",
      icon: MapPin,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
    },
    {
      value: eventConfig.stats.expectedDevelopers,
      label: "Expected On-site Developers",
      icon: Code2,
      color: "text-red-600",
      bg: "bg-red-50 border-red-100",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            IMPACT IN NUMBERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            REACH & ECOSYSTEM SCALE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm flex flex-col items-center text-center shadow-lg hover:border-slate-600 transition-all"
              >
                <div className={`p-3 rounded-2xl ${item.bg} mb-3`}>
                  <IconComp className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
