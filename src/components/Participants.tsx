"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Code, Cpu, Smartphone, Cloud, Palette, Sparkles, Rocket, HeartHandshake } from "lucide-react";

export const Participants: React.FC = () => {
  const roles = [
    { title: "Student Developers", icon: Code, color: "text-blue-600 bg-blue-50 border-blue-100" },
    { title: "Programmers", icon: Code, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { title: "AI Enthusiasts", icon: Cpu, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
    { title: "Web Developers", icon: Sparkles, color: "text-amber-600 bg-amber-50 border-amber-100" },
    { title: "App Developers", icon: Smartphone, color: "text-rose-600 bg-rose-50 border-rose-100" },
    { title: "Cloud Enthusiasts", icon: Cloud, color: "text-sky-600 bg-sky-50 border-sky-100" },
    { title: "Designers & UI/UX", icon: Palette, color: "text-purple-600 bg-purple-50 border-purple-100" },
    { title: "Problem Solvers", icon: HeartHandshake, color: "text-teal-600 bg-teal-50 border-teal-100" },
    { title: "Tech Enthusiasts", icon: Users, color: "text-orange-600 bg-orange-50 border-orange-100" },
    { title: "Aspiring Founders", icon: Rocket, color: "text-blue-600 bg-blue-50 border-blue-100" },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>COMMUNITY & ELIGIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            WHO SHOULD <span className="text-purple-600">JOIN?</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-800">
            “If you have an idea, a skill, or simply the curiosity to build something meaningful — DevHack is for you.”
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {roles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-2xl border ${item.color} flex flex-col items-center justify-center text-center shadow-xs transition-all`}
              >
                <IconComp className="w-6 h-6 mb-2" />
                <span className="text-xs font-extrabold text-slate-800">{item.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
