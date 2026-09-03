"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code2, CheckCircle2, HeartHandshake, ArrowRight } from "lucide-react";

export const ThemeSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "THINK",
      desc: "Identify real-world problems affecting society, industry, or local communities.",
      icon: Lightbulb,
      color: "bg-blue-500",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      bgSoft: "bg-blue-50",
    },
    {
      num: "02",
      title: "BUILD",
      desc: "Architect clean code, modern UI/UX, and robust tech prototypes.",
      icon: Code2,
      color: "bg-emerald-500",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      bgSoft: "bg-emerald-50",
    },
    {
      num: "03",
      title: "SOLVE",
      desc: "Transform concepts into practical, reliable, and working applications.",
      icon: CheckCircle2,
      color: "bg-amber-500",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      bgSoft: "bg-amber-50",
    },
    {
      num: "04",
      title: "IMPACT",
      desc: "Deliver solutions that make a tangible difference in people's lives.",
      icon: HeartHandshake,
      color: "bg-red-500",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      bgSoft: "bg-red-50",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>THEME & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            BUILD FOR <span className="text-gradient-google">IMPACT</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-800 italic">
            “Don't just build something that works. Build something that matters.”
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At DevHack IIMTU 2026, participants are encouraged to explore technology to solve meaningful problems and create practical, innovative solutions for real-world impact.
          </p>
        </div>

        {/* Connected Node Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`rounded-3xl bg-white border ${step.borderColor} p-6 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between group`}
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-2xl ${step.bgSoft} ${step.textColor}`}>
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl font-extrabold ${step.textColor} mb-2`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow Arrow for desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
