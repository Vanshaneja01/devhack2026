"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Globe } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const SocialToast: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-3 sm:left-6 z-50 w-72 sm:w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 text-slate-800 text-xs relative overflow-hidden animate-in fade-in slide-in-from-left-3 duration-300">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        title="Close prompt"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex items-center gap-2 mb-2 pr-6">
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>
        <div>
          <div className="font-extrabold text-slate-900 text-xs">Connect with GDG IIMT</div>
          <div className="text-[10px] text-slate-500 font-medium">Follow for updates & community news</div>
        </div>
      </div>

      <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
        Stay tuned for workshops, mentorship sessions & event announcements!
      </p>

      <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
        {eventConfig.socials.instagram && (
          <a
            href={eventConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 border border-slate-200/80 font-bold flex items-center justify-center gap-1 transition-all text-[11px]"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        )}
        {eventConfig.socials.linkedin && (
          <a
            href={eventConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 font-bold flex items-center justify-center gap-1 transition-all text-[11px]"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
        )}
        {eventConfig.socials.gdgCommunity && (
          <a
            href={eventConfig.socials.gdgCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 flex items-center justify-center transition-all text-[11px]"
            title="GDG Community Dashboard"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
          </a>
        )}
      </div>
    </div>
  );
};
