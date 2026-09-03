"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Copy, Check, Play, Sparkles } from "lucide-react";

export const DevTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"code" | "bash">("code");
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullCode = `// DEVHACK IIMTU 2026 Config
import { Hackathon } from '@gdg-iimtu/core';

const hackathon = new Hackathon({
  name: "DEVHACK IIMTU 2026",
  motto: "BUILD FOR IMPACT",
  organizer: "GDG on Campus - IIMT",
  venue: "IIMT University, Meerut",
  dates: {
    day1: "18 SEPT - ONLINE BUILD",
    day2: "19 SEPT - OFFLINE FINALE"
  },
  tracks: ["AI", "WEB", "APP", "CLOUD"]
});

hackathon.start(); // 🚀 Ready!`;

  const bashCode = `$ npx create-impact-solution --event=devhack-2026
[✓] Connecting to GDG on Campus - IIMT...
[✓] Venue: IIMT University, Meerut
[✓] 18 Sept (Online) -> 19 Sept (Offline)
[✓] Devfolio Registration: READY 🚀`;

  useEffect(() => {
    let index = 0;
    const targetText = activeTab === "code" ? fullCode : bashCode;
    setTypedText("");

    const interval = setInterval(() => {
      if (index < targetText.length) {
        setTypedText((prev) => prev + targetText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === "code" ? fullCode : bashCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-slate-800 font-mono text-[11px] sm:text-xs md:text-sm text-slate-200 group transition-all duration-300">
      {/* Terminal Window Header */}
      <div className="bg-slate-950/90 px-3 sm:px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] sm:text-xs">
          <button
            onClick={() => setActiveTab("code")}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors ${
              activeTab === "code"
                ? "bg-blue-600 text-white font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>devhack.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("bash")}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors ${
              activeTab === "bash"
                ? "bg-emerald-600 text-white font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Play className="w-3 h-3" />
            <span>build.sh</span>
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-3.5 sm:p-5 overflow-x-auto min-h-[190px] sm:min-h-[220px] bg-slate-900/95 leading-relaxed break-words">
        <pre className="whitespace-pre-wrap font-mono">
          <code>
            {typedText}
            <span className="inline-block w-2 h-3.5 ml-1 bg-blue-500 animate-pulse align-middle"></span>
          </code>
        </pre>
      </div>

      {/* Terminal Footer Info */}
      <div className="px-3 sm:px-4 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>GDG Engine 2026</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Build For Impact</span>
        </div>
      </div>
    </div>
  );
};
