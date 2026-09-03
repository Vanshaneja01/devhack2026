"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export const DevCatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catSpeech, setCatSpeech] = useState(
    "Meow! Welcome to DevHack 2026. Ready to build for impact? 🐱💻"
  );

  const tips = [
    "Tip: You can build projects in AI, Web, App, or Cloud! 🚀",
    "Day 1 is Online Build, Day 2 is Offline Finale at IIMT University! 📍",
    "Don't forget to submit your GitHub repo & demo video on 18 Sept! 💻",
    "Organized by GDG on Campus - IIMT, Meerut! 💙❤️💛💚",
  ];

  const handleNextTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCatSpeech(randomTip);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Speech Bubble Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-2.5 w-64 sm:w-72 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 text-xs text-slate-700 relative group"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 active:scale-95"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="text-lg sm:text-xl">🐱</div>
              <div className="flex-1 pr-3">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                  <span>DevCat Assistant</span>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </div>
                <p className="leading-relaxed text-slate-600 mb-2 text-[11px] sm:text-xs">
                  {catSpeech}
                </p>
                <button
                  onClick={handleNextTip}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 active:scale-95"
                >
                  <span>Another tip ✨</span>
                </button>
              </div>
            </div>
            {/* Arrow tail */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cat Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) handleNextTip();
        }}
        className="relative bg-white border border-slate-200 shadow-lg rounded-full p-2 sm:p-2.5 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
        title="Developer Cat Easter Egg"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white text-base sm:text-lg shadow-xs">
          🐱
        </div>
        <div className="hidden sm:flex flex-col text-left pr-2">
          <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">
            DevCat
          </span>
          <span className="text-xs font-semibold text-slate-700">Coding Buddy</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1 right-1 border-2 border-white animate-pulse"></div>
      </motion.button>
    </div>
  );
};
