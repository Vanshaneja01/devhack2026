"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Timeline", href: "#timeline" },
    { name: "Judging", href: "#judging" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Logos & Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/devhack-logo.jpg"
                  alt="DevHack Logo"
                  width={140}
                  height={45}
                  className="h-full w-auto object-contain rounded-md"
                />
              </div>
              <span className="text-slate-700 font-light">|</span>
              <div className="relative h-8 w-auto">
                <Image
                  src="/images/gdg-logo.png"
                  alt="GDG Logo"
                  width={160}
                  height={40}
                  className="h-full w-auto object-contain bg-white/90 p-1 rounded-md"
                />
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              BUILD • SOLVE • INNOVATE
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Organized by {eventConfig.organizer.community} at {eventConfig.organizer.university}.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-1 font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: CTA Unstop */}
          <div className="md:col-span-3 flex flex-col justify-start space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Register Today
            </h4>
            <a
              href={eventConfig.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm text-center shadow-lg transition-all hover:scale-105"
            >
              🚀 Register on Unstop
            </a>
            <span className="text-[11px] text-slate-500 text-center">
              18–19 September 2026 • Hybrid Format
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 DevHack IIMTU. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a
              href={eventConfig.siteUrl}
              className="text-slate-400 hover:text-blue-400 transition-colors font-mono"
            >
              {eventConfig.domain}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>by {eventConfig.organizer.community}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
