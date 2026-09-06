"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users2 } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>BACKED BY INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            POWERED BY A <span className="text-blue-600">STRONG ECOSYSTEM</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Backed by premier university leadership, developer community strength, and business incubation support.
          </p>
        </div>

        {/* 2 Main Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: IIMT Business Incubation Foundation */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md shadow-blue-500/20">
                🏛️
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                Incubation & Innovation Partner
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-3">
                {eventConfig.organizer.incubation}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Supporting innovation, entrepreneurship and student-led ideas through a strong incubation ecosystem. Providing guidance, mentorship, and venture acceleration for high-impact prototypes.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-blue-600" />
              <span>Student Entrepreneurship Hub</span>
            </div>
          </motion.div>

          {/* Card 2: GDG on Campus – IIMT, Meerut */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 p-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-auto mb-6 flex items-center">
                <Image
                  src="/images/gdg-logo.png"
                  alt="Google Developer Group Logo"
                  width={220}
                  height={50}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Organizing Developer Community
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-3">
                {eventConfig.organizer.community}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Driving technical growth, collaborative learning, and hands-on developer experiences at IIMT University, Meerut. Bringing student innovators together to build scalable technology solutions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
              <Users2 className="w-4 h-4 text-emerald-600" />
              <span>University Developer Chapter</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
