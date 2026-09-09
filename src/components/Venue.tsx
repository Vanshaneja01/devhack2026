"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Building, CheckCircle2 } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Venue: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <span>EVENT LOCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            SEE YOU AT <span className="text-red-600">IIMT UNIVERSITY</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Offline Finale hosted on campus at IIMT University, Meerut on 19 September 2026.
          </p>
        </div>

        {/* Venue Graphic & Details Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Campus Information */}
          <div className="p-8 sm:p-12 md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>OFFLINE FINALE VENUE</span>
              </div>
              <h3 className="text-3xl font-black text-white">
                {eventConfig.location.venue}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {eventConfig.location.address}, {eventConfig.location.city}, {eventConfig.location.state}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>State-of-the-Art Auditorium & Innovation Labs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>High-Speed Network Infrastructure & Developer Stations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Direct Access from NCR & Major Regional Transit Hubs</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={eventConfig.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-lg shadow-red-600/30 hover:shadow-xl transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Campus Visual graphic */}
          <div className="md:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-t md:border-t-0 md:border-l border-slate-800">
            <div className="h-24 sm:h-28 w-auto mb-5 px-6 py-3 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-md shadow-xl">
              <Image
                src="/images/iimtu-logo.webp"
                alt="IIMT University Meerut Logo"
                width={260}
                height={120}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              IIMT University Campus
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              Ganga Nagar, Meerut, Uttar Pradesh 250001
            </div>
            <div className="mt-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
              📍 19 SEPT 2026 — GRAND FINALE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
